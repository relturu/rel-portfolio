"use client";

import { Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "rel_portfolio_theme";

/** Inline script for <head>: applies a saved dark theme before first paint. Light is the default. */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export function ThemeToggle({ size = "md" }: { size?: "sm" | "md" }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {}
  };

  const box = size === "sm" ? "w-8 h-8" : "w-9 h-9 shadow-2xs";
  const icon = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${box} rounded-full border border-line text-muted hover:text-ink hover:border-ink transition-colors inline-flex items-center justify-center bg-surface`}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <Sun className={`${icon} text-ink dark:text-warning`} aria-hidden />
    </button>
  );
}
