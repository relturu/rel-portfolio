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
      className="p-2 rounded-control border border-line bg-surface-muted text-muted hover:text-ink hover:border-ink transition-all"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" aria-hidden />
    </button>
  );
}
