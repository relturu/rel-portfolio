import { FileText } from "lucide-react";
import { person } from "@/content/data";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const linkClass =
  "inline-flex items-center gap-1.5 font-mono text-xs text-muted underline underline-offset-4 transition-colors";

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-surface mt-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: email */}
          <a
            href={`mailto:${person.email}`}
            className="font-mono text-sm text-muted hover:text-ink underline underline-offset-4 transition-colors"
          >
            {person.email}
          </a>

          {/* Right: external links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={`${linkClass} hover:text-accent`}>
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href={person.github} target="_blank" rel="noopener noreferrer" className={`${linkClass} hover:text-ink`}>
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={person.resume} target="_blank" rel="noopener noreferrer" className={`${linkClass} hover:text-ink`}>
              <FileText className="w-3.5 h-3.5" aria-hidden />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
