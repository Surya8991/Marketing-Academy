"use client";
import { useEffect, useState } from "react";

type Props = {
  lessons: { category: string; slug: string }[];
};

export default function TrackProgress({ lessons }: Props) {
  const [pct, setPct] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ma_completed");
      const completed: string[] = raw ? JSON.parse(raw) : [];
      const done = lessons.filter((l) =>
        completed.includes(`${l.category}/${l.slug}`)
      ).length;
      setPct(Math.round((done / lessons.length) * 100));
    } catch {
      setPct(0);
    }
  }, [lessons]);

  if (!pct) return null;

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
