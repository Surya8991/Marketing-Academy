"use client";

import { useCallback, useEffect, useState } from "react";

type UserRow = {
  id: string;
  email: string;
  name: string | null;
  role: string;
  suspended: boolean;
  createdAt: string;
  isSuperAdmin: boolean;
};

type AuditEntry = {
  id: string;
  actorEmail: string;
  action: string;
  targetEmail: string;
  at: string;
};

const badgeStyle = (bg: string, color: string): React.CSSProperties => ({
  display: "inline-block",
  padding: "0.125rem 0.5rem",
  borderRadius: "9999px",
  fontSize: "0.7rem",
  fontWeight: 600,
  background: bg,
  color,
});

const actionBtn: React.CSSProperties = {
  padding: "0.3rem 0.65rem",
  borderRadius: "0.4rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  border: "1px solid var(--border)",
  background: "var(--background)",
  color: "var(--foreground)",
  cursor: "pointer",
};

const dangerActionBtn: React.CSSProperties = {
  ...actionBtn,
  border: "1px solid rgba(220,38,38,0.35)",
  color: "rgba(220,38,38,0.95)",
};

const ACTION_PAST_TENSE: Record<string, string> = {
  promote: "promoted",
  demote: "demoted",
  suspend: "suspended",
  unsuspend: "unsuspended",
  delete: "deleted",
};

export default function AdminUsersClient() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState<UserRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [audit, setAudit] = useState<AuditEntry[]>([]);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ page: String(page) });
      if (query.trim()) params.set("q", query.trim());
      const res = await fetch(`/api/admin/users?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load users");
      const data = (await res.json()) as { users: UserRow[]; total: number };
      setRows(data.users);
      setTotal(data.total);
    } catch {
      setError("Couldn't load users. Try again.");
    } finally {
      setLoading(false);
    }
  }, [page, query]);

  const loadAudit = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/audit-log");
      if (!res.ok) return;
      const data = (await res.json()) as { entries: AuditEntry[] };
      setAudit(data.entries);
    } catch {
      /* non-critical — the log panel just stays empty */
    }
  }, []);

  useEffect(() => {
    void loadUsers();
  }, [loadUsers]);

  useEffect(() => {
    void loadAudit();
  }, [loadAudit]);

  async function runAction(id: string, action: string) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Action failed");
      }
      await Promise.all([loadUsers(), loadAudit()]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed");
    } finally {
      setBusyId(null);
    }
  }

  async function runDelete(row: UserRow) {
    const confirmed = window.confirm(
      `Permanently delete ${row.email}? This deletes all their data and cannot be undone.`
    );
    if (!confirmed) return;
    setBusyId(row.id);
    try {
      const res = await fetch(`/api/admin/users/${row.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Delete failed");
      }
      await Promise.all([loadUsers(), loadAudit()]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  }

  const totalPages = Math.max(1, Math.ceil(total / 25));

  return (
    <div className="font-ui-sans">
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search by email or name"
          className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm"
        />
      </div>

      {error && (
        <p className="text-sm mb-4 rounded-lg p-3" style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)", color: "rgba(220,38,38,0.95)" }}>
          {error}
        </p>
      )}

      <div className="border border-[var(--border)] rounded-xl overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] text-left text-[var(--muted-foreground)]">
              <th className="p-3 font-medium">Email</th>
              <th className="p-3 font-medium">Role</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Joined</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-[var(--border)] last:border-b-0">
                <td className="p-3">
                  <div className="font-medium">{r.email}</div>
                  {r.name && <div className="text-xs text-[var(--muted-foreground)]">{r.name}</div>}
                </td>
                <td className="p-3">
                  {r.isSuperAdmin ? (
                    <span style={badgeStyle("rgba(217,119,6,0.15)", "var(--foreground)")}>superadmin (env)</span>
                  ) : r.role === "admin" ? (
                    <span style={badgeStyle("rgba(99,102,241,0.15)", "var(--foreground)")}>admin</span>
                  ) : (
                    <span style={badgeStyle("var(--muted)", "var(--muted-foreground)")}>user</span>
                  )}
                </td>
                <td className="p-3">
                  {r.suspended ? (
                    <span style={badgeStyle("rgba(220,38,38,0.12)", "rgba(220,38,38,0.95)")}>suspended</span>
                  ) : (
                    <span style={badgeStyle("rgba(22,163,74,0.12)", "rgba(22,163,74,0.9)")}>active</span>
                  )}
                </td>
                <td className="p-3 text-[var(--muted-foreground)]">
                  {new Date(r.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3">
                  {r.isSuperAdmin ? (
                    <span className="text-xs text-[var(--muted-foreground)]">env-only</span>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        style={actionBtn}
                        disabled={busyId === r.id}
                        onClick={() => runAction(r.id, r.role === "admin" ? "demote" : "promote")}
                      >
                        {r.role === "admin" ? "Demote" : "Promote"}
                      </button>
                      <button
                        style={actionBtn}
                        disabled={busyId === r.id}
                        onClick={() => runAction(r.id, r.suspended ? "unsuspend" : "suspend")}
                      >
                        {r.suspended ? "Unsuspend" : "Suspend"}
                      </button>
                      <button style={dangerActionBtn} disabled={busyId === r.id} onClick={() => runDelete(r)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {!loading && rows.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-[var(--muted-foreground)]">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mb-10 text-sm text-[var(--muted-foreground)]">
        <span>
          {total} user{total !== 1 ? "s" : ""}
        </span>
        <div className="flex gap-2">
          <button style={actionBtn} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button style={actionBtn} disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
            Next
          </button>
        </div>
      </div>

      <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)] mb-3">
        Audit log (last {audit.length})
      </p>
      <ul className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)] text-sm">
        {audit.map((entry) => (
          <li key={entry.id} className="py-2.5 flex items-center justify-between gap-4">
            <span>
              <strong>{entry.actorEmail}</strong> {ACTION_PAST_TENSE[entry.action] ?? entry.action}{" "}
              <strong>{entry.targetEmail}</strong>
            </span>
            <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
              {new Date(entry.at).toLocaleString()}
            </span>
          </li>
        ))}
        {audit.length === 0 && <li className="py-3 text-center text-[var(--muted-foreground)]">No actions yet.</li>}
      </ul>
    </div>
  );
}
