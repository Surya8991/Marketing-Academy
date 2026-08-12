"use client";

import { useEffect, useState } from "react";
import { STORAGE_WRITE_FAILED } from "@/lib/events";

/**
 * Stage 2.4: Listens for STORAGE_WRITE_FAILED events and shows a
 * non-intrusive warning banner. Without this, the user sees confetti and
 * a "Completed!" badge but nothing persists — they reload and progress is gone.
 *
 * Renders once per session (dismissed after first show + auto-hides after 8s).
 * Does NOT import any large data modules (Rule 41).
 */
export default function StorageWarning() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    function onFail() {
      setVisible(true);
    }
    window.addEventListener(STORAGE_WRITE_FAILED, onFail);
    return () => window.removeEventListener(STORAGE_WRITE_FAILED, onFail);
  }, [dismissed]);

  // Auto-hide after 8 seconds
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      setDismissed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        maxWidth: "24rem",
        width: "calc(100% - 2rem)",
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
        background: "rgba(220, 38, 38, 0.12)",
        border: "1px solid rgba(220, 38, 38, 0.35)",
        color: "var(--foreground)",
        fontSize: "0.875rem",
        lineHeight: 1.4,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <span style={{ flexShrink: 0, fontSize: "1.1rem" }}>⚠️</span>
      <span style={{ flex: 1 }}>
        Your progress couldn&apos;t be saved — your browser may be blocking site
        data. Check your privacy settings.
      </span>
      <button
        onClick={() => { setVisible(false); setDismissed(true); }}
        aria-label="Dismiss"
        style={{
          background: "none",
          border: "none",
          color: "var(--muted-foreground)",
          cursor: "pointer",
          padding: "0.25rem",
          fontSize: "1rem",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}
