/**
 * Short classification codes for each category, used as the eyebrow label on
 * specimen/index cards across the redesigned pages (Home, /learn). Presentation-only,
 * kept separate from curriculum.ts's actual content data.
 */
export const CLASSIFICATION_CODES: Record<string, string> = {
  fundamentals: "FUN",
  seo: "SEO",
  "paid-ads": "ADS",
  growth: "GRO",
  social: "SOC",
  content: "CNT",
  email: "EML",
  analytics: "ANA",
  tools: "TLS",
  psychology: "PSY",
  copywriting: "CPY",
  cro: "CRO",
  "brand-strategy": "BRD",
  "product-marketing": "PMM",
  "ai-marketing": "AI",
  "mental-models": "MDL",
  "pr-communications": "PR",
  "events-experiential": "EVT",
  "affiliate-marketing": "AFF",
  "marketing-leadership": "LED",
  "legal-compliance": "LGL",
};

export function classificationCode(slug: string): string {
  return CLASSIFICATION_CODES[slug] ?? slug.slice(0, 3).toUpperCase();
}
