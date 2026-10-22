/**
 * Shared content types. Everything in content/data.ts and the MDX exports
 * in content/projects conforms to these.
 */

export type ProjectType = "case-study" | "project" | "series" | "in-progress";
export type ProjectContext = "startup" | "client" | "hackathon" | "course" | "independent";
export type RoleTag = "product" | "research" | "design" | "engineering" | "leadership";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  context: ProjectContext;
  date: string; // e.g. "Fall 2026"
  outcome: string; // one line, max 2 lines on cards
  roleTags: RoleTag[]; // strongest first
  stack: string[];
  image?: string; // path under /public
  screens?: string[]; // several phone screens shown side by side; replaces image
  imageLabel?: string; // label for the placeholder when there is no image
  links?: { demo?: string; code?: string; slides?: string; video?: string; report?: string };
  featured?: boolean;
  nda?: boolean;
  archived?: boolean; // listed on /work/archive instead of Work and Home
  hidden?: boolean; // not shown anywhere yet
  expectedDate?: string; // in-progress only
  children?: string[]; // series only: slugs into seriesChildren
};

export type SeriesChild = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  image?: string;
  link?: string;
};

export type LensPreset = {
  id: string;
  title: string;
  description: string;
  roles: RoleTag[]; // project matches if it has any of these roles
  contexts?: ProjectContext[]; // ...and (if set) one of these contexts
  pinned: string[]; // slugs shown first, in this order
};

export type Stat = {
  value: string;
  label: string;
  annotation?: string;
};

export type ExperienceRow = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

export type Hobby = {
  id: string;
  title: string; // shown over the photo, bottom left
  image?: string;
};

export type NowPanelItem = {
  slug: string;
  line?: string; // replaces the project outcome
  href?: string; // makes the title a link
};

export type NowPanel = {
  term: string;
  image?: { src: string; alt: string }; // replaces the orbit ring
  items: NowPanelItem[]; // current projects shown in the Now panel
};

export type Person = {
  name: string;
  shortName: string;
  degree: string;
  school: string;
  graduation: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  heroHeadline: string;
  heroSubline: string;
  aboutTagline: string;
  aboutLead: string;
  aboutValues: { label: string; text: string }[]; // About: what I care about (bullets)
  aboutOutside: string; // About: outside of class
  availability: string;
};

export type SiteSettings = {
  title: string;
  description: string;
  widgets: {
    music: { enabled: boolean; appleMusicUrl: string };
    dailyWord: { enabled: boolean; fallbackWords: { word: string; language: string; translation: string }[] };
  };
};

/** Exported as `meta` from each content/projects/<slug>.mdx case study. */
export type CaseStudyMeta = {
  summary: string;
  role: string;
  team: string;
  timeline: string;
  outcome: string;
};
