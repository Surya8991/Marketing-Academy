"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKMARK_KEY } from "@/lib/bookmarks";
import { COMPLETED_KEY } from "@/lib/progress";
import { ENGAGEMENT_KEY, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { ONBOARDED_KEY } from "@/lib/events";
import { QUIZ_PASS_KEY_PREFIX } from "@/lib/quizzes";
import { NOTE_KEY_PREFIX } from "@/lib/notes";

const EXPORT_KEYS = [COMPLETED_KEY, BOOKMARK_KEY, ENGAGEMENT_KEY, ONBOARDED_KEY];
const ALLOWED_KEY_PREFIXES = [QUIZ_PASS_KEY_PREFIX, NOTE_KEY_PREFIX];

function collectAllKeys(): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const key of EXPORT_KEYS) {
    const raw = localStorage.getItem(key);
    data[key] = raw ? JSON.parse(raw) : null;
  }
  // Snapshot all keys first to avoid length-changes mid-iteration
  const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter(Boolean) as string[];
  for (const key of allKeys) {
    if (ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p))) {
      data[key] = localStorage.getItem(key);
    }
  }
  return data;
}

function isAllowedKey(key: string): boolean {
  if (EXPORT_KEYS.includes(key as typeof EXPORT_KEYS[number])) return true;
  return ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p));
}

function restoreAllKeys(data: Record<string, unknown>) {
  for (const [key, value] of Object.entries(data)) {
    if (!isAllowedKey(key)) continue;
    if (value === null || value === undefined) continue;
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

type Status = { type: "success" | "error"; message: string } | null;

function StatusBanner({ status }: { status: Status }) {
  if (!status) return null;
  const isError = status.type === "error";
  return (
    <p
      style={{
        marginTop: "0.5rem",
        fontSize: "0.875rem",
        color: isError ? "rgba(220,38,38,0.9)" : "rgba(22,163,74,0.9)",
        background: isError ? "rgba(220,38,38,0.08)" : "rgba(22,163,74,0.08)",
        border: `1px solid ${isError ? "rgba(220,38,38,0.25)" : "rgba(22,163,74,0.25)"}`,
        borderRadius: "0.375rem",
        padding: "0.5rem 0.75rem",
      }}
    >
      {status.message}
    </p>
  );
}

const cardStyle: React.CSSProperties = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  padding: "1.5rem",
  marginBottom: "1.25rem",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "var(--foreground)",
  marginBottom: "0.375rem",
};

const descStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "var(--muted-foreground)",
  marginBottom: "1rem",
};

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.5rem 1.1rem",
  borderRadius: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 500,
  cursor: "pointer",
  border: "none",
  transition: "opacity 0.15s",
};

const primaryBtn: React.CSSProperties = {
  ...btnBase,
  background: "var(--accent)",
  color: "var(--accent-foreground)",
};

const dangerBtn: React.CSSProperties = {
  ...btnBase,
  background: "rgba(220,38,38,0.12)",
  color: "rgba(220,38,38,0.95)",
  border: "1px solid rgba(220,38,38,0.3)",
};

export default function SettingsClient() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<Status>(null);
  const [exportStatus, setExportStatus] = useState<Status>(null);
  const [resetStatus, setResetStatus] = useState<Status>(null);
  const [syncStatus, setSyncStatus] = useState<Status>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncEnabled, setSyncEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/sync/status")
      .then((r) => r.json())
      .then((d: { enabled: boolean }) => setSyncEnabled(d.enabled))
      .catch(() => setSyncEnabled(false));
  }, []);

  async function handlePush() {
    setSyncing(true);
    setSyncStatus(null);
    try {
      const data = collectAllKeys();
      const res = await fetch("/api/sync-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const time = new Date().toLocaleTimeString();
      setSyncStatus({ type: "success", message: `Saved to cloud at ${time}.` });
    } catch {
      setSyncStatus({ type: "error", message: "Push failed. Check your CF KV env vars." });
    } finally {
      setSyncing(false);
    }
  }

  async function handlePull() {
    setSyncing(true);
    setSyncStatus(null);
    try {
      const res = await fetch("/api/sync-proxy");
      if (!res.ok) throw new Error();
      const { data } = (await res.json()) as { data: Record<string, unknown> | null };
      if (!data) {
        setSyncStatus({ type: "error", message: "No cloud save found. Push from your main device first." });
        return;
      }
      restoreAllKeys(data);
      setSyncStatus({ type: "success", message: "Pulled from cloud. Refreshing…" });
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setSyncStatus({ type: "error", message: "Pull failed. Check your CF KV env vars." });
    } finally {
      setSyncing(false);
    }
  }

  function handleExport() {
    try {
      const data = collectAllKeys();
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const date = new Date().toISOString().slice(0, 10);
      const a = document.createElement("a");
      a.href = url;
      a.download = `marketing-academy-progress-${date}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportStatus({ type: "success", message: "Progress exported successfully." });
    } catch {
      setExportStatus({ type: "error", message: "Export failed. Try again." });
    }
  }

  function handleImportClick() {
    setImportStatus(null);
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result;
        if (typeof text !== "string") throw new Error("Unreadable file.");
        const data = JSON.parse(text) as Record<string, unknown>;

        const hasAnyKey = EXPORT_KEYS.some((k) => k in data);
        if (!hasAnyKey) {
          setImportStatus({
            type: "error",
            message: "Invalid file: no recognised progress keys found.",
          });
          return;
        }

        restoreAllKeys(data);

        setImportStatus({
          type: "success",
          message: "Progress imported. Refresh the page to see updated stats.",
        });
      } catch {
        setImportStatus({ type: "error", message: "Could not parse file. Make sure it's a valid export." });
      }
    };
    reader.readAsText(file);
    // reset so the same file can be re-imported
    e.target.value = "";
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Reset all progress? This will clear completed lessons, bookmarks, XP, quiz passes, and notes. This cannot be undone."
    );
    if (!confirmed) return;
    try {
      for (const key of EXPORT_KEYS) {
        localStorage.removeItem(key);
      }
      // Clear quiz pass keys and note keys
      const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter(Boolean) as string[];
      for (const key of allKeys) {
        if (key.startsWith(QUIZ_PASS_KEY_PREFIX) || key.startsWith(NOTE_KEY_PREFIX)) {
          localStorage.removeItem(key);
        }
      }
      // Notify reactive components immediately
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: null, unlocked: [] } }));
      setResetStatus({ type: "success", message: "Progress cleared. Refresh the page to see changes." });
    } catch {
      setResetStatus({ type: "error", message: "Reset failed. Try again." });
    }
  }

  return (
    <main
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "2.5rem 1.25rem",
        color: "var(--foreground)",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          marginBottom: "0.375rem",
          color: "var(--foreground)",
        }}
      >
        Settings
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem", fontSize: "0.95rem" }}>
        Manage your learning progress data.
      </p>

      {/* Export */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Export Progress</h2>
        <p style={descStyle}>
          Download a JSON backup of your completed lessons, bookmarks, and XP data.
        </p>
        <button style={primaryBtn} onClick={handleExport}>
          Download JSON
        </button>
        <StatusBanner status={exportStatus} />
      </section>

      {/* Import */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Import Progress</h2>
        <p style={descStyle}>
          Restore a previous backup. Existing data for matching keys will be overwritten.
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button style={primaryBtn} onClick={handleImportClick}>
          Choose File &amp; Import
        </button>
        <StatusBanner status={importStatus} />
      </section>

      {/* Cloud Sync */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Cloud Sync</h2>
        <p style={descStyle}>
          Push your progress to Cloudflare KV to restore it on another device. Requires{" "}
          <code style={{ fontSize: "0.8rem" }}>CF_KV_*</code> env vars to be set.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            style={primaryBtn}
            onClick={handlePush}
            disabled={syncing || syncEnabled === false}
            title={syncEnabled === false ? "CF KV env vars not configured" : undefined}
          >
            {syncing ? "…" : "↑ Push to cloud"}
          </button>
          <button
            style={{ ...primaryBtn, background: "var(--muted)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }}
            onClick={handlePull}
            disabled={syncing || syncEnabled === false}
            title={syncEnabled === false ? "CF KV env vars not configured" : undefined}
          >
            {syncing ? "…" : "↓ Pull from cloud"}
          </button>
        </div>
        {syncEnabled === false && (
          <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
            Add <code>SYNC_SECRET</code>, <code>CF_ACCOUNT_ID</code>, <code>CF_KV_NAMESPACE_ID</code>,{" "}
            and <code>CF_KV_API_TOKEN</code> to your env vars to enable sync.
            See <code>.env.local.example</code> for setup instructions.
          </p>
        )}
        <StatusBanner status={syncStatus} />
      </section>

      {/* Reset */}
      <section style={cardStyle}>
        <h2 style={{ ...headingStyle, color: "rgba(220,38,38,0.9)" }}>Reset Progress</h2>
        <p style={descStyle}>
          Permanently clear all completed lessons, bookmarks, XP, quiz passes, and notes. Cannot be undone.
        </p>
        <button style={dangerBtn} onClick={handleReset}>
          Reset All Progress
        </button>
        <StatusBanner status={resetStatus} />
      </section>
    </main>
  );
}
