import { featuredSlugs, projects, seriesChildren } from "@/content/data";
import type { Project, ProjectType, SeriesChild } from "@/content/types";

/** Work page grouping order; within a group, data.ts order is kept. */
const typeOrder: Record<ProjectType, number> = {
  "case-study": 0,
  "in-progress": 1,
  series: 2,
  project: 3,
};

export function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjects(slugs: string[]): Project[] {
  return slugs.map(getProject).filter((p): p is Project => Boolean(p));
}

export function getFeaturedProjects(): Project[] {
  return getProjects(featuredSlugs);
}

/** Projects that have their own page under /work/[slug]. */
export function getDetailProjects(): Project[] {
  return projects.filter(hasDetailPage);
}

export function hasDetailPage(project: Project): boolean {
  return project.type === "case-study" || project.type === "series";
}

export function getSeriesChildren(project: Project): SeriesChild[] {
  return (project.children ?? [])
    .map((slug) => seriesChildren.find((c) => c.slug === slug))
    .filter((c): c is SeriesChild => Boolean(c));
}
