import Link from "next/link";
import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { classificationCode } from "@/lib/classificationCodes";
import LevelBadge from "@/components/LevelBadge";
import SurpriseMeButton from "@/components/SurpriseMeButton";
import PageMasthead from "@/components/PageMasthead";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

// Stage 5.3: was hardcoded "393+ ... 15 disciplines"
export const metadata: Metadata = {
  title: "All Marketing Lessons | Marketing Academy",
  description:
    `Browse all ${uniqueLessonCount()}+ marketing lessons across ${CATEGORIES.length} disciplines: SEO, paid ads, growth, email, analytics, AI marketing, copywriting, CRO, and more. Free, structured Beginner to Advanced.`,
};

/** Stage 3.4: show only the first PREVIEW_COUNT lessons per category to keep
 *  the HTML under ~250 KB (was 1.33 MB rendering all 655). Each category page
 *  already has the full listing; "View all →" links there. */
const PREVIEW_COUNT = 5;

export default function LearnPage() {
  const totalLessons = uniqueLessonCount();

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Full Index"
        right={`${CATEGORIES.length} disciplines · ${totalLessons} entries`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Every entry, by discipline</p>
            <h1 className="font-display font-semibold text-4xl mb-3">All Marketing Lessons</h1>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl font-ui-sans">
              {CATEGORIES.length} disciplines, Beginner to Advanced. Browse every category or use Ctrl+K to search.
            </p>
          </div>
          <SurpriseMeButton />
        </div>

        <div className="flex flex-col gap-6">
          {CATEGORIES.map((cat) => {
            const preview = cat.lessons.slice(0, PREVIEW_COUNT);
            const remaining = cat.lessons.length - PREVIEW_COUNT;
            return (
            <div key={cat.slug} className="border border-[var(--border)] rounded-lg overflow-hidden">
              {/* Category header — classification code + serif title, no gradient band */}
              <div className="border-b border-[var(--border)] bg-[var(--muted)]/40 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="font-data text-[0.7rem] tracking-[0.06em] text-[var(--accent)]">{classificationCode(cat.slug)}</span>
                      <span className="text-lg">{cat.emoji}</span>
                      <h2 className="font-display font-semibold text-xl">{cat.title}</h2>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] font-ui-sans">{cat.tagline}</p>
                  </div>
                  <Link
                    href={`/learn/${cat.slug}`}
                    className="font-ui-sans shrink-0 flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    View all {cat.lessons.length} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Lessons list — first PREVIEW_COUNT only. Numbering here is real:
                  each category's lessons ARE meant to be read in this order. */}
              <div className="divide-y divide-[var(--border)]">
                {preview.map((lesson, i) => (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${cat.slug}/${lesson.slug}`}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-[var(--muted)] transition-colors group"
                  >
                    <span className="shrink-0 w-6 font-data text-xs text-[var(--muted-foreground)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0 font-ui-sans">
                      <p className="font-medium text-sm group-hover:text-[var(--accent)] transition-colors truncate">{lesson.title}</p>
                      <p className="text-xs text-[var(--muted-foreground)] truncate">{lesson.summary}</p>
                    </div>
                    <LevelBadge level={lesson.level} className="shrink-0" />
                  </Link>
                ))}
                {remaining > 0 && (
                  <Link
                    href={`/learn/${cat.slug}`}
                    className="font-ui-sans flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-medium text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
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
    </>
  );
}
