import type { Metadata } from "next";
import { TOOLS, TOOL_CATEGORIES, PRICING_TIERS } from "@/lib/tools-directory";
import ToolsClient from "./ToolsClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Tools Directory 2025 | Marketing Academy",
  description:
    "Browse 85+ marketing tools for SEO, paid ads, email, analytics, AI, social media and more. Filter by category and pricing to find the right tool for your stack.",
  openGraph: {
    title: "Marketing Tools Directory 2025 | Marketing Academy",
    description:
      "Browse 85+ marketing tools for SEO, paid ads, email, analytics, AI, social media and more. Filter by category and pricing to find the right tool for your stack.",
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

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
            Marketing Tools Directory
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
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
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {totalTools}+
            </div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">
              Total Tools
            </div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {totalCategories}
            </div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">
              Categories
            </div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {freeTools}
            </div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">
              Free or Freemium
            </div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {openSourceTools}
            </div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">
              Open Source
            </div>
          </div>
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

      {/* Learn section */}
      <section className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
            Learn how to use these tools
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto mb-8">
            Knowing a tool exists is just the start. The Marketing Tools lessons
            walk you through real workflows, setup guides, and best practices
            for the tools that matter most.
          </p>
          <Link
            href="/learn/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
          >
            Explore all Marketing Tools lessons
          </Link>
        </div>
      </section>
    </main>
  );
}
