"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { person } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const desktopLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      className={`font-mono text-xs tracking-widest uppercase transition-all duration-150 relative py-1.5 ${
        isActive(href) ? "font-bold text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {label}
      {isActive(href) && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink" />}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-line">
      <nav aria-label="Main" className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <span className="font-mono text-lg sm:text-xl font-extrabold tracking-tight text-ink group-hover:text-accent transition-colors">
            {person.shortName}
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-7 md:gap-9">
          {navItems.map((item) => desktopLink(item.href, item.label))}
          <a
            href={person.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors py-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
          </a>
          {desktopLink("/contact", "Contact")}
          <ThemeToggle />
        </div>

        <div className="flex sm:hidden items-center gap-2.5">
          <ThemeToggle size="sm" />
          <a
            href={person.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wider uppercase text-ink border border-line px-2.5 py-1 rounded-control"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-1.5 text-ink border border-line rounded-control"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" aria-hidden /> : <Menu className="w-5 h-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-line bg-surface px-4 py-4 space-y-3">
          {[{ href: "/", label: "Home" }, ...navItems, { href: "/contact", label: "Contact" }].map((item) => {
            const active = item.href === "/" ? pathname === "/" : isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block w-full font-mono text-sm uppercase tracking-wider py-2 border-b border-line/50 ${
                  active ? "font-bold text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted">
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent">
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
            </a>
            <a href={person.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-ink">
              GitHub <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
