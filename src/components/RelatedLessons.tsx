import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";

type Props = {
  currentCategory: string;
  currentSlug: string;
  level: string;
};


type LessonRef = { slug: string; title: string; level: string; categorySlug: string; summary?: string };

export default function RelatedLessons({ currentCategory, currentSlug, level }: Props) {
  const sameCat = CATEGORIES.find((c) => c.slug === currentCategory);
  const sameCatLessons = (sameCat?.lessons ?? [])
    .filter((l) => l.slug !== currentSlug)
    .slice(0, 3);

  let related: LessonRef[] = [];

  if (sameCatLessons.length < 3) {
    const needed = 3 - sameCatLessons.length;
    const existingSlugs = new Set([currentSlug, ...sameCatLessons.map((l) => l.slug)]);

    const fromOtherCats: LessonRef[] = CATEGORIES.filter((c) => c.slug !== currentCategory)
      .flatMap((c) => c.lessons.map((l) => ({ ...l, categorySlug: c.slug })))
      .filter((l) => l.level === level && !existingSlugs.has(l.slug))
      .slice(0, needed);

    related = [
      ...sameCatLessons.map((l) => ({ ...l, categorySlug: currentCategory })),
      ...fromOtherCats,
    ];
  } else {
    related = sameCatLessons.map((l) => ({ ...l, categorySlug: currentCategory }));
  }

  if (related.length === 0) return null;

  return (
    <section style={{ marginTop: "3rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "var(--foreground)",
        }}
      >
        You Might Also Like
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {related.map((lesson) => {
          return (
            <Link
              key={`${lesson.categorySlug}-${lesson.slug}`}
              href={`/learn/${lesson.categorySlug}/${lesson.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="border border-[var(--border)] rounded-xl p-4 hover:border-[var(--accent)] hover:bg-[var(--muted)]/30 transition-all"
                style={{ height: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "9999px",
                    alignSelf: "flex-start",
                    ...(lesson.level === "Beginner"
                      ? { color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 12%, transparent)" }
                      : lesson.level === "Intermediate"
                      ? { color: "#d97706", background: "color-mix(in srgb, #d97706 12%, transparent)" }
                      : { color: "#7c3aed", background: "color-mix(in srgb, #7c3aed 12%, transparent)" }),
                  }}
                >
                  {lesson.level}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--foreground)",
                    lineHeight: 1.35,
                  }}
                >
                  {lesson.title}
                </p>
                <p
                  className="line-clamp-2"
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.5,
                  }}
                >
                  {lesson.summary}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
