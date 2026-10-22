import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShieldAlert } from "lucide-react";
import { contextLabels } from "@/content/data";
import type { CaseStudyMeta, Project } from "@/content/types";
import { ContextTag, TypeBadge } from "./Badges";
import { caseStudySections } from "./CaseStudyBlocks";
import { TechnicalPlaceholder } from "./TechnicalPlaceholder";

export function BackToWork() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink uppercase tracking-wider transition-colors"
    >
      <ArrowLeft className="w-3.5 h-3.5" aria-hidden />
      <span>Back to all work</span>
    </Link>
  );
}

export function CaseStudyLayout({
  project,
  meta,
  prev,
  next,
  children,
}: {
  project: Project;
  meta: CaseStudyMeta;
  prev?: Project;
  next?: Project;
  children: ReactNode;
}) {
  const tldr = [
    { label: "Role", value: meta.role },
    { label: "Team", value: meta.team },
    { label: "Timeline", value: meta.timeline },
    { label: "Tools & stack", value: project.stack.join(" · "), mono: true },
    { label: "Outcome", value: meta.outcome, highlight: true },
  ];

  return (
    <article className="space-y-16">
      <BackToWork />

      {project.nda && (
        <div className="bg-surface-muted border-l-4 border-warning p-4 rounded-r-[8px] flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-warning shrink-0 mt-0.5" aria-hidden />
          <div>
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block">NDA work</span>
            <p className="font-sans text-xs text-muted mt-1">
              The company name, screens, and proprietary details are withheld under NDA.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="space-y-6">
        <div className="flex items-center gap-2 flex-wrap">
          <TypeBadge type={project.type} />
          <ContextTag context={project.context} />
          <span className="text-muted" aria-hidden>·</span>
          <span className="font-mono text-xs text-muted">{project.date}</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight max-w-4xl">{project.title}</h1>
        <p className="font-sans text-lg sm:text-xl text-muted max-w-3xl leading-relaxed">{meta.summary}</p>
        <div className="pt-2">
          <TechnicalPlaceholder
            label={project.nda ? "NDA work" : (project.imageLabel ?? project.title)}
            image={project.image}
            screens={project.screens}
            alt={`${project.title} hero image`}
            aspectRatio="16:9"
            sublabel={contextLabels[project.context]}
          />
        </div>
      </header>

      {/* TL;DR */}
      <section aria-label="TL;DR" className="bg-surface border border-line rounded-card p-6 sm:p-8">
        <div className="eyebrow pb-4 border-b border-line">TL;DR</div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-6">
          {tldr.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{item.label}</dt>
              <dd
                className={`mt-1 ${
                  item.mono
                    ? "font-mono text-xs text-ink"
                    : item.highlight
                      ? "font-sans text-sm font-semibold text-success-ink"
                      : "font-sans text-sm font-semibold text-ink"
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Body with sticky table of contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <nav aria-label="On this page" className="hidden lg:block lg:col-span-3 sticky top-24 bg-surface border border-line rounded-[12px] p-5 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink block pb-2 border-b border-line">
            On this page
          </span>
          <ol className="space-y-1.5 font-mono text-xs">
            {caseStudySections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="w-full py-1 text-muted hover:text-ink flex items-center justify-between">
                  <span>
                    {String(i + 1).padStart(2, "0")}. {s.label}
                  </span>
                  <ChevronRight className="w-3 h-3" aria-hidden />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="lg:col-span-9 space-y-16">
          {children}

          {(prev || next) && (
            <nav aria-label="More case studies" className="pt-12 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="text-left p-5 border border-line rounded-[10px] bg-surface hover:border-ink transition-colors group"
                >
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">← Previous case study</span>
                  <span className="font-mono text-sm font-bold text-ink group-hover:text-accent transition-colors line-clamp-1 mt-1 block">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next && (
                <Link
                  href={`/work/${next.slug}`}
                  className="text-right p-5 border border-line rounded-[10px] bg-surface hover:border-ink transition-colors group"
                >
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Next case study →</span>
                  <span className="font-mono text-sm font-bold text-ink group-hover:text-accent transition-colors line-clamp-1 mt-1 block">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
