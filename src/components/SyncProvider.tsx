"use client";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { pullAndMerge, startAutoSync } from "@/lib/sync-client";

export default function SyncProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  const pulledForUser = useRef<string | null>(null);

  useEffect(() => {
    if (status !== "authenticated" || !userId) {
      pulledForUser.current = null;
      return;
    }
    if (pulledForUser.current === userId) return;
    pulledForUser.current = userId;
    void pullAndMerge(userId);
  }, [status, userId]);

  useEffect(() => {
    if (status !== "authenticated" || !userId) return;
    return startAutoSync(userId);
  }, [status, userId]);

  return <>{children}</>;
}
