"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InteractiveLab({ embedded = false }: { embedded?: boolean }) {
  const [activeTab, setActiveTab] = useState<"economics" | "headline" | "dilemma">("economics");

  // Tab 1: Unit Economics State
  const [cvr, setCvr] = useState<number>(2.5);
  const cvrInputId = useId();
  const spend = 5000;
  const visitors = 2500;
  const revPerCustomer = 120;
  const customers = Math.max(1, Math.round(visitors * (cvr / 100)));
  const cac = Math.round(spend / customers);
  const revenue = customers * revPerCustomer;
  const profit = revenue - spend;
  const roas = (revenue / spend).toFixed(2);

  // Tab 2: Headline Clinic State
  const [headline, setHeadline] = useState<string>("Grow your business with better marketing");
  const headlineInputId = useId();

  const analyzeHeadline = (text: string) => {
    let score = 50;
    const feedback: string[] = [];
    const lower = text.toLowerCase();

    if (/\d+/.test(text) || /\$|%|x/i.test(text)) {
      score += 20;
      feedback.push("Contains concrete numbers or metrics.");
    } else {
      feedback.push("Add a specific outcome, number, or time horizon (e.g. 'in 30 days', '3x').");
    }

    const powerWords = ["proven", "how to", "secret", "system", "blueprint", "free", "without", "fast", "mastery", "step-by-step"];
    const foundPower = powerWords.filter((w) => lower.includes(w));
    if (foundPower.length > 0) {
      score += 15;
      feedback.push(`Uses specific hook phrases: "${foundPower.join(", ")}".`);
    }

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    if (words >= 6 && words <= 12) {
      score += 15;
    } else if (words < 5) {
      score -= 10;
      feedback.push("A bit too brief; clarify who this is for.");
    }

    const finalScore = Math.min(100, Math.max(20, score));
    return { score: finalScore, feedback };
  };

  const { score: headlineScore, feedback: headlineFeedback } = analyzeHeadline(headline);

  // Tab 3: Dilemma State
  const [selectedDilemma, setSelectedDilemma] = useState<"A" | "B" | null>(null);

  const card = (
    <div className="rounded-2xl p-5 sm:p-6 bg-[var(--card)] border border-[var(--border)]">
      {/* Lab Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${embedded ? "mb-5 pb-4" : "mb-8 pb-6"} border-b border-[var(--border)]`}>
        <div>
          <p className="font-data text-xs text-[var(--accent)] mb-1">
            Interactive lab
          </p>
          {embedded ? (
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight font-serif text-[var(--foreground)]">
              Live unit economics &amp; headline sandbox
            </h2>
          ) : (
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-serif text-[var(--foreground)]">
              Try the ideas yourself
            </h2>
          )}
        </div>
        {!embedded && (
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            Drag a slider to see when an ad campaign stops paying for itself, score a headline,
            or pick between two button labels.
          </p>
        )}
      </div>

      {/* Interactive Shell Body */}
      <div className={`grid ${embedded ? "gap-5" : "lg:grid-cols-12 gap-8 items-start"}`}>
        {/* Controls */}
        <div className={`${embedded ? "" : "lg:col-span-7"} p-4 sm:p-5 rounded-xl bg-[var(--muted)] border border-[var(--border)]`}>
              {/* Tab Selector Buttons */}
              <div
                className="flex items-center gap-1 p-1 rounded-lg bg-[var(--card)] border border-[var(--border)] mb-6 w-full sm:w-fit"
                role="tablist"
              >
                {[
                  { id: "economics", label: "Unit economics" },
                  { id: "headline", label: "Headline clinic" },
                  { id: "dilemma", label: "A/B dilemma" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as "economics" | "headline" | "dilemma")}
                    className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                      activeTab === t.id
                        ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Panel 1: Unit Economics */}
              {activeTab === "economics" && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={cvrInputId} className="text-[var(--foreground)] font-medium">
                      Landing page conversion rate (CVR)
                    </label>
                    <output htmlFor={cvrInputId} className="font-data text-base font-medium text-[var(--accent)] tabular-nums">
                      {cvr.toFixed(1)}%
                    </output>
                  </div>

                  <input
                    id={cvrInputId}
                    type="range"
                    min="0.5"
                    max="6.0"
                    step="0.1"
                    value={cvr}
                    onChange={(e) => setCvr(parseFloat(e.target.value))}
                    aria-label="Landing Page Conversion Rate slider"
                    className="w-full h-2 rounded-lg bg-[var(--border)] accent-[var(--accent)] cursor-pointer"
                  />

                  <div className="flex justify-between text-xs font-data text-[var(--muted-foreground)] tabular-nums">
                    <span>0.5% · Low</span>
                    <span>3.0% · Benchmark</span>
                    <span>6.0% · High</span>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
                    <span className="font-medium text-[var(--foreground)]">Model assumptions:</span>{" "}
                    $5,000 paid ad budget, 2,500 qualified visitors, and $120 average revenue per converted customer.
                  </div>
                </div>
              )}

              {/* Panel 2: Headline Clinic */}
              {activeTab === "headline" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={headlineInputId} className="text-[var(--foreground)] font-medium">
                      Test your value proposition headline
                    </label>
                    <output htmlFor={headlineInputId} className="font-data text-base font-medium text-[var(--accent)] tabular-nums">
                      {headlineScore} / 100
                    </output>
                  </div>

                  <input
                    id={headlineInputId}
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Enter a value proposition"
                    aria-label="Value Proposition Headline input"
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />

                  <div className="w-full h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full transition-[width] duration-300 rounded-full"
                      style={{
                        width: `${headlineScore}%`,
                        background:
                          headlineScore > 75
                            ? "var(--success)"
                            : headlineScore > 50
                            ? "var(--accent)"
                            : "var(--warning)",
                      }}
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    {headlineFeedback.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
                        <CheckCircle2 size={16} strokeWidth={1.5} className="text-[var(--accent)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Panel 3: Dilemma */}
              {activeTab === "dilemma" && (
                <div className="space-y-3">
                  <p className="text-sm text-[var(--foreground)] font-medium mb-1">
                    Which call to action yields lower perceived friction?
                  </p>

                  <button
                    onClick={() => setSelectedDilemma("A")}
                    className={`w-full text-left p-4 rounded-lg border transition-colors text-xs sm:text-sm ${
                      selectedDilemma === "A"
                        ? "border-[var(--accent)] bg-[var(--card)] text-[var(--foreground)]"
                        : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span className="font-medium text-[var(--foreground)]">A.</span> &ldquo;Start your 30-day free trial&rdquo;
                  </button>

                  <button
                    onClick={() => setSelectedDilemma("B")}
                    className={`w-full text-left p-4 rounded-lg border transition-colors text-xs sm:text-sm ${
                      selectedDilemma === "B"
                        ? "border-[var(--accent)] bg-[var(--card)] text-[var(--foreground)]"
                        : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span className="font-medium text-[var(--foreground)]">B.</span> &ldquo;Give it a try — it&apos;s free&rdquo;
                  </button>

                  {selectedDilemma && (
                    <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {selectedDilemma === "B" ? (
                        <>
                          <span className="font-medium text-[var(--success)]">Lower friction:</span>{" "}
                          &ldquo;Give it a try&rdquo; uses the micro-commitment principle. &ldquo;Start a 30-day trial&rdquo; primes an expiration deadline and implies future billing.
                        </>
                      ) : (
                        <>
                          <span className="font-medium text-[var(--warning)]">Analysis:</span>{" "}
                          While &ldquo;30-day free trial&rdquo; is standard in SaaS, it primes an expiration deadline. Option B typically earns 14–22% higher click-through in low-intent funnels.
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Live Calculated Metrics Dashboard */}
            <div className={`${embedded ? "grid grid-cols-2 sm:grid-cols-4 gap-3" : "lg:col-span-5 grid grid-cols-2 gap-4"}`}>
              {/* Highlight Metric: CAC */}
              <div className={`${embedded ? "p-3.5" : "col-span-2 p-5"} rounded-xl bg-[var(--muted)] border border-[var(--accent)]`}>
                <span className="block font-data text-xs text-[var(--accent)]">
                  {embedded ? "CAC" : "Customer acquisition cost (CAC)"}
                </span>
                <strong className={`block ${embedded ? "text-2xl" : "text-4xl"} font-medium font-serif text-[var(--foreground)] mt-1 tabular-nums`}>
                  ${cac}
                </strong>
                {!embedded && (
                  <span className="block text-xs text-[var(--muted-foreground)] mt-2 font-ui-sans tabular-nums">
                    {customers} paying customers generated
                  </span>
                )}
              </div>

              {/* Metric 2: Revenue */}
              <div className={`${embedded ? "p-3.5" : "p-5"} rounded-xl bg-[var(--muted)] border border-[var(--border)]`}>
                <span className="block font-data text-xs text-[var(--muted-foreground)]">
                  {embedded ? "Revenue" : "Campaign revenue"}
                </span>
                <strong className={`block ${embedded ? "text-2xl" : "text-2xl sm:text-3xl"} font-medium font-serif text-[var(--foreground)] mt-1 tabular-nums`}>
                  ${revenue.toLocaleString()}
                </strong>
              </div>

              {/* Metric 3: Net Profit */}
              <div className={`${embedded ? "p-3.5" : "p-5"} rounded-xl bg-[var(--muted)] border border-[var(--border)]`}>
                <span className="block font-data text-xs text-[var(--muted-foreground)]">
                  {embedded ? "Net profit" : "Net after ad spend"}
                </span>
                <strong
                  className={`block ${embedded ? "text-2xl" : "text-2xl sm:text-3xl"} font-medium font-serif mt-1 tabular-nums`}
                  style={{ color: profit >= 0 ? "var(--success)" : "var(--danger)" }}
                >
                  {profit >= 0 ? `+$${profit.toLocaleString()}` : `-$${Math.abs(profit).toLocaleString()}`}
                </strong>
              </div>

              {/* Metric 4: ROAS */}
              <div className={`${embedded ? "p-3.5" : "col-span-2 p-5"} rounded-xl bg-[var(--muted)] border border-[var(--border)]`}>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="block font-data text-xs text-[var(--muted-foreground)]">
                      {embedded ? "ROAS" : "Return on ad spend (ROAS)"}
                    </span>
                    <strong className={`block ${embedded ? "text-2xl" : "text-3xl"} font-medium font-serif text-[var(--foreground)] mt-1 tabular-nums`}>
                      {roas}×
                    </strong>
                  </div>
                  {!embedded && (
                    <Link
                      href="/learn/analytics/ltv-cac"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] text-xs text-[var(--foreground)] font-medium transition-colors"
                    >
                      <span>Deep dive</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  )}
                </div>
              </div>

              {!embedded && (
                <div className="col-span-2 pt-1 text-xs text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
                  A 1% increase in conversion rate drops CAC sharply and turns unprofitable runs into sustainable acquisition.
                </div>
              )}
            </div>
          </div>
        </div>
  );

  if (embedded) return card;

  return (
    <section id="interactive-lab" className="py-16 sm:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {card}
      </div>
    </section>
  );
}
