"use client";

import React from "react";

const PROOF_POINTS = [
  { label: "Free to read", desc: "No email gate or paywall" },
  { label: "Sourced", desc: "Stats come with citations" },
  { label: "Quiz after every lesson", desc: "So you know it stuck" },
  { label: "Hindi, Tamil & Telugu", desc: "Video picks in every lesson" },
];

export default function ProofStrip() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--paper)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            {PROOF_POINTS.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 transition-transform hover:translate-x-1"
              >
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
