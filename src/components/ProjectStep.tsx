"use client";

/**
 * Renders ONE ProjectStep (src/lib/projects/types.ts) as a full runbook card:
 * concept → theory recap → question → tool/where → procedure → sample output
 * → healthy/unhealthy/interpret → so-what table → owner. This is the unit
 * that a "diagnostic" (or audit/teardown-mode) Project's `steps[]` maps over.
 *
 * "use client": carries local per-step completion state.
 */

import { useState } from "react";
import type { ProjectStep as ProjectStepData, Effort } from "@/lib/projects/types";
import OutputSample from "./OutputSample";
import {
  CheckCircle2,
  Circle,
  User,
  Users,
  Wrench,
  ListChecks,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
} from "lucide-react";

type Props = {
  step: ProjectStepData;
};

const OWNER_LABEL: Record<ProjectStepData["owner"], string> = {
  you: "You",
  developer: "Developer",
  either: "Either",
};

/** Explains what the owner badge means, who this step's work actually falls to. */
const OWNER_CAPTION: Record<ProjectStepData["owner"], string> = {
  you: "You can do this yourself, no engineering access required.",
  developer: "Needs a developer/engineer to ship the fix.",
  either: "You or a developer can handle this, depending on your access.",
};

const OWNER_ICON: Record<ProjectStepData["owner"], React.ReactNode> = {
  you: <User size={13} />,
  developer: <Wrench size={13} />,
  either: <Users size={13} />,
};

/** Rough time-to-fix badge colors, green (fast) to red (needs a dev ticket). */
const EFFORT_STYLE: Record<Effort, { background: string; color: string; border: string }> = {
  "5 min": {
    background: "rgba(22, 163, 74, 0.15)",
    color: "var(--foreground)",
    border: "1px solid rgba(22, 163, 74, 0.35)",
  },
  "30 min": {
    background: "rgba(234, 179, 8, 0.15)",
    color: "var(--foreground)",
    border: "1px solid rgba(234, 179, 8, 0.35)",
  },
  "half day": {
    background: "rgba(249, 115, 22, 0.15)",
    color: "var(--foreground)",
    border: "1px solid rgba(249, 115, 22, 0.35)",
  },
  "dev ticket": {
    background: "rgba(239, 68, 68, 0.15)",
    color: "var(--foreground)",
    border: "1px solid rgba(239, 68, 68, 0.35)",
  },
};

export default function ProjectStep({ step }: Props) {
  // TODO: wire to projects-progress.ts (a parallel agent is building step-completion
  // persistence, ma_project_progress or similar). For now this is local-only and
  // resets on reload, it does not gate anything and does not award XP.
  const [done, setDone] = useState(false);

  return (
    <div
      id={step.stepId}
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col gap-5"
    >
      {/* Concept + theory recap, with completion checkbox */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-1 min-w-0">
          <a
            href={`#${step.lessonAnchor}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold w-fit hover:underline"
            style={{ color: "var(--accent)" }}
          >
            {step.concept}
          </a>
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{step.theoryRecap}</p>
        </div>

        <button
          type="button"
          onClick={() => setDone((d) => !d)}
          aria-pressed={done}
          className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
          style={
            done
              ? {
                  background: "rgba(22,163,74,0.15)",
                  color: "rgb(22 163 74)",
                  border: "1px solid rgba(22,163,74,0.3)",
                }
              : {
                  background: "var(--muted)",
                  color: "var(--muted-foreground)",
                  border: "1px solid var(--border)",
                }
          }
        >
          {done ? <CheckCircle2 size={15} /> : <Circle size={15} />}
          {done ? "Step complete" : "Mark step complete"}
        </button>
      </div>

      {/* Question, the prominent sub-heading a learner is answering with this step */}
      <h4 className="text-lg font-bold leading-snug text-[var(--foreground)]">{step.question}</h4>

      {/* Tool + where inside it */}
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Wrench size={14} className="text-[var(--muted-foreground)] shrink-0" aria-hidden="true" />
        <span className="font-semibold text-[var(--foreground)]">{step.toolName}</span>
        <span className="text-[var(--muted-foreground)]">— {step.where}</span>
      </div>

      {/* Procedure */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mb-2 flex items-center gap-1.5">
          <ListChecks size={13} aria-hidden="true" /> Procedure
        </p>
        <ol className="flex flex-col gap-1.5 list-decimal list-inside text-sm text-[var(--foreground)]">
          {step.procedure.map((line, i) => (
            <li key={i} className="leading-relaxed">
              {line}
            </li>
          ))}
        </ol>
      </div>

      {/* Sample output from the real tool */}
      <OutputSample content={step.outputSample} />

      {/* Healthy vs unhealthy */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div
          className="rounded-lg p-3"
          style={{ background: "rgba(22, 163, 74, 0.1)", border: "1px solid rgba(22, 163, 74, 0.3)" }}
        >
          <p
            className="text-xs font-semibold mb-1 flex items-center gap-1.5"
            style={{ color: "rgb(22 163 74)" }}
          >
            <ThumbsUp size={13} aria-hidden="true" /> Healthy
          </p>
          <p className="text-sm text-[var(--foreground)] leading-relaxed">{step.healthy}</p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}
        >
          <p
            className="text-xs font-semibold mb-1 flex items-center gap-1.5"
            style={{ color: "rgb(220 38 38)" }}
          >
            <ThumbsDown size={13} aria-hidden="true" /> Unhealthy
          </p>
          <p className="text-sm text-[var(--foreground)] leading-relaxed">{step.unhealthy}</p>
        </div>
      </div>

      {/* What it means */}
      <div
        className="rounded-lg p-3 flex flex-col gap-1"
        style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-semibold flex items-center gap-1.5 text-[var(--foreground)]">
          <Lightbulb size={13} aria-hidden="true" /> What this means
        </p>
        <p className="text-sm text-[var(--foreground)] leading-relaxed">{step.interpret}</p>
      </div>

      {/* So what do I do about it */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mb-2">
          So what do I do about it?
        </p>
        <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--muted)] text-left">
                <th className="px-3 py-2 font-semibold text-[var(--foreground)]">Symptom</th>
                <th className="px-3 py-2 font-semibold text-[var(--foreground)]">Action</th>
                <th className="px-3 py-2 font-semibold text-[var(--foreground)]">Effort</th>
              </tr>
            </thead>
            <tbody>
              {step.soWhat.map((row, i) => (
                <tr key={i} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2 text-[var(--foreground)] align-top">{row.symptom}</td>
                  <td className="px-3 py-2 text-[var(--foreground)] align-top">{row.action}</td>
                  <td className="px-3 py-2 align-top">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap"
                      style={EFFORT_STYLE[row.effort]}
                    >
                      {row.effort}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Owner, who this step's work falls to */}
      <div className="flex items-start gap-2 flex-wrap">
        <span
          title={OWNER_CAPTION[step.owner]}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
          style={{ background: "var(--muted)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }}
        >
          {OWNER_ICON[step.owner]}
          {OWNER_LABEL[step.owner]}
        </span>
        <span className="text-xs text-[var(--muted-foreground)] self-center">{OWNER_CAPTION[step.owner]}</span>
      </div>
    </div>
  );
}
