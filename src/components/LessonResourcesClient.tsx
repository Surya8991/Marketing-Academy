"use client";
import { useState } from "react";
import { ExternalLink, Play, FileText, Globe, BookOpen } from "lucide-react";
import type { LessonResourceData, VideoLink, TextLink } from "@/lib/lesson-resources";

type Tab = "watch" | "read" | "use";
type Lang = "en" | "hi" | "te" | "ta";

const LANG_META: Record<Lang, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  hi: { label: "Hindi",   flag: "🇮🇳" },
  te: { label: "Telugu",  flag: "🇮🇳" },
  ta: { label: "Tamil",   flag: "🇮🇳" },
};

function ytId(url: string): string | null {
  const m = url.match(/[?&]v=([A-Za-z0-9_-]{11})/) || url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function Badge({ n }: { n: number }) {
  return (
    <span className="ml-1.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold bg-[var(--surface-2)] text-[var(--muted-foreground)]">
      {n}
    </span>
  );
}

function VideoCard({ v }: { v: VideoLink }) {
  const id = ytId(v.url);
  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-colors group"
    >
      {id ? (
        <div className="shrink-0 relative w-20 h-14 rounded overflow-hidden bg-[var(--surface-2)]">
          <img
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <Play size={16} className="text-white fill-white" />
          </div>
        </div>
      ) : (
        <div className="shrink-0 w-20 h-14 rounded bg-[var(--surface-2)] flex items-center justify-center">
          <Play size={16} className="text-[var(--muted-foreground)]" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
          {v.title}
        </p>
        {v.channel && (
          <p className="text-xs text-[var(--muted-foreground)] mt-1">{v.channel}</p>
        )}
      </div>
    </a>
  );
}

function LinkRow({ item, icon }: { item: TextLink; icon: React.ReactNode }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-colors group"
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1 text-sm font-medium line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
        {item.title}
      </span>
      <ExternalLink size={13} className="shrink-0 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default function LessonResourcesClient({ data }: { data: LessonResourceData }) {
  const totalVideos = (["en","hi","te","ta"] as Lang[]).reduce((s, l) => s + data.videos[l].length, 0);
  const totalRead   = data.articles.length + data.docs.length;
  const totalTools  = data.tools.length;

  const defaultTab: Tab = totalVideos > 0 ? "watch" : totalRead > 0 ? "read" : "use";
  const [tab, setTab]   = useState<Tab>(defaultTab);

  const defaultLang: Lang = (["en","hi","te","ta"] as Lang[]).find(l => data.videos[l].length > 0) ?? "en";
  const [lang, setLang]   = useState<Lang>(defaultLang);

  const ALL_TABS = [
    { id: "watch" as Tab, label: "Watch",    count: totalVideos },
    { id: "read"  as Tab, label: "Read",     count: totalRead   },
    { id: "use"   as Tab, label: "Tools",    count: totalTools  },
  ];
  const TABS = ALL_TABS.filter(t => t.count > 0);

  if (TABS.length === 0) return null;

  return (
    <div className="not-prose mt-10 mb-2">
      <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
        Free resources for this lesson
      </p>

      {/* Tab bar */}
      <div className="flex gap-1 mb-4 border-b border-[var(--border)]">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors -mb-px border-b-2 ${
              tab === t.id
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {t.label}<Badge n={t.count} />
          </button>
        ))}
      </div>

      {/* Watch tab */}
      {tab === "watch" && (
        <div>
          {/* Language switcher */}
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {(["en","hi","te","ta"] as Lang[]).filter(l => data.videos[l].length > 0).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  lang === l
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                }`}
              >
                <span>{LANG_META[l].flag}</span>
                {LANG_META[l].label}
                <Badge n={data.videos[l].length} />
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {data.videos[lang].map((v, i) => <VideoCard key={i} v={v} />)}
          </div>
        </div>
      )}

      {/* Read tab */}
      {tab === "read" && (
        <div className="space-y-2">
          {data.articles.length > 0 && (
            <>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">Articles</p>
              {data.articles.map((a, i) => (
                <LinkRow key={i} item={a} icon={<FileText size={15} className="text-[var(--accent)]" />} />
              ))}
            </>
          )}
          {data.docs.length > 0 && (
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">Official docs</p>
              {data.docs.map((d, i) => (
                <LinkRow key={i} item={d} icon={<BookOpen size={15} className="text-[var(--info)]" />} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tools tab */}
      {tab === "use" && (
        <div className="space-y-2">
          {data.tools.map((t, i) => (
            <LinkRow key={i} item={t} icon={<Globe size={15} className="text-[var(--warning)]" />} />
          ))}
        </div>
      )}
    </div>
  );
}
