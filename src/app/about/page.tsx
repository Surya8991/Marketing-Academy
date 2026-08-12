import Link from "next/link";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { TOOLS } from "@/lib/tools-directory";
import { TRACKS } from "@/lib/tracks";
import PageMasthead from "@/components/PageMasthead";

export const metadata: Metadata = {
  title: "About | Marketing Academy",
  description:
    // uniqueLessonCount() (642), not flatLessons().length (655, double-counts
    // the 13 cross-listed lessons), per AGENTS.md Rule 43 (Stage 2.1).
    `Marketing Academy is a free, structured marketing education site built by Surya L from Bangalore. ${uniqueLessonCount()} lessons across ${CATEGORIES.length} disciplines, no paywalls, no email required.`,
};

const hoverCSS = `
  .stat-card:hover { border-color: var(--accent); }
  .project-card:hover { border-color: var(--accent); background: var(--muted); }
  .tech-pill:hover { border-color: var(--accent); color: var(--foreground); }
`;

const TECH = [
  "Next.js 16 (App Router)",
  "TypeScript 5",
  "Tailwind CSS v4",
  "MDX via @next/mdx",
  "Fuse.js",
  "Mermaid",
  "Lucide React",
  "Vercel",
];

const PROJECTS = [
  {
    name: "ResumeBuildz",
    description: "Free ATS-friendly resume builder with 20 templates, AI assistant, and multi-format export.",
    url: "https://github.com/Surya8991/ResumeBuildz",
    lang: "TypeScript",
  },
  {
    name: "Email Automator",
    description: "Automated email workflow tool built with TypeScript.",
    url: "https://github.com/Surya8991/Email-Automator",
    lang: "TypeScript",
  },
  {
    name: "Polymath",
    description: "Multi-discipline learning project.",
    url: "https://github.com/Surya8991/Polymath",
    lang: "TypeScript",
  },
];

export default function AboutPage() {
  const STATS = [
    { code: "01", value: String(uniqueLessonCount()), label: "Free lessons" },
    { code: "02", value: String(CATEGORIES.length), label: "Disciplines" },
    { code: "03", value: String(GLOSSARY_TERMS.length), label: "Glossary terms" },
    { code: "04", value: String(TOOLS.length), label: "Tools catalogued" },
    { code: "05", value: String(TRACKS.length), label: "Learning tracks" },
    { code: "06", value: "$0", label: "Cost forever" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
      <PageMasthead left="Marketing Academy · Masthead" right="Built solo, open source" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Hero */}
        <div className="mb-12">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-3">
            About
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight leading-[1.1] mb-5 text-balance">
            Marketing education that actually teaches you marketing.
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
            Marketing Academy exists because the internet has too many $997 courses and not enough plain-English explanations.
            Every lesson here is free, research-backed, and written to give you real understanding, not just a checklist.
          </p>
        </div>

        {/* Stats — specimen row, consistent with the other redesigned pages */}
        <div className="border border-[var(--border)] grid grid-cols-3 sm:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-[var(--border)] mb-14">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card p-3.5 text-center transition-colors font-ui-sans">
              <p className="font-data text-[0.6rem] text-[var(--muted-foreground)] mb-1">{s.code}</p>
              <p className="font-display font-semibold text-xl text-[var(--accent)]">{s.value}</p>
              <p className="text-[0.68rem] text-[var(--muted-foreground)] mt-0.5 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section className="mb-14">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">§1</p>
          <h2 className="font-display font-semibold text-2xl mb-4">The Mission</h2>
          <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
            <p>
              Good marketing education is hard to find. Most free content is shallow SEO bait.
              Most paid courses package beginner knowledge in premium wrappers. The gap between
              &ldquo;I watched a YouTube video&rdquo; and &ldquo;I can actually do this&rdquo; is huge.
            </p>
            <p>
              Marketing Academy is an attempt to close that gap. Every lesson is written from
              scratch, uses real research and real company examples, and progresses from
              fundamentals to advanced in a logical sequence. No fluff, no upsells.
            </p>
            <p>
              Every lesson also includes multilingual resources in Hindi, Tamil, and Telugu,
              because quality marketing education should be accessible to learners across India,
              not just English-first audiences.
            </p>
          </div>
        </section>

        {/* Builder */}
        <section className="mb-14">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">§2</p>
          <h2 className="font-display font-semibold text-2xl mb-6">Who Built This</h2>
          <div className="flex items-start gap-5 p-6 border border-[var(--border)] rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/85568108?v=4"
              alt="Surya L"
              width={72}
              height={72}
              className="rounded-full shrink-0 border-2 border-[var(--border)]"
            />
            <div className="min-w-0 font-ui-sans">
              <h3 className="font-display font-semibold text-lg leading-tight">Surya L</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">
                Bangalore, India: Web developer and marketing enthusiast.
              </p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                Built Marketing Academy to combine a passion for web development with a belief
                that structured, free marketing education should exist on the internet, no
                paywalls, no email required, no bias toward any tool or platform.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Surya8991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink size={15} />
                  Surya8991
                </a>
                <a
                  href="https://twitter.com/SURYA_L1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink size={15} />
                  @SURYA_L1998
                </a>
                <a
                  href="https://ivy-cave-ef2.notion.site/Surya-L-147e68f554e280e2809fdf88d75dc950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink size={15} />
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-14 font-ui-sans">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">§3</p>
          <h2 className="font-display font-semibold text-2xl mb-4">Built With</h2>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t) => (
              <span
                key={t}
                className="tech-pill px-3 py-1.5 rounded-full border border-[var(--border)] text-sm text-[var(--muted-foreground)] transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mt-4 leading-relaxed">
            All content is written in MDX and lives in the repo alongside the code.
            The full source is open, read the lessons, copy the patterns, fork it if you want.
          </p>
        </section>

        {/* Other projects */}
        <section className="mb-14 font-ui-sans">
          <h2 className="text-lg font-semibold mb-1 text-[var(--muted-foreground)] font-display">Other Projects</h2>
          <p className="text-[var(--muted-foreground)] text-sm mb-4">
            A few other things built along the way.
          </p>
          <div className="flex flex-col gap-2">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card flex items-center justify-between gap-4 px-4 py-3 border border-[var(--border)] rounded-lg transition-all"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium text-sm">{p.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] shrink-0">
                    {p.lang}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] truncate hidden sm:block">{p.description}</span>
                </div>
                <ExternalLink size={13} className="shrink-0 text-[var(--muted-foreground)]" />
              </a>
            ))}
            <a
              href="https://github.com/Surya8991?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors mt-1"
            >
              <ExternalLink size={12} />
              All repositories on GitHub
              <ArrowRight size={11} />
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 font-ui-sans">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
          >
            <BookOpen size={16} />
            Start Learning
          </Link>
          <a
            href="https://github.com/Surya8991/Marketing-Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] font-medium hover:border-[var(--accent)] transition-colors text-sm"
          >
            <ExternalLink size={16} />
            View Source on GitHub
          </a>
        </div>
      </div>
    </>
  );
}
