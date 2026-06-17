/**
 * RISING LEADERS FORUM — SPEAKERS DATA
 * ──────────────────────────────────────
 * To add a speaker: copy one of the objects below and fill in the fields.
 * To reorder speakers: move the objects up or down.
 * To remove a speaker: delete the object.
 *
 * Fields:
 *   name           — Full name (required)
 *   role           — Job title and organisation, e.g. "VP Design, Google" (required)
 *   image          — URL to speaker photo — use Vercel Blob or any public CDN URL (required)
 *   talkType       — Session type shown as a small chip, e.g. "Mentor Session" (optional)
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

const risingLeadersSpeakers: Speaker[] = [
  {
    name: "Mohan Krishnaraj",
    role: "Global Head, Cognizant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
    talkType: "Mentor Session",
    bio: "Mohan brings 20+ years of experience in leading design teams and building world-class design systems. He's passionate about mentoring emerging designers and fostering innovation-driven design cultures.",
    readMoreLink: "https://www.cognizant.com",
    readMoreLabel: "Learn More",
  },
  {
    name: "Kate Moran",
    role: "VP Research, N/NG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
    talkType: "Workshop Lead",
    bio: "Kate is a renowned user research expert with extensive experience in UX strategy and user-centered design. She leads research initiatives that shape product direction and drive meaningful user experiences.",
    readMoreLink: "",
    readMoreLabel: "Learn More",
  },
  {
    name: "Prof. Kirti Trivedi",
    role: "VDP, IIT Indore",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
    talkType: "Keynote",
    bio: "Prof. Trivedi is an academic leader and design innovator dedicated to nurturing the next generation of designers. They bring academic rigor and industry insights to design education and research.",
    readMoreLink: "https://www.iitindore.ac.in",
    readMoreLabel: "Visit IIT Indore",
  },
];
  // ── Add more speakers below this line ──────────────────────────────────────
  // {
  //   name: "First Last",
  //   role: "Title, Organisation",
  //   image: "https://...",
  //   talkType: "Spark Session",
  //   bio: "Optional short bio text.",
  // },
];

export default risingLeadersSpeakers;
