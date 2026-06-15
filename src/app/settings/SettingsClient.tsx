"use client";

import { useRef, useState } from "react";
import { BOOKMARK_KEY } from "@/lib/bookmarks";

const COMPLETED_KEY = "ma-completed";
const ENGAGEMENT_KEY = "ma_engagement";
const EXPORT_KEYS = [COMPLETED_KEY, BOOKMARK_KEY, ENGAGEMENT_KEY];

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

  function handleExport() {
    try {
      const data: Record<string, unknown> = {};
      for (const key of EXPORT_KEYS) {
        const raw = localStorage.getItem(key);
        data[key] = raw ? JSON.parse(raw) : null;
      }
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
            message: "Invalid file — no recognised progress keys found.",
          });
          return;
        }

        for (const key of EXPORT_KEYS) {
          if (key in data && data[key] !== null) {
            localStorage.setItem(key, JSON.stringify(data[key]));
          }
        }

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
      "Reset all progress? This will clear completed lessons, bookmarks, and XP. This cannot be undone."
    );
    if (!confirmed) return;
    try {
      for (const key of EXPORT_KEYS) {
        localStorage.removeItem(key);
      }
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

      {/* Reset */}
      <section style={cardStyle}>
        <h2 style={{ ...headingStyle, color: "rgba(220,38,38,0.9)" }}>Reset Progress</h2>
        <p style={descStyle}>
          Permanently clear all completed lessons, bookmarks, and XP. Cannot be undone.
        </p>
        <button style={dangerBtn} onClick={handleReset}>
          Reset All Progress
        </button>
        <StatusBanner status={resetStatus} />
      </section>
    </main>
  );
}
