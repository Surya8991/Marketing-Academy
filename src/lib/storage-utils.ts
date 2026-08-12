/**
 * Shared localStorage helpers used by multiple lib modules (Rule 18: shared
 * storage logic lives here, never duplicated per-module).
 */

/**
 * Preserves an unparseable localStorage value under a timestamped backup key
 * before the caller falls back to defaults. PROJECTS_PLAN.md Stage 2.2:
 * without this, a JSON.parse failure (a bad write, a manual edit, rare
 * storage corruption) silently loses the original data forever the moment
 * anything writes fresh defaults back to the same key.
 *
 * Best-effort only: failures here (e.g. storage already full) are swallowed,
 * since this runs inside an already-failing path and must never itself throw.
 */
export function preserveCorruptValue(key: string, raw: string): void {
  try {
    localStorage.setItem(`${key}__corrupt_${Date.now()}`, raw);
  } catch {
    // best-effort, nothing more we can do
  }
}
