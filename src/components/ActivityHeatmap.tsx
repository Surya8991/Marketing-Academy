"use client";

import { useMemo } from "react";

/**
 * GitHub-style contribution heatmap fed by EngagementState.xpByDay (Rule 22),
 * which has existed since the XP system shipped but was never rendered
 * anywhere until IMPROVEMENT_PLAN #25. Client-only: builds today's local
 * date grid at render time, so it must not run during SSR (parent gates
 * this behind a `mounted` flag, same as every other localStorage-backed
 * client component in this codebase).
 */
const WEEKS = 18; // ~126 days — enough real history to be meaningful, compact on mobile

function localDateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const LEVEL_COLORS = [
  "var(--border)",
  "rgba(34, 197, 94, 0.25)",
  "rgba(34, 197, 94, 0.5)",
  "rgba(34, 197, 94, 0.75)",
  "rgba(34, 197, 94, 1)",
];

export default function ActivityHeatmap({ xpByDay }: { xpByDay: Record<string, number> }) {
  const { weeks, max } = useMemo(() => {
    const today = new Date();
    // Align the grid's last column to the current week's Saturday so every column is a full week.
    const end = new Date(today);
    end.setDate(end.getDate() + (6 - end.getDay()));
    const totalDays = WEEKS * 7;
    const start = new Date(end);
    start.setDate(start.getDate() - totalDays + 1);

    const days: { key: string; xp: number; future: boolean }[] = [];
    for (let i = 0; i < totalDays; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const key = localDateKey(d);
      days.push({ key, xp: xpByDay[key] ?? 0, future: d > today });
    }

    const weeksOut: typeof days[] = [];
    for (let i = 0; i < days.length; i += 7) weeksOut.push(days.slice(i, i + 7));

    const maxXp = Math.max(1, ...days.map((d) => d.xp));
    return { weeks: weeksOut, max: maxXp };
  }, [xpByDay]);

  function levelFor(xp: number): number {
    if (xp <= 0) return 0;
    const ratio = xp / max;
    if (ratio > 0.75) return 4;
    if (ratio > 0.5) return 3;
    if (ratio > 0.25) return 2;
    return 1;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day) =>
              day.future ? (
                <div key={day.key} className="w-[11px] h-[11px]" />
              ) : (
                <div
                  key={day.key}
                  title={`${day.key} — ${day.xp} XP`}
                  className="w-[11px] h-[11px] rounded-[2px]"
                  style={{ background: LEVEL_COLORS[levelFor(day.xp)] }}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
