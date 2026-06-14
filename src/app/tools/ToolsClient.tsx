"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export type PricingTier = "Free" | "Freemium" | "Paid" | "Open Source";

export type ToolCategory =
  | "SEO"
  | "Paid Advertising"
  | "Content Marketing"
  | "Email & CRM"
  | "Analytics"
  | "Social Media"
  | "CRO & Testing"
  | "Design & Brand"
  | "AI Marketing"
  | "Marketing Automation"
  | "Video & Podcast";

export type MarketingTool = {
  name: string;
  description: string;
  category: ToolCategory;
  pricing: PricingTier;
  url: string;
  emoji: string;
  tags: string[];
  popular?: boolean;
  note?: string;
};

type ToolsClientProps = {
  tools: MarketingTool[];
  categories: ToolCategory[];
  pricingTiers: PricingTier[];
};

const pricingColors: Record<PricingTier, string> = {
  Free: "bg-green-100 text-green-800",
  Freemium: "bg-blue-100 text-blue-800",
  Paid: "bg-amber-100 text-amber-800",
  "Open Source": "bg-purple-100 text-purple-800",
};

export default function ToolsClient({ tools, categories, pricingTiers }: ToolsClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "All">("All");
  const [activePricing, setActivePricing] = useState<PricingTier | "All">("All");

  const filtered = tools.filter((tool) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tags.some((t) => t.toLowerCase().includes(q));

    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    const matchesPricing = activePricing === "All" || tool.pricing === activePricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });

  const hasFilters = activeCategory !== "All" || activePricing !== "All";

  function clearAll() {
    setActiveCategory("All");
    setActivePricing("All");
    setSearch("");
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tools by name, description, or tag..."
        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
      />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {(["All", ...categories] as Array<ToolCategory | "All">).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pricing filters */}
      <div className="flex flex-wrap gap-2">
        {(["All", ...pricingTiers] as Array<PricingTier | "All">).map((tier) => (
          <button
            key={tier}
            onClick={() => setActivePricing(tier)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activePricing === tier
                ? "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* Results count + active filter summary */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="text-sm text-[var(--muted-foreground)]">
          Showing {filtered.length} of {tools.length} tools
        </p>
        {hasFilters && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--muted-foreground)]">
              Filtered:{" "}
              {[
                activeCategory !== "All" ? activeCategory : null,
                activePricing !== "All" ? activePricing : null,
              ]
                .filter(Boolean)
                .join(" x ")}
            </span>
            <button
              onClick={clearAll}
              className="text-[var(--accent-foreground)] underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-[var(--muted-foreground)]">
          No tools found for your filters. Try adjusting your search.
        </div>
      ) : (
        /* Tool cards grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tool) => (
            <div
              key={tool.name}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 hover:border-[var(--accent)] hover:shadow-sm transition-all flex flex-col gap-2"
            >
              {/* Top row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-2xl">{tool.emoji}</span>
                <span className="font-bold text-[var(--foreground)] leading-tight">{tool.name}</span>
                {tool.popular && (
                  <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                    Popular
                  </span>
                )}
              </div>

              {/* Pricing badge + category */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${pricingColors[tool.pricing]}`}
                >
                  {tool.pricing}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">{tool.category}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mt-2">
                {tool.description}
              </p>

              {/* Optional note */}
              {tool.note && (
                <p className="text-xs italic text-[var(--muted-foreground)]">{tool.note}</p>
              )}

              {/* Tags */}
              {tool.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs bg-[var(--muted)] text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Spacer to push button to bottom */}
              <div className="flex-1" />

              {/* Visit Tool link */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start mt-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
              >
                <ExternalLink size={12} />
                Visit Tool
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
