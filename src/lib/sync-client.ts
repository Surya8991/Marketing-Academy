// src/lib/sync-client.ts
"use client";
/**
 * Client-side half of cross-device sync. localStorage stays the read
 * source of truth (no new network call on page render); this module keeps
 * it in sync with the server in the background when signed in.
 */
import { collectAllKeys, restoreAllKeys } from "@/lib/progress-snapshot";
import { PROGRESS_CHANGED_EVENT } from "@/lib/events";

const LOCAL_UPDATED_AT_KEY = "ma_sync_local_updated_at";

function localUpdatedAt(): number {
  const raw = localStorage.getItem(LOCAL_UPDATED_AT_KEY);
  return raw ? Number(raw) : 0;
}

function touchLocalUpdatedAt(): void {
  try {
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, String(Date.now()));
  } catch {
    // best-effort — a missed timestamp just makes the next merge slightly
    // more conservative (may prefer remote when it shouldn't), never crashes.
  }
}

/** Pure — the whole-snapshot "whichever side is newer wins" policy from the
 *  design doc. Not per-field: keeps a first version simple and predictable. */
export function mergeSnapshots(
  local: Record<string, unknown>,
  localUpdatedAtMs: number,
  remote: Record<string, unknown> | null,
  remoteUpdatedAtMs: number | null
): { winner: "local" | "remote" | "none"; data: Record<string, unknown> } {
  if (remote === null || remoteUpdatedAtMs === null) {
    return { winner: "local", data: local };
  }
  if (remoteUpdatedAtMs > localUpdatedAtMs) {
    return { winner: "remote", data: remote };
  }
  return { winner: "local", data: local };
}

/** Called once on sign-in (and on mount, if already signed in): pulls the
 *  server snapshot, merges with local, writes the winner back to both. */
export async function pullAndMerge(): Promise<void> {
  try {
    const res = await fetch("/api/sync");
    if (!res.ok) return; // offline/5xx/rate-limited — leave local as-is, next push catches up
    const { data: remote, updatedAt: remoteUpdatedAt } = (await res.json()) as {
      data: Record<string, unknown> | null;
      updatedAt: number | null;
    };
    const local = collectAllKeys();
    const merged = mergeSnapshots(local, localUpdatedAt(), remote, remoteUpdatedAt);
    if (merged.winner === "remote") {
      restoreAllKeys(merged.data);
      touchLocalUpdatedAt();
    }
    // Always push after a pull so the loser side (local or remote,
    // whichever wasn't picked) converges to the winner immediately, rather
    // than waiting for the next debounced write.
    await pushNow();
  } catch {
    // Network failure — sync is a background enhancement, never blocks the UI.
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
 * no session awareness of its own, keeping it independently testable.
 * Returns an unsubscribe function.
 */
export function startAutoSync(): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  function onChange() {
    touchLocalUpdatedAt();
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { void pushNow(); }, 2000);
  }
  window.addEventListener(PROGRESS_CHANGED_EVENT, onChange);
  return () => {
    window.removeEventListener(PROGRESS_CHANGED_EVENT, onChange);
    if (timer) clearTimeout(timer);
  };
}
