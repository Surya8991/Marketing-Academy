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
    title: `${term.term} - Marketing Glossary`,
    description: term.definition.slice(0, 155),
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Analytics: "from-indigo-500/15 to-violet-500/10",
  "Paid Ads": "from-amber-500/15 to-yellow-500/10",
  SEO: "from-emerald-500/15 to-teal-500/10",
  Email: "from-cyan-500/15 to-blue-500/10",
  Growth: "from-violet-500/15 to-fuchsia-500/10",
  "Business Metrics": "from-rose-500/15 to-orange-500/10",
  Strategy: "from-blue-500/15 to-indigo-500/10",
  CRO: "from-lime-500/15 to-green-500/10",
  Psychology: "from-purple-500/15 to-pink-500/10",
  Content: "from-sky-500/15 to-blue-500/10",
  Brand: "from-pink-500/15 to-rose-500/10",
  Copywriting: "from-orange-500/15 to-amber-500/10",
  "Social Media": "from-fuchsia-500/15 to-purple-500/10",
};

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const related = getRelatedTermObjects(term.relatedTerms);
  const color = CATEGORY_COLORS[term.category] ?? "from-gray-500/15 to-slate-500/10";

  // Find prev / next in sorted order
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  const idx = sorted.findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      <Link
        href="/glossary"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Marketing Glossary
      </Link>

      {/* Hero card */}
      <div
        className={`rounded-2xl border border-[var(--border)] overflow-hidden mb-8 bg-gradient-to-br ${color}`}
      >
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{term.term}</h1>
            <span className="shrink-0 mt-1 text-xs px-3 py-1 rounded-full bg-[var(--background)]/60 border border-[var(--border)] text-[var(--muted-foreground)] font-medium">
              {term.category}
            </span>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)]">
            {term.definition}
          </p>
        </div>
      </div>

      {/* Related terms */}
      {related.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
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
