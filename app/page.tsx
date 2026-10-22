import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Mail } from "lucide-react";
import { lensPresets, nowPanel, person, stats } from "@/content/data";
import { getFeaturedProjects, getProjects } from "@/lib/projects";
import { LensCards } from "@/components/LensCards";
import { NowPanel } from "@/components/NowPanel";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { StatPanel } from "@/components/StatPanel";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="pt-4 sm:pt-10">
        <div className="space-y-6">
          <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.1] max-w-3xl">
            {person.heroHeadline}
          </h1>

          <p className="font-sans text-base sm:text-lg text-muted max-w-3xl leading-relaxed">{person.heroSubline}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={person.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-control bg-ink text-page font-mono text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <FileText className="w-4 h-4" aria-hidden />
              <span>Resume</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-control bg-surface text-ink border border-line hover:border-ink font-mono text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden />
              <span>Contact</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs tracking-wider uppercase text-muted hover:text-ink transition-colors ml-1"
            >
              <span>Explore all work</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* I'm looking for… */}
      <Reveal>
        <section className="space-y-4" aria-labelledby="looking-for">
          <h2 id="looking-for" className="eyebrow">Open to full-time roles · Summer 2027</h2>
          <LensCards lenses={lensPresets} />
        </section>
      </Reveal>

      {/* Proof / stats */}
      <Reveal>
        <section aria-label="Highlights">
          <StatPanel stats={stats} />
        </section>
      </Reveal>

      {/* Featured work */}
      <section className="space-y-6" aria-labelledby="featured-work">
        <div className="flex items-center justify-between pb-2 border-b border-line">
          <h2 id="featured-work" className="eyebrow">Featured work · Case studies</h2>
          <Link href="/work" className="font-mono text-xs text-muted hover:text-ink transition-colors inline-flex items-center gap-1">
            <span>view all work</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} simplified />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Now */}
      <Reveal>
        <section>
          <NowPanel term={nowPanel.term} projects={getProjects(nowPanel.slugs)} />
        </section>
      </Reveal>
    </div>
  );
}
