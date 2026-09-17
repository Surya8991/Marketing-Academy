"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ENGAGEMENT_EVENT } from "@/lib/engagement";
import { EXPORT_KEYS, ALLOWED_KEY_PREFIXES, collectAllKeys, restoreAllKeys } from "@/lib/progress-snapshot";
import { pushNow, pullAndMerge } from "@/lib/sync-client";
import { getProfile, saveProfile, type Profile, type ExperienceLevel } from "@/lib/profile";
import { getCertName, setCertName } from "@/lib/cert-name";
import AutosaveIndicator from "@/components/AutosaveIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import PageMasthead from "@/components/PageMasthead";

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

const fieldLabel: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "var(--foreground)",
  marginBottom: "0.375rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--border)",
  background: "var(--background)",
  color: "var(--foreground)",
  fontSize: "0.9rem",
};

const EXPERIENCE_OPTIONS: { value: ExperienceLevel | ""; label: string }[] = [
  { value: "", label: "Not set" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

type EmailPrefs = { emailStreakReminder: boolean; emailResumeLearning: boolean; emailWeeklyDigest: boolean };
const DEFAULT_EMAIL_PREFS: EmailPrefs = {
  emailStreakReminder: false,
  emailResumeLearning: false,
  emailWeeklyDigest: false,
};

export default function SettingsClient({ authConfigured = false }: { authConfigured?: boolean }) {
  const { data: session, status } = useSession();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<Status>(null);
  const [exportStatus, setExportStatus] = useState<Status>(null);
  const [resetStatus, setResetStatus] = useState<Status>(null);
  const [syncStatus, setSyncStatus] = useState<Status>(null);
  const [syncing, setSyncing] = useState(false);

  const [name, setName] = useState("");
  const [profile, setProfileState] = useState<Profile>({ role: "", experienceLevel: "", primaryGoal: "" });
  const [profileStatus, setProfileStatus] = useState<Status>(null);

  const [emailPrefs, setEmailPrefs] = useState<EmailPrefs>(DEFAULT_EMAIL_PREFS);
  const [emailPrefsLoaded, setEmailPrefsLoaded] = useState(false);
  const [emailPrefsStatus, setEmailPrefsStatus] = useState<Status>(null);

  useEffect(() => {
    setName(getCertName());
    setProfileState(getProfile());
  }, []);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/account/email-prefs")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: EmailPrefs | null) => {
        if (data) setEmailPrefs(data);
        setEmailPrefsLoaded(true);
      })
      .catch(() => setEmailPrefsLoaded(true));
  }, [status]);

  async function toggleEmailPref(key: keyof EmailPrefs) {
    const next = { ...emailPrefs, [key]: !emailPrefs[key] };
    setEmailPrefs(next);
    setEmailPrefsStatus(null);
    try {
      const res = await fetch("/api/account/email-prefs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: next[key] }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setEmailPrefs(emailPrefs); // revert on failure
      setEmailPrefsStatus({ type: "error", message: "Couldn't save that. Try again." });
    }
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setCertName(name.trim());
    saveProfile(profile);
    setProfileStatus({ type: "success", message: "Profile saved." });
  }

  async function handlePush() {
    setSyncing(true);
    setSyncStatus(null);
    const ok = await pushNow();
    setSyncStatus(
      ok
        ? { type: "success", message: `Saved to cloud at ${new Date().toLocaleTimeString()}.` }
        : { type: "error", message: "Push failed. Make sure you're signed in." }
    );
    setSyncing(false);
  }

  async function handlePull() {
    setSyncing(true);
    setSyncStatus(null);
    if (!userId) {
      setSyncStatus({ type: "error", message: "Pull failed. Make sure you're signed in." });
      setSyncing(false);
      return;
    }
    const ok = await pullAndMerge(userId);
    if (!ok) {
      setSyncStatus({ type: "error", message: "Pull failed. Check your connection and that you're signed in." });
      setSyncing(false);
      return;
    }
    setSyncStatus({ type: "success", message: "Pulled and merged from cloud. Refreshing…" });
    setTimeout(() => window.location.reload(), 1200);
    setSyncing(false);
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
      // Stage 2.7: sweep ALL prefixed keys (was missing track quiz pass, quiz
      // in-progress state, and recently-viewed). Uses ALLOWED_KEY_PREFIXES so
      // any new prefix added there is automatically covered.
      const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter(Boolean) as string[];
      for (const key of allKeys) {
        if (ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p))) {
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
    <>
      <PageMasthead
        left="Marketing Academy · Settings"
        right={status === "authenticated" ? "Signed in" : "Guest"}
      />
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "3.5rem 1.25rem 4rem",
          color: "var(--foreground)",
        }}
      >
      <h1 className="font-display font-semibold text-2xl sm:text-3xl" style={{ marginBottom: "0.375rem" }}>
        Settings
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
        Manage your learning progress data.
      </p>
      {/* Stage 5.1: honest warning that progress is browser-only */}
      <p style={{
        color: "var(--muted-foreground)",
        marginBottom: "2rem",
        fontSize: "0.8rem",
        padding: "0.625rem 0.875rem",
        borderRadius: "0.5rem",
        background: "rgba(234, 179, 8, 0.08)",
        border: "1px solid rgba(234, 179, 8, 0.2)",
        lineHeight: 1.5,
      }}>
        ⚠️ Your progress is stored in this browser only. Clearing site data or switching browsers will lose it.
        Use <strong>Export</strong> below to save a backup you can import later.
      </p>

      {/* Profile Details */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Profile Details</h2>
        <p style={descStyle}>
          Your name appears on certificates. Role, experience, and goal help personalize suggestions
          across the site.
        </p>
        <form onSubmit={handleSaveProfile} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={fieldLabel} htmlFor="settings-name">Name</label>
            <input
              id="settings-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
              maxLength={80}
            />
          </div>
          <div>
            <label style={fieldLabel} htmlFor="settings-role">Role</label>
            <input
              id="settings-role"
              type="text"
              value={profile.role}
              onChange={(e) => setProfileState((p) => ({ ...p, role: e.target.value }))}
              placeholder="e.g. Founder, Marketing Manager, Student"
              style={inputStyle}
              maxLength={80}
            />
          </div>
          <div>
            <label style={fieldLabel} htmlFor="settings-experience">Experience level</label>
            <select
              id="settings-experience"
              value={profile.experienceLevel}
              onChange={(e) =>
                setProfileState((p) => ({ ...p, experienceLevel: e.target.value as ExperienceLevel | "" }))
              }
              style={inputStyle}
            >
              {EXPERIENCE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={fieldLabel} htmlFor="settings-goal">Primary goal</label>
            <input
              id="settings-goal"
              type="text"
              value={profile.primaryGoal}
              onChange={(e) => setProfileState((p) => ({ ...p, primaryGoal: e.target.value }))}
              placeholder="e.g. Grow a B2B startup"
              style={inputStyle}
              maxLength={120}
            />
          </div>
          <button type="submit" style={{ ...primaryBtn, alignSelf: "flex-start" }}>
            Save Profile
          </button>
        </form>
        <StatusBanner status={profileStatus} />
      </section>

      {/* Account */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Account</h2>
        {status === "authenticated" && session?.user ? (
          <>
            <p style={descStyle}>
              Signed in as <strong style={{ color: "var(--foreground)" }}>{session.user.email}</strong>.
            </p>
            <Link href="/account" style={{ ...primaryBtn, textDecoration: "none", display: "inline-flex" }}>
              Manage account &amp; sessions
            </Link>
          </>
        ) : (
          <>
            <p style={descStyle}>
              You&apos;re not signed in. Your progress stays on this device only, sign in to back it up and
              sync it across devices.
            </p>
            {authConfigured ? (
              <Link href="/login" style={{ ...primaryBtn, textDecoration: "none", display: "inline-flex" }}>
                Sign in
              </Link>
            ) : (
              <p style={{ ...descStyle, marginBottom: 0, fontSize: "0.8rem" }}>
                Sign-in isn&apos;t enabled on this deployment yet.
              </p>
            )}
          </>
        )}
      </section>

      {/* Email notifications, signed-in only (guests have no email on file).
          All opt-in, default OFF (IMPROVEMENT_PLAN §D2/#28). */}
      {status === "authenticated" && session?.user && (
        <section style={cardStyle}>
          <h2 style={headingStyle}>Email Notifications</h2>
          <p style={descStyle}>
            Opt-in only, off by default. Every email includes a one-click unsubscribe.
          </p>
          {emailPrefsLoaded ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={emailPrefs.emailStreakReminder}
                  onChange={() => toggleEmailPref("emailStreakReminder")}
                  style={{ marginTop: "0.2rem" }}
                />
                <span>
                  <strong style={{ display: "block", fontSize: "0.9rem" }}>Streak reminder</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                    A nudge when your streak is about to lapse.
                  </span>
                </span>
              </label>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={emailPrefs.emailResumeLearning}
                  onChange={() => toggleEmailPref("emailResumeLearning")}
                  style={{ marginTop: "0.2rem" }}
                />
                <span>
                  <strong style={{ display: "block", fontSize: "0.9rem" }}>Resume learning</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                    A reminder with your last lesson after a few inactive days.
                  </span>
                </span>
              </label>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={emailPrefs.emailWeeklyDigest}
                  onChange={() => toggleEmailPref("emailWeeklyDigest")}
                  style={{ marginTop: "0.2rem" }}
                />
                <span>
                  <strong style={{ display: "block", fontSize: "0.9rem" }}>Weekly digest</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                    Lessons completed, XP earned, and your streak, once a week.
                  </span>
                </span>
              </label>
            </div>
          ) : (
            <p style={{ ...descStyle, marginBottom: 0 }}>Loading…</p>
          )}
          <StatusBanner status={emailPrefsStatus} />
        </section>
      )}

      {/* Preferences */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Preferences</h2>
        <p style={descStyle}>Choose light or dark mode.</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ThemeToggle />
          <span style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Toggle theme</span>
        </div>
      </section>

      {/* Autosave status */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Autosave</h2>
        <p style={descStyle}>
          Every lesson, quiz, and note saves instantly to this browser. When signed in, it also syncs to the
          cloud a couple of seconds after each change.
        </p>
        <AutosaveIndicator />
      </section>

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

      {/* Cloud Sync — account-backed sync via /api/sync (Task 9). Push/Pull
          work for anyone signed in; an unauthenticated request just fails
          with a 401, surfaced below as the "Make sure you're signed in"
          error. See src/lib/sync-client.ts for the pull-merge-push logic. */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>Cloud Sync</h2>
        <p style={descStyle}>
          Sync your progress across devices. Push saves your data to the cloud; Pull restores it here. Sign in from the account menu first.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            style={primaryBtn}
            onClick={handlePush}
            disabled={syncing}
          >
            {syncing ? "…" : "↑ Push to cloud"}
          </button>
          <button
            style={{ ...primaryBtn, background: "var(--muted)", color: "var(--muted-foreground)", border: "1px solid var(--border)" }}
            onClick={handlePull}
            disabled={syncing}
          >
            {syncing ? "…" : "↓ Pull from cloud"}
          </button>
        </div>
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
      </div>
    </>
  );
}
