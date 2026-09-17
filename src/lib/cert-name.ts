import { PROGRESS_CHANGED_EVENT } from "@/lib/events";

/**
 * The learner's display name for printed/shared track certificates. Stored once
 * and reused across every certificate (it's the same person). Kept in its own
 * lib per Rule 18 (single source of truth for the key) and dispatches
 * PROGRESS_CHANGED_EVENT so it rides the auto-sync + export path (Rule 77);
 * it's registered in progress-snapshot's EXPORT_KEYS.
 */
export const CERT_NAME_KEY = "ma_cert_name";

export function getCertName(): string {
  try {
    return localStorage.getItem(CERT_NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

export function setCertName(name: string): void {
  try {
    localStorage.setItem(CERT_NAME_KEY, name);
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    /* private mode / storage full, non-fatal */
  }
}
