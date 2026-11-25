"use client";

import { useState } from "react";
import { Filter, Gauge, ListChecks, MousePointerClick, Search, Sprout, User } from "lucide-react";
import LabShell, { LabSlider, TONE, fmt } from "./LabShell";

/**
 * Step-through keyword research simulation for seo/keyword-research.
 * Every metric is computed from the KEYWORDS list below, so the numbers on
 * screen always agree with the chips and the table. Data is illustrative.
 */

type Intent = "Informational" | "Commercial" | "Transactional" | "Navigational";
type Kw = { k: string; vol: number; kd: number; intent: Intent; seed?: boolean; offTopic?: string };

const KEYWORDS: Kw[] = [
  { k: "project management software", vol: 33000, kd: 88, intent: "Commercial", seed: true },
  { k: "task tracker", vol: 9900, kd: 61, intent: "Commercial", seed: true },
  { k: "trello alternative", vol: 6600, kd: 52, intent: "Commercial", seed: true },
  { k: "missed deadlines", vol: 2400, kd: 38, intent: "Informational", seed: true },
  { k: "team to-do app", vol: 1300, kd: 45, intent: "Transactional", seed: true },
  { k: "trello login", vol: 90500, kd: 70, intent: "Navigational", offTopic: "Wants Trello itself" },
  { k: "project manager salary", vol: 22000, kd: 55, intent: "Informational", offTopic: "Job seekers, not buyers" },
  { k: "asana pricing", vol: 8100, kd: 48, intent: "Navigational", offTopic: "Wants Asana's own page" },
  { k: "kanban board free", vol: 4400, kd: 47, intent: "Transactional" },
  { k: "how to prioritize tasks at work", vol: 3600, kd: 41, intent: "Informational" },
  { k: "project management for agencies", vol: 1900, kd: 34, intent: "Commercial" },
  { k: "free team task tracker", vol: 1600, kd: 24, intent: "Transactional" },
  { k: "weekly team planning template", vol: 1300, kd: 22, intent: "Informational" },
  { k: "deadline reminder app", vol: 1000, kd: 27, intent: "Transactional" },
  { k: "how to stop missing deadlines", vol: 880, kd: 18, intent: "Informational" },
  { k: "trello alternative for small teams", vol: 720, kd: 21, intent: "Commercial" },
  { k: "simple task tracker for 5 people", vol: 260, kd: 9, intent: "Transactional" },
];

// Illustrative assumption: a page in the top 3 gets roughly 1 in 10 searchers.
const TOP3_CTR = 0.1;

const INTENT_STYLE: Record<Intent, { background: string; border: string }> = {
  Informational: { background: "rgba(59, 130, 246, 0.14)", border: "1px solid rgba(59, 130, 246, 0.35)" },
  Commercial: { background: "rgba(168, 85, 247, 0.14)", border: "1px solid rgba(168, 85, 247, 0.35)" },
  Transactional: { background: "rgba(22, 163, 74, 0.14)", border: "1px solid rgba(22, 163, 74, 0.35)" },
  Navigational: { background: "rgba(107, 114, 128, 0.14)", border: "1px solid rgba(107, 114, 128, 0.35)" },
};
const PAGE_TYPE: Record<Intent, string> = {
  Informational: "Guide",
  Commercial: "Comparison page",
  Transactional: "Landing page",
  Navigational: "-",
};

const NODES = [
  { label: "Customer", icon: User },
  { label: "Seed list", icon: Sprout },
  { label: "Keyword tool", icon: Search },
  { label: "Intent filter", icon: Filter },
  { label: "Difficulty cut", icon: Gauge },
  { label: "Shortlist", icon: ListChecks },
  { label: "Clicks", icon: MousePointerClick },
];

const LEARN = [
  { text: "Start from customer problems, not your product name", doneAt: 1 },
  { text: "Turn a few seeds into a long list", doneAt: 3 },
  { text: "Drop keywords with the wrong intent", doneAt: 4 },
  { text: "Match difficulty to what you can rank for", doneAt: 5 },
  { text: "Why many small keywords beat one big one", doneAt: 6 },
];

function dropReason(kw: Kw, step: number, maxKd: number): string | null {
  if (step >= 3 && (kw.intent === "Navigational" || kw.offTopic)) return kw.offTopic ?? "Wrong intent";
  if (step >= 4 && kw.kd > maxKd) return `KD ${kw.kd} is above ${maxKd}`;
  return null;
}

function snapshot(step: number, maxKd: number) {
  const pool = step < 1 ? [] : step === 1 ? KEYWORDS.filter((k) => k.seed) : KEYWORDS;
  const active = pool.filter((k) => !dropReason(k, step, maxKd));
  const vol = active.reduce((s, k) => s + k.vol, 0);
  return {
    pool,
    active,
    vol,
    avgKd: active.length ? Math.round(active.reduce((s, k) => s + k.kd, 0) / active.length) : 0,
    clicks: step >= 6 ? Math.round(vol * TOP3_CTR) : null,
  };
}

export default function KeywordResearchLab() {
  const [step, setStep] = useState(0);
  const [maxKd, setMaxKd] = useState(30);

  const now = snapshot(step, maxKd);
  const before = snapshot(Math.max(0, step - 1), maxKd);
  const droppedNow = before.active.length - now.active.length;
  const head = KEYWORDS[0];

  const STEPS = [
    {
      title: "Start with your customer",
      body: [
        "You run a task app for small teams. Your future customers don't search for your brand name.",
        "They search for their problem. So that's where research starts.",
      ],
      changed: ["Scenario: a small-team task app with a brand-new website"],
    },
    {
      title: "Write seed keywords",
      body: [
        "Seeds are the 5-10 phrases your customers use, pulled from sales calls, support tickets and Reddit threads.",
        "Notice they're short and broad. Broad terms have huge volume, and huge competition.",
      ],
      changed: [`+ ${now.active.length} seed keywords, average difficulty ${now.avgKd}`],
    },
    {
      title: "Expand with a free tool",
      body: [
        "Paste the seeds into Google Keyword Planner or Ahrefs' free generator. Each seed fans out into related phrases.",
        "Longer phrases show up here: lower volume, but far more specific.",
      ],
      changed: [`+ ${now.active.length - before.active.length} related phrases (a real tool returns hundreds)`],
    },
    {
      title: "Filter by intent",
      body: [
        "Search intent is what the searcher actually wants. Someone typing 'trello login' wants Trello, not you.",
        "Volume means nothing if the people searching would never buy.",
      ],
      changed: [`− ${droppedNow} dropped: navigational or the wrong audience`],
    },
    {
      title: "Cut what you can't rank for",
      body: [
        "Keyword difficulty (KD, 0-100) estimates how hard it is to reach page one. A new site should aim low.",
        "Drag the slider and watch the list and the numbers change.",
      ],
      changed: [`− ${droppedNow} dropped above KD ${maxKd}`],
    },
    {
      title: "Build the shortlist",
      body: [
        "Sort what's left by volume, then match each keyword to the page that fits its intent.",
        "Questions get guides. 'Free' and 'app' searches get landing pages.",
      ],
      changed: [`= ${now.active.length} keywords, each with a page to build`],
    },
    {
      title: "Publish and win clicks",
      body: [
        "Specific pages rank faster because fewer sites compete for them. Clicks add up across the whole list.",
        `Compare that with chasing '${head.k}' (KD ${head.kd}), where a new site stays off page one and gets close to nothing.`,
      ],
      changed: [`+ about ${fmt(now.clicks ?? 0)} clicks a month if each page reaches the top 3`],
    },
  ];

  const tiles = [
    { label: "Keywords", value: now.pool.length ? fmt(now.active.length) : "-", changed: now.active.length !== before.active.length },
    { label: "Searches / mo", value: now.vol ? fmt(now.vol) : "-", changed: now.vol !== before.vol },
    { label: "Avg difficulty", value: now.avgKd ? String(now.avgKd) : "-", changed: now.avgKd !== before.avgKd },
    { label: "Est. clicks / mo", value: now.clicks !== null ? fmt(now.clicks) : "-", changed: now.clicks !== before.clicks },
  ];

  return (
    <LabShell
      title="Find keywords for a small-team task app"
      steps={STEPS}
      step={step}
      setStep={setStep}
      tiles={tiles}
      nodes={NODES}
      learn={LEARN}
    >
      {/* Keywords: chips while researching, a table once shortlisted */}
      {step === 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-sm">
          <User size={18} className="shrink-0 text-[var(--accent)]" />
          <span>
            A team lead types into Google:{" "}
            <span className="font-data">&ldquo;how to stop missing deadlines&rdquo;</span>. Not your brand.
            Their problem.
          </span>
        </div>
      )}

      {step >= 1 && step <= 4 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Keywords">
          {now.pool.map((kw) => {
            const reason = dropReason(kw, step, maxKd);
            return (
              <li
                key={kw.k}
                title={reason ?? `${fmt(kw.vol)} searches/mo · KD ${kw.kd} · ${kw.intent}`}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors duration-300"
                style={{
                  ...INTENT_STYLE[kw.intent],
                  opacity: reason ? 0.4 : 1,
                  textDecoration: reason ? "line-through" : "none",
                }}
              >
                <span>{kw.k}</span>
                <span className="font-data text-[0.65rem] text-[var(--muted-foreground)]">KD {kw.kd}</span>
              </li>
            );
          })}
        </ul>
      )}

      {step >= 3 && step <= 4 && (
        <div className="mt-3 flex flex-wrap gap-2 font-data text-[0.65rem] text-[var(--muted-foreground)]">
          {(Object.keys(INTENT_STYLE) as Intent[]).map((i) => (
            <span key={i} className="rounded px-1.5 py-0.5" style={INTENT_STYLE[i]}>{i}</span>
          ))}
          <span>· struck through = dropped (hover for why)</span>
        </div>
      )}

      {step >= 4 && step <= 5 && (
        <LabSlider
          label="Max difficulty you can rank for"
          value={maxKd}
          display={`KD ${maxKd}`}
          min={10}
          max={90}
          step={5}
          onChange={setMaxKd}
          hint="New site? Stay around 30. An established site can go higher."
        />
      )}

      {step >= 5 && (
        <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--card)]">
          <table className="w-full text-xs">
            <thead className="text-left font-data font-medium text-[var(--muted-foreground)]">
              <tr>
                <th className="px-3 py-2 font-medium">Keyword</th>
                <th className="px-3 py-2 font-medium text-right">Searches</th>
                <th className="px-3 py-2 font-medium text-right">KD</th>
                <th className="px-3 py-2 font-medium">Page to build</th>
                {step >= 6 && <th className="px-3 py-2 font-medium text-right">Clicks / mo</th>}
              </tr>
            </thead>
            <tbody>
              {[...now.active].sort((a, b) => b.vol - a.vol).map((kw) => (
                <tr key={kw.k} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2">{kw.k}</td>
                  <td className="px-3 py-2 text-right font-data tabular-nums">{fmt(kw.vol)}</td>
                  <td className="px-3 py-2 text-right font-data tabular-nums">{kw.kd}</td>
                  <td className="px-3 py-2">
                    <span className="rounded px-1.5 py-0.5" style={INTENT_STYLE[kw.intent]}>{PAGE_TYPE[kw.intent]}</span>
                  </td>
                  {step >= 6 && <td className="px-3 py-2 text-right font-data tabular-nums">{fmt(Math.round(kw.vol * TOP3_CTR))}</td>}
                </tr>
              ))}
              {now.active.length === 0 && (
                <tr><td colSpan={5} className="px-3 py-3 text-[var(--muted-foreground)]">Nothing left. Raise the difficulty slider.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {step >= 6 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
          <div className="rounded-lg p-3" style={TONE.good}>
            <div className="font-data text-xs text-[var(--success)]">Your shortlist</div>
            <div className="font-semibold">{now.active.length} pages · ~{fmt(now.clicks ?? 0)} clicks/mo</div>
          </div>
          <div className="rounded-lg p-3" style={TONE.bad}>
            <div className="font-data text-xs text-[var(--danger)]">Chasing the head term</div>
            <div className="font-semibold">1 page · KD {head.kd} · ~0 clicks/mo</div>
          </div>
        </div>
      )}
    </LabShell>
  );
}
