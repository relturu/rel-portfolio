import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkBrowser, WorkView, emptyFilters } from "@/components/WorkBrowser";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">Portfolio · Archive</div>
        <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-ink leading-none my-3">
          WORK
        </h1>
        <p className="font-sans text-base sm:text-lg text-muted max-w-3xl leading-relaxed">
          A selection of product, research, design, and engineering work. Filter by what I did, the context, or the stack.
        </p>
      </section>

      <div className="h-px bg-line w-full" />

      {/* Prerendered with every project; URL filters apply once the page hydrates. */}
      <Suspense fallback={<WorkView filters={emptyFilters} />}>
        <WorkBrowser />
      </Suspense>
    </div>
  );
}
