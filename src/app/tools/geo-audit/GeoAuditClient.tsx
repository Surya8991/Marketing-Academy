"use client";

import { useState, type CSSProperties } from "react";
import { Search, ExternalLink, Zap, AlertTriangle, CheckCircle, TrendingUp, Info, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ScoreMap {
  entity_coverage: number;
  citability: number;
  structured_data: number;
  direct_answers: number;
  brand_signals: number;
  content_depth: number;
}

interface QuickFix {
  action: string;
  impact: "high" | "medium" | "low";
  effort: "high" | "medium" | "low";
}

interface AuditResult {
  scores: ScoreMap;
  overall: number;
  grade: "A" | "B" | "C" | "D" | "F";
  summary: string;
  wins: string[];
  gaps: string[];
  quick_fixes: QuickFix[];
}

const SCORE_LABELS: Record<keyof ScoreMap, string> = {
  entity_coverage: "Entity Coverage",
  citability: "Citability",
  structured_data: "Structured Data",
  direct_answers: "Direct Answers",
  brand_signals: "Brand Signals",
  content_depth: "Content Depth",
};

const SCORE_TIPS: Record<keyof ScoreMap, string> = {
  entity_coverage: "Named people, tools, brands, stats, dates that LLMs anchor to",
  citability: "Original data, authorship, quotable claims LLMs can attribute",
  structured_data: "Lists, tables, step-by-step guides, FAQ patterns",
  direct_answers: "Specific, factual answers to implicit questions",
  brand_signals: "Consistent brand/author identity throughout the page",
  content_depth: "Comprehensive enough to be a definitive source",
};

function gradeColor(grade: string) {
  if (grade === "A") return "#10b981";
  if (grade === "B") return "#3b82f6";
  if (grade === "C") return "#f59e0b";
  return "#ef4444";
}

function scoreColor(s: number) {
  if (s >= 75) return "#10b981";
  if (s >= 50) return "#f59e0b";
  return "#ef4444";
}

// rgba overlays instead of Tailwind color/dark: classes: `dark:` is a no-op in this
// project's theme system (AGENTS.md Rule 5/19).
function impactBadge(level: string): CSSProperties {
  const styles: Record<string, CSSProperties> = {
    high: { backgroundColor: "rgba(22,163,74,0.15)", color: "#16a34a" },
    medium: { backgroundColor: "rgba(217,119,6,0.15)", color: "#d97706" },
    low: { backgroundColor: "rgba(220,38,38,0.15)", color: "#dc2626" },
  };
  return styles[level] ?? styles.low;
}

function ScoreBar({ label, value, tip }: { label: string; value: number; tip: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--foreground)]">{label}</span>
          <span className="text-xs text-[var(--muted-foreground)] hidden sm:inline">{tip}</span>
        </div>
        <span className="text-sm font-mono font-semibold tabular-nums" style={{ color: scoreColor(value) }}>
          {value}
        </span>
      </div>
      <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, background: scoreColor(value) }}
        />
      </div>
    </div>
  );
}

export default function GeoAuditClient() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [auditedUrl, setAuditedUrl] = useState("");

  async function runAudit() {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/geo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.detail ?? data.error ?? "Audit failed. Check the URL and try again.");
      } else {
        setResult(data.result as AuditResult);
        setAuditedUrl(data.url);
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const scoreKeys = Object.keys(SCORE_LABELS) as (keyof ScoreMap)[];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)] py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Tools
          </Link>
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Zap size={12} />
            AI-Powered
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3">
            GEO Auditor
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
            Paste any URL to score how likely AI models like ChatGPT, Claude, Perplexity, and Gemini are to cite that page in their answers. GEO is the 2026 layer above traditional SEO.
          </p>

          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus-within:border-[var(--accent)] transition-colors">
              <Search size={16} className="text-[var(--muted-foreground)] shrink-0" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && runAudit()}
                placeholder="https://yoursite.com/blog/your-article"
                className="flex-1 bg-transparent outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              />
              {auditedUrl && (
                <a href={auditedUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <button
              onClick={runAudit}
              disabled={loading || !url.trim()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              <Zap size={15} className={loading ? "animate-pulse" : ""} />
              {loading ? "Auditing..." : "Audit"}
            </button>
          </div>

          {error && (
            <div
              className="mt-4 flex items-start gap-2 rounded-lg px-4 py-3 text-sm"
              style={{ border: "1px solid rgba(220,38,38,0.3)", background: "rgba(220,38,38,0.08)", color: "#dc2626" }}
            >
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </section>

      {/* What is GEO callout */}
      {!result && !loading && (
        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6">
            <h2 className="font-semibold text-base text-[var(--foreground)] mb-3">What is GEO?</h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
              Generative Engine Optimization is about making your content discoverable and citable by AI. AI models don&apos;t rank links - they cite sources. This audit scores pages on the 6 signals that matter most to LLMs.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {scoreKeys.map((key) => (
                <div key={key} className="flex items-start gap-2 text-sm">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0 font-bold">+</span>
                  <div>
                    <span className="font-medium text-[var(--foreground)]">{SCORE_LABELS[key]}</span>
                    <span className="text-[var(--muted-foreground)]"> - {SCORE_TIPS[key]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loading */}
      {loading && (
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-4 animate-pulse">
          <div className="h-32 rounded-xl bg-[var(--muted)] border border-[var(--border)]" />
          <div className="h-48 rounded-xl bg-[var(--muted)] border border-[var(--border)]" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="h-40 rounded-xl bg-[var(--muted)] border border-[var(--border)]" />
            <div className="h-40 rounded-xl bg-[var(--muted)] border border-[var(--border)]" />
          </div>
        </section>
      )}

      {/* Results */}
      {result && !loading && (
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-6">

          {/* Overall score */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6">
            <div className="flex items-center gap-6 flex-wrap">
              <div
                className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 shrink-0"
                style={{ borderColor: gradeColor(result.grade) }}
              >
                <span className="text-3xl font-bold" style={{ color: gradeColor(result.grade) }}>
                  {result.grade}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">{result.overall}/100</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-xl text-[var(--foreground)] mb-1">
                  GEO Score: {result.overall}/100
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{result.summary}</p>
              </div>
            </div>
          </div>

          {/* Dimension scores */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6">
            <h3 className="font-semibold text-base text-[var(--foreground)] mb-5 flex items-center gap-2">
              <TrendingUp size={16} className="text-[var(--accent)]" />
              Dimension Scores
            </h3>
            <div className="space-y-4">
              {scoreKeys.map((key) => (
                <ScoreBar key={key} label={SCORE_LABELS[key]} value={result.scores[key]} tip={SCORE_TIPS[key]} />
              ))}
            </div>
          </div>

          {/* Wins + Gaps */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-5">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2" style={{ color: "#16a34a" }}>
                <CheckCircle size={15} />
                What&apos;s working
              </h3>
              <ul className="space-y-2">
                {result.wins.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 shrink-0" style={{ color: "#22c55e" }}>+</span>
                    <span className="text-[var(--muted-foreground)]">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-5">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2" style={{ color: "#d97706" }}>
                <Info size={15} />
                Gaps to fix
              </h3>
              <ul className="space-y-2">
                {result.gaps.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 shrink-0" style={{ color: "#eab308" }}>-</span>
                    <span className="text-[var(--muted-foreground)]">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick fixes */}
          {result.quick_fixes?.length > 0 && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6">
              <h3 className="font-semibold text-base text-[var(--foreground)] mb-4 flex items-center gap-2">
                <Zap size={16} className="text-[var(--accent)]" />
                Quick fixes
              </h3>
              <div className="space-y-3">
                {result.quick_fixes.map((fix, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] last:border-0">
                    <span className="font-mono text-xs text-[var(--muted-foreground)] mt-0.5 w-5 shrink-0">{i + 1}.</span>
                    <p className="text-sm text-[var(--foreground)] flex-1">{fix.action}</p>
                    <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
                        style={impactBadge(fix.impact)}
                      >
                        {fix.impact} impact
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[var(--border)] text-[var(--muted-foreground)]">
                        {fix.effort} effort
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-[var(--muted-foreground)] text-center">
            Scores are AI-generated estimates. Use as directional guidance and re-audit after making changes.
          </p>
        </section>
      )}
    </main>
  );
}
