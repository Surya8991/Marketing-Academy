"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = {
  content: string;
};

/**
 * Renders a ProjectStep's `outputSample`, a short raw snippet of what the
 * real tool's output actually looks like (a Search Console table row, a
 * PageSpeed score line, a CSV export row, etc.) so the learner can compare
 * it against their own screen before reading the healthy/unhealthy
 * interpretation that follows it in ProjectStep.tsx.
 *
 * Kept as its own file (rather than inlined in ProjectStep) since it's a
 * small, reusable "terminal-style" block other diagnostic/teardown-mode
 * renderers can import later (e.g. a future TeardownItem renderer for
 * `specimen`).
 */
export default function OutputSample({ content }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable (permissions, insecure context, etc.), fail silently */
    }
  }

  return (
    <div className="rounded-lg border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--muted)] border-b border-[var(--border)]">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
          Sample output
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="px-3 py-2.5 m-0 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words text-[var(--foreground)] bg-[var(--background)]">
        {content}
      </pre>
    </div>
  );
}
