"use client";

import { SlidersHorizontal } from "lucide-react";
import { contextLabels, stackFilterOptions } from "@/content/data";
import type { ProjectContext } from "@/content/types";

const contexts = Object.keys(contextLabels) as ProjectContext[];

function CheckboxGroup<T extends string>({
  legend,
  options,
  selected,
  label,
  onToggle,
}: {
  legend: string;
  options: T[];
  selected: T[];
  label: (value: T) => string;
  onToggle: (value: T) => void;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink pb-2">{legend}</legend>
      {options.map((value) => (
        <label key={value} className="flex items-center gap-2 font-mono text-xs text-muted hover:text-ink cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(value)}
            onChange={() => onToggle(value)}
            className="w-3.5 h-3.5 accent-ink"
          />
          <span>{label(value)}</span>
        </label>
      ))}
    </fieldset>
  );
}

export function FilterSidebar({
  selectedContexts,
  selectedStacks,
  onToggleContext,
  onToggleStack,
}: {
  selectedContexts: ProjectContext[];
  selectedStacks: string[];
  onToggleContext: (context: ProjectContext) => void;
  onToggleStack: (stack: string) => void;
}) {
  const count = selectedContexts.length + selectedStacks.length;
  const groups = (
    <div className="space-y-6">
      <CheckboxGroup
        legend="Context"
        options={contexts}
        selected={selectedContexts}
        label={(c) => contextLabels[c]}
        onToggle={onToggleContext}
      />
      <div className="h-px bg-line" />
      <CheckboxGroup
        legend="Tech stack"
        options={stackFilterOptions}
        selected={selectedStacks}
        label={(s) => s}
        onToggle={onToggleStack}
      />
    </div>
  );

  return (
    <>
      {/* Mobile / tablet: collapsible */}
      <details className="lg:hidden bg-surface border border-line rounded-card p-4">
        <summary className="font-mono text-xs uppercase tracking-wider text-ink cursor-pointer flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden />
          Filters{count > 0 ? ` (${count})` : ""}
        </summary>
        <div className="pt-4">{groups}</div>
      </details>

      {/* Desktop: sticky sidebar */}
      <aside aria-label="Filters" className="hidden lg:block sticky top-24 bg-surface border border-line rounded-[12px] p-5">
        {groups}
      </aside>
    </>
  );
}
