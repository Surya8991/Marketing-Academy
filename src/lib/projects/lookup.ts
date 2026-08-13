/**
 * Server-safe lookup for ONE full Project by category + id, used by the
 * dedicated project detail page (src/app/projects/[category]/[slug]/page.tsx).
 *
 * A category module's shape is `Record<lessonSlug, Project[]>` (see
 * src/lib/projects/seo.ts), so finding a project by its own `id` means
 * flattening every lesson's array in that one category and searching it.
 * Export lookup mirrors scripts/build-projects-index.mjs: try
 * `<CATEGORY>_PROJECTS` by name first, then fall back to the first export
 * shaped like `Record<string, Project[]>`.
 */

import type { Project } from "./types";

function expectedExportName(category: string) {
  return `${category.toUpperCase().replace(/-/g, "_")}_PROJECTS`;
}

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

export async function getProjectByCategoryAndId(category: string, id: string): Promise<Project | null> {
  try {
    const mod = await import(`@/lib/projects/${category}`);
    const projectsBySlug = findProjectsExport(mod as Record<string, unknown>, expectedExportName(category));
    if (!projectsBySlug) return null;
    return Object.values(projectsBySlug).flat().find((p) => p.id === id) ?? null;
  } catch {
    return null;
  }
}
