"use client";

import { useState } from "react";
import { Building2, CalendarRange, Hourglass, Percent, Scale, SlidersHorizontal, Wallet } from "lucide-react";
import LabShell, { LabSlider, TONE, fmt } from "./LabShell";

/**
 * Step-through LTV:CAC simulation for analytics/ltv-cac, built on the
 * lesson's own example: $50/month, 24-month lifespan, $100k spend for 200
 * customers ($500 CAC), 70% gross margin. Numbers are illustrative.
 */

const COSTS = [
  { id: "ads", label: "Ad spend", amount: 60000 },
  { id: "team", label: "Marketing & sales salaries", amount: 25000 },
  { id: "tools", label: "Tools & agency fees", amount: 15000 },
];

const NODES = [
  { label: "Business", icon: Building2 },
  { label: "LTV", icon: CalendarRange },
  { label: "CAC", icon: Wallet },
  { label: "Ratio", icon: Scale },
  { label: "Margin", icon: Percent },
  { label: "Levers", icon: SlidersHorizontal },
  { label: "Payback", icon: Hourglass },
];

const LEARN = [
  { text: "Calculate lifetime value", doneAt: 2 },
  { text: "Count every cost in CAC, not just ads", doneAt: 3 },
  { text: "Read the LTV:CAC ratio against 3:1", doneAt: 4 },
  { text: "Use gross profit, not revenue", doneAt: 5 },
  { text: "Check how long it takes to earn CAC back", doneAt: 6 },
];

function zone(ratio: number) {
  if (ratio < 1) return { label: "Losing money on every customer", tone: TONE.bad };
  if (ratio < 3) return { label: "Profitable, but thin after overhead", tone: TONE.warn };
  if (ratio <= 5) return { label: "Healthy and scalable", tone: TONE.good };
  return { label: "Possibly under-investing in growth", tone: TONE.info };
}

export default function LtvCacLab() {
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(50);
  const [months, setMonths] = useState(24);
  const [margin, setMargin] = useState(70);
  const [customers, setCustomers] = useState(200);
  const [counted, setCounted] = useState<Set<string>>(() => new Set(COSTS.map((c) => c.id)));

  const spend = COSTS.filter((c) => counted.has(c.id)).reduce((s, c) => s + c.amount, 0);
  const trueSpend = COSTS.reduce((s, c) => s + c.amount, 0);
  const undercounted = spend < trueSpend;
  const cac = spend / customers;
  const gross = step >= 4; // from the margin step on, LTV is gross profit
  const ltv = price * months * (gross ? margin / 100 : 1);
  const ratio = ltv / cac;
  const payback = cac / (price * (margin / 100));
  const z = zone(ratio);

  const tiles = [
    { label: gross ? "LTV (gross profit)" : "LTV (revenue)", value: step >= 1 ? `$${fmt(Math.round(ltv))}` : "-", changed: step === 1 || step === 4 },
    { label: "CAC", value: step >= 2 ? `$${fmt(Math.round(cac))}` : "-", changed: step === 2 },
    { label: "LTV : CAC", value: step >= 3 ? `${ratio.toFixed(1)} : 1` : "-", changed: step === 3 || step === 4 || step === 5 },
    { label: "Payback", value: step >= 6 ? `${payback.toFixed(1)} mo` : "-", changed: step === 6 },
  ];

  const STEPS = [
    {
      title: "Meet the business",
      body: [
        `A project management app charges $${price} a month. It spent $${fmt(trueSpend)} last quarter and won ${customers} customers.`,
        "Is that spending smart, or burning cash? Two numbers answer it.",
      ],
      changed: ["+ a subscription business with one plan"],
    },
    {
      title: "Estimate lifetime value",
      body: [
        "LTV is what one customer pays you before they leave: monthly price × months they stay.",
        "Lifespan comes from your churn data. Without it, LTV is a guess.",
      ],
      changed: [`= $${price} × ${months} months = $${fmt(price * months)}`],
    },
    {
      title: "Add up acquisition cost",
      body: [
        "CAC is total marketing and sales spend ÷ new customers. All of it, not just ads.",
        "Untick a cost to see how easy it is to fool yourself.",
      ],
      changed: [undercounted
        ? `! CAC looks like $${fmt(Math.round(cac))}, but the true CAC is $${fmt(Math.round(trueSpend / customers))}`
        : `= $${fmt(spend)} ÷ ${customers} customers = $${fmt(Math.round(cac))}`],
    },
    {
      title: "Divide: the LTV:CAC ratio",
      body: [
        `For every $1 spent winning a customer, you get $${ratio.toFixed(2)} back. 3:1 is the common benchmark for a healthy business.`,
        "So is this good?",
      ],
      changed: [`= ${ratio.toFixed(1)} : 1 · ${z.label.toLowerCase()}`],
    },
    {
      title: "Use gross profit, not revenue",
      body: [
        "Revenue isn't yours to keep. Hosting, support and payment fees come out first.",
        "Gross margin is the share left over. Multiply LTV by it before comparing with CAC.",
      ],
      changed: [`− LTV drops to $${fmt(Math.round(ltv))} at ${margin}% margin, ratio ${ratio.toFixed(1)} : 1`],
    },
    {
      title: "Pull the levers",
      body: [
        "Can you get to 3:1? Raise the price, keep customers longer, or win more customers for the same spend.",
        "Retention is usually the fastest lever.",
      ],
      changed: [ratio >= 3 ? `✓ ${ratio.toFixed(1)} : 1, you hit the benchmark` : `${ratio.toFixed(1)} : 1, keep going`],
    },
    {
      title: "Check the payback period",
      body: [
        "Payback = CAC ÷ monthly gross profit per customer. It's how long your cash is tied up.",
        "Under 12 months is healthy for SaaS. Over 24 strains cash flow.",
      ],
      changed: [`= $${fmt(Math.round(cac))} ÷ $${(price * margin / 100).toFixed(2)} a month = ${payback.toFixed(1)} months`],
    },
  ];

  // Payback chart: cumulative gross profit per month vs CAC.
  const chartMonths = Math.max(months, Math.ceil(payback) + 1);

  return (
    <LabShell
      title="Check if a SaaS business model works"
      steps={STEPS}
      step={step}
      setStep={setStep}
      tiles={tiles}
      nodes={NODES}
      learn={LEARN}
    >
      {step === 0 && (
        <div className="grid gap-2 sm:grid-cols-3 text-sm">
          {[
            ["Price", `$${price} / month`],
            ["Spent last quarter", `$${fmt(trueSpend)}`],
            ["New customers", String(customers)],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
              <div className="font-data text-xs text-[var(--muted-foreground)]">{k}</div>
              <div className="font-semibold">{v}</div>
            </div>
          ))}
        </div>
      )}

      {step === 1 && (
        <div>
          <div className="flex flex-wrap gap-0.5" aria-label={`${months} monthly payments of $${price}`}>
            {Array.from({ length: months }, (_, i) => (
              <span key={i} className="h-6 w-4 rounded-sm bg-[var(--accent)]" style={{ opacity: 0.4 + (0.6 * (i + 1)) / months }} />
            ))}
          </div>
          <div className="mt-1 font-data text-xs">{months} payments × ${price} = ${fmt(price * months)}</div>
          <LabSlider label="Average customer lifespan" value={months} display={`${months} months`} min={6} max={48} step={1} onChange={setMonths} />
        </div>
      )}

      {step === 2 && (
        <div>
          <ul className="flex flex-col gap-1.5">
            {COSTS.map((c) => (
              <li key={c.id}>
                <label className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm">
                  <input
                    type="checkbox"
                    checked={counted.has(c.id)}
                    onChange={() =>
                      setCounted((s) => {
                        const n = new Set(s);
                        if (n.has(c.id)) n.delete(c.id);
                        else n.add(c.id);
                        return n;
                      })
                    }
                    style={{ accentColor: "var(--accent)" }}
                  />
                  <span className="flex-1">{c.label}</span>
                  <span className="font-data tabular-nums">${fmt(c.amount)}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-2 rounded-lg p-3 text-sm" style={undercounted ? TONE.bad : TONE.good}>
            ${fmt(spend)} ÷ {customers} customers = <strong>${fmt(Math.round(cac))} CAC</strong>
            {undercounted && <> · undercounted, the real figure is ${fmt(Math.round(trueSpend / customers))}</>}
          </div>
        </div>
      )}

      {step >= 3 && step <= 5 && (
        <div>
          <div className="relative h-8 rounded-md overflow-hidden flex text-[0.6rem] font-data" aria-hidden>
            <div className="flex-[1] flex items-center justify-center" style={TONE.bad}>&lt;1</div>
            <div className="flex-[2] flex items-center justify-center" style={TONE.warn}>1-3</div>
            <div className="flex-[2] flex items-center justify-center" style={TONE.good}>3-5</div>
            <div className="flex-[1] flex items-center justify-center" style={TONE.info}>5+</div>
            <div
              className="absolute top-0 bottom-0 w-1 rounded bg-[var(--foreground)] transition-colors duration-500"
              style={{ left: `calc(${(Math.min(ratio, 6) / 6) * 100}% - 2px)` }}
            />
          </div>
          <div className="mt-2 rounded-lg p-3 text-sm" style={z.tone}>
            <strong>{ratio.toFixed(1)} : 1</strong> · {z.label}
            {undercounted && <> · (CAC undercounted in step 3)</>}
          </div>
          {step === 4 && (
            <LabSlider label="Gross margin" value={margin} display={`${margin}%`} min={20} max={95} step={5} onChange={setMargin}
              hint="Typical software keeps 70-80%. Physical products often keep far less." />
          )}
          {step === 5 && (
            <>
              <LabSlider label="Price" value={price} display={`$${price} / mo`} min={20} max={120} step={5} onChange={setPrice} />
              <LabSlider label="Customer lifespan (retention)" value={months} display={`${months} months`} min={6} max={48} step={1} onChange={setMonths} />
              <LabSlider label="New customers for the same spend" value={customers} display={String(customers)} min={100} max={400} step={10} onChange={setCustomers}
                hint="More customers per dollar: referrals, better targeting, a higher-converting landing page." />
            </>
          )}
        </div>
      )}

      {step === 6 && (
        <div>
          <div className="flex items-end gap-0.5 h-24" aria-label={`Payback after ${payback.toFixed(1)} months`}>
            {Array.from({ length: chartMonths }, (_, i) => {
              const cum = (i + 1) * price * (margin / 100);
              return (
                <span
                  key={i}
                  title={`Month ${i + 1}: $${fmt(Math.round(cum))}`}
                  className="flex-1 rounded-t-sm transition-colors"
                  style={{
                    height: `${Math.min(100, (cum / (cac * 2)) * 100)}%`,
                    background: cum >= cac ? "rgba(22, 163, 74, 0.7)" : "rgba(220, 38, 38, 0.5)",
                  }}
                />
              );
            })}
          </div>
          <div className="mt-1 flex justify-between font-data text-[0.65rem] text-[var(--muted-foreground)]">
            <span>month 1</span>
            <span>red = still paying back the ${fmt(Math.round(cac))} CAC</span>
            <span>month {chartMonths}</span>
          </div>
          <div className="mt-2 rounded-lg p-3 text-sm" style={payback <= 12 ? TONE.good : payback <= 18 ? TONE.warn : TONE.bad}>
            <strong>{payback.toFixed(1)} months</strong> to earn back CAC ·{" "}
            {payback <= 12 ? "healthy" : payback <= 18 ? "acceptable with strong retention" : payback <= 24 ? "slow" : "a cash-flow strain"}
            {payback > months && <> · customers leave (month {months}) before paying it back</>}
          </div>
        </div>
      )}
    </LabShell>
  );
}
