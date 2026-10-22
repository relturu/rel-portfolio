import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CaseStudyMeta } from "@/content/types";
import { getDetailProjects, getProject, getSeriesChildren } from "@/lib/projects";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { SeriesLayout } from "@/components/SeriesLayout";

type ProjectModule = { default: ComponentType; meta?: CaseStudyMeta };

export function generateStaticParams() {
  return getDetailProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.outcome } : {};
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || (project.type !== "case-study" && project.type !== "series")) notFound();

  const { default: Content, meta }: ProjectModule = await import(`@/content/projects/${slug}.mdx`);

  if (project.type === "series") {
    return (
      <SeriesLayout project={project} items={getSeriesChildren(project)}>
        <Content />
      </SeriesLayout>
    );
  }

  const caseStudies = getDetailProjects().filter((p) => p.type === "case-study" && !p.archived);
  const index = caseStudies.findIndex((p) => p.slug === slug);

  return (
    <CaseStudyLayout
      project={project}
      meta={meta ?? { summary: project.outcome, role: "[ROLE]", team: "[TEAM]", timeline: project.date, outcome: "[OUTCOME]" }}
      prev={caseStudies[index - 1]}
      next={caseStudies[index + 1]}
    >
      <Content />
    </CaseStudyLayout>
  );
}
