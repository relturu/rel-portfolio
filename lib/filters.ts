import { lensPresets } from "@/content/data";
import type { LensPreset, Project, ProjectContext, RoleTag } from "@/content/types";
import { sortProjects } from "./projects";

/**
 * Work page filters live in the URL so links can pre-filter:
 *   ?lens=pm
 *   ?role=design&context=client&context=startup&stack=Python
 * A lens is exclusive: choosing any other filter clears it.
 */
export type WorkFilters = {
  lens?: LensPreset;
  role?: RoleTag;
  contexts: ProjectContext[];
  stacks: string[];
};

const roleValues: RoleTag[] = ["product", "research", "design", "engineering", "leadership"];
const contextValues: ProjectContext[] = ["startup", "client", "hackathon", "course"];

type ParamReader = { get(name: string): string | null; getAll(name: string): string[] };

export function parseFilters(params: ParamReader): WorkFilters {
  const lens = lensPresets.find((l) => l.id === params.get("lens"));
  const role = params.get("role");
  return {
    lens,
    role: roleValues.includes(role as RoleTag) ? (role as RoleTag) : undefined,
    contexts: params.getAll("context").filter((c): c is ProjectContext => contextValues.includes(c as ProjectContext)),
    stacks: params.getAll("stack"),
  };
}

export function filtersToQuery(filters: Omit<WorkFilters, "lens"> & { lens?: string }): string {
  const params = new URLSearchParams();
  if (filters.lens) params.set("lens", filters.lens);
  if (filters.role) params.set("role", filters.role);
  filters.contexts.forEach((c) => params.append("context", c));
  filters.stacks.forEach((s) => params.append("stack", s));
  const query = params.toString();
  return query ? `?${query}` : "";
}

export function hasActiveFilters(filters: WorkFilters): boolean {
  return Boolean(filters.lens || filters.role || filters.contexts.length || filters.stacks.length);
}

function matchesLens(project: Project, lens: LensPreset): boolean {
  const roleMatch = project.roleTags.some((r) => lens.roles.includes(r));
  const contextMatch = !lens.contexts || lens.contexts.includes(project.context);
  return roleMatch && contextMatch;
}

export function applyFilters(all: Project[], filters: WorkFilters): Project[] {
  if (filters.lens) {
    const lens = filters.lens;
    const pinned = lens.pinned
      .map((slug) => all.find((p) => p.slug === slug))
      .filter((p): p is Project => Boolean(p));
    const rest = sortProjects(all.filter((p) => !lens.pinned.includes(p.slug) && matchesLens(p, lens)));
    return [...pinned, ...rest];
  }

  return sortProjects(
    all.filter(
      (p) =>
        (!filters.role || p.roleTags.includes(filters.role)) &&
        (!filters.contexts.length || filters.contexts.includes(p.context)) &&
        (!filters.stacks.length || filters.stacks.some((s) => p.stack.includes(s))),
    ),
  );
}
