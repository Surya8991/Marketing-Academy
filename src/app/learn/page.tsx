import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import SurpriseMeButton from "@/components/SurpriseMeButton";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Marketing Lessons | Marketing Academy",
  description:
    "Browse all 393+ marketing lessons across 15 disciplines: SEO, paid ads, growth, email, analytics, AI marketing, copywriting, CRO, and more. Free, structured Beginner to Advanced.",
};

/** Stage 3.4: show only the first PREVIEW_COUNT lessons per category to keep
 *  the HTML under ~250 KB (was 1.33 MB rendering all 655). Each category page
 *  already has the full listing; "View all →" links there. */
const PREVIEW_COUNT = 5;

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-3">All Marketing Lessons</h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl">
            15 disciplines, Beginner to Advanced. Browse every category or use Ctrl+K to search.
          </p>
        </div>
        <SurpriseMeButton />
      </div>

      <div className="space-y-8">
        {CATEGORIES.map((cat) => {
          const preview = cat.lessons.slice(0, PREVIEW_COUNT);
          const remaining = cat.lessons.length - PREVIEW_COUNT;
          return (
          <div key={cat.slug} className="rounded-2xl border border-[var(--border)] overflow-hidden">
            {/* Category header */}
            <div className={`bg-gradient-to-r ${cat.color} border-b border-[var(--border)] p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h2 className="text-xl font-bold">{cat.title}</h2>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">{cat.tagline}</p>
                </div>
                <Link
                  href={`/learn/${cat.slug}`}
                  className="shrink-0 flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View all {cat.lessons.length} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Lessons list — first PREVIEW_COUNT only */}
            <div className="divide-y divide-[var(--border)]">
              {preview.map((lesson, i) => (
                <Link
                  key={lesson.slug}
                  href={`/learn/${cat.slug}/${lesson.slug}`}
                  className="flex items-center gap-4 px-6 py-3 hover:bg-[var(--muted)] transition-colors group"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm group-hover:text-[var(--accent)] transition-colors truncate">{lesson.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)] truncate">{lesson.summary}</p>
                  </div>
                  <LevelBadge level={lesson.level} className="shrink-0" />
                </Link>
              ))}
              {remaining > 0 && (
                <Link
                  href={`/learn/${cat.slug}`}
                  className="flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-medium text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
                >
                  +{remaining} more lesson{remaining !== 1 ? "s" : ""} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
