"use client";

/**
 * SimulationDebrief: scored summary shown when a SimulationRunner branch
 * ends (the chosen option's nextStageId doesn't match any stage in the
 * array, see src/lib/projects/types.ts SimulationStage).
 *
 * Owns no navigation state itself. `onReplay` is supplied by the parent
 * (SimulationRunner) and is called verbatim, the parent resets its own
 * stageId/log state back to stages[0] and an empty log.
 */

import { CheckCircle2, AlertTriangle, XCircle, RotateCcw } from "lucide-react";
import type { SimulationStage, Verdict } from "@/lib/projects/types";
import type { SimulationLogEntry } from "./SimulationRunner";

const VERDICT_META: Record<Verdict, { color: string; bg: string; border: string; icon: React.ReactNode; label: string }> = {
  optimal: {
    color: "#16a34a",
    bg: "rgba(22,163,74,0.12)",
    border: "1px solid rgba(22,163,74,0.35)",
    icon: <CheckCircle2 size={15} />,
    label: "Optimal",
  },
  acceptable: {
    color: "#d97706",
    bg: "rgba(217,119,6,0.12)",
    border: "1px solid rgba(217,119,6,0.35)",
    icon: <AlertTriangle size={15} />,
    label: "Acceptable",
  },
  costly: {
    color: "#ef4444",
    bg: "rgba(239,68,68,0.12)",
    border: "1px solid rgba(239,68,68,0.35)",
    icon: <XCircle size={15} />,
    label: "Costly",
  },
};

type Props = {
  log: SimulationLogEntry[];
  stages: SimulationStage[];
  onReplay: () => void;
};

export default function SimulationDebrief({ log, stages, onReplay }: Props) {
  const counts: Record<Verdict, number> = { optimal: 0, acceptable: 0, costly: 0 };
  for (const entry of log) counts[entry.verdict]++;

  return (
    <div
      id="simulation-debrief"
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col gap-6"
      role="region"
      aria-label="Simulation debrief"
    >
      <div>
        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">Simulation debrief</h3>
        <p className="text-sm text-[var(--muted-foreground)]">
          {log.length} decision{log.length === 1 ? "" : "s"} made across this run.
        </p>
      </div>

      {/* Scored summary: count of optimal / acceptable / costly choices */}
      <div className="flex flex-wrap gap-3">
        {(["optimal", "acceptable", "costly"] as Verdict[]).map((verdict) => (
          <div
            key={verdict}
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium"
            style={{ background: VERDICT_META[verdict].bg, border: VERDICT_META[verdict].border, color: VERDICT_META[verdict].color }}
          >
            {VERDICT_META[verdict].icon}
            {counts[verdict]} {VERDICT_META[verdict].label}
          </div>
        ))}
      </div>

      {/* Per-stage breakdown */}
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-sm text-[var(--foreground)]">Your path</h4>
        {log.map((entry, i) => {
          const stage = stages.find((s) => s.stageId === entry.stageId);
          const option = stage?.decision.options.find((o) => o.id === entry.chosenOptionId);
          if (!stage || !option) return null; // defensive, shouldn't happen with a well-formed log
          return (
            <div
              key={`${entry.stageId}-${i}`}
              className="rounded-lg bg-[var(--muted)] border border-[var(--border)] p-4 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-sm font-medium text-[var(--foreground)]">{stage.label}</span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: VERDICT_META[entry.verdict].color }}
                >
                  {VERDICT_META[entry.verdict].icon}
                  {VERDICT_META[entry.verdict].label}
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)]">You chose: {option.label}</p>
              {/* Costly choices point back to the lesson section they contradicted */}
              {entry.verdict === "costly" && (
                <p className="text-xs text-[var(--foreground)] italic mt-1">
                  This contradicted &ldquo;{option.lessonRef}&rdquo; — worth a re-read before you try again.
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onReplay}
        className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
      >
        <RotateCcw size={14} />
        Replay
      </button>
    </div>
  );
}
