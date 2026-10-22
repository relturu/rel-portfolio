# Build Guide: rel portfolio

Instructions for any LLM or coding agent working on this repo. Read this before writing code. Visual design, page content, and components are defined in `DESIGN_SPEC.md`; this file covers how the site is built and what it must leave room for.

## What this is
A personal portfolio for Arielle "Rel" Turullols (CMU IS + HCI, May 2027), targeting PM, tech consulting, and founder roles. Pages: Home, Work, Case study, Series detail, About, Contact. Resume is a PDF.

## Stack
- **Next.js (App Router) + TypeScript**, deployed on **Vercel** from GitHub (push to `main` = deploy; branches = preview links).
- **Tailwind CSS** for styling. Design tokens (colors, fonts, radii) are defined once as CSS variables and mapped into the Tailwind theme. Never hard-code colors in components.
- **MDX** for case study and series pages; one **`content/data.ts`** file for everything else.
- **Motion** (formerly Framer Motion) for animation.
- `next/image` for all images; **Vercel Analytics** enabled.
- No database, no auth, no separate backend.

## Folder structure
```
/app                  routes (page.tsx per page; work/[slug] for case studies)
/app/api              reserved for future route handlers (empty at first)
/components           reusable UI (Nav, Footer, ProjectCard, Tag, FilterSidebar, StatPanel, NowPanel...)
/components/widgets   optional self-contained features (see "Future customizations")
/content/data.ts      projects, stats, experience, leadership, hobbies, links, site settings
/content/projects     one .mdx per case study / series
/lib                  helpers (filtering, sorting, formatting, fetch wrappers)
/styles               global CSS + design tokens
/public               resume.pdf, images, fonts if self-hosted
```

## Core rules
1. **Content lives in data, not components.** Adding a project = add an entry to `data.ts` (and an `.mdx` file if it has a case study). No component edits required.
2. **Never invent content.** No made-up names, metrics, companies, or projects. Missing content renders as an obvious placeholder like `[METRIC]`.
3. **Static by default.** Every page is statically generated. Anything dynamic must use ISR (`revalidate`) or a route handler, and must have a fallback so the page never breaks if an outside service fails.
4. **Secrets stay server-side.** API keys go in Vercel environment variables, used only in server components or `/app/api`. Never expose them to the client.
5. **Small, composable components.** Each component does one job and takes typed props. Shared types live in `content/types.ts`.
6. **Accessible and fast.** Semantic HTML, alt text, visible focus states, WCAG AA contrast, works from 360px wide, respects `prefers-reduced-motion`. Heavy libraries are lazy-loaded only where used.
7. **Filters live in the URL.** Work page filters read/write query params (`?lens=pm`, `?role=design&context=client`), so links from Home can pre-filter.

## Data model (minimum)
```ts
type Project = {
  slug: string;
  title: string;
  type: "case-study" | "project" | "series" | "in-progress";
  context: "startup" | "client" | "hackathon" | "course";
  date: string;                 // e.g. "Fall 2026"
  outcome: string;              // one line
  roleTags: ("product" | "research" | "design" | "engineering" | "leadership")[];
  stack: string[];
  image?: string;
  links?: { demo?: string; code?: string; slides?: string };
  featured?: boolean;
  nda?: boolean;
  expectedDate?: string;        // in-progress only
  children?: string[];          // series only: child slugs
};
```
Stats, experience rows, hobbies, and site settings get their own typed arrays/objects in `data.ts`.

## Future customizations: leave room for these
Build so each of these can be added later **without restructuring**:

- **Animation layers**
  - Motion from day one: scroll reveals, card hover, filter reflow, page transitions. Wrap in a shared `<Reveal>` component and a `useReducedMotion` check.
  - Later: Lottie/Rive illustrations (e.g. animated mascot), GSAP ScrollTrigger for case study openings, React Three Fiber for 3D. Each loads via `next/dynamic` only on the page that uses it.
- **Widgets** (in `/components/widgets`, each toggleable from `data.ts` site settings):
  - *Music:* start with an Apple Music embed (song URL stored in `data.ts`). Later options: custom card via Apple Music API, or "recently played" via Last.fm, both server-side with ISR.
  - *Daily word:* server component fetching a word-of-the-day API with `revalidate: 86400`, falling back to a local word list in `data.ts`. Possible twist: show the word in another language with translation on hover (ties to the fluent•ish project).
  - Any new widget follows the same pattern: server-side fetch, cached, fallback, off by default.
- **Route handlers** in `/app/api` for anything needing live data or a secret (e.g. GitHub "last shipped" line).
- **Git-based CMS** (Keystatic or TinaCMS) later, editing the same `data.ts`/MDX files. Keep content formats clean so this drops in.
- **Theming:** light/dark from day one via tokens; an alternate accent or full theme should only require changing token values.
- **New sections or pages** (e.g. blog, writing): new route + new data array, reusing existing card/tag components.

## Don'ts
- No database, CMS, or auth until explicitly asked.
- No scroll-jacking, full-screen project snapping, or autoplay audio.
- No client-side fetching of third-party APIs with keys.
- No new dependencies without a clear reason; prefer what's listed above.
- Don't change the design tokens or page structure in `DESIGN_SPEC.md` without being asked.
