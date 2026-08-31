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
    name: "Jesvin Yeo Puay Hwa",
    role: "Associate Vice Provost (Strategy), Undergraduate Education, NTU",
    image: "/images/speakers/leadership-summit/jesvin-yeo.webp",
    ogImage: "/og/speakers/leadership-summit/jesvin-yeo.png",
    talkType: "Grand Keynote",
    bio: "Professor Jesvin Yeo is currently a Professor of Visual Communication Design at the School of Art, Design and Media, Nanyang Technological University, Singapore, and serves as the university’s Associate Vice Provost (Strategy) for undergraduate education. She leads strategic initiatives that advance institutional transformation, interdisciplinary collaboration, and global engagement. With extensive experience in design education, research, and academic leadership, she has been instrumental in shaping the strategic growth of design and creative disciplines within higher education. Her scholarship explores the intersections of design, culture, heritage, innovation, and emerging technologies, with a particular interest in how design can address complex societal challenges. As an educator and strategist, Professor Yeo promotes design as a catalyst for driving human-centric innovation, sustainable development, and responsible technological advancement.",
    linkedin: "https://www.linkedin.com/in/jesvinyeo/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Grand Keynote - 40 Mins",
          track: "",
          talkCategory: "Social Impact",
          date: "Sept 24",
          time: "6:10 PM",
          title: "Designing for an AI Future",
          description:
            "Artificial intelligence is transforming design practice, prompting design schools to rethink how they prepare graduates for an AI-enabled future. The keynote explores how Nanyang Technological University (NTU) has responded with a university-wide strategy that integrates AI across the curriculum, supported by the NTU Education 2030 initiative and its signature pedagogy for all undergraduates. Using the School of Art, Design and Media (ADM) as a case study of curriculum transformation, the keynote shows how AI is incorporated into design education through project-based learning, interdisciplinary collaboration, and studio-based inquiry. Beyond a technical tool, ADM positions AI as a catalyst for creativity, critical reflection, and responsible innovation. By sharing NTU’s experience, the keynote invites educators to rethink the purpose of design education in the age of AI.",
          keyTakeaway: "",
          audience: "",
        },
        {
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
      ],
    },
  },
  {
    name: "Doug Powell",
    role: "Executive Design Leader | VP of Design | Former IBM & Expedia | Lead Lecturer, iF Design Academy",
    image: "/images/speakers/leadership-summit/doug-powell.webp",
    ogImage: "/og/speakers/leadership-summit/doug-powell.png",
    talkType: ["Grand Keynote", "Workshop"],
    bio: "Doug Powell is an award-winning designer and executive design leader with more than 30 years of experience in a wide range of design disciplines. A recipient of the 2014 Distinguished Alumni Award from the Sam Fox School of Design at Washington University in St. Louis, and the 2014 Fellow Award from AIGA Minnesota, Doug is a lecturer, commentator and thought leader on design issues. He has presented at a variety of global conferences, forums, and universities including Beirut Design Week in Lebanon, Fortune's Brainstorm Design in Singapore, and Yale School of Management. \n \nHe was on the jury of the 2018 Smithsonian Cooper Hewitt National Design Awards. Between 2011-2013 Doug served as the national president of AIGA, the professional association for design, the largest and most established design organization in the world. In the past decade Doug has served as Vice President of Design at IBM and Expedia Group, where he oversaw design practices, design systems, designer career and leadership programs, as well as the scaling of cross-functional design thinking practices across the companies. \n \nHe is the producer and host of This Is A Prototype: The Design Leadership Podcast. Alongside his leadership training and coaching practice, Doug serves on the faculty of the Pratt School of Engineering at Duke University, and the Sam Fox School of Design & Visual Art at Washington University in St. Louis.",
    linkedin: "https://www.linkedin.com/in/douglaspowell330/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Grand Keynote",
          track: "",
          talkCategory: "Design Leadership",
          date: "Sept 24",
          time: "9:50 AM",
          title:
            "Stepping Up to Design Leadership: Grow Your Influence & Advance Your Career",
          description:
            "Many UX designers aspire to senior leadership roles, but the path is challenging and rarely clear. Moving beyond a craft-focused role requires new skills, new mindsets, and a broader understanding of how organizations actually work. \n \nIn this Grand Keynote talk, executive design leader and educator Doug Powell will draw from his experience as VP of Design at both IBM and Expedia, as well as his highly-rated iF Design Academy course Expanding Organizational Influence to explore how designers can begin stepping into leadership long before they have the formal job title. Drawing from his work as an educator and coach, he shares the patterns he sees in designers who successfully expand their influence. \n \nYou’ll learn how to apply your unique 'design superpowers' to build trust, align teams, and drive enterprise-wide impact.",
          keyTakeaway: [
            "Understand the forces reshaping design leadership and why today's leaders need a broader set of skills.",
            "Recognize the common patterns designers encounter as they grow into leadership, including the challenges of greater responsibility.",
            "Leverage your design superpowers—empathy, storytelling, facilitation, and systems thinking—to expand your influence.",
            "Navigate organizations more effectively by building trust, creating shared objectives, and strengthening cross-functional partnerships.",
            "Accelerate your leadership journey with practical habits that grow your influence long before you have the title.",
          ],
          audience: "",
        },
        {
          type: "Workshop",
          track: "",
          talkCategory: "Design Leadership",
          date: "Sept 23",
          time: "9:00 AM",
          title:
            "Making the Case: Measuring and Articulating the Value of Design",
          description:
            "Design leaders are increasingly expected to demonstrate the impact of their work, not just through great experiences for users, but through outcomes that matter to the business. Yet many leaders struggle to translate design outcomes into the language of strategy, metrics, and organizational value. \n \niF Design Academy Lead Lecturer Doug Powell shares practical frameworks for measuring and articulating the value of design. Participants will explore how to connect the work of design teams to business goals, identify meaningful metrics across inputs, throughput, and outputs, and communicate impact through clear, compelling narratives. The session combines practical examples with collaborative discussion and activities—informed by Doug’s work developing design leaders globally through his iF Design Academy course Expanding Organizational Influence—to help designers strengthen their ability to advocate for design and expand their influence within their organizations.",
          keyTakeaway: [
            "Apply a clear, practical framework for measuring design across inputs, throughput, outputs, and outcomes.",
            "Select meaningful metrics that align design work with business strategy.",
            "Measure organizational improvements—including alignment, quality, speed, and collaboration—not just end-user outcomes.",
            "Build compelling, data-informed narratives that demonstrate design's contribution to business success.",
            "Communicate design's enterprise-wide impact to executives and cross-functional stakeholders.",
          ],
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
    talkType: ["Plenary Keynote", "Workshop"],
    bio: "Jose Coronado is a recognized Design & Operations executive. His experience spans financial services, management consulting, and enterprise technology, with a focus on leading global teams. As a Strategic Advisor, Jose partners with Chief Design Officers and Global Heads of Design to help them solve critical problems within their organizations. \n \nJose brings his experience scaling design organizations, directing large-scale transformation programs, and building world-class teams at Fortune 50 companies. Most recently, at Target, he built the Strategic Planning & Operations practice from the ground up, establishing business processes to support its growth. Jose has held leadership roles at JPMorgan, McKinsey, Accenture, ADP, and Oracle, where he amplified the impact and maximized the business value of design investment.",
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
    name: "Prof. Kirti Trivedi",
    role: "Project Head & Visiting Distinguished Professor, School of Innovation, IIT Indore",
    image: "/images/speakers/leadership-summit/kirti-trivedi.webp",
    ogImage: "/og/speakers/leadership-summit/kirti-trivedi.png",
    talkType: "Panel",
    bio: "The initiator and the founder of India’s first Master of Design Programme in Visual Communication in 1981; Kirti Trivedi (born 1948, Gwalior, India) is a former Professor from the Industrial Design Centre, IIT, Bombay. After a degree in Mechanical Engineering, he did postgraduate studies in Industrial Design from IIT, Bombay, and the Royal College of Art, London. In 1981, he worked as a UNESCO Fellow in Japan, under the guidance of Prof. Kohei Sugiura, and was introduced by him to the intellectual depth and the richness of Asian Design. \n \nBesides teaching and design research, he is active as a design consultant in the areas of Graphic Design, Book Design, Exhibition and Museum design, Environmental Graphics, Signage, and Product Design: with numerous publications and awards both nationally and internationally. In 2011, he was invited by the School of Art, Design and Media at NTU, Singapore to help set up a Centre for Asian Design, and introduce new programmes in Asian Design, Projection Arts and Islamic Design. \n \nHe is frequently invited to speak at International conferences and seminars on design; and presentations have included those at ICOGRADA, Nice; Design for Development, Nairobi; Oullim Millennium Congress, Seoul; ISIS-Symmetry Congresses at Budapest, Hiroshima and Sydney; Vision Plus 8, Vienna; Asian Design Round Table, Japan. He was one of the six international educationists invited to help draft the Manifesto for the Future of Design Education, presented at Oullim 2000, in Seoul, South Korea. Among his recent major projects are the National Salt Satyagraha Memorial at Dandi, Gujarat; and Mahapratapi Bhoj Museum at Bhopal, Madhya Pradesh. His current research is in developing appropriate interaction design solutions for Indian needs based on emerging technology possibilities. He is also engaged in developing a new model for design education, appropriate for the digital age, with the changed context of AI tools and a new student profile. Besides mentoring the B. Des. program at Centre for Design Studies, Indore; he is working with IIT Indore as a Visiting Distinguished Professor; and is the Project Head for India’s first School of Innovation, which has admitted the first batch of students to its B.Des. program from August 2025.",
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
    name: "Prof Ina Conradi",
    role: "Associate Professor, NTU & Co-Founder, Media Art Nexus",
    image: "/images/speakers/leadership-summit/ina-conradi.webp",
    ogImage: "",
    talkType: "Opening Keynote",
    bio: "Ina Conradi (USA/SG) is a transdisciplinary media artist and Associate Professor at Nanyang Technological University Singapore since 2007. Her digital artworks, animated and adaptable to variable media spaces, creatively employ digital painting and 3D animation. Based in Singapore and Los Angeles, her work harnesses emerging technologies to bridge the gap between art and science, making complex concepts more accessible through artistic expression. \n \nHer experimental animation 'Moirai: Thread of Life,' developed in collaboration with quantum physicists, won Best in Show at SIGGRAPH Asia Computer Animation Festival (CAF) 2023, marking a first for Singapore. Chrysalis earned her the 2018 Lumiere Awards from the Advanced Imaging Society (AIS) and VR Society’s Hollywood and 2017 Europe chapters. She also received the 2019 Raw Science Film Festival Award for a collaborative project with Fraunhofer MEVIS, combining digital medicine, arts, and STEAM. In 2019, her co-produced art-sci project Quantum Logos (Vision Serpent) premiered at Ars Electronica Deep Space 8K for the festival's 40th anniversary. \n \nIna has presented her works at major events like SIGGRAPH, UCLA Art|Sci Center, Beijing Film Academy, Ars Electronica (2010-2024), where she was a jury member in 2019, Beyond Festival ZKM Karlsruhe, Media Architecture Biennial, SGIO Tokyo, FMX Stuttgart, ISEA, and the Edinburgh International Film Festival, among others. \n \nIn addition to her artistic practice, Ina curates Media Art Nexus (MAN), a platform for urban digital placemaking, and initiated NTU's inaugural Campus Exhibition at Ars Electronica 2023. MAN is a highlight of NTU Museum’s Campus Art Trail and connects artists globally with institutions like UCLA Art | Sci Center + Lab, Elbphilharmonie Concert Hall in Hamburg, and others across Europe and the UK. Media Art Nexus has been part of the International Council of Museums (ICOM) since 2020. \n \nShe has served as a jury member for the 2019 Ars Electronica Animation Festival, NTU Singapore's Global Digital Art Prize, and as a mentor for the Julius Baer Next Generation Art Prize. Her contributions to education have earned her the Koh Boon Hwee Scholars Award and the Nanyang Education Award.",
    linkedin: "https://www.linkedin.com/in/conradi/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Opening Keynote",
          track: "",
          talkCategory: "Emerging Tech",
          date: "Sept 25",
          time: "9:00 AM",
          title:
            "Every Thread a Possible World: Animation, Science, and Design Futures in Asia",
          description:
            "Cities are wrapped in a digital skin, yet these surfaces too often deliver spectacle rather than meaning. My work asks how animation might communicate science: not by illustrating it, but by translating it through textile traditions, cosmologies, and metaphors of thread and root. Working with physicists and ocean scientists, and now with AI, I treat metaphor as an instrument of understanding, and invite young designers, especially women, into these emerging spaces.",
          keyTakeaway: [
            "How large public surfaces can move from spectacle to worlding, becoming sites of memory, care, and shared perception rather than displays.",
            "How metaphor and regional knowledge systems can carry complex scientific and ecological ideas to broad audiences, offering a decolonial alternative to inherited Western visual frameworks.",
            "What design education in Asia can become when students learn to compose with AI for public audiences at urban scale, and what that asks of us as educators and industry partners.",
          ],
          audience: "",
        },
        {
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
      ],
    },
  },
  {
    name: "Pontus Warnestal",
    role: "Head of Design, Ambition Group, Deputy Professor, Halmstad University",
    image: "/images/speakers/leadership-summit/pontus-warnestal.webp",
    ogImage: "/og/speakers/leadership-summit/pontus-warnestal.png",
    talkType: "Plenary Keynote",
    bio: "An award-winning designer, researcher (PhD), author, and educator with over two decades of experience, he brings together human-centered design, emerging technologies, and AI across academia, industry, and startup environments. With 40+ peer-reviewed publications and books, including *Designing AI-Powered Services*, he is an internationally recognized voice in AI and design and has delivered more than 150 keynotes and invited talks since 2020. \n \nHis 25 years in education span program leadership, innovative studio pedagogy, and AI and design learning, earning him two Best Paper Awards and the Excellent Teacher Award twice. As Deputy Vice Chancellor and Program Director at Halmstad University, he launched and led the Digital Design and Innovation program in collaboration with over 90 companies, alongside leadership roles at Crispin Porter + Bogusky Europe, inUse, and AI agency eghed. \n \nHis award-winning research and design work ranges from participatory design in sensitive contexts to AI-powered services, adaptive dialogue systems, and real-world UX solutions, earning recognition including the Livestrong Innovation Prize, a Swedish Design Award nomination, a Best of CHI Honorable Mention, and a patent stemming from his PhD research.",
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
    name: "Mario Van der Meulen",
    role: "CXO, Aleph Labs",
    image: "/images/speakers/leadership-summit/mario-van-der-meulen.webp",
    ogImage: "/og/speakers/leadership-summit/mario-van-der-meulen.png",
    talkType: ["Plenary Keynote", "Workshop"],
    bio: "Mario Van der Meulen has spent nearly thirty years in design, the last twenty of them leading it. A CXO and experience design leader, he has built and run design functions across physical products, digital platforms, AI, and service ecosystems, agency-side and client-side, at organisations including frog, Foolproof, Deloitte, and Standard Chartered. \n \nAlong the way he earned a reputation as a C-suite whisperer and a design politician, the person brought in when the work, the room, and the egos in it all need holding at once. \n \nHe is the author of Counterintuitivity: Making Meaningful Innovation, and his second book, DesignMinded: Leading Design Without Losing Your Soul, publishes in 2026. A regular keynote speaker on creativity, change, and the design mindset, he is based in Singapore, where he cheerfully calls himself a graphicdesignosaurus: a designer who graduated BC - before computers, and, rather than going extinct, evolved.",
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
    name: "Kaladhar Bapu",
    role: "Design Executive, Founder, UMO Design Foundation & Curator, UXINDIA",
    image: "/images/speakers/leadership-summit/kaladhar-bapu.webp",
    ogImage: "/og/speakers/leadership-summit/kaladhar-bapu.png",
    talkType: "Opening Keynote",
    bio: "Kaladhar Bapu is an award-winning design leader, entrepreneur, and strategist with over 25 years of experience helping organizations harness design as a driver of innovation, business growth, and organizational transformation. \n \nHe is the recipient of the Fast Company World Changing Ideas Award 2026 for 1 Million Women in Design and AI, an initiative that aims to equip one million women with design and AI literacy by 2030.Throughout his career, Kaladhar has led product design and digital transformation initiatives for global organizations including BNY Mellon, Goldman Sachs, Citi, and Microsoft, working at the intersection of design, technology, and business strategy.He is the Founder of the UMO Design Foundation and Curator of UXINDIA, one of Asia's longest-running and most influential design leadership platforms. \n \nOver the past 25 years, UXINDIA has connected and inspired more than 90,000 designers, researchers, product leaders, educators, and innovators, helping shape the evolution of the design profession across India and beyond.An alumnus of IIT Bombay, Pratt Institute, New York, and The Wharton School, Kaladhar advises organizations on building design-led cultures and preparing teams for the opportunities and challenges created by AI. His work focuses on helping designers evolve from execution to leadership, creating professionals who influence strategy, drive business outcomes, and lead meaningful change.Kaladhar believes the future belongs to Designpreneurs, leaders who take ownership of outcomes, not just outputs.",
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
    name: "Rohan Sridhar",
    role: "CXO & Co-founder, Happening Design",
    image: "/images/speakers/leadership-summit/rohan-sridhar.webp",
    ogImage: "/og/speakers/leadership-summit/rohan-sridhar.png",
    talkType: ["Plenary Keynote", "Panel"],
    bio: "Rohan Sridhar is Co-founder and Chief Experience Officer (CXO) at Happening Design, an AI-first product transformation company with teams across the New York and Hyderabad. He helps enterprises bridge the gap between AI ambition and real-world adoption by identifying high-impact AI opportunities, designing trusted agentic and copilot experiences, modernizing complex enterprise platforms, building scalable design systems, and accelerating research-to-prototype cycles. Over the past two decades, Rohan has led transformation initiatives across telecom, banking, insurance, government, and enterprise SaaS. \n \nBeyond Happening Design, Rohan co-chairs UXINDIA, India's largest design conference, and the UMO Design Foundation, an initiative dedicated to democratizing design education and nurturing the next generation of design leaders. His work continues to focus on helping organizations turn AI roadmaps into products that people trust, adopt, and use at scale.",
    linkedin: "https://www.linkedin.com/in/rohansridhar137/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Plenary Keynote",
        track: "",
        talkCategory: "Announcing Soon",
        date: "",
        time: "",
        title: "Announcing Soon",
        description: "Announcing Soon",
        keyTakeaway: "",
        audience: "",
      },
    },
  },
  {
    name: "Lydia Pung",
    role: "Senior UX Designer, Aleph Labs",
    image: "/images/speakers/leadership-summit/lydia-pung.webp",
    ogImage: "/og/speakers/leadership-summit/lydia-pung.png",
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
  {
    name: "Mohan Krishnaraj",
    role: "Global Head | Design, Studios and Growth",
    image: "/images/speakers/leadership-summit/mohan-krishnaraj.webp",
    ogImage: "",
    talkType: "Workshop",
    bio: "Mohan Krishnaraj is a global business and experience leader known for turning unconventional thinking into competitive advantage. As Global Head – Design & Growth at Cognizant Moment, he leads Design, Strategic Growth and Enterprise Pursuits. \n \nWith more than 20 years of experience spanning design, technology and business, Mohan has held leadership and CXO roles at some of the industry's leading organizations. Prior to Cognizant, he served as the CXO and CDO at Infosys WongDoody, and previously as Global Head of Digital Design at HARMAN (a Samsung company) and Global Head of User Experience at Wipro. \n \nKnown for challenging conventional approaches, Mohan brings a distinctive perspective to transformation and growth: emotion as a business denominator. He has developed frameworks that translate human insight into measurable value, using experience, narrative and design to create differentiation and competitive advantage. \n \nAn author of award-winning books on design and innovation, Mohan has been recognized among India's Most Influential Business Leaders. His work has earned global recognition through honours including the iF Design Award, Red Dot Award, Webby Awards and CODiE Awards.",
    linkedin: "https://www.linkedin.com/in/mohankrishnaraj/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Workshop",
        track: "",
        talkCategory: "Emerging Tech",
        date: "Sept 23",
        time: "1:45 PM",
        title: "Designing for Emotional Integrity",
        description:
          "As AI makes technology increasingly accessible and indistinguishable, trust is emerging as the ultimate competitive advantage. This workshop explores how Emotional Integrity can help organisations design products, services and AI experiences that respect human emotion, build lasting trust and create meaningful differentiation.",
        keyTakeaway: [
          "A fresh perspective on why trust may matter more than technology in the AI era.",
          "Insights into how products, services and AI systems unintentionally shape emotions and behaviour",
          "A practical framework for identifying the difference between influence, engagement and manipulation",
          "Real-world examples of experiences that build or erode trust.",
          "Interactive discussions on designing for transparency, confidence, dignity and human wellbeing.",
          "Actionable ideas for leaders and practitioners to create experiences that people trust, adopt and advocate for",
        ],
        audience: "",
      },
    },
  },
  {
    name: "Sunil Ganesh",
    role: "Head of Experience-led Transformation, BayOne",
    image: "/images/speakers/leadership-summit/sunil-ganesh.webp",
    ogImage: "",
    talkType: "Deep Dive",
    bio: "Sunil Ganesh is Head of Experience-led Transformation at BayOne Solutions, an AI-first technology advisory and consulting firm. In this role, he has been instrumental in shaping BayOne's evolution into an AI-first organization — defining not just what it builds, but how it thinks. \n \nSunil believes that in the age of AI, experience is the differentiator — and that great design is a strategic capability, not a finishing touch. At BayOne, he has built and led teams that bring this philosophy to life for global enterprises, guiding leaders through the shift from traditional digital products to intelligent, adaptive experiences. \n \nA builder at heart, Sunil is known for his bias toward action — moving quickly from vision to working reality, and inspiring teams to do the same. His leadership style blends creative conviction with commercial clarity, making design a language the boardroom understands. Based in Chennai, India, Sunil champions BayOne's vision of intelligence made human, and is a vocal advocate for the region's growing role in the global AI and design landscape.",
    linkedin: "www.linkedin.com/in/sunganesh",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Deep Dive",
          track: "",
          talkCategory: "Emerging Tech",
          date: "",
          time: "",
          title:
            "Experience Practice 2.0: Building the Right Thing When Building Is Cheap",
          description:
            "AI has collapsed the cost of production — a working prototype is seconds away. The risk is no longer moving slowly; it's building the wrong thing efficiently. That shift re-platforms the experience practice itself. Experience Practice 2.0 is an operating model, not a toolkit: a lean, strategy-led team that scales through accelerators, encodes craft into AI-augmented systems, and proves correctness with evidence. It's about rebuilding around what AI can't replace: knowing what's right.",
          keyTakeaway: [
            "Why 'faster' is now a trap, and where the defensible value actually moved.",
            "The shape of a Practice 2.0 team — strategy-led, lean, accelerator-scaled — and the roles that change.",
            "How to prove correctness with evidence, not velocity metrics.",
          ],
          audience: "",
        },
      ],
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
    name: "Siddarth Kengadaran",
    role: "Experience Strategist, BayOne",
    image: "/images/speakers/leadership-summit/siddarth-kengadaran.webp",
    ogImage: "/og/speakers/leadership-summit/siddarth-kengadaran.png",
    talkType: "Deep Dive",
    bio: "Siddarth Kengadaran is an Experience Strategist at BayOne, part of the company's Experience Transformation practice. His role sits at the front of the design process — problem-framing, research strategy, and building the bridge from executive vision to buildable work — helping enterprise teams decide what's worth building before they build it. \n \nSiddarth's core thesis is that AI has made production cheap, shifting the defensible value of design upstream to context and judgment. His work focuses on a lean, strategy-led model that scales through AI-augmented accelerators rather than headcount, pairing synthetic research with human validation and holding every recommendation to a simple bar: could a board defend a decision based on this? \n \nAcross his career in product strategy and design, he has worked at the intersection of experience, AI, and emerging interfaces, including spatial computing. He is an active contributor to the developer and startup community through GDG Coimbatore and FoF Coimbatore, including convening the product space.",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: [
        {
          type: "Deep Dive",
          track: "",
          talkCategory: "Emerging Tech",
          date: "",
          time: "",
          title:
            "Experience Practice 2.0: Building the Right Thing When Building Is Cheap",
          description:
            "AI has collapsed the cost of production — a working prototype is seconds away. The risk is no longer moving slowly; it's building the wrong thing efficiently. That shift re-platforms the experience practice itself. Experience Practice 2.0 is an operating model, not a toolkit: a lean, strategy-led team that scales through accelerators, encodes craft into AI-augmented systems, and proves correctness with evidence. It's about rebuilding around what AI can't replace: knowing what's right.",
          keyTakeaway: [
            "Why 'faster' is now a trap, and where the defensible value actually moved.",
            "The shape of a Practice 2.0 team — strategy-led, lean, accelerator-scaled — and the roles that change.",
            "How to prove correctness with evidence, not velocity metrics.",
          ],
          audience: "",
        },
      ],
    },
  },
  {
    name: "Ish Awasthi",
    role: "VP, UX Research, JPMC",
    image: "/images/speakers/leadership-summit/ish-awasthi.webp",
    ogImage: "/og/speakers/leadership-summit/ish-awasthi.png",
    talkType: "Spark Session",
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, he has built products and teams across diverse contexts—from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India. He has built design functions from the ground up, mentored teams, and established processes that strengthen both user experience and product outcomes. \n \nHis expertise spans UX research, product design, and design systems, complemented by hands-on experience in product management, business development, and project management. This multidisciplinary perspective allows him to approach product building beyond the lens of design, considering the broader realities of business, execution, and growth. His journey reflects a continuous drive to explore new challenges, navigate unfamiliar domains, and keep learning and evolving.",
    linkedin: "https://www.linkedin.com/in/ish-awasthi-b38a4732v",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session",
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
    ogImage: "/og/speakers/leadership-summit/sundeep-verma.png",
    talkType: "Spark Session",
    bio: "Sundeep Verma is a product builder and systems thinker working at the intersection of AI, relational computing, and human interaction design. His work focuses on building AI-native relationship systems that move beyond traditional chat interfaces toward continuity-aware, trajectory-aware interaction models. He has been exploring how concepts such as relational state, adaptive memory, trust drift, reinforcement loops, and behavioral continuity can function as foundational computational primitives for future AI systems. His current work investigates the gap between response generation and long-term relational coherence in AI-human interaction.",
    linkedin: "https://www.linkedin.com/in/sundeepverma/",
    twitter: "",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session",
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
    name: "Vyoma Pathak",
    role: "Sr. Design Practice Lead, Mouri Tech",
    image: "/images/speakers/leadership-summit/vyoma-pathak.webp",
    ogImage: "/og/speakers/leadership-summit/vyoma-pathak.png",
    talkType: "Spark Session",
    bio: "Vyoma Pathak is the Head of User Experience (UX) Design at MOURI Tech, where she leads multidisciplinary teams across UX strategy, research, visual design, and digital transformation initiatives. Her experience spans healthcare, HR tech, AI-powered solutions, lifestyle products, and enterprise platforms, with a strong focus on creating human-centered experiences that align user needs with business and technology goals. \n \nOver the years, she has worked with both startups and global enterprises, leading projects from concept through execution while mentoring and growing high-performing design teams. She has previously spoken at UXINDIA Conference on UX Writing and participated in mentor panel discussions supporting aspiring designers in their professional journeys. Beyond enterprise UX, Vyoma is also currently co-building HUDAK, a community-led initiative exploring culture, heritage, and local storytelling in collaboration with members associated with INTACH. Her recent interests explore the evolving relationship between UX, AI, culture, and responsible design innovation.",
    linkedin: "linkedin.com/in/vyomapathak/",
    twitter: "https://x.com/VyomaPathak",
    feedbackLink: "",
    events: {
      leadership: {
        type: "Spark Session",
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
    name: "Shruti Muktha",
    role: "UX Arch Associate, Accenture",
    image: "/images/speakers/leadership-summit/shruti-muktha.webp",
    ogImage: "/og/speakers/leadership-summit/shruti-mukhta.png",
    talkType: "Workshop",
    bio: "Shruti Muktha is an UX Architect focused on designing user-centric, research-driven solutions that create meaningful impact. With a background in Architecture, she brings a systems-thinking approach to design, enabling her to navigate complex challenges and uncover opportunities for innovation. \n \nA published researcher, Shruti has presented and published academic papers at conferences like  ICoRD, with her work featured in Springer proceedings. Some of her notable research includes applying design thinking and augmented reality (AR) to lifesaving education, as well as exploring women’s safety through design methodologies and emerging technologies to address real-world challenges. \n \nAt Accenture, she has been actively involved in research around AI-assisted design lifecycle, exploring how context is created, preserved, and lost across design processes, and contributing to the development and validation of frameworks that bridge the gap between research, design, and implementation, and heavily contributing to the development of AgenticAI driven business-roadmap solutions. \n \nDriven by curiosity and continuous learning, she enjoys exploring the evolving intersection of design, technology, and AI to create impactful experiences that are both innovative and human-centered.",
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
  {
    name: "Himank Amar",
    role: "Investor, Antler",
    image: "/images/speakers/leadership-summit/himank-amar.webp",
    ogImage: "/og/speakers/leadership-summit/manish-vashist.png",
    talkType: "Panel",
    bio: "Investment professional at Antler, working closely with ambitious founders building the next generation of technology companies.",
    linkedin: "https://www.linkedin.com/in/himankamar/",
    twitter: "",
    feedbackLink: "",
    events: {},
  },
];

export default leadershipSpeakers;
