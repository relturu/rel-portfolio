/**
 * All site content lives here (case study write-ups live in content/projects/*.mdx).
 *
 * Rule: never invent content. Anything unconfirmed stays as a visible
 * [PLACEHOLDER] until the real value is known. See CONTENT_GUIDE.md.
 */
import type {
  ExperienceRow,
  Hobby,
  LensPreset,
  NowPanel,
  Person,
  Project,
  ProjectContext,
  RoleTag,
  SeriesChild,
  SiteSettings,
  Stat,
} from "./types";

/* ------------------------------------------------------------------ */
/* Labels                                                              */
/* ------------------------------------------------------------------ */

export const roleLabels: Record<RoleTag, string> = {
  product: "Product strategy",
  research: "Research",
  design: "Design",
  engineering: "Engineering",
  leadership: "Leadership",
};

export const contextLabels: Record<ProjectContext, string> = {
  startup: "Startup / Founder",
  client: "Client work",
  hackathon: "Hackathon",
  course: "Course",
  independent: "Independent",
};

/** Filter chip order on the Work page. */
export const roleFilterOrder: RoleTag[] = ["product", "research", "design", "engineering", "leadership"];

/** Sidebar "Tech stack" filter: the ~10 most used. */
export const stackFilterOptions: string[] = [
  "React Native",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Figma",
  "WordPress",
  "Swift",
  "Docker",
  "Claude API",
  "Ruby on Rails",
];

/* ------------------------------------------------------------------ */
/* Site + person                                                       */
/* ------------------------------------------------------------------ */

export const siteSettings: SiteSettings = {
  title: "Arielle Turullols | Product, HCI & Design Portfolio",
  description:
    "Portfolio for Arielle Turullols, CMU B.S. Information Systems & HCI (May 2027), targeting full-time Product Management, Tech Consulting, and Founder roles.",
  widgets: {
    music: { enabled: false, appleMusicUrl: "" },
    dailyWord: { enabled: false, fallbackWords: [] },
  },
};

export const person: Person = {
  name: "Arielle Turullols",
  shortName: "Arielle Turullols",
  degree: "B.S. Information Systems & Human-Computer Interaction",
  school: "Carnegie Mellon University",
  graduation: "May 2027",
  location: "Pittsburgh, PA",
  email: "aturullo@andrew.cmu.edu",
  linkedin: "https://www.linkedin.com/in/rel-turu",
  github: "https://github.com/relturu",
  resume: "/resume.pdf",
  heroHeadline: "I research, design, build, and lead digital products.",
  heroSubline: "Carnegie Mellon University · B.S. Information Systems & HCI",
  aboutTagline:
    "Product management and human-computer interaction builder at Carnegie Mellon University.",
  aboutLead:
    "I operate where systems architecture meets human-centered design. At Carnegie Mellon, I study Information Systems and Human-Computer Interaction.",
  aboutValues: [
    {
      label: "Environment",
      text: "Much of my client work is for conservation, from the Western Pennsylvania Conservancy to Keep PA Beautiful.",
    },
    {
      label: "People",
      text: "I've taught 100+ students as a TA and designed my own StuCo course; the people using what I build come first.",
    },
    {
      label: "Ethical tech",
      text: "I'm interested in AI governance and in building technology responsibly, with design that respects user autonomy and privacy rather than relying on dark patterns or opaque data practices.",
    },
  ],
  aboutOutside: "Outside of class, I love travel, soccer, piano, and baking.",
  availability:
    "Open to full-time Product Management, Tech Consulting, and Founder roles starting summer 2027.",
};

/* ------------------------------------------------------------------ */
/* Projects (Work page order: case studies, in progress, series, projects) */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  // Case studies
  {
    slug: "wpc-website-redesign",
    title: "WPC Website Redesign",
    type: "case-study",
    context: "client",
    date: "Summer 2025 – Now",
    outcome:
      "Redesigned the Western Pennsylvania Conservancy site for 64,000+ users; analytics showed ~75% of interactions came from action CTAs.",
    roleTags: ["research", "design", "leadership"],
    stack: ["WordPress", "Figma", "Google Analytics", "Microsoft Clarity"],
    image: "/images/projects/wpc-website-redesign.jpg",
    imageLabel: "WPC · Before / after",
    featured: true,
  },
  {
    slug: "askscotty",
    title: "AskScotty: Campus Q&A Agent",
    type: "case-study",
    context: "hackathon",
    date: "Summer 2026",
    outcome:
      "Built a live campus Q&A agent that orchestrates 24 AI tools, tested with 5–10 users. I owned the product and engineering decisions.",
    roleTags: ["product", "engineering"],
    stack: ["React Native", "Expo", "Django", "PostgreSQL", "Claude API"],
    image: "/images/projects/askscotty.png",
    imageLabel: "AskScotty · App screens",
    featured: true,
  },
  {
    slug: "keep-pa-beautiful",
    title: "Keep PA Beautiful: Website Redesign",
    type: "case-study",
    context: "client",
    date: "Fall 2025 – Now",
    outcome:
      "Led a Design for America student team from research to redesign; the client then hired me to build it. Launch expected late 2027.",
    roleTags: ["leadership", "research", "design"],
    stack: ["WordPress", "Figma"],
    imageLabel: "Keep PA Beautiful · Redesign",
    hidden: true, // add back with client permission + visuals; lives in About until then
  },
  {
    slug: "moneymon",
    title: "Moneymon",
    type: "case-study",
    context: "startup",
    date: "Spring 2025 – Spring 2026",
    outcome:
      "Started at Moneythink Finnovation (1st place), then built solo: 14-table schema, Row Level Security, custom auth, and a gamified layer.",
    roleTags: ["engineering", "product", "design"],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    image: "/images/projects/moneymon.png",
    screens: ["/images/projects/moneymon.png", "/images/projects/moneymon-2.png", "/images/projects/moneymon-3.png"],
    imageLabel: "Moneymon · App screens",
    featured: true,
  },
  {
    slug: "stealth-golf-startup",
    title: "Stealth AI Golf-Coaching Startup",
    type: "case-study",
    context: "client",
    date: "Spring 2026",
    outcome:
      "Product consulting through Product Management Academy; my research disproved the founder's 3 core hypotheses.",
    roleTags: ["research", "product"],
    stack: ["Figma"],
    image: "/images/projects/stealth-golf-startup-green.jpg",
    imageLabel: "NDA work",
    nda: true,
    featured: true,
  },

  // In progress
  {
    slug: "fluentish",
    title: "fluent•ish",
    type: "in-progress",
    context: "course",
    date: "Fall 2026",
    expectedDate: "Dec 2026",
    outcome:
      "My idea, built with a team of 4. I lead core feature decisions and the backend/data; final demo Dec 11, judged by alumni.",
    roleTags: ["product", "engineering", "design"],
    stack: ["Swift [CONFIRM]"],
    imageLabel: "fluent•ish · Prototype",
    archived: true,
  },
  {
    slug: "comic-vision-ai",
    title: "Comic Vision AI",
    type: "in-progress",
    context: "startup",
    date: "[START] – Now",
    expectedDate: "[DATE]",
    outcome:
      "Co-founder and product lead at an early-stage startup; I annotated 143 defects for the detection pipeline.",
    roleTags: ["product", "engineering", "research"],
    stack: ["Python", "[YOLO version]", "Grounding DINO"],
    imageLabel: "Comic Vision AI · Detection",
    hidden: true, // stealth, no public visuals: Now panel + About only until there is a demo or launch
  },
  {
    slug: "movie-recommendation-service",
    title: "Movie Recommendation Service",
    type: "in-progress",
    context: "course",
    date: "Fall 2026",
    expectedDate: "Dec 2026",
    outcome:
      "Project manager for a live recommendation service serving ~1M simulated users. The hybrid model was built by my teammate [TEAMMATE].",
    roleTags: ["leadership", "product"],
    stack: ["Python", "Kafka", "Docker"],
    imageLabel: "Movie Recommendation Service",
    archived: true,
  },
  {
    slug: "social-events-app",
    title: "Social Events Planning App",
    type: "in-progress",
    context: "course",
    date: "Fall 2026",
    expectedDate: "Dec 2026",
    outcome: "Strategy and prototype for a social events planning app in Managing Digital Transformation.",
    roleTags: ["product", "design"],
    stack: ["[STACK]"],
    imageLabel: "Social Events App · Prototype",
    hidden: true, // add to the archive after its final presentation
  },

  // Series
  {
    slug: "ai-augmented-design",
    title: "AI-Augmented Design",
    type: "series",
    context: "course",
    date: "Fall 2026",
    outcome: "Redesigns and prototypes built with AI design tools: Google AI Studio and Figma Make.",
    roleTags: ["design", "research"],
    stack: ["Google AI Studio", "Figma Make"],
    imageLabel: "AI-Augmented Design · Series",
    children: ["setlog-redesign", "ai-design-project-2", "figma-competitor", "ai-design-projects-3-4"],
    archived: true,
  },

  // Projects
  {
    slug: "pocketfridge",
    title: "Pocketfridge",
    type: "project",
    context: "hackathon",
    date: "Spring 2026",
    outcome: "Hackathon build in TypeScript and Expo. [ONE-LINE DESCRIPTION + RESULT]",
    roleTags: ["engineering"],
    stack: ["TypeScript", "Expo"],
    imageLabel: "Pocketfridge",
    archived: true,
  },
  {
    slug: "beli-feature-pitch",
    title: "Beli Feature Pitch",
    type: "project",
    context: "independent",
    date: "Spring 2026",
    outcome: "A research-backed feature pitch for Beli, made for a club. [ONE-LINE RESULT]",
    roleTags: ["product", "research"],
    stack: ["Figma"],
    imageLabel: "Beli · Feature pitch",
    archived: true,
  },
  {
    slug: "classic-creamery",
    title: "Classic Creamery",
    type: "project",
    context: "course",
    date: "Spring 2026",
    outcome: "Ruby on Rails and PostgreSQL application. [ONE-LINE DESCRIPTION]",
    roleTags: ["engineering"],
    stack: ["Ruby on Rails", "PostgreSQL"],
    imageLabel: "Classic Creamery",
    archived: true,
  },
  {
    slug: "santorini",
    title: "Santorini",
    type: "project",
    context: "course",
    date: "Spring 2026",
    outcome: "The Santorini board game, implemented in Java. [ONE-LINE DETAIL]",
    roleTags: ["engineering"],
    stack: ["Java"],
    imageLabel: "Santorini",
    archived: true,
  },
  {
    slug: "mermaid-open-source",
    title: "Mermaid.js Open Source",
    type: "project",
    context: "course",
    date: "Fall 2025",
    outcome: "Merged open-source contribution to Mermaid.js. [WHAT THE PR DOES]",
    roleTags: ["engineering"],
    stack: ["TypeScript", "Git"],
    imageLabel: "Mermaid.js · Merged PR",
    archived: true,
  },
  {
    slug: "exposure-therapy-vr",
    title: "Exposure Therapy VR",
    type: "project",
    context: "course",
    date: "Fall 2025",
    outcome: "A VR exposure therapy experience built in Unity. [ONE-LINE DETAIL]",
    roleTags: ["design", "engineering"],
    stack: ["Unity", "C#"],
    imageLabel: "Exposure Therapy VR",
    archived: true,
  },
  {
    slug: "instagram-ai-bias-research",
    title: "Instagram AI Bias Research",
    type: "project",
    context: "course",
    date: "Spring 2025",
    outcome: "Research on AI bias on Instagram. [KEY FINDING]",
    roleTags: ["research"],
    stack: [],
    imageLabel: "Instagram AI Bias · Report",
    archived: true,
  },
];

export const seriesChildren: SeriesChild[] = [
  {
    slug: "setlog-redesign",
    title: "Setlog App Redesign",
    description: "[ONE-LINE DESCRIPTION]",
    tools: ["Google AI Studio"],
  },
  {
    slug: "ai-design-project-2",
    title: "[PROJECT 2 TITLE]",
    description: "[ONE-LINE DESCRIPTION]",
    tools: ["Google AI Studio"],
  },
  {
    slug: "figma-competitor",
    title: "Figma Competitor [CONFIRM which project]",
    description: "[ONE-LINE DESCRIPTION]",
    tools: ["Figma Make"],
  },
  {
    slug: "ai-design-projects-3-4",
    title: "Projects 3–4 [TBD]",
    description: "[ONE-LINE DESCRIPTION]",
    tools: ["[TOOL]"],
  },
];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

/** Featured cards on Home, in this order. */
export const featuredSlugs = ["wpc-website-redesign", "askscotty", "moneymon", "stealth-golf-startup"];

export const lensPresets: LensPreset[] = [
  {
    id: "pm",
    title: "Product Management",
    description: "Product strategy and research: WPC, AskScotty, a stealth golf startup.",
    roles: ["product", "research"],
    pinned: ["wpc-website-redesign", "askscotty", "stealth-golf-startup", "fluentish"],
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description: "Client work and research: a stealth golf startup and WPC.",
    roles: ["research"],
    contexts: ["client"],
    pinned: ["stealth-golf-startup", "wpc-website-redesign"],
  },
  {
    id: "founder",
    title: "Founder Work (0 → 1)",
    description: "Products I started and built: Moneymon, AskScotty.",
    roles: ["engineering", "design"],
    contexts: ["startup"],
    pinned: ["moneymon", "askscotty", "fluentish", "pocketfridge"],
  },
];

export const stats: Stat[] = [
  { value: "64,000+", label: "Users served", annotation: "WPC website redesign" },
  { value: "100+", label: "Students taught", annotation: "Information Systems TA" },
  { value: "20", label: "Students", annotation: "In a course I designed (Ghibli StuCo)" },
  { value: "1st", label: "Place", annotation: "Moneythink Finnovation" },
  { value: "24", label: "AI tools", annotation: "Orchestrated in AskScotty" },
];

export const nowPanel: NowPanel = {
  term: "Fall 2026",
  image: { src: "/images/now-panel.jpg", alt: "Paper speech bubbles saying welcome in many languages" },
  items: [
    { slug: "fluentish", href: "/work/archive#fluentish" },
    { slug: "comic-vision-ai", line: "Co-founder and product lead at an early-stage startup." },
    { slug: "movie-recommendation-service", line: "PM of a live ML recommendation service." },
  ],
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const experience: ExperienceRow[] = [
  {
    role: "Co-Founder, Product Lead",
    organization: "Comic Vision AI",
    dates: "[DATES]",
    description: "Leading product at an early-stage computer vision startup; annotated 143 defects for the detection pipeline.",
  },
  {
    role: "Web Designer & Developer",
    organization: "Keep PA Beautiful",
    dates: "[DATES]",
    description: "Hired to build the website redesign my Design for America team researched and designed. Launch expected late 2027.",
  },
  {
    role: "Web Design & Development Co-Lead",
    organization: "Western Pennsylvania Conservancy",
    dates: "[DATES]",
    description: "Co-leading a redesign of a site serving 64,000+ users and building its design system. Earlier: Website Intern.",
  },
  {
    role: "UI/UX Intern",
    organization: "Sol-X Technologies",
    dates: "[DATES]",
    description: "[ONE-LINE DESCRIPTION]",
  },
];

export const leadershipAndTeaching: ExperienceRow[] = [
  {
    role: "Teaching Assistant",
    organization: "Information Systems Milieux",
    dates: "[DATES]",
    description: "Teaching 100+ students.",
  },
  {
    role: "Teaching Assistant",
    organization: "Cognitive Psychology",
    dates: "[DATES]",
    description: "[ONE-LINE DESCRIPTION]",
  },
  {
    role: "Student Instructor",
    organization: "Studio Ghibli StuCo",
    dates: "[DATES]",
    description: "Designed the curriculum and teach 20 students.",
  },
  {
    role: "VP of Standards",
    organization: "Multicultural Greek Council",
    dates: "[DATES]",
    description: "[ONE-LINE DESCRIPTION]",
  },
  {
    role: "Warden, Academic Chair, Website Manager, and more",
    organization: "Kappa Phi Lambda",
    dates: "[DATES]",
    description: "[ONE-LINE DESCRIPTION]",
  },
  {
    role: "Project Lead",
    organization: "Design for America",
    dates: "[DATES]",
    description: "Led the student team behind the Keep PA Beautiful research and redesign.",
  },
  {
    role: "Product Consultant",
    organization: "Product Management Academy",
    dates: "[DATES]",
    description: "Consulted for a stealth AI golf-coaching startup; research disproved the founder's 3 core hypotheses.",
  },
];

export const hobbies: Hobby[] = [
  { id: "cello", title: "Cello" },
  { id: "dance", title: "Dancer's Symposium & Greek Sing" },
  { id: "climbing", title: "Climbing" },
  { id: "hiking", title: "Hiking" },
  { id: "intramurals", title: "Intramural Soccer & Volleyball" },
  { id: "ghibli", title: "Studio Ghibli & Anime" },
  { id: "mahjong", title: "Mahjong" },
];
