"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className="p-2 rounded-control border border-ink bg-surface text-ink hover:bg-ink hover:text-page transition-all"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" aria-hidden />
    </button>
  );
}
