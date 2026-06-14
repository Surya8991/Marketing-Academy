import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategory, getLessonNav } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import MarkComplete from "@/components/MarkComplete";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string; lesson: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return CATEGORIES.flatMap((cat) =>
    cat.lessons.map((l) => ({ category: cat.slug, lesson: l.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, lesson } = await params;
  try {
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    return { title: mod.lessonMeta?.title ?? lesson };
  } catch {
    return {};
  }
}

export default async function LessonPage({ params }: Props) {
  const { category, lesson } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  let LessonContent!: React.ComponentType;
  let lessonMeta: { title: string; level: string; summary: string } | undefined;
  try {
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    LessonContent = mod.default;
    lessonMeta = mod.lessonMeta;
  } catch {
    notFound();
  }

  const { prev, next } = getLessonNav(category, lesson);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-8">
        <Link href="/learn" className="hover:text-[var(--foreground)]">All Topics</Link>
        <ChevronRight size={14} />
        <Link href={`/learn/${category}`} className="hover:text-[var(--foreground)]">{cat.title}</Link>
        <ChevronRight size={14} />
        <span className="text-[var(--foreground)]">{lessonMeta?.title}</span>
      </nav>

      {/* Level badge + complete button */}
      <div className="flex items-center justify-between mb-4">
        {lessonMeta?.level && (
          <LevelBadge level={lessonMeta.level as "Beginner" | "Intermediate" | "Advanced"} />
        )}
        <MarkComplete category={category} slug={lesson} />
      </div>

      {/* MDX content */}
      <article className="prose prose-slate max-w-none">
        <LessonContent />
      </article>

      {/* Prev / Next nav */}
      <nav className="mt-12 pt-6 border-t border-[var(--border)] flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/learn/${prev.categorySlug}/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)]"
          >
            <ChevronLeft size={16} /> {prev.title}
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/learn/${next.categorySlug}/${next.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)]"
          >
            {next.title} <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
