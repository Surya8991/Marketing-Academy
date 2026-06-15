"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getEngagement, getCurrentLevel, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { ACHIEVEMENTS } from "@/lib/achievements";
import type { EngagementState } from "@/lib/engagement";

export default function AchievementsClient() {
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

  const { xp, streak, longestStreak, achievements } = state;
  const { level, title, nextAt } = getCurrentLevel(xp);
  const pct = nextAt === Infinity ? 100 : Math.min(100, Math.round((xp / nextAt) * 100));

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "0.25rem",
          }}
        >
          Achievements
        </h1>
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
          Your learning progress, streak, and unlocked badges.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        {[
          { label: "Total XP", value: `${xp} XP` },
          { label: "Level", value: `${level} — ${title}` },
          { label: "Current Streak", value: `${streak} day${streak !== 1 ? "s" : ""}` },
          { label: "Longest Streak", value: `${longestStreak} day${longestStreak !== 1 ? "s" : ""}` },
          { label: "Unlocked", value: `${achievements.length} / ${ACHIEVEMENTS.length}` },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              padding: "1rem",
              borderRadius: "0.75rem",
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
              {s.label}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--foreground)" }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* XP Progress bar */}
      {nextAt !== Infinity && (
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
              Progress to Level {level + 1}
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)" }}>
              {xp} / {nextAt} XP
            </span>
          </div>
          <div
            style={{
              height: "8px",
              borderRadius: "99px",
              background: "var(--muted)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: "99px",
                background: "var(--accent)",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* Achievements grid */}
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--foreground)",
          marginBottom: "1rem",
        }}
      >
        Badges
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "0.75rem",
          marginBottom: "2.5rem",
        }}
      >
        {ACHIEVEMENTS.map((a) => {
          const earned = achievements.includes(a.id);
          return (
            <div
              key={a.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                background: earned ? "rgba(99,102,241,0.08)" : "var(--muted)",
                border: `1px solid ${earned ? "rgba(99,102,241,0.3)" : "var(--border)"}`,
                opacity: earned ? 1 : 0.55,
              }}
            >
              <span style={{ fontSize: "1.75rem", lineHeight: 1, filter: earned ? "none" : "grayscale(100%)" }}>
                {a.emoji}
              </span>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.15rem" }}>
                  {a.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                  {a.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/learn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.625rem 1.25rem",
          borderRadius: "0.5rem",
          background: "var(--accent)",
          color: "var(--accent-foreground)",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Keep Learning →
      </Link>
    </main>
  );
}
