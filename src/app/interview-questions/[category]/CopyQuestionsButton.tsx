"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface QA {
  q: string;
  a: string;
}

interface Props {
  title: string;
  conceptual: QA[];
  scenario: QA[];
}

export default function CopyQuestionsButton({ title, conceptual, scenario }: Props) {
  const [state, setState] = useState<"idle" | "copied">("idle");

  async function copyMarkdown() {
    const lines: string[] = [`# ${title} Interview Questions\n`];

    if (conceptual.length > 0) {
      lines.push("## Conceptual Questions\n");
      conceptual.forEach((qa, i) => {
        lines.push(`**Q${i + 1}: ${qa.q}**\n`);
        lines.push(`${qa.a}\n`);
      });
    }

    if (scenario.length > 0) {
      lines.push("## Scenario-Based Questions\n");
      scenario.forEach((qa, i) => {
        lines.push(`**Scenario ${i + 1}: ${qa.q}**\n`);
        lines.push(`${qa.a}\n`);
      });
    }

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      // clipboard unavailable — silently skip
    }
  }

  return (
    <button
      onClick={copyMarkdown}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.9rem",
        borderRadius: "8px",
        fontSize: "0.8rem",
        fontWeight: 600,
        cursor: "pointer",
        border: "1px solid var(--border)",
        background: "var(--card)",
        color: state === "copied" ? "rgb(22,163,74)" : "var(--muted-foreground)",
        transition: "color 0.15s",
        flexShrink: 0,
      }}
    >
      {state === "copied" ? <Check size={13} /> : <Copy size={13} />}
      {state === "copied" ? "Copied!" : "Copy as Markdown"}
    </button>
  );
}
