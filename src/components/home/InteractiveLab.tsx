"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InteractiveLab() {
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

    // Check numbers or metrics
    if (/\d+/.test(text) || /\$|%|x/i.test(text)) {
      score += 20;
      feedback.push("Contains concrete numbers or metrics.");
    } else {
      feedback.push("Add a specific outcome, number, or time horizon (e.g. 'in 30 days', '3x').");
    }

    // Power words
    const powerWords = ["proven", "how to", "secret", "system", "blueprint", "free", "without", "fast", "mastery", "step-by-step"];
    const foundPower = powerWords.filter((w) => lower.includes(w));
    if (foundPower.length > 0) {
      score += 15;
      feedback.push(`Uses compelling hook phrases: "${foundPower.join(", ")}".`);
    }

    // Length check
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

  return (
    <section id="interactive-lab" className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-[#2e2d4d]"
          style={{
            background: "#1d1c32",
            boxShadow: "0 25px 60px rgba(15, 14, 35, 0.45)",
          }}
        >
          {/* Ambient radial blur */}
          <div
            className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40"
            style={{
              background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            }}
          />

          {/* Lab Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-8 border-b border-white/10">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-serif text-white">
                Try the ideas yourself
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-[#b9b8c9] font-ui-sans leading-relaxed">
                Drag a slider to see when an ad campaign stops paying for itself, score a headline,
                or pick between two button labels.
              </p>
            </div>
          </div>

          {/* Interactive Shell Body */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md">
              {/* Tab Selector Buttons */}
              <div
                className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.08] border border-white/[0.1] mb-6 w-full sm:w-fit"
                role="tablist"
              >
                {[
                  { id: "economics", label: "Unit economics" },
                  { id: "headline", label: "Headline clinic" },
                  { id: "dilemma", label: "A/B Dilemma" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as "economics" | "headline" | "dilemma")}
                    className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === t.id
                        ? "bg-[#5c54e9] text-white shadow-md"
                        : "text-[#aaa9bb] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Panel 1: Unit Economics */}
              {activeTab === "economics" && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={cvrInputId} className="text-[#d6d5e1] font-medium">
                      Landing Page Conversion Rate (CVR)
                    </label>
                    <output htmlFor={cvrInputId} className="font-mono text-base font-bold text-[#c5c1ff]">
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
                    className="w-full h-2 rounded-lg bg-white/20 accent-[#8c85ff] cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#8e8da3]">
                    <span>0.5% · Low</span>
                    <span>3.0% · Industry Benchmark</span>
                    <span>6.0% · High Performance</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#a6a5b9] font-ui-sans leading-relaxed">
                    <strong>Model Assumptions:</strong> $5,000 paid ad budget, 2,500 qualified visitors, and $120 average revenue per converted customer.
                  </div>
                </div>
              )}

              {/* Panel 2: Headline Clinic */}
              {activeTab === "headline" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={headlineInputId} className="text-[#d6d5e1] font-medium">
                      Test Your Value Proposition Headline
                    </label>
                    <output htmlFor={headlineInputId} className="font-mono text-base font-bold text-[#c5c1ff]">
                      {headlineScore} / 100
                    </output>
                  </div>

                  <input
                    id={headlineInputId}
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Enter a value proposition..."
                    aria-label="Value Proposition Headline input"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/[0.08] text-white text-sm focus:outline-none focus:border-[#8c85ff]"
                  />

                  {/* Score visual meter */}
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 rounded-full"
                      style={{
                        width: `${headlineScore}%`,
                        background:
                          headlineScore > 75
                            ? "#10b981"
                            : headlineScore > 50
                            ? "#8c85ff"
                            : "#f59e0b",
                      }}
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    {headlineFeedback.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#a6a5b9]">
                        <CheckCircle2 size={13} className="text-[#8c85ff] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Panel 3: Dilemma */}
              {activeTab === "dilemma" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="text-sm text-[#d6d5e1] font-medium">
                    Which call to action yields a lower perceived psychological friction?
                  </p>

                  <button
                    onClick={() => setSelectedDilemma("A")}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm ${
                      selectedDilemma === "A"
                        ? "border-[#8c85ff] bg-[#5c54e9]/30 text-white shadow-md"
                        : "border-white/15 bg-white/[0.05] text-[#d6d5e1] hover:bg-white/[0.1]"
                    }`}
                  >
                    <strong>A.</strong> &ldquo;Start your 30-day free trial&rdquo;
                  </button>

                  <button
                    onClick={() => setSelectedDilemma("B")}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm ${
                      selectedDilemma === "B"
                        ? "border-[#8c85ff] bg-[#5c54e9]/30 text-white shadow-md"
                        : "border-white/15 bg-white/[0.05] text-[#d6d5e1] hover:bg-white/[0.1]"
                    }`}
                  >
                    <strong>B.</strong> &ldquo;Give it a try — it&apos;s free&rdquo;
                  </button>

                  {selectedDilemma && (
                    <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-[#c4bfff] leading-relaxed animate-in fade-in duration-300">
                      {selectedDilemma === "B" ? (
                        <>
                          <strong className="text-emerald-400">Psychological Win:</strong> &ldquo;Give it a try&rdquo; employs the <em>micro-commitment principle</em>. &ldquo;Start a 30-day trial&rdquo; triggers loss aversion by framing the eventual expiration date and implies future billing friction.
                        </>
                      ) : (
                        <>
                          <strong className="text-amber-400">Analysis:</strong> While &ldquo;30-day free trial&rdquo; is a widespread SaaS industry standard, it inadvertently primes the prospect with an expiration deadline. Option B typically sees 14-22% higher click-through in low-intent consumer funnels.
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Live Calculated Metrics Dashboard */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {/* Highlight Metric: CAC */}
              <div className="col-span-2 p-5 rounded-2xl bg-[#4f46e5] border border-[#746df4] shadow-lg">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[#dedcff]">
                  Customer Acquisition Cost (CAC)
                </span>
                <strong className="block text-4xl sm:text-5xl font-serif text-white mt-2">
                  ${cac}
                </strong>
                <span className="block text-xs text-[#dedcff] mt-2 font-ui-sans">
                  {customers} paying customers generated
                </span>
              </div>

              {/* Metric 2: Revenue */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/[0.12]">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[#aeadc0]">
                  Campaign Revenue
                </span>
                <strong className="block text-2xl sm:text-3xl font-serif text-white mt-2">
                  ${revenue.toLocaleString()}
                </strong>
              </div>

              {/* Metric 3: Net Profit */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/[0.12]">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[#aeadc0]">
                  Net After Ad Spend
                </span>
                <strong
                  className={`block text-2xl sm:text-3xl font-serif mt-2 ${
                    profit >= 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {profit >= 0 ? `+$${profit.toLocaleString()}` : `-$${Math.abs(profit).toLocaleString()}`}
                </strong>
              </div>

              {/* Metric 4: ROAS */}
              <div className="col-span-2 p-5 rounded-2xl bg-white/[0.06] border border-white/[0.12]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#aeadc0]">
                      Return on Ad Spend (ROAS)
                    </span>
                    <strong className="block text-3xl font-serif text-white mt-1">
                      {roas}×
                    </strong>
                  </div>
                  <Link
                    href="/learn/analytics/ltv-cac"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                  >
                    <span>Deep dive</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Sensitivity Note */}
              <div className="col-span-2 pt-2 text-[11px] text-[#aaa9bb] font-ui-sans leading-relaxed">
                A 1% increase in conversion rate drops CAC dramatically while turning unprofitable acquisition runs into high-margin growth loops.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
