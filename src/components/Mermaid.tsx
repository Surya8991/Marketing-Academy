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
 *   IMPORTANT: the embedded <style> element MUST survive sanitization — Mermaid ships
 *   all node fills and label colours inside a diagram-scoped <style> block. Stripping it
 *   makes every <rect> fall back to the SVG default black fill, so nodes render as solid
 *   black boxes with invisible labels. DOMPurify still sanitizes the CSS inside it.
 *   (Only <script> is forbidden as a tag; see AGENTS.md Rule 28.)
 *
 * Fullscreen:
 *   The Maximize button opens the diagram in a fixed overlay with Esc/backdrop-click
 *   to close. Body scroll is locked while the overlay is open.
 *
 * Cleanup:
 *   `cancelled` flag prevents setSvg() calls from landing after the component unmounts
 *   or the chart prop changes, without this, rapid prop changes could cause a stale
 *   render to overwrite a newer one.
 *
 * Label line breaks:
 *   Lesson MDX writes node labels like `A[Product\nWhat you sell]` inside a JS template
 *   literal (see AGENTS.md Rule 30). JS evaluates that `\n` into a REAL newline before
 *   Mermaid ever sees the string, so Mermaid's own `\n`-to-`<br/>` conversion (which only
 *   recognizes the literal two-character escape) never fires. Left as a raw newline,
 *   Mermaid's own label-text construction silently drops it, so words run together with
 *   NO separator at all (e.g. "SegmentationDivide into groups").
 *
 *   Converting it to a literal `<br/>` tag does NOT work either: Mermaid renders node
 *   labels inside an SVG `<foreignObject>` using XHTML-namespaced markup, and DOMPurify's
 *   namespace-confusion protection (an mXSS defense, not a config gap) fully removes any
 *   HTML-namespaced element there regardless of ADD_TAGS/ALLOWED_TAGS — it cannot be
 *   safely disabled. A removed `<br/>` contributes zero replacement characters, so the
 *   glued-together bug reappears even after "fixing" it that way.
 *
 *   `insertLabelBreaks` instead replaces the newline with a literal space. It never
 *   becomes an element, so DOMPurify has nothing to strip, and the label reads correctly
 *   as normal wrapped text (just not forced onto exactly two lines like the source intent).
 */

import { useEffect, useId, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
// DOMPurify is dynamically imported inside useEffect (Stage 3.2: −10 KB gzip on 642 pages)
import { useFocusTrap } from "@/lib/useFocusTrap";

/**
 * Replaces newlines inside node-label delimiters ([], {}, ()) with a space so multi-line
 * labels read as normal text instead of gluing words together (see file header comment).
 * Tracks bracket depth so structural newlines between statements (depth 0) are untouched.
 */
function insertLabelBreaks(chart: string): string {
  let depth = 0;
  let out = "";
  for (const ch of chart) {
    if (ch === "[" || ch === "(" || ch === "{") depth++;
    else if (ch === "]" || ch === ")" || ch === "}") depth = Math.max(0, depth - 1);
    out += ch === "\n" && depth > 0 ? " " : ch;
  }
  return out;
}

/**
 * Mermaid v11's computed `viewBox` for a flowchart is sometimes several
 * times larger than the diagram's actual rendered content, e.g. a viewBox
 * of ~2150x2150 user units around content (`g.root`'s real bbox) of only
 * ~700x1050 — over 60% of the SVG canvas is blank. Rewrites the viewBox
 * to tightly fit the real content so the CSS `w-full`/`h-auto` sizing
 * (which scales to the viewBox, not the visible drawing) actually fills
 * the container with diagram instead of mostly empty space.
 *
 * getBBox() requires layout, so this needs a real (if hidden) DOM node —
 * it can't be computed from the SVG string alone.
 */
function tightenViewBox(svgString: string): string {
  const container = document.createElement("div");
  container.style.cssText = "position:absolute; visibility:hidden; top:-9999px; left:-9999px;";
  document.body.appendChild(container);
  try {
    container.innerHTML = svgString;
    const svgEl = container.querySelector("svg");
    let content = svgEl?.querySelector("g.root") ?? null;
    if (!content && svgEl) {
      for (let i = 0; i < svgEl.children.length; i++) {
        const child = svgEl.children[i];
        if (child.tagName.toLowerCase() === "g") {
          content = child as SVGGraphicsElement;
          break;
        }
      }
    }
    if (!content) {
      content = svgEl?.querySelector("g") ?? null;
    }
    if (!svgEl || !content || !("getBBox" in content)) return svgString;

    const bbox = (content as unknown as SVGGraphicsElement).getBBox();
    if (!(bbox.width > 0) || !(bbox.height > 0)) return svgString;

    const pad = 10;
    svgEl.setAttribute(
      "viewBox",
      `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`
    );
    svgEl.removeAttribute("style"); // drop the now-stale max-width; CSS `w-full` handles sizing
    return svgEl.outerHTML;
  } catch {
    return svgString;
  } finally {
    document.body.removeChild(container);
  }
}

interface MermaidProps {
  chart: string;
  caption?: string;
}

export default function Mermaid({ chart, caption }: MermaidProps) {
  const rawId = useId();
  const mermaidId = rawId.replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Traps Tab focus inside the fullscreen overlay and restores focus to the trigger on close.
  useFocusTrap(overlayRef, fullscreen);

  // Stage 3.5: IntersectionObserver gates the heavy Mermaid + DOMPurify import (~135 KB gzip)
  // until the diagram placeholder scrolls into the viewport (with 200px margin).
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;

    async function render(isDark: boolean) {
      try {
        // Dynamic import, keeps Mermaid + DOMPurify out of the initial JS bundle
        const [{ default: mermaid }, { default: DOMPurify }] = await Promise.all([
          import("mermaid"),
          import("dompurify"),
        ]);

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

        const id = `mermaid-${mermaidId}`;
        const { svg: rendered } = await mermaid.render(id, insertLabelBreaks(chart.trim()));
        if (!cancelled) {
          setLoading(false);
          // Sanitize SVG output before injecting into the DOM (XSS prevention).
          // foreignObject is kept because Mermaid needs it for node labels.
          const clean = DOMPurify.sanitize(rendered, {
            USE_PROFILES: { svg: true, svgFilters: true },
            // <style> kept: Mermaid stores node fills + label colours there. DOMPurify
            // still sanitizes its CSS. Removing it renders every node as a black box.
            // NOTE: do not try to also allow div/span/p/br for label markup — DOMPurify's
            // namespace-confusion protection strips any HTML-namespaced element inside
            // <foreignObject> regardless of ADD_TAGS/ALLOWED_TAGS (verified: it cannot be
            // safely disabled). Multi-line labels are handled at the source instead, see
            // insertLabelBreaks / AGENTS.md Rule 30.
            ADD_TAGS: ["foreignObject", "style"],
            ADD_ATTR: ["dominant-baseline"],
            FORBID_TAGS: ["script"],
            FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
            SANITIZE_DOM: true,
          });
          setSvg(tightenViewBox(clean));
          setError("");
        }
      } catch (e) {
        if (!cancelled) {
          setLoading(false);
          setError(String(e));
        }
      }
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // Site theme is driven by the `data-theme` attribute (see ThemeToggle.tsx), NOT the OS
    // preference. Read it first; fall back to the OS query only for "system"/unset.
    const isDarkNow = () => {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "dark") return true;
      if (attr === "light") return false;
      return mq.matches;
    };

    render(isDarkNow());

    // Re-render when the user toggles the in-app theme (data-theme attribute flips)
    const observer = new MutationObserver(() => render(isDarkNow()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // Re-render on OS theme change too, covers "system" mode where data-theme is absent
    const onChange = () => render(isDarkNow());
    mq.addEventListener("change", onChange);

    return () => {
      cancelled = true; // prevent stale async render from overwriting a newer one
      observer.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, [visible, chart, mermaidId]); // re-runs when visible, or when chart/id changes

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

  // Synchronously or via requestAnimationFrame, tighten the viewBox of the rendered SVGs in the DOM.
  // This handles the case where getBBox() returned 0 during the string-based tightenViewBox
  // phase because the element was not in the active document layout tree yet.
  useEffect(() => {
    if (!svg) return;

    const adjustViewBox = (container: HTMLDivElement | null) => {
      if (!container) return;
      const svgEl = container.querySelector("svg");
      if (!svgEl) return;

      // Find the main content group
      let content = svgEl.querySelector("g.root");
      if (!content) {
        for (let i = 0; i < svgEl.children.length; i++) {
          const child = svgEl.children[i];
          if (child.tagName.toLowerCase() === "g") {
            content = child;
            break;
          }
        }
      }
      if (!content) {
        content = svgEl.querySelector("g");
      }

      if (!content || !("getBBox" in content)) return;

      try {
        const bbox = (content as unknown as SVGGraphicsElement).getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          const pad = 10;
          svgEl.setAttribute(
            "viewBox",
            `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`
          );
          svgEl.removeAttribute("style");
        }
      } catch (e) {
        console.error("DOM-based viewBox tightening failed:", e);
      }
    };

    // Run layout-dependent adjustment on the next frame to ensure rendering has completed
    const handle = requestAnimationFrame(() => {
      adjustViewBox(ref.current);
      adjustViewBox(fullscreenContainerRef.current);
    });

    return () => cancelAnimationFrame(handle);
  }, [svg, fullscreen]);

  if (loading && !svg && !error) {
    return (
      <div ref={sentinelRef} className="not-prose my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6 animate-pulse" aria-label="Loading diagram">
        <div className="h-4 w-1/3 rounded bg-[var(--border)] mb-4" />
        <div className="h-32 w-full rounded bg-[var(--border)]" />
      </div>
    );
  }

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
            role="img"
            aria-label={caption ?? "Diagram"}
            className="w-full overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6 [&_svg]:w-full [&_svg]:h-auto [&_svg]:mx-auto"
            dangerouslySetInnerHTML={{ __html: svg }} // DOMPurify-sanitized above
          />
          {/* Stage 6.4: visually-hidden chart source as a text alternative for screen readers.
              The Mermaid syntax is readable as pseudocode (node labels, arrows, relationships)
              and conveys the diagram's content far better than aria-label="Diagram". */}
          <details className="sr-only">
            <summary>Diagram source (text description)</summary>
            <pre>{chart.trim()}</pre>
          </details>
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
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm p-6 sm:p-12"
          onClick={() => setFullscreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? "Diagram fullscreen"}
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
            ref={fullscreenContainerRef}
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl w-full max-h-full overflow-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-8 [&_svg]:w-full [&_svg]:h-auto [&_svg]:mx-auto"
            // svg is already DOMPurify-sanitized from the main render path (same state)
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </>
  );
}
