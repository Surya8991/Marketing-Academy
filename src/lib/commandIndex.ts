import { CATEGORIES } from "@/lib/curriculum";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { TOOLS } from "@/lib/tools-directory";

export type CommandEntry = {
  id: string;
  type: "lesson" | "glossary" | "tool" | "nav";
  title: string;
  subtitle?: string;
  href: string;
};

const NAV_ENTRIES: CommandEntry[] = [
  { id: "nav-home",         type: "nav", title: "Home",          href: "/" },
  { id: "nav-learn",        type: "nav", title: "Learn All",     href: "/learn" },
  { id: "nav-tracks",       type: "nav", title: "Tracks",        href: "/tracks" },
  { id: "nav-glossary",     type: "nav", title: "Glossary",      href: "/glossary" },
  { id: "nav-tools",        type: "nav", title: "Tools",         href: "/tools" },
  { id: "nav-search",       type: "nav", title: "Search",        href: "/search" },
  { id: "nav-achievements", type: "nav", title: "Achievements",  href: "/achievements" },
  { id: "nav-skill-map",    type: "nav", title: "Skill Map",     href: "/skill-map" },
];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function buildCommandIndex(): CommandEntry[] {
  const lessons: CommandEntry[] = CATEGORIES.flatMap((cat) =>
    cat.lessons.map((l) => ({
      id: `lesson-${cat.slug}/${l.slug}`,
      type: "lesson" as const,
      title: l.title,
      subtitle: cat.title,
      href: `/learn/${cat.slug}/${l.slug}`,
    }))
  );

  const glossary: CommandEntry[] = GLOSSARY_TERMS.map((g) => ({
    id: `glossary-${g.slug}`,
    type: "glossary" as const,
    title: g.term,
    subtitle: g.definition.slice(0, 60) + "...",
    href: `/glossary/${g.slug}`,
  }));

  const tools: CommandEntry[] = TOOLS.map((t) => {
    const slug = toSlug(t.name);
    return {
      id: `tool-${slug}`,
      type: "tool" as const,
      title: t.name,
      subtitle: t.category,
      href: `/tools#${slug}`,
    };
  });

  return [...NAV_ENTRIES, ...lessons, ...glossary, ...tools];
}

export const COMMAND_INDEX: CommandEntry[] = buildCommandIndex();
