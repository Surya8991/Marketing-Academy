import type { Metadata } from "next";
import Link from "next/link";
import CompareSelector from "./CompareSelector";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tool Comparisons | Marketing Academy",
  description:
    "Compare top marketing tools side-by-side. Get structured, data-driven comparisons for SEO, paid advertising, email marketing, analytics, social media, and testing tools.",
};

const hoverCSS = `
  .compare-link-card:hover {
    border-color: var(--accent) !important;
    box-shadow: 0 4px 20px rgba(99,102,241,0.12);
    transform: translateY(-2px);
  }
`;

const POPULAR_COMPARISONS = [
  {
    title: "SEMrush vs Ahrefs",
    category: "SEO",
    description: "The two giants of search engine marketing. Compare backlink indexing, keyword volume accuracy, and technical auditing.",
    slug: "semrush-vs-ahrefs",
    emojis: ["📊", "🕷️"],
  },
  {
    title: "Mailchimp vs Klaviyo",
    category: "Email & CRM",
    description: "Standard newsletter broadcasting vs. hyper-targeted behavioral automation. Discover which fits your business type.",
    slug: "mailchimp-vs-klaviyo",
    emojis: ["🐵", "📧"],
  },
  {
    title: "GA4 vs Mixpanel",
    category: "Analytics",
    description: "Google's pageview tracking vs. event-based user cohort retention analysis. Learn when to use web analytics vs. product analytics.",
    slug: "google-analytics-4-vs-mixpanel",
    emojis: ["📈", "📊"],
  },
  {
    title: "ChatGPT vs Claude",
    category: "AI Marketing",
    description: "Advanced text workflows, scripting, and multimodal tools. Compare OpenAI's GPT models vs. Anthropic's Claude.",
    slug: "chatgpt-vs-claude",
    emojis: ["🤖", "🧠"],
  },
  {
    title: "Buffer vs Hootsuite",
    category: "Social Media",
    description: "Simple, budget-friendly multi-channel scheduler vs. enterprise-grade publishing and social listening hubs.",
    slug: "buffer-vs-hootsuite",
    emojis: ["🗂️", "🦉"],
  },
  {
    title: "Optimizely vs VWO",
    category: "CRO & Testing",
    description: "Enterprise experimentation platforms for web personalization. Compare server-side split testing vs. client-side A/B runs.",
    slug: "optimizely-vs-vwo",
    emojis: ["🧪", "🔍"],
  },
  {
    title: "WordPress vs Ghost",
    category: "Content Marketing",
    description: "The classic customizable open-source CMS vs. the modern, clean, lightning-fast publication engine built for newsletters.",
    slug: "wordpress-vs-ghost",
    emojis: ["📝", "👻"],
  },
];

export default function ComparePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />

      {/* Hero Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted-foreground)] mb-4 shadow-sm">
          <Sparkles size={14} className="text-[var(--accent)]" />
          Side-by-Side Comparison Engine
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
          Compare Marketing Tools
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
          Select any two tools in the same discipline to generate a side-by-side comparison, or check our pre-compiled guides below.
        </p>
      </div>

      {/* Interactive Form */}
      <div className="mb-16 rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 sm:p-8">
        <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">Custom Comparison</p>
        <h2 className="text-xl font-bold mb-1">Compare any two tools</h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">Pick any two tools from our directory and get a side-by-side breakdown instantly.</p>
        <CompareSelector />
      </div>

      {/* Curated / Popular Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Popular Comparisons
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POPULAR_COMPARISONS.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="compare-link-card group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  <span className="text-2xl">{comp.emojis[0]}</span>
                  <span className="text-2xl -ml-2">{comp.emojis[1]}</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                  {comp.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {comp.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] flex-grow leading-relaxed mb-4">
                {comp.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-[var(--accent)] font-medium mt-auto">
                Read Comparison
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
