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
  {
    name: "Kate Moran",
    role: "VP Research, N/NG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
    talkType: "Plenary Keynote",
  },
  {
    name: "Prof. Kirti Trivedi",
    role: "VDP, IIT Indore",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
    talkType: "Panel Discussion",
  },
  {
    name: "Rucha Humnabadkar",
    role: "Director Of Design, Youtube",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
    talkType: "Deep Dive Talk",
  },
  {
    name: "Mirjam Wouters",
    role: "Experience Labs Lead, Royal Philips",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
    talkType: "Spark Session",
  },
  {
    name: "Donald Chesnut",
    role: "CDO, CANDESCENT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
    talkType: "Grand Keynote",
  },
  {
    name: "Ravinder Singh",
    role: "Co-Founder, Rishihood",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
    talkType: "Panel Discussion",
  },
  // ── Add more speakers below this line ──────────────────────────────────────
  // {
  //   name: "First Last",
  //   role: "Title, Organisation",
  //   image: "https://...",
  //   talkType: "Workshop Lead",
  //   bio: "Optional short bio text.",
  // },
];

export default leadershipSpeakers;
