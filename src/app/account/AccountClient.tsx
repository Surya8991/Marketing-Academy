"use client";
import { useEffect, useState, useTransition } from "react";
import { signOut } from "next-auth/react";
import { LogOut, Trash2, ShieldAlert } from "lucide-react";

type SessionRow = { tokenPreview: string; expires: string; isCurrent: boolean };

export default function AccountClient({ email, isAdmin }: { email: string; isAdmin: boolean }) {
  const [sessions, setSessions] = useState<SessionRow[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [confirmText, setConfirmText] = useState("");
  const [pending, start] = useTransition();

  function loadSessions() {
    fetch("/api/account/sessions")
      .then(async (r) => {
        const d = (await r.json().catch(() => ({}))) as { sessions?: SessionRow[]; error?: string };
        if (!r.ok) {
          setErr(d.error ?? "Failed to load sessions");
          setSessions([]);
          return;
        }
        setSessions(d.sessions ?? []);
      })
      .catch(() => {
        setErr("Failed to load sessions");
        setSessions([]);
      });
  }

  useEffect(() => { loadSessions(); }, []);

  function revoke(tokenPreview: string) {
    start(async () => {
      setErr(null);
      const res = await fetch("/api/account/sessions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenPreview }),
      });
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({ error: "Failed" }))) as { error?: string };
        setErr(error ?? "Failed to revoke session");
        return;
      }
      loadSessions();
    });
  }

  function deleteAccount() {
    if (confirmText.trim().toLowerCase() !== email.toLowerCase()) return;
    if (!confirm("This permanently deletes your account and synced progress. Your local browser data on this device is untouched. Continue?")) return;
    start(async () => {
      setErr(null);
      const res = await fetch("/api/account/delete", { method: "POST" });
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({ error: "Failed" }))) as { error?: string };
        setErr(error ?? "Failed to delete account");
        return;
      }
      window.location.href = "/";
    });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 font-ui-sans">
      <h1 className="font-display font-semibold text-3xl mb-2">Account</h1>
      <p className="text-[var(--muted-foreground)] mb-8">{email}{isAdmin ? " · admin" : ""}</p>

      {err ? <p className="mb-4 rounded-md bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-600">{err}</p> : null}

      <button
        onClick={() => void signOut({ callbackUrl: "/" })}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--border)] hover:bg-[var(--muted)] transition-colors mb-10"
      >
        <LogOut size={14} /> Sign out
      </button>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-lg mb-3">Active sessions</h2>
        {sessions === null ? (
          <p className="text-sm text-[var(--muted-foreground)]">Loading…</p>
        ) : (
          <ul className="divide-y border border-[var(--border)] rounded-lg text-sm">
            {sessions.map((s) => (
              <li key={s.tokenPreview} className="flex items-center justify-between px-3 py-2">
                <div>
                  <div className="font-mono text-xs flex items-center gap-2">
                    {s.tokenPreview}
                    {s.isCurrent ? <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)]">this device</span> : null}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">Expires {new Date(s.expires).toLocaleString()}</div>
                </div>
                {!s.isCurrent ? (
                  <button onClick={() => revoke(s.tokenPreview)} disabled={pending} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                    Revoke
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {!isAdmin ? (
        <section className="border border-red-500/30 rounded-lg p-4">
          <h2 className="flex items-center gap-2 font-display font-semibold text-lg text-red-600 mb-2">
            <ShieldAlert size={18} /> Delete account
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-3">
            Permanently deletes your account and synced progress. Type <code className="bg-[var(--muted)] px-1 rounded">{email}</code> to confirm.
          </p>
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder={email}
            className="w-full mb-3 px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-sm"
          />
          <button
            onClick={deleteAccount}
            disabled={pending || confirmText.trim().toLowerCase() !== email.toLowerCase()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white disabled:opacity-40 transition-opacity"
          >
            <Trash2 size={14} /> Delete my account permanently
          </button>
        </section>
      ) : (
        <p className="text-sm text-[var(--muted-foreground)]">Admin accounts can&apos;t self-delete from here.</p>
      )}
    </div>
  );
}
