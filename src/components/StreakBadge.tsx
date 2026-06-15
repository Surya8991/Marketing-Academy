"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getEngagement, ENGAGEMENT_EVENT, getCurrentLevel } from "@/lib/engagement";
import type { EngagementState } from "@/lib/engagement";

export const COMMAND_PALETTE_EVENT = "ma_cmd_palette";

export default function StreakBadge() {
  const [state, setState] = useState<EngagementState | null>(null);

  useEffect(() => {
    setState(getEngagement());
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ state: EngagementState }>;
      setState(ce.detail.state);
    };
    window.addEventListener(ENGAGEMENT_EVENT, handler);
    return () => window.removeEventListener(ENGAGEMENT_EVENT, handler);
  }, []);

  if (!state) return null;

  const { xp, streak } = state;
  const { level } = getCurrentLevel(xp);

  if (xp === 0 && streak === 0) return null;

  return (
    <Link
      href="/achievements"
      className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-[var(--muted)] transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      title="Your achievements"
    >
      {streak >= 1 && (
        <span className="text-sm font-semibold flex items-center gap-0.5">
          🔥<span className="text-xs">{streak}</span>
        </span>
      )}
      <span className="text-xs font-medium">
        Lv{level}
      </span>
      <span className="text-xs text-[var(--muted-foreground)]">
        {xp} XP
      </span>
    </Link>
  );
}
