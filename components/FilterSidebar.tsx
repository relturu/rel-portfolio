"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { contextLabels, roleFilterOrder, roleLabels, stackFilterOptions } from "@/content/data";
import type { ProjectContext, RoleTag } from "@/content/types";
import { getActiveProjects } from "@/lib/projects";

// Only offer options that at least one non-archived project uses.
const active = getActiveProjects();
const usedRoles = new Set(active.flatMap((p) => p.roleTags));
const usedContexts = new Set(active.map((p) => p.context));
const usedStacks = new Set(active.flatMap((p) => p.stack));

const roles = roleFilterOrder.filter((r) => usedRoles.has(r));
const allContexts = Object.keys(contextLabels) as ProjectContext[];
const contexts = allContexts.filter((c) => usedContexts.has(c));
const stacks = stackFilterOptions.filter((s) => usedStacks.has(s));

/** Keep an unused option visible while it's selected (e.g. from an old link) so it can be cleared. */
const withSelected = <T,>(options: T[], all: T[], selected: T[]) =>
  all.filter((o) => options.includes(o) || selected.includes(o));

/** Tech stack options shown before "+ N more". */
const STACK_PREVIEW = 4;

function CheckboxGroup<T extends string>({
  legend,
  options,
  selected,
  label,
  onToggle,
  preview,
}: {
  legend: string;
  options: T[];
  selected: T[];
  label: (value: T) => string;
  onToggle: (value: T) => void;
  /** Show only this many options until expanded. */
  preview?: number;
}) {
  // Start expanded if a hidden option is already selected (e.g. from the URL).
  const [expanded, setExpanded] = useState(
    () => preview === undefined || options.slice(preview).some((o) => selected.includes(o)),
  );
  const hidden = preview === undefined ? 0 : options.length - preview;
  const visible = expanded || hidden <= 0 ? options : options.slice(0, preview);

  return (
    <fieldset className="space-y-2">
      <legend className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink pb-2">{legend}</legend>
      {visible.map((value) => (
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
      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs text-muted hover:text-ink underline-offset-2 hover:underline"
        >
          {expanded ? "− Show less" : `+ ${hidden} more`}
        </button>
      )}
    </fieldset>
  );
}

export function FilterSidebar({
  selectedRoles,
  selectedContexts,
  selectedStacks,
  onToggleRole,
  onToggleContext,
  onToggleStack,
}: {
  selectedRoles: RoleTag[];
  selectedContexts: ProjectContext[];
  selectedStacks: string[];
  onToggleRole: (role: RoleTag) => void;
  onToggleContext: (context: ProjectContext) => void;
  onToggleStack: (stack: string) => void;
}) {
  const count = selectedRoles.length + selectedContexts.length + selectedStacks.length;
  const groups = (
    <div className="space-y-6">
      <CheckboxGroup
        legend="What I did"
        options={withSelected(roles, roleFilterOrder, selectedRoles)}
        selected={selectedRoles}
        label={(r) => roleLabels[r]}
        onToggle={onToggleRole}
      />
      <div className="h-px bg-line" />
      <CheckboxGroup
        legend="Context"
        options={withSelected(contexts, allContexts, selectedContexts)}
        selected={selectedContexts}
        label={(c) => contextLabels[c]}
        onToggle={onToggleContext}
      />
      <div className="h-px bg-line" />
      <CheckboxGroup
        legend="Tech stack"
        options={withSelected(stacks, stackFilterOptions, selectedStacks)}
        selected={selectedStacks}
        label={(s) => s}
        onToggle={onToggleStack}
        preview={STACK_PREVIEW}
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
