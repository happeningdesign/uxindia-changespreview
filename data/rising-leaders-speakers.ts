/**
 * RISING LEADERS FORUM — SPEAKERS DATA
 * ──────────────────────────────────────
 * Each speaker object can include profile info, talk details, and social links.
 * Any field left empty ("") or undefined will NOT be shown on the speaker page.
 * Import Speaker, slugify, getSpeakerSlug from leadership-speakers if needed for cross-event speakers.
 *
 * Fields: same as leadership-speakers.ts — see that file for full documentation.
 */

import type { Speaker } from "@/data/leadership-speakers";
export type { Speaker };

const risingLeadersSpeakers: Speaker[] = [
  {
    name: "Deepashree Kale",
    role: "Head of Design",
    company: "",
    image: "/RS-Speaker-Images/Deepashree Kale.webp",
    talkType: "Deep Dive",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Vineet Gupta",
    role: "Assistant Vice President, Design & Branding",
    company: "",
    image: "/RS-Speaker-Images/Vineet Gupta.png",
    talkType: "Deep Dive",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Sujit Kumar Pradhan",
    role: "UX Designer",
    company: "Google",
    image: "/RS-Speaker-Images/Sujit Kumar Pradhan.png",
    talkType: "Deep Dive",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Varedh Nigam",
    role: "Associate Director",
    company: "Nagarro Software Pvt. Ltd.",
    image: "/RS-Speaker-Images/Varedh.png",
    talkType: "Workshop",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Workshop",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Anna Gerasimchuk",
    role: "Head of UIUX Engineering",
    company: "McKesson, Ontada",
    image: "/RS-Speaker-Images/Anya.png",
    talkType: "Workshop",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Workshop",
        track: "",
        title: "",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
];

export default risingLeadersSpeakers;
