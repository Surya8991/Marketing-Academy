"use client";

/**
 * ProjectList: renders a lesson's practice projects (typically 2 per lesson,
 * PROJECTS_PLAN.md 2.1).
 *
 * Wrapped in <section id="projects-section">, the anchor the lesson TOC and
 * page header link to (mirrors the id="quiz-section" pattern in Quiz.tsx /
 * MarkComplete.tsx, AGENTS.md Rule 25).
 *
 * Collapsed by default: the lesson page accumulated a lot of post-content
 * sections (resources, quiz, projects, notes, related, prev/next), so this
 * section starts closed behind a one-line summary + toggle rather than
 * rendering both full project cards open on page load. Each ProjectCard's
 * own internal expand/collapse state (its "Open project" button) is
 * unaffected by this outer toggle.
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, ClipboardList } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects/types";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);

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

  const totalMinutes = projects.reduce((sum, p) => sum + p.timeMinutes, 0);

  return (
    <section id="projects-section">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 text-left rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 hover:border-[var(--accent)] transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <ClipboardList size={18} className="shrink-0 text-[var(--accent)]" />
          <div className="min-w-0">
            <h2 className="text-base font-bold text-[var(--foreground)] m-0">Practice Projects</h2>
            <p className="text-xs text-[var(--muted-foreground)] m-0 truncate">
              {projects.length} project{projects.length === 1 ? "" : "s"} · ~{totalMinutes} min total
              {overlapping.length > 0 && ` · reinforces ${overlapping[0]}`}
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp size={18} className="shrink-0 text-[var(--muted-foreground)]" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-[var(--muted-foreground)]" />
        )}
      </button>

      {open && (
        <div className="flex flex-col gap-4 mt-4">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.id} id={`project-${p.id}`} />
          ))}
        </div>
      )}
    </section>
  );
}
