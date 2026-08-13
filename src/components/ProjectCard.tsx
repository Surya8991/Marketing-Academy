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
 * VISUAL LANGUAGE (Session 80 redesign): the "full" body deliberately does
 * NOT wrap every section in its own rounded card box, that was the original
 * v1 shape and reads as a stack of identical widgets. Instead it follows the
 * site's existing "field manual" identity (PageMasthead.tsx, homepage): thin
 * hairline `border-t` dividers between sections, font-data mono eyebrows,
 * font-display (Fraunces) for section subheads, restrained color. Only two
 * things stay genuinely boxed: <DecisionBox> (an interactive control needs a
 * contained hit-area) and <ProjectStep>/<TeardownItemCard>/<SimulationRunner>
 * (other components, own their own established style, not touched here).
 * The one deliberate signature move: Professional Recommendation and Key
 * Takeaway both get a large Fraunces pull-quote treatment with a thick
 * left accent rule, the two moments in the page actually worth weight.
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
import { ArrowUpRight, CheckCircle2, Circle, Download, HelpCircle } from "lucide-react";
import ProjectStep from "./ProjectStep";
import SimulationRunner from "./SimulationRunner";
import TeardownItemCard from "./TeardownItemCard";
import ToolStack from "./ToolStack";
import DecisionBox from "./DecisionBox";
import OutputSample from "./OutputSample";
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

/** Mono, tracked-out eyebrow label, the section-heading device used everywhere
 *  else in the "field manual" identity (PageMasthead, homepage section labels). */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-data text-[0.68rem] tracking-[0.08em] uppercase text-[var(--accent)] m-0">
      {children}
    </p>
  );
}

/** A section wrapped in a hairline top rule instead of a card box, the
 *  default section shell for everything except genuinely interactive/
 *  contained pieces (DecisionBox, ProjectStep, TeardownItemCard). */
function Section({ eyebrow, title, children }: { eyebrow: string; title?: string; children: React.ReactNode }) {
  return (
    <div className="pt-6 border-t flex flex-col gap-3" style={{ borderColor: "var(--border)" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {title && <h4 className="font-display font-semibold text-lg text-[var(--foreground)] m-0">{title}</h4>}
      {children}
    </div>
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
  const stepCount = project.steps?.length ?? 0;

  return (
    <div
      id={id}
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      {/* Header, always visible */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">
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
            <span className="font-data text-xs text-[var(--muted-foreground)]">
              {archetypeLabels[project.archetype]}
            </span>
            <span className="font-data text-xs text-[var(--muted-foreground)]">&middot; {project.timeEstimate}</span>
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

        <h3 className="font-display font-semibold text-xl sm:text-2xl leading-tight text-[var(--foreground)] m-0">
          {project.title}
        </h3>

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

        {project.keyQuestion && (
          <div className="flex items-start gap-2 pl-3" style={{ borderLeft: "2px solid var(--accent)" }}>
            <HelpCircle size={15} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} aria-hidden="true" />
            <p className="font-display italic text-base text-[var(--foreground)] m-0 leading-snug">{project.keyQuestion}</p>
          </div>
        )}

        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-data text-[0.7rem] tracking-[0.03em] text-[var(--muted-foreground)]">
            {project.skills.map((skill, i) => (
              <span key={skill}>
                {skill}
                {i < project.skills!.length - 1 && <span className="ml-3 text-[var(--border)]">/</span>}
              </span>
            ))}
          </div>
        )}

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
        <div className="px-5 sm:px-6 pb-6 sm:pb-8 flex flex-col gap-0">
          {/* Before You Start: everything needed before touching a tool, in one place. */}
          <Section eyebrow="Before you start" title="What you'll need">
            {project.prerequisites && project.prerequisites.length > 0 && (
              <ul className="flex flex-col gap-1.5 m-0 p-0" style={{ listStyle: "none" }}>
                {project.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                    <span className="font-data text-[var(--muted-foreground)] mt-0.5">&mdash;</span>
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {project.terminology && project.terminology.length > 0 && (
              <dl className="grid gap-x-6 gap-y-2 m-0 sm:grid-cols-2">
                {project.terminology.map((t, i) => (
                  <div key={i}>
                    <dt className="text-sm font-semibold text-[var(--foreground)]">{t.term}</dt>
                    <dd className="text-sm text-[var(--muted-foreground)] leading-relaxed m-0">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            )}
            <ToolStack stack={project.toolStack} />
            {project.datasetUrl && (
              <a
                href={project.datasetUrl}
                download
                className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-lg text-sm font-medium"
                style={{ background: "var(--muted)", color: "var(--foreground)", border: "1px solid var(--border)" }}
              >
                <Download size={14} />
                Download project dataset
              </a>
            )}
          </Section>

          {project.steps && project.steps.length > 0 && (
            <Section eyebrow="The process" title={`${stepCount} step${stepCount !== 1 ? "s" : ""}`}>
              {project.steps.map((s, i) => (
                <div key={s.stepId} className="flex flex-col gap-2">
                  <p className="font-data text-[0.7rem] tracking-[0.06em] uppercase text-[var(--muted-foreground)] m-0">
                    Step {String(i + 1).padStart(2, "0")} of {String(stepCount).padStart(2, "0")}
                  </p>
                  <ProjectStep step={s} />
                </div>
              ))}
            </Section>
          )}

          {project.stages && project.stages.length > 0 && (
            <Section eyebrow="The process" title="Simulation">
              <SimulationRunner stages={project.stages} liveTrack={project.liveTrack} />
            </Section>
          )}

          {project.teardownItems && project.teardownItems.length > 0 && (
            <Section eyebrow="The process" title="Specimens to review">
              {project.teardownItems.map((item) => (
                <TeardownItemCard key={item.itemId} item={item} />
              ))}
            </Section>
          )}

          {project.whatToLookFor && project.whatToLookFor.length > 0 && (
            <Section eyebrow="Analyze your findings" title="What to look for">
              <dl className="grid gap-x-6 gap-y-3 m-0 sm:grid-cols-2">
                {project.whatToLookFor.map((w, i) => (
                  <div key={i}>
                    <dt className="text-sm font-semibold text-[var(--foreground)]">{w.label}</dt>
                    <dd className="text-sm text-[var(--muted-foreground)] leading-relaxed m-0">{w.detail}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          )}

          {project.decision && (
            <div className="pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <DecisionBox decision={project.decision} />
            </div>
          )}

          {project.professionalRecommendation && (
            <div className="pt-6 border-t flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
              <Eyebrow>Recommendation &middot; Priority: {project.professionalRecommendation.priority}</Eyebrow>
              <p
                className="font-display italic text-lg sm:text-xl leading-snug text-[var(--foreground)] m-0 pl-4"
                style={{ borderLeft: "3px solid var(--accent)" }}
              >
                &ldquo;{project.professionalRecommendation.text}&rdquo;
              </p>
            </div>
          )}

          {project.commonMistakes && project.commonMistakes.length > 0 && (
            <Section eyebrow="Common mistakes" title="What trips people up">
              <ul className="flex flex-col m-0 p-0" style={{ listStyle: "none" }}>
                {project.commonMistakes.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-2.5"
                    style={{ borderTop: i > 0 ? "1px solid var(--border)" : "none" }}
                  >
                    <span className="font-data text-xs shrink-0 mt-0.5" style={{ color: "rgb(220 38 38)" }} aria-hidden="true">
                      &times;
                    </span>
                    <p className="text-sm text-[var(--foreground)] leading-relaxed m-0">
                      <span className="font-semibold">{m.mistake}</span> &mdash; {m.explanation}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section eyebrow="Final deliverable">
            <p className="text-sm text-[var(--foreground)] leading-relaxed m-0">{project.deliverable}</p>
            <details>
              <summary className="cursor-pointer font-data text-xs uppercase tracking-wide text-[var(--accent)]">
                See a reference example
              </summary>
              <div className="mt-2">
                <OutputSample content={project.sampleOutput} />
              </div>
            </details>
          </Section>

          <Section eyebrow="Success criteria" title="You're done when you can:">
            <ul className="flex flex-col gap-1.5 m-0 p-0" style={{ listStyle: "none" }}>
              {project.successCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          {project.keyTakeaway && (
            <div className="pt-6 border-t flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
              <Eyebrow>Key takeaway</Eyebrow>
              <p className="font-display italic text-xl sm:text-2xl leading-snug text-[var(--foreground)] m-0">
                {project.keyTakeaway}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
