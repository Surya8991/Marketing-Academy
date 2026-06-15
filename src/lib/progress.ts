export const COMPLETED_KEY = "ma-completed";
const KEY = COMPLETED_KEY;

export function lessonId(category: string, slug: string): string {
  return `${category}/${slug}`;
}

export function getCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function markComplete(id: string): void {
  const completed = getCompleted();
  completed.add(id);
  localStorage.setItem(KEY, JSON.stringify([...completed]));
}

export function markIncomplete(id: string): void {
  const completed = getCompleted();
  completed.delete(id);
  localStorage.setItem(KEY, JSON.stringify([...completed]));
}
