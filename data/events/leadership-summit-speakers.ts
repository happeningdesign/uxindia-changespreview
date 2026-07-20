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

import type { Speaker } from "@/types/speaker";
export type { Speaker };

const leadershipSpeakers: Speaker[] = [
  {
    name: "Doug Powell",
    role: "Executive Design Leader & Coach Former VP of Design, IBM & Expedia, Past President, AIGA",
    image: "/images/speakers/leadership-summit/doug-powell.webp",
    ogImage: "/og/speakers/leadership-summit/doug-powell.png",
    talkType: "Grand Keynote",
    bio: "Doug Powell is an award-winning designer and executive design leader with more than 30 years of experience in a wide range of design disciplines. A recipient of the 2014 Distinguished Alumni Award from the Sam Fox School of Design at Washington University in St. Louis, and the 2014 Fellow Award from AIGA Minnesota, Doug is a lecturer, commentator and thought leader on design issues. He has presented at a variety of global conferences, forums, and universities including Beirut Design Week in Lebanon, Fortune's Brainstorm Design in Singapore, and Yale School of Management. \n \n He was on the jury of the 2018 Smithsonian Cooper Hewitt National Design Awards. Between 2011-2013 Doug served as the national president of AIGA, the professional association for design, the largest and most established design organization in the world. In the past decade Doug has served as Vice President of Design at IBM and Expedia Group, where he oversaw design practices, design systems, designer career and leadership programs, as well as the scaling of cross-functional design thinking practices across the companies. \n \n He is the producer and host of This Is A Prototype: The Design Leadership Podcast. Alongside his leadership training and coaching practice, Doug serves on the faculty of the Pratt School of Engineering at Duke University, and the Sam Fox School of Design & Visual Art at Washington University in St. Louis.",
    linkedin: "https://www.linkedin.com/in/douglaspowell330/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Grand Keynote - 40 Mins",
          track: "",
          talkCategory: "",
          date: "Sept 24",
          time: "9:50 AM",
          title: "Talk Title: TBA",
          description: "",
          keyTakeaway: "",
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "",
          date: "Sept 23",
          time: "9:00 AM",
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
    image: "/images/speakers/leadership-summit/jose-coronado.webp",
    ogImage: "/og/speakers/leadership-summit/jose-coronado.png",
    talkType: "Plenary Keynote",
    bio: "Jose Coronado is a recognized Design & Operations executive. His experience spans financial services, management consulting, and enterprise technology, with a focus on leading global teams. As a Strategic Advisor, Jose partners with Chief Design Officers and Global Heads of Design to help them solve critical problems within their organizations. \n \n Jose brings his experience scaling design organizations, directing large-scale transformation programs, and building world-class teams at Fortune 50 companies. Most recently, at Target, he built the Strategic Planning & Operations practice from the ground up, establishing business processes to support its growth. Jose has held leadership roles at JPMorgan, McKinsey, Accenture, ADP, and Oracle, where he amplified the impact and maximized the business value of design investment.",
    linkedin: "https://www.linkedin.com/in/josecoronado/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Plenary Keynote - 30 Mins",
          track: "",
          talkCategory: "Design Practice",
          date: "Sept 24",
          time: "12:05 AM",
          title: "Closing the Gap: Design Embraces Business",
          description:
            "As Design Executives, we face an existential question that will determine the future of our roles and our teams: how do we prepare for the new reality of unpredictable, disruptive change? Drawing from enterprise transformation across global organizations, we explore how design leaders increase organizational maturity, strengthen partnerships, and amplify design’s impact. Let’s continue to elevate the value of design so that it plays a strategic role in shaping the future of our organizations.",
          keyTakeaway: [
            "Evolve from Design Leaders to Business Leaders.",
            "Connect design to measurable business value, growth, and operational performance.",
            "Build organizational trust that positions design as a strategic partner.",
            "Elevate and adapt to orchestrate change management across the organization.",
          ],
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "Design Practice",
          date: "Sept 23",
          time: "9:00 AM",
          title: "Growing and expanding design leadership",
          description:
            "Design leaders today are under pressure. You must prove impact, manage growth, scale, and operate with the clarity and maturity the business expects. Design organizations are navigating constant change. You need to evolve your focus beyond the craft. To expand your influence, you must showcase the design’s business impact. Participants will go through three areas of design leadership development to build a strong foundation of impact, adopt new behaviors, and evolve in their leadership journey.",
          keyTakeaway: [
            "Expanding your influence in the organization.",
            "Aligning your work with areas of strategic impact.",
            "Articulating and promoting the impact of design in the organization",
          ],
          audience: "",
        },
      ],
    },
  },
  {
    name: "Jesvin Yeo Puay Hwa",
    role: "Associate Vice Provost (Strategy), Undergraduate Education, NTU",
    image: "/images/speakers/leadership-summit/jesvin-yeo.webp",
    ogImage: "",
    talkType: "Grand Keynote",
    bio: "Professor Jesvin Yeo is currently a Professor of Visual Communication Design at the School of Art, Design and Media, Nanyang Technological University, Singapore, and serves as the university’s Associate Vice Provost (Strategy) for undergraduate education. She leads strategic initiatives that advance institutional transformation, interdisciplinary collaboration, and global engagement. With extensive experience in design education, research, and academic leadership, she has been instrumental in shaping the strategic growth of design and creative disciplines within higher education. Her scholarship explores the intersections of design, culture, heritage, innovation, and emerging technologies, with a particular interest in how design can address complex societal challenges. As an educator and strategist, Professor Yeo promotes design as a catalyst for driving human-centric innovation, sustainable development, and responsible technological advancement.",
    linkedin: "https://www.linkedin.com/in/jesvinyeo/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Grand Keynote - 40 Mins",
        track: "",
        talkCategory: "Social Impact",
        date: "Sept 24",
        time: "6:10 PM",
        title: "Announcing Soon",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Prof. Kirti Trivedi",
    role: "Project Head & Visiting Distinguished Professor, School of Innovation, IIT Indore",
    image: "/images/speakers/leadership-summit/kirti-trivedi.webp",
    ogImage: "",
    talkType: "Panel",
    bio: "The initiator and the founder of India’s first Master of Design Programme in Visual Communication in 1981; Kirti Trivedi (born 1948, Gwalior, India) is a former Professor from the Industrial Design Centre, IIT, Bombay. After a degree in Mechanical Engineering, he did postgraduate studies in Industrial Design from IIT, Bombay, and the Royal College of Art, London. In 1981, he worked as a UNESCO Fellow in Japan, under the guidance of Prof. Kohei Sugiura, and was introduced by him to the intellectual depth and the richness of Asian Design. \n \n Besides teaching and design research, he is active as a design consultant in the areas of Graphic Design, Book Design, Exhibition and Museum design, Environmental Graphics, Signage, and Product Design: with numerous publications and awards both nationally and internationally. In 2011, he was invited by the School of Art, Design and Media at NTU, Singapore to help set up a Centre for Asian Design, and introduce new programmes in Asian Design, Projection Arts and Islamic Design. \n \n He is frequently invited to speak at International conferences and seminars on design; and presentations have included those at ICOGRADA, Nice; Design for Development, Nairobi; Oullim Millennium Congress, Seoul; ISIS-Symmetry Congresses at Budapest, Hiroshima and Sydney; Vision Plus 8, Vienna; Asian Design Round Table, Japan. He was one of the six international educationists invited to help draft the Manifesto for the Future of Design Education, presented at Oullim 2000, in Seoul, South Korea. Among his recent major projects are the National Salt Satyagraha Memorial at Dandi, Gujarat; and Mahapratapi Bhoj Museum at Bhopal, Madhya Pradesh. His current research is in developing appropriate interaction design solutions for Indian needs based on emerging technology possibilities. He is also engaged in developing a new model for design education, appropriate for the digital age, with the changed context of AI tools and a new student profile. Besides mentoring the B. Des. program at Centre for Design Studies, Indore; he is working with IIT Indore as a Visiting Distinguished Professor; and is the Project Head for India’s first School of Innovation, which has admitted the first batch of students to its B.Des. program from August 2025.",
    linkedin: "https://www.linkedin.com/in/jesvinyeo/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Panel",
        track: "",
        talkCategory: "Social Impact",
        date: "Sept 24",
        time: "2:15 PM",
        title: "Asian Design Futures Dialogue",
        description: "",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Pontus Warnestal",
    role: "Head of Design, Ambition Group",
    image: "/images/speakers/leadership-summit/pontus-warnestal.webp",
    ogImage: "/og/speakers/leadership-summit/pontus-warnestal.png",
    talkType: "Plenary Keynote",
    bio: "An award-winning designer, researcher (PhD), author, and educator with over two decades of experience, he brings together human-centered design, emerging technologies, and AI across academia, industry, and startup environments. With 40+ peer-reviewed publications and books, including *Designing AI-Powered Services*, he is an internationally recognized voice in AI and design and has delivered more than 150 keynotes and invited talks since 2020. \n \n His 25 years in education span program leadership, innovative studio pedagogy, and AI and design learning, earning him two Best Paper Awards and the Excellent Teacher Award twice. As Deputy Vice Chancellor and Program Director at Halmstad University, he launched and led the Digital Design and Innovation program in collaboration with over 90 companies, alongside leadership roles at Crispin Porter + Bogusky Europe, inUse, and AI agency eghed. \n \n His award-winning research and design work ranges from participatory design in sensitive contexts to AI-powered services, adaptive dialogue systems, and real-world UX solutions, earning recognition including the Livestrong Innovation Prize, a Swedish Design Award nomination, a Best of CHI Honorable Mention, and a patent stemming from his PhD research.",
    linkedin: "https://www.linkedin.com/in/pontuswarnestal/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Plenary Keynote - 30 Mins",
        track: "",
        talkCategory: "Design Practice",
        date: "Sept 24",
        time: "5:30 PM",
        title: "The Design Leadership Challenge for the AI Era",
        description:
          "Generative AI is reshaping what design teams pay attention to, how they collaborate, and which capabilities they lose. This talk examines the less visible costs of AI adoption eroding judgment, weaker focus, and critical thinking that quietly atrophies. Design leaders will leave with practical signals to spot when AI is undermining team effectiveness, and concrete frameworks to guide tool adoption without sacrificing the capabilities that make great design possible.",
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
    role: "Design Executive, Founder, UMO Design Foundation & Curator, UXINDIA",
    image: "/images/speakers/leadership-summit/kaladhar-bapu.webp",
    ogImage: "/og/speakers/leadership-summit/kaladhar-bapu.png",
    talkType: "Opening Keynote",
    bio: "Kaladhar Bapu is an award-winning design leader, entrepreneur, and strategist with over 25 years of experience helping organizations harness design as a driver of innovation, business growth, and organizational transformation. \n \n He is the recipient of the Fast Company World Changing Ideas Award 2026 for 1 Million Women in Design and AI, an initiative that aims to equip one million women with design and AI literacy by 2030.Throughout his career, Kaladhar has led product design and digital transformation initiatives for global organizations including BNY Mellon, Goldman Sachs, Citi, and Microsoft, working at the intersection of design, technology, and business strategy.He is the Founder of the UMO Design Foundation and Curator of UXINDIA, one of Asia's longest-running and most influential design leadership platforms. \n \n Over the past 25 years, UXINDIA has connected and inspired more than 90,000 designers, researchers, product leaders, educators, and innovators, helping shape the evolution of the design profession across India and beyond.An alumnus of IIT Bombay, Pratt Institute, New York, and The Wharton School, Kaladhar advises organizations on building design-led cultures and preparing teams for the opportunities and challenges created by AI. His work focuses on helping designers evolve from execution to leadership, creating professionals who influence strategy, drive business outcomes, and lead meaningful change.Kaladhar believes the future belongs to Designpreneurs, leaders who take ownership of outcomes, not just outputs.",
    linkedin: "https://www.linkedin.com/in/kbapu/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Opening Keynote",
        track: "",
        talkCategory: "",
        date: "Sept 24",
        time: "9:00 AM",
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
    image: "/images/speakers/leadership-summit/vyoma-pathak.webp",
    ogImage: "/og/speakers/leadership-summit/vyoma-pathak.png",
    talkType: "Spark Session",
    bio: "Vyoma Pathak is the Head of User Experience (UX) Design at MOURI Tech, where she leads multidisciplinary teams across UX strategy, research, visual design, and digital transformation initiatives. Her experience spans healthcare, HR tech, AI-powered solutions, lifestyle products, and enterprise platforms, with a strong focus on creating human-centered experiences that align user needs with business and technology goals. \n \n Over the years, she has worked with both startups and global enterprises, leading projects from concept through execution while mentoring and growing high-performing design teams. She has previously spoken at UXINDIA Conference on UX Writing and participated in mentor panel discussions supporting aspiring designers in their professional journeys. Beyond enterprise UX, Vyoma is also currently co-building HUDAK, a community-led initiative exploring culture, heritage, and local storytelling in collaboration with members associated with INTACH. Her recent interests explore the evolving relationship between UX, AI, culture, and responsible design innovation.",
    linkedin: "linkedin.com/in/vyomapathak/",
    twitter: "https://x.com/VyomaPathak",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session - 18 Mins",
        track: "",
        talkCategory: "Design Practice",
        date: "Sept 25",
        time: "10:05 AM",
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
    name: "Mario Van der Meulen",
    role: "CXO, Aleph Labs",
    image: "/images/speakers/leadership-summit/mario-van-der-meulen.webp",
    ogImage: "/og/speakers/leadership-summit/mario-van-der-meulen.png",
    talkType: "Plenary Keynote",
    bio: "Mario Van der Meulen has spent nearly thirty years in design, the last twenty of them leading it. A CXO and experience design leader, he has built and run design functions across physical products, digital platforms, AI, and service ecosystems, agency-side and client-side, at organisations including frog, Foolproof, Deloitte, and Standard Chartered. \n \n Along the way he earned a reputation as a C-suite whisperer and a design politician, the person brought in when the work, the room, and the egos in it all need holding at once. \n \n He is the author of Counterintuitivity: Making Meaningful Innovation, and his second book, DesignMinded: Leading Design Without Losing Your Soul, publishes in 2026. A regular keynote speaker on creativity, change, and the design mindset, he is based in Singapore, where he cheerfully calls himself a graphicdesignosaurus: a designer who graduated BC - before computers, and, rather than going extinct, evolved.",
    linkedin: "https://www.linkedin.com/in/mariovdm/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Plenary Keynote - 30 Mins",
          track: "",
          talkCategory: "Design Practice",
          date: "Sept 24",
          time: "11:25 AM",
          title: "Be[coming] a leader in design",
          description:
            "From burnout to authentic leadership; how to thrive, not just survive, as a design leader. Being or becoming a leader in design is a transformation, and many fear what they might lose in the process. In his thought-provoking keynote, Mario Van der Meulen shares the mindset, practices, and provocations needed to lead with integrity, creativity, and care, without losing your soul to politics, pressure, or performative ambition. He challenges the 'one-size-fits-all' view of leadership and reframes the journey as deeply personal, uniquely creative, and fully human. Design leadership is evolving. It's not about control as much as it is about capacity, trust, and staying human under pressure. This talk equips you to do just that.",
          keyTakeaway: [
            "What design leadership really is — and why most models fail designers",
            "How to build trust as your core design output (yes, really)",
            "How power and presence work when you're no longer the hands-on designer",
          ],
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "Design Practice",
          date: "Sept 23",
          time: "9:00 AM",
          title: "Lead[ing] the Room You're In",
          description:
            "Leading design means managing conflict. In this session you will see how these moments get built, and why the very instinct that made you a good designer can quietly work against you as a leader. Then you do something about it. Facilitators Mario van der Meulen, a CXO, and Lydia Pung, a senior UX designer, bring you through the tensions every designer and team knows, with steps you can try in your next meeting. For design leaders and anyone who leads creative people through ambiguity.",
          keyTakeaway: [
            "What design leadership really is—and why most models fail designers",
            "How to build trust as your core design output (yes, really)",
            "Why fear of burnout keeps creative leaders small—and how to break through",
            "How power and presence work when you're no longer the hands-on designer",
            "The inner work of leading with clarity, cadence, and care",
          ],
          audience: "",
        },
      ],
    },
  },
  {
    name: "Lydia Pung",
    role: "Senior UX Designer, Aleph Labs",
    image: "/images/speakers/leadership-summit/lydia-pung.webp",
    ogImage: "",
    talkType: "Workshop",
    bio: "Lydia Pung is a Senior UX Designer who, over the past five years, has helped governments, healthcare and financial organisations, and large enterprises make sense of complex problems through human-centred design. She is at her best turning what people actually do into product strategy, working across disciplines to shape digital experiences that hold up for users and for the business alike. Her work spans Singapore and the wider APAC region, where she has led research and design on national-scale platforms across healthcare and public services.",
    linkedin: "https://www.linkedin.com/in/mariovdm/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Workshop",
          track: "",
          talkCategory: "Design Practice",
          date: "Sept 23",
          time: "9:00 AM",
          title: "Lead[ing] the Room You're In",
          description:
            "Leading design means managing conflict. In this session you will see how these moments get built, and why the very instinct that made you a good designer can quietly work against you as a leader. Then you do something about it. Facilitators Mario van der Meulen, a CXO, and Lydia Pung, a senior UX designer, bring you through the tensions every designer and team knows, with steps you can try in your next meeting. For design leaders and anyone who leads creative people through ambiguity.",
          keyTakeaway: [
            "What design leadership really is—and why most models fail designers",
            "How to build trust as your core design output (yes, really)",
            "Why fear of burnout keeps creative leaders small—and how to break through",
            "How power and presence work when you're no longer the hands-on designer",
            "The inner work of leading with clarity, cadence, and care",
          ],
          audience: "",
        },
      ],
    },
  },
  // {
  //   name: "Harshita Hassani",
  //   role: "Sr. UX Designer,Optum (United Health Group)",
  //   image: "/images/speakers/leadership-summit/harshita-hassani.webp",
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
    image: "/images/speakers/leadership-summit/ish-awasthi.webp",
    ogImage: "/og/speakers/leadership-summit/ish-awasthi.png",
    talkType: "Spark Session",
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, he has built products and teams across diverse contexts—from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India. He has built design functions from the ground up, mentored teams, and established processes that strengthen both user experience and product outcomes. \n \n His expertise spans UX research, product design, and design systems, complemented by hands-on experience in product management, business development, and project management. This multidisciplinary perspective allows him to approach product building beyond the lens of design, considering the broader realities of business, execution, and growth. His journey reflects a continuous drive to explore new challenges, navigate unfamiliar domains, and keep learning and evolving.",
    linkedin: "https://www.linkedin.com/in/ish-awasthi-b38a4732v",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session - 18 Mins",
        track: "",
        talkCategory: "Design Practice",
        date: "Sept 25",
        time: "4:00 PM",
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
    name: "Sundeep Verma",
    role: "Founder, Wingit.ai",
    image: "/images/speakers/leadership-summit/sundeep-verma.webp",
    ogImage: "/og/speakers/leadership-summit/",
    talkType: "Spark Session",
    bio: "Sundeep Verma is a product builder and systems thinker working at the intersection of AI, relational computing, and human interaction design. His work focuses on building AI-native relationship systems that move beyond traditional chat interfaces toward continuity-aware, trajectory-aware interaction models. He has been exploring how concepts such as relational state, adaptive memory, trust drift, reinforcement loops, and behavioral continuity can function as foundational computational primitives for future AI systems. His current work investigates the gap between response generation and long-term relational coherence in AI-human interaction.",
    linkedin: "https://www.linkedin.com/in/sundeepverma/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session - 18 Mins",
        track: "",
        talkCategory: "Emerging Tech",
        date: "Sept 25",
        time: "10:05 AM",
        title: "Why Chat Interfaces Fail Human Relationships",
        description:
          "Every day, millions of people talk to AI systems that can sound empathetic and intelligent, yet the relationship often breaks the moment continuity is tested. The AI forgets, shifts tone, loses context, or responds without awareness of history or emotional trajectory. This talk explores why today’s chat interfaces fail at human relationships, and why the future of AI may depend not on better responses, but on designing systems that can sustain continuity, memory, and and relational under.",
        keyTakeaway: [
          "1. Understand why response quality alone is insufficient for building long-term human-AI trust, and why continuity failures damage user perception more than isolated weak outputs.",
          "2. Learn the difference between conversational memory and relational state, including why memory retrieval alone cannot maintain behavioral consistency over time.",
          "3. Explore practical architectural patterns for trajectory-aware systems, including adaptive memory, trust drift detection, reinforcement loops, and contextual weighting.",
          "4. Recognize the major design trade-offs in relational AI systems, including personalization vs dependency, consistency vs adaptability, and emotional usefulness vs manipulation risk.",
          "5. Develop a new framework for thinking about AI systems: not as chat interfaces that occasionally simulate relationships, but as systems that may eventually require relationship state as a foundational computational layer.",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Samir Dash",
    role: "UX Arch Senior Manager, Accenture",
    image: "/images/speakers/leadership-summit/samir-dash.webp",
    ogImage: "/og/speakers/leadership-summit/samir-dash.png",
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
        date: "Sept 23",
        time: "1:45 PM",
        title:
          "AI Design Accelerator: Fixing Context-Drift in Rapid AI-Assisted Design Lifecycle",
        description:
          "This workshop will explore a practical challenge many design teams are beginning to face: AI can generate design artifacts and prototypes quickly, but the original user intent often gets diluted as teams move across prompts, tools and handoffs. Participants will work through a three-team activity. Team A will simulate a traditional vibe-coding relay, Team B will use a context-retained workflow, and Team C will jump directly from brief to code. The activity will make trade-offs visible: speed can produce polished UI, but missing context can weaken user fit, accessibility, constraints and business alignment. The session will then introduce a structured AI Design Accelerator framework that connects intent, persona, journey, stories, IA and ReactJS prototype through context handoff summaries. We will also demo an AI Design Accelerator automation application built by the team to show how stakeholders can reduce cycle time while retaining context at each stage.",
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
  {
    name: "Shruti Muktha",
    role: "UX Arch Associate, Accenture",
    image: "/images/speakers/leadership-summit/shruti-muktha.webp",
    ogImage: "/og/speakers/leadership-summit/shruti-mukhta.png",
    talkType: "Workshop",
    bio: "Shruti Muktha is an UX Architect focused on designing user-centric, research-driven solutions that create meaningful impact. With a background in Architecture, she brings a systems-thinking approach to design, enabling her to navigate complex challenges and uncover opportunities for innovation. \n \n A published researcher, Shruti has presented and published academic papers at conferences like  ICoRD, with her work featured in Springer proceedings. Some of her notable research includes applying design thinking and augmented reality (AR) to lifesaving education, as well as exploring women’s safety through design methodologies and emerging technologies to address real-world challenges. \n \n At Accenture, she has been actively involved in research around AI-assisted design lifecycle, exploring how context is created, preserved, and lost across design processes, and contributing to the development and validation of frameworks that bridge the gap between research, design, and implementation, and heavily contributing to the development of AgenticAI driven business-roadmap solutions. \n \n Driven by curiosity and continuous learning, she enjoys exploring the evolving intersection of design, technology, and AI to create impactful experiences that are both innovative and human-centered.",
    linkedin: "https://www.linkedin.com/in/shruti-muktha-534087233/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Workshop",
        track: "",
        talkCategory: "Emerging Tech",
        date: "Sept 23",
        time: "1:45 PM",
        title:
          "AI Design Accelerator: Fixing Context-Drift in Rapid AI-Assisted Design Lifecycle",
        description:
          "This workshop will explore a practical challenge many design teams are beginning to face: AI can generate design artifacts and prototypes quickly, but the original user intent often gets diluted as teams move across prompts, tools and handoffs. Participants will work through a three-team activity. Team A will simulate a traditional vibe-coding relay, Team B will use a context-retained workflow, and Team C will jump directly from brief to code. The activity will make trade-offs visible: speed can produce polished UI, but missing context can weaken user fit, accessibility, constraints and business alignment. The session will then introduce a structured AI Design Accelerator framework that connects intent, persona, journey, stories, IA and ReactJS prototype through context handoff summaries. We will also demo an AI Design Accelerator automation application built by the team to show how stakeholders can reduce cycle time while retaining context at each stage.",
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
  {
    name: "Manish Vashist",
    role: "Executive Design Leader, Innovation and Customer Experience, EY Studio+",
    image: "/images/speakers/leadership-summit/manish-vashist.webp",
    ogImage: "/og/speakers/leadership-summit/manish-vashist.png",
    talkType: "Workshop",
    bio: "Manish Vashist is an Executive Director and design leader at EY Studio+, with over 25+ years of experience across consulting, customer experience, digital transformation, enterprise UX, service design and innovation. He has led multidisciplinary teams across design, research, technology and business transformation, helping organisations simplify complexity, improve customer journeys and build more intelligent digital experiences. His work spans large-scale transformation contexts across telecommunications, enterprise platforms, customer service, digital channels, self-service, assisted service, onboarding, loyalty and B2B experience design. At EY Studio+, Manish focuses on AI-led customer experience transformation, Agentic AI and the future of human plus AI collaboration. His work explores how AI can help organisations scale creativity, improve efficiency, reduce manual effort and move from fragmented workflows to more intelligent, outcome-driven operating models. He previously spoke at UX India on the rise of agentic UX designers, where he explored how human designers and specialised AI agents can work together to accelerate delivery, improve decision-making and create new models of value. His current work builds on that idea by asking a larger leadership question: how should design leaders build the future operating model for human creativity and AI capability?",
    linkedin: "https://www.linkedin.com/in/manishvashist/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Workshop",
        track: "",
        talkCategory: "Design Practice",
        date: "Sept 23",
        time: "1:45 PM",
        title:
          "Designing What Could Go Right: Building the Agentic Design Studio (+)",
        description:
          "AI is changing design, but the real question is not what AI can generate. It is what design leaders must choose, shape, govern and protect. This hands-on workshop helps participants design an Agentic Design Studio where human creativity, judgement and AI agents work together responsibly. They will map workflows, define guardrails and create a practical blueprint to take back to their teams.",
        keyTakeaway: [
          "1. A clear understanding of how AI is shifting design from production work to orchestration, judgement and leadership.",
          "2. A practical way to identify where AI agents can support the design lifecycle, including research synthesis, journey mapping, concept generation, design critique, accessibility review, content creation, validation and business case development.",
          "3. A human plus AI workflow model that shows what AI can support, what humans must still own and where judgement, context and accountability are required.",
          "4. A responsible AI guardrail checklist covering trust, privacy, bias, accessibility, explainability, cultural sensitivity, brand integrity and human accountability.",
          "5. An Agentic Design Studio Blueprint that participants can take back to their teams and adapt for their own organisation.",
          "6. A first 30 - day experiment plan to help teams move from AI curiosity to responsible AI adoption in a practical, low - risk way.",
          "7. A leadership lens for moving beyond “AI for UX tools” towards a future operating model for human creativity and AI capability.",
        ],
        audience: "",
      },
    },
  },
];

export default leadershipSpeakers;
