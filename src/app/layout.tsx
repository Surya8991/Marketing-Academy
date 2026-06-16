import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { PostHogProvider } from "@/components/PostHogProvider";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AchievementToast from "@/components/AchievementToast";
import OnboardingModal from "@/components/OnboardingModal";
import CommandPalette from "@/components/CommandPalette";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="alternate" type="application/rss+xml" title="Marketing Academy" href={`${BASE}/feed.xml`} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <PostHogProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)] focus:font-medium focus:text-sm"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content" className="pt-16 flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <AchievementToast />
          <OnboardingModal />
          <CommandPalette />
          <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}` }} />
        </PostHogProvider>
      </body>
    </html>
  );
}
