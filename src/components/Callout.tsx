import { Info, AlertTriangle, CheckCircle, Lightbulb, Zap } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "tip" | "example";

// Quiet neutral box (DESIGN_GUIDE.md §5): the surface and border are neutral so a
// lesson full of callouts doesn't read as a rainbow. Only the icon carries the
// type colour — warning/success use the semantic tokens (Rule 82), the rest are
// muted. Type is still conveyed by icon + label, never colour alone.
const STYLES: Record<CalloutType, { iconColor: string; icon: React.ReactNode; label: string }> = {
  info:    { iconColor: "text-[var(--muted-foreground)]", icon: <Info size={16} strokeWidth={1.5} />,          label: "Note" },
  warning: { iconColor: "text-[var(--warning)]",          icon: <AlertTriangle size={16} strokeWidth={1.5} />, label: "Common mistake" },
  success: { iconColor: "text-[var(--success)]",          icon: <CheckCircle size={16} strokeWidth={1.5} />,   label: "Best practice" },
  tip:     { iconColor: "text-[var(--muted-foreground)]", icon: <Lightbulb size={16} strokeWidth={1.5} />,     label: "Tip" },
  example: { iconColor: "text-[var(--muted-foreground)]", icon: <Zap size={16} strokeWidth={1.5} />,           label: "Real example" },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLES[type];
  return (
    <div className="not-prose my-6 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-[var(--foreground)]">
      <div className="flex items-center gap-1.5 font-semibold text-sm mb-1.5">
        <span className={s.iconColor}>{s.icon}</span>
        <span>{title ?? s.label}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
