import type { Level } from "@/lib/curriculum";

const STYLES: Record<Level, React.CSSProperties> = {
  Beginner:     { background: "rgba(22, 163, 74, 0.15)", color: "var(--foreground)", border: "1px solid rgba(22, 163, 74, 0.35)" },
  Intermediate: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
  Advanced:     { background: "rgba(239, 68, 68, 0.15)", color: "var(--foreground)", border: "1px solid rgba(239, 68, 68, 0.35)" },
};

export default function LevelBadge({ level, className }: { level: Level; className?: string }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full${className ? ` ${className}` : ""}`}
      style={STYLES[level]}
    >
      {level}
    </span>
  );
}
