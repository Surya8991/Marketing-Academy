import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, MarketingTool } from "@/lib/tools-directory";
import { CUSTOM_COMPARISONS } from "@/lib/comparisons-data";
import { ArrowLeft, ExternalLink, Check, X, Award, BookOpen } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return {};
  const [slugA, slugB] = parts;

  const toolA = TOOLS.find((t) => slugify(t.name) === slugA);
  const toolB = TOOLS.find((t) => slugify(t.name) === slugB);

  if (!toolA || !toolB) {
    return {
      title: "Comparison Not Found | Marketing Academy",
    };
  }

  return {
    title: `${toolA.name} vs ${toolB.name} Comparison | Marketing Academy`,
    description: `Compare ${toolA.name} vs ${toolB.name} side-by-side. Read structured features, pros & cons, pricing tiers, and expert software recommendations.`,
  };
}

export function generateStaticParams() {
  // Pre-render our 7 standard comparisons
  return [
    { slug: "semrush-vs-ahrefs" },
    { slug: "mailchimp-vs-klaviyo" },
    { slug: "google-analytics-4-vs-mixpanel" },
    { slug: "chatgpt-vs-claude" },
    { slug: "buffer-vs-hootsuite" },
    { slug: "optimizely-vs-vwo" },
    { slug: "wordpress-vs-ghost" },
  ];
}

const hoverCSS = `
  .back-link:hover { color: var(--accent) !important; }
  .btn-primary:hover { opacity: 0.9; }
  .btn-secondary:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
`;

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const parts = slug.split("-vs-");
  if (parts.length !== 2) notFound();

  const [slugA, slugB] = parts;

  // Locate the tools
  const toolA = TOOLS.find((t) => slugify(t.name) === slugA);
  const toolB = TOOLS.find((t) => slugify(t.name) === slugB);

  if (!toolA || !toolB) notFound();

  const isSameCategory = toolA.category === toolB.category;
  const customData = CUSTOM_COMPARISONS[slug];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />

      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/compare"
          className="back-link inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to all comparisons
        </Link>
      </div>

      {/* Header Cards (Side-by-Side comparison title) */}
      <div className="text-center mb-10">
        <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold uppercase tracking-wider mb-3 inline-block">
          {toolA.category} Comparison
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.2]">
          {toolA.name} <span className="text-[var(--muted-foreground)] font-normal text-2xl sm:text-4xl">vs</span> {toolB.name}
        </h1>
      </div>

      {/* Category Mismatch Check */}
      {!isSameCategory && (
        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6 mb-10 text-center">
          <h2 className="text-lg font-bold text-yellow-600 mb-2">Category Mismatch</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Note: <strong>{toolA.name}</strong> ({toolA.category}) and <strong>{toolB.name}</strong> ({toolB.category}) belong to different marketing disciplines. Side-by-side comparison tables are optimized for tools in the same category.
          </p>
        </div>
      )}

      {/* Cards comparison grid */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {/* Tool A Card */}
        <div className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{toolA.emoji}</span>
            <h2 className="text-xl font-bold">{toolA.name}</h2>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 flex-grow">
            {toolA.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {toolA.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">Pricing: {toolA.pricing}</span>
            <a
              href={toolA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              Visit Website <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Tool B Card */}
        <div className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{toolB.emoji}</span>
            <h2 className="text-xl font-bold">{toolB.name}</h2>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 flex-grow">
            {toolB.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {toolB.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">Pricing: {toolB.pricing}</span>
            <a
              href={toolB.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              Visit Website <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Gold Standard custom details OR dynamic fallback review */}
      {customData ? (
        <div className="space-y-10">
          {/* Winner banner */}
          <div className="rounded-2xl border border-[var(--accent)] bg-[var(--accent)]/5 p-6 md:p-8 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Recommended Choice</h3>
              <p className="font-semibold text-[var(--accent)] mb-2">{customData.winner}</p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {customData.winnerReason}
              </p>
            </div>
          </div>

          {/* Detailed comparison table */}
          <div>
            <h3 className="text-xl font-bold mb-4">Core Feature Matrix</h3>
            <div className="overflow-x-auto border border-[var(--border)] rounded-xl bg-[var(--card)]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]/50">
                    <th className="p-4 font-semibold">Key Capabilities</th>
                    <th className="p-4 font-semibold">{toolA.name}</th>
                    <th className="p-4 font-semibold">{toolB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {customData.features.map((f) => (
                    <tr key={f.feature} className="hover:bg-[var(--muted)]/20 transition-colors">
                      <td className="p-4 font-medium">{f.feature}</td>
                      <td className="p-4 text-[var(--muted-foreground)]">{f.toolAVal}</td>
                      <td className="p-4 text-[var(--muted-foreground)]">{f.toolBVal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros & Cons */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pros & Cons</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Tool A Pros/Cons */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                <h4 className="font-bold border-b border-[var(--border)] pb-2 mb-3">{toolA.name}</h4>
                <div className="space-y-3">
                  <h5 className="text-xs uppercase font-semibold text-green-600 tracking-wider">Pros</h5>
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    {customData.prosA.map((p, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <h5 className="text-xs uppercase font-semibold text-red-600 tracking-wider pt-3">Cons</h5>
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    {customData.consA.map((c, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tool B Pros/Cons */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                <h4 className="font-bold border-b border-[var(--border)] pb-2 mb-3">{toolB.name}</h4>
                <div className="space-y-3">
                  <h5 className="text-xs uppercase font-semibold text-green-600 tracking-wider">Pros</h5>
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    {customData.prosB.map((p, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <h5 className="text-xs uppercase font-semibold text-red-600 tracking-wider pt-3">Cons</h5>
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    {customData.consB.map((c, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Verdict */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <h3 className="text-lg font-bold mb-2">Pricing Comparison</h3>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {customData.pricingBreakdown}
            </p>
          </div>

          {/* Final Verdict */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30">
            <h3 className="text-lg font-bold mb-2">Final Verdict</h3>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {customData.verdict}
            </p>
          </div>

          {/* Recommended lesson card */}
          <div className="rounded-2xl border border-[var(--border)] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-br from-[var(--accent)]/5 to-transparent">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-semibold mb-1">
                <BookOpen size={14} />
                Related Academy Lesson
              </div>
              <h4 className="font-bold text-base">{customData.recommendedLesson.title}</h4>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                Learn the strategic framework behind using these tools effectively.
              </p>
            </div>
            <Link
              href={customData.recommendedLesson.path}
              className="btn-primary shrink-0 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-semibold transition-opacity"
            >
              Start Lesson
            </Link>
          </div>
        </div>
      ) : (
        /* Fallback Dynamic Comparison Layout */
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Feature Comparison</h3>
            <div className="overflow-x-auto border border-[var(--border)] rounded-xl bg-[var(--card)]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]/50">
                    <th className="p-4 font-semibold">Specification</th>
                    <th className="p-4 font-semibold">{toolA.name}</th>
                    <th className="p-4 font-semibold">{toolB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr>
                    <td className="p-4 font-medium">Pricing Tier</td>
                    <td className="p-4 text-[var(--muted-foreground)]">{toolA.pricing}</td>
                    <td className="p-4 text-[var(--muted-foreground)]">{toolB.pricing}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Category</td>
                    <td className="p-4 text-[var(--muted-foreground)]">{toolA.category}</td>
                    <td className="p-4 text-[var(--muted-foreground)]">{toolB.category}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Core Capabilities</td>
                    <td className="p-4 text-[var(--muted-foreground)]">
                      {toolA.tags.join(", ")}
                    </td>
                    <td className="p-4 text-[var(--muted-foreground)]">
                      {toolB.tags.join(", ")}
                    </td>
                  </tr>
                  {toolA.note || toolB.note ? (
                    <tr>
                      <td className="p-4 font-medium">Important Notes</td>
                      <td className="p-4 text-[var(--muted-foreground)]">{toolA.note || "-"}</td>
                      <td className="p-4 text-[var(--muted-foreground)]">{toolB.note || "-"}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <h3 className="text-lg font-bold mb-2">Pricing Analysis</h3>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              <strong>{toolA.name}</strong> operates on a <strong>{toolA.pricing}</strong> model, while <strong>{toolB.name}</strong> uses a <strong>{toolB.pricing}</strong> tier. For startups, check if a Freemium or Open Source option exists to minimize overhead before moving to Paid plans.
            </p>
          </div>

          {/* Fallback recommendation */}
          <div className="rounded-2xl border border-[var(--border)] p-6 bg-gradient-to-br from-[var(--accent)]/5 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-semibold mb-1">
                <BookOpen size={14} />
                Explore the Curriculum
              </div>
              <h4 className="font-bold text-base">Learn {toolA.category} Strategies</h4>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                Understand the tactical primitives and analytics rules behind these software types.
              </p>
            </div>
            <Link
              href="/learn"
              className="btn-primary shrink-0 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-semibold transition-opacity"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
