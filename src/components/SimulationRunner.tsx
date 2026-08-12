"use client";

/**
 * SimulationRunner: core branching-decision-drill UI for "simulation"-mode
 * projects (src/lib/projects/types.ts SimulationStage, PROJECTS_PLAN.md 2.3b).
 *
 * Flow per stage:
 *   1. Render the situation, a dashboard snapshot (OutputSample), the
 *      spend/budget stat row, then decision.prompt with OPTION LABELS ONLY.
 *      verdict/outcome/why/lessonRef are withheld until AFTER the learner
 *      picks, so the decision isn't spoiled (same reveal-after-answer
 *      pattern as Quiz.tsx).
 *   2. On click, the choice is locked in and recorded in the log, then an
 *      inline verdict-colored callout reveals outcome/why/lessonRef for the
 *      chosen option only.
 *   3. "Continue" looks up decision.option.nextStageId in `stages`. If it
 *      matches a stage, navigate there. If it doesn't match anything, the
 *      branch has ended, render SimulationDebrief instead.
 *
 * If `liveTrack` is supplied, LiveTrackPanel renders alongside every stage
 * AND the debrief, as a collapsible, clearly optional upgrade path (the
 * simulation is a complete project at zero spend on its own).
 */

import { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, Wallet, Clock } from "lucide-react";
import type { SimulationStage, LiveTrack, Verdict } from "@/lib/projects/types";
import OutputSample from "./OutputSample";
import SimulationDebrief from "./SimulationDebrief";
import LiveTrackPanel from "./LiveTrackPanel";

/** One recorded decision, kept for the debrief's per-stage breakdown. */
export type SimulationLogEntry = {
  stageId: string;
  chosenOptionId: string;
  verdict: Verdict;
};

const VERDICT_META: Record<Verdict, { bg: string; border: string; color: string; icon: React.ReactNode; label: string }> = {
  optimal: {
    bg: "rgba(22,163,74,0.12)",
    border: "1px solid rgba(22,163,74,0.35)",
    color: "#16a34a",
    icon: <CheckCircle2 size={16} />,
    label: "Optimal",
  },
  acceptable: {
    bg: "rgba(217,119,6,0.12)",
    border: "1px solid rgba(217,119,6,0.35)",
    color: "#d97706",
    icon: <AlertTriangle size={16} />,
    label: "Acceptable",
  },
  costly: {
    bg: "rgba(239,68,68,0.12)",
    border: "1px solid rgba(239,68,68,0.35)",
    color: "#ef4444",
    icon: <XCircle size={16} />,
    label: "Costly",
  },
};

type Props = {
  stages: SimulationStage[];
  liveTrack?: LiveTrack;
};

export default function SimulationRunner({ stages, liveTrack }: Props) {
  const [stageId, setStageId] = useState<string>(stages[0]?.stageId ?? "");
  const [log, setLog] = useState<SimulationLogEntry[]>([]);
  // The option chosen for the CURRENT stage, cleared on every navigation.
  // Non-null means "reveal the outcome for this pick, show Continue".
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  if (stages.length === 0) return null; // nothing to run

  function handleReplay() {
    setStageId(stages[0].stageId);
    setLog([]);
    setSelectedOptionId(null);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1">
          <SimulationDebrief log={log} stages={stages} onReplay={handleReplay} />
        </div>
        {liveTrack && (
          <div className="lg:w-80 lg:shrink-0">
            <LiveTrackPanel liveTrack={liveTrack} />
          </div>
        )}
      </div>
    );
  }

  const stage = stages.find((s) => s.stageId === stageId) ?? stages[0];
  const selectedOption = selectedOptionId
    ? stage.decision.options.find((o) => o.id === selectedOptionId) ?? null
    : null;

  function handleChoose(option: SimulationStage["decision"]["options"][number]) {
    if (selectedOptionId) return; // lock in the first pick, same as Quiz.tsx
    setSelectedOptionId(option.id);
    setLog((prev) => [...prev, { stageId: stage.stageId, chosenOptionId: option.id, verdict: option.verdict }]);
  }

  function handleContinue() {
    if (!selectedOption) return;
    const next = stages.find((s) => s.stageId === selectedOption.nextStageId);
    if (next) {
      setStageId(next.stageId);
      setSelectedOptionId(null);
    } else {
      // nextStageId doesn't resolve to a stage in this array, the branch has ended
      setFinished(true);
    }
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div
        className="flex-1 flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
        role="region"
        aria-label={`Simulation stage: ${stage.label}`}
      >
        {/* Stage header: label + elapsed time marker */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{stage.label}</h3>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)]">
            <Clock size={13} />
            {stage.elapsed}
          </span>
        </div>

        {/* Narrative situation */}
        <p className="text-sm leading-relaxed text-[var(--foreground)]">{stage.situation}</p>

        {/* Dashboard snapshot for this stage */}
        <OutputSample content={stage.dashboard} />

        {/* Spend / budget stat row */}
        <div className="flex flex-wrap gap-4 rounded-lg bg-[var(--muted)] border border-[var(--border)] px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Wallet size={15} className="text-[var(--muted-foreground)]" />
            <span className="text-[var(--muted-foreground)]">Spend to date:</span>
            <span className="font-semibold text-[var(--foreground)]">{stage.spendToDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wallet size={15} className="text-[var(--muted-foreground)]" />
            <span className="text-[var(--muted-foreground)]">Budget remaining:</span>
            <span className="font-semibold text-[var(--foreground)]">{stage.budgetRemaining}</span>
          </div>
        </div>

        {/* Decision */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-base text-[var(--foreground)]">{stage.decision.prompt}</h4>

          <div className="flex flex-col gap-2.5">
            {stage.decision.options.map((option) => {
              const isPicked = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleChoose(option)}
                  aria-disabled={!!selectedOptionId}
                  aria-pressed={isPicked}
                  className="w-full text-left px-4 py-3 rounded-lg border text-sm transition-all"
                  style={{
                    borderColor: isPicked ? "var(--accent)" : "var(--border)",
                    background: isPicked ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
                    opacity: selectedOptionId && !isPicked ? 0.6 : 1,
                    cursor: selectedOptionId ? "default" : "pointer",
                  }}
                >
                  {/* Only the label, verdict/why/lessonRef withheld until picked */}
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Reveal: shown only for the chosen option, colored by verdict */}
          {selectedOption && (
            <div
              className="rounded-lg p-4 flex flex-col gap-2"
              style={{ background: VERDICT_META[selectedOption.verdict].bg, border: VERDICT_META[selectedOption.verdict].border }}
              role="status"
              aria-live="polite"
            >
              <div
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: VERDICT_META[selectedOption.verdict].color }}
              >
                {VERDICT_META[selectedOption.verdict].icon}
                {VERDICT_META[selectedOption.verdict].label}
              </div>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">{selectedOption.outcome}</p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{selectedOption.why}</p>
              <p className="text-xs text-[var(--muted-foreground)] italic">Related: {selectedOption.lessonRef}</p>
            </div>
          )}

          {selectedOption && (
            <button
              onClick={handleContinue}
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              Continue
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Optional live-track upgrade path, visible throughout every stage */}
      {liveTrack && (
        <div className="lg:w-80 lg:shrink-0">
          <LiveTrackPanel liveTrack={liveTrack} />
        </div>
      )}
    </div>
  );
}
