import { Spotlight } from "./ui/spotlight";
import { SplineScene } from "./ui/splite";
import { AnimatedTitle } from "./ui/animated-title";
import LogoRevealIntro from "./LogoRevealIntro";
import { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

const HeroGlow = memo(function HeroGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    let frameId = 0;
    let cx = -200;
    let cy = -200;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      cx = e.clientX - rect.left;
      cy = e.clientY - rect.top;
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
          frameId = 0;
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute rounded-full opacity-70"
        style={{
          width: '100px',
          height: '100px',
          left: 0,
          top: 0,
          transform: 'translate(-200px, -200px) translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(9,0,255,0.18) 0%, rgba(0,204,255,0.08) 50%, transparent 70%)',
          filter: 'blur(15px)',
          willChange: 'transform',
        }}
      />
    </>
  );
});

export default function Hero() {
  const [showRobot, setShowRobot] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="home" className="w-full">
      {/* Logo reveal animation — shows first, then closes */}
      <LogoRevealIntro onFinish={() => setShowRobot(true)} />

      <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] bg-black flex items-center">
        {/* Spotlight effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center min-h-[calc(100vh-4rem)] overflow-hidden">
            {/* Left content cursor glow — RAF-driven, no inline handler */}
            <HeroGlow />
            <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-12 sm:py-16 text-center md:text-left">
              {/* AnimatedTitle handles its own entrance animation */}
              <AnimatedTitle text="KELVORNEX" />
              <p className="mt-3 text-lagoon-400 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
                Software · Education · Products
              </p>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-neutral-300 text-sm sm:text-base leading-relaxed">
                One platform — powerful software solutions, career-defining tech courses, and smart innovative products. Built to empower you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
                <a href="#our-brands-strip" className="rounded-full bg-lagoon-500 hover:bg-lagoon-400 text-white text-sm sm:text-base font-bold px-7 py-3.5 text-center transition-colors shadow-lg shadow-lagoon-500/30">
                  Explore Our Brands
                </a>
                <a href="#enroll-newsletter" className="rounded-full border-2 border-neutral-100/80 text-white hover:bg-white/10 text-sm sm:text-base font-semibold px-7 py-3.5 text-center transition-colors backdrop-blur-sm">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Right — Spline robot — always mounted so the heavy 3D bundle starts loading
                during the logo animation; visually hidden until `showRobot` is true. */}
             <motion.div
              className="flex-1 w-full md:w-auto h-[400px] md:h-[calc(100vh-4rem)] relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                showRobot
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.98 }
              }
              transition={{
                duration: 1.0,
                ease: "easeOut",
              }}
              aria-hidden={!showRobot}
              style={{ pointerEvents: showRobot ? undefined : "none" }}
            >
              {isMobile ? (
                <img
                  src="/custom_software_dev2.png"
                  alt="Kelvornex Services"
                  className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-2xl opacity-80"
                  loading="lazy"
                />
              ) : (
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              )}
            </motion.div>
          </div>
      </div>
    </section>
  );
}
