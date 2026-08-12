"use client";

import { type ReactNode } from "react";

/**
 * PostHog analytics provider.
 *
 * When NEXT_PUBLIC_POSTHOG_KEY is set, PostHog is loaded via a CDN snippet
 * injected by layout.tsx — NOT via the posthog-js npm package. This is because
 * Turbopack (Next.js dev bundler) statically traces ALL import() expressions,
 * including those inside useEffect / async / conditionals, and crashes with
 * "module factory is not available" when posthog-js is in the dependency graph
 * but the key is not set. The CDN snippet approach keeps posthog-js entirely
 * out of Turbopack's module graph.
 *
 * This component exists so layout.tsx doesn't need to change if we switch back
 * to the npm package when Turbopack fixes the issue.
 */
export function PostHogProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
