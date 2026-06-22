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
        keyTakeaway: ["Why AI works best when applied to real operational problems, not experimental side projects", "How reducing workflow friction can unlock visibility for design teams and their work", "The difference between AI-generated output and human creative judgement", "Practical insights into using AI for research synthesis, content structuring, and faster publishing workflows", "Why leadership today is less about certainty and more about experimenting, learning publicly, and shipping imperfectly", "A grounded framework for thinking about AI as a collaborator rather than a replacement"],
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
    linkedin: "https://www.linkedin.com/in/vineetgupta94/",
    twitter: "",
    events: {
      rising: {
        type: "Deep Dive",
        track: "",
        talkCategory: "Emerging Tech",
        title: "Rethinking HCI (Human Computer Interaction) in the Age of AI",
        description: "This talk explores a fundamental shift in Human-Computer Interaction (HCI): moving from direct manipulation to orchestration via shared context. I ground this in a high-stakes, 48-hour client deadline. The turning point is introducing 'Kabir' not a 'magic button' tool, but an AI teammate driven by deep design context.Attendees will learn how to build this new HCI paradigm into their workflows. They will discover that injecting shared context (like design systems and constraints) is the only way to stop AI from hallucinating generic layouts. A key decision was skipping wireframes to present a live prototype; the trade-off was sacrificing absolute pixel control for massive systemic speed.The biggest challenge was learning to explicitly tell the AI what not to do. If I did this again, I spend 80% of my time organizing constraints before ever prompting. Ultimately, the audience will learn that in modern HCI, curation beats creation, and output is only as good as context.",
        keyTakeaway: ["Shift from Manipulation to Orchestration: Attendees will change how they view their role, moving away from pushing pixels (direct manipulation) to directing AI like a manager (orchestrating intent).", "Master 'Context Injection': Instead of relying on generic prompts, attendees will learn how to feed their specific design systems, tokens, and business constraints into the AI to get high-quality, relevant outputs.", "Define Negative Constraints: Attendees will learn the crucial skill of explicitly telling the AI what not to do, which is the most effective way to stop AI hallucinations and generic design patterns.", "Skip Wireframes for Live Prototypes: Attendees will learn how to use AI to jump straight from an idea to a working, clickable prototype, turning weeks of static design debates into hours of functional testing."],
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
    bio: "Varedh Nigam is a design and CX leader with 15+ years of experience helping organizations navigate digital transformation at the intersection of customer experience, business strategy, and emerging technologies. As Associate Director, Product Experience & Design at Nagarro, she has led global initiatives across banking, aviation, telecommunications, and enterprise ecosystems, partnering with executives, product teams, and technology leaders to turn complex challenges into measurable outcomes.Her work spans CX consulting, service design, innovation programs, large-scale design thinking workshops, and Human-Centered AI initiatives. Known for connecting systems thinking with practical execution, she focuses on designing trust, aligning stakeholders, and ensuring that AI-enabled experiences create value for both people and businesses. Varedh is passionate about advancing the role of design from a delivery function to a strategic driver of transformation, helping organizations shape what could possibly go right when design leads.",
    linkedin: "",
    twitter: "",
    events: {
      rising: {
        type: "Workshop",
        track: "",
        talkCategory: "Emerging Tech",
        title: "Designing AI That Cares: A Hands-On Workshop on the HCAI Framework",
        description: "I created and have run HCAI as a hands-on workshop that teaches teams to design human-centered AI. Teams form, create an end-user persona, and empathise, goals, problems, expectations. They define a North Star and a clear challenge, then ideate AI-driven solutions. The core of the workshop is the HCAI tool: a matrix where every proposed feature is placed on two axes, computer automation and human control, so teams decide deliberately what the AI should own. They then pressure-test ideas for necessity, risk, and potential harm, prioritise for an MVP, and check it against five attributes, Reliable, Trustworthy, Unbiased, Auditable, Compliant. Teams finish with a named product concept and a sketched primary flow. What Iâ€™ve learned running it: the matrix is where the real debate happens, and teams need firm time-boxing or they over-discuss the persona and rush the prototype. What Iâ€™d do differently: protect the ideation-to-matrix transition; that is where the framework earns its value.",
        keyTakeaway: ["The HCAI framework end to end - how to take an AI product idea from user empathy to a prototype concept in one structured session.", 
 "The HCAI matrix as a working tool - placing every feature on automation and human-control axes to decide what the AI should own.", 
 "A way to pressure-test AI features for necessity, risk, and potential harm before they reach a roadmap.", 
 "The five human-centered AI attributes - Reliable, Trustworthy, Unbiased, Auditable, Compliant, as a checklist your team can reuse.", 
 "A repeatable workshop format you can run with your own team or stakeholders to align on human-centered AI."],
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
        talkCategory: "Design Practice",
        title: "Human-Centered AI: Accelerating Design Thinking Without Losing Empathy",
        description: "This workshop explores how AI can accelerate traditional human-centered design methods without replacing the core principles that make them effective: empathy, problem framing, collaboration, and continuous learning. In many organizations, teams move slowly because research synthesis, workflow mapping, concept generation, and prototype creation take significant time. AI can help compress those cycles by summarizing research, identifying patterns, generating early design directions, drafting user flows, creating testable prototypes, and surfacing assumptions that need validation.But the workshop is not about using AI to skip discovery or remove human judgment. Instead, it focuses on how AI can strengthen Design Thinking when used intentionally. Participants will learn how to move faster from ambiguity to clarity while still grounding decisions in real user needs, business outcomes, and technical feasibility.A key focus will be empathy-building across trio-teams: Product, Design, and Engineering",
        keyTakeaway: ["AI can accelerate Design Thinking, but should not replace it. Teams can use AI to synthesize research, generate ideas, map workflows, and create prototypes fasterâ€”but user empathy, problem framing, and human judgment still guide the work.", "Rapid prototyping becomes a shared learning tool for trio-teams.Product, Design, and Engineering can use AI-assisted prototypes to align earlier, test assumptions faster, and move from abstract discussion to concrete evidence.", "The goal is faster learning, not faster guessing. AI helps teams move from Plan → Build → Validate toward Build → Learn → Harden, but teams still need to validate with users, expose risks, and avoid polished outputs that create false confidence."],
        audience: "",
      },
    },
  },
];

export default risingLeadersSpeakers;
