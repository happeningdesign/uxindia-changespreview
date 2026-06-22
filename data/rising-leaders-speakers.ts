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
    image: "/RS-Speaker-Images/Deepashree Kale.webp",
    talkType: "Deep Dive",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        talkCategory: "Design Practice",
        title: "Shipped & Imperfect",
        description: "This session follows a personal and operational journey rather than a polished â€œAI success story.â€ I begin with the emotional reality of leading through uncertainty while AI rapidly reshapes design expectations. The core problem was simple but painfully real: our team created strong client work, but most case studies never got published because the workflow between design, writing, development, approvals, and publishing was too fragmented.Instead of treating AI as a trend experiment, I used it on a real organizational bottleneck. I stopped designing case studies in Figma and began building them directly in HTML with Claude as a collaborator, then integrating them into a Next.js workflow. This reduced handoff friction and helped us ship faster.But the talk is equally about the trade-offs. AI accelerated execution, research synthesis, and structuring, but it also flattened creative nuance and made outputs feel repetitive. Iâ€™ll share where AI genuinely helped, where it failed.",
        keyTakeaway: ["Why AI works best when applied to real operational problems, not experimental side projects", "How reducing workflow friction can unlock visibility for design teams and their work", "The difference between AI-generated output and human creative judgement","Practical insights into using AI for research synthesis, content structuring, and faster publishing workflows", "Why leadership today is less about certainty and more about experimenting, learning publicly, and shipping imperfectly", "A grounded framework for thinking about AI as a collaborator rather than a replacement"],
        audience: "",
      },
    },
  },
  {
    name: "Vineet Gupta",
    role: "Assistant Vice President, Design & Branding",
    image: "/RS-Speaker-Images/Vineet Gupta.png",
    talkType: "Deep Dive",
    bio: "",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        talkCategory: "",
        title: "Rethinking HCI (Human Computer Interaction) in the Age of AI",
        description: "This talk explores a fundamental shift in Human-Computer Interaction (HCI): moving from direct manipulation to orchestration via shared context. I ground this in a high-stakes, 48-hour client deadline. The turning point is introducing 'Kabir' not a 'magic button' tool, but an AI teammate driven by deep design context.Attendees will learn how to build this new HCI paradigm into their workflows. They will discover that injecting shared context (like design systems and constraints) is the only way to stop AI from hallucinating generic layouts. A key decision was skipping wireframes to present a live prototype; the trade-off was sacrificing absolute pixel control for massive systemic speed.The biggest challenge was learning to explicitly tell the AI what not to do. If I did this again, I spend 80% of my time organizing constraints before ever prompting. Ultimately, the audience will learn that in modern HCI, curation beats creation, and output is only as good as context.",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Sujit Kumar Pradhan",
    role: "UX Designer",
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
