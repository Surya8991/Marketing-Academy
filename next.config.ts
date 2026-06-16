/**
 * next.config.ts: Next.js 16 configuration.
 *
 * AGENTS: Rule 10, remark/rehype plugins MUST use the string/tuple format
 * (["plugin-name", {}]), NOT the imported function form (remarkGfm).
 * The function form breaks @next/mdx in this version.
 *
 * MDX: all .md and .mdx files under src/content/ are processed as React components.
 * Global components (Callout, Mermaid, ResourceList, Quiz, DiagramBlock) are
 * registered in mdx-components.tsx at the project root; Next.js picks it up
 * automatically; never import it.
 */

import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Treat .md and .mdx files as page routes / importable components
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  /**
   * Security headers applied to every response.
   *
   * CSP notes:
   *   - 'unsafe-inline' + 'unsafe-eval' are required by Next.js App Router (inline
   *     hydration scripts) and Mermaid (runtime code generation). Cannot be removed.
   *   - PostHog domains are whitelisted for analytics (script-src + connect-src).
   *   - api.cloudflare.com is whitelisted for the KV sync proxy's server-side fetch.
   *     This header applies to the BROWSER, not server routes, but it's kept consistent.
   *   - frame-ancestors 'none' prevents clickjacking (equivalent to X-Frame-Options DENY,
   *     but CSP takes precedence in modern browsers; both are set for compatibility).
   *
   * If you add a new third-party script or font, update script-src / connect-src here.
   */
  async headers() {
    return [
      {
        source: "/(.*)", // applies to every route
        headers: [
          // Prevent this site from being embedded in an iframe (clickjacking protection)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stop browsers from MIME-sniffing responses away from the declared content-type
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Only send full referrer to same origin; send origin-only to cross-origin HTTPS
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable browser features this site doesn't use
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // 'unsafe-inline' needed for Next.js inline scripts; 'unsafe-eval' needed for Mermaid
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://us-assets.i.posthog.com https://us.i.posthog.com",
              // Tailwind v4 generates inline <style> tags at runtime
              "style-src 'self' 'unsafe-inline'",
              // data: for base64 images, blob: for Mermaid SVG blobs, https: for any CDN image
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              // PostHog analytics + CF KV API (server-side only, but kept for consistency)
              "connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com https://api.cloudflare.com",
              // Service worker scope
              "worker-src 'self'",
              // Stronger clickjacking block (CSP version of X-Frame-Options DENY)
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Rule 10: string tuple format required; function form breaks @next/mdx
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: [
      ["rehype-slug", {}],                                    // adds id="" to headings
      ["rehype-autolink-headings", { behavior: "wrap" }],    // wraps headings in anchor tags
    ],
  },
});

export default withMDX(nextConfig);
