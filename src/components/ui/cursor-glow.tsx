import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let x = -500;
    let y = -500;
    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          }
          frameId = 0;
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "120px",
        height: "120px",
        pointerEvents: "none",
        borderRadius: "50%",
        transform: "translate(-500px, -500px) translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(0,204,255,0.12) 0%, transparent 70%)",
        mixBlendMode: "screen",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
}
