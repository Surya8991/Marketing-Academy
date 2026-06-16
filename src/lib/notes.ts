/**
 * Per-lesson notes storage.
 *
 * Each lesson has its own localStorage key: "ma_note_{category}_{slug}"
 * e.g. "ma_note_seo_keyword-research"
 *
 * Rule 18: this module is the single source of truth for the note key format.
 * LessonNotes.tsx imports getNoteKey/getNote/saveNote from here.
 * Never hardcode "ma_note_" anywhere else or key-name drift will silently split user data.
 *
 * The settings reset handler iterates all localStorage keys and removes any that
 * start with NOTE_KEY_PREFIX, so the prefix must stay stable.
 */

export const NOTE_KEY_PREFIX = "ma_note_";

/** Builds the localStorage key for a specific lesson's note */
export function getNoteKey(category: string, slug: string): string {
  return `${NOTE_KEY_PREFIX}${category}_${slug}`;
}

/** Returns the user's saved note text, or "" if none. Safe to call on SSR (returns ""). */
export function getNote(category: string, slug: string): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(getNoteKey(category, slug)) ?? "";
  } catch {
    return "";
  }
}

/**
 * Saves a note. Automatically deletes the key when the note is blank ,
 * avoids accumulating empty-string entries in localStorage after the user clears a note.
 */
export function saveNote(category: string, slug: string, text: string): void {
  try {
    const key = getNoteKey(category, slug);
    if (text.trim()) {
      localStorage.setItem(key, text);
    } else {
      localStorage.removeItem(key);
    }
  } catch {
    // storage unavailable (private mode, quota exceeded)
  }
}

/** Explicitly removes a note entry from localStorage */
export function deleteNote(category: string, slug: string): void {
  try {
    localStorage.removeItem(getNoteKey(category, slug));
  } catch {
    // storage unavailable
  }
}
