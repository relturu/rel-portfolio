import type { ComponentType } from "react";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { person } from "@/content/data";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export const metadata: Metadata = { title: "Contact" };

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

function LinkCard({ href, eyebrow, Icon, iconClass }: { href: string; eyebrow: string; Icon: ComponentType<{ className?: string }>; iconClass: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface border border-line rounded-card p-5 sm:p-6 flex items-center justify-between gap-4 card-hover"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className={`p-3 rounded-[8px] bg-surface-muted border border-line ${iconClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block">{eyebrow}</span>
          <span className="font-mono text-base sm:text-lg font-bold text-ink group-hover:text-accent transition-colors break-all">
            {displayUrl(href)}
          </span>
        </div>
      </div>
      <ArrowUpRight
        className="w-5 h-5 shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        aria-hidden
      />
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-3 pb-6 border-b border-line">
        <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight -ml-[0.04em] text-ink leading-none my-3">CONTACT</h1>
        <div className="eyebrow">open to coffee chats, matcha chats, and more</div>
      </section>

      <section className="space-y-4">
        <div className="bg-surface border border-line rounded-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover">
          <div className="flex items-center gap-4 min-w-0">
            <div className="p-3 rounded-[8px] bg-surface-muted text-ink border border-line">
              <Mail className="w-5 h-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-xs uppercase tracking-wider text-muted block">Email</span>
              <a
                href={`mailto:${person.email}`}
                className="font-mono text-base sm:text-lg font-bold text-ink hover:text-accent transition-colors break-all"
              >
                {person.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyEmailButton email={person.email} />
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-control font-mono text-xs tracking-wider uppercase bg-ink text-page hover:opacity-90 transition-opacity"
            >
              <span>Send</span>
              <ArrowRight className="w-3 h-3" aria-hidden />
            </a>
          </div>
        </div>

        <LinkCard href={person.linkedin} eyebrow="LinkedIn" Icon={LinkedinIcon} iconClass="text-accent" />
        <LinkCard href={person.github} eyebrow="GitHub" Icon={GithubIcon} iconClass="text-ink" />
      </section>

      <section className="bg-surface-muted border border-line rounded-card p-6 text-xs font-mono text-muted space-y-1">
        <span className="font-bold text-ink block uppercase">Location</span>
        <p className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-ink" aria-hidden />
          <span>{person.location}</span>
          <span aria-label="moving to">→</span>
          <span>SF Bay Area</span>
        </p>
      </section>
    </div>
  );
}
