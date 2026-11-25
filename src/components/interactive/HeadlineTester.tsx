"use client";

import { useState, useId } from "react";
import { Sparkles, CheckCircle, Zap, TrendingUp } from "lucide-react";
import { useEngagement } from "@/hooks/useEngagement";

const POWER_WORDS = [
  "secret", "proven", "instant", "guaranteed", "effortless", "mistake", "warning", "deadly",
  "simple", "hack", "truth", "discover", "boost", "crush", "skyrocket", "insider", "exclusive",
  "stop", "shocking", "essential", "ultimate", "mastery", "free", "lucrative", "fail", "win"
];

const PRESETS = [
  { label: "Basecamp Agitator", text: "Where did that file go? Who is working on what? Basecamp fixes the mess." },
  { label: "The Specificity Hook", text: "How We Scaled from $0 to $42,000 MRR in 90 Days Without Paid Ads" },
  { label: "Contrarian / Curiosity", text: "Why 80% of Marketing Automation Campaigns Fail Before Week 2" },
  { label: "Urgency / Scarcity", text: "Only 4 Days Left: The 2026 Growth Playbook is Closing" },
];

export default function HeadlineTester() {
  const [headline, setHeadline] = useState("Why Most B2B Landing Pages Fail to Convert Visitors");
  const [evaluatedOnce, setEvaluatedOnce] = useState(false);
  const { award } = useEngagement();
  const inputId = useId();

  const words = headline.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Analysis calculations
  const lower = headline.toLowerCase();
  const matchedPowerWords = POWER_WORDS.filter((pw) => lower.includes(pw));
  const hasNumbers = /\d+|%|\$/.test(headline);
  const hasCuriosity = /why|how|what|secret|truth|stop|never|warning|discover/i.test(headline);

  // Score computation (0 - 100)
  let score = 40; // baseline
  // Word count score (ideal 6 - 13 words)
  if (wordCount >= 6 && wordCount <= 13) score += 25;
  else if (wordCount >= 4 && wordCount <= 18) score += 12;

  // Power words score
  if (matchedPowerWords.length >= 2) score += 20;
  else if (matchedPowerWords.length === 1) score += 12;

  // Numbers & Specificity
  if (hasNumbers) score += 15;

  // Curiosity trigger
  if (hasCuriosity) score += 15;

  score = Math.min(100, Math.max(15, score));

  const handleTest = () => {
    if (!evaluatedOnce) {
      setEvaluatedOnce(true);
      award("quiz", "headline-tester-eval");
    }
  };

  let grade = { label: "Needs Polish", color: "text-[var(--warning)] bg-amber-500/10 border-amber-500/30" };
  if (score >= 80) {
    grade = { label: "High-Converting Hook", color: "text-[var(--success)] bg-emerald-500/10 border-emerald-500/30" };
  } else if (score >= 60) {
    grade = { label: "Solid Foundation", color: "text-blue-500 bg-blue-500/10 border-blue-500/30" };
  }

  return (
    <div className="my-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm text-[var(--foreground)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[var(--border)]">
        <div>
          <div className="text-xs font-medium text-[var(--accent)] flex items-center gap-1.5">
            <Zap size={13} /> Interactive Copywriting Sandbox
          </div>
          <h4 className="text-lg font-semibold font-display">
            Headline &amp; Hook Evaluator
          </h4>
        </div>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold self-start sm:self-auto ${grade.color}`}>
          <span>{score}/100</span>
          <span>·</span>
          <span>{grade.label}</span>
        </div>
      </div>

      {/* Preset Inspirations */}
      <div className="mb-4">
        <div className="text-xs text-[var(--muted-foreground)] mb-2 flex items-center gap-1">
          <Sparkles size={12} className="text-[var(--accent)]" /> Try a proven high-converting pattern:
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setHeadline(p.text);
                handleTest();
              }}
              className="text-xs px-2.5 py-1 rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 hover:bg-[var(--muted)] hover:border-[var(--accent)] transition-colors text-[var(--foreground)]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Headline Input */}
      <div className="space-y-2 mb-6">
        <label htmlFor={inputId} className="block text-xs font-medium text-[var(--muted-foreground)]">
          Your Headline or Hook
        </label>
        <textarea
          id={inputId}
          rows={2}
          value={headline}
          onChange={(e) => {
            setHeadline(e.target.value);
            handleTest();
          }}
          placeholder="Type an H1, email subject line, or video hook..."
          className="w-full p-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm sm:text-base font-medium focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
        />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
          <div className="text-xs text-[var(--muted-foreground)]">Word Count</div>
          <div className="text-lg font-semibold font-mono">
            {wordCount} <span className="text-xs font-normal text-[var(--muted-foreground)]">words</span>
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">
            {wordCount >= 6 && wordCount <= 13 ? "✓ Optimal (6-13)" : "Target: 6-13 words"}
          </div>
        </div>

        <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
          <div className="text-xs text-[var(--muted-foreground)]">Power Words</div>
          <div className="text-lg font-semibold font-mono text-[var(--accent)]">
            {matchedPowerWords.length}
          </div>
          <div className="text-xs text-[var(--muted-foreground)] truncate">
            {matchedPowerWords.length > 0 ? matchedPowerWords.join(", ") : "None detected"}
          </div>
        </div>

        <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
          <div className="text-xs text-[var(--muted-foreground)]">Curiosity Gap</div>
          <div className={`text-lg font-semibold font-mono ${hasCuriosity ? "text-[var(--success)]" : "text-[var(--muted-foreground)]"}`}>
            {hasCuriosity ? "High" : "Low"}
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">
            {hasCuriosity ? "✓ Hook trigger found" : "Add why / how / truth"}
          </div>
        </div>

        <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
          <div className="text-xs text-[var(--muted-foreground)]">Specificity</div>
          <div className={`text-lg font-semibold font-mono ${hasNumbers ? "text-[var(--success)]" : "text-[var(--muted-foreground)]"}`}>
            {hasNumbers ? "Specific" : "Vague"}
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">
            {hasNumbers ? "✓ Metrics detected" : "Add numbers, $, or %"}
          </div>
        </div>
      </div>

      {/* Actionable Feedback Suggestions */}
      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 space-y-2 text-xs">
        <div className="font-semibold text-[var(--foreground)] flex items-center gap-1.5">
          <TrendingUp size={14} className="text-[var(--accent)]" /> Optimization Advice:
        </div>
        <ul className="space-y-1.5 text-[var(--muted-foreground)]">
          {!hasNumbers && (
            <li className="flex items-start gap-1.5">
              <span className="text-[var(--warning)]">•</span>
              <span>Inject a specific number or timeframe (e.g. <em>&ldquo;in 14 days&rdquo;</em> or <em>&ldquo;+42%&rdquo;</em>) to build trust.</span>
            </li>
          )}
          {matchedPowerWords.length === 0 && (
            <li className="flex items-start gap-1.5">
              <span className="text-[var(--warning)]">•</span>
              <span>Add an emotional power word like <em>&ldquo;proven&rdquo;</em>, <em>&ldquo;deadly&rdquo;</em>, <em>&ldquo;effortless&rdquo;</em>, or <em>&ldquo;secret&rdquo;</em>.</span>
            </li>
          )}
          {wordCount < 6 && (
            <li className="flex items-start gap-1.5">
              <span className="text-[var(--warning)]">•</span>
              <span>Too short: clarify who the product is for or the specific problem it eliminates.</span>
            </li>
          )}
          {wordCount > 14 && (
            <li className="flex items-start gap-1.5">
              <span className="text-[var(--warning)]">•</span>
              <span>Trim words for punchier scannability: readers skip headlines longer than 13 words.</span>
            </li>
          )}
          {hasNumbers && hasCuriosity && matchedPowerWords.length >= 1 && (
            <li className="flex items-start gap-1.5 text-[var(--success)] font-medium">
              <CheckCircle size={13} className="shrink-0 mt-0.5" />
              <span>Excellent balance. You have combined emotional tension, clear specificity, and an optimal reading length.</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
