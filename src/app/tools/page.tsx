import type { Metadata } from "next";
import { TOOLS, TOOL_CATEGORIES, PRICING_TIERS } from "@/lib/tools-directory";
import ToolsClient from "./ToolsClient";
import PageMasthead from "@/components/PageMasthead";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Tools Directory 2026 | Marketing Academy",
  description:
    `Browse ${TOOLS.length} marketing tools for SEO, paid ads, email, analytics, AI, social media and more. Filter by category and pricing to find the right tool for your stack.`,
  openGraph: {
    title: "Marketing Tools Directory 2026 | Marketing Academy",
    description:
      `Browse ${TOOLS.length} marketing tools for SEO, paid ads, email, analytics, AI, social media and more. Filter by category and pricing to find the right tool for your stack.`,
    type: "website",
  },
};

export default function ToolsPage() {
  const totalTools = TOOLS.length;
  const totalCategories = TOOL_CATEGORIES.length;
  const freeTools = TOOLS.filter(
    (t) => t.pricing === "Free" || t.pricing === "Freemium"
  ).length;
  const openSourceTools = TOOLS.filter(
    (t) => t.pricing === "Open Source"
  ).length;

  const stats = [
    { code: "01", value: `${totalTools}+`, label: "Total tools" },
    { code: "02", value: String(totalCategories), label: "Categories" },
    { code: "03", value: String(freeTools), label: "Free or freemium" },
    { code: "04", value: String(openSourceTools), label: "Open source" },
  ];

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Toolkit"
        right={`${totalTools} tools · ${totalCategories} categories`}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Tool-agnostic, always</p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">
          Marketing Tools Directory
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-8 font-ui-sans leading-relaxed">
          Find the right tool for every job.{" "}
          <span className="text-[var(--foreground)] font-medium">
            {totalTools}+ tools
          </span>{" "}
          across{" "}
          <span className="text-[var(--foreground)] font-medium">
            {totalCategories} categories
          </span>
          , filtered by what matters to you.
        </p>

        {/* Stats — specimen-row pattern, consistent with /projects and Home */}
        <div className="border border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--border)] max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="p-4 font-ui-sans">
              <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{s.code}</p>
              <p className="font-display font-semibold text-2xl text-[var(--foreground)]">{s.value}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive client section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ToolsClient
          tools={TOOLS}
          categories={TOOL_CATEGORIES}
          pricingTiers={PRICING_TIERS}
        />
      </section>

      {/* Submit a tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-ui-sans">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5">
          <div>
            <p className="font-semibold text-[var(--foreground)]">Know a tool we missed?</p>
            <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
              We review every suggestion and add the best ones to the directory.
            </p>
          </div>
          <a
            id="submit-tool-link"
            href="mailto:suryaraj8991@gmail.com?subject=Tool%20Suggestion%20for%20Marketing%20Academy&body=Tool%20name%3A%0AURL%3A%0ACategory%3A%0AWhy%20it%20belongs%20here%3A"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] font-medium text-sm hover:border-[var(--accent)] transition-colors"
          >
            + Submit a tool
          </a>
        </div>
      </section>

      {/* Learn section */}
      <section className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="font-display font-semibold text-2xl text-[var(--foreground)] mb-3">
            Learn how to use these tools
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto mb-8 font-ui-sans">
            Knowing a tool exists is just the start. The Marketing Tools lessons
            walk you through real workflows, setup guides, and best practices
            for the tools that matter most.
          </p>
          <Link
            href="/learn/tools"
            className="font-ui-sans inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
          >
            Explore all Marketing Tools lessons
          </Link>
        </div>
      </section>
    </>
  );
}
