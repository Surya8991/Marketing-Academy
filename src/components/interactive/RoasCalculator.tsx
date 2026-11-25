"use client";

import { useState } from "react";
import { TrendingUp, AlertTriangle, CheckCircle, Percent } from "lucide-react";

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState(5000);
  const [cpc, setCpc] = useState(2.5);
  const [cvr, setCvr] = useState(2.0); // %
  const [aov, setAov] = useState(120);

  // Derived metrics
  const clicks = cpc > 0 ? Math.floor(adSpend / cpc) : 0;
  const customers = Math.floor(clicks * (cvr / 100));
  const revenue = customers * aov;
  const cac = customers > 0 ? Math.round(adSpend / customers) : 0;
  const roas = adSpend > 0 ? (revenue / adSpend).toFixed(2) : "0.00";
  const profit = revenue - adSpend;

  // Insight calculation: what happens if CVR improves by +1%?
  const higherCvrCustomers = Math.floor(clicks * ((cvr + 1) / 100));
  const higherRevenue = higherCvrCustomers * aov;
  const profitLift = higherRevenue - adSpend - profit;

  const roasNum = parseFloat(roas);
  let statusBadge = {
    label: "Unprofitable / Burning Cash",
    color: "text-[var(--danger)] bg-red-500/10 border-red-500/30",
    icon: AlertTriangle,
  };
  if (roasNum >= 3.0) {
    statusBadge = {
      label: "Highly Profitable / Ready to Scale",
      color: "text-[var(--success)] bg-emerald-500/10 border-emerald-500/30",
      icon: CheckCircle,
    };
  } else if (roasNum >= 1.5) {
    statusBadge = {
      label: "Healthy Margin / Sustainable",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/30",
      icon: TrendingUp,
    };
  } else if (roasNum >= 1.0) {
    statusBadge = {
      label: "Break-even / High Churn Risk",
      color: "text-[var(--warning)] bg-amber-500/10 border-amber-500/30",
      icon: AlertTriangle,
    };
  }

  const StatusIcon = statusBadge.icon;

  return (
    <div className="my-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm text-[var(--foreground)]">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[var(--border)]">
        <div>
          <div className="text-xs font-medium text-[var(--accent)]">
            Interactive Sandbox
          </div>
          <h4 className="text-lg font-semibold font-display">
            Unit Economics &amp; ROAS Simulator
          </h4>
        </div>
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium self-start sm:self-auto ${statusBadge.color}`}
        >
          <StatusIcon size={14} />
          <span>{statusBadge.label}</span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {/* Ad Spend */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[var(--muted-foreground)]">Monthly Ad Spend</span>
            <span className="font-mono font-semibold tabular-nums">
              ${adSpend.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="50000"
            step="500"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full accent-[var(--accent)] cursor-pointer"
          />
        </div>

        {/* CPC */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[var(--muted-foreground)]">Cost Per Click (CPC)</span>
            <span className="font-mono font-semibold tabular-nums">${cpc.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="15.0"
            step="0.1"
            value={cpc}
            onChange={(e) => setCpc(Number(e.target.value))}
            className="w-full accent-[var(--accent)] cursor-pointer"
          />
        </div>

        {/* Conversion Rate */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[var(--muted-foreground)]">Landing Page Conversion (CVR)</span>
            <span className="font-mono font-semibold tabular-nums">{cvr.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="10.0"
            step="0.1"
            value={cvr}
            onChange={(e) => setCvr(Number(e.target.value))}
            className="w-full accent-[var(--accent)] cursor-pointer"
          />
        </div>

        {/* AOV */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[var(--muted-foreground)]">Average Order Value (AOV)</span>
            <span className="font-mono font-semibold tabular-nums">${aov}</span>
          </div>
          <input
            type="range"
            min="20"
            max="1000"
            step="10"
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className="w-full accent-[var(--accent)] cursor-pointer"
          />
        </div>
      </div>

      {/* Computed Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30">
          <div className="text-xs text-[var(--muted-foreground)]">ROAS</div>
          <div className="text-xl sm:text-2xl font-semibold font-mono text-[var(--accent)]">
            {roas}x
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">Revenue / Spend</div>
        </div>

        <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30">
          <div className="text-xs text-[var(--muted-foreground)]">Est. CAC</div>
          <div className="text-xl sm:text-2xl font-semibold font-mono">
            ${cac.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">Cost per Customer</div>
        </div>

        <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30">
          <div className="text-xs text-[var(--muted-foreground)]">Gross Revenue</div>
          <div className="text-xl sm:text-2xl font-semibold font-mono">
            ${revenue.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">
            {customers} customers
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30">
          <div className="text-xs text-[var(--muted-foreground)]">Net Ad Margin</div>
          <div
            className={`text-xl sm:text-2xl font-semibold font-mono ${
              profit >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]"
            }`}
          >
            {profit >= 0 ? `+$${profit.toLocaleString()}` : `-$${Math.abs(profit).toLocaleString()}`}
          </div>
          <div className="text-xs text-[var(--muted-foreground)]">Revenue - Spend</div>
        </div>
      </div>

      {/* Tactile Insight / Sensitivity Takeaway */}
      <div className="p-3.5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs flex items-center gap-3">
        <div className="shrink-0 font-semibold text-[var(--accent)] flex items-center gap-1">
          <Percent size={14} /> What this means:
        </div>
        <div className="text-[var(--muted-foreground)] leading-relaxed">
          Increasing landing page conversion from <strong>{cvr.toFixed(1)}%</strong> to{" "}
          <strong>{(cvr + 1).toFixed(1)}%</strong> yields an additional{" "}
          <strong className="text-[var(--foreground)]">+${profitLift.toLocaleString()}</strong> in net profit with zero added ad budget.
        </div>
      </div>
    </div>
  );
}
