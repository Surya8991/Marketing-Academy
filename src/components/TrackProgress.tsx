"use client";
import { useEffect, useState } from "react";
import { getCompleted } from "@/lib/progress";

type Props = {
  lessons: { category: string; slug: string }[];
};

export default function TrackProgress({ lessons }: Props) {
  const [pct, setPct] = useState<number | null>(null);

  useEffect(() => {
    try {
      const completed = getCompleted();
      const done = lessons.filter((l) =>
        completed.has(`${l.category}/${l.slug}`)
      ).length;
      setPct(Math.round((done / lessons.length) * 100));
    } catch {
      setPct(0);
    }
  }, [lessons]);

  if (pct === null) return null;

  return (
    <div className="mt-3">
      <div className="w-full h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--accent)] rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-[var(--muted-foreground)] mt-1">{pct}% complete</p>
    </div>
  );
}
