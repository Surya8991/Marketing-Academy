import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE = "https://marketing-academy-roan.vercel.app";

export const metadata: Metadata = {
  title: { template: "%s | Marketing Academy", default: "Marketing Academy" },
  description:
    "Learn marketing from scratch to advanced — SEO, paid ads, growth, social, email, analytics, AI tools and more. Free, humanized lessons with real examples.",
  metadataBase: new URL(BASE),
};

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
        <Nav />
        <main className="pt-16 flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
