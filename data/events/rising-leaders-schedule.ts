export const risingScheduleData = {
  days: [
    {
      id: "day1",
      label: "Conference and Workshops Day 1",
      date: "Sept 26",
      endTime: "5:00 PM",
    },
    {
      id: "day2",
      label: "Conference Day 2",
      date: "Sept 27",
      endTime: "4:00 PM",
    },
  ],
  day1: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
      location: "Auditorium",
    },
    {
      time: "9:00 AM",
      type: "keynote",
      title: "Opening Keynote",
      description:
        "Opening remarks and keynote address to set the tone for the conference.",
      tag: "Keynote",
      location: "Auditorium",
      speaker: {
        name: "Kaladhar Bapu",
        role: "Founder, UXINDIA",
        image: "/images/speakers/rising-leaders-forum/kaladhar-bapu.webp",
      },
    },
    {
      time: "9:40 AM",
      type: "keynote",
      title: "Shipped & Imperfect",
      description:
        "Exploring how AI can help design teams move from endless polishing to imperfect action, faster shipping, and stronger leadership.",
      tag: "Deep Dive",
      talkCategory: "Design Practice",
      location: "Auditorium",
      speaker: {
        name: "Deepashree Kale",
        role: "Head of Design, Apptware",
        image: "/images/speakers/rising-leaders-forum/deepashree-kale.webp",
      },
    },
    {
      time: "10:20 AM",
      type: "break",
      title: "Coffee Break",
      location: "Multiple Rooms",
    },

    {
      time: "11:45 AM",
      type: "panel",
      title: "Design & AI",
      description:
        "Explore how AI is reshaping design workflows, creativity, and the future of human-centered innovation.",
      tag: "Panel Discussion",
      location: "Auditorium",
      panelists: [
        {
          name: "Ranjeet Tayi",
          role: "Senior Director, AI Experience Design - Salesforce",
          image: "/images/speakers/rising-leaders-forum/ranjeet-tayi.webp",
        },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
      ],
    },
    {
      time: "11:05 AM",
      type: "panel",
      title: "Design Connect",
      description:
        "Connect with speakers, industry leaders, and fellow attendees in an informal networking session.",
      tag: "Networking",
      location: "Auditorium",
      panelists: [
        {
          name: "Doug Powell",
          role: "Executive Design Leader | VP of Design | Former IBM & Expedia | Lead Lecturer, iF Design Academy",
          image: "/images/speakers/leadership-summit/doug-powell.webp",
        },
        {
          name: "Jose Coronado",
          role: "Advisor, Interim Head, Product & Design, Digital Impulsum",
          image: "/images/speakers/leadership-summit/jose-coronado.webp",
        },
        {
          name: "Jesvin Yeo Puay Hwa",
          role: "Associate Vice Provost (Strategy), Undergraduate Education, NTU",
          image: "/images/speakers/leadership-summit/jesvin-yeo.webp",
        },
        {
          name: "Kaladhar Bapu",
          role: "Design Executive, Founder, UMO Design Foundation & Curator, UXINDIA",
          image: "/images/speakers/leadership-summit/kaladhar-bapu.webp",
        },
      ],
    },
    {
      time: "12:45 PM",
      type: "break",
      title: "Lunch",
      location: "Multiple Rooms",
    },
    {
      time: "1:45 PM",
      type: "break",
      title: "LEAD Commons' Roundtable",
      location: "Auditorium",
    },
    {
      time: "1:45 PM",
      endTime: "5:00 PM",
      type: "parallel-workshops",
      tag: "Workshop",
      duration: "90 min",
      workshops: [
        {
          room: "Room 1",
          title:
            "Designing AI That Cares: A Hands-On Workshop on the HCAI Framework",
          speaker: {
            name: "Varedh Nigam",
            role: "Associate Director, Nagarro Software Pvt. Ltd.",
            image: "/images/speakers/rising-leaders-forum/varedh-nigam.webp",
          },
          description:
            "Exploring how the HCAI framework helps teams decide what AI should own, where humans must lead, and where care matters most.",
        },
        {
          room: "Room 2",
          title: "Workshop 02",
          speaker: {
            name: "Rohan Sridhar",
            role: "CXO & Co-founder, Happening Design",
            image: "/images/speakers/leadership-summit/rohan-sridhar.webp",
          },
          description: "Announcing Soon.",
        },
        {
          room: "Room 3",
          title: "The Science of Moat Engineering",
          speaker: {
            name: "Amber Krishan",
            role: "Founder & CEO, Futurris",
            image: "/images/speakers/rising-leaders-forum/amber-krishan.webp",
          },
          description:
            "Exploring how product teams can move beyond features and journeys to build defensible moats through lifecycle depth, engagement systems, and KPI-driven behavior.",
        },
        {
          room: "Room 4",
          title: "The last mile of UX - protecting design intent in production",
          speaker: {
            name: "Monali Samarth",
            role: "Product Design Engineer, RIB Software",
            image: "/images/speakers/rising-leaders-forum/monali-samarth.webp",
          },
          description:
            "Exploring how designers can protect design intent from Figma to production through AI-assisted prompting, red-teaming, and practical workflow guardrails.",
        },
        {
          room: "Room 5",
          title:
            "Conflict as a Coherence Engine: Building AI Products for Human Coordination",
          speaker: {
            name: "Thejashwini",
            role: "Ex - Experience Design Strategist",
            image: "/images/speakers/rising-leaders-forum/thejashwini.webp",
          },
          description:
            "Exploring how conflict can become a signal for better coordination, helping teams build AI products that turn disagreement into clearer decisions and stronger coherence",
        },
        {
          room: "Room 6",
          title: "Workshop: TBA",
          speaker: {
            name: "Jose Coronado",
            role: "Advisor, Interim Head, Product & Design, Digital Impulsum",
            image: "/images/speakers/rising-leaders-forum/jose-coronado.webp",
          },
          description: "",
        },
        {
          room: "Room 7",
          title: "Pitch Imperfect",
          speaker: {
            name: "Roopesh Ramesh Donde",
            role: "Sr Staff Product Designer, ServiceNow",
            image: "/images/speakers/rising-leaders-forum/roopesh-donde.webp",
          },
          description:
            "Pitch Imperfect is a hands-on workshop built around PITCH: a five-step method for going from real felt friction to working prototype in one sitting. Problem, Inform, Trace, Capture, Hatch.",
        },
        {
          room: "Room 8",
          title:
            "Design-ops for AI-Ready UX Teams: From Chaos to Operating System",
          speaker: {
            name: "Dushyant Kanungo",
            role: "Director, User Experience, Galaxy Weblinks Inc.",
            image:
              "/images/speakers/rising-leaders-forum/dushyant-kanungo.webp",
          },
          description:
            "Exploring how UX teams can turn scattered AI experiments into a sustainable operating system of workflows, roles, rituals, templates, and guardrails.",
        },
        {
          room: "Room 9",
          title: "Workshop 09",
          speaker: {
            name: "Astha Khurana",
            role: "Head of Design, Adalat AI",
            image: "/images/speakers/rising-leaders-forum/astha-khurana.webp",
          },
          description:
            "Designers in tech today aren't handed briefs to make pretty. They're asked to decide what to build, scope it with engineers, and ship it.",
        },
        {
          room: "Room 10",
          title: "The Seam: Designing Emotional Complexity in the Age of AI",
          speaker: {
            name: "Hemanth Ramesh",
            role: "Sr. Manager, Cognizant",
            image: "",
          },
          description:
            "AI is fluent and hollow. Humans are clumsy and full. The craft is designing the seam between them honestly.",
        },
      ],
    },
    {
      time: "3:15 PM",
      type: "break",
      title: "Coffee Break",
      location: "Multiple Rooms",
    },

    {
      time: "4:00 PM",
      type: "continuation",
      title: "Workshops continue in same rooms after coffee break",
    },
  ],
  day2: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
      location: "Auditorium",
    },
    {
      time: "9:00 AM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Rohan Sridhar",
        role: "CXO & Co-founder, Happening Design",
        image: "/images/speakers/leadership-summit/rohan-sridhar.webp",
      },
    },
    {
      time: "9:40 AM",
      type: "keynote",
      title: "Design Un-automated: Reclaiming the Soul of Design",
      description:
        "Exploring how designers can stay at the core of the process as AI reshapes tools, workflows, and creative decisions.",
      tag: "Deep Dive - 30 Mins",
      talkCategory: "Design Practice",
      location: "Auditorium",
      speaker: {
        name: "Sujit Kumar Pradhan",
        role: "UX Designer, Google",
        image: "/images/speakers/rising-leaders-forum/sujit-kumar-pradhan.webp",
      },
    },
    {
      time: "10:20 AM",
      type: "break",
      title: "Coffee Break",
      location: "Multiple Areas",
    },
    {
      time: "11:05 AM",
      type: "parallel-sessions",
      duration: "60 min",
      sessions: [
        {
          room: "Mini-Auditorium 1",
          title: "Design Entreprenuership",
          type: "panel",
          tag: "Panel Discussion",
          description:
            "Insights from design founders on entrepreneurship, leadership, growth, and the future of design businesses.",
          panelists: [
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
        },
        {
          room: "Mini-Auditorium 2",
          title: "Design Mentorship & Portfolio Review",
          type: "panel",
          tag: "Panel Discussion",
          description:
            "Design leaders discuss the power of mentorship, knowledge sharing, and nurturing future talent.",
          panelists: [
            {
              name: "Madhukar Joshi",
              role: "Director - Design Strategy and Ops, Kyndryl",
              image:
                "/images/speakers/rising-leaders-forum/madhukar-joshi.webp",
            },
            {
              name: "Nithya Kappini",
              role: "Senior Director, Cognizant",
              image:
                "/images/speakers/rising-leaders-forum/nithya-kappini.webp",
            },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
        },
        {
          room: "Mini-Auditorium 3",
          title: "Design Pitch Presentations",
          type: "panel",
          tag: "Design Pitch",
          description:
            "Get personalized feedback from experienced design leaders to strengthen your portfolio and tell your story with confidence.",
          panelists: [
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
        },
      ],
    },
    {
      time: "12:05 PM",
      type: "parallel-sessions",
      duration: "25 min",
      sessions: [
        {
          room: "Mini-Auditorium 1",
          title:
            "Beyond Borders: Unmasking Cultural Blind Spots with Service Design",
          type: "spark",
          tag: "Spark Session",
          speaker: {
            name: "Poorva Soman-Lavate",
            role: "Lead Experience Design, ThoughtWorks",
            image: "/images/speakers/rising-leaders-forum/poorva-lavate.webp",
          },
          description:
            "In this piece, Poorva will share her experience and perspective on the critical role culture plays in onboarding and driving adoption among global users in a B2B context.",
        },
        {
          room: "Mini-Auditorium 2",
          title:
            "The AI Was Wrong; Now What? Designing Recovery Into High Stakes AI",
          type: "spark",
          tag: "Spark Session",
          speaker: {
            name: "Anika Shrivastava",
            role: "Strategic Product Designer | Fintech & AI Experience, LTIMindtree",
            image:
              "/images/speakers/rising-leaders-forum/anika-shrivastava.webp",
          },
          description:
            "This talk explores a question we often overlook when designing AI: When things go wrong, have we designed what happens next?",
        },
        {
          room: "Mini-Auditorium 3",
          title: "I Am My Own Most Neglected User",
          type: "spark",
          tag: "Spark Session",
          speaker: {
            name: "Sushrut Jangid",
            role: "Product Designer, ServiceNow",
            image: "/images/speakers/rising-leaders-forum/sushrut-jangid.webp",
          },
          description:
            "This talk follows one story. A product designer who maps friction for users every day had never once mapped it for himself. When he did, he applied the same process he uses at work: write a brief, define the smallest fix, ship it to yourself. He built a floating window that connected his AI context directly to his design tools. 16 days, 1700 plus prompts, 3945 lines of code. The honest part comes next.",
        },
      ],
    },
    {
      time: "12:30 PM",
      type: "parallel-sessions",
      duration: "25 min",
      sessions: [
        {
          room: "Mini-Auditorium 1",
          title: "Spark Session",
          type: "spark",
          tag: "Spark Session",
          speaker: { name: "TBA", role: "", image: "" },
          description: "",
        },
        {
          room: "Mini-Auditorium 2",
          title: "The Designer Who Refused to Stay a Designer",
          type: "spark",
          tag: "Spark Session",
          speaker: {
            name: "Anil Reddy",
            role: "Founder & Designer, Happy Pet",
            image: "/images/speakers/rising-leaders-forum/anil-reddy.webp",
          },
          description:
            "Exploring how a designer can step beyond craft into entrepreneurship by building a product, a company, and a new identity without losing what made them good to begin with.",
        },
        {
          room: "Mini-Auditorium 3",
          title: "Spark Session",
          type: "spark",
          tag: "Spark Session",
          speaker: { name: "TBA", role: "", image: "" },
          description: "",
        },
      ],
    },
    {
      time: "12:55 PM",
      type: "break",
      title: "Lunch",
      location: "Multiple Areas",
    },
    {
      time: "2:00 PM",
      type: "keynote",
      title: "Rethinking HCI (Human Computer Interaction) in the Age of AI",
      description:
        "Exploring how designers can treat AI as a teammate, using shared context to turn complex problems into working solutions.",
      tag: "Deep Dive",
      talkCategory: "Emerging Tech",
      location: "Auditorium",
      speaker: {
        name: "Vineet Gupta",
        role: "Vice President, Design & Branding, Gemini Solutions Pvt Ltd",
        image: "/images/speakers/rising-leaders-forum/vineet-gupta.webp",
      },
    },
    {
      time: "2:40 PM",
      type: "keynote",
      title: "Designing for 1.6 Billion People We Keep Forgetting",
      description:
        "This talk walks through four barriers neurodivergent users face and shows where AI closes each gap with tools most teams already have. The improvements do not stop at neurodivergent users.",
      tag: "Deep Dive",
      talkCategory: "Emerging Tech",
      location: "Auditorium",
      speaker: {
        name: "Pratik Joglekar",
        role: "Senior Product Designer, Coursera",
        image: "/images/speakers/rising-leaders-forum/pratik-joglekar.webp",
      },
    },
    {
      time: "3:20 PM",
      type: "break",
      title: "Closing Ceremony & High Tea",
    },
  ],
};
