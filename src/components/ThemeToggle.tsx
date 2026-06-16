"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { THEME_KEY } from "@/lib/events";

type Theme = "light" | "dark" | "system";

function getEffective(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
    setTheme(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const effective = getEffective(theme);
    document.documentElement.setAttribute("data-theme", effective);
    if (theme === "system") {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme, mounted]);

  if (!mounted) return <div className="w-8 h-8" />;

  const effective = getEffective(theme);
  const isDark = effective === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
