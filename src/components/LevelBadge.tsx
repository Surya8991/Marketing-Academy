import { cn } from "@/lib/utils";
import type { Level } from "@/lib/curriculum";

const STYLES: Record<Level, string> = {
  Beginner:     "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced:     "bg-rose-100 text-rose-700",
};

export default function LevelBadge({ level, className }: { level: Level; className?: string }) {
  return (
    <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", STYLES[level], className)}>
      {level}
    </span>
  );
}
