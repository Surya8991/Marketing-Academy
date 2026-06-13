import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, Lightbulb, Zap } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "tip" | "example";

const STYLES: Record<CalloutType, { ring: string; tint: string; iconColor: string; icon: React.ReactNode; label: string }> = {
  info:    { ring: "border-blue-500/40",   tint: "bg-blue-500/10",   iconColor: "text-blue-500",   icon: <Info size={16} />,          label: "Note" },
  warning: { ring: "border-amber-500/40",  tint: "bg-amber-500/10",  iconColor: "text-amber-500",  icon: <AlertTriangle size={16} />, label: "Common Mistake" },
  success: { ring: "border-green-500/40",  tint: "bg-green-500/10",  iconColor: "text-green-500",  icon: <CheckCircle size={16} />,   label: "Best Practice" },
  tip:     { ring: "border-violet-500/40", tint: "bg-violet-500/10", iconColor: "text-violet-500", icon: <Lightbulb size={16} />,     label: "Pro Tip" },
  example: { ring: "border-orange-500/40", tint: "bg-orange-500/10", iconColor: "text-orange-500", icon: <Zap size={16} />,           label: "Real Example" },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLES[type];
  return (
    <div className={cn("not-prose my-6 rounded-lg border-l-4 px-4 py-3 text-[var(--foreground)]", s.ring, s.tint)}>
      <div className={cn("flex items-center gap-1.5 font-semibold text-sm mb-1.5", s.iconColor)}>
        {s.icon}
        <span>{title ?? s.label}</span>
      </div>
      <div className="text-sm leading-relaxed text-[var(--foreground)]">{children}</div>
    </div>
  );
}
