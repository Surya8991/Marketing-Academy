"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { type RecentLesson, getRecentLessons } from "@/lib/recentlyViewed";
import { History } from "lucide-react";

export default function RecentlyViewed() {
  const [lessons, setLessons] = useState<RecentLesson[]>([]);

  useEffect(() => {
    setLessons(getRecentLessons());
  }, []);

  if (!lessons.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
      <div className="flex items-center gap-2 mb-3">
        <History size={14} className="text-[var(--muted-foreground)]" />
        <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
          Continue where you left off
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {lessons.map((l) => (
          <Link
            key={`${l.categorySlug}/${l.slug}`}
            href={`/learn/${l.categorySlug}/${l.slug}`}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all group"
          >
            <span className="text-xs text-[var(--muted-foreground)]">{l.categoryTitle}</span>
            <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {l.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
