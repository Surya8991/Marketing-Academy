"use client";

/**
 * TeardownItemCard: renders ONE TeardownItem (src/lib/projects/types.ts).
 *
 * Was previously a placeholder in ProjectCard.tsx (a bare <li>{item.prompt}</li>
 * list) that discarded specimen/answerKey/distractors entirely, the exact
 * fields the review-gate agent flagged as authored-but-invisible across 8 of
 * 34 pilot projects (PROJECTS_PLAN.md Stage 8 Phase 1 review). This renders
 * the full teardown: specimen text, the prompt, then a "Reveal answer key"
 * gate (collapsed by default, mirroring Quiz.tsx's answer-reveal-after-submit
 * pattern, since showing the defects immediately would defeat the exercise)
 * that, once opened, shows every answerKey defect (with severity, why it
 * matters, lessonRef, owner) plus the distractors, clearly labeled as things
 * that look wrong but correctly should NOT be flagged.
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Info, XCircle } from "lucide-react";
import OutputSample from "./OutputSample";
import type { TeardownItem } from "@/lib/projects/types";

const severityStyles: Record<TeardownItem["answerKey"][number]["severity"], React.CSSProperties> = {
  critical: { background: "rgba(220, 38, 38, 0.15)", color: "var(--foreground)", border: "1px solid rgba(220, 38, 38, 0.35)" },
  moderate: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
  cosmetic: { background: "rgba(100, 116, 139, 0.15)", color: "var(--foreground)", border: "1px solid rgba(100, 116, 139, 0.35)" },
};

const ownerLabels: Record<TeardownItem["answerKey"][number]["owner"], string> = {
  you: "You",
  developer: "Developer",
  either: "Either",
};

export default function TeardownItemCard({ item }: { item: TeardownItem }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
      <p className="text-sm font-semibold text-[var(--foreground)] m-0">{item.prompt}</p>

      <OutputSample content={item.specimen} />

      <p className="text-xs text-[var(--muted-foreground)] m-0">
        Specimen: {item.specimenSource === "real-redacted" ? "real, redacted" : "synthetic, realistic"}
      </p>

      <button
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        className="inline-flex items-center gap-1.5 self-start text-sm font-semibold"
        style={{ color: "var(--accent)" }}
      >
        {revealed ? "Hide answer key" : "Reveal answer key"}
        {revealed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {revealed && (
        <div className="flex flex-col gap-4 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
          {item.answerKey.length > 0 ? (
            <div className="flex flex-col gap-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] m-0">
                Real defects ({item.answerKey.length})
              </h5>
              {item.answerKey.map((d, i) => (
                <div key={i} className="flex flex-col gap-1.5 p-3 rounded-lg" style={{ background: "var(--muted)" }}>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-[var(--foreground)] m-0 flex items-center gap-1.5">
                      <XCircle size={14} style={{ color: "rgb(220 38 38)" }} className="shrink-0" />
                      {d.defect}
                    </p>
                    <span
                      style={{
                        padding: "0.15rem 0.5rem",
                        borderRadius: "999px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        whiteSpace: "nowrap",
                        ...severityStyles[d.severity],
                      }}
                    >
                      {d.severity}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] m-0">{d.whyItMatters}</p>
                  <p className="text-xs text-[var(--muted-foreground)] m-0">
                    <span className="font-semibold">Lesson ref:</span> {d.lessonRef} &middot;{" "}
                    <span className="font-semibold">Owner:</span> {ownerLabels[d.owner]}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: "var(--muted)" }}>
              <Info size={15} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
              <p className="text-sm text-[var(--foreground)] m-0">
                This specimen is a clean control, it has no real defects. Correctly identifying that is part of the exercise.
              </p>
            </div>
          )}

          {item.distractors.length > 0 && (
            <div className="flex flex-col gap-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] m-0 flex items-center gap-1.5">
                <AlertTriangle size={13} />
                Looks wrong, but is not ({item.distractors.length})
              </h5>
              <ul className="flex flex-col gap-1.5 m-0 pl-5">
                {item.distractors.map((dist, i) => (
                  <li key={i} className="text-sm text-[var(--muted-foreground)]">
                    {dist}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
