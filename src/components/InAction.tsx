import { ExternalLink } from "lucide-react";

/**
 * Renders one "concept scenario" inline in a lesson, right after the heading
 * it illustrates (PROJECTS_PLAN.md section 10, "where is this used, and what
 * did it get them?"). A separate workstream from the practice-projects layer,
 * this changes lesson prose itself, not the practice surface.
 *
 * Design note (Session 76): the plan's preferred mechanism is a build-time
 * rehype plugin that injects this component after matching headings with
 * zero MDX edits (10.5). That was deliberately NOT built this session,
 * AGENTS.md Rule 10 already documents this repo's @next/mdx + Turbopack
 * setup breaking on non-string-tuple plugin forms, and a novel custom rehype
 * transform is real build-break risk with no test coverage to catch it. This
 * component is used the way Callout/Quiz already are: a global MDX component
 * (registered in the root mdx-components.tsx) called directly from the
 * lesson MDX, right after the heading, per the plan's own explicitly-
 * sanctioned fallback (10.5, "a one-time scripted insertion into the MDX").
 * Migrating to build-time injection remains a possible future upgrade.
 *
 * Rule 20 (PROJECTS_PLAN.md 10.9): every scenario needs a cited, dated,
 * quantified outcome, no source, no ship. `source` is therefore required,
 * not optional, and is rendered as a clickable citation link.
 */

type InActionProps = {
  concept: string;
  companyName: string;
  companyId?: string;
  where: string;
  why: string;
  what: string;
  benefit: string;
  timeframe: string;
  date: string;
  source: string;
  counterExample?: string;
};

export default function InAction({
  concept,
  companyName,
  where,
  why,
  what,
  benefit,
  timeframe,
  date,
  source,
  counterExample,
}: InActionProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-4">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(99, 102, 241, 0.12)",
            color: "var(--accent)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          In Action: {concept}
        </span>
        <span className="text-xs text-[var(--muted-foreground)]">
          {companyName} · {date}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-[var(--foreground)] mb-2">
        <span className="text-[var(--muted-foreground)]">{where} </span>
        {why} {what}
      </p>

      <p className="text-sm leading-relaxed text-[var(--foreground)]">
        <span className="font-semibold">Result: </span>
        {benefit}
        <span className="text-[var(--muted-foreground)]"> ({timeframe}).</span>
      </p>

      {counterExample && (
        <p className="text-sm leading-relaxed text-[var(--foreground)] mt-2 pt-2 border-t border-[var(--border)]">
          <span className="font-semibold">Cost of skipping it: </span>
          {counterExample}
        </p>
      )}

      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs mt-3 text-[var(--accent)] hover:underline"
      >
        Source <ExternalLink size={11} />
      </a>
    </div>
  );
}
