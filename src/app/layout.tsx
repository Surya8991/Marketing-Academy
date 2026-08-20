import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import { PostHogProvider } from "@/components/PostHogProvider";
import SyncProvider from "@/components/SyncProvider";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AchievementToast from "@/components/AchievementToast";
import OnboardingModal from "@/components/OnboardingModal";
import CommandPaletteLoader from "@/components/CommandPaletteLoader";
import StorageWarning from "@/components/StorageWarning";
import { authConfigured } from "@/lib/env";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Redesign type system (Home/Learn/Tracks/Projects/Tools/About + shared Nav/Footer chrome
// only — lesson-reading prose stays on Geist Sans, out of scope for this pass).
// Fraunces: display serif, high-contrast/sharp optical setting for editorial authority.
// Public Sans: body/UI sans, a considered "document register" alternative to Inter/Space Grotesk.
// IBM Plex Mono: every number, classification code, and citation mark.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});
const publicSans = Public_Sans({ variable: "--font-ui-sans", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-data", subsets: ["latin"], weight: ["400", "500", "600"] });

const BASE = "https://marketing-academy-roan.vercel.app";

export const metadata: Metadata = {
  title: { template: "%s | Marketing Academy", default: "Marketing Academy" },
  description:
    "Learn marketing from scratch to advanced: SEO, paid ads, growth, social, email, analytics, AI tools and more. Free, humanized lessons with real examples.",
  metadataBase: new URL(BASE),
  manifest: "/manifest.json",
  openGraph: {
    siteName: "Marketing Academy",
    locale: "en_US",
    type: "website",
    url: BASE,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Marketing Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SURYA_L1998",
    creator: "@SURYA_L1998",
  },
  alternates: {
    canonical: BASE,
  },
};

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

// Inline script runs before React hydration (no-flash theme detection).
// Cannot import THEME_KEY here, raw string only. Must stay in sync with THEME_KEY in src/lib/events.ts ("theme").
//
// Dev note: React emits a "Encountered a script tag" console warning for ANY <script> in the
// component tree — both raw <script> and <Script> from next/script produce it. The warning is
// dev-only, harmless, and cannot be avoided for inline scripts that must run before hydration.
// See: https://github.com/vercel/next.js/discussions/49506
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (t === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
} catch(e) {}
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme detection runs before first paint to prevent dark/light flash.
            suppressHydrationWarning on <html> covers the data-theme attribute mismatch. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="alternate" type="application/rss+xml" title="Marketing Academy" href={`${BASE}/feed.xml`} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SessionProvider>
          <SyncProvider>
            <PostHogProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)] focus:font-medium focus:text-sm"
              >
                Skip to content
              </a>
              <Nav authConfigured={authConfigured()} />
              <main id="main-content" className="pt-16 flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
              <AchievementToast />
              <OnboardingModal />
              <CommandPaletteLoader />
              <StorageWarning />
            </PostHogProvider>
          </SyncProvider>
        </SessionProvider>
        {/* Service worker registration, PRODUCTION ONLY (AGENTS.md Rule 50/59): the
            SW caches JS/CSS bundles per-origin regardless of localhost vs prod, so a
            dev tab that registers it starts silently serving stale chunks after every
            hot-reload restart, indistinguishable from a real bug (hit repeatedly across
            Sessions 50/59/80). Registering only in prod removes the dev-mode failure
            mode entirely; production still gets the caching behavior it's meant for.
            Also unregisters any SW a dev tab may have already registered pre-fix. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){if(${JSON.stringify(process.env.NODE_ENV === "production")}){navigator.serviceWorker.register('/sw.js').catch(function(){});}else{navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister();});});}}`,
          }}
        />
        {/* PostHog analytics — CDN snippet loads only when the env key is set.
            Uses the CDN instead of the posthog-js npm package because Turbopack
            statically traces all import() expressions and crashes on posthog-js's
            module factory in dev mode. See PostHogProvider.tsx for details. */}
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && (
          <script dangerouslySetInnerHTML={{ __html: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(/\\/$/, "")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onFeatureFlags onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}',{api_host:'${process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com"}',capture_pageview:false,capture_pageleave:true,persistence:'localStorage'});
          ` }} />
        )}
      </body>
    </html>
  );
}
