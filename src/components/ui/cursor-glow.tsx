// src/components/ui/cursor-glow.tsx

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "100px",
        height: "100px",
        pointerEvents: "none",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(0,204,255,0.15) 0%, transparent 70%)",
        mixBlendMode: "screen",
        zIndex: 9999,
      }}
    />
  );
}

