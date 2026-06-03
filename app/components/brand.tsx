export function Mark({ small, tone = "accent" }: { small?: boolean; tone?: "accent" | "signal" }) {
  const s = small ? 22 : 32;
  const dot = tone === "signal" ? "var(--color-signal)" : "var(--color-accent)";
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      {/* Outer scanning ring */}
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Inner solid ring */}
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
      {/* Absolute center point */}
      <circle cx="20" cy="20" r="3.5" fill={dot} />
      {/* Crosshairs */}
      <path d="M20 0 V8 M20 32 V40 M0 20 H8 M32 20 H40" stroke={dot} strokeWidth="2" />
    </svg>
  );
}
