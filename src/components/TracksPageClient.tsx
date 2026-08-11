"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Track } from "@/lib/tracks";
import TrackProgress from "@/components/TrackProgress";

type Filter = "all" | "role" | "mastery";

export default function TracksPageClient({ tracks }: { tracks: Track[] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    let list = tracks;
    if (filter !== "all") {
      list = list.filter((t) => t.kind === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.audience.toLowerCase().includes(q)
      );
    }
    return list;
  }, [tracks, search, filter]);

  const roleTracks = tracks.filter((t) => t.kind === "role");
  const masteryTracks = tracks.filter((t) => t.kind === "mastery");

  return (
    <>
      {/* Search + Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search tracks by name, topic, or audience..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors text-sm"
          />
        </div>
        <div className="flex gap-2 shrink-0">
          {([
            { key: "all", label: "All Tracks", count: tracks.length },
            { key: "role", label: "Role-Based", count: roleTracks.length },
            { key: "mastery", label: "Skill Mastery", count: masteryTracks.length },
          ] as const).map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap"
              style={{
                background:
                  filter === btn.key
                    ? "var(--accent)"
                    : "var(--muted)",
                color:
                  filter === btn.key
                    ? "var(--accent-foreground)"
                    : "var(--muted-foreground)",
                border:
                  filter === btn.key
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border)",
              }}
            >
              {btn.label}
              <span
                className="ml-1.5 text-xs opacity-70"
              >
                {btn.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(search.trim() || filter !== "all") && (
        <p className="text-sm text-[var(--muted-foreground)] mb-4">
          {filtered.length === 0
            ? "No tracks match your search."
            : `Showing ${filtered.length} of ${tracks.length} tracks`}
        </p>
      )}

      {/* Track cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((track, i) => (
          <Link
            key={track.slug}
            href={`/tracks/${track.slug}`}
            className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{track.emoji}</span>
                {filter === "all" && i < 8 && !search.trim() && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide"
                    style={{
                      background: "rgba(99, 102, 241, 0.12)",
                      color: "var(--accent)",
                      border: "1px solid rgba(99, 102, 241, 0.25)",
                    }}
                  >
                    Popular
                  </span>
                )}
              </div>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                style={{
                  background:
                    track.kind === "role"
                      ? "rgba(99, 102, 241, 0.1)"
                      : "rgba(234, 179, 8, 0.1)",
                  color:
                    track.kind === "role"
                      ? "var(--accent)"
                      : "rgb(202, 138, 4)",
                  border:
                    track.kind === "role"
                      ? "1px solid rgba(99, 102, 241, 0.2)"
                      : "1px solid rgba(234, 179, 8, 0.25)",
                }}
              >
                {track.kind === "role" ? track.audience : "Skill Mastery"}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {track.title}
            </h2>

            <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed">
              {track.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                <span className="font-medium">
                  {track.lessons.length} lessons
                </span>
                <span>{track.duration}</span>
              </div>
              <span className="text-sm font-medium text-[var(--accent)] group-hover:underline">
                Start Track
              </span>
            </div>
            <TrackProgress lessons={track.lessons} />
          </Link>
        ))}
      </div>
    </>
  );
}
