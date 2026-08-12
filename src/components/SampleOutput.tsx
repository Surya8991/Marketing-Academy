"use client";

/**
 * SampleOutput: "Show sample answer" reveal.
 *
 * Collapsed by default so learners attempt a project step themselves before
 * seeing a filled-in example (Project.sampleOutput / ProjectStep.outputSample
 * are always a DIFFERENT company than the project's own scenario, so this
 * never hands out the literal answer, see PROJECTS_PLAN.md 2.3). Expands to
 * render the content with OutputSample's themed monospace treatment.
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, Eye } from "lucide-react";
import OutputSample from "./OutputSample";

type Props = {
  title: string;
  content: string;
};

export default function SampleOutput({ title, content }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{
          background: "var(--muted)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
        }}
      >
        <Eye size={14} />
        {open ? `Hide sample answer` : `Show sample answer`}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[var(--muted-foreground)]">{title}</span>
          <OutputSample content={content} />
        </div>
      )}
    </div>
  );
}
