/**
 * ProjectList: renders a lesson's practice projects (typically 2 per lesson,
 * PROJECTS_PLAN.md 2.1).
 *
 * Wrapped in <section id="projects-section">, the anchor the lesson TOC and
 * page header link to (mirrors the id="quiz-section" pattern in Quiz.tsx /
 * MarkComplete.tsx, AGENTS.md Rule 25).
 *
 * Server component: no client-only APIs are used directly in this file.
 * ProjectCard (its child) is "use client", Next.js allows a server
 * component to import a client component without the parent needing the
 * directive itself.
 */

import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects/types";

export default function ProjectList({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  // Small "concept map" nice-to-have: concepts covered by 2+ projects in
  // this list, so a learner can see at a glance what's reinforced twice.
  const conceptCounts = new Map<string, number>();
  for (const p of projects) {
    for (const c of p.conceptsCovered ?? []) {
      conceptCounts.set(c, (conceptCounts.get(c) ?? 0) + 1);
    }
  }
  const overlapping = [...conceptCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([concept]) => concept);

  return (
    <section id="projects-section" className="flex flex-col gap-5 mt-10">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-bold text-[var(--foreground)] m-0">Practice Projects</h2>
        {overlapping.length > 0 && (
          <p className="text-xs text-[var(--muted-foreground)] m-0">
            Reinforced across both projects: {overlapping.join(", ")}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} id={`project-${p.id}`} />
        ))}
      </div>
    </section>
  );
}
