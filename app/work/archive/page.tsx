import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getArchivedProjects, hasDetailPage } from "@/lib/projects";
import { ContextTag, RoleTagList } from "@/components/Badges";

export const metadata: Metadata = { title: "Archive" };

export default function ArchivePage() {
  const archived = getArchivedProjects();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden />
          <span>Back to work</span>
        </Link>
        <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight -ml-[0.04em] text-ink leading-none my-3">
          ARCHIVE
        </h1>
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">
          Older projects · {archived.length} total
        </div>
      </section>

      <div className="h-px bg-line w-full" />

      {archived.length > 0 ? (
        <ul className="divide-y divide-line border-y border-line">
          {archived.map((project) => {
            const title = hasDetailPage(project) ? (
              <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
                {project.title}
                <ArrowUpRight className="w-3.5 h-3.5 text-muted" aria-hidden />
              </Link>
            ) : (
              project.title
            );

            return (
              <li key={project.slug} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6">
                <div className="md:col-span-2 font-mono text-xs text-muted pt-1">{project.date}</div>
                <div className="md:col-span-7 space-y-1.5">
                  <h2 className="font-mono text-base font-bold tracking-tight text-ink">{title}</h2>
                  <p className="font-sans text-sm text-muted leading-relaxed">{project.outcome}</p>
                </div>
                <div className="md:col-span-3 flex flex-wrap items-start gap-1.5 md:justify-end">
                  <ContextTag context={project.context} />
                  <RoleTagList roles={project.roleTags} maxVisible={2} />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="font-mono text-xs uppercase tracking-wider text-muted p-12 text-center bg-surface border border-line rounded-card">
          Nothing archived yet
        </p>
      )}
    </div>
  );
}
