# Content Guide: rel portfolio

What goes where, and how each item is labeled. Use with `BUILD_GUIDE.md` and `DESIGN_SPEC.md`. Anything in `[BRACKETS]` is unconfirmed: fill it in or leave the placeholder visible. Never replace it with a guessed number.

---

## 1. Label system

Every project card carries four kinds of labels. Keep them consistent so the filters work.

### Type badge (one per project)
| Badge | Use when | Style |
|---|---|---|
| `CASE STUDY` | Has a full write-up page with process + outcome | Filled black |
| `PROJECT` | Card only, maybe demo/code links; no full write-up | Gray fill |
| `SERIES (N)` | One card grouping several small related projects | Green tint + count |
| `IN PROGRESS` | Active work; shows expected date | Outline + green dot |

### Context tag (one per project)
| Tag | Use when |
|---|---|
| `Startup / Founder` | My own venture or a product I started and own |
| `Client work` | Done for a real outside organization (paid or volunteer) |
| `Hackathon` | Built during a hackathon/competition and not continued |
| `Course` | Class project (no real client) |
| `Independent` | Club, personal, or self-initiated project (no class, no client, not a venture) |

If a hackathon project kept going as my own product (Moneymon), use `Startup / Founder`.

### Role tags: "What I did" (1–3 per project; these power the main filter)
Only tag a role if I **owned a real part** of it, not just watched it happen.

| Tag | Apply when I… |
|---|---|
| `Product strategy` | set scope, priorities, roadmap, metrics, or made the core feature calls |
| `Research` | ran user research, analytics, market/competitive research, testing |
| `Design` | made UX flows, wireframes, prototypes, UI, or a design system |
| `Engineering` | wrote production or prototype code, schema, data pipelines |
| `Leadership` | led a team, managed a project, or ran client/stakeholder relationships |

Put the strongest role first. Cards show the first 2–3, then `+N`.

**Filter chips:** All · Product strategy · Research · Design · Engineering · **Leadership**. Include Leadership in the chip row; the current mockup is missing it, and it's needed for consulting readers.

### Stack tags (any number; cards show 4, then `+N`)
Use these exact spellings so filters group correctly:
`React`, `React Native`, `Expo`, `TypeScript`, `JavaScript`, `Python`, `Django`, `Swift`, `Java`, `Ruby on Rails`, `PostgreSQL`, `Supabase`, `WordPress`, `Figma`, `Figma Make`, `Google AI Studio`, `Claude API`, `Unity`, `C#`, `Docker`, `Kafka`, `Google Analytics`, `Microsoft Clarity`.

Sidebar "Tech stack" filter shows only the ~10 most used: React Native, TypeScript, Python, PostgreSQL, Figma, WordPress, Swift, Docker, Claude API, Ruby on Rails.

### Dates
Use terms: `Fall 2025`, `Spring 2026`, `Summer 2026`. Ongoing work: `Fall 2025 – Now`. Sort newest first by the most recent active term.

---

## 2. Where each project goes

### Home page
**Featured work (4 cards, in this order):**
1. WPC Website Redesign
2. AskScotty
3. Moneymon
4. Stealth AI Golf-Coaching Startup

After Dec 11, consider swapping fluent•ish in for Moneymon or the golf startup.

**Now panel (current projects):** fluent•ish (links to its card), Comic Vision AI (one line, no image, no link: stealth), Movie Recommendation Service (one line).

**"I'm looking for…" lens results** (what each preset should surface first):
| Lens | Filter | Projects that should appear at top |
|---|---|---|
| Product management | Product strategy + Research | WPC, AskScotty, Stealth Golf Startup, fluent•ish |
| Consulting | Client work + Research | Stealth Golf Startup, WPC |
| Founder work | Startup/Founder + Engineering + Design | Moneymon, AskScotty, fluent•ish, Pocketfridge |

**Not shown as cards (yet):**
- **Comic Vision AI:** no public visuals and stealth, so a card would have nothing to show or click. It appears in the Now panel and About → Experience. Add a card once there's something public (demo, screenshots, launch).
- **Keep PA Beautiful:** waiting on client permission and visuals. Appears in About → Experience; becomes a case study once approved.

### Work page: four tiers

**Tier 1: Featured case studies** (`CASE STUDY` badge, `featured: true`, full write-up page; also on Home)
| Project | Context | Date | Role tags | Stack | Notes |
|---|---|---|---|---|---|
| WPC Website Redesign | Client work | Summer 2025 – Now | Research, Design, Leadership | WordPress, Figma, Google Analytics, Microsoft Clarity | Analytics showed ~75% of interactions from action CTAs; site serves 64,000+ users; built design system; launch [DATE] |
| AskScotty | Hackathon | Summer 2026 | Product strategy, Engineering | React Native, Expo, Django, PostgreSQL, Claude API | Live; tested with 5–10 users; 2 builders + 1 designer; I owned product + engineering decisions |
| Moneymon | Startup / Founder | Spring 2025 – Spring 2026 | Engineering, Product strategy, Design | React Native, Expo, TypeScript, Supabase, PostgreSQL | Started at Moneythink Finnovation ([AWARD]); then built solo: 14-table schema, Row Level Security, custom auth, gamified layer |
| Stealth AI Golf-Coaching Startup | Client work | Spring 2026 | Research, Product strategy | Figma | NDA: never use the company's real name anywhere on the site (including file names, slugs, alt text). No screens. Product Management Academy consulting; research disproved the founder's 3 core hypotheses |

If time is short: launch with WPC + AskScotty written; show Moneymon + golf as cards marked "case study coming soon" until written.

**Tier 2: Archive** (cards only; no full write-up)

*In progress* (`IN PROGRESS` badge)
| Project | Context | Expected | Role tags | Stack | Notes |
|---|---|---|---|---|---|
| fluent•ish | Course | Dec 2026 | Product strategy, Engineering, Design | Swift [CONFIRM] | My idea; team of 4; I lead core feature decisions + backend/data; final demo Dec 11, judged by alumni. Promote to Tier 1 after demo day |
| Movie Recommendation Service | Course | Dec 2026 | Leadership, Product strategy | Python, Kafka, Docker | I'm project manager; live service for ~1M simulated users; hybrid model built by teammate (credit him); code link. Candidate for a case study after the semester (dashboards, A/B results) |

*Series* (`SERIES (N)` badge)
| Series | Context | Date | Role tags | Children |
|---|---|---|---|---|
| AI-Augmented Design | Course | Fall 2026 | Design, Research | Setlog app redesign (Google AI Studio) · Project 2 [TITLE] (Google AI Studio) · Figma competitor (Figma Make) [CONFIRM which project] · Projects 3–4 [TBD]. First candidate to promote |

*Projects* (`PROJECT` badge)
| Project | Context | Date | Role tags | Stack | Links |
|---|---|---|---|---|---|
| Pocketfridge | Hackathon | Spring 2026 | Engineering | TypeScript, Expo | [demo/code/slides] |
| Beli Feature Pitch | Independent (club pitch) | Spring 2026 | Product strategy, Research | Figma | [slides] |
| Classic Creamery | Course | Spring 2026 | Engineering | Ruby on Rails, PostgreSQL | [code] |
| Santorini | Course | Spring 2026 | Engineering | Java | [code] |
| Mermaid.js Open Source | Course | Fall 2025 | Engineering | TypeScript, Git | [merged PR link] |
| Exposure Therapy VR | Course | Fall 2025 | Design, Engineering | Unity, C# | [video] |
| Instagram AI Bias Research | Course | Spring 2025 | Research | — | [report] |

**Tier 3: Later** (not on the Work page yet)
| Project | Where it appears for now | Add when |
|---|---|---|
| Keep PA Beautiful | About → Experience | Client approves showing it + visuals exist → case study (Client work; Leadership, Research, Design; WordPress, Figma) |
| Comic Vision AI | Now panel (one line) + About → Experience | Something public exists → card, likely case study |
| Social Events Planning App | Nowhere yet | After its final presentation → archive project card |

**Tier 4: Leave off the site** (stays on resume/brag sheet only)
CoDesign, SAV bike, AnyWay, AdVise, DHCS bakeoffs, Instacart DB, Sheraden, AI prompting research. Covrick appears only as an optional line in About → Experience. Add any project back only if it has strong visuals or a real result.

---

## 3. Card copy rules
- **Title:** project name, plus a short descriptor after a colon only if the name isn't self-explanatory (e.g., "AskScotty: Campus Q&A Agent").
- **Outcome line (max 2 lines):** what it is + the strongest real result. Pattern: "[Built/Led/Redesigned] [what] for [who], [result]." Use `[METRIC]` if no real number yet.
- **Be honest about team roles.** If a designer made the screens and I built them, say so in the case study.
- **NDA work:** generic name ("Stealth AI Golf-Coaching Startup"), "NDA WORK" image placeholder, no logos/screens.
- **Course work** is fine to show; label it `Course` and lead with what I owned.

---

## 4. Other pages

### Home stats panel (pick 4–5)
- 64,000+ users served by the WPC redesign
- 100+ students taught (Information Systems TA)
- 20 students in a course I designed (Ghibli StuCo)
- [AWARD] at Moneythink Finnovation
- 24 AI tools orchestrated in AskScotty (optional, technical)

### About: Experience
Comic Vision AI (Co-Founder, Product Lead) · Keep PA Beautiful (Web Designer & Developer) · Western Pennsylvania Conservancy (Web Design & Development Co-Lead; earlier Website Intern) · Sol-X Technologies (UI/UX Intern) · Covrick LLC (Inventory Associate, optional)

### About: Leadership & Teaching
Teaching Assistant, Information Systems Milieux (100+ students) · Teaching Assistant, Cognitive Psychology · Student Instructor, Studio Ghibli StuCo (designed curriculum) · VP of Standards, Multicultural Greek Council · Kappa Phi Lambda (Warden, Academic Chair, Website Manager, and more) · Project Lead, Design for America · Product Management Academy

### About: Fun things (filter chips: All · Music · Movement · Stories)
| Item | Category |
|---|---|
| Cello, All University Orchestra | Music |
| Dancer's Symposium / Greek Sing | Music |
| Climbing (bouldering) | Movement |
| Hiking | Movement |
| Intramural soccer & volleyball | Movement |
| Studio Ghibli & anime (I teach a course on it) | Stories |
| Mahjong | Stories |

Each card: one real photo, a 2–3 line description, and a detail line. Tie a hobby to how I work only where it's genuine.

### Contact
Availability line: open to full-time Product Management, Tech Consulting, and Founder roles starting summer 2027. Email: aturullo@andrew.cmu.edu · LinkedIn: linkedin.com/in/rel-turu · GitHub: github.com/relturu.

---

## 5. Open items to fill in
- [ ] WPC launch date
- [ ] Moneymon award name/placement
- [ ] Comic Vision AI: YOLO version, next milestone date
- [ ] fluent•ish final stack
- [ ] AI-Augmented Design projects 2–4 titles
- [ ] Beli pitch context (course vs. PMA)
- [ ] Social Events app stack
- [ ] Links: demos, GitHub repos, slides, merged Mermaid PR
- [ ] Images for every case study (screens, Figma, before/after, photos)
