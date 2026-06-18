"use client";

/**
 * Mermaid diagram renderer: client-side only (see AGENTS.md Rule 8).
 *
 * Why client-only:
 *   Mermaid reads the DOM to measure text width. It cannot run in Node.js/SSR.
 *   Dynamic import inside useEffect ensures the 200KB+ bundle is only loaded
 *   when a lesson that actually contains a <Mermaid /> is viewed.
 *
 * Theme integration:
 *   Reads CSS variables (--foreground, --muted, --border, --accent) at render time
 *   so diagrams match the current light/dark theme automatically. Also registers a
 *   prefers-color-scheme media query listener to re-render when the OS theme changes.
 *
 * XSS protection:
 *   Mermaid renders user-supplied chart strings into SVG. The SVG is sanitized with
 *   DOMPurify before being injected via dangerouslySetInnerHTML. SVG + svgFilters
 *   profiles are allowed so arrow markers and filters render correctly.
 *
 * Fullscreen:
 *   The Maximize button opens the diagram in a fixed overlay with Esc/backdrop-click
 *   to close. Body scroll is locked while the overlay is open.
 *
 * Cleanup:
 *   `cancelled` flag prevents setSvg() calls from landing after the component unmounts
 *   or the chart prop changes, without this, rapid prop changes could cause a stale
 *   render to overwrite a newer one.
 */

import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import DOMPurify from "dompurify";

interface MermaidProps {
  chart: string;
  caption?: string;
}

export default function Mermaid({ chart, caption }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render(isDark: boolean) {
      try {
        // Dynamic import, keeps Mermaid out of the initial JS bundle
        const mermaid = (await import("mermaid")).default;

        // Read current theme tokens so the diagram colours match globals.css variables
        const css = getComputedStyle(document.documentElement);
        const fg = css.getPropertyValue("--foreground").trim() || (isDark ? "#f4f4f5" : "#0a0a0a");
        const muted = css.getPropertyValue("--muted").trim() || (isDark ? "#18181b" : "#f5f5f5");
        const border = css.getPropertyValue("--border").trim() || (isDark ? "#2a2a30" : "#e5e7eb");
        const accent = css.getPropertyValue("--accent").trim() || (isDark ? "#a5b4fc" : "#6366f1");

        mermaid.initialize({
          startOnLoad: false,
          theme: "base", // "base" allows full themeVariables override
          fontFamily: "inherit",
          fontSize: 14,
          themeVariables: {
            background: "transparent",
            primaryColor: muted,
            primaryTextColor: fg,
            primaryBorderColor: border,
            secondaryColor: muted,
            secondaryTextColor: fg,
            secondaryBorderColor: border,
            tertiaryColor: muted,
            tertiaryTextColor: fg,
            tertiaryBorderColor: border,
            lineColor: isDark ? "#9ca3af" : "#4b5563",
            textColor: fg,
            mainBkg: muted,
            nodeBorder: border,
            clusterBkg: "transparent",
            clusterBorder: border,
            edgeLabelBackground: muted,
            titleColor: fg,
            noteBkgColor: muted,
            noteTextColor: fg,
            noteBorderColor: border,
            activationBorderColor: accent,
            activationBkgColor: muted,
          },
        });

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg: rendered } = await mermaid.render(id, chart.trim());
        if (!cancelled) {
          // Sanitize SVG output before injecting into the DOM (XSS prevention)
          setSvg(DOMPurify.sanitize(rendered, {
            USE_PROFILES: { svg: true, svgFilters: true },
            ADD_TAGS: ["foreignObject"],
            ADD_ATTR: ["requiredExtensions", "dominant-baseline"],
          }));
          setError("");
        }
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    render(mq.matches);

    // Re-render when the user switches OS theme, must re-initialize Mermaid with new token values
    const onChange = (e: MediaQueryListEvent) => render(e.matches);
    mq.addEventListener("change", onChange);

    return () => {
      cancelled = true; // prevent stale async render from overwriting a newer one
      mq.removeEventListener("change", onChange);
    };
  }, [chart]); // re-runs whenever the chart string changes (different diagram on same page)

  // Fullscreen overlay: lock body scroll and handle Esc to close
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = ""; // restore scroll when overlay closes
    };
  }, [fullscreen]);

  if (error) {
    return (
      <div className="not-prose my-6 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-4 text-sm text-red-600">
        <p className="font-medium">Diagram error</p>
        <pre className="mt-1 text-xs overflow-auto whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  return (
    <>
      <figure className="my-8 flex flex-col items-center not-prose">
        <div className="relative w-full group">
          <div
            ref={ref}
            className="w-full overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6 [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto"
            dangerouslySetInnerHTML={{ __html: svg }} // DOMPurify-sanitized above
          />
          {/* Fullscreen button: always visible on mobile, hover-visible on desktop */}
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            aria-label="Open diagram fullscreen"
            className="absolute top-3 right-3 p-2 rounded-md bg-[var(--background)]/80 border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background)] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 transition-opacity backdrop-blur-sm"
          >
            <Maximize2 size={16} />
          </button>
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-[var(--muted-foreground)]">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Fullscreen overlay, backdrop click closes, Esc also closes (handled by keydown effect above) */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm p-6 sm:p-12"
          onClick={() => setFullscreen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen"
            className="absolute top-6 right-6 p-2 rounded-md border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--background)] transition-colors"
          >
            <X size={20} />
          </button>
          {/* stopPropagation prevents diagram click from closing the overlay */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl w-full max-h-full overflow-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-8 [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto"
            // svg is already DOMPurify-sanitized from the main render path (same state)
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </>
  );
}
