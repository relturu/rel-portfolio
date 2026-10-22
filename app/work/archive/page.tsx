import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getArchivedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archived.map((project) => (
            // id lets other pages link straight to a card, e.g. /work/archive#fluentish
            <div key={project.slug} id={project.slug} className="scroll-mt-24">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <p className="font-mono text-xs uppercase tracking-wider text-muted p-12 text-center bg-surface border border-line rounded-card">
          Nothing archived yet
        </p>
      )}
    </div>
  );
}
