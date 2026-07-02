import { cn } from "@/lib/utils";
import type { Level } from "@/lib/curriculum";

// rgba overlays instead of Tailwind color classes: dark mode needs CSS-variable-aware
// colors, and `dark:` classes are a no-op in this project (AGENTS.md Rule 5/19).
const COLORS: Record<Level, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
};

const BACKGROUNDS: Record<Level, string> = {
  Beginner: "rgba(22,163,74,0.15)",
  Intermediate: "rgba(217,119,6,0.15)",
  Advanced: "rgba(220,38,38,0.15)",
};

export default function LevelBadge({ level, className }: { level: Level; className?: string }) {
  return (
    <span
      className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", className)}
      style={{ backgroundColor: BACKGROUNDS[level], color: COLORS[level] }}
    >
      {level}
    </span>
  );
}
