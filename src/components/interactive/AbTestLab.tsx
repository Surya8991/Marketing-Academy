"use client";

import { useState } from "react";
import { BookOpen, Calculator, CircleCheck, Eye, Lightbulb, Rocket, Scale } from "lucide-react";
import LabShell, { LabSlider, TONE, fmt } from "./LabShell";
import { sampleSizePerArm, twoPropP } from "@/lib/lab-math";

/**
 * Step-through A/B test simulation for growth/ab-testing, using the lesson's
 * own example (CTA test, 4.0% control vs 4.4% variant). The day-by-day
 * results are scripted so the peeking trap shows up the same way every time:
 * "significant" on days 2-4, noise in the middle, a real result by the end.
 */

const BASELINE = 0.04;
const PER_DAY = 2000; // visitors per variant per day
const MAX_DAY = 28;
// Cumulative observed conversion rate by day (days 1-20), then the true rates.
const RATE_A = [.038, .0375, .038, .039, .0395, .04, .0405, .0406, .0404, .0402, .0401, .04, .0402, .0401, .04, .04, .0399, .04, .04, .04];
const RATE_B = [.047, .048, .047, .0455, .044, .0428, .0422, .0425, .0428, .043, .0432, .0434, .0436, .0437, .0438, .0439, .044, .044, .044, .044];

function resultsOnDay(day: number) {
  const i = Math.min(day, RATE_A.length) - 1;
  const n = PER_DAY * day;
  const a = Math.round(n * RATE_A[i]);
  const b = Math.round(n * RATE_B[i]);
  return { n, a, b, rateA: a / n, rateB: b / n, p: twoPropP(a, n, b, n), lift: (b / n) / (a / n) - 1 };
}

const pct = (x: number) => `${(x * 100).toFixed(2)}%`;

const DECISIONS = [
  { id: "ship", label: "Ship B" },
  { id: "keep", label: "Keep A" },
  { id: "longer", label: "Run it longer" },
] as const;
type Verdict = "won" | "flat" | "short";

/** The right call depends on what the test showed (the MDE slider can change it). */
function feedback(choice: string, v: Verdict): { ok: boolean; text: string } {
  const right = v === "won" ? "ship" : v === "flat" ? "keep" : "longer";
  const text: Record<Verdict, Record<string, string>> = {
    won: {
      ship: "Right call. Significant on the planned date, a real lift, and no guardrail broke.",
      keep: "Too cautious. The test did its job: planned sample, significant result, guardrails flat.",
      longer: "Not needed. Extending a finished test to feel safer is moving the goalposts.",
    },
    flat: {
      ship: "That's a coin flip. The planned sample showed no significant difference.",
      keep: "Right call. No proven winner, so keep A and log the test as inconclusive.",
      longer: "Moving the end date after seeing the result is peeking by another name. Plan a bigger test instead.",
    },
    short: {
      ship: "Too early. The planned sample isn't in yet, so any 'win' could be noise.",
      keep: "Too early to call either way. The planned sample isn't in yet.",
      longer: "Right call. Keep going until the planned sample is in, then read the result once.",
    },
  };
  return { ok: choice === right, text: text[v][choice] };
}

const NODES = [
  { label: "Hypothesis", icon: Lightbulb },
  { label: "Sample size", icon: Calculator },
  { label: "Launch", icon: Rocket },
  { label: "Peek", icon: Eye },
  { label: "Verdict", icon: Scale },
  { label: "Decide", icon: CircleCheck },
  { label: "Learn", icon: BookOpen },
];

const LEARN = [
  { text: "Write a hypothesis with a reason behind it", doneAt: 1 },
  { text: "Calculate sample size before launch", doneAt: 2 },
  { text: "Why peeking creates false winners", doneAt: 4 },
  { text: "Read a p-value at the planned end date", doneAt: 5 },
  { text: "Check guardrails before you ship", doneAt: 6 },
];

export default function AbTestLab() {
  const [step, setStep] = useState(0);
  const [mde, setMde] = useState(10); // minimum detectable effect, % relative
  const [peekDay, setPeekDay] = useState(3);
  const [decision, setDecision] = useState<string | null>(null);

  const need = sampleSizePerArm(BASELINE, mde / 100);
  const plannedDays = Math.ceil(need / PER_DAY);
  const endDay = Math.min(plannedDays, MAX_DAY);
  const day = step === 3 ? peekDay : step >= 4 ? endDay : 0;
  const r = day ? resultsOnDay(day) : null;
  const sig = r ? r.p < 0.05 : false;
  const reached = r ? r.n >= need : false;
  const end = resultsOnDay(endDay);
  const verdict: Verdict = end.n < need ? "short" : end.p < 0.05 ? "won" : "flat";
  const fb = decision ? feedback(decision, verdict) : null;

  const tiles = [
    { label: "Visitors / variant", value: r ? fmt(r.n) : step >= 1 ? `need ${fmt(need)}` : "-", changed: step === 1 || step === 3 },
    { label: "A: Sign up free", value: r ? pct(r.rateA) : "-", changed: step === 3 },
    { label: "B: Start my trial", value: r ? pct(r.rateB) : "-", changed: step === 3 },
    { label: "p-value", value: r ? r.p.toFixed(3) : "-", changed: step >= 3 && step <= 4 },
  ];

  const STEPS = [
    {
      title: "Write a hypothesis",
      body: [
        "Changing the button from 'Sign up free' to 'Start my free trial' will lift signups, because it names the outcome, not the price.",
        "The control converts at 4.0% today. That's your baseline.",
      ],
      changed: ["+ control A, variant B, one primary metric: signup rate"],
    },
    {
      title: "Calculate sample size",
      body: [
        "Decide the smallest lift worth detecting (MDE) before you launch. Smaller lifts need far more visitors.",
        "This uses the industry standard: 95% confidence and 80% power.",
      ],
      changed: [`= ${fmt(need)} visitors per variant to detect a ${mde}% lift`],
    },
    {
      title: "Launch and split traffic",
      body: [
        `Visitors are randomly split 50/50, ${fmt(PER_DAY)} a day into each version.`,
        "Set the end date now and write it down. You don't move it later.",
      ],
      changed: [plannedDays > MAX_DAY
        ? `! ${plannedDays} days needed. A ${mde}% lift is too small for this much traffic`
        : `+ end date: day ${plannedDays}`],
    },
    {
      title: "Don't peek",
      body: [
        "Drag through the days. Early on, B looks like a big winner and the p-value even drops below 0.05.",
        "Stop here and you'd ship noise. That's how peeking turns 1 in 20 false winners into about 1 in 3.",
      ],
      changed: r ? [`day ${day}: B is ${r.lift >= 0 ? "+" : ""}${(r.lift * 100).toFixed(0)}%, p = ${r.p.toFixed(3)} ${sig ? (reached ? "(significant, planned sample in)" : "(looks significant)") : "(not significant)"}${reached ? "" : ", sample not reached"}`] : [],
    },
    {
      title: "Read the verdict on the end date",
      body: [
        "Now the planned sample is in. A p-value under 0.05 means a gap this big would be unlikely if the two buttons were really the same.",
        "Only now do you read the result.",
      ],
      changed: r ? [
        reached
          ? `= ${sig ? "significant" : "not significant"}: +${(r.lift * 100).toFixed(1)}% lift, p = ${r.p.toFixed(3)}`
          : `! only ${fmt(r.n)} of ${fmt(need)} visitors. Keep running`,
      ] : [],
    },
    {
      title: "Check guardrails, then decide",
      body: [
        "A win on signups that hurts retention or support load is a loss. Check the guardrail metrics.",
        "Then make the call.",
      ],
      changed: [fb ? `${fb.ok ? "✓" : "✗"} ${fb.text}` : "Pick an option below"],
    },
    {
      title: "Write down what you learned",
      body: [
        "Record the hypothesis, the result and why you think it worked, win or lose.",
        "Most tests don't win. The notes are what make the next test smarter.",
      ],
      changed: [verdict === "won" ? "+ learning: naming the outcome beat naming the price" : "+ learning: no proven effect at this sample size"],
    },
  ];

  return (
    <LabShell
      title="Run a signup-button A/B test"
      steps={STEPS}
      step={step}
      setStep={setStep}
      tiles={tiles}
      nodes={NODES}
      learn={LEARN}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          { name: "A · control", cta: "Sign up free", rate: r?.rateA },
          { name: "B · variant", cta: "Start my free trial", rate: r?.rateB },
        ].map((v) => (
          <div key={v.name} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
            <div className="font-data text-xs text-[var(--muted-foreground)]">{v.name}</div>
            <div className="mt-2 inline-block rounded-md bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-foreground)]">
              {v.cta}
            </div>
            {step >= 2 && (
              <div className="mt-2 h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-500"
                  style={{ width: v.rate ? `${(v.rate / 0.06) * 100}%` : "0%" }}
                />
              </div>
            )}
            {v.rate !== undefined && <div className="mt-1 font-data text-xs tabular-nums">{pct(v.rate)} sign up</div>}
          </div>
        ))}
      </div>

      {step === 1 && (
        <LabSlider
          label="Smallest lift worth detecting (MDE)"
          value={mde}
          display={`${mde}% → ${fmt(need)} / variant`}
          min={5}
          max={30}
          step={1}
          onChange={setMde}
          hint="Halve the lift and you need roughly four times the visitors."
        />
      )}

      {step >= 2 && step <= 3 && (
        <div className="mt-4">
          <div className="flex gap-0.5" aria-label={`Test timeline, ${MAX_DAY} days`}>
            {Array.from({ length: MAX_DAY }, (_, i) => i + 1).map((d) => {
              const res = resultsOnDay(d);
              const isSig = step === 3 && d <= peekDay && res.p < 0.05;
              return (
                <span
                  key={d}
                  title={step === 3 && d <= peekDay ? `Day ${d}: p = ${res.p.toFixed(3)}` : `Day ${d}`}
                  className="h-5 flex-1 rounded-sm transition-colors"
                  style={{
                    background: d === plannedDays ? "var(--foreground)" : step === 3 && d <= peekDay ? (isSig ? "rgba(220, 38, 38, 0.55)" : "var(--accent)") : "var(--muted)",
                    opacity: d > plannedDays ? 0.35 : 1,
                  }}
                />
              );
            })}
          </div>
          <div className="mt-1 flex justify-between font-data text-xs text-[var(--muted-foreground)]">
            <span>day 1</span>
            <span>{plannedDays <= MAX_DAY ? `end date: day ${plannedDays} (marked)` : `end date: day ${plannedDays}, off the chart`}</span>
          </div>
          {step === 3 && (
            <>
              <LabSlider
                label="Peek at day"
                value={peekDay}
                display={`day ${peekDay}`}
                min={1}
                max={MAX_DAY}
                step={1}
                onChange={setPeekDay}
              />
              {r && (
                <div className="mt-3 rounded-lg p-3 text-sm" style={sig && !reached ? TONE.bad : sig ? TONE.good : TONE.info}>
                  {sig && !reached && <>Looks like a winner, but only {fmt(r.n)} of {fmt(need)} visitors are in. Red days = false alarms.</>}
                  {sig && reached && <>Significant, and the planned sample is in. This one you can trust.</>}
                  {!sig && <>Not significant (p = {r.p.toFixed(3)}). Same test, different day, different story.</>}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {step === 4 && r && (
        <div className="mt-4 rounded-lg p-3 text-sm" style={reached && sig ? TONE.good : TONE.warn}>
          <div className="font-semibold">
            {reached ? (sig ? `B wins: +${(r.lift * 100).toFixed(1)}% signups` : "No clear winner") : "Not enough data yet"}
          </div>
          <div className="mt-1 text-xs">
            {fmt(r.n)} visitors each · A {pct(r.rateA)} vs B {pct(r.rateB)} · p = {r.p.toFixed(3)}
          </div>
        </div>
      )}

      {step === 5 && (
        <>
          <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <table className="w-full text-xs">
              <thead className="text-left font-data font-medium text-[var(--muted-foreground)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Guardrail</th>
                  <th className="px-3 py-2 font-medium text-right">A</th>
                  <th className="px-3 py-2 font-medium text-right">B</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["30-day retention", "41.8%", "41.6%"],
                  ["Support tickets / 1k signups", "12", "12"],
                  ["Revenue per visitor", "$1.92", "$2.08"],
                ].map(([m, a, b]) => (
                  <tr key={m} className="border-t border-[var(--border)]">
                    <td className="px-3 py-2">{m}</td>
                    <td className="px-3 py-2 text-right font-data">{a}</td>
                    <td className="px-3 py-2 text-right font-data">{b}</td>
                    <td className="px-3 py-2"><span className="rounded px-1.5 py-0.5" style={TONE.good}>within noise / ok</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Your decision">
            {DECISIONS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDecision(d.id)}
                aria-pressed={decision === d.id}
                className="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
                style={decision === d.id && fb ? (fb.ok ? TONE.good : TONE.bad) : { borderColor: "var(--border)", background: "var(--card)" }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 6 && (
        <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 font-data text-xs leading-relaxed">
          <div>Test: CTA &quot;Sign up free&quot; vs &quot;Start my free trial&quot;</div>
          <div>Sample: {fmt(need)} per variant, planned {plannedDays} days</div>
          <div>Result: {r && reached && sig ? `+${(r.lift * 100).toFixed(1)}%, p = ${r.p.toFixed(3)}` : "inconclusive"}</div>
          <div>Guardrails: flat · Decision: {decision ? DECISIONS.find((d) => d.id === decision)!.label : "pending"}</div>
          <div>Next test: {verdict === "won" ? "name the outcome on the pricing page too" : "plan a larger sample or a bolder change"}</div>
        </div>
      )}
    </LabShell>
  );
}
