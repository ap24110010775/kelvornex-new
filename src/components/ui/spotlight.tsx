'use client';
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
};

export function Spotlight({ className, size = 200 }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    let frameId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = parent.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
          frameId = 0;
        });
      }
    };

    const handleEnter = () => { el.style.opacity = '1'; };
    const handleLeave = () => { el.style.opacity = '0'; };

    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseenter', handleEnter);
    parent.addEventListener('mouseleave', handleLeave);

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseenter', handleEnter);
      parent.removeEventListener('mouseleave', handleLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none absolute rounded-full blur-xl',
        'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_80%)]',
        className
      )}
      style={{
        width: size,
        height: size,
        opacity: 0,
        willChange: 'transform',
        transition: 'opacity 0.2s ease',
        top: 0,
        left: 0,
      }}
    />
  );
}
