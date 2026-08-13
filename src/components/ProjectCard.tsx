"use client";

/**
 * ProjectCard: renders ONE Project (src/lib/projects/types.ts).
 *
 * Two variants:
 *   - "preview" (default): the summary (title, tier badge, archetype,
 *     timeEstimate, objective, scenario, brief, a completion toggle) plus an
 *     "Open project" link that navigates to the project's own dedicated page
 *     (/projects/{category}/{id}) in a new tab. Used inside ProjectList on
 *     the lesson page. Every project ALWAYS opens in its own page and tab
 *     from here, never expands inline, so behavior matches the /projects hub
 *     regardless of entry point.
 *   - "full": the same summary header, but instead of the link, the
 *     mode-specific body always renders:
 *       - project.steps        -> one <ProjectStep step={s} /> row per step
 *                                  (diagnostic/audit/teardown-as-steps)
 *       - project.stages        -> <SimulationRunner stages liveTrack />
 *       - project.teardownItems -> <TeardownItemCard item={item} /> per item
 *     plus, always: <ToolStack>, a dataset download link if present, and a
 *     successCriteria checklist. Used only by the dedicated project page
 *     (src/app/projects/[category]/[slug]/page.tsx).
 *
 * NOTE ON DEPENDENCIES BUILT IN PARALLEL:
 *   - `./ProjectStep` was being built by another agent at the same time this
 *     file was written; it landed mid-session with the expected contract
 *     (`<ProjectStep step={ProjectStep} />`), imported as-is below.
 *   - `./SimulationRunner` had not landed yet as of the last check. Imported
 *     on the same assumed contract (`stages`, `liveTrack` props per
 *     PROJECTS_PLAN.md / types.ts); if it ships with different prop names
 *     this needs a one-line fixup, not a rewrite.
 *   - `src/lib/projects-progress.ts` also landed mid-session (localStorage
 *     completion tracking, `PROJECT_TOGGLE_EVENT`). The completion toggle
 *     below is wired to it directly rather than left as a local-only stub.
 */

import { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Circle, Download } from "lucide-react";
import ProjectStep from "./ProjectStep";
import SimulationRunner from "./SimulationRunner";
import TeardownItemCard from "./TeardownItemCard";
import ToolStack from "./ToolStack";
import { CASE_COMPANIES } from "@/lib/case-companies";
import type { Project, ProjectTier } from "@/lib/projects/types";
import {
  isProjectComplete,
  markProjectComplete,
  markProjectIncomplete,
  PROJECT_TOGGLE_EVENT,
} from "@/lib/projects-progress";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";

const tierLabels: Record<ProjectTier, string> = {
  mini: "Mini",
  core: "Core",
  big: "Big",
};

const tierStyles: Record<ProjectTier, React.CSSProperties> = {
  mini: { background: "rgba(59, 130, 246, 0.15)", color: "var(--foreground)", border: "1px solid rgba(59, 130, 246, 0.35)" },
  core: { background: "rgba(147, 51, 234, 0.15)", color: "var(--foreground)", border: "1px solid rgba(147, 51, 234, 0.35)" },
  big: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
};

const archetypeLabels: Record<Project["archetype"], string> = {
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

function companyAvatar(name: string) {
  const letter = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "9999px",
        background: "var(--muted)",
        color: "var(--foreground)",
        fontSize: "0.85rem",
        fontWeight: 700,
        flexShrink: 0,
        border: "1px solid var(--border)",
      }}
    >
      {letter}
    </span>
  );
}

type Props = {
  project: Project;
  id?: string;
  /** Needed to build the "Open project" link (/projects/{category}/{id}). Unused in "full" variant. */
  category?: string;
  /** "preview" (default) links out to the dedicated page; "full" renders the body inline, no link. */
  variant?: "preview" | "full";
};

export default function ProjectCard({ project, id, category, variant = "preview" }: Props) {
  // Initial false matches SSR output exactly (localStorage is client-only),
  // so no mount-guard is needed here, only the read is deferred to an effect.
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(isProjectComplete(project.id));
  }, [project.id]);

  // Stay in sync if another ProjectCard instance for this same project
  // (e.g. rendered on both a lesson page and a track/hub page) toggles it.
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ id: string; done: boolean; kind: "project" | "step" }>;
      if (ce.detail.kind === "project" && ce.detail.id === project.id) setDone(ce.detail.done);
    };
    window.addEventListener(PROJECT_TOGGLE_EVENT, handler);
    return () => window.removeEventListener(PROJECT_TOGGLE_EVENT, handler);
  }, [project.id]);

  function toggleDone() {
    const next = !done;
    setDone(next);
    if (next) {
      markProjectComplete(project.id);
      const newState = addXP("project", project.id);
      const unlocked = checkAchievements(newState);
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
    } else {
      markProjectIncomplete(project.id);
    }
    window.dispatchEvent(
      new CustomEvent(PROJECT_TOGGLE_EVENT, { detail: { id: project.id, done: next, kind: "project" } })
    );
  }

  const company = CASE_COMPANIES.find((c) => c.id === project.companyId);

  return (
    <div
      id={id}
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      {/* Header, always visible */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              style={{
                padding: "0.2rem 0.6rem",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                ...tierStyles[project.tier],
              }}
            >
              {tierLabels[project.tier]}
            </span>
            <span className="text-xs font-medium text-[var(--muted-foreground)]">
              {archetypeLabels[project.archetype]}
            </span>
            <span className="text-xs text-[var(--muted-foreground)]">&middot; {project.timeEstimate}</span>
          </div>

          <button
            onClick={toggleDone}
            aria-pressed={done}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={
              done
                ? { background: "rgba(22,163,74,0.15)", color: "rgb(22 163 74)", border: "1px solid rgba(22,163,74,0.3)" }
                : { background: "var(--muted)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }
            }
          >
            {done ? <CheckCircle2 size={14} /> : <Circle size={14} />}
            {done ? "Completed" : "Mark complete"}
          </button>
        </div>

        <h3 className="text-lg font-bold text-[var(--foreground)] m-0">{project.title}</h3>

        {company && (
          <div className="flex items-center gap-2">
            {companyAvatar(company.name)}
            <span className="text-sm text-[var(--muted-foreground)]">{company.name}</span>
          </div>
        )}

        <p className="text-sm text-[var(--foreground)] leading-relaxed m-0">
          <span className="font-semibold">Objective: </span>
          {project.objective}
        </p>

        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed m-0">{project.scenario}</p>

        <p className="text-sm text-[var(--foreground)] leading-relaxed m-0">{project.brief}</p>

        {variant === "preview" && category && (
          <a
            href={`/projects/${category}/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold mt-1"
            style={{ color: "var(--accent)" }}
          >
            Open project
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      {/* Full body, always rendered in the "full" variant (the dedicated project page) */}
      {variant === "full" && (
        <div
          className="p-5 flex flex-col gap-6 border-t"
          style={{ borderColor: "var(--border)", background: "var(--muted)" }}
        >
          {project.steps && project.steps.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[var(--foreground)] m-0">Steps</h4>
              {project.steps.map((s) => (
                <ProjectStep key={s.stepId} step={s} />
              ))}
            </div>
          )}

          {project.stages && project.stages.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[var(--foreground)] m-0">Simulation</h4>
              <SimulationRunner stages={project.stages} liveTrack={project.liveTrack} />
            </div>
          )}

          {project.teardownItems && project.teardownItems.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[var(--foreground)] m-0">Specimens to review</h4>
              {project.teardownItems.map((item) => (
                <TeardownItemCard key={item.itemId} item={item} />
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[var(--foreground)] m-0">Recommended tools</h4>
            <ToolStack stack={project.toolStack} />
          </div>

          {project.datasetUrl && (
            <a
              href={project.datasetUrl}
              download
              className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-lg text-sm font-medium"
              style={{ background: "var(--card)", color: "var(--foreground)", border: "1px solid var(--border)" }}
            >
              <Download size={14} />
              Download project dataset
            </a>
          )}

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-bold text-[var(--foreground)] m-0">Success criteria</h4>
            <ul className="flex flex-col gap-1.5 m-0 p-0" style={{ listStyle: "none" }}>
              {project.successCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
