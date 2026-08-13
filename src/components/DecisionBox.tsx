"use client";

/**
 * DecisionBox: renders a Project's optional `decision` field
 * (src/lib/projects/types.ts) as a multiple-choice checkpoint.
 *
 * Pattern deliberately mirrors Quiz.tsx (AGENTS.md): the correct option and
 * explanation are revealed only AFTER the learner picks one, never before,
 * same reasoning as the per-lesson quiz's answer-reveal timing (reading
 * ahead should not be possible). Unlike Quiz.tsx there is no pass/fail gate
 * here, this is a comprehension checkpoint inside a project, not something
 * that unlocks XP or completion.
 */

import { useState } from "react";
import { CheckCircle2, XCircle, Compass } from "lucide-react";
import type { Project } from "@/lib/projects/types";

type Props = {
  decision: NonNullable<Project["decision"]>;
};

export default function DecisionBox({ decision }: Props) {
  const [picked, setPicked] = useState<string | null>(null);

  const pickedOption = decision.options.find((o) => o.id === picked);

  return (
    <div className="flex flex-col gap-3">
      <p className="font-data text-[0.68rem] tracking-[0.08em] uppercase flex items-center gap-1.5 m-0" style={{ color: "var(--accent)" }}>
        <Compass size={12} aria-hidden="true" /> Make the call
      </p>
      <p className="font-display font-semibold text-lg text-[var(--foreground)] m-0">{decision.prompt}</p>

      <div className="flex flex-col gap-2">
        {decision.options.map((opt, i) => {
          const isPicked = picked === opt.id;
          const showResult = picked !== null;
          let border = "1px solid var(--border)";
          let bg = "transparent";
          if (showResult && opt.correct) {
            border = "1px solid rgba(22,163,74,0.5)";
            bg = "rgba(22,163,74,0.08)";
          } else if (showResult && isPicked && !opt.correct) {
            border = "1px solid rgba(239,68,68,0.5)";
            bg = "rgba(239,68,68,0.07)";
          } else if (isPicked) {
            border = "1px solid var(--accent)";
            bg = "color-mix(in srgb, var(--accent) 10%, transparent)";
          }

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => !picked && setPicked(opt.id)}
              aria-disabled={picked !== null}
              className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2"
              style={{ border, background: bg, color: "var(--foreground)", cursor: picked ? "default" : "pointer" }}
            >
              <span className="font-data text-[var(--muted-foreground)]">{String.fromCharCode(65 + i)}.</span>
              <span className="flex-1">{opt.label}</span>
              {showResult && opt.correct && <CheckCircle2 size={15} className="shrink-0" style={{ color: "rgb(22 163 74)" }} />}
              {showResult && isPicked && !opt.correct && <XCircle size={15} className="shrink-0" style={{ color: "rgba(239,68,68,0.9)" }} />}
            </button>
          );
        })}
      </div>

      {pickedOption && (
        <div className="pl-3 text-sm leading-relaxed" style={{ borderLeft: "2px solid var(--border)", color: "var(--foreground)" }}>
          <span className="font-semibold">{pickedOption.correct ? "Correct. " : "Not quite. "}</span>
          {decision.explanation}
        </div>
      )}
    </div>
  );
}
