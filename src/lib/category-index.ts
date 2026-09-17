/**
 * Slim category index, a STANDALONE literal, intentionally NOT derived from
 * `CATEGORIES` (Rule 41 / IMPROVEMENT_PLAN #5).
 *
 * Why a hand-written literal instead of `CATEGORIES.map(...)`: the old
 * `CATEGORY_INDEX` in curriculum.ts was `CATEGORIES.map(...)`, which references
 * the full ~148 KB `CATEGORIES` array at init. Because `Nav.tsx` (mounted in the
 * root layout, so on EVERY route) imports the slim index, the bundler could not
 * tree-shake `CATEGORIES` out, the entire curriculum (all 655 lesson summaries)
 * shipped to the client on every page. Materializing the slim data here, with no
 * import of the big module, keeps it out of the client bundle.
 *
 * Drift is prevented by `tests/category-index.test.ts`, which asserts this array
 * matches the values derived from `CATEGORIES` exactly. If you add/rename a
 * category or its lesson count changes, update this literal and the test will
 * confirm it's back in sync. Never change this to `CATEGORIES.map(...)`, that
 * reintroduces the bundle regression.
 */
export type CategoryIndex = { slug: string; title: string; emoji: string; lessonCount: number };

export const CATEGORY_INDEX: CategoryIndex[] = [
  { slug: "fundamentals", title: "Marketing Fundamentals", emoji: "🎯", lessonCount: 40 },
  { slug: "seo", title: "SEO", emoji: "🔎", lessonCount: 38 },
  { slug: "paid-ads", title: "Paid Ads", emoji: "💰", lessonCount: 33 },
  { slug: "growth", title: "Growth Marketing", emoji: "🚀", lessonCount: 30 },
  { slug: "social", title: "Social Media Marketing", emoji: "📱", lessonCount: 31 },
  { slug: "content", title: "Content Marketing", emoji: "✍️", lessonCount: 29 },
  { slug: "email", title: "Email & Lifecycle", emoji: "📧", lessonCount: 33 },
  { slug: "analytics", title: "Analytics & Attribution", emoji: "📊", lessonCount: 36 },
  { slug: "tools", title: "Marketing Tools", emoji: "🛠️", lessonCount: 39 },
  { slug: "psychology", title: "Human Psychology", emoji: "🧠", lessonCount: 29 },
  { slug: "copywriting", title: "Copywriting", emoji: "✍️", lessonCount: 28 },
  { slug: "cro", title: "Conversion Rate Optimization", emoji: "🎯", lessonCount: 28 },
  { slug: "brand-strategy", title: "Brand Strategy", emoji: "🎨", lessonCount: 28 },
  { slug: "product-marketing", title: "Product Marketing", emoji: "📦", lessonCount: 28 },
  { slug: "ai-marketing", title: "AI in Marketing", emoji: "🤖", lessonCount: 36 },
  { slug: "mental-models", title: "Mental Models", emoji: "🧠", lessonCount: 29 },
  { slug: "pr-communications", title: "PR & Communications", emoji: "📢", lessonCount: 28 },
  { slug: "events-experiential", title: "Events & Experiential Marketing", emoji: "🎪", lessonCount: 28 },
  { slug: "affiliate-marketing", title: "Affiliate & Partner Marketing", emoji: "🤝", lessonCount: 28 },
  { slug: "marketing-leadership", title: "Marketing Leadership & Career", emoji: "👔", lessonCount: 28 },
  { slug: "legal-compliance", title: "Legal & Compliance for Marketers", emoji: "⚖️", lessonCount: 28 },
];
