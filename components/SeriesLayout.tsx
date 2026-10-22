import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project, SeriesChild } from "@/content/types";
import { ContextTag, TypeBadge } from "./Badges";
import { BackToWork } from "./CaseStudyLayout";
import { TechnicalPlaceholder } from "./TechnicalPlaceholder";

export function SeriesLayout({ project, items, children }: { project: Project; items: SeriesChild[]; children?: ReactNode }) {
  return (
    <article className="space-y-12">
      <BackToWork />

      <header className="space-y-4 pb-8 border-b border-line">
        <div className="flex items-center gap-2 flex-wrap">
          <TypeBadge type="series" seriesCount={items.length} />
          <ContextTag context={project.context} />
          <span className="text-muted" aria-hidden>·</span>
          <span className="font-mono text-xs text-muted">{project.date}</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-ink">{project.title}</h1>
        <p className="font-sans text-base sm:text-lg text-muted max-w-3xl leading-relaxed">{project.outcome}</p>
        <div className="font-mono text-xs text-muted pt-2">{items.length} projects in this series</div>
      </header>

      {children && <div className="space-y-4 max-w-3xl">{children}</div>}

      <section className="space-y-6" aria-labelledby="series-items">
        <h2 id="series-items" className="eyebrow">Projects in this series</h2>
        <div className="space-y-8">
          {items.map((child, idx) => (
            <div
              key={child.slug}
              className="bg-surface border border-line rounded-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-5">
                <TechnicalPlaceholder
                  label={child.title}
                  image={child.image}
                  alt={`${child.title} preview`}
                  aspectRatio="16:9"
                  sublabel={`Project ${String(idx + 1).padStart(2, "0")}`}
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">Project {String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-mono text-lg sm:text-xl font-bold text-ink">{child.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{child.description}</p>
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {child.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded-tag font-mono text-[10px] text-ink bg-surface-muted border border-line">
                      {tool}
                    </span>
                  ))}
                </div>
                {child.link && (
                  <a
                    href={child.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 pt-2 font-mono text-xs text-ink hover:text-accent font-semibold transition-colors"
                  >
                    <span>View prototype</span>
                    <ExternalLink className="w-3 h-3" aria-hidden />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-8 border-t border-line text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-control bg-ink text-page font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          <span>Back to all work</span>
        </Link>
      </div>
    </article>
  );
}
