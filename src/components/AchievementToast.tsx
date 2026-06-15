"use client";

import { useEffect, useRef, useState } from "react";
import { ENGAGEMENT_EVENT } from "@/lib/engagement";
import { ACHIEVEMENTS } from "@/lib/achievements";
import type { EngagementState } from "@/lib/engagement";

type ToastItem = { id: string; label: string; emoji: string; ts: number };

export default function AchievementToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ state: EngagementState; unlocked: string[] }>;
      const { unlocked } = ce.detail;
      if (!unlocked || unlocked.length === 0) return;
      const now = Date.now();
      const newToasts: ToastItem[] = unlocked.map((id) => {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        return { id, label: a?.label ?? id, emoji: a?.emoji ?? "🏅", ts: now };
      });
      setToasts((prev) => [...prev, ...newToasts]);
      const id = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => !newToasts.some((n) => n.ts === t.ts)));
      }, 4000);
      timers.current.push(id);
    };
    window.addEventListener(ENGAGEMENT_EVENT, handler);
    return () => {
      window.removeEventListener(ENGAGEMENT_EVENT, handler);
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
        pointerEvents: "none",
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
      <style>{`
        @keyframes ma-toast-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
