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

// ISR: project detail pages render on demand and cache at the edge instead of
// being pre-rendered into every deployment. This keeps ~800 project pages
// (~142 MB of .rsc + .html) out of the build artifact, which is the single
// biggest contributor to this project's Vercel Deployment Storage. Pages still
// self-canonicalize (see generateMetadata) and stay in the sitemap, so SEO is
// unchanged; the first request to a cold page renders server-side, then caches.
// An unknown slug still 404s via notFound() in the page body below.
export const dynamicParams = true;
export const revalidate = 86400; // re-generate a page at most once per day

export async function generateStaticParams() {
  return []; // prerender none at build; each page is generated on first request
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Practice Projects", item: `${BASE}/projects` },
      { "@type": "ListItem", position: 3, name: row.title, item: `${BASE}/projects/${category}/${slug}` },
    ],
  };

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: row.title,
    description: `A hands-on ${row.archetype} project (~${row.timeMinutes} min) for the "${row.lessonTitle}" lesson.`,
    url: `${BASE}/projects/${category}/${slug}`,
    learningResourceType: "Project",
    educationalUse: "practice",
    timeRequired: `PT${row.timeMinutes}M`,
    isAccessibleForFree: true,
    inLanguage: "en",
    provider: { "@type": "Organization", name: "Marketing Academy", url: BASE },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }} />
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
