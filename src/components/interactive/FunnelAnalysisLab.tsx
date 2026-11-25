"use client";

import { useState } from "react";
import { Database, ListOrdered, RefreshCw, ScanSearch, Smartphone, TrendingDown, Wrench } from "lucide-react";
import LabShell, { LabSlider, TONE, fmt } from "./LabShell";

/**
 * Step-through funnel analysis simulation for analytics/funnel-analysis.
 * Matches the lesson's opening example (1,000 visitors, 26 buyers).
 * Data is illustrative; every metric is computed from SEGMENTS.
 */

const STAGES = ["Landing page", "Product page", "Add to cart", "Checkout", "Purchase"];
type Segment = "All" | "Desktop" | "Mobile";
// Users reaching each stage. Desktop + Mobile = All.
const SEGMENTS: Record<Exclude<Segment, "All">, number[]> = {
  Desktop: [600, 340, 150, 100, 16],
  Mobile: [400, 200, 60, 30, 10],
};
const AOV = 60; // illustrative average order value, $

const CLUES = [
  { source: "Session recordings", text: "Shoppers scroll to the shipping line on checkout, pause, then close the tab." },
  { source: "Exit survey", text: "\"Shipping was more than I expected.\" (most common answer)" },
  { source: "Heatmap", text: "Almost nobody clicks the promo-code box. Price isn't the issue, the surprise is." },
];

const NODES = [
  { label: "Stages", icon: ListOrdered },
  { label: "Data", icon: Database },
  { label: "Drop-off", icon: TrendingDown },
  { label: "Investigate", icon: ScanSearch },
  { label: "Fix", icon: Wrench },
  { label: "Segment", icon: Smartphone },
  { label: "Loop", icon: RefreshCw },
];

const LEARN = [
  { text: "Map the exact steps a buyer takes", doneAt: 1 },
  { text: "Calculate drop-off between stages", doneAt: 3 },
  { text: "Use qualitative data to find the why", doneAt: 4 },
  { text: "Fix the biggest leak, not the top of the funnel", doneAt: 5 },
  { text: "Segment by device before you trust a fix", doneAt: 6 },
];

/**
 * Stage counts for a segment. The checkout fix (extra conversion points) only
 * lifts desktop, like the lesson's Converica case: the same fix did nothing on mobile.
 */
function funnel(seg: Segment, fixPts: number): number[] {
  const d = SEGMENTS.Desktop;
  const desktop = fixPts ? [...d.slice(0, 4), Math.round(d[3] * Math.min(1, d[4] / d[3] + fixPts / 100))] : d;
  if (seg === "Desktop") return desktop;
  if (seg === "Mobile") return SEGMENTS.Mobile;
  return desktop.map((n, i) => n + SEGMENTS.Mobile[i]);
}

const dropPct = (c: number[], i: number) => Math.round((1 - c[i + 1] / c[i]) * 100);
const biggestDrop = (c: number[]) =>
  c.slice(0, -1).reduce((best, _, i) => (dropPct(c, i) > dropPct(c, best) ? i : best), 0);

export default function FunnelAnalysisLab() {
  const [step, setStep] = useState(0);
  const [fixPts, setFixPts] = useState(0);
  const [seg, setSeg] = useState<Segment>("All");
  const [opened, setOpened] = useState<Set<number>>(() => new Set());

  const viewSeg: Segment = step === 5 ? seg : "All";
  const fix = step >= 4 ? fixPts : 0;
  const counts = funnel(viewSeg, fix);
  const prevCounts = funnel("All", step - 1 >= 4 ? fixPts : 0);
  const worst = biggestDrop(counts);
  const base = funnel("All", 0);
  const nextLeak = biggestDrop(funnel("All", fixPts));

  // Desktop is where the clues came from. Compare the checkout fix with the
  // same extra conversion points spent at the top of the desktop funnel.
  const d = SEGMENTS.Desktop;
  const deskRate = Math.round((d[4] / d[3]) * 100);
  const deskFixed = funnel("Desktop", fixPts)[4];
  const topFixBuyers = Math.round(d[0] * Math.min(1, d[1] / d[0] + fixPts / 100) * (d[4] / d[1]));

  const showData = step >= 1;
  const tiles = [
    { label: "Visitors", value: showData ? fmt(counts[0]) : "-", changed: step === 1 || step === 5 },
    { label: "Purchases", value: showData ? fmt(counts[4]) : "-", changed: counts[4] !== prevCounts[4] || step === 1 },
    { label: "Conversion", value: showData ? `${((counts[4] / counts[0]) * 100).toFixed(1)}%` : "-", changed: counts[4] !== prevCounts[4] || step === 1 },
    { label: "Revenue", value: showData ? `$${fmt(counts[4] * AOV)}` : "-", changed: counts[4] !== prevCounts[4] || step === 1 },
  ];

  const STEPS = [
    {
      title: "Define your stages",
      body: [
        "An online store's goal is a purchase. Write down every step a shopper must take to get there.",
        "Each stage should be one action your analytics tool can track.",
      ],
      changed: [`+ ${STAGES.length} stages, from landing page to purchase`],
    },
    {
      title: "Collect data per stage",
      body: [
        "Count how many people reach each stage. In GA4 this is a Funnel Exploration report.",
        `${fmt(base[0])} people arrive. Only ${base[4]} buy. Where did the rest go?`,
      ],
      changed: [`+ counts for each stage, ${fmt(base[0])} → ${base[4]}`],
    },
    {
      title: "Calculate drop-off",
      body: [
        "Drop-off rate = people who left a stage ÷ people who entered it.",
        "The stage with the biggest drop-off is your biggest opportunity.",
      ],
      changed: [`! biggest leak: ${STAGES[biggestDrop(base)]} → ${STAGES[biggestDrop(base) + 1]} (${dropPct(base, biggestDrop(base))}% leave)`],
    },
    {
      title: "Investigate why",
      body: [
        "Numbers show where people leave. Qualitative data shows why.",
        "Open each clue below.",
      ],
      changed: [opened.size === CLUES.length ? "= cause found: surprise shipping costs at checkout" : `${opened.size} / ${CLUES.length} clues opened`],
    },
    {
      title: "Test a fix",
      body: [
        "Hypothesis: showing the free-shipping threshold on the cart page removes the surprise.",
        "Drag the slider to see what a better checkout rate is worth.",
      ],
      changed: [
        `+ ${deskFixed - d[4]} extra desktop purchases ($${fmt((deskFixed - d[4]) * AOV)}) from +${fixPts} points at checkout`,
        `vs + ${topFixBuyers - d[4]} if the same +${fixPts} points went to the landing page`,
      ],
    },
    {
      title: "Segment by device",
      body: [
        "Switch between devices. The free-shipping fix lifted desktop, but mobile didn't move at all.",
        "Each segment can leak at a different stage.",
      ],
      changed: [`${viewSeg}: biggest leak is ${STAGES[worst]} → ${STAGES[worst + 1]} (${dropPct(counts, worst)}%)`],
    },
    {
      title: "Measure and repeat",
      body: [
        "After a fix ships, recalculate. The biggest leak moves somewhere else.",
        "Funnel work is a loop, not a one-time project.",
      ],
      changed: [nextLeak === biggestDrop(base)
        ? `= biggest leak is still ${STAGES[nextLeak]} → ${STAGES[nextLeak + 1]}. Test the next fix there`
        : `= the biggest leak moved to ${STAGES[nextLeak]} → ${STAGES[nextLeak + 1]}`],
    },
  ];

  const max = counts[0];

  return (
    <LabShell
      title="Find the leak in an online store's funnel"
      steps={STEPS}
      step={step}
      setStep={setStep}
      tiles={tiles}
      nodes={NODES}
      learn={LEARN}
    >
      {step === 5 && (
        <div className="mb-3 inline-flex rounded-lg border border-[var(--border)] bg-[var(--card)] p-0.5 text-xs" role="group" aria-label="Device segment">
          {(["All", "Desktop", "Mobile"] as Segment[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSeg(s)}
              aria-pressed={seg === s}
              className="rounded-md px-3 py-1 font-medium transition-colors"
              style={seg === s ? { background: "var(--accent)", color: "var(--accent-foreground)" } : undefined}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <ol className="flex flex-col gap-1" aria-label="Funnel stages">
        {STAGES.map((name, i) => (
          <li key={name}>
            <div className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs font-medium sm:w-28">{name}</span>
              <div className="relative h-7 flex-1 rounded-md bg-[var(--card)] border border-[var(--border)] overflow-hidden">
                <div
                  className="h-full rounded-md transition-[width] duration-500"
                  style={{
                    width: showData ? `${Math.max(2, (counts[i] / max) * 100)}%` : "100%",
                    background: showData ? "var(--accent)" : "transparent",
                    opacity: showData ? 0.85 - i * 0.08 : 1,
                  }}
                />
                {showData && (
                  <span className="absolute inset-y-0 right-2 flex items-center font-data text-xs tabular-nums">{fmt(counts[i])}</span>
                )}
              </div>
            </div>
            {i < STAGES.length - 1 && step >= 2 && (
              <div className="ml-24 pl-3 sm:ml-28">
                <span
                  className="inline-block rounded px-1.5 py-0.5 font-data text-[0.65rem] transition-colors"
                  style={i === worst ? TONE.bad : { color: "var(--muted-foreground)" }}
                >
                  ↓ {dropPct(counts, i)}% drop off{i === worst ? " · biggest leak" : ""}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>

      {step === 3 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {CLUES.map((c, i) => (
            <button
              key={c.source}
              type="button"
              onClick={() => setOpened((o) => new Set(o).add(i))}
              aria-expanded={opened.has(i)}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-left text-xs transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-data text-xs text-[var(--muted-foreground)]">{c.source}</div>
              <div className="mt-1">{opened.has(i) ? c.text : "Click to reveal"}</div>
            </button>
          ))}
        </div>
      )}

      {step === 4 && (
        <>
          <LabSlider
            label="Desktop checkout → purchase rate"
            value={fixPts}
            display={`${deskRate + fixPts}%`}
            min={0}
            max={20}
            step={1}
            onChange={setFixPts}
            hint={`Today: ${deskRate}%. The clues came from desktop sessions. Drag to simulate the free-shipping message.`}
          />
          <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm">
            <div className="rounded-lg p-3" style={TONE.good}>
              <div className="font-data text-xs text-[var(--success)]">Fix the biggest leak</div>
              <div className="font-semibold">{deskFixed} desktop buyers · ${fmt(deskFixed * AOV)}</div>
            </div>
            <div className="rounded-lg p-3" style={TONE.info}>
              <div className="font-data text-xs text-[var(--muted-foreground)]">Same gain at the landing page</div>
              <div className="font-semibold">{topFixBuyers} desktop buyers · ${fmt(topFixBuyers * AOV)}</div>
            </div>
          </div>
        </>
      )}
    </LabShell>
  );
}
