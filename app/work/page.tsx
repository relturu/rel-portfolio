import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkBrowser, WorkView, emptyFilters } from "@/components/WorkBrowser";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArchivedProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  const archivedCount = getArchivedProjects().length;

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight -ml-[0.04em] text-ink leading-none my-3">
          WORK
        </h1>
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">
          Startups, clients, hackathons & coursework
        </div>
      </section>

      <div className="h-px bg-line w-full" />

      {/* Prerendered with every project; URL filters apply once the page hydrates. */}
      <Suspense fallback={<WorkView filters={emptyFilters} />}>
        <WorkBrowser />
      </Suspense>

      <section className="pt-8">
        <Link
          href="/work/archive"
          className="group flex items-center justify-between gap-4 bg-surface border border-line rounded-card p-5 sm:p-6 card-hover"
        >
          <div className="space-y-1">
            <h2 className="font-mono text-base sm:text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
              See older projects
            </h2>
            <p className="font-sans text-sm text-muted">
              Earlier class projects, hackathons and experiments{archivedCount > 0 ? ` · ${archivedCount}` : ""}
            </p>
          </div>
          <ArrowRight
            className="w-4 h-4 shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
            aria-hidden
          />
        </Link>
      </section>
    </div>
  );
}
