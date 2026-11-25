"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";

/**
 * Shared frame for the step-through interactive labs embedded in lessons:
 * header, live metric tiles, a pipeline of stages, the scene (children),
 * the step card, a "You'll learn" checklist and Back/Next controls.
 */

export type LabStep = { title: string; body: string[]; changed: string[] };
export type LabTile = { label: string; value: string; changed?: boolean };

type Props = {
  title: string;
  steps: LabStep[];
  step: number;
  setStep: (n: number) => void;
  tiles: LabTile[];
  nodes: { label: string; icon: LucideIcon }[];
  learn: { text: string; doneAt: number }[];
  children: ReactNode;
};

export default function LabShell({ title, steps, step, setStep, tiles, nodes, learn, children }: Props) {
  const last = step === steps.length - 1;
  const current = steps[step];

  return (
    <section
      aria-label={`Interactive lab: ${title}`}
      className="not-prose my-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-5">
        <div>
          <div className="font-data text-xs font-medium text-[var(--accent)]">
            Interactive lab
          </div>
          <div className="font-semibold">{title}</div>
        </div>
        <div className="font-data text-xs text-[var(--muted-foreground)]">
          {steps.length} steps · illustrative numbers
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-5 pt-4">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 transition-colors"
            style={t.changed && t.value !== "-" ? { borderColor: "var(--accent)", boxShadow: "inset 3px 0 0 var(--accent)" } : undefined}
          >
            <div className="font-data text-xs text-[var(--muted-foreground)]">{t.label}</div>
            <div className="font-data text-lg font-semibold tabular-nums">{t.value}</div>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
        <ol className="flex flex-wrap items-center gap-1.5 mb-4" aria-label="Lab stages">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const reached = i <= step;
            return (
              <li key={n.label} className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-current={i === step ? "step" : undefined}
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors"
                  style={{
                    border: reached ? "1px solid var(--accent)" : "1px dashed var(--border)",
                    background: i === step ? "var(--accent)" : reached ? "var(--card)" : "transparent",
                    color: i === step ? "var(--accent-foreground)" : reached ? "var(--foreground)" : "var(--muted-foreground)",
                    opacity: reached ? 1 : 0.6,
                  }}
                >
                  <Icon size={13} /> {n.label}
                </button>
                {i < nodes.length - 1 && (
                  <ArrowRight size={12} className="text-[var(--muted-foreground)]" style={{ opacity: i < step ? 1 : 0.3 }} />
                )}
              </li>
            );
          })}
        </ol>
        {children}
      </div>

      <div className="px-5 pt-5" aria-live="polite">
        <div className="font-data text-xs font-medium text-[var(--muted-foreground)]">
          Step {step + 1} / {steps.length}
        </div>
        <h3 className="mt-1 text-lg font-semibold">{current.title}</h3>
        {current.body.map((p) => (
          <p key={p} className="mt-2 text-sm leading-relaxed">{p}</p>
        ))}
        <div className="mt-3 font-data text-xs text-[var(--muted-foreground)]">What changed</div>
        {current.changed.map((c) => (
          <p key={c} className="mt-1 font-data text-xs">{c}</p>
        ))}
      </div>

      <div className="mx-5 mt-5 rounded-lg border border-[var(--border)] p-4">
        <div className="font-data text-xs font-medium text-[var(--muted-foreground)] mb-2">You&apos;ll learn</div>
        <ul className="flex flex-col gap-1.5">
          {learn.map((l) => {
            const done = step >= l.doneAt;
            return (
              <li key={l.text} className="flex items-center gap-2 text-sm" style={{ color: done ? "var(--foreground)" : "var(--muted-foreground)" }}>
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors"
                  style={{ borderColor: done ? "var(--accent)" : "var(--border)", background: done ? "var(--accent)" : "transparent", color: "var(--accent-foreground)" }}
                >
                  {done && <Check size={11} />}
                </span>
                {l.text}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-3 p-5">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium hover:bg-[var(--muted)] disabled:opacity-40 disabled:pointer-events-none"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <button
          type="button"
          onClick={() => setStep(last ? 0 : step + 1)}
          className="flex flex-1 items-center justify-between gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-90"
        >
          <span className="truncate">{last ? "Run it again" : `Next: ${steps[step + 1].title}`}</span>
          {last ? <RotateCcw size={16} className="shrink-0" /> : <ArrowRight size={16} className="shrink-0" />}
        </button>
      </div>
    </section>
  );
}

/** Shared slider row used by the labs. */
export function LabSlider({ label, value, display, min, max, step, onChange, hint }: {
  label: string; value: number; display: string; min: number; max: number; step: number;
  onChange: (n: number) => void; hint?: string;
}) {
  return (
    <label className="mt-4 block text-sm">
      <span className="flex justify-between gap-3 font-medium">
        {label} <span className="font-data shrink-0">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
        style={{ accentColor: "var(--accent)" }}
      />
      {hint && <span className="text-xs text-[var(--muted-foreground)]">{hint}</span>}
    </label>
  );
}

export const fmt = (n: number) => n.toLocaleString("en-US");

// Rule 19: rgba overlays so the badges work in light and dark mode.
export const TONE = {
  good: { background: "rgba(22, 163, 74, 0.12)", border: "1px solid rgba(22, 163, 74, 0.35)" },
  bad: { background: "rgba(220, 38, 38, 0.10)", border: "1px solid rgba(220, 38, 38, 0.30)" },
  warn: { background: "rgba(217, 119, 6, 0.12)", border: "1px solid rgba(217, 119, 6, 0.35)" },
  info: { background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.35)" },
} as const;
