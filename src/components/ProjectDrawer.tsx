"use client";

/**
 * ProjectDrawer: slide-over that shows ONE full Project.
 *
 * Load-bearing behavior (AGENTS.md Rule 41): the /projects hub's client
 * bundle (ProjectsClient.tsx, page.tsx) only ever imports the SLIM
 * ProjectCardData rows from src/lib/projects-index.ts. It never statically
 * imports a src/lib/projects/[category].ts module. This file is the ONLY
 * place that touches a category module, and it does so with a dynamic
 * `import()` fired on open, so a hub visitor who never opens a drawer never
 * downloads any project's full step/stage/teardown data, only the one
 * category the learner actually clicked into.
 *
 * A category module's shape is `Record<string, Project[]>` (lesson slug ->
 * that lesson's projects, see paid-ads.ts). This drawer only has
 * `projectId` + `category`, not the lesson slug, so once the module loads
 * it searches every lesson's array in that module for the matching
 * `project.id`. Export lookup uses the same convention + fallback as
 * scripts/build-projects-index.mjs: try `<CATEGORY>_PROJECTS` by name
 * first, then fall back to the first export shaped like
 * `Record<string, Project[]>`.
 */

import { useEffect, useRef, useState } from "react";
import { X, Loader2, AlertTriangle } from "lucide-react";
import type { Project } from "@/lib/projects/types";
import ProjectCard from "./ProjectCard";

type Props = {
  projectId: string;
  category: string;
  onClose: () => void;
};

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; project: Project };

function expectedExportName(category: string) {
  return `${category.toUpperCase().replace(/-/g, "_")}_PROJECTS`;
}

/** Same shape-matching fallback as the build script, see its header comment. */
function findProjectsExport(moduleExports: Record<string, unknown>, preferredName: string) {
  if (moduleExports[preferredName]) return moduleExports[preferredName] as Record<string, Project[]>;

  for (const value of Object.values(moduleExports)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.values(value as Record<string, unknown>).every((v) => Array.isArray(v))
    ) {
      return value as Record<string, Project[]>;
    }
  }
  return null;
}

export default function ProjectDrawer({ projectId, category, onClose }: Props) {
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const dialogRef = useRef<HTMLDivElement>(null);

  // Dynamic, on-demand import of just this one category's project module.
  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    import(`@/lib/projects/${category}`)
      .then((mod) => {
        if (cancelled) return;
        const projectsBySlug = findProjectsExport(mod as Record<string, unknown>, expectedExportName(category));
        if (!projectsBySlug) {
          setState({ status: "error", message: `No project data found for category "${category}".` });
          return;
        }
        const found = Object.values(projectsBySlug)
          .flat()
          .find((p) => p.id === projectId);

        if (!found) {
          setState({ status: "error", message: "This project couldn't be found. It may have been moved or renamed." });
          return;
        }
        setState({ status: "ready", project: found });
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: "error", message: `Couldn't load projects for category "${category}".` });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [category, projectId]);

  // Esc closes, matching OnboardingModal/CommandPalette's convention. Locks body scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        display: "flex",
        justifyContent: "flex-end",
        background: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          width: "100%",
          maxWidth: 640,
          height: "100%",
          overflowY: "auto",
          borderLeft: "1px solid var(--border)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 sticky top-0"
          style={{ background: "var(--background)", borderBottom: "1px solid var(--border)", zIndex: 1 }}
        >
          <span className="text-sm font-semibold text-[var(--muted-foreground)]">Project details</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center justify-center rounded-lg p-1.5 hover:bg-[var(--muted)] transition-colors"
            style={{ color: "var(--foreground)" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {state.status === "loading" && (
            <div className="flex items-center justify-center gap-2 py-16 text-[var(--muted-foreground)]">
              <Loader2 size={18} className="animate-spin" />
              Loading project...
            </div>
          )}

          {state.status === "error" && (
            <div
              className="flex items-start gap-2.5 rounded-lg p-4"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}
            >
              <AlertTriangle size={16} className="shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
              <p className="text-sm text-[var(--foreground)] m-0">{state.message}</p>
            </div>
          )}

          {state.status === "ready" && <ProjectCard project={state.project} />}
        </div>
      </div>
    </div>
  );
}
