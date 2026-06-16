"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ONBOARDED_KEY as STORAGE_KEY } from "@/lib/events";

const GOALS = [
  { emoji: "🚀", label: "Grow a B2B startup", href: "/tracks/b2b-marketer" },
  { emoji: "🛒", label: "Scale an e-commerce store", href: "/tracks/ecommerce-growth" },
  { emoji: "👤", label: "Market my own product/service", href: "/tracks/solo-founder" },
  { emoji: "🤖", label: "Use AI in my marketing", href: "/tracks/ai-first-marketer" },
  { emoji: "✍️", label: "Build a content audience", href: "/tracks/content-creator" },
  { emoji: "📱", label: "Master social media", href: "/tracks/social-media-manager" },
];

export default function OnboardingModal() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!mounted || !visible) return null;

  function handleGoal(href: string) {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
    router.push(href);
  }

  function handleSkip() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.6)",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "var(--card)",
          color: "var(--foreground)",
          maxWidth: 480,
          width: "100%",
          borderRadius: "1rem",
          padding: "2rem",
          border: "1px solid var(--border)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            margin: "0 0 0.375rem",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          What&apos;s your goal?
        </h2>
        <p
          style={{
            margin: "0 0 1.5rem",
            fontSize: "0.95rem",
            color: "var(--muted-foreground)",
          }}
        >
          We&apos;ll suggest the best starting path.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          {GOALS.map(({ emoji, label, href }) => (
            <button
              key={href}
              onClick={() => handleGoal(href)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.375rem",
                padding: "0.875rem 1rem",
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "0.625rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 500,
                textAlign: "left",
                lineHeight: 1.3,
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--muted)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--background)";
              }}
            >
              <span style={{ fontSize: "1.375rem", lineHeight: 1 }}>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
          <button
            onClick={handleSkip}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.85rem",
              color: "var(--muted-foreground)",
              textDecoration: "underline",
              padding: "0.25rem 0.5rem",
            }}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
