import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategory } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import CategoryProgress from "@/components/CategoryProgress";
import { ArrowRight, ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const grouped = LEVEL_ORDER.map((level) => ({
    level,
    lessons: cat.lessons.filter((l) => l.level === level),
  })).filter((g) => g.lessons.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6 transition-colors">
        <ChevronLeft size={14} />
        All Topics
      </Link>

      {/* Header */}
      <div className={`rounded-2xl bg-gradient-to-br ${cat.color} border border-[var(--border)] p-8 mb-10`}>
        <div className="text-4xl mb-3">{cat.emoji}</div>
        <h1 className="text-3xl font-bold mb-2">{cat.title}</h1>
        <p className="text-[var(--muted-foreground)] text-base max-w-xl">{cat.description}</p>
        <div className="mt-4 flex gap-4 text-sm text-[var(--muted-foreground)]">
          <span>{cat.lessons.length} lessons</span>
          <span>·</span>
          <span>Beginner → Advanced</span>
        </div>
        <CategoryProgress
          categorySlug={cat.slug}
          slugs={cat.lessons.map((l) => l.slug)}
        />
      </div>

      {/* Lessons by level */}
      <div className="space-y-10">
        {grouped.map(({ level, lessons }) => (
          <div key={level}>
            <div className="flex items-center gap-3 mb-4">
              <LevelBadge level={level} />
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {lessons.map((lesson, i) => (
                <Link
                  key={lesson.slug}
                  href={`/learn/${cat.slug}/${lesson.slug}`}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-sm transition-all"
                >
                  <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm mb-0.5 group-hover:text-[var(--accent)] transition-colors">{lesson.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)] line-clamp-2">{lesson.summary}</p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 mt-1 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Start CTA */}
      <div className="mt-12 text-center">
        <Link
          href={`/learn/${cat.slug}/${cat.lessons[0].slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
        >
          Start Lesson 1: {cat.lessons[0].title}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
