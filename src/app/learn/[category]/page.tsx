import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { CATEGORIES, getCategory } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import CategoryProgress from "@/components/CategoryProgress";
import { ArrowRight, ChevronLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

function lessonReadTime(categorySlug: string, lessonSlug: string): number {
  try {
    const raw = fs.readFileSync(
      path.join(process.cwd(), "src", "content", categorySlug, `${lessonSlug}.mdx`),
      "utf-8"
    );
    const text = raw
      .replace(/```[\s\S]*?```/g, "")
      .replace(/export const \w+ = \{[\s\S]*?\};/g, "")
      .replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  } catch {
    return 5;
  }
}

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
}

const LEVEL_ORDER = ["Beginner", "Intermediate", "Advanced"] as const;
const LEVEL_DESC: Record<typeof LEVEL_ORDER[number], string> = {
  Beginner: "Start here. No prior knowledge needed.",
  Intermediate: "Build on the fundamentals.",
  Advanced: "Tactics for experienced marketers.",
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const grouped = LEVEL_ORDER.map((level) => ({
    level,
    lessons: cat.lessons.filter((l) => l.level === level),
  })).filter((g) => g.lessons.length > 0);

  const totalMinutes = cat.lessons.reduce(
    (sum, l) => sum + lessonReadTime(cat.slug, l.slug),
    0
  );
  const totalTimeLabel =
    totalMinutes >= 60
      ? `~${Math.round(totalMinutes / 60)} hr read`
      : `~${totalMinutes} min read`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <Link
        href="/learn"
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6 transition-colors"
      >
        <ChevronLeft size={14} />
        All Topics
      </Link>

      {/* Header */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${cat.color} border border-[var(--border)] p-8 sm:p-10 mb-12`}
      >
        <div className="text-5xl mb-4">{cat.emoji}</div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {cat.title}
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg max-w-2xl leading-relaxed">
          {cat.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--muted-foreground)]">
          <span className="font-medium">{cat.lessons.length} lessons</span>
          {grouped.map(({ level, lessons }) => (
            <span key={level}>
              <span className="mr-1 opacity-50">·</span>
              {lessons.length} {level}
            </span>
          ))}
          <span>
            <span className="mr-1 opacity-50">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {totalTimeLabel}
            </span>
          </span>
        </div>
        <CategoryProgress
          categorySlug={cat.slug}
          slugs={cat.lessons.map((l) => l.slug)}
        />
      </div>

      {/* Lessons by level */}
      <div className="space-y-14">
        {grouped.map(({ level, lessons }) => (
          <section key={level}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <LevelBadge level={level} />
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-xs text-[var(--muted-foreground)]">
                  {lessons.length} {lessons.length === 1 ? "lesson" : "lessons"}
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] ml-1">
                {LEVEL_DESC[level]}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {lessons.map((lesson, i) => (
                <Link
                  key={lesson.slug}
                  href={`/learn/${cat.slug}/${lesson.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm font-semibold flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-colors">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed mb-2">
                      {lesson.summary}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                      <Clock size={11} />
                      {lessonReadTime(cat.slug, lesson.slug)} min
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 mt-1 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Start CTA */}
      <div className="mt-16 text-center">
        <Link
          href={`/learn/${cat.slug}/${cat.lessons[0].slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/20 max-w-full"
        >
          <span className="truncate max-w-[16rem] sm:max-w-none">
            Start Lesson 1: {cat.lessons[0].title}
          </span>
          <ArrowRight size={16} className="shrink-0" />
        </Link>
      </div>
    </div>
  );
}
