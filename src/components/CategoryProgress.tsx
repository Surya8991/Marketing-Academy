"use client";

import { useState, useEffect } from "react";
import { getCompleted } from "@/lib/progress";

export default function CategoryProgress({
  lessonIds,
}: {
  /** Canonical `category/slug` storage ids, pre-resolved by the caller via
   *  canonicalLessonId() (Stage 2.1) so cross-listed lessons check the key
   *  that's actually written instead of one nothing ever completes. */
  lessonIds: string[];
}) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const completed = getCompleted();
    const done = lessonIds.filter((id) => completed.has(id)).length;
    setCount(done);
    setMounted(true);
  }, [lessonIds]);

  if (!mounted || count === 0 || lessonIds.length === 0) return null;

  const pct = Math.round((count / lessonIds.length) * 100);

  return (
    <div className="flex items-center gap-3 mt-2">
      <div className="flex-1 h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
        {count}/{lessonIds.length} done
      </span>
    </div>
  );
}
