/**
 * Shared lucide icon maps that replace the emoji fields in the data files
 * (`curriculum.ts`, `category-index.ts`, `achievements.ts`). The emoji fields
 * stay as human-readable labels in the data; the UI renders these line icons
 * instead, per docs/DESIGN_GUIDE.md "No UI emojis".
 *
 * Icons are limited to names that exist in the pinned lucide-react@1.18.
 */
import {
  Compass, Search, Wallet, TrendingUp, Share2, PenTool, Mail, Gauge, Wrench,
  Users, Pencil, MousePointerClick, Sparkles, ShoppingCart, Cpu, Lightbulb,
  Rss, Calendar, Link2, Briefcase, Scale, BookOpen,
  Check, Zap, Flame, CalendarRange, CheckCircle2, Trophy, Rocket, Award, FileText,
} from "lucide-react";

type IconCmp = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string; "aria-hidden"?: boolean }>;

const CATEGORY_ICONS: Record<string, IconCmp> = {
  fundamentals: Compass,
  seo: Search,
  "paid-ads": Wallet,
  growth: TrendingUp,
  social: Share2,
  content: PenTool,
  email: Mail,
  analytics: Gauge,
  tools: Wrench,
  psychology: Users,
  copywriting: Pencil,
  cro: MousePointerClick,
  "brand-strategy": Sparkles,
  "product-marketing": ShoppingCart,
  "ai-marketing": Cpu,
  "mental-models": Lightbulb,
  "pr-communications": Rss,
  "events-experiential": Calendar,
  "affiliate-marketing": Link2,
  "marketing-leadership": Briefcase,
  "legal-compliance": Scale,
};

const ACHIEVEMENT_ICONS: Record<string, IconCmp> = {
  "first-lesson": Check,
  "first-quiz": Zap,
  bookworm: BookOpen,
  "streak-3": Flame,
  "streak-7": CalendarRange,
  "ten-lessons": CheckCircle2,
  "category-clear": Trophy,
  "fifty-lessons": Rocket,
  "xp-500": Award,
  "first-project": Wrench,
  "ten-projects": FileText,
  "all-lessons": Sparkles,
};

export function CategoryIcon({ slug, size = 18, className }: { slug: string; size?: number; className?: string }) {
  const Icon = CATEGORY_ICONS[slug] ?? BookOpen;
  return <Icon size={size} strokeWidth={1.5} className={className} aria-hidden />;
}

export function AchievementIcon({ id, size = 20, className }: { id: string; size?: number; className?: string }) {
  const Icon = ACHIEVEMENT_ICONS[id] ?? Award;
  return <Icon size={size} strokeWidth={1.5} className={className} aria-hidden />;
}
