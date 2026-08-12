/**
 * Concept map table shown at the top of a lesson's projects section:
 * "Concept from this lesson | Practice it in".
 *
 * Flattens `step.concept` across every project's `steps[]` (diagnostic/audit/
 * teardown-shaped projects), dedupes by concept, and lists every place
 * (project title + step number) that concept is practiced, e.g.
 * "Crawlability" → "Technical SEO Audit, step 1".
 *
 * Projects with no `steps[]` (simulation-mode stages, teardown-mode
 * teardownItems, or a bespoke build/drill/calibration shape) have nothing to
 * flatten here and are skipped entirely, this table is specifically for
 * diagnostic-shaped projects.
 *
 * Server component, no client-only APIs needed.
 */

import type { Project } from "@/lib/projects/types";

type Props = {
  projects: Project[];
};

export default function ConceptMap({ projects }: Props) {
  // Preserves first-seen order; a concept can recur across multiple steps
  // and/or multiple projects, so each concept collects a list of locations.
  const byConcept = new Map<string, string[]>();

  for (const project of projects) {
    if (!project.steps || project.steps.length === 0) continue; // skip non-diagnostic-shaped projects
    project.steps.forEach((step, index) => {
      const location = `${project.title}, step ${index + 1}`;
      const existing = byConcept.get(step.concept);
      if (existing) {
        existing.push(location);
      } else {
        byConcept.set(step.concept, [location]);
      }
    });
  }

  if (byConcept.size === 0) return null; // no diagnostic-shaped project on this lesson

  const entries = Array.from(byConcept.entries());

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden mb-6">
      <div className="px-4 py-3 border-b border-[var(--border)]">
        <p className="text-sm font-semibold text-[var(--foreground)]">
          Where you&apos;ll practice each concept
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--muted)] text-left">
              <th className="px-4 py-2 font-semibold text-[var(--foreground)]">Concept from this lesson</th>
              <th className="px-4 py-2 font-semibold text-[var(--foreground)]">Practice it in</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([concept, locations]) => (
              <tr key={concept} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 text-[var(--foreground)] align-top font-medium">{concept}</td>
                <td className="px-4 py-2 text-[var(--muted-foreground)] align-top">
                  {locations.join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
