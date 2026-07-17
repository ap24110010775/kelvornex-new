import { Spotlight } from "./ui/spotlight";
import { SplineScene } from "./ui/splite";
import { AnimatedTitle } from "./ui/animated-title";
import LogoRevealIntro from "./LogoRevealIntro";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showRobot, setShowRobot] = useState(false);

  return (
    <section id="home" className="w-full">
      {/* Logo reveal animation — shows first, then closes */}
      <LogoRevealIntro onFinish={() => setShowRobot(true)} />

      <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] bg-black flex items-center">
        {/* Spotlight effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />
          <div
            className="relative z-10 w-full flex flex-col md:flex-row items-center min-h-[calc(100vh-4rem)] overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            {/* Left content cursor glow */}
            <div
              className="pointer-events-none absolute rounded-full opacity-70"
              style={{
                width: '100px',
                height: '100px',
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(9,0,255,0.18) 0%, rgba(0,204,255,0.08) 50%, transparent 70%)',
                filter: 'blur(15px)',
              }}
            />
            <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-12 sm:py-16 text-center md:text-left">
              {/* AnimatedTitle handles its own entrance animation */}
              <AnimatedTitle text="KELVORNEX" />
              <p className="mt-3 text-lagoon-400 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
                Learn. Execute. Succeed.
              </p>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-neutral-300 text-sm sm:text-base leading-relaxed">
                Master in-demand skills with hands-on courses, real-world projects,
                and mentor support — everything you need to launch your career in
                one platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
                <a href="#enroll-newsletter" className="rounded-full bg-lagoon-500 hover:bg-lagoon-400 text-white text-sm sm:text-base font-bold px-7 py-3.5 text-center transition-colors shadow-lg shadow-lagoon-500/30">
                  Start Learning
                </a>
                <a href="#courses" className="rounded-full border-2 border-neutral-100/80 text-white hover:bg-white/10 text-sm sm:text-base font-semibold px-7 py-3.5 text-center transition-colors backdrop-blur-sm">
                  Explore Courses
                </a>
              </div>
            </div>
            {/* Right — Spline robot — always mounted so the heavy 3D bundle starts loading
                during the logo animation; visually hidden until `showRobot` is true. */}
            <motion.div
              className="flex-1 w-full md:w-auto h-[400px] md:h-[calc(100vh-4rem)] relative"
              initial={{
                opacity: 0,
                scale: 0.7,
                filter: "blur(12px)",
              }}
              animate={
                showRobot
                  ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                  : { opacity: 0, scale: 0.98, filter: "blur(8px)" }
              }
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              aria-hidden={!showRobot}
              style={{ pointerEvents: showRobot ? undefined : "none" }}
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
      </div>
    </section>
  );
}
