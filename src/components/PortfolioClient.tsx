"use client";

/**
 * PortfolioClient: the /portfolio page's interactive body (PROJECTS_PLAN.md
 * Stage 9.1 / Phase 3 "career layer"). Reads which projects the learner has
 * marked complete (src/lib/projects-progress.ts, localStorage) and renders
 * them as interview-ready evidence: title, company, deliverable context,
 * and a link to the project's own dedicated page.
 *
 * Reads ONLY the slim ProjectCardData rows from projects-index.ts, never a
 * full Project (AGENTS.md Rule 41) — mirrors ProjectsClient.tsx's pattern,
 * including reusing CASE_COMPANIES for display names (the same precedent
 * ProjectsClient.tsx already sets for this exact "use client" context).
 *
 * "Export as JSON" builds a Blob client-side and triggers a download via a
 * transient <a download> + object URL, the standard browser pattern (this
 * is the live site, not a sandboxed Artifact, so download links work).
 */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Building2, ArrowUpRight, Download, Briefcase } from "lucide-react";
import type { ProjectCardData } from "@/lib/projects-index";
import type { ProjectTier, Archetype, ProjectMode } from "@/lib/projects/types";
import { CASE_COMPANIES } from "@/lib/case-companies";
import { getProjectProgress, PROJECT_TOGGLE_EVENT } from "@/lib/projects-progress";

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

const cardCss = `
.portfolio-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.portfolio-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(99,102,241,0.12);
  border-color: var(--accent) !important;
}
`;

type PortfolioClientProps = {
  projects: ProjectCardData[];
};

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  // Completed-ids read happens client-side only (localStorage), so start
  // empty and populate after mount, avoiding an SSR/client hydration
  // mismatch (the same pattern MarkComplete.tsx and Quiz.tsx use).
  const [completedIds, setCompletedIds] = useState<string[] | null>(null);

  useEffect(() => {
    setCompletedIds(getProjectProgress().completedProjectIds);
    const handler = () => setCompletedIds(getProjectProgress().completedProjectIds);
    window.addEventListener(PROJECT_TOGGLE_EVENT, handler);
    return () => window.removeEventListener(PROJECT_TOGGLE_EVENT, handler);
  }, []);

  if (completedIds === null) {
    // Loading/SSR placeholder, matches height roughly to avoid layout jump.
    return <div style={{ minHeight: "200px" }} />;
  }

  const completed = projects.filter((p) => completedIds.includes(p.id));
  const totalMinutes = completed.reduce((sum, p) => sum + p.timeMinutes, 0);

  function downloadJson() {
    const payload = completed.map((p) => {
      const company = CASE_COMPANIES.find((c) => c.id === p.companyId);
      return {
        title: p.title,
        lesson: p.lessonTitle,
        category: p.category,
        tier: p.tier,
        archetype: p.archetype,
        mode: p.mode,
        timeMinutes: p.timeMinutes,
        company: company?.name ?? p.companyId,
        conceptsCovered: p.conceptsCovered,
        url: `https://marketingacademy.com/projects/${p.category}/${p.id}`,
      };
    });
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "marketing-academy-portfolio.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (completed.length === 0) {
    return (
      <div
        className="rounded-2xl border p-8 sm:p-12 text-center font-ui-sans"
        style={{ borderColor: "var(--border)", background: "var(--card)" }}
      >
        <Briefcase size={32} className="mx-auto mb-3 text-[var(--muted-foreground)]" />
        <h2 className="font-display text-lg font-semibold mb-2">No completed projects yet</h2>
        <p className="text-sm text-[var(--muted-foreground)] max-w-md mx-auto mb-5">
          Every practice project you finish shows up here as portfolio-ready evidence, deliverable, company, and
          concept, ready to talk through in an interview.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
        >
          Browse practice projects
          <ArrowUpRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cardCss }} />
      <div className="flex flex-col gap-6 font-ui-sans">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-[var(--muted-foreground)]">
            <span className="text-[var(--foreground)] font-semibold">{completed.length}</span> completed project
            {completed.length === 1 ? "" : "s"} ·{" "}
            {totalMinutes >= 60 ? `${Math.round(totalMinutes / 60)}h` : `${totalMinutes}m`} of hands-on work
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadJson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              <Download size={14} />
              Export as JSON
            </button>
            <Link
              href="/interview-prep"
              className="text-sm font-medium text-[var(--accent)] underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Turn these into interview stories &rarr;
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {completed.map((project) => {
            const company = CASE_COMPANIES.find((c) => c.id === project.companyId);
            return (
              <div
                key={project.id}
                className="portfolio-card"
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

                <h3 className="font-display text-base font-semibold text-[var(--foreground)] m-0 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[var(--muted-foreground)]">From: {project.lessonTitle}</p>

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
      </div>
    </>
  );
}
