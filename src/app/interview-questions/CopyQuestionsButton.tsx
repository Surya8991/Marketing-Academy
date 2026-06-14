"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { INTERVIEW_SECTIONS } from "@/lib/interview-questions";

function buildQuestionList(): string[] {
  const lines: string[] = [];
  for (const section of INTERVIEW_SECTIONS) {
    lines.push(`\n=== ${section.title} ===`);
    lines.push("-- Conceptual --");
    for (const qa of section.conceptualQAs) {
      lines.push(qa.q);
    }
    lines.push("-- Scenario-Based --");
    for (const qa of section.scenarioQAs) {
      lines.push(qa.q);
    }
  }
  return lines;
}

export default function CopyQuestionsButton() {
  const [copied, setCopied] = useState(false);

  const totalQuestions = INTERVIEW_SECTIONS.reduce(
    (sum, s) => sum + s.conceptualQAs.length + s.scenarioQAs.length,
    0
  );

  const handleCopy = async () => {
    const text = buildQuestionList().join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      id="copy-all-questions-btn"
      onClick={handleCopy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.5rem 1.1rem",
        fontSize: "0.85rem",
        fontWeight: 600,
        borderRadius: "6px",
        border: "1px solid var(--border)",
        background: copied ? "rgba(16,185,129,0.12)" : "var(--card)",
        color: copied ? "#10b981" : "var(--muted-foreground)",
        cursor: "pointer",
        transition: "all 0.2s",
        marginBottom: "2rem",
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied to clipboard!" : `Copy all ${totalQuestions}+ questions`}
    </button>
  );
}
