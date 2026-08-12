/**
 * PageMasthead: the thin, tracked-out info strip used at the top of the
 * redesigned pages (Home, /learn, /tracks, /projects, /tools, /about).
 * A journal-masthead device rather than a generic hero eyebrow badge —
 * plain hairline rules top and bottom, uppercase small caps, no color
 * other than the existing site accent for the live-status dot.
 *
 * Colors are untouched from the original site (var(--border)/var(--muted-foreground)/
 * var(--accent)), only the layout/typography vocabulary is new, per the
 * 2026-08-12 redesign pass scope (structure + type, not color).
 */
export default function PageMasthead({ left, right }: { left: string; right: string }) {
  return (
    <div className="border-y border-[var(--border)] font-data">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[0.68rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">
        <span>{left}</span>
        <span className="flex items-center gap-1.5">
          <span className="text-[var(--accent)]">●</span>
          {right}
        </span>
      </div>
    </div>
  );
}
