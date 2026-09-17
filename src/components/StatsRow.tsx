/**
 * Shared "specimen-row" stat tile grid — the code/value/label pattern used on
 * /achievements, /skill-map, and /tools, previously hand-duplicated inline in
 * each page (Rule 18). Server-safe (no hooks, no "use client"): pass already-
 * computed values in, it just renders them.
 */
export type StatTileData = {
  code: string;
  value: string;
  label: string;
};

export default function StatsRow({
  stats,
  columns = 4,
  className = "",
}: {
  stats: StatTileData[];
  /** Tailwind grid column count at the sm+ breakpoint. Below sm, always 2 columns. */
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const smColsClass: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
  };

  return (
    <div
      className={`border border-[var(--border)] grid grid-cols-2 ${smColsClass[columns]} divide-x divide-y sm:divide-y-0 divide-[var(--border)] ${className}`}
    >
      {stats.map((s) => (
        <div key={s.label} className="p-4 font-ui-sans">
          <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{s.code}</p>
          <p className="font-display font-semibold text-2xl text-[var(--foreground)]">{s.value}</p>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
