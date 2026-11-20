import type { Metadata } from "next";

// The site's public origin. Set NEXT_PUBLIC_SITE_URL to move to a custom domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://marketing-academy-roan.vercel.app").replace(/\/$/, "");

const SUFFIX = " | Marketing Academy"; // the root layout's title.template
// Search results cut titles at ~60 characters: drop the brand suffix when it would push past that.
export function fitTitle(name: string): Metadata["title"] {
  return name.length + SUFFIX.length <= 60 ? name : { absolute: name };
}

// Meta descriptions: trim to 160 characters at a word boundary.
export function clip(text: string, max = 160): string {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[\s,;:.]+$/, "") + "…";
}

// Social share image from /api/og, plus the matching openGraph/twitter fields.
// A page that sets its own openGraph replaces the layout's, image included (AGENTS.md Rule 79).
export function shareImage(title: string, category = "", level = "") {
  const url = `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&category=${encodeURIComponent(category)}&level=${encodeURIComponent(level)}`;
  return {
    images: [{ url, width: 1200, height: 630, alt: title }],
    twitter: { card: "summary_large_image" as const, images: [url] },
  };
}
