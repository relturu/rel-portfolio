import type { Stat } from "@/content/types";

export function StatPanel({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-surface border border-line rounded-card p-6 sm:p-8">
      <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label + idx}
            className={`flex flex-col-reverse justify-end gap-2 ${idx > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""}`}
          >
            <dt>
              <span className="font-mono text-xs uppercase tracking-wider text-muted block">{stat.label}</span>
              {stat.annotation && <span className="font-sans text-[11px] text-muted/70 mt-0.5 block">{stat.annotation}</span>}
            </dt>
            <dd className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
