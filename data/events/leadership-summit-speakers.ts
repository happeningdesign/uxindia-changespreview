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
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Grand Keynote - 40 Mins",
          track: "",
          talkCategory: "",
          title: "Talk Title: TBA",
          description: "",
          keyTakeaway: "",
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "",
          title: "Workshop: TBA",
          description: "",
          keyTakeaway: "",
          audience: "",
        },
      ],
    },
  },
  {
    name: "Jose Coronado",
    role: "Advisor, Interim Head, Product & Design, Digital Impulsum",
    image: "/images/speakers/leadership-summit/Jose-Coronado.png",
    ogImage: "",
    talkType: "Plenary Keynote",
    bio: "Jose Coronado is a bilingual Product and Design Executive specializing in enterprise operating model transformation across global markets. He partners with executive teams to scale product and design organizations, align strategy with execution, and drive measurable performance inside complex, regulated institutions. His work sits at the intersection of strategy, operations, and organizational design. He leads large-scale transformation efforts that modernize operating models, strengthen governance, elevate talent systems, and translate design investment into sustained business impact. Jose advises major financial services institutions across Latin America on enterprise transformation, operating model redesign, and scaling design impact. Fluent in English and Spanish, he helps align executives across regions, accelerate decision-making, and navigate the cultural and regulatory complexity of multinational banking. At Target, Jose built the Strategic Planning & Operations practice from the ground up, hiring and developing senior leaders and establishing the business infrastructure required to support growth at scale. Before that, he served as Executive Director of Experience Design at JPMorgan's Corporate & Investment Bank, where he built and scaled the global Design organization as a strategic capability within a highly complex financial environment. Earlier in his career, Jose partnered with organizations including McKinsey, Accenture, Bain Capital, Aquent, and AIG, advising Fortune 10, 50, and 500 companies such as ADP, Oracle, and AT&T on strategy, transformation, and organizational effectiveness. He also serves as a board advisor and speaks internationally on leadership, operating model evolution, and scaling design for business performance, with more than 100 engagements across North America, Latin America, Europe, and Asia.",
    linkedin: "https://www.linkedin.com/in/josecoronado/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Plenary Keynote - 30 Mins",
          track: "",
          talkCategory: "",
          title: "Talk Title: TBA",
          description: "",
          keyTakeaway: "",
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "",
          title: "Workshop: TBA",
          description: "",
          keyTakeaway: "",
          audience: "",
        },
      ],
    },
  },
  {
    name: "Pontus Warnestal",
    role: "Head of Design, Ambition Group",
    image: "/images/speakers/leadership-summit/Pontus-Warnestal.png",
    ogImage: "",
    talkType: "Plenary Keynote",
    bio: "Award-winning designer, researcher (PhD), and educator with over two decades of practical experience integrating human-centered design with emerging technologies and AI in academic, industrial, and startup environments. - Published Author and Researcher: Author of 40+ peer-reviewed publications and books, including \"Designing AI-Powered Services\" (2021; 2022; 2023), providing practical insights on AI and design integration. Featured in 20+ podcasts since 2019, sharing expertise on AI and human-centered design. - Education and Learning: Program Director, and lecturer with 25 years of teaching experience. Designed and leads AI and Design education at Ambition Empower, returning guest lecturer at YRGO, and have delivered 150+ keynotes and invited talks since 2020. Published innovative studio pedagogy work, earning two Best Paper Awards. Recipient of the Excellent Teacher Award twice. - Leadership and Strategy: Deputy Vice Chancellor and Program Director at Halmstad University, where I launched and led the Digital Design and Innovation program, collaborating with 90+ companies. Experience leading UX, service design, and AI initiatives across diverse industries, including roles as Head of Design at Crispin Porter + Bogusky Europe, Head of Design Direction at inUse, and Design Lead at AI agency eghed. - Internationally Recognized Research: Developed the award-winning \"Give Me a Break\" app for child cancer survivors, receiving the Livestrong Innovation Prize and a nomination for the Swedish Design Award. Recognized for pioneering participatory design methodologies for children in sensitive contexts and human-centered design for real-world urban and architectural projects, earning a Best of CHI Honorable Mention Award. - Technical Expertise and Design: Skilled in both strategic design thinking and coding, I created design frameworks for business innovation and crafted adaptive spoken dialogue systems for Nokia Home Communication, which led to a patent for its dialogue model implementation, detailed in my PhD thesis. Decades of experience in crafting UX design solutions.",
    linkedin: "https://www.linkedin.com/in/pontuswarnestal/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Plenary Keynote - 30 Mins",
        track: "",
        talkCategory: "Design Practice",
        title: "The Design Leadership Challenge for the AI Era",
        description: "Generative AI is reshaping what design teams pay attention to, how they collaborate, and which capabilities they lose. This talk examines the less visible costs of AI adoption eroding judgment, weaker focus, and critical thinking that quietly atrophies. Design leaders will leave with practical signals to spot when AI is undermining team effectiveness, and concrete frameworks to guide tool adoption without sacrificing the capabilities that make great design possible.",
        keyTakeaway: [
          "A clearer understanding of why declining focus and engagement in AI-augmented teams is a design capability issue, not just a workflow problem.",
          "Practical signals to watch for when AI tools begin to weaken design judgment and team effectiveness.",
          "A set of concrete questions and decision frameworks to guide tool adoption, team practices, and capability development.",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Kaladhar Bapu",
    role: "Founder, UXINDIA",
    image: "/images/speakers/leadership-summit/Kaladhar-Bapu.png",
    ogImage: "",
    talkType: "Opening Keynote",
    bio: "Kaladhar Bapu's name comes with a story. He was named after Bapu, the legendary Indian artist and film director who could turn a blank canvas into an entire world. Kaladhar had the rare privilege of working with him. Bapu once told him that creativity was not something he practiced. It was something he lived.That idea stayed with Kaladhar.For the past 25 years, it has quietly shaped everything he has built.Kaladhar has spent a large part of his career leading product design for some of the world's most complex financial systems, across organizations such as BNY Mellon, Goldman Sachs, Citi, and Microsoft. These are not simple products. They serve millions of users, involve high-stakes decisions, and require design systems that do not just look good, but actually help organizations work better.Through that work, he learned something important.Design is no longer just about execution.It is moving into decision-making.AI is only accelerating that shift.And most organizations are not ready for it.But the work that truly drives him goes beyond enterprise systems. It is the larger question of how designers become more influential, more strategic, and more responsible for outcomes.Kaladhar works with leaders and teams to help design move from craft to influence, from output to ownership, and from service function to strategic capability. At its highest level, he believes this shift can turn designers into Designpreneurs — people who do not just create outputs, but own outcomes.Alongside his enterprise work, Kaladhar has spent more than two decades building design ecosystems. He founded UMO Design Foundation and UXINDIA, now one of Asia's most influential design platforms, impacting 90,000+ designers. His intention has always been simple: make design more accessible, more serious, and more useful to the next generation of leaders.One of the initiatives closest to him is **1 Million Women in Design and AI Literacy by 2030**.He also built Bapu Studio as an R&D lab to test a belief he has carried for years: Creativity is not talent.Creativity is a teachable skill.He often says this to teams: If a 12-year-old cannot understand your design system, it is probably too complex for your organization.Kaladhar's education has taken him from Industrial Design at IIT Bombay to Design Management at Pratt Institute in New York, and executive education at The Wharton School. But his real learning has always come from building — building teams, systems, communities, platforms, and sometimes, starting from a blank page.Today, Kaladhar helps organizations and leaders understand where design is going next, especially in the age of AI.Because the future of design will not belong only to people who can make things beautiful.It will belong to people who can make better decisions.",
    linkedin: "https://www.linkedin.com/in/kbapu/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Opening Keynote",
        track: "",
        talkCategory: "",
        title: "Opening Remarks & Keynote",
        description: "Announcing Soon",
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
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session - 18 Mins",
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
  // {
  //   name: "Harshita Hassani",
  //   role: "Sr. UX Designer,Optum (United Health Group)",
  //   image: "/images/speakers/leadership-summit/Harshita-Hassan.webp",
  //   ogImage: "",
  //   talkType: "Spark Session",
  //   bio: "Harshita Hassani is a UX designer with 5 years of experience building complex, data-dense enterprise healthcare analytics products at Optum. With a foundation in Computer Science and a Master's in Experience Design from Srishti Institute of Art, Design and Technology, she works at the intersection of clinical decision-making and human experience design. Her postgraduate capstone, 'Mapping My Care Network of PCOD,' was a year-long auto-ethnographic research project that arrived at a finding no dataset had surfaced: the most consistent, effective care she ever received was built in her mother's kitchen through decades of intentional, tested, and refined practice. Mumma's Archive is the living documentation of that wisdom and Mommi is the AI agent she is building to make it conversational and accessible to working women and hostellers in real time. She has previously spoken at UX India (2022, 2024), India HCI (2023, 2024), Salesforce Design Days (2024), and the PCOS Conference at IIT Bombay (2025). Outside work, she reads, writes, cooks, sketchnote & practice calisthenics.",
  //   linkedin: "https://in.linkedin.com/in/harshita-hassani-69965311a",
  //   twitter: "",
  //   events: {
  //     leadership: {
  //       type: "Spark Session",
  //       track: "",
  //       talkCategory: "Social Impact",
  //       title:
  //         "The Original Algorithm: Archiving the Intelligence AI Cannot Replicate",
  //       description:
  //         "During my postgraduate capstone, I spent a year mapping my decade-long journey with PCOD through auto-ethnography, interviews, medical data, and data visualization. What emerged was not what I expected. Across every method, the most consistent and effective care I had received came not from clinical systems but from my mother - her intentional, patiently refined wisdom around food, healing, and conscious consumption.I work as a UX designer building enterprise healthcare systems at Optum. I understand what it means to structure knowledge into products. And I have come to believe, that what my mother carries cannot be fully datafied not because it is beyond understanding, but because it is built on relationship, observation, and right intent over decades.Mumma's Archive is a living journal that wisdom before it fades. Mommi is the AI agent I am building on that foundation to make the archive conversational and gently accessible to women who need care but have no one nearby to offer it.",
  //       keyTakeaway: [
  //         "Care is data. The intentional, observed wisdom of caregivers is a knowledge system and designers have a responsibility to treat it as one, not displace it with the next wellness app.",
  //         "There is a gap between building wellness tools and preserving wellness wisdom. Recognising that gap is the first design decision worth making.Archiving and building are not opposites.",
  //         "Mommi - an AI agent trained on a mother's intentional care wisdom - shows what becomes possible when you preserve first and build second. Preservation is the design brief.",
  //       ],
  //       audience: "",
  //     },
  //   },
  // },
  {
    name: "Ish Awasthi",
    role: "VP, UX Research, JPMC",
    image: "/images/speakers/leadership-summit/Ish-Awasti.webp",
    ogImage: "",
    talkType: "Spark Session",
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, I have built products and teams across very different contexts - from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India. I have built design functions from the ground up, mentored teams, and created processes that improve user experience and product outcomes. My work spans the full spectrum of UX research, product design, and design systems, supported by hands-on experience in product management, business development, and project management. This allows me to approach product building not just through the lens of design, but through the wider realities of business, execution, and growth. The diversity of my journey reflects a continuous evolution in self-understanding, constantly drawing me toward new challenges, unfamiliar domains, and opportunities to keep learning.",
    linkedin: "https://www.linkedin.com/in/ish-awasthi-b38a4732v",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session - 18 Mins",
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
    feedbackLink: "",
    events: {
      leadership: {
        type: "Plenary Keynote - 30 Mins",
        track: "",
        talkCategory: "Design Practice",
        title: "Be[coming] a leader in design",
        description:
          "The talk opens with a provocation. Almost no one leaves our work interactions with what they actually wanted. The person giving feedback walks away unsatisfied. The person receiving it walks away unclear. The leader chairing the meeting walks away wondering what just happened. The cause sits in the expectations we never surface, the conversations we postpone, and the affirmations we hold or hide. Under pressure, we get triggered into silence or violence. We shut down. We sharpen.From there the arc moves into what authentic design leadership actually asks of us. Naming what we want. Hearing what others want. Staying in the room when the temperature rises. The trade off is real. This path moves slowly. It exposes the leader who walks it. Scaling it is difficult work inside most orgs.What I would do differently is lean into the discomfort sooner. The material lands harder when the provocation is allowed to sit. The lesson I keep relearning is that care without honesty becomes decoration",
        keyTakeaway: [
          "What design leadership really is — and why most models fail designers",
          "How to build trust as your core design output (yes, really)",
          "How power and presence work when you're no longer the hands-on designer",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Samir Dash",
    role: "UX Arch Senior Manager, Accenture",
    image: "/images/speakers/leadership-summit/Samir-Dash.png",
    ogImage: "",
    talkType: "Workshop",
    bio: "Samir Dash is a UX Architect and AI Design Strategist with 21+ years of experience across global tech firms like Cisco, IBM, Redhat, Samsung, Dell and Accenture. Currently a UX Arch Senior Manager at Accenture, he leads AI-driven enterprise design related re-invention initiatives as part of OpsInteractive, TFO. An award-winning innovator and mentor, he bridges design, technology, and AI-driven product experiences and specializes in human-AI interaction, ethical design, and scalable intelligent experiences. Have authored several books and academic papers on design-led automation, UX, AI-facilitated Design Thinking across industry and academia. He also has been continued to advocate for AI-powered web and application accessibility.",
    linkedin: "https://www.linkedin.com/in/mobilewish/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Workshop",
        track: "",
        talkCategory: "Emerging Tech",
        title: "AI Design Accelerator: Fixing Context-Drift in Rapid AI-Assisted Design Lifecycle",
        description: "This workshop will explore a practical challenge many design teams are beginning to face: AI can generate design artifacts and prototypes quickly, but the original user intent often gets diluted as teams move across prompts, tools and handoffs. Participants will work through a three-team activity. Team A will simulate a traditional vibe-coding relay, Team B will use a context-retained workflow, and Team C will jump directly from brief to code. The activity will make trade-offs visible: speed can produce polished UI, but missing context can weaken user fit, accessibility, constraints and business alignment. The session will then introduce a structured AI Design Accelerator framework that connects intent, persona, journey, stories, IA and ReactJS prototype through context handoff summaries. We will also demo an AI Design Accelerator automation application built by the team to show how stakeholders can reduce cycle time while retaining context at each stage.",
        keyTakeaway: [
      "Identify where context drift can happen when AI-generated outputs move across prompts, tools and life-cycle stages.",
      "Use structured handoff summaries to retain product intent, persona signals, journey logic, constraints and business goals.",
      "Compare traditional vibe-coding, direct brief-to-code and context-retained workflows using a practical scorecard.",
      "Apply a code-first, refine-later mindset while preserving human review, accessibility validation and design ownership.",
      "Demo of AI Design Accelerator framework with a solution can reduce time from brief to React prototype without losing context, to show the possibility of ecosystem role in this.",
        ],
        audience: "",
      },
    },
  },
];

export default leadershipSpeakers;
