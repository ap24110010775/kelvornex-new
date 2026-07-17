import { useEffect, useState, useRef } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // phases:
  // 0 → orbits draw in (0–1.2s)
  // 1 → core + dots pop in (1.2–2.0s)
  // 2 → "KELVORNEX" slides in to the RIGHT of logo (2.0–2.6s)
  // 3 → fly to exact navbar logo position (2.6–3.5s)
  // 4 → fade out (3.5–4.0s)
  const [phase, setPhase] = useState(0);
  const groupRef = useRef<HTMLDivElement>(null);
  const [flyStyle, setFlyStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2000);

    const t3 = setTimeout(() => {
      // Measure actual positions at the moment of flight
      const navLogo = document.getElementById("navbar-logo-link");
      const group = groupRef.current;

      if (navLogo && group) {
        const navRect = navLogo.getBoundingClientRect();
        const groupRect = group.getBoundingClientRect();

        // Scale so the splash group height matches the navbar logo height
        const scale = navRect.height / groupRect.height;

        // With transformOrigin "top left":
        // translate moves the top-left corner to the target position
        const tx = navRect.left - groupRect.left;
        const ty = navRect.top - groupRect.top;

        setFlyStyle({
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
          transformOrigin: "top left",
          transition: "transform 0.85s cubic-bezier(0.4, 0, 0.2, 1)",
        });
      }

      setPhase(3);
    }, 2600);

    const t4 = setTimeout(() => setPhase(4), 3550);
    const t5 = setTimeout(() => onComplete(), 4000);

    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
      style={{
        opacity: phase === 4 ? 0 : 1,
        transition: phase === 4 ? "opacity 0.5s ease-in-out" : "none",
        pointerEvents: phase === 4 ? "none" : "all",
      }}
    >
      {/* ── Logo + Brand name group ── */}
      <div
        ref={groupRef}
        style={{
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "14px",
          // flyStyle only applied in phase 3+
          ...(phase >= 3 ? flyStyle : {}),
        }}
      >
        {/* ── SVG Logo 140×140 ── */}
        <svg
          viewBox="0 0 100 100"
          width="140"
          height="140"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, display: "block" }}
        >
          {/* ── 4 orbital ellipses: 0°, 45°, 90°, 135° ── */}
          <g stroke="#000000" strokeWidth="3" fill="none">
            <ellipse cx="50" cy="50" rx="42" ry="14"
              strokeDasharray="215"
              strokeDashoffset={phase >= 1 ? 0 : 215}
              style={{ transition: "stroke-dashoffset 0.5s ease 0s" }}
            />
            <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(45 50 50)"
              strokeDasharray="215"
              strokeDashoffset={phase >= 1 ? 0 : 215}
              style={{ transition: "stroke-dashoffset 0.5s ease 0.1s" }}
            />
            <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(90 50 50)"
              strokeDasharray="215"
              strokeDashoffset={phase >= 1 ? 0 : 215}
              style={{ transition: "stroke-dashoffset 0.5s ease 0.2s" }}
            />
            <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(135 50 50)"
              strokeDasharray="215"
              strokeDashoffset={phase >= 1 ? 0 : 215}
              style={{ transition: "stroke-dashoffset 0.5s ease 0.3s" }}
            />
          </g>

          {/* ── Star of David + grey inner triangle (all inside orbits) ── */}
          <g style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.2)",
            transformOrigin: "50px 50px",
            transition: "opacity 0.35s ease 0.45s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.45s",
          }}>
            {/* Upward solid-black triangle */}
            <path d="M50 38 L60.5 56 L39.5 56 Z" fill="#000000" />
            {/* Downward solid-black triangle */}
            <path d="M50 62 L60.5 44 L39.5 44 Z" fill="#000000" />
            {/* Light grey upward triangle in centre hexagon */}
            <path d="M50 44 L54 56 L46 56 Z" fill="#C0C0C0" />
          </g>

          {/* ── 3 electron dots: top-left, top-right, bottom-right ── */}
          <circle cx="21" cy="22" r="5.5" fill="#000000" style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0)",
            transformOrigin: "21px 22px",
            transition: "opacity 0.3s 0.55s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.55s",
          }}/>
          <circle cx="79" cy="22" r="5.5" fill="#000000" style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0)",
            transformOrigin: "79px 22px",
            transition: "opacity 0.3s 0.65s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.65s",
          }}/>
          <circle cx="74" cy="82" r="5.5" fill="#000000" style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0)",
            transformOrigin: "74px 82px",
            transition: "opacity 0.3s 0.75s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.75s",
          }}/>
        </svg>

        {/* ── Brand name: slides in to the RIGHT at phase 2 ──
            Navbar uses: text-2xl (24px) font-extrabold tracking-tight text-black
            Logo is 140px tall, navbar logo (w-9) is 36px tall → scale = 36/140 = 0.257
            So font here = 24 / 0.257 = ~93px to appear identical after scale
        */}
        <div style={{
          overflow: "hidden",
          maxWidth: phase >= 2 ? "520px" : "0px",
          opacity: phase >= 2 ? 1 : 0,
          transition: "max-width 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
          whiteSpace: "nowrap",
        }}>
          <span style={{
            display: "block",
            fontSize: "62px",
            fontWeight: 800,           /* font-extrabold */
            letterSpacing: "-0.025em", /* tracking-tight */
            color: "#000000",          /* text-black */
            fontFamily: "'Inter', 'ui-sans-serif', system-ui, -apple-system, sans-serif",
            lineHeight: 1,
          }}>
            KELVORNEX
          </span>
        </div>
      </div>

      {/* ── Cyan progress bar ── */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-[#00ccff]"
        style={{
          width: phase === 0 ? "15%" : phase === 1 ? "45%" : phase === 2 ? "75%" : "100%",
          transition: "width 0.6s ease",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
