import { useState, useEffect, useRef, useCallback } from "react";

interface Initiative {
  num: string;
  title: string;
  img: string;
  description: string;
}

const initiatives: Initiative[] = [
  {
    num: "01",
    title: "Technology awareness programs",
    img: "/images/initiative-1.jpg",
    description: "Inspiring the next generation with cutting-edge tech seminars and awareness sessions.",
  },
  {
    num: "02",
    title: "Community building for Gen Z innovators",
    img: "/images/initiative-2.jpg",
    description: "Building vibrant communities of young innovators who collaborate and grow together.",
  },
  {
    num: "03",
    title: "Hackathons, Ideathons & Patentthons",
    img: "/images/initiative-3.jpg",
    description: "Competitive events that transform raw ideas into award-winning prototypes and patents.",
  },
  {
    num: "04",
    title: "Idea development support",
    img: "/images/initiative-4.jpg",
    description: "One-on-one mentorship and resources to help you evolve concepts into real products.",
  },
  {
    num: "05",
    title: "Industry-oriented workshops",
    img: "/images/initiative-5.jpg",
    description: "Hands-on workshops led by industry practitioners covering real-world tools and skills.",
  },
  {
    num: "06",
    title: "Technology awareness programs",
    img: "/images/initiative-6.jpg",
    description: "Empowering students through engaging speaker sessions and live demonstrations that ignite a passion for technology.",
  },
];

export default function InitiativesAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % initiatives.length);
    }, 3200);
  }, [stopAutoplay]);

  const handleSelect = useCallback(
    (index: number) => {
      setActiveIndex(index);
      startAutoplay();
    },
    [startAutoplay]
  );

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-[#080c18] text-slate-100 flex items-center"
      style={{
        backgroundImage: `
          radial-gradient(circle at 18% 22%, rgba(9,0,255,0.18), transparent 38%),
          radial-gradient(circle at 82% 8%, rgba(0,204,255,0.12), transparent 36%),
          radial-gradient(circle at 50% 96%, rgba(16,185,129,0.07), transparent 38%)
        `,
      }}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(9,0,255,0.08)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(0,204,255,0.06)", filter: "blur(70px)" }}
      />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

          {/* ── Left: Copy ── */}
          <div className="w-full lg:w-[34%] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-cyan-400 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Our Initiatives
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
              Building the Next Generation of&nbsp;Innovators
            </h2>

            <p className="mt-5 text-sm md:text-[15px] text-slate-400 max-w-lg leading-relaxed">
              From awareness to execution — we run hands-on programs that turn curious minds into confident builders, one idea at a time.
            </p>

            {/* Active initiative description */}
            <p className="mt-5 text-sm text-cyan-300/80 leading-relaxed max-w-md italic hidden lg:block transition-all duration-500">
              {initiatives[activeIndex].description}
            </p>

            <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase hidden lg:block">
              Hover a panel to explore →
            </p>
          </div>

          {/* ── Right: Accordion Panels ── */}
          <div className="w-full lg:w-[66%] flex flex-col gap-4">
            {/* Panels row */}
            <div className="flex flex-row items-stretch gap-2 md:gap-3 overflow-x-auto pb-2 lg:overflow-visible">
              {initiatives.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => handleSelect(idx)}
                    onClick={() => handleSelect(idx)}
                    style={{
                      width: isActive ? "clamp(220px, 35vw, 360px)" : "clamp(52px, 5.5vw, 72px)",
                      transition: "width 0.65s cubic-bezier(0.4,0,0.2,1)",
                      flexShrink: 0,
                    }}
                    className="group relative h-[360px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background: isActive
                          ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.3) 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.5) 100%)",
                        transition: "background 0.5s ease",
                      }}
                    />

                    {/* Number badge */}
                    <span className="absolute top-4 left-4 text-[11px] font-mono font-bold text-white/60 z-20 tabular-nums">
                      {item.num}
                    </span>

                    {/* Collapsed: vertical rotated title */}
                    {!isActive && (
                      <span
                        className="absolute z-20 text-white font-semibold text-[11px] tracking-wide select-none whitespace-nowrap"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%) rotate(-90deg)",
                          transformOrigin: "center",
                          maxWidth: "400px",
                        }}
                      >
                        {item.title}
                      </span>
                    )}

                    {/* Expanded: bottom title */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <span className="block text-[10px] font-mono text-cyan-400/80 mb-1.5 tracking-wider uppercase">
                          Program {item.num}
                        </span>
                        <span className="block text-lg md:text-xl font-bold text-white leading-snug">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-1.5 px-1">
              {initiatives.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to initiative ${idx + 1}`}
                  className="h-1.5 rounded-full cursor-pointer transition-all duration-500"
                  style={{
                    width: activeIndex === idx ? "24px" : "6px",
                    background: activeIndex === idx ? "#fff" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
