"use client";

/**
 * Surfaces IMPROVEMENT_PLAN #27's "is my data safe?" question. Autosave was
 * always present (instant local write, 2s debounced cloud push when signed
 * in, sync-client.ts's startAutoSync()) but had zero visible indicator
 * anywhere in the app. Used on /profile and /settings.
 *
 * Guests have no persisted "last saved at" timestamp to read on mount,
 * sync-client's LOCAL_UPDATED_AT_KEY is deliberately scoped to a signed-in
 * userId (see that file's docblock: an unowned timestamp is a cross-user
 * data-leak risk on a shared browser), so a guest only gets a specific
 * relative time once a PROGRESS_CHANGED_EVENT fires during this session.
 * Before that, if they already have real local data, it just says "Saved
 * locally" with no timestamp, rather than fabricating one.
 */
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { PROGRESS_CHANGED_EVENT } from "@/lib/events";
import { COMPLETED_KEY } from "@/lib/progress";
import { ENGAGEMENT_KEY } from "@/lib/engagement";
import { localUpdatedAtFor } from "@/lib/sync-client";

function relativeTime(ms: number): string {
  const diff = Date.now() - ms;
  if (diff < 10_000) return "just now";
  if (diff < 60_000) return `${Math.floor(diff / 1000)}s ago`;
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return `${Math.floor(diff / 86_400_000)}d ago`;
}

function hasAnyLocalProgress(): boolean {
  try {
    return Boolean(localStorage.getItem(COMPLETED_KEY) || localStorage.getItem(ENGAGEMENT_KEY));
  } catch {
    return false;
  }
}

export default function AutosaveIndicator({ className = "" }: { className?: string }) {
  const { data: session, status } = useSession();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  const [mounted, setMounted] = useState(false);
  const [sessionSaveAt, setSessionSaveAt] = useState<number | null>(null);
  const [hasProgress, setHasProgress] = useState(false);
  const [, forceTick] = useState(0);

  useEffect(() => {
    setMounted(true);
    setHasProgress(hasAnyLocalProgress());
    const handler = () => {
      setSessionSaveAt(Date.now());
      setHasProgress(true);
    };
    window.addEventListener(PROGRESS_CHANGED_EVENT, handler);
    // Keep "Xm ago" fresh without requiring a reload.
    const interval = setInterval(() => forceTick((n) => n + 1), 30_000);
    return () => {
      window.removeEventListener(PROGRESS_CHANGED_EVENT, handler);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  const signedIn = status === "authenticated" && Boolean(userId);
  const cloudAt = signedIn && userId ? localUpdatedAtFor(userId) : null;
  const savedAt = sessionSaveAt ?? cloudAt;

  if (!hasProgress && !savedAt) {
    return (
      <span className={`text-xs text-[var(--muted-foreground)] font-ui-sans ${className}`}>
        No progress saved yet
      </span>
    );
  }

  return (
    <span className={`text-xs text-[var(--muted-foreground)] font-ui-sans flex items-center gap-1.5 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(34,197,94,0.9)" }} />
      {savedAt ? (
        <>
          Saved{signedIn ? " · synced" : ""} {relativeTime(savedAt)}
        </>
      ) : (
        <>Saved locally{signedIn ? " · synced" : ""}</>
      )}
    </span>
  );
}
