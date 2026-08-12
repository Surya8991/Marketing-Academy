/**
 * LiveTrackPanel: the optional real-account/real-money extension of a
 * "simulation"-mode project (src/lib/projects/types.ts LiveTrack,
 * PROJECTS_PLAN.md 2.3b / 9.1).
 *
 * The simulation above this panel (SimulationRunner) is a COMPLETE, gradeable
 * project on its own at zero spend. This panel is strictly an upgrade path
 * for a learner who wants to run the same decisions against a real account
 * instead of a scripted one, never a requirement to finish the project (the
 * free-tool guarantee in PROJECTS_PLAN.md 9.1). Framed and labeled as such.
 *
 * No local state needed, native <details>/<summary> handles the collapse, so
 * this stays a plain (server-renderable) component, no "use client" directive.
 */

import { Rocket, Wallet, Calendar, ListChecks } from "lucide-react";
import type { LiveTrack } from "@/lib/projects/types";

type Props = {
  liveTrack: LiveTrack;
};

export default function LiveTrackPanel({ liveTrack }: Props) {
  return (
    <details className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer text-sm font-semibold select-none list-none [&::-webkit-details-marker]:hidden text-[var(--foreground)]">
        <Rocket size={16} className="text-[var(--muted-foreground)] shrink-0" />
        Run this for real instead
        <span
          className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(59,130,246,0.12)",
            color: "var(--foreground)",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
        >
          Optional
        </span>
      </summary>

      <div className="px-4 pb-4 flex flex-col gap-4 border-t border-[var(--border)] pt-4">
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
          The simulation above is a complete project on its own, free, no account or spend
          required. This is only for learners who want to test the same decisions against a
          real live account.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Wallet size={14} className="text-[var(--muted-foreground)]" />
            <span className="text-[var(--muted-foreground)]">Minimum spend:</span>
            <span className="font-semibold text-[var(--foreground)]">{liveTrack.minSpend}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={14} className="text-[var(--muted-foreground)]" />
            <span className="text-[var(--muted-foreground)]">Minimum duration:</span>
            <span className="font-semibold text-[var(--foreground)]">
              {liveTrack.minDurationDays} day{liveTrack.minDurationDays === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)]">
            <ListChecks size={13} />
            Setup steps
          </span>
          <ol className="flex flex-col gap-1.5 pl-5 list-decimal text-sm text-[var(--foreground)]">
            {liveTrack.setupSteps.map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-lg bg-[var(--muted)] border border-[var(--border)] px-3 py-2.5">
          <span className="text-xs font-semibold text-[var(--foreground)]">Check-in schedule: </span>
          <span className="text-xs text-[var(--muted-foreground)]">{liveTrack.checkInSchedule}</span>
        </div>
      </div>
    </details>
  );
}
