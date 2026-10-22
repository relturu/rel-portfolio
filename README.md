# rel-portfolio

Personal portfolio for Rel Turu (CMU Information Systems + HCI, May 2027). Built with Next.js (App Router), TypeScript, Tailwind CSS, MDX and Motion, and deployed on Vercel.

- `BUILD_GUIDE.md`: how the site is built and the rules for changing it
- `CONTENT_GUIDE.md`: what content goes where, and how it's labeled
- `DESIGN_SPEC.md`: design tokens, type scale and components

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (checks types and pre-renders every page)
```

## Editing content

- **Projects, stats, experience, hobbies, links:** `content/data.ts`
- **Case study and series write-ups:** `content/projects/<slug>.mdx`. A new case study is a `data.ts` entry with `type: "case-study"` plus an `.mdx` file with the same slug.
- **Images:** put them in `public/images/` and set `image: "/images/…"` on the project.
- **Resume:** replace `public/resume.pdf` (currently a placeholder) with the real PDF.

Unconfirmed facts are shown as `[PLACEHOLDER]`s on purpose. Fill them in; don't guess. The open list is in `CONTENT_GUIDE.md` §5.

## Deploying

Pushing to `main` deploys to production on Vercel; other branches get preview links.
