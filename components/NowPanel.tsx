import Link from "next/link";
import type { NowPanelItem } from "@/content/types";
import { getProject } from "@/lib/projects";

/** Orbit node positions on the ring (viewBox 300×300, r=110); one per current project. */
const nodes = [
  { cx: 60, cy: 87 },
  { cx: 260, cy: 150 },
  { cx: 104, cy: 250 },
];

export function NowPanel({ term, items }: { term: string; items: NowPanelItem[] }) {
  // Hidden projects (e.g. stealth work) still appear here as text.
  const entries = items.flatMap((item) => {
    const project = getProject(item.slug);
    return project ? [{ ...item, project }] : [];
  });

  return (
    <div className="bg-surface-muted border border-line rounded-[24px] sm:rounded-[28px] p-4 sm:p-7 md:p-9 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-success" aria-hidden />
          <h2 className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-ink">Now · Current work</h2>
        </div>
        <div className="font-mono text-xs sm:text-sm tracking-wider uppercase text-muted">Active · {term}</div>
      </div>

      <div className="bg-surface border border-line rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: coordinate grid + orbit ring */}
        <div className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-line overflow-hidden">
          <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none bg-blueprint-grid" aria-hidden />
          <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" aria-hidden>
              <circle cx="150" cy="150" r="110" className="stroke-ink opacity-90 dark:opacity-80" strokeWidth="1.25" />
              {nodes.slice(0, entries.length).map((n, i) => (
                <circle key={i} cx={n.cx} cy={n.cy} r="5.5" className="fill-success" />
              ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-surface-muted border border-line px-3.5 py-1.5 rounded-control shadow-2xs">
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase text-ink">
                  In progress / {String(entries.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: what I'm building now */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-muted">Building now</div>
            <ol className="divide-y divide-line">
              {entries.map(({ project, line, href }, i) => (
                <li key={project.slug} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight text-ink leading-snug">
                      <span className="text-muted font-bold text-xs mr-2">{String(i + 1).padStart(2, "0")}</span>
                      {href ? (
                        <Link href={href} className="hover:text-accent underline-offset-4 hover:underline transition-colors">
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {project.expectedDate && (
                      <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-muted shrink-0">
                        Exp. {project.expectedDate}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed">{line ?? project.outcome}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            <div className="h-px bg-line w-full" />
            <Link href="/work" className="group inline-flex items-center">
              <span className="font-mono text-xs sm:text-sm font-bold text-ink border-b-2 border-ink pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors">
                Explore the work →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
