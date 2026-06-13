export type Track = {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  audience: string;
  duration: string;
  lessons: { category: string; slug: string; title: string }[];
};

export const TRACKS: Track[] = [
  {
    slug: "b2b-marketer",
    title: "B2B Marketing Track",
    emoji: "🏢",
    description:
      "Master the full B2B go-to-market stack: positioning, pipeline, content, email lifecycle, attribution, and product marketing. Built for marketers selling to businesses.",
    audience: "B2B Marketers",
    duration: "16-20 hours",
    lessons: [
      { category: "fundamentals", slug: "what-is-marketing", title: "What Marketing Actually Is" },
      { category: "fundamentals", slug: "stp", title: "Segmentation, Targeting, Positioning" },
      { category: "fundamentals", slug: "value-proposition", title: "The Value Proposition" },
      { category: "fundamentals", slug: "buyer-personas", title: "Buyer Personas (without the fluff)" },
      { category: "fundamentals", slug: "positioning", title: "Positioning" },
      { category: "fundamentals", slug: "customer-journey", title: "The Customer Journey" },
      { category: "product-marketing", slug: "pmm-101", title: "Product Marketing 101" },
      { category: "product-marketing", slug: "icp", title: "Ideal Customer Profile (ICP)" },
      { category: "product-marketing", slug: "positioning-doc", title: "The Positioning Doc" },
      { category: "product-marketing", slug: "messaging-hierarchy", title: "Messaging Hierarchy" },
      { category: "product-marketing", slug: "launches", title: "Product Launches" },
      { category: "content", slug: "content-strategy", title: "Content Strategy" },
      { category: "content", slug: "case-studies", title: "Case Studies" },
      { category: "content", slug: "webinars", title: "Webinars and Live Content" },
      { category: "email", slug: "automation-drips", title: "Automation & Drip Flows" },
      { category: "email", slug: "cold-email", title: "Cold Email" },
      { category: "analytics", slug: "analytics-101", title: "Analytics 101" },
      { category: "analytics", slug: "attribution-models", title: "Attribution Models" },
    ],
  },
  {
    slug: "ecommerce-growth",
    title: "E-commerce Growth Track",
    emoji: "🛒",
    description:
      "The full paid-to-owned playbook for e-commerce: Google Shopping, Meta ads, abandoned cart flows, retention, CRO, and analytics. Grow revenue from every part of the funnel.",
    audience: "E-commerce Marketers",
    duration: "15-18 hours",
    lessons: [
      { category: "paid-ads", slug: "paid-ads-101", title: "Paid Ads 101" },
      { category: "paid-ads", slug: "google-search-ads", title: "Google Search Ads" },
      { category: "paid-ads", slug: "meta-ads", title: "Meta Ads (Facebook & Instagram)" },
      { category: "paid-ads", slug: "google-shopping-pmax", title: "Google Shopping & Performance Max" },
      { category: "paid-ads", slug: "retargeting", title: "Retargeting" },
      { category: "paid-ads", slug: "creative-testing", title: "Creative Testing" },
      { category: "email", slug: "email-101", title: "Email Marketing 101" },
      { category: "email", slug: "abandoned-cart", title: "Abandoned Cart & Browse Flows" },
      { category: "email", slug: "winback", title: "Win-back Campaigns" },
      { category: "email", slug: "rfm", title: "RFM Segmentation" },
      { category: "growth", slug: "aarrr", title: "AARRR: Pirate Metrics" },
      { category: "growth", slug: "retention-cohorts", title: "Retention & Cohort Analysis" },
      { category: "growth", slug: "ab-testing", title: "A/B Testing & Statistical Significance" },
      { category: "cro", slug: "cro-101", title: "CRO 101" },
      { category: "cro", slug: "landing-page-anatomy", title: "Landing Page Anatomy" },
      { category: "cro", slug: "checkout-optimization", title: "Checkout Optimization" },
      { category: "analytics", slug: "utm-tagging", title: "UTM Tagging" },
      { category: "analytics", slug: "funnel-analytics", title: "Funnel Analytics" },
    ],
  },
  {
    slug: "solo-founder",
    title: "Solo Founder Track",
    emoji: "🚀",
    description:
      "The lean marketing stack for founders doing it all themselves. Skip the fluff, learn the fundamentals that actually drive early traction, and build a repeatable growth system.",
    audience: "Solo Founders",
    duration: "12-15 hours",
    lessons: [
      { category: "fundamentals", slug: "what-is-marketing", title: "What Marketing Actually Is" },
      { category: "fundamentals", slug: "value-proposition", title: "The Value Proposition" },
      { category: "fundamentals", slug: "marketing-math", title: "Marketing Math: CAC, LTV, ROAS, Payback" },
      { category: "fundamentals", slug: "product-market-fit", title: "Product-Market Fit" },
      { category: "seo", slug: "keyword-research", title: "Keyword Research" },
      { category: "seo", slug: "on-page-seo", title: "On-Page SEO" },
      { category: "content", slug: "what-is-content-marketing", title: "What Content Marketing Really Is" },
      { category: "content", slug: "content-strategy", title: "Content Strategy" },
      { category: "email", slug: "email-101", title: "Email Marketing 101" },
      { category: "email", slug: "welcome-series", title: "The Welcome Series" },
      { category: "copywriting", slug: "copywriting-101", title: "Copywriting 101" },
      { category: "copywriting", slug: "headlines", title: "Headline Writing" },
      { category: "growth", slug: "what-is-growth", title: "What Growth Marketing Really Is" },
      { category: "growth", slug: "north-star-metric", title: "The North Star Metric" },
      { category: "analytics", slug: "analytics-101", title: "Analytics 101" },
    ],
  },
  {
    slug: "ai-first-marketer",
    title: "AI-First Marketer Track",
    emoji: "🤖",
    description:
      "Learn how AI is reshaping search, content, and the entire marketing stack. From LLM optimization to AI agents, this track is built for marketers who want to stay ahead of the curve.",
    audience: "AI-Forward Marketers",
    duration: "12-14 hours",
    lessons: [
      { category: "ai-marketing", slug: "ai-marketing-101", title: "AI in Marketing 101" },
      { category: "ai-marketing", slug: "prompt-engineering-marketers", title: "Prompt Engineering for Marketers" },
      { category: "ai-marketing", slug: "ai-content-writing", title: "AI for Content Writing" },
      { category: "ai-marketing", slug: "ai-seo", title: "AI for SEO" },
      { category: "ai-marketing", slug: "ai-email-marketing", title: "AI for Email Marketing" },
      { category: "ai-marketing", slug: "ai-analytics", title: "AI for Analytics & Insights" },
      { category: "ai-marketing", slug: "ai-agents-marketing", title: "AI Agents for Marketing" },
      { category: "ai-marketing", slug: "ai-search-ranking", title: "Ranking Inside AI Answers" },
      { category: "ai-marketing", slug: "rag-for-marketers", title: "RAG for Marketers" },
      { category: "seo", slug: "llmo", title: "LLM Optimization (LLMO)" },
      { category: "seo", slug: "aeo", title: "Answer Engine Optimization (AEO)" },
      { category: "seo", slug: "ai-overviews-geo", title: "AI Overviews & Generative Engine Optimization" },
      { category: "copywriting", slug: "aida-pas-frameworks", title: "AIDA, PAS, and the Core Frameworks" },
      { category: "analytics", slug: "dark-social", title: "Dark Social" },
    ],
  },
];

export function getTrack(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}
