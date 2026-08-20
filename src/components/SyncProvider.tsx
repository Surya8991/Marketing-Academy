"use client";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { pullAndMerge, startAutoSync } from "@/lib/sync-client";

export default function SyncProvider({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pulledForSession = useRef(false);

  useEffect(() => {
    if (status !== "authenticated") {
      pulledForSession.current = false;
      return;
    }
    if (pulledForSession.current) return;
    pulledForSession.current = true;
    void pullAndMerge();
  }, [status]);

  useEffect(() => {
    if (status !== "authenticated") return;
    return startAutoSync();
  }, [status]);

  return <>{children}</>;
}
