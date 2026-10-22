import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, ShieldAlert } from "lucide-react";
import { contextLabels } from "@/content/data";
import type { Project } from "@/content/types";
import { getSeriesChildren, hasDetailPage } from "@/lib/projects";
import { ContextTag, RoleTagList, StackTagList, TypeBadge } from "./Badges";
import { GithubIcon } from "./BrandIcons";
import { TechnicalPlaceholder } from "./TechnicalPlaceholder";

const linkLabels: { key: keyof NonNullable<Project["links"]>; label: string }[] = [
  { key: "demo", label: "Demo" },
  { key: "slides", label: "Slides" },
  { key: "video", label: "Video" },
  { key: "report", label: "Report" },
];

export function ProjectCard({ project, simplified = false }: { project: Project; simplified?: boolean }) {
  const detail = hasDetailPage(project);
  const href = `/work/${project.slug}`;
  const children = getSeriesChildren(project);

  return (
    <article className="group relative h-full bg-surface border border-line rounded-card overflow-hidden flex flex-col justify-between card-hover">
      <div className="relative">
        <TechnicalPlaceholder
          label={project.nda ? "NDA work" : (project.imageLabel ?? project.title)}
          image={project.image}
          screens={project.screens}
          alt={`${project.title} preview`}
          aspectRatio="4:3"
          sublabel={contextLabels[project.context]}
        />
        {project.nda && (
          <div className="absolute top-2.5 right-2.5 bg-ink text-page px-2 py-0.5 rounded-tag font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 shadow-xs">
            <ShieldAlert className="w-3 h-3 text-warning" aria-hidden />
            <span>NDA work</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <TypeBadge type={project.type} seriesCount={project.children?.length} />
              <ContextTag context={project.context} />
            </div>
            <span className="font-mono text-[11px] text-muted shrink-0">{project.date}</span>
          </div>

          <div className="flex items-start justify-between gap-2 pt-1">
            <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight text-ink leading-snug group-hover:text-accent transition-colors">
              {detail ? (
                // Stretched link: the whole card is clickable, inner links stay usable.
                <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                  {project.title}
                </Link>
              ) : (
                project.title
              )}
            </h3>
            {detail && (
              <ArrowUpRight
                className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                aria-hidden
              />
            )}
          </div>

          <p className="font-sans text-sm text-muted leading-relaxed line-clamp-2">{project.outcome}</p>

          {project.type === "series" && children.length > 0 && (
            <div className="pt-1.5 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">Included:</span>
              <div className="space-y-1">
                {children.slice(0, 3).map((child) => (
                  <div
                    key={child.slug}
                    className="font-mono text-[11px] text-ink bg-surface-muted px-2 py-1 rounded-tag border border-line flex items-center justify-between truncate"
                  >
                    <span className="truncate">{child.title}</span>
                    <span className="text-muted text-[9px] shrink-0 ml-1">{child.tools[0]}</span>
                  </div>
                ))}
                {children.length > 3 && (
                  <span className="font-mono text-[10px] text-muted block pl-1">
                    +{children.length - 3} more in series →
                  </span>
                )}
              </div>
            </div>
          )}

          {!simplified && project.stack.length > 0 && (
            <div className="pt-2">
              <StackTagList stack={project.stack} maxVisible={4} />
            </div>
          )}
        </div>

        <div className="pt-4 mt-4 space-y-3">
          <div className="h-px bg-line w-full" />

          <div className="flex items-center justify-between gap-2">
            <RoleTagList roles={project.roleTags} maxVisible={simplified ? 3 : 2} />
            {project.expectedDate && (
              <span className="font-mono text-[10px] text-muted shrink-0">Expected {project.expectedDate}</span>
            )}
          </div>

          {!simplified && (
            <div className="relative z-10 flex items-center justify-between pt-1 font-mono text-xs">
              <div className="flex items-center gap-3">
                {linkLabels.map(({ key, label }) =>
                  project.links?.[key] ? (
                    <a
                      key={key}
                      href={project.links[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted hover:text-ink transition-colors"
                    >
                      <span>{label}</span>
                      <ExternalLink className="w-3 h-3" aria-hidden />
                    </a>
                  ) : null,
                )}
                {project.links?.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted hover:text-ink transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                )}
              </div>

              {detail && (
                <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-accent transition-colors" aria-hidden>
                  <span>{project.type === "series" ? "Explore series" : "View case study"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
