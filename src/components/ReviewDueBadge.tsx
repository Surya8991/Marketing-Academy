"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RotateCcw, ArrowRight } from "lucide-react";
import { getDueCount } from "@/lib/spaced-review";

/** Homepage nudge: only renders once there's actually something due, mirrors
 *  RecentlyViewed.tsx's "render nothing until there's real data" pattern. */
export default function ReviewDueBadge() {
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    setDueCount(getDueCount());
  }, []);

  if (dueCount === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <Link
        href="/review"
        className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all"
      >
        <RotateCcw size={16} className="text-[var(--accent)] shrink-0" />
        <span className="text-sm text-[var(--foreground)]">
          <strong className="font-semibold">{dueCount}</strong> quiz question{dueCount !== 1 ? "s" : ""} due for review
        </span>
        <ArrowRight size={14} className="ml-auto text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
      </Link>
    </section>
  );
}
