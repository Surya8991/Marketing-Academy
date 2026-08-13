import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import { getProjectByCategoryAndId } from "@/lib/projects/lookup";
import { getCategory } from "@/lib/curriculum";
import PageMasthead from "@/components/PageMasthead";
import ProjectCard from "@/components/ProjectCard";

type Props = { params: Promise<{ category: string; slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return PROJECTS_INDEX.map((p) => ({ category: p.category, slug: p.id }));
}

const BASE = "https://marketing-academy-roan.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const row = PROJECTS_INDEX.find((p) => p.category === category && p.id === slug);
  if (!row) return {};

  const title = `${row.title} | Marketing Academy Projects`;
  const description = `A hands-on ${row.archetype} project (~${row.timeMinutes} min) for the "${row.lessonTitle}" lesson.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/projects/${category}/${slug}` },
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const row = PROJECTS_INDEX.find((p) => p.category === category && p.id === slug);
  if (!row) notFound();

  const project = await getProjectByCategoryAndId(category, slug);
  if (!project) notFound();

  const categoryTitle = getCategory(category)?.title ?? category;

  return (
    <>
      <PageMasthead left="Marketing Academy · Field Work" right={categoryTitle} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted-foreground)]">
          <Link href="/projects" className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
            <ChevronLeft size={14} />
            All projects
          </Link>
          <span>&middot;</span>
          <Link
            href={`/learn/${category}/${row.lessonSlug}#project-${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            From: {row.lessonTitle}
          </Link>
        </div>

        <ProjectCard project={project} variant="full" />
      </section>
    </>
  );
}
