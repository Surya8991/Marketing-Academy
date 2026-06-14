import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, Lightbulb, Zap } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "tip" | "example";

const STYLES: Record<CalloutType, { border: string; bg: string; icon: React.ReactNode; label: string }> = {
  info:    { border: "border-blue-400",   bg: "bg-blue-50",    icon: <Info size={16} />,          label: "Note" },
  warning: { border: "border-amber-400",  bg: "bg-amber-50",   icon: <AlertTriangle size={16} />, label: "Common Mistake" },
  success: { border: "border-green-400",  bg: "bg-green-50",   icon: <CheckCircle size={16} />,   label: "Best Practice" },
  tip:     { border: "border-violet-400", bg: "bg-violet-50",  icon: <Lightbulb size={16} />,     label: "Pro Tip" },
  example: { border: "border-orange-400", bg: "bg-orange-50",  icon: <Zap size={16} />,           label: "Real Example" },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLES[type];
  return (
    <div className={cn("not-prose my-6 rounded-lg border-l-4 px-4 py-3", s.border, s.bg)}>
      <div className="flex items-center gap-1.5 font-semibold text-sm mb-1">
        {s.icon}
        <span>{title ?? s.label}</span>
      </div>
      <div className="text-sm leading-relaxed prose-sm">{children}</div>
    </div>
  );
}
