/**
 * Shared discipline grouping for the site's 21 categories. Originally lived
 * only inside Nav.tsx's mobile menu; promoted to a shared lib file (Stage 11,
 * Session 85) so the desktop Topics dropdown, mobile menu, and Skill Map page
 * all read the same taxonomy instead of drifting apart. A flat list of 21
 * category names reads as noise at any width, grouping by discipline gives
 * the reader a map instead of a wall of names.
 */
export const TOPIC_GROUPS = [
  { label: "Foundations & Strategy", slugs: ["fundamentals", "psychology", "copywriting", "brand-strategy", "product-marketing", "mental-models", "marketing-leadership", "legal-compliance"] },
  { label: "Channels", slugs: ["seo", "paid-ads", "social", "content", "email", "affiliate-marketing"] },
  { label: "Growth & Data", slugs: ["growth", "analytics", "tools", "cro", "ai-marketing"] },
  { label: "Outreach & Events", slugs: ["pr-communications", "events-experiential"] },
];
