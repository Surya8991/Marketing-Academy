import type { Metadata } from "next";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Practice Projects | Marketing Academy",
  description:
    `Hands-on practice projects tied to real lessons: ${PROJECTS_INDEX.length}+ diagnostics, simulations, teardowns, and builds set against real, cited company case studies. Free-tool path on every one.`,
  openGraph: {
    title: "Practice Projects | Marketing Academy",
    description:
      `Hands-on practice projects tied to real lessons: ${PROJECTS_INDEX.length}+ diagnostics, simulations, teardowns, and builds set against real, cited company case studies.`,
    type: "website",
  },
};

export default function ProjectsPage() {
  const totalProjects = PROJECTS_INDEX.length;
  const categories = new Set(PROJECTS_INDEX.map((p) => p.category));
  const companies = new Set(PROJECTS_INDEX.map((p) => p.companyId));
  const totalMinutes = PROJECTS_INDEX.reduce((sum, p) => sum + p.timeMinutes, 0);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
            Practice Projects
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Reading a lesson tells you the answer.{" "}
            <span className="text-[var(--foreground)] font-medium">
              {totalProjects} hands-on project{totalProjects === 1 ? "" : "s"}
            </span>{" "}
            makes you use it, on a real dashboard, under a clock, with something at stake, every one built on a{" "}
            <span className="text-[var(--foreground)] font-medium">real, cited case company</span>.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">{totalProjects}</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">Projects</div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">{categories.size}</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">Categories covered</div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">{companies.size}</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">Case companies</div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {totalMinutes >= 60 ? `${Math.round(totalMinutes / 60)}h` : `${totalMinutes}m`}
            </div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">Total practice time</div>
          </div>
        </div>
      </section>

      {/* Interactive client section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProjectsClient projects={PROJECTS_INDEX} />
      </section>
    </div>
  );
}
