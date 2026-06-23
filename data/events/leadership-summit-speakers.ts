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
 *   ogImage        — Path to OG image for speaker page meta (optional)
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
 *       talkCategory — Talk category chip (optional, reserved for future use)
 *       date        — Date of the session, e.g. "Sept 24" (optional)
 *       time        — Start time, e.g. "10:05 AM" (optional)
 *       endTime     — End time, e.g. "10:30 AM" (optional)
 *       title       — Talk title (optional)
 *       description — Talk description (optional)
 *       keyTakeaway — Key takeaway from the talk (optional)
 *       audience    — Who the talk is for (optional)
 */

import { Speaker, SpeakerTalk } from "@/types/speaker";
import { slugify } from "@/types/speaker";
import { getSpeakerSlug } from "@/types/speaker";

const leadershipSpeakers: Speaker[] = [
  {
    name: "Doug Powell",
    role: "Executive Design Leader",
    image: "/images/speakers/leadership-summit/Doug.webp",
    ogImage: "",
    talkType: "Grand Keynote",
    bio: "Doug Powell is an award-winning designer and executive design leader with more than 30 years of experience in a wide range of design disciplines. A recipient of the 2014 Distinguished Alumni Award from the Sam Fox School of Design at Washington University in St. Louis, and the 2014 Fellow Award from AIGA Minnesota, Doug is a lecturer, commentator and thought leader on design issues. He has presented at a variety of global conferences, forums, and universities including Beirut Design Week in Lebanon, Fortune's Brainstorm Design in Singapore, and Yale School of Management. He was on the jury of the 2018 Smithsonian Cooper Hewitt National Design Awards. Between 2011-2013 Doug served as the national president of AIGA, the professional association for design, the largest and most established design organization in the world. In the past decade Doug has served as Vice President of Design at IBM and Expedia Group, where he oversaw design practices, design systems, designer career and leadership programs, as well as the scaling of cross-functional design thinking practices across the companies. He is the producer and host of This Is A Prototype: The Design Leadership Podcast. Alongside his leadership training and coaching practice, Doug serves on the faculty of the Pratt School of Engineering at Duke University, and the Sam Fox School of Design & Visual Art at Washington University in St. Louis.",
    linkedin: "https://www.linkedin.com/in/douglaspowell330/",
    twitter: "",
    events: {
      leadership: {
        type: "Grand Keynote",
        track: "",
        talkCategory: "",
        title: "Announcing Soon",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Vyoma Pathak",
    role: "Sr. Design Practice Lead, Mouri Tech",
    image: "/images/speakers/leadership-summit/Vyoma.webp",
    ogImage: "",
    talkType: "Spark Session",
    bio: `Vyoma Pathak is the Head of User Experience (UX) Design at MOURI Tech, where she leads multidisciplinary teams across UX strategy, research, visual design, and digital transformation initiatives. Her experience spans healthcare, HR tech, AI-powered solutions, lifestyle products, and enterprise platforms, with a strong focus on creating human-centered experiences that align user needs with business and technology goals. Over the years, she has worked with both startups and global enterprises, leading projects from concept through execution while mentoring and growing high-performing design teams. She has previously spoken at UXINDIA Conference on UX Writing and participated in mentor panel discussions supporting aspiring designers in their professional journeys. Beyond enterprise UX, Vyoma is also currently co-building HUDAK, a community-led initiative exploring culture, heritage, and local storytelling in collaboration with members associated with INTACH. Her recent interests explore the evolving relationship between UX, AI, culture, and responsible design innovation.`,
    linkedin: "linkedin.com/in/vyomapathak/",
    twitter: "https://x.com/VyomaPathak",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        talkCategory: "Design Practice",
        title: "Death of the Wireframe",
        description:
          "The talk opens with a live AI generation demo of a UI built from a single prompt, on stage. I then ask the room: Was that output worse than your last sprint? That question leads to the crux: When generation is free, judgment becomes the bottleneck.From there the talk shifts from diagnosis to toolkit of four designer-native artifacts that bring judgment into every AI-assisted project: The Brief, The Guardrails, The Scorecard, and The Taste Library.Part three addresses the leadership question directly: which teams survive, which don't, and how to reorganise around the work that remains valuable.The talk closes with a provocation for Indian design leadership, that the age-old hierarchy placing Western strategy above Asian execution was built on a distinction AI just deleted. Whoever has the strongest taste, regardless of which side of the world they're on, now wins.",
        keyTakeaway: [
          "How to write a Design Brief that constrains AI output rather than leaving it to pattern-match toward the average.",
          "How to build a Taste Library that bakes your team's design DNA into every generation.",
          "How to replace subjective design reviews with a Scorecard that makes critique structured and less political.",
          "How to audit your team's deliverables and reorganise around the work that survives when generation costs nothing.",
          "Why Indian design leadership is uniquely positioned to lead not follow the post-wireframe era.",
        ],
        audience: [],
      },
    },
  },
  {
    name: "Harshita Hassani",
    role: "Sr. UX Designer,Optum (United Health Group)",
    image: "/images/speakers/leadership-summit/Harshita-Hassan.webp",
    ogImage: "",
    talkType: "Spark Session",
    bio: "Harshita Hassani is a UX designer with 5 years of experience building complex, data-dense enterprise healthcare analytics products at Optum. With a foundation in Computer Science and a Master's in Experience Design from Srishti Institute of Art, Design and Technology, she works at the intersection of clinical decision-making and human experience design. Her postgraduate capstone, 'Mapping My Care Network of PCOD,' was a year-long auto-ethnographic research project that arrived at a finding no dataset had surfaced: the most consistent, effective care she ever received was built in her mother's kitchen through decades of intentional, tested, and refined practice. Mumma's Archive is the living documentation of that wisdom and Mommi is the AI agent she is building to make it conversational and accessible to working women and hostellers in real time. She has previously spoken at UX India (2022, 2024), India HCI (2023, 2024), Salesforce Design Days (2024), and the PCOS Conference at IIT Bombay (2025). Outside work, she reads, writes, cooks, sketchnote & practice calisthenics.",
    linkedin: "https://in.linkedin.com/in/harshita-hassani-69965311a",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        talkCategory: "Social Impact",
        title:
          "The Original Algorithm: Archiving the Intelligence AI Cannot Replicate",
        description:
          "During my postgraduate capstone, I spent a year mapping my decade-long journey with PCOD through auto-ethnography, interviews, medical data, and data visualization. What emerged was not what I expected. Across every method, the most consistent and effective care I had received came not from clinical systems but from my mother - her intentional, patiently refined wisdom around food, healing, and conscious consumption.I work as a UX designer building enterprise healthcare systems at Optum. I understand what it means to structure knowledge into products. And I have come to believe, that what my mother carries cannot be fully datafied not because it is beyond understanding, but because it is built on relationship, observation, and right intent over decades.Mumma's Archive is a living journal that wisdom before it fades. Mommi is the AI agent I am building on that foundation to make the archive conversational and gently accessible to women who need care but have no one nearby to offer it.",
        keyTakeaway: [
          "Care is data. The intentional, observed wisdom of caregivers is a knowledge system and designers have a responsibility to treat it as one, not displace it with the next wellness app.",
          "There is a gap between building wellness tools and preserving wellness wisdom. Recognising that gap is the first design decision worth making.Archiving and building are not opposites.",
          "Mommi - an AI agent trained on a mother's intentional care wisdom - shows what becomes possible when you preserve first and build second. Preservation is the design brief.",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Ish Awasthi",
    role: "VP, UX Research, JPMC",
    image: "/images/speakers/leadership-summit/Ish-Awasti.webp",
    ogImage: "",
    talkType: "Spark Session",
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, I have built products and teams across very different contextsâ€”from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India.I have built design functions from the ground up, mentored teams, and created processes that improve user experience and product outcomes. My work spans the full spectrum of UX research, product design, and design systems, supported by hands-on experience in product management, business development, and project management. This allows me to approach product building not just through the lens of design, but through the wider realities of business, execution, and growth.The diversity of my journey reflects a continuous evolution in self-understanding, constantly drawing me toward new challenges, unfamiliar domains, and opportunities to keep learning.",
    linkedin: "https://www.linkedin.com/in/ish-awasthi-b38a4732v",
    twitter: "",
    events: {
      leadership: {
        type: "Spark Session",
        track: "",
        talkCategory: "Design Practice",
        title: "The roles they are a-changin: AI and the Great Dissolve",
        description:
          "During a recent stakeholder meeting, the PM came with a fully functional, AI-built prototype. It looked polished and the business liked it. For the next hour I sat shocked and unsure, wondering if my role had just become redundant.But once we had multiple design variations on the table, the question in the room shifted. Not which design looks better, but why. From aesthetics to usability, user needs and design language. That was the moment I understood that my role was never about creating an interface. It was about designing the right one.Multiple sessions like this later, three clear shifts emerged: decisions are the new bottleneck and PM roles will grow around that, specialists will continue but as reviewers and knowledge owners rather than producers and as AI homogenises design output, handcrafted and bespoke experiences will become a premium in their own right.Each of these futures needs different skills. This talk is about figuring out which one you are building towards.",
        keyTakeaway: [
          "The skill that matters now is not how fast you can create, but knowing what is right, useful, and worth shipping. Whether you move toward a generalist role or stay as a specialist, the people who will be most valuable in AI-native product teams are those who can look at multiple options and confidently decide which one is right and why.",
          "The designers value shifts from making interfaces to defining the right one. That reframe changes 'everything' from how you position your role to where you invest your time. The core of the work becomes interpreting user needs and guiding the direction, not producing the output.",
          "As AI makes competent design abundant, originality becomes the premium. This gives rise to a market for handcrafted, thoughtful, context-specific experiences that AI cannot serve. To be part of that market, you need to start building the taste and craft that exceptional design requires.",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Mario Van der Meulen",
    role: "CXO, Aleph Labs",
    image: "/images/speakers/leadership-summit/Van-Mario.webp",
    ogImage: "",
    talkType: "Plenary Keynote",
    bio: "Mario Van der Meulen is a design executive, author, and international speaker known for helping leaders unlock meaningful innovation through human-centered design. With 2+ decades of global experience across sectors, he brings depth, clarity, and provocation to every stage. He leads large-scale design systems and outcomes in regulated environments, integrating strategy, design governance, and AI-enabled workflows. Designing coherent, human-centred systems across physical, digital, operational, and service layers.",
    linkedin: "https://www.linkedin.com/in/mariovdm/",
    twitter: "",
    events: {
      leadership: {
        type: "Plenary Keynote",
        track: "",
        talkCategory: "Design Practice",
        title: "Be[coming] a leader in design",
        description:
          "The talk opens with a provocation. Almost no one leaves our work interactions with what they actually wanted. The person giving feedback walks away unsatisfied. The person receiving it walks away unclear. The leader chairing the meeting walks away wondering what just happened. The cause sits in the expectations we never surface, the conversations we postpone, and the affirmations we hold or hide. Under pressure, we get triggered into silence or violence. We shut down. We sharpen.From there the arc moves into what authentic design leadership actually asks of us. Naming what we want. Hearing what others want. Staying in the room when the temperature rises. The trade off is real. This path moves slowly. It exposes the leader who walks it. Scaling it is difficult work inside most orgs.What I would do differently is lean into the discomfort sooner. The material lands harder when the provocation is allowed to sit. The lesson I keep relearning is that care without honesty becomes decoration",
        keyTakeaway: [
          "What design leadership really isâ€”and why most models fail designers",
          "How to build trust as your core design output (yes, really)",
          "How power and presence work when you're no longer the hands-on designer",
        ],
        audience: "",
      },
    },
  },
];

export default leadershipSpeakers;
