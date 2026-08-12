import type { Metadata } from "next";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import ProjectsClient from "./ProjectsClient";
import PageMasthead from "@/components/PageMasthead";

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

  const stats = [
    { code: "01", value: String(totalProjects), label: `Project${totalProjects === 1 ? "" : "s"}` },
    { code: "02", value: String(categories.size), label: "Categories covered" },
    { code: "03", value: String(companies.size), label: "Case companies, cited" },
    { code: "04", value: totalMinutes >= 60 ? `${Math.round(totalMinutes / 60)}h` : `${totalMinutes}m`, label: "Total practice time" },
  ];

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Field Work"
        right={`${totalProjects} projects · ${companies.size} cited companies`}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Not reading — doing</p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">
          Practice Projects
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-8 font-ui-sans leading-relaxed">
          Reading a lesson tells you the answer.{" "}
          <span className="text-[var(--foreground)] font-medium">
            {totalProjects} hands-on project{totalProjects === 1 ? "" : "s"}
          </span>{" "}
          makes you use it, on a real dashboard, under a clock, with something at stake, every one built on a{" "}
          <span className="text-[var(--foreground)] font-medium">real, cited case company</span>.
        </p>

        {/* Stats — same specimen-row pattern as Home's credibility strip */}
        <div className="border border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--border)] max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="p-4 font-ui-sans">
              <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{s.code}</p>
              <p className="font-display font-semibold text-2xl text-[var(--foreground)]">{s.value}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive client section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProjectsClient projects={PROJECTS_INDEX} />
      </section>
    </>
  );
}
