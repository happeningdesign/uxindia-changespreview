/**
 * LEADERSHIP SUMMIT — SPEAKERS DATA
 * ─────────────────────────────────
 * To add a speaker: copy one of the objects below and fill in the fields.
 * To reorder speakers: move the objects up or down.
 * To remove a speaker: delete the object.
 *
 * Fields:
 *   name           — Full name (required)
 *   role           — Job title and organisation, e.g. "VP Design, Google" (required)
 *   image          — URL to speaker photo — use Vercel Blob or any public CDN URL (required)
 *   talkType       — Session type shown as a small chip, e.g. "Grand Keynote" (optional)
 *   bio            — Short bio shown in the overlay card (optional; falls back to a generic sentence)
 *   readMoreLink   — URL for "Read more" button in overlay (optional; if provided, makes button clickable)
 *   readMoreLabel  — Custom text for "Read more" button (optional; defaults to "Read more")
 */

export interface Speaker {
  name: string;
  role: string;
  image: string;
  talkType?: string;
  bio?: string;
  readMoreLink?: string;
  readMoreLabel?: string;
}

const leadershipSpeakers: Speaker[] = [
  {
    name: "Velmurugan Paneerselvam",
    role: "Global Head, Cognizant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
    talkType: "Grand Keynote",
    bio: "Velmurugan is a visionary leader with extensive expertise in digital transformation and enterprise design. He drives innovation across global teams, bringing strategic insights on scalable design systems and user-centered business solutions.",
    readMoreLink: "https://www.cognizant.com",
    readMoreLabel: "Learn More",
  },
  {
    name: "TBA",
    role: "Global Design Director, UMO Design Foundation",
    image: "/placeholder.svg?height=400&width=400",
    talkType: "Plenary Keynote",
    bio: "An industry thought leader with a passion for design excellence and cultural transformation. They bring valuable perspectives on building inclusive design practices and fostering design-driven organizations.",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "TBA",
    role: "Innovation Strategist, UMO Design Foundation",
    image: "/placeholder.svg?height=400&width=400",
    talkType: "Opening Remarks",
    bio: "A renowned expert in design strategy and innovation management. They specialize in helping organizations unlock creative potential and build design cultures that drive business impact.",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "TBA",
    role: "Design Strategist, UMO Design Foundation",
    image: "/placeholder.svg?height=400&width=400",
    talkType: "Deep Dive Talk",
    bio: "A seasoned design strategist with 15+ years of experience in product development and design systems. They excel at creating comprehensive frameworks that bridge business objectives with user needs.",
    readMoreLink: "",
    readMoreLabel: "Learn More",
  },
];

export default leadershipSpeakers;
