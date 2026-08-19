"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { type Recommendation, getRecommendations } from "@/lib/recommendations";

export default function RecommendedNext() {
  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRecs(getRecommendations(3));
    setMounted(true);
  }, []);

  // Renders nothing until mounted (avoids an empty-then-populated flash) and
  // always has content once mounted, getRecommendations() never returns [].
  if (!mounted || recs.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={14} className="text-[var(--accent)]" />
        <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
          Recommended for you
        </span>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {recs.map((r) => (
          <Link
            key={`${r.category}/${r.slug}`}
            href={`/learn/${r.category}/${r.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base leading-none">{r.emoji}</span>
              <span className="text-xs text-[var(--muted-foreground)]">{r.categoryTitle}</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2 line-clamp-2">
              {r.title}
            </p>
            <div className="flex items-center gap-1 mt-auto text-xs text-[var(--accent)] font-medium">
              {r.reason}
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
