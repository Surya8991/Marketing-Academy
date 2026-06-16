"use client";

/**
 * AchievementToast — fixed-position toast stack for newly unlocked achievements.
 *
 * Listens to ENGAGEMENT_EVENT on window. When the event carries a non-empty
 * `unlocked` array (achievement IDs), it renders a toast per achievement that
 * auto-dismisses after 4 seconds.
 *
 * Key design decisions:
 *   - crypto.randomUUID() is used as the toast ID (not Date.now()) because
 *     multiple achievements can unlock in the same tick. Date.now() would produce
 *     duplicate keys and React would collapse the toasts into one.
 *   - Timer IDs are tracked in a ref (not state) to avoid triggering re-renders.
 *   - The cleanup function in useEffect clears all pending timers on unmount,
 *     preventing "Can't perform a React state update on an unmounted component".
 *   - toastIds is captured as a Set per batch so the timeout correctly removes
 *     only THIS batch and not any toasts added after the timer was set.
 *
 * This component is rendered once in the root layout — never instantiate it twice.
 */

import { useEffect, useRef, useState } from "react";
import { ENGAGEMENT_EVENT } from "@/lib/engagement";
import { ACHIEVEMENTS } from "@/lib/achievements";
import type { EngagementState } from "@/lib/engagement";

type ToastItem = { id: string; label: string; emoji: string; ts: number };

export default function AchievementToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  // ref instead of state so timer IDs don't cause re-renders
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ state: EngagementState; unlocked: string[] }>;
      const { unlocked } = ce.detail;
      if (!unlocked || unlocked.length === 0) return;

      // Build toast items — crypto.randomUUID() prevents duplicate keys on same-tick unlocks
      const newToasts: ToastItem[] = unlocked.map((achievementId) => {
        const a = ACHIEVEMENTS.find((x) => x.id === achievementId);
        return { id: crypto.randomUUID(), label: a?.label ?? achievementId, emoji: a?.emoji ?? "🏅", ts: Date.now() };
      });

      setToasts((prev) => [...prev, ...newToasts]);

      // Capture the IDs of THIS batch so the timeout closure removes only these toasts
      const toastIds = new Set(newToasts.map((t) => t.id));
      const timerId = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => !toastIds.has(t.id)));
        timers.current = timers.current.filter((t) => t !== timerId);
      }, 4000);
      timers.current.push(timerId);
    };

    window.addEventListener(ENGAGEMENT_EVENT, handler);
    return () => {
      window.removeEventListener(ENGAGEMENT_EVENT, handler);
      // Clear all pending timers to prevent state updates on an unmounted component
      timers.current.forEach(clearTimeout);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        pointerEvents: "none", // toasts don't intercept mouse events
      }}
    >
      {toasts.map((t) => (
        <div
          key={`${t.id}-${t.ts}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            animation: "ma-toast-in 0.3s ease",
          }}
        >
          <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{t.emoji}</span>
          <div>
            <div style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Achievement Unlocked
            </div>
            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)" }}>
              {t.label}
            </div>
          </div>
        </div>
      ))}
      {/* Inline keyframes — avoids adding a global CSS dependency for a single animation */}
      <style>{`
        @keyframes ma-toast-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
