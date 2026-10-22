"use client";

import { useState } from "react";
import { hobbyCategories } from "@/content/data";
import type { Hobby, HobbyCategory } from "@/content/types";
import { TechnicalPlaceholder } from "./TechnicalPlaceholder";

export function HobbyGrid({ hobbies }: { hobbies: Hobby[] }) {
  const [category, setCategory] = useState<HobbyCategory | "All">("All");
  const visible = category === "All" ? hobbies : hobbies.filter((h) => h.category === category);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2" role="group" aria-label="Filter fun things">
        {(["All", ...hobbyCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={`px-3.5 py-1.5 rounded-control font-mono text-[11px] sm:text-xs tracking-wider uppercase transition-colors ${
              category === c ? "bg-ink text-page font-bold" : "bg-surface-muted text-ink border border-line hover:border-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((thing) => (
          <div
            key={thing.id}
            className="bg-surface border border-line rounded-[20px] p-5 sm:p-6 space-y-4 card-hover flex flex-col justify-between"
          >
            <div className="space-y-4">
              <TechnicalPlaceholder
                label={thing.title}
                image={thing.image}
                alt={thing.title}
                aspectRatio="4:3"
                sublabel="[PHOTO]"
                className="rounded-[12px]"
              />
              <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-muted bg-surface-muted px-2 py-0.5 rounded-tag border border-line">
                {thing.category}
              </span>
              <h3 className="font-mono text-lg font-bold text-ink uppercase tracking-tight">{thing.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{thing.description}</p>
            </div>
            <div className="pt-2 border-t border-line">
              <span className="font-mono text-[11px] text-muted">{thing.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
