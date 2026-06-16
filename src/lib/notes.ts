export const NOTE_KEY_PREFIX = "ma_note_";

export function getNoteKey(category: string, slug: string): string {
  return `${NOTE_KEY_PREFIX}${category}_${slug}`;
}

export function getNote(category: string, slug: string): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(getNoteKey(category, slug)) ?? "";
  } catch {
    return "";
  }
}

export function saveNote(category: string, slug: string, text: string): void {
  try {
    const key = getNoteKey(category, slug);
    if (text.trim()) {
      localStorage.setItem(key, text);
    } else {
      localStorage.removeItem(key);
    }
  } catch {
    // storage unavailable
  }
}

export function deleteNote(category: string, slug: string): void {
  try {
    localStorage.removeItem(getNoteKey(category, slug));
  } catch {
    // storage unavailable
  }
}
