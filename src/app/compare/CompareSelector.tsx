"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TOOLS, ToolCategory } from "@/lib/tools-directory";

const CATEGORIES: ToolCategory[] = [
  "SEO",
  "Paid Advertising",
  "Content Marketing",
  "Email & CRM",
  "Analytics",
  "Social Media",
  "CRO & Testing",
  "Design & Brand",
  "AI Marketing",
  "Marketing Automation",
  "Video & Podcast",
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function CompareSelector() {
  const router = useRouter();
  const [category, setCategory] = useState<ToolCategory>("SEO");
  const [toolA, setToolA] = useState("");
  const [toolB, setToolB] = useState("");
  const [error, setError] = useState("");

  const filteredTools = TOOLS.filter((t) => t.category === category);

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolA || !toolB) {
      setError("Please select both tools to compare.");
      return;
    }
    if (toolA === toolB) {
      setError("Please select two different tools.");
      return;
    }
    setError("");
    const slugA = slugify(toolA);
    const slugB = slugify(toolB);
    router.push(`/compare/${slugA}-vs-${slugB}`);
  };

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 max-w-2xl mx-auto shadow-md">
      <form onSubmit={handleCompare} className="space-y-6">
        <div>
          <label htmlFor="category-select" className="block text-sm font-semibold mb-2">
            1. Select Marketing Discipline
          </label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as ToolCategory);
              setToolA("");
              setToolB("");
              setError("");
            }}
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tool-a-select" className="block text-sm font-semibold mb-2">
              Tool A
            </label>
            <select
              id="tool-a-select"
              value={toolA}
              onChange={(e) => {
                setToolA(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            >
              <option value="">-- Select Tool --</option>
              {filteredTools.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.emoji} {t.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tool-b-select" className="block text-sm font-semibold mb-2">
              Tool B
            </label>
            <select
              id="tool-b-select"
              value={toolB}
              onChange={(e) => {
                setToolB(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            >
              <option value="">-- Select Tool --</option>
              {filteredTools.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.emoji} {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!toolA || !toolB || toolA === toolB}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity shadow-lg shadow-[var(--accent)]/15"
        >
          Compare Tools
        </button>
      </form>
    </div>
  );
}
