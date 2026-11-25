"use client";

import React from "react";

const PROOF_POINTS = [
  { code: "01", label: "Free to read", desc: "No email gate or paywall" },
  { code: "02", label: "Sourced", desc: "Stats come with citations" },
  { code: "03", label: "Quiz after every lesson", desc: "Check what stuck" },
  { code: "04", label: "Hindi, Tamil & Telugu", desc: "Video picks in every lesson" },
];

export default function ProofStrip() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--paper)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {PROOF_POINTS.map((item) => (
            <div key={item.code} className="flex items-start gap-3">
              <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums pt-0.5">
                {item.code}
              </span>
              <div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  {item.label}
                </div>
                <div className="text-xs text-[var(--muted-foreground)] font-ui-sans hidden sm:block mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
