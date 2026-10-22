"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { getActiveProjects } from "@/lib/projects";
import { applyFilters, filtersToQuery, hasActiveFilters, parseFilters, type WorkFilters } from "@/lib/filters";
import { FilterSidebar } from "./FilterSidebar";
import { ProjectCard } from "./ProjectCard";

export const emptyFilters: WorkFilters = { roles: [], contexts: [], stacks: [] };

/** Reads filters from the URL. Must render inside <Suspense>. */
export function WorkBrowser() {
  const searchParams = useSearchParams();
  return <WorkView filters={parseFilters(searchParams)} />;
}

const toggle = <T,>(list: T[], value: T) => (list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

export function WorkView({ filters }: { filters: WorkFilters }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const results = applyFilters(getActiveProjects(), filters);

  // Any manual filter change clears the lens.
  const active = filters.lens ? emptyFilters : filters;
  const update = (next: Partial<Omit<WorkFilters, "lens">>) => {
    router.push(`/work${filtersToQuery({ ...active, ...next, lens: undefined })}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      <div className="lg:col-span-3">
        <FilterSidebar
          selectedRoles={active.roles}
          selectedContexts={active.contexts}
          selectedStacks={active.stacks}
          onToggleRole={(r) => update({ roles: toggle(active.roles, r) })}
          onToggleContext={(c) => update({ contexts: toggle(active.contexts, c) })}
          onToggleStack={(s) => update({ stacks: toggle(active.stacks, s) })}
        />
      </div>

      <div className="lg:col-span-9 space-y-6">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted" aria-live="polite">
          {hasActiveFilters(filters) ? "Showing" : "All work"} ({results.length})
        </p>

        {filters.lens && (
          <div className="flex items-center justify-between gap-3 bg-surface-muted border border-line rounded-[10px] px-4 py-3">
            <p className="font-mono text-xs text-ink">
              <span className="text-muted uppercase tracking-wider">Lens · </span>
              {filters.lens.title}
            </p>
            <button
              type="button"
              onClick={() => update(emptyFilters)}
              className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-muted hover:text-ink"
            >
              <X className="w-3.5 h-3.5" aria-hidden />
              Clear
            </button>
          </div>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {results.map((project) => (
                <motion.div
                  key={project.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="p-12 text-center bg-surface border border-line rounded-card space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">No matching projects</p>
            <button
              type="button"
              onClick={() => update(emptyFilters)}
              className="px-4 py-2 rounded-control bg-ink text-page font-mono text-xs tracking-wider uppercase font-semibold"
            >
              Reset to all work
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
