import { fitTitle, clip, SITE_URL } from "@/lib/site";
import { getCategory } from "@/lib/curriculum";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GLOSSARY_TERMS, getTermBySlug, getRelatedTermObjects } from "@/lib/glossary";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  return {
    title: fitTitle(`${term.term}: Marketing Glossary`),
    description: clip(term.definition),
    alternates: { canonical: `/glossary/${slug}` },
  };
}

const BASE = SITE_URL;

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const related = getRelatedTermObjects(term.relatedTerms);
  const lessons = (term.lessons ?? []).flatMap((id) => {
    const [cat, lessonSlug] = id.split("/");
    const lesson = getCategory(cat)?.lessons.find((l) => l.slug === lessonSlug);
    return lesson ? [{ href: `/learn/${id}`, title: lesson.title }] : [];
  });

  // Find prev / next in sorted order
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  const idx = sorted.findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `${BASE}/glossary/${slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Marketing Glossary",
      url: `${BASE}/glossary`,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back link */}
      <Link
        href="/glossary"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Marketing Glossary
      </Link>

      {/* Hero card */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl font-medium font-serif">{term.term}</h1>
            <span className="shrink-0 mt-1 text-xs px-3 py-1 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-medium">
              {term.category}
            </span>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)]">
            {term.definition}
          </p>
        </div>
      </div>

      {term.whyItMatters && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Why {term.term} matters</h2>
          <p className="leading-relaxed text-[var(--foreground)]">{term.whyItMatters}</p>
        </section>
      )}
      {term.example && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Example</h2>
          <p className="leading-relaxed text-[var(--foreground)]">{term.example}</p>
        </section>
      )}
      {lessons.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Learn it in a lesson</h2>
          <ul className="space-y-2">
            {lessons.map((l) => (
              <li key={l.href}>
                <Link href={l.href} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related terms */}
      {related.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium text-[var(--muted-foreground)] mb-3">
            Related Terms
          </h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/glossary/${r.slug}`}
                className="px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {r.term}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next nav */}
      <div className="border-t border-[var(--border)] pt-6 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/glossary/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors min-w-0"
          >
            <ArrowLeft size={14} className="shrink-0" />
            <span className="truncate">{prev.term}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/glossary/${next.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors min-w-0 text-right"
          >
            <span className="truncate">{next.term}</span>
            <ArrowRight size={14} className="shrink-0" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
