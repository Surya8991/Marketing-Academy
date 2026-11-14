"use client";

import React from "react";

const PROOF_POINTS = [
  { num: "01", label: "Open access", desc: "No email gate or paywall" },
  { num: "02", label: "Research-led", desc: "Real citations & verified data" },
  { num: "03", label: "Practical by design", desc: "Frameworks you can apply today" },
  { num: "04", label: "Built for everyone", desc: "Multilingual Hindi, Tamil & Telugu" },
];

export default function ProofStrip() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--paper)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] shrink-0">
            A better way to learn marketing
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            {PROOF_POINTS.map((item) => (
              <div
                key={item.num}
                className="group flex items-center gap-3 transition-transform hover:translate-x-1"
              >
                <b className="font-serif text-2xl font-normal text-[var(--accent)] select-none">
                  {item.num}
                </b>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[var(--muted-foreground)] font-ui-sans hidden sm:block">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
