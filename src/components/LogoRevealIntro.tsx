import { useEffect, useState } from "react";

interface LogoRevealIntroProps {
  onFinish?: () => void;
}

export default function LogoRevealIntro({ onFinish }: LogoRevealIntroProps) {
  const [stageTwo, setStageTwo] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // If the user already saw the intro, skip animations on subsequent visits.
    try {
      const seen = localStorage.getItem("seenLogoIntro");
      if (seen === "true") {
        setStageTwo(true);
        setVisible(false);
        onFinish?.();
        return;
      }
    } catch (e) {
      // ignore localStorage errors (e.g., SSR or privacy settings)
    }
    const t1 = setTimeout(() => setStageTwo(true), 1600);
    const t2 = setTimeout(() => {
      setVisible(false);
      try {
        localStorage.setItem("seenLogoIntro", "true");
      } catch (e) {}
      onFinish?.();
    }, 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" aria-hidden="true">
      <div className="relative flex items-center justify-center w-full max-w-5xl px-6">
        <div className="absolute w-96 h-96 rounded-full bg-white/8 blur-3xl animate-pulse-ring" />

        <div
          className={`relative flex items-center justify-center w-full transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            stageTwo ? "md:justify-start" : "justify-center"
          }`}
        >
          {/* Stage 1: large centered logo -> Stage 2: smaller left logo */}
          <div
            className={`relative transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stageTwo
                ? "scale-[0.62] sm:scale-[0.7] md:scale-[0.78] md:-translate-x-12"
                : "scale-100 translate-x-0"
            }`}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 text-white drop-shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
              fill="none"
            >
              {/* ── 3 orbital ellipses: 0°, 60°, 120° ── */}
              <g
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="logo-fade-reveal animate-logo-reveal"
                style={{ filter: "blur(0.15px)", animationDelay: "0.2s" }}
              >
                <ellipse cx="50" cy="50" rx="42" ry="14" />
                <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(135 50 50)" />
              </g>

              {/* ── Star of David inside orbits ── */}
              {/* Upward solid triangle */}
              <path
                d="M50 38 L60.5 56 L39.5 56 Z"
                fill="currentColor"
                className="logo-fade-reveal animate-logo-reveal"
                style={{ animationDelay: "1.4s" }}
              />
              {/* Downward solid triangle */}
              <path
                d="M50 62 L60.5 44 L39.5 44 Z"
                fill="currentColor"
                className="logo-fade-reveal"
                style={{ animationDelay: "1.8s" }}
              />
              {/* Light grey inner triangle */}
              <path
                d="M50 44 L54 56 L46 56 Z"
                fill="#C0C0C0"
                className="logo-fade-reveal"
                style={{ animationDelay: "2.2s" }}
              />

              {/* ── 3 electron dots: top-left, top-right, bottom-right ── */}
              <circle cx="21" cy="22" r="5.5" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "2.8s" }} />
              <circle cx="79" cy="22" r="5.5" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "3.1s" }} />
              <circle cx="74" cy="82" r="5.5" fill="currentColor" className="logo-pop-in" style={{ animationDelay: "3.4s" }} />
            </svg>
          </div>

          {/* Stage 2: reveal brand name after logo animation completes */}
          <div
            className={`absolute md:static left-1/2 top-[72%] md:top-auto -translate-x-1/2 md:translate-x-0 md:ml-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stageTwo
                ? "opacity-100 md:translate-y-0"
                : "opacity-0 translate-y-6 md:translate-y-0"
            }`}
          >
            <div className="text-center md:text-left">
              <p className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[0.18em] animate-logo-reveal leading-none whitespace-nowrap">
                KELVORNEX
              </p>
              <p className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/45 font-semibold whitespace-nowrap">
                Learn • Build • Innovate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
