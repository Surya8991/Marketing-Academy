import { ExternalLink, Play, FileText, BookOpen, Globe } from "lucide-react";

type ResourceType = "video" | "article" | "course" | "docs" | "tool";

const ICONS: Record<ResourceType, React.ReactNode> = {
  video:   <Play size={16} className="text-red-500" />,
  article: <FileText size={16} className="text-blue-500" />,
  course:  <BookOpen size={16} className="text-violet-500" />,
  docs:    <FileText size={16} className="text-emerald-500" />,
  tool:    <Globe size={16} className="text-orange-500" />,
};

type Resource = {
  title: string;
  url: string;
  type: ResourceType;
  note?: string;
  free?: boolean;
};

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="not-prose my-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
        Free Resources
      </h3>
      <ul className="space-y-2">
        {resources.map((r, i) => (
          <li key={i}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-colors group"
            >
              <span className="mt-0.5 shrink-0">{ICONS[r.type]}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium group-hover:text-[var(--accent)] transition-colors truncate">
                    {r.title}
                  </span>
                  {r.free !== false && (
                    <span className="shrink-0 text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">
                      Free
                    </span>
                  )}
                </div>
                {r.note && <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{r.note}</p>}
              </div>
              <ExternalLink size={14} className="shrink-0 mt-0.5 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
