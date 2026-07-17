import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

// wrap helper
const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

interface MarqueeAlongSvgPathProps {
  children: React.ReactNode;
  path: string;
  viewBox?: string;
  className?: string;
  baseDuration?: number;
  repeat?: number;
  showPath?: boolean;
  baseVelocity?: number;
  easing?: ((v: number) => number) | undefined;
  enableRollingZIndex?: boolean;
  zIndexBase?: number;
  zIndexRange?: number;
}

const MarqueeAlongSvgPath = ({
  children,
  path,
  viewBox = "0 0 100 100",
  className,
  repeat = 3,
  showPath = false,
  baseVelocity = 5,
  easing,
  enableRollingZIndex = true,
  zIndexBase = 1,
  zIndexRange = 10,
}: MarqueeAlongSvgPathProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // baseOffset is the shared motion value driving all items
  const baseOffset = useMotionValue(0);

  // direction/speed control (very small simplified version)
  const directionFactor = useRef(1);

  // advance the shared baseOffset each frame
  useAnimationFrame((_, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 100; // scale to percentage
    baseOffset.set(baseOffset.get() + moveBy);
  });

  useEffect(() => {
    if (document.getElementById("marquee-along-path-keyframes")) return;
    const style = document.createElement("style");
    style.id = "marquee-along-path-keyframes";
    style.innerHTML = `@keyframes marqueeAlongPath { from { offset-distance: 0%; } to { offset-distance: 100%; } }`;
    document.head.appendChild(style);
  }, []);

  const childrenArray = React.Children.toArray(children);
  const items = childrenArray.flatMap((child) => Array.from({ length: repeat }, () => child));

  const normalized = String(path).replace(/,/g, " ").trim();

  return (
    <div ref={containerRef} className={cn("relative overflow-visible", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="pointer-events-none absolute inset-0 w-full h-full">
        <path d={normalized} stroke={showPath ? "currentColor" : "none"} fill="none" />
      </svg>

      {items.map((child, i) => (
        <MarqueeItem
          key={i}
          path={normalized}
          child={child}
          itemIndex={i}
          itemsLength={items.length}
          baseOffset={baseOffset}
          easing={easing}
          enableRollingZIndex={enableRollingZIndex}
          zIndexBase={zIndexBase}
          zIndexRange={zIndexRange}
          ariaHidden={i >= childrenArray.length}
        />
      ))}
    </div>
  );
};


interface MarqueeItemProps {
  child: React.ReactNode;
  path: string;
  itemIndex: number;
  itemsLength: number;
  baseOffset: ReturnType<typeof useMotionValue<number>>;
  easing?: ((v: number) => number) | undefined;
  enableRollingZIndex?: boolean;
  zIndexBase?: number;
  zIndexRange?: number;
  ariaHidden?: boolean;
}

const MarqueeItem = ({
  child,
  path,
  itemIndex,
  itemsLength,
  baseOffset,
  easing,
  enableRollingZIndex = true,
  zIndexBase = 1,
  zIndexRange = 10,
  ariaHidden,
}: MarqueeItemProps) => {
  // compute offset distance for this item
  const itemOffset = useTransform(baseOffset, (v) => {
    const position = (itemIndex * 100) / itemsLength;
    const wrappedValue = wrap(0, 100, (v as number) + position);
    return `${easing ? easing(wrappedValue / 100) * 100 : wrappedValue}%`;
  });

  const currentOffsetDistance = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = itemOffset.on("change", (value: string) => {
      const match = String(value).match(/^([\d.]+)%$/);
      if (match && match[1]) currentOffsetDistance.set(parseFloat(match[1]));
    });
    return unsubscribe;
  }, [itemOffset, currentOffsetDistance]);

  const zIndex = useTransform(currentOffsetDistance, (v) =>
    enableRollingZIndex ? Math.floor(zIndexBase + (v / 100) * zIndexRange) : undefined
  );

  return (
    <motion.div
      className="absolute top-0 left-0"
      style={{
        offsetPath: `path('${path}')`,
        offsetDistance: itemOffset,
        zIndex: zIndex as any,
        willChange: "offset-distance",
        backfaceVisibility: "hidden",
      }}
      aria-hidden={ariaHidden}
    >
      {child}
    </motion.div>
  );
};

export default MarqueeAlongSvgPath;
