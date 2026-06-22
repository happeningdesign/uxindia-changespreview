/**
 * LEADERSHIP SUMMIT — SPEAKERS DATA
 * ─────────────────────────────────
 * Each speaker object can include profile info, talk details, and social links.
 * Any field left empty ("") or undefined will NOT be shown on the speaker page.
 *
 * Fields:
 *   name           — Full name (required)
 *   role           — Job title only, e.g. "VP Design" (required)
 *   company        — Company / organisation name (optional)
 *   image          — Path to speaker photo (required)
 *   slug           — URL slug, auto-derived from name if omitted (optional)
 *   bio            — Full biography shown on the speaker page (optional)
 *   talkType       — Session type chip, e.g. "Grand Keynote", "Spark Session" (optional)
 *   linkedin       — LinkedIn profile URL (optional)
 *   twitter        — X / Twitter profile URL (optional)
 *   events         — Which events the speaker is at (optional)
 *     leadership   — Talk details for the Leadership Summit (optional)
 *     rising        — Talk details for the Rising Leaders Forum (optional)
 *       type        — Session type chip, e.g. "Keynote", "Deep Dive", "Spark Session" (optional)
 *       track       — Track chip, e.g. "AI & Design", "Design Strategy" (optional)
 *       title       — Talk title (optional)
 *       description — Talk description (optional)
 *       keyTakeaway — Key takeaway from the talk (optional)
 *       audience    — Who the talk is for (optional)
 */

export interface SpeakerTalk {
  type?: string;
  track?: string;
  title?: string;
  description?: string;
  keyTakeaway?: string;
  audience?: string;
}

export interface Speaker {
  name: string;
  role: string;
  company?: string;
  image: string;
  slug?: string;
  bio?: string;
  talkType?: string;
  linkedin?: string;
  twitter?: string;
  events?: {
    leadership?: SpeakerTalk;
    rising?: SpeakerTalk;
  };
  // legacy fields — kept for backwards compat with grid overlay
  readMoreLink?: string;
  readMoreLabel?: string;
}

/** Generates a URL-safe slug from a speaker name */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Returns the slug for a speaker, using explicit slug if set, otherwise derives from name */
export function getSpeakerSlug(speaker: Speaker): string {
  return speaker.slug || slugify(speaker.name);
}

const leadershipSpeakers: Speaker[] = [
  {
    name: "Doug Powell",
    role: "Executive Design Leader",
    company: "",
    image: "/LS-Speaker-Images/Doug.webp",
    talkType: "Grand Keynote",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      leadership: {
        type: "Grand Keynote",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Vyoma Pathak",
    role: "Sr. Design Practice Lead",
    company: "MOURI Tech",
    image: "/LS-Speaker-Images/Vyoma.webp",
    talkType: "Spark Session",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        title: "Death of the Wireframe",
        description: "Stepping beyond UI generation to explore what design judgment looks like when anyone can design.",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Harshita Hassani",
    role: "Sr. UX Designer",
    company: "Optum (United Health Group)",
    image: "/LS-Speaker-Images/Harshita-Hassan.webp",
    talkType: "Spark Session",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        title: "The Original Algorithm: Archiving the Intelligence AI Cannot Replicate",
        description: "Exploring how a decade of archived maternal wisdom became the foundation for an AI built on care, not just data.",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Ish Awasthi",
    role: "VP, UX Research",
    company: "JPMC",
    image: "/LS-Speaker-Images/Ish-Awasti.webp",
    talkType: "Spark Session",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        title: "The roles they are a-changin: AI and the Great Dissolve",
        description: "AI is dissolving the lines between product, UX, and engineering — three new career paths are emerging in their place.",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Mario Van der Meulen",
    role: "CXO",
    company: "Aleph Labs",
    image: "/LS-Speaker-Images/Van-Mario.webp",
    talkType: "Plenary Keynote",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      leadership: {
        type: "Plenary Keynote",
        track: "",
        title: "Be[coming] a leader in design",
        description: "A keynote on what it really takes to lead with integrity in design — without losing yourself to politics or pressure.",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
];

export default leadershipSpeakers;
