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
    role: "Global Head, Cognizant",
    image: "/LS-Speaker-Images/Doug.webp",
    talkType: "Grand Keynote",
    bio: "Velmurugan is a visionary leader with extensive expertise in digital transformation and enterprise design. He drives innovation across global teams, bringing strategic insights on scalable design systems and user-centered business solutions.",
    readMoreLink: "https://www.cognizant.com",
    readMoreLabel: "Read More",
  },
];

export default leadershipSpeakers;
