import type { ReactNode } from "react";

/**
 * Building blocks available in every case study MDX file (registered in
 * mdx-components.tsx, so no import is needed in the .mdx).
 */

export const caseStudySections = [
  { id: "problem", label: "Problem" },
  { id: "what-i-did", label: "What I did" },
  { id: "key-tradeoff", label: "Key tradeoff" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  const n = caseStudySections.findIndex((s) => s.id === id) + 1;
  return (
    <section id={id} className="space-y-4 scroll-mt-28">
      <div className="eyebrow">
        {n > 0 ? `${String(n).padStart(2, "0")} · ` : ""}
        {eyebrow}
      </div>
      <h2 className="font-mono text-2xl font-bold text-ink">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Phase({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="border border-line rounded-[12px] p-6 bg-surface space-y-2">
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink">
        <span className="px-2 py-0.5 bg-surface-muted rounded-tag border border-line">{label}</span>
        <span>{title}</span>
      </div>
      <div className="font-sans text-sm text-muted leading-relaxed pt-1 [&_p]:text-sm [&_p]:text-muted">{children}</div>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <div className="bg-surface-muted border-l-2 border-accent p-6 rounded-r-[10px] [&_p]:text-ink">{children}</div>;
}

export function Metric({ value, label, children }: { value: string; label: string; children?: ReactNode }) {
  return (
    <div className="bg-surface border border-line rounded-card p-8 flex flex-col sm:flex-row sm:items-baseline gap-6">
      <div className="font-mono text-5xl sm:text-6xl font-bold text-ink tracking-tight shrink-0">{value}</div>
      <div className="space-y-1">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink block">{label}</span>
        {children && <div className="font-sans text-sm text-muted leading-relaxed [&_p]:text-sm [&_p]:text-muted">{children}</div>}
      </div>
    </div>
  );
}

export function PullQuote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <figure className="border-l-2 border-ink pl-6 py-2 my-6">
      <blockquote className="font-mono text-base sm:text-lg italic text-ink leading-snug [&_p]:font-mono [&_p]:text-base sm:[&_p]:text-lg [&_p]:text-ink">
        {children}
      </blockquote>
      {source && <figcaption className="font-mono text-xs text-muted block mt-2 uppercase tracking-wider">— {source}</figcaption>}
    </figure>
  );
}

export function Gallery({ label, caption }: { label: string; caption?: string }) {
  // Placeholder until real images are added; swap for next/image when they exist.
  return (
    <figure className="space-y-2">
      <div className="aspect-[16/9] bg-crosshatch border border-line rounded-[10px] flex items-center justify-center">
        <span className="bg-surface px-3 py-1.5 border border-line rounded-tag font-mono text-xs uppercase tracking-wider text-ink">
          {label}
        </span>
      </div>
      {caption && <figcaption className="font-mono text-[11px] text-muted text-center">{caption}</figcaption>}
    </figure>
  );
}
