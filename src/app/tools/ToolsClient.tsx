"use client";

import React, { useState } from "react";
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

const pricingStyles: Record<PricingTier, React.CSSProperties> = {
  Free: { background: "rgba(22, 163, 74, 0.15)", color: "var(--foreground)", border: "1px solid rgba(22, 163, 74, 0.35)" },
  Freemium: { background: "rgba(59, 130, 246, 0.15)", color: "var(--foreground)", border: "1px solid rgba(59, 130, 246, 0.35)" },
  Paid: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
  "Open Source": { background: "rgba(147, 51, 234, 0.15)", color: "var(--foreground)", border: "1px solid rgba(147, 51, 234, 0.35)" },
};

const ITEMS_PER_PAGE = 12;

const toolCardCss = `
.tool-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(99,102,241,0.12);
  border-color: var(--accent) !important;
}
`;

export default function ToolsClient({ tools, categories, pricingTiers }: ToolsClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "All">("All");
  const [activePricing, setActivePricing] = useState<PricingTier | "All">("All");
  const [page, setPage] = useState(1);

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

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(page, Math.max(1, totalPages));
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const hasFilters = activeCategory !== "All" || activePricing !== "All";

  function clearAll() {
    setActiveCategory("All");
    setActivePricing("All");
    setSearch("");
    setPage(1);
  }

  function handleFilterChange<T>(setter: (v: T) => void, value: T) {
    setter(value);
    setPage(1);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: toolCardCss }} />
      <div className="flex flex-col gap-6">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search tools by name, description, or tag..."
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
        />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as Array<ToolCategory | "All">).map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(setActiveCategory, cat)}
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
              onClick={() => handleFilterChange(setActivePricing, tier)}
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
            Showing {paginated.length} of {filtered.length} tools
            {totalPages > 1 && ` (page ${safePage} of ${totalPages})`}
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
          <>
            {/* Tool cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {paginated.map((tool) => (
                <div
                  key={tool.name}
                  className="tool-card"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{tool.emoji}</span>
                    <span
                      style={{
                        fontWeight: 700,
                        color: "var(--foreground)",
                        fontSize: "1rem",
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {tool.name}
                    </span>
                    {tool.popular && (
                      <span
                        style={{
                          padding: "0.2rem 0.55rem",
                          borderRadius: "999px",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          background: "rgba(234, 179, 8, 0.15)",
                          color: "var(--foreground)",
                          border: "1px solid rgba(234, 179, 8, 0.35)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          flexShrink: 0,
                        }}
                      >
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Pricing badge + category */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        ...pricingStyles[tool.pricing],
                      }}
                    >
                      {tool.pricing}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{tool.category}</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.65,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      marginTop: "0.25rem",
                    }}
                  >
                    {tool.description}
                  </p>

                  {/* Optional note */}
                  {tool.note && (
                    <p style={{ margin: 0, fontSize: "0.75rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
                      {tool.note}
                    </p>
                  )}

                  {/* Tags */}
                  {tool.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.25rem" }}>
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "0.18rem 0.55rem",
                            borderRadius: "999px",
                            fontSize: "0.7rem",
                            background: "var(--muted)",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Spacer */}
                  <div style={{ flex: 1 }} />

                  {/* Visit Tool link */}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      alignSelf: "flex-start",
                      marginTop: "0.25rem",
                      padding: "0.45rem 0.95rem",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                      background: "transparent",
                      transition: "border-color 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                    }}
                  >
                    <ExternalLink size={12} />
                    Visit Tool
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    color: safePage === 1 ? "var(--muted-foreground)" : "var(--foreground)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: safePage === 1 ? "not-allowed" : "pointer",
                    opacity: safePage === 1 ? 0.5 : 1,
                  }}
                >
                  &larr; Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    style={{
                      padding: "0.5rem 0.85rem",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: safePage === p ? "var(--accent)" : "var(--border)",
                      background: safePage === p ? "var(--accent)" : "var(--card)",
                      color: safePage === p ? "var(--accent-foreground)" : "var(--foreground)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      minWidth: "2.25rem",
                    }}
                  >
                    {p}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    color: safePage === totalPages ? "var(--muted-foreground)" : "var(--foreground)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: safePage === totalPages ? "not-allowed" : "pointer",
                    opacity: safePage === totalPages ? 0.5 : 1,
                  }}
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
