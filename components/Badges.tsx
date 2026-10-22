import { Layers } from "lucide-react";
import { contextLabels, roleLabels } from "@/content/data";
import type { ProjectContext, ProjectType, RoleTag } from "@/content/types";

export function TypeBadge({ type, seriesCount = 0 }: { type: ProjectType; seriesCount?: number }) {
  switch (type) {
    case "case-study":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-tag text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase bg-ink text-page">
          Case study
        </span>
      );
    case "project":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-tag text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-surface-muted text-ink border border-line">
          Project
        </span>
      );
    case "series":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-tag text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase bg-success/10 text-success-ink border border-success/20">
          <Layers className="w-3 h-3" aria-hidden />
          Series {seriesCount > 0 ? `(${seriesCount})` : ""}
        </span>
      );
    case "in-progress":
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-tag text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase bg-transparent text-ink border border-line">
          <span className="w-1.5 h-1.5 rounded-full bg-success motion-safe:animate-pulse" aria-hidden />
          In progress
        </span>
      );
  }
}

export function ContextTag({ context }: { context: ProjectContext }) {
  const label = contextLabels[context];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-tag text-[10px] sm:text-[11px] font-mono text-muted bg-surface-muted border border-line max-w-[140px] truncate"
      title={label}
    >
      {label}
    </span>
  );
}

export function RoleTagList({ roles, maxVisible = 3 }: { roles: RoleTag[]; maxVisible?: number }) {
  const visible = roles.slice(0, maxVisible);
  const remaining = roles.length - maxVisible;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {visible.map((role) => (
        <span
          key={role}
          className="inline-flex items-center px-2 py-0.5 rounded-tag text-[11px] font-mono text-ink bg-surface-muted border border-line"
        >
          {roleLabels[role]}
        </span>
      ))}
      {remaining > 0 && (
        <span
          className="inline-flex items-center px-1.5 py-0.5 rounded-tag text-[10px] font-mono text-muted bg-surface-muted"
          title={roles.slice(maxVisible).map((r) => roleLabels[r]).join(", ")}
        >
          +{remaining}
        </span>
      )}
    </div>
  );
}

export function StackTagList({ stack, maxVisible = 4 }: { stack: string[]; maxVisible?: number }) {
  const visible = stack.slice(0, maxVisible);
  const remaining = stack.length - maxVisible;

  return (
    <div className="flex flex-wrap items-center gap-1">
      {visible.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center px-1.5 py-0.5 rounded-[3px] text-[10px] font-mono text-muted border border-line bg-surface"
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && <span className="font-mono text-[10px] text-muted px-1">+{remaining}</span>}
    </div>
  );
}
