interface LogoProps {
  className?: string;
  color?: string;
}

/**
 * Kelvornex atom logo (matches reference image exactly):
 * - 3 orbital ellipses at 0°, 60°, 120°
 * - Star of David (2 solid-black triangles) INSIDE the orbits
 * - Light grey inner upward triangle in the center hexagon
 * - 3 dots: top-left, top-right, bottom-right
 */
export default function Logo({ className = "w-8 h-8", color = "#000000" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* ── 4 orbital ellipses: 0°, 45°, 90°, 135° ── */}
      <g stroke={color} strokeWidth="3" fill="none">
        <ellipse cx="50" cy="50" rx="42" ry="14" />
        <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(45 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="14" transform="rotate(135 50 50)" />
      </g>

      {/* ── Star of David: entirely inside the orbits (R=12) ── */}
      {/* Upward solid-black triangle */}
      <path d="M50 38 L60.5 56 L39.5 56 Z" fill={color} />
      {/* Downward solid-black triangle */}
      <path d="M50 62 L60.5 44 L39.5 44 Z" fill={color} />

      {/* ── Light grey upward triangle in centre hexagon ── */}
      <path d="M50 44 L54 56 L46 56 Z" fill="#C0C0C0" />

      {/* ── 3 electron dots: top-left, top-right, bottom-right ── */}
      <circle cx="21" cy="22" r="5.5" fill={color} />
      <circle cx="79" cy="22" r="5.5" fill={color} />
      <circle cx="74" cy="82" r="5.5" fill={color} />
    </svg>
  );
}
