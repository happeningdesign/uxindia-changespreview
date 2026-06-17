/**
 * LEADERSHIP SUMMIT — SPEAKERS DATA
 * ─────────────────────────────────
 * To add a speaker: copy one of the objects below and fill in the fields.
 * To reorder speakers: move the objects up or down.
 * To remove a speaker: delete the object.
 *
 * Fields:
 *   name      — Full name (required)
 *   role      — Job title and organisation, e.g. "VP Design, Google" (required)
 *   image     — URL to speaker photo — use Vercel Blob or any public CDN URL (required)
 *   talkType  — Session type shown as a small chip, e.g. "Grand Keynote" (optional)
 *   bio       — Short bio shown in the overlay card (optional; falls back to a generic sentence)
 */

export interface Speaker {
  name: string;
  role: string;
  image: string;
  talkType?: string;
  bio?: string;
}

const leadershipSpeakers: Speaker[] = [
  {
    name: "Velmurugan Paneerselvam",
    role: "Global Head, Cognizant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
    talkType: "Grand Keynote",
  },
];

export default leadershipSpeakers;
