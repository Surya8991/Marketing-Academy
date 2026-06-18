import type { Metadata } from "next";
import { ExternalLink, BookOpen, Users } from "lucide-react";
import { RESOURCES, BOOKS, COMMUNITIES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Curated Resources | Marketing Academy",
  description:
    "Every newsletter, course, channel, and community worth your time. Curated picks for marketers - no noise.",
};

const TIER_STYLES: Record<string, { bg: string; fg: string; label: string }> = {
  daily: { bg: "rgb(239 68 68 / 0.12)", fg: "rgb(239 68 68)", label: "daily" },
  weekly: { bg: "var(--accent)", fg: "var(--accent-foreground)", label: "weekly" },
  deep: { bg: "rgb(59 130 246 / 0.12)", fg: "rgb(59 130 246)", label: "deep" },
  tool: { bg: "rgb(245 158 11 / 0.12)", fg: "rgb(245 158 11)", label: "tool" },
};

const COST_STYLES: Record<string, { bg: string; fg: string }> = {
  free: { bg: "rgb(16 185 129 / 0.12)", fg: "rgb(16 185 129)" },
  paid: { bg: "rgb(245 158 11 / 0.12)", fg: "rgb(245 158 11)" },
  freemium: { bg: "var(--muted)", fg: "var(--muted-foreground)" },
};

const hoverCSS = `
  .res-row:hover { border-color: var(--accent); background: var(--muted); }
  .res-row:hover .res-name { color: var(--accent); }
  .res-row:hover .res-arrow { opacity: 1; }
  .book-card:hover { border-color: var(--accent); }
  .community-card:hover { border-color: var(--accent); background: var(--muted); }
  .community-card:hover .community-name { color: var(--accent); }
`;

export default function ResourcesPage() {
  const categories = Array.from(new Set(RESOURCES.map((r) => r.category)));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />

      {/* Hero */}
      <div className="mb-14">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
          Library
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
          Curated marketing resources.
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          Every newsletter, blog, channel, and community we actually recommend. No filler, no
          affiliate spam. Tiered by how often you should check them: daily, weekly, deep-read,
          or single-use tool.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-12">
        {(["daily", "weekly", "deep", "tool"] as const).map((t) => {
          const s = TIER_STYLES[t];
          return (
            <span
              key={t}
              className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: s.bg, color: s.fg }}
            >
              {s.label}
            </span>
          );
        })}
        {(["free", "paid", "freemium"] as const).map((c) => {
          const s = COST_STYLES[c];
          return (
            <span
              key={c}
              className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: s.bg, color: s.fg }}
            >
              {c}
            </span>
          );
        })}
      </div>

      {/* Resource categories */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="text-2xl font-bold mb-4">{cat}</h2>
            <div className="space-y-2">
              {RESOURCES.filter((r) => r.category === cat).map((r) => {
                const tier = TIER_STYLES[r.tier];
                const cost = COST_STYLES[r.cost];
                return (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="res-row flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all"
                  >
                    <span
                      className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0"
                      style={{ background: tier.bg, color: tier.fg }}
                    >
                      {tier.label}
                    </span>
                    <span
                      className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0"
                      style={{ background: cost.bg, color: cost.fg }}
                    >
                      {r.cost}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="res-name text-sm font-medium text-[var(--foreground)] transition-colors truncate">
                        {r.name}
                      </p>
                      {r.note && (
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5 line-clamp-1">
                          {r.note}
                        </p>
                      )}
                    </div>
                    <ExternalLink
                      size={13}
                      className="res-arrow text-[var(--muted-foreground)] shrink-0 opacity-0 transition-opacity"
                    />
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Books */}
      <section className="mt-16 mb-14">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
          Reading list
        </p>
        <h2 className="text-2xl font-bold mb-1">Books (1 per month)</h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          Five books that pay back the reading time. Sequence matters - do them in month order.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {BOOKS.map((b) => (
            <div
              key={b.name}
              className="book-card p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ background: "var(--muted)", color: "var(--accent)" }}
                >
                  <BookOpen size={18} strokeWidth={2} />
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                >
                  Month {b.month}
                </span>
              </div>
              <h3 className="font-bold text-base leading-tight mb-1">{b.name}</h3>
              <p className="text-xs text-[var(--muted-foreground)] mb-2">by {b.author}</p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{b.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Communities */}
      <section className="mb-14">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
          Network
        </p>
        <h2 className="text-2xl font-bold mb-1">Communities</h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          Join two, not seven. Every Slack you join is a tax on your attention.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {COMMUNITIES.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="community-card flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all"
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0"
                style={{ background: "var(--muted)", color: "var(--accent)" }}
              >
                <Users size={16} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="community-name font-semibold text-sm transition-colors">
                  {c.name}
                </p>
                {c.note && (
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5 leading-relaxed">
                    {c.note}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
