import Link from "next/link";
import { getCategory } from "@/lib/curriculum";

/**
 * Renders lessonMeta.relatedConcepts (curated same-category slugs, present on
 * ~65 lessons) as cards. Distinct from RelatedLessons.tsx's "You Might Also
 * Like" (an algorithmic same-level pick that runs for all 642 lessons) — this
 * is the curated, author-picked set, so both can appear on a page without
 * being redundant. Returns null when the lesson has no relatedConcepts field
 * or none of its slugs resolve, rather than forcing an empty section.
 */
export default function RelatedConcepts({
  category,
  slugs,
}: {
  category: string;
  slugs?: string[];
}) {
  if (!slugs || slugs.length === 0) return null;

  const cat = getCategory(category);
  if (!cat) return null;

  const concepts = slugs
    .map((slug) => cat.lessons.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => !!l);

  if (concepts.length === 0) return null;

  return (
    <section className="mt-10">
      <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-semibold mb-3">
        Related Concepts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {concepts.map((c) => (
          <Link
            key={c.slug}
            href={`/learn/${category}/${c.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[var(--border)] p-4 hover:border-[var(--accent)] transition-colors"
          >
            <p className="font-semibold text-sm mb-1.5">{c.title}</p>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
              {c.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
