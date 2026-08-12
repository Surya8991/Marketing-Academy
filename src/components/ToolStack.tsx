/**
 * ToolStack: renders a Project's `toolStack` (free[] + paid[] ToolRef arrays).
 *
 * Layout per PROJECTS_PLAN.md 2.4's ASCII mock:
 *   "Free path (everything below is enough to finish)"  <- always non-empty,
 *   see AGENTS.md Rule 37 / PROJECTS_PLAN.md checklist item 12, a project
 *   that can't be finished on the free list alone is mis-specified.
 *   "Paid upgrades (optional, faster/deeper)"            <- may be empty.
 *
 * Each ToolRef.toolName is looked up against TOOLS (tools-directory.ts) by
 * name (PROJECTS_PLAN.md checklist item 11: "Every toolName resolves in
 * TOOLS, or carries inlineUrl + inlinePricing"). When found, we show the
 * directory's emoji/pricing and link into the /tools directory page (there
 * is no per-tool route yet, so the directory listing itself is "the /tools
 * entry"). When not found, we fall back to ToolRef.inlineUrl/inlinePricing,
 * and to a letter-avatar in place of an emoji.
 *
 * No "use client" needed here: no state, no event handlers, only a fully
 * static <a> for pricing/emoji resolution. The component that imports this
 * (ProjectCard) is a client component, that's fine per Next's server-can-
 * import-client rule (and this file needs none of that itself).
 */

import { TOOLS, type PricingTier } from "@/lib/tools-directory";
import type { ToolRef, ToolStack as ToolStackType } from "@/lib/projects/types";

const pricingStyles: Record<PricingTier, React.CSSProperties> = {
  Free: { background: "rgba(22, 163, 74, 0.15)", color: "var(--foreground)", border: "1px solid rgba(22, 163, 74, 0.35)" },
  Freemium: { background: "rgba(59, 130, 246, 0.15)", color: "var(--foreground)", border: "1px solid rgba(59, 130, 246, 0.35)" },
  Paid: { background: "rgba(217, 119, 6, 0.15)", color: "var(--foreground)", border: "1px solid rgba(217, 119, 6, 0.35)" },
  "Open Source": { background: "rgba(147, 51, 234, 0.15)", color: "var(--foreground)", border: "1px solid rgba(147, 51, 234, 0.35)" },
};

function letterAvatar(name: string) {
  const letter = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "9999px",
        background: "var(--accent)",
        color: "var(--accent-foreground)",
        fontSize: "0.85rem",
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {letter}
    </span>
  );
}

function ToolRow({ tool }: { tool: ToolRef }) {
  const matched = TOOLS.find((t) => t.name === tool.toolName);
  const pricing: PricingTier | undefined = matched?.pricing ?? tool.inlinePricing;
  const href = matched ? "/tools" : tool.inlineUrl;

  return (
    <div
      className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-3 p-3 rounded-lg"
      style={{ border: "1px solid var(--border)", background: "var(--card)" }}
    >
      <div className="flex items-center gap-2 sm:w-48 sm:shrink-0">
        {matched ? (
          <span style={{ fontSize: "1.4rem", lineHeight: 1 }} aria-hidden="true">
            {matched.emoji}
          </span>
        ) : (
          letterAvatar(tool.toolName)
        )}
        {href ? (
          <a
            href={href}
            target={matched ? undefined : "_blank"}
            rel={matched ? undefined : "noopener noreferrer"}
            className="font-semibold text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors underline-offset-2 hover:underline"
          >
            {tool.toolName}
          </a>
        ) : (
          <span className="font-semibold text-sm text-[var(--foreground)]">{tool.toolName}</span>
        )}
        {!tool.required && (
          <span className="text-[0.68rem] text-[var(--muted-foreground)]">(optional)</span>
        )}
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          {pricing && (
            <span
              style={{
                padding: "0.15rem 0.55rem",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 700,
                ...pricingStyles[pricing],
              }}
            >
              {pricing}
            </span>
          )}
          <span className="text-xs font-medium text-[var(--muted-foreground)]">{tool.role}</span>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed m-0">{tool.why}</p>
        {tool.fallback && (
          <p className="text-[0.7rem] italic text-[var(--muted-foreground)] m-0">
            No access? {tool.fallback}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ToolStack({ stack }: { stack: ToolStackType }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-bold text-[var(--foreground)] m-0">
          Free path <span className="font-normal text-[var(--muted-foreground)]">(everything below is enough to finish)</span>
        </h4>
        <div className="flex flex-col gap-2">
          {stack.free.map((tool) => (
            <ToolRow key={tool.toolName} tool={tool} />
          ))}
        </div>
      </div>

      {stack.paid.length > 0 && (
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-bold text-[var(--foreground)] m-0">
            Paid upgrades <span className="font-normal text-[var(--muted-foreground)]">(optional, faster/deeper)</span>
          </h4>
          {stack.paidUpgradeNote && (
            <p className="text-xs text-[var(--muted-foreground)] italic m-0">{stack.paidUpgradeNote}</p>
          )}
          <div className="flex flex-col gap-2">
            {stack.paid.map((tool) => (
              <ToolRow key={tool.toolName} tool={tool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
