import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LensPreset } from "@/content/types";

export function LensCards({ lenses }: { lenses: LensPreset[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {lenses.map((lens) => (
        <Link
          key={lens.id}
          href={`/work?lens=${lens.id}`}
          className="group text-left p-5 bg-surface border border-line rounded-card card-hover flex flex-col justify-between gap-3"
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-mono text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors">
                {lens.title}
              </h3>
              <ArrowUpRight
                className="w-4 h-4 mt-1.5 shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                aria-hidden
              />
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted mt-1.5 leading-snug">{lens.description}</p>
          </div>
          <div className="font-mono text-[11px] text-ink flex items-center gap-1 font-medium">
            <span>{lens.cta}</span>
            <span className="text-muted" aria-hidden>→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
