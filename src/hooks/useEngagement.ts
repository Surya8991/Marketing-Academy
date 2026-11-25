"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getEngagement,
  addXP,
  getCurrentLevel,
  type EngagementState,
  type XPAction,
} from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";
import { ENGAGEMENT_EVENT, PROGRESS_CHANGED_EVENT } from "@/lib/events";

export function useEngagement() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<EngagementState>(() => getEngagement());

  useEffect(() => {
    setMounted(true);
    setState(getEngagement());

    const handleEngagementUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ state?: EngagementState }>;
      if (customEvent.detail?.state) {
        setState(customEvent.detail.state);
      } else {
        setState(getEngagement());
      }
    };

    const handleProgressChange = () => {
      setState(getEngagement());
    };

    window.addEventListener(ENGAGEMENT_EVENT, handleEngagementUpdate);
    window.addEventListener(PROGRESS_CHANGED_EVENT, handleProgressChange);

    return () => {
      window.removeEventListener(ENGAGEMENT_EVENT, handleEngagementUpdate);
      window.removeEventListener(PROGRESS_CHANGED_EVENT, handleProgressChange);
    };
  }, []);

  const award = useCallback(
    (action: XPAction, id: string) => {
      const newState = addXP(action, id);
      const unlocked = checkAchievements(newState);
      window.dispatchEvent(
        new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } })
      );
      window.dispatchEvent(
        new CustomEvent(PROGRESS_CHANGED_EVENT, { detail: { key: "ma_engagement" } })
      );
      setState(newState);
      return { newState, unlocked };
    },
    []
  );

  const levelInfo = getCurrentLevel(state.xp);

  return {
    mounted,
    state,
    xp: state.xp,
    streak: state.streak,
    longestStreak: state.longestStreak,
    streakFreezes: state.streakFreezes ?? 1,
    lastActiveDay: state.lastActiveDay,
    achievements: state.achievements,
    levelInfo,
    award,
  };
}
