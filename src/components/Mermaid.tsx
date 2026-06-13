"use client";
import { useEffect, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
  caption?: string;
}

export default function Mermaid({ chart, caption }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render(isDark: boolean) {
      try {
        const mermaid = (await import("mermaid")).default;

        // Pull live token values so diagrams match the active theme.
        const css = getComputedStyle(document.documentElement);
        const fg = css.getPropertyValue("--foreground").trim() || (isDark ? "#f4f4f5" : "#0a0a0a");
        const muted = css.getPropertyValue("--muted").trim() || (isDark ? "#18181b" : "#f5f5f5");
        const border = css.getPropertyValue("--border").trim() || (isDark ? "#2a2a30" : "#e5e7eb");
        const accent = css.getPropertyValue("--accent").trim() || (isDark ? "#a5b4fc" : "#6366f1");

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
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
          setSvg(rendered);
          setError("");
        }
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    render(mq.matches);

    const onChange = (e: MediaQueryListEvent) => render(e.matches);
    mq.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      mq.removeEventListener("change", onChange);
    };
  }, [chart]);

  if (error) {
    return (
      <div className="not-prose my-6 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-4 text-sm text-red-600">
        <p className="font-medium">Diagram error</p>
        <pre className="mt-1 text-xs overflow-auto whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  return (
    <figure className="my-8 flex flex-col items-center not-prose">
      <div
        ref={ref}
        className="w-full overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6 [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[var(--muted-foreground)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
