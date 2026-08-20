// src/lib/sync-client.ts
"use client";
/**
 * Client-side half of cross-device sync. localStorage stays the read
 * source of truth (no new network call on page render); this module keeps
 * it in sync with the server in the background when signed in.
 *
 * The local "last touched" timestamp is scoped to the user id that wrote it.
 * A bare, unowned timestamp caused two real bugs:
 *   1. A guest (no timestamp at all) signing in would have any server row —
 *      even an empty one — win the merge, and the unconditional post-merge
 *      push made that permanent.
 *   2. On a shared browser, user A's leftover timestamp could beat user B's
 *      server row, pushing A's completions/bookmarks/private notes into B's
 *      account (sign-out deliberately leaves localStorage intact).
 * A timestamp whose `userId` does not match the currently signed-in user is
 * therefore treated as no timestamp at all: remote wins if a server row
 * exists, and nothing is pushed until the user's own next real edit fires
 * PROGRESS_CHANGED_EVENT (which re-stamps the timestamp under their id).
 */
import { collectAllKeys, restoreAllKeys } from "@/lib/progress-snapshot";
import { PROGRESS_CHANGED_EVENT } from "@/lib/events";

const LOCAL_UPDATED_AT_KEY = "ma_sync_local_updated_at";

type LocalStamp = { userId: string; at: number };

/** Returns the local timestamp ONLY if it was written by `userId`; otherwise
 *  null, meaning "this device has no trustworthy local timestamp for you". */
export function localUpdatedAtFor(userId: string): number | null {
  try {
    const raw = localStorage.getItem(LOCAL_UPDATED_AT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LocalStamp>;
    if (typeof parsed?.userId !== "string" || typeof parsed?.at !== "number") return null;
    if (parsed.userId !== userId) return null;
    return parsed.at;
  } catch {
    // Missing, corrupt, or a pre-scoping bare-number value (which carries no
    // owner and so can't be trusted) — treat as "no timestamp".
    return null;
  }
}

export function touchLocalUpdatedAt(userId: string): void {
  try {
    const stamp: LocalStamp = { userId, at: Date.now() };
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, JSON.stringify(stamp));
  } catch {
    // best-effort — a missed timestamp just makes the next merge more
    // conservative (prefers remote), never crashes.
  }
}

/** Pure — the whole-snapshot "whichever side is newer wins" policy from the
 *  design doc, with the ownership guard described in the module docblock.
 *  Not per-field: keeps a first version simple and predictable.
 *
 *  `localUpdatedAtMs === null` means "no timestamp owned by the current user
 *  on this device", in which case local content is NOT trusted:
 *   - a server row exists  -> remote wins,
 *   - no server row either -> `"none"`: do nothing at all (no restore, no
 *     push), since local could be a previous user's leftover data. */
export function mergeSnapshots(
  local: Record<string, unknown>,
  localUpdatedAtMs: number | null,
  remote: Record<string, unknown> | null,
  remoteUpdatedAtMs: number | null
): { winner: "local" | "remote" | "none"; data: Record<string, unknown> } {
  const hasRemote = remote !== null && remoteUpdatedAtMs !== null;
  if (localUpdatedAtMs === null) {
    if (hasRemote) return { winner: "remote", data: remote };
    return { winner: "none", data: {} };
  }
  if (!hasRemote) {
    return { winner: "local", data: local };
  }
  if (remoteUpdatedAtMs > localUpdatedAtMs) {
    return { winner: "remote", data: remote };
  }
  return { winner: "local", data: local };
}

/** Called once on sign-in (and on mount, if already signed in): pulls the
 *  server snapshot, merges with local, writes the winner back to both.
 *  Returns true when the merge completed (including a deliberate no-op),
 *  false when nothing happened because of a network/auth/server failure —
 *  the manual Settings "Pull" button branches on this; the automatic
 *  background path ignores it and stays silent by design. */
export async function pullAndMerge(userId: string): Promise<boolean> {
  try {
    const res = await fetch("/api/sync");
    if (!res.ok) return false; // offline/401/5xx/rate-limited — leave local as-is
    const { data: remote, updatedAt: remoteUpdatedAt } = (await res.json()) as {
      data: Record<string, unknown> | null;
      updatedAt: number | null;
    };
    const local = collectAllKeys();
    const merged = mergeSnapshots(local, localUpdatedAtFor(userId), remote, remoteUpdatedAt);

    if (merged.winner === "remote") {
      restoreAllKeys(merged.data);
      touchLocalUpdatedAt(userId);
      return true; // local now equals remote — no push needed to converge
    }
    if (merged.winner === "local") {
      // Push so the server converges to local immediately rather than
      // waiting for the next debounced write.
      const ok = await pushNow();
      if (ok) touchLocalUpdatedAt(userId);
      return ok;
    }
    // "none": no trusted local timestamp AND no server row. Deliberately do
    // nothing — pushing here could write a previous user's (or a guest's)
    // leftover localStorage into this account. The user's next real edit
    // fires PROGRESS_CHANGED_EVENT, which stamps and pushes under their id.
    return true;
  } catch {
    // Network failure — sync is a background enhancement, never blocks the UI.
    return false;
  }
}

/** Pushes the current local snapshot to the server. Returns true on success. */
export async function pushNow(): Promise<boolean> {
  try {
    const data = collectAllKeys();
    const res = await fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Subscribes to PROGRESS_CHANGED_EVENT and debounce-pushes (2s) while
 * signed in. Call only when the caller already knows the user is signed in
 * (SyncProvider checks session state before calling this) — this module has
 * no session awareness of its own, keeping it independently testable, so the
 * signed-in user's id is passed in explicitly.
 * Returns an unsubscribe function.
 */
export function startAutoSync(userId: string): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  function onChange() {
    // Stamp under the CURRENT user, so their own fresh edits are never
    // treated as timestamp-less by the next merge.
    touchLocalUpdatedAt(userId);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { void pushNow(); }, 2000);
  }
  window.addEventListener(PROGRESS_CHANGED_EVENT, onChange);
  return () => {
    window.removeEventListener(PROGRESS_CHANGED_EVENT, onChange);
    if (timer) clearTimeout(timer);
  };
}
