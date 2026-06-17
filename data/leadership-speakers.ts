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
    name: "Doug Powell",
    role: "Executive Design Leader",
    image: "/LS-Speaker-Images/Doug.webp",
    talkType: "Grand Keynote",
    bio: "",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "Vyoma Pathak",
    role: "Sr. Design Practice Lead, MOURI Tech",
    image: "/LS-Speaker-Images/Vyoma.webp",
    talkType: "Spark Session",
    bio: "",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "Harshita Hassani",
    role: "Sr. UX Designer, Optum (United Health Group)",
    image: "/LS-Speaker-Images/Harshita-Hassan.webp",
    talkType: "Spark Session",
    bio: "",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "Ish Awasthi",
    role: "VP, UX research, JPMC",
    image: "/LS-Speaker-Images/Ish-Awasti.webp",
    talkType: "Spark Session",
    bio: "",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
  {
    name: "Mario Van der Meulen",
    role: "CXO Aleph Labs",
    image: "/LS-Speaker-Images/Van-Mario.webp",
    talkType: "Plenary Keynote",
    bio: "",
    readMoreLink: "",
    readMoreLabel: "Read More",
  },
];

export default leadershipSpeakers;
