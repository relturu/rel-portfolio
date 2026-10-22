# Design Spec: rel portfolio

The visual system, carried over from the approved `portfolio-test` prototype. Read with `BUILD_GUIDE.md` (how it's built) and `CONTENT_GUIDE.md` (what goes where). Don't change tokens or page structure without being asked.

## Character
A clean "engineering notebook": monospace headings, a quiet grotesk body, hairline borders, crosshatched image placeholders with registration marks, and one green "live" accent. Light mode is the default; dark mode is a token swap.

## Tokens (`styles/globals.css`)
Colors are CSS variables mapped to Tailwind names. Use the Tailwind names (`bg-surface`, `text-muted`...) in components; never hex values.

| Tailwind name | Variable | Light | Dark | Use |
|---|---|---|---|---|
| `page` | `--bg` | `#F9F9F8` | `#121212` | Page background; text on `bg-ink` buttons |
| `surface` | `--surface` | `#FFFFFF` | `#1A1A1A` | Cards, nav, footer |
| `surface-muted` | `--surface-muted` | `#F3F3F2` | `#222222` | Chips, tags, placeholders, Now panel |
| `ink` | `--ink` | `#111111` | `#F2F2F0` | Primary text, filled badges/buttons |
| `muted` | `--muted` | `#6B6B6B` | `#9A9A96` | Secondary text, eyebrows |
| `line` | `--line` | `#E4E4E2` | `#2E2E2C` | All borders and dividers |
| `accent` | `--accent` | `#2B5FAE` | `#5D8FE6` | Hover color on titles/links, focus ring |
| `success` | `--success` | `#3FB97A` | `#3FB97A` | Live dots, in-progress pulse, Now nodes |
| `success-ink` | `--success-ink` | `#047857` | `#6EE7B7` | Series badge text, TL;DR outcome |
| `warning` | `--warning` | `#D97706` | `#FBBF24` | NDA marks, sun icon in dark mode |

Radii: `rounded-tag` 4px (badges, tags) · `rounded-control` 6px (buttons, chips) · `rounded-card` 14px (cards). Larger one-offs: 10–12px inner panels, 18–20px hobby cards and resume block, 24–28px Now panel.

Fonts: **JetBrains Mono** (`font-mono`) for headings, labels, tags, buttons, and numbers. **Plus Jakarta Sans** (`font-sans`) for body copy. Both via `next/font`.

## Type scale
| Element | Classes |
|---|---|
| Page title (Work, About, Contact) | `font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none`, uppercase word |
| Home hero headline (a sentence) | `font-mono text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]` |
| Case study / series title | `font-mono text-3xl sm:text-5xl font-bold` |
| Section title (case study) | `font-mono text-2xl font-bold` |
| Section display ("Fun things.") | `font-mono text-5xl sm:text-7xl font-bold` |
| Card title | `font-mono text-base sm:text-lg font-bold tracking-tight` |
| Eyebrow | `.eyebrow`: mono 0.75rem, 0.1em tracking, uppercase, muted |
| Body | `font-sans text-base`/`text-sm text-muted leading-relaxed` |

## Utilities
- `.card-hover`: lifts 3px, soft shadow, and ink border on hover (motion-safe only).
- `.bg-blueprint-grid`: 28px hairline grid (Now panel).
- `.bg-crosshatch`: diagonal crosshatch (case study gallery placeholders).
- Focus: 2px `accent` outline, 2px offset, on every focusable element.

## Components
- **Nav:** sticky, `bg-surface/95` with blur, bottom hairline. Wordmark `rel.` (mono extrabold) on the left. Right: WORK · ABOUT · RESUME ↗ · CONTACT, then a round sun theme toggle. The active link is bold with a 2px ink underline. Mobile: toggle, resume pill, menu drawer.
- **Footer:** email on the left; LinkedIn, GitHub, Resume, and a back-to-top square on the right. Nothing else.
- **Project card:**
  - Top: a 4:3 placeholder or image.
  - Meta row: type badge, context tag, and the date right-aligned.
  - Title with ↗, then the outcome clamped to 2 lines.
  - Series list (series only), then up to 4 stack tags.
  - Bottom: a hairline, up to 2–3 role tags, and links plus "View case study →".
  - Home cards are `simplified`: no stack or links.
- **Badges:**
  - Case study: filled ink.
  - Project: gray with border.
  - Series (N): green tint with a layers icon.
  - In progress: outline with a pulsing green dot.
- **Technical placeholder:** dashed diagonals, four corner registration marks, a centered label badge, and the ratio watermark. NDA projects always show "NDA work".
- **Lens cards (Home):** three cards labelled `01 / Lens`, each with a ↗, title, description and CTA, linking to `/work?lens=…`.
- **Stat panel:** one card, 5 columns on desktop, big mono numbers, an uppercase label and a small annotation.
- **Now panel:** a muted outer shell. Inside, a split card: an orbit ring with one green node per current project on the left; the "Building now" list on the right.
- **Work page:**
  - Page title, then a hairline.
  - A sidebar (What I did, Context, Tech stack checkboxes) beside the results. It's collapsible on mobile. What I did: Product strategy · Research · Design · Engineering · Leadership. Tech stack shows 4 options, then a "+ N more" toggle.
  - Results row: the count.
  - A 2-column card grid.
  - When a lens is active, a "Lens · …" bar with Clear.
- **Case study:**
  - Back link, then the NDA banner if applicable.
  - Hero: badges, title, summary and a 16:9 image.
  - TL;DR card: Role, Team, Timeline, Tools, Outcome.
  - A sticky "On this page" TOC beside these sections: 01 Problem · 02 What I did (Phase A–D cards) · 03 Key tradeoff (accent callout) · 04 Outcome (big metric card) · 05 Reflection.
  - Previous/next links at the end.
- **Series:** header (badge, title, outcome, count), an intro, then one row card per project (16:9 media and text).
- **About:** page title, then a portrait beside the intro. Then two columns, Experience and Leadership & Teaching, each with a 2px ink top rule. Then "Fun things." with chips (All · Music · Movement · Stories) above 3-column hobby cards. A resume block closes the page.
- **Contact:** page title and availability line. Then stacked row cards: Email (copy and send), LinkedIn, GitHub. A "Based in" note closes the page.

## Motion
- `<Reveal>` fades sections up 16px on scroll (once).
- The Work grid animates layout when filters change.
- Everything checks `useReducedMotion` and becomes static when reduced motion is on.
- No scroll-jacking and no autoplay.
