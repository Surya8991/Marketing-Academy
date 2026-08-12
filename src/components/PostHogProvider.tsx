"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Stage 3.3: posthog-js (64 KB gzip) is dynamically imported only when the
 * env key exists, instead of being bundled on every route unconditionally.
 * When no key is set (dev, most deploys), zero PostHog JS is loaded.
 */
export function PostHogProvider({ children }: { children: ReactNode }) {
  const [Provider, setProvider] = useState<React.ComponentType<{ client: unknown; children: ReactNode }> | null>(null);
  const [client, setClient] = useState<unknown>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    let cancelled = false;
    (async () => {
      const [{ default: posthog }, { PostHogProvider: PHProvider }] = await Promise.all([
        import("posthog-js"),
        import("posthog-js/react"),
      ]);
      if (cancelled) return;

      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
        capture_pageview: false,
        capture_pageleave: true,
        persistence: "localStorage",
      });

      setClient(posthog);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProvider(() => PHProvider as any);
    })();

    return () => { cancelled = true; };
  }, []);

  if (Provider && client) {
    return <Provider client={client}>{children}</Provider>;
  }

  return <>{children}</>;
}
