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
 *       date        — Date of the session, e.g. "Sept 24" (optional)
 *       time        — Start time, e.g. "10:05 AM" (optional)
 *       endTime     — End time, e.g. "10:30 AM" (optional)
 *       title       — Talk title (optional)
 *       description — Talk description (optional)
 *       keyTakeaway — Key takeaway from the talk (optional)
 *       audience    — Who the talk is for (optional)
 */

export interface SpeakerTalk {
  type?: string;
  track?: string;
  date?: string;
  time?: string;
  endTime?: string;
  title?: string;
  description?: string;
  keyTakeaway?: string | string[];
  audience?: string | string[];
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
  // set by all-speakers.ts at build time — used for Rising Leaders page accent color
  colorIndex?: number;
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
    bio: `Vyoma Pathak is the Head of User Experience (UX) Design at MOURI Tech, where she leads multidisciplinary teams across UX strategy, research, visual design, and digital transformation initiatives. Her experience spans healthcare, HR tech, AI-powered solutions, lifestyle products, and enterprise platforms, with a strong focus on creating human-centered experiences that align user needs with business and technology goals. Over the years, she has worked with both startups and global enterprises, leading projects from concept through execution while mentoring and growing high-performing design teams. She has previously spoken at UXINDIA Conference on UX Writing and participated in mentor panel discussions supporting aspiring designers in their professional journeys. Beyond enterprise UX, Vyoma is also currently co-building HUDAK, a community-led initiative exploring culture, heritage, and local storytelling in collaboration with members associated with INTACH. Her recent interests explore the evolving relationship between UX, AI, culture, and responsible design innovation.`,
    linkedin: "linkedin.com/in/vyomapathak/",
    twitter: "https://x.com/VyomaPathak",
    events: {
      leadership: {
        type: "Spark Session",
        track: "AI Leadership",
        title: "Death of the Wireframe",
        description: "Stepping beyond UI generation to explore what design judgment looks like when anyone can design.",
        keyTakeaway:["How to earn cash", "How to earn fame"],
        audience: ["Design Professionals", "Design Juniors"],
      },
    },
  },
  {
    name: "Harshita Hassani",
    role: "Sr. UX Designer",
    company: "Optum (United Health Group)",
    image: "/LS-Speaker-Images/Harshita-Hassan.webp",
    talkType: "Spark Session",
    bio: "Harshita Hassani is a UX designer with 5 years of experience building complex, data-dense enterprise healthcare analytics products at Optum. With a foundation in Computer Science and a Master's in Experience Design from Srishti Institute of Art, Design and Technology, she works at the intersection of clinical decision-making and human experience design. Her postgraduate capstone, 'Mapping My Care Network of PCOD,' was a year-long auto-ethnographic research project that arrived at a finding no dataset had surfaced: the most consistent, effective care she ever received was built in her mother's kitchen through decades of intentional, tested, and refined practice. Mumma's Archive is the living documentation of that wisdom and Mommi is the AI agent she is building to make it conversational and accessible to working women and hostellers in real time. She has previously spoken at UX India (2022, 2024), India HCI (2023, 2024), Salesforce Design Days (2024), and the PCOS Conference at IIT Bombay (2025). Outside work, she reads, writes, cooks, sketchnote & practice calisthenics.",
    linkedin: "https://in.linkedin.com/in/harshita-hassani-69965311a",
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
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, I have built products and teams across very different contextsâ€”from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India.I have built design functions from the ground up, mentored teams, and created processes that improve user experience and product outcomes. My work spans the full spectrum of UX research, product design, and design systems, supported by hands-on experience in product management, business development, and project management. This allows me to approach product building not just through the lens of design, but through the wider realities of business, execution, and growth.The diversity of my journey reflects a continuous evolution in self-understanding, constantly drawing me toward new challenges, unfamiliar domains, and opportunities to keep learning.",
    linkedin: "https://www.linkedin.com/in/ish-awasthi-b38a4732v",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        title: "The roles they are a-changin: AI and the Great Dissolve",
        description: "AI is dissolving the lines between product, UX, and engineering — three new career paths are emerging in their place.",
        keyTakeaway: ["The skill that matters now is not how fast you can create, but knowing what is right, useful, and worth shipping. Whether you move toward a generalist role or stay as a specialist, the people who will be most valuable in AI-native product teams are those who can look at multiple options and confidently decide which one is right and why.", "The designers value shifts from making interfaces to defining the right one. That reframe changes 'everything' from how you position your role to where you invest your time. The core of the work becomes interpreting user needs and guiding the direction, not producing the output.", "As AI makes competent design abundant, originality becomes the premium. This gives rise to a market for handcrafted, thoughtful, context-specific experiences that AI cannot serve. To be part of that market, you need to start building the taste and craft that exceptional design requires."],
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
