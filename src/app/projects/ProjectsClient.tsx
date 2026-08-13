"use client";

/**
 * ProjectsClient: the /projects hub's interactive body. Mirrors
 * src/app/tools/ToolsClient.tsx's structure closely (search box, filter
 * chip rows, results count, card grid, pagination) since it's the closest
 * existing pattern in this codebase for a client-side hub with search plus
 * multiple filter facets over a data array.
 *
 * Reads ONLY the slim ProjectCardData rows from projects-index.ts, never a
 * full Project (AGENTS.md Rule 41). Clicking "View details" navigates to the
 * project's own dedicated page (/projects/{category}/{id}) in a new tab,
 * same destination as the "Open project" link on a lesson page's
 * ProjectList, so a project always opens in its own page + tab regardless
 * of entry point.
 */

import React, { useState } from "react";
import { Clock, Building2, ArrowUpRight } from "lucide-react";
import type { ProjectCardData } from "@/lib/projects-index";
import type { ProjectTier, Archetype, ProjectMode } from "@/lib/projects/types";
import { CASE_COMPANIES } from "@/lib/case-companies";

type SortOption = "time-asc" | "time-desc" | "alpha";

const TIER_ORDER: ProjectTier[] = ["mini", "core", "big"];
const TIER_LABELS: Record<ProjectTier, string> = { mini: "Mini", core: "Core", big: "Big" };
const TIER_STYLES: Record<ProjectTier, React.CSSProperties> = {
  mini: { background: "rgba(59, 130, 246, 0.15)", color: "var(--foreground)", border: "1px solid rgba(59, 130, 246, 0.35)" },
  core: { background: "rgba(147, 51, 234, 0.15)", color: "var(--foreground)", border: "1px solid rgba(147, 51, 234, 0.35)" },
  big: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
};

const MODE_LABELS: Record<ProjectMode, string> = {
  diagnostic: "Diagnostic",
  simulation: "Simulation",
  build: "Build",
  teardown: "Teardown",
  drill: "Drill",
  calibration: "Calibration",
  "no-project": "No project",
};

const ARCHETYPE_LABELS: Record<Archetype, string> = {
  teardown: "Teardown",
  rebuild: "Rebuild",
  audit: "Audit",
  "head-to-head": "Head-to-Head",
  forecast: "Forecast",
  simulation: "Simulation",
  "reverse-engineer": "Reverse-Engineer",
  "build-the-asset": "Build the Asset",
  "ai-critique": "AI Critique",
};

const SORT_LABELS: Record<SortOption, string> = {
  "time-asc": "Time: Shortest first",
  "time-desc": "Time: Longest first",
  alpha: "Alphabetical",
};

const ITEMS_PER_PAGE = 9;

const cardCss = `
.project-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(99,102,241,0.12);
  border-color: var(--accent) !important;
}
`;

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

type ProjectsClientProps = {
  projects: ProjectCardData[];
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [search, setSearch] = useState("");
  const [activeTier, setActiveTier] = useState<ProjectTier | "All">("All");
  const [activeArchetype, setActiveArchetype] = useState<Archetype | "All">("All");
  const [activeMode, setActiveMode] = useState<ProjectMode | "All">("All");
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");
  const [sortBy, setSortBy] = useState<SortOption>("time-asc");
  const [page, setPage] = useState(1);

  const categories = Array.from(new Set(projects.map((p) => p.category))).sort();
  const archetypes = Array.from(new Set(projects.map((p) => p.archetype))).sort();
  const modes = Array.from(new Set(projects.map((p) => p.mode))).sort();
  const tiers = TIER_ORDER.filter((t) => projects.some((p) => p.tier === t));

  const filtered = projects.filter((project) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.lessonTitle.toLowerCase().includes(q) ||
      project.conceptsCovered.some((c) => c.toLowerCase().includes(q));

    const matchesTier = activeTier === "All" || project.tier === activeTier;
    const matchesArchetype = activeArchetype === "All" || project.archetype === activeArchetype;
    const matchesMode = activeMode === "All" || project.mode === activeMode;
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;

    return matchesSearch && matchesTier && matchesArchetype && matchesMode && matchesCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "time-asc") return a.timeMinutes - b.timeMinutes;
    if (sortBy === "time-desc") return b.timeMinutes - a.timeMinutes;
    return a.title.localeCompare(b.title);
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const safePage = Math.min(page, Math.max(1, totalPages));
  const paginated = sorted.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const hasFilters =
    activeTier !== "All" || activeArchetype !== "All" || activeMode !== "All" || activeCategory !== "All";

  function clearAll() {
    setActiveTier("All");
    setActiveArchetype("All");
    setActiveMode("All");
    setActiveCategory("All");
    setSearch("");
    setPage(1);
  }

  function handleFilterChange<T>(setter: (v: T) => void, value: T) {
    setter(value);
    setPage(1);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cardCss }} />
      <div className="flex flex-col gap-6 font-ui-sans">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search projects by title or concept..."
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
        />

        {/* Filter panel: all four facets as labeled dropdowns in a responsive
            grid, so the row count stays constant regardless of how many
            options a facet has (a chip row of 9 archetypes read as noise,
            not as options). */}
        <div
          className="rounded-2xl border p-4 sm:p-5 flex flex-col gap-4"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] m-0">
              Filters
            </h2>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-xs font-medium text-[var(--accent)] underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-tier" className="text-xs font-semibold text-[var(--muted-foreground)]">
                Tier
              </label>
              <select
                id="filter-tier"
                value={activeTier}
                onChange={(e) => handleFilterChange(setActiveTier, e.target.value as ProjectTier | "All")}
                className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="All">All tiers</option>
                {tiers.map((t) => (
                  <option key={t} value={t}>
                    {TIER_LABELS[t]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-mode" className="text-xs font-semibold text-[var(--muted-foreground)]">
                Mode
              </label>
              <select
                id="filter-mode"
                value={activeMode}
                onChange={(e) => handleFilterChange(setActiveMode, e.target.value as ProjectMode | "All")}
                className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="All">All modes</option>
                {modes.map((m) => (
                  <option key={m} value={m}>
                    {MODE_LABELS[m]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-archetype" className="text-xs font-semibold text-[var(--muted-foreground)]">
                Archetype
              </label>
              <select
                id="filter-archetype"
                value={activeArchetype}
                onChange={(e) => handleFilterChange(setActiveArchetype, e.target.value as Archetype | "All")}
                className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="All">All archetypes</option>
                {archetypes.map((a) => (
                  <option key={a} value={a}>
                    {ARCHETYPE_LABELS[a]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-category" className="text-xs font-semibold text-[var(--muted-foreground)]">
                Category
              </label>
              <select
                id="filter-category"
                value={activeCategory}
                onChange={(e) => handleFilterChange(setActiveCategory, e.target.value)}
                className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="All">All categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {titleCase(c)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasFilters && (
            <p className="text-xs text-[var(--muted-foreground)] m-0">
              Active:{" "}
              {[
                activeTier !== "All" ? TIER_LABELS[activeTier] : null,
                activeMode !== "All" ? MODE_LABELS[activeMode] : null,
                activeArchetype !== "All" ? ARCHETYPE_LABELS[activeArchetype] : null,
                activeCategory !== "All" ? titleCase(activeCategory) : null,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
        </div>

        {/* Sort + results count */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-[var(--muted-foreground)]">
            Showing {paginated.length} of {sorted.length} projects
            {totalPages > 1 && ` (page ${safePage} of ${totalPages})`}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((opt) => (
              <option key={opt} value={opt}>
                {SORT_LABELS[opt]}
              </option>
            ))}
          </select>
        </div>

        {/* Empty state */}
        {sorted.length === 0 ? (
          <div className="text-center py-16 text-[var(--muted-foreground)]">
            No projects found for your filters. Try adjusting your search.
          </div>
        ) : (
          <>
            {/* Project cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {paginated.map((project) => {
                const company = CASE_COMPANIES.find((c) => c.id === project.companyId);
                return (
                  <div
                    key={project.id}
                    className="project-card"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {/* Top row: tier + archetype + mode */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          padding: "0.2rem 0.6rem",
                          borderRadius: "999px",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          ...TIER_STYLES[project.tier],
                        }}
                      >
                        {TIER_LABELS[project.tier]}
                      </span>
                      <span className="text-xs font-medium text-[var(--muted-foreground)]">
                        {ARCHETYPE_LABELS[project.archetype]}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)]">&middot; {MODE_LABELS[project.mode]}</span>
                    </div>

                    <h3 className="font-display text-base font-semibold text-[var(--foreground)] m-0 leading-snug">{project.title}</h3>

                    {/* Lesson link */}
                    <a
                      href={`/learn/${project.category}/${project.lessonSlug}#project-${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                    >
                      From: {project.lessonTitle}
                    </a>

                    {/* Meta row: time + company */}
                    <div className="flex items-center gap-3 flex-wrap text-xs text-[var(--muted-foreground)] mt-1">
                      <span className="inline-flex items-center gap-1 font-data tabular-nums">
                        <Clock size={12} />
                        {project.timeMinutes} min
                      </span>
                      {company && (
                        <span className="inline-flex items-center gap-1">
                          <Building2 size={12} />
                          {company.name}
                        </span>
                      )}
                    </div>

                    {/* Concepts */}
                    {project.conceptsCovered.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.25rem" }}>
                        {project.conceptsCovered.slice(0, 3).map((concept) => (
                          <span
                            key={concept}
                            style={{
                              padding: "0.18rem 0.55rem",
                              borderRadius: "999px",
                              fontSize: "0.7rem",
                              background: "var(--muted)",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Spacer */}
                    <div style={{ flex: 1 }} />

                    <a
                      href={`/projects/${project.category}/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start mt-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      View details
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                );
              })}
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
