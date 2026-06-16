"use client";

import { useState, useEffect } from "react";
import { getCompleted, lessonId } from "@/lib/progress";

export default function CategoryProgress({
  categorySlug,
  slugs,
}: {
  categorySlug: string;
  slugs: string[];
}) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const completed = getCompleted();
    const done = slugs.filter((s) => completed.has(lessonId(categorySlug, s))).length;
    setCount(done);
    setMounted(true);
  }, [categorySlug, slugs]);

  if (!mounted || count === 0 || slugs.length === 0) return null;

  const pct = Math.round((count / slugs.length) * 100);

  return (
    <div className="flex items-center gap-3 mt-2">
      <div className="flex-1 h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
        {count}/{slugs.length} done
      </span>
    </div>
  );
}
