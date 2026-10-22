import type { Metadata } from "next";
import { Download } from "lucide-react";
import { experience, hobbies, leadershipAndTeaching, person } from "@/content/data";
import type { ExperienceRow } from "@/content/types";
import { HobbyGrid } from "@/components/HobbyGrid";
import { Reveal } from "@/components/Reveal";
import { TechnicalPlaceholder } from "@/components/TechnicalPlaceholder";

export const metadata: Metadata = { title: "About" };

function ExperienceColumn({ title, rows }: { title: string; rows: ExperienceRow[] }) {
  return (
    <div className="space-y-6">
      <div className="border-t-2 border-ink pt-4">
        <h2 className="font-mono text-sm sm:text-base font-bold tracking-widest uppercase text-ink">{title}</h2>
      </div>
      <ul className="divide-y divide-line">
        {rows.map((item) => (
          <li key={item.role + item.organization} className="py-5 space-y-1.5 first:pt-0">
            <h3 className="font-sans text-base font-semibold text-ink">{item.role}</h3>
            <div className="font-mono text-xs text-muted uppercase tracking-wider">
              {item.organization} · {item.dates}
            </div>
            <p className="font-sans text-sm text-muted leading-relaxed pt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="space-y-4">
        <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight -ml-[0.04em] text-ink leading-none my-3">ABOUT</h1>
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">Information Systems × HCI · Carnegie Mellon ’27</div>
      </section>

      <div className="h-px bg-line w-full" />

      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4 space-y-2.5">
          <TechnicalPlaceholder
            label={`Portrait · ${person.name}`}
            aspectRatio="4:3"
            image="/images/backup_profile.jpg"
            alt={`Portrait of ${person.name}`}
          />
          <p className="font-mono text-[11px] text-muted tracking-tight">
            Skógafoss, Iceland
          </p>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="font-sans text-xl sm:text-2xl text-ink leading-relaxed">{person.aboutLead}</p>
          <ul className="space-y-2 list-disc pl-5 marker:text-muted">
            {person.aboutValues.map((value) => (
              <li key={value.label} className="font-sans text-base text-muted leading-relaxed">
                <span className="font-semibold text-ink">{value.label}.</span> {value.text}
              </li>
            ))}
          </ul>
          <p className="font-sans text-base text-muted leading-relaxed">{person.aboutOutside}</p>
        </div>
      </section>

      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ExperienceColumn title="Experience" rows={experience} />
          <ExperienceColumn title="Leadership & Teaching" rows={leadershipAndTeaching} />
        </section>
      </Reveal>

      <section className="space-y-6 pt-4 border-t border-line">
        <h2 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-ink">What keeps me going</h2>
        <HobbyGrid hobbies={hobbies} />
      </section>

      <section className="bg-surface-muted border border-line rounded-[18px] p-8 sm:p-10 text-center space-y-4">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">Resume</div>
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-ink">Need the one-page PDF?</h2>
        <div className="pt-2">
          <a
            href={person.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-control bg-ink text-page font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" aria-hidden />
            <span>View resume PDF</span>
          </a>
        </div>
      </section>
    </div>
  );
}
