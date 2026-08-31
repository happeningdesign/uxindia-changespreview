export const leadershipScheduleData = {
  days: [
    {
      id: "day1",
      label: "Pre-Conference Workshops",
      date: "Sept 23",
      endTime: "5:00 PM",
    },
    {
      id: "day2",
      label: "Conference Day 1",
      date: "Sept 24",
      endTime: "5:00 PM",
    },
    {
      id: "day3",
      label: "Conference Day 2",
      date: "Sept 25",
      endTime: "5:40 PM",
    },
  ],
  day1: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    {
      time: "9:00 AM",
      endTime: "10:30 AM",
      type: "workshops",
      tag: "Workshop",
      workshops: [
        {
          room: "Room 1",
          title: "Growing and expanding design leadership",
          speaker: {
            name: "Jose Coronado",
            role: "Advisor, Interim Head, Product & Design, Digital Impulsum",
            image: "/images/speakers/leadership-summit/jose-coronado.webp",
          },
          description:
            "Participants will go through three areas of design leadership development to build a strong foundation of impact, adopt new behaviors, and evolve in their leadership journey.",
        },
        {
          room: "Room 2",
          title:
            "Making the Case: Measuring and Articulating the Value of Design",
          speaker: {
            name: "Doug Powell",
            role: "Executive Design Leader | VP of Design | Former IBM & Expedia | Lead Lecturer, iF Design Academy",
            image: "/images/speakers/leadership-summit/doug-powell.webp",
          },
          description:
            "iF Design Academy Lead Lecturer Doug Powell shares practical frameworks for measuring and articulating the value of design.",
        },
        {
          room: "Room 3",
          title: "Lead[ing] the Room You're In",
          speaker: {
            name: "Mario Van der Meulen",
            role: "CXO, Aleph Labs",
            image:
              "/images/speakers/leadership-summit/mario-van-der-meulen.webp",
          },
          description:
            "In this session, the participants will see how these moments get built, and why the very instinct that made you a good designer can quietly work against you as a leader. Then you do something about it.",
        },
      ],
    },
    { time: "10:30 AM", type: "break", title: "Coffee Break" },
    {
      time: "11:15 AM - 12:15 PM",
      type: "continuation",
      title: "Workshops continue in same rooms after coffee break",
    },

    { time: "12:15 PM", type: "break", title: "Lunch" },

    {
      time: "1:45 PM",
      endTime: "3:15 PM",
      type: "workshops",
      tag: "Workshop",
      workshops: [
        {
          room: "Room 1",
          title:
            "AI Design Accelerator: Fixing Context-Drift in Rapid AI-Assisted Design Lifecycle",
          speaker: {
            name: "Samir Dash",
            role: "UX Arch Senior Manager, Accenture",
            image: "/images/speakers/leadership-summit/samir-dash.webp",
          },
          description:
            "Exploring how design teams can use AI to move from brief to prototype faster while preventing context drift through structured handoffs, scorecards, and human-led validation.",
        },
        {
          room: "Room 2",
          title: "Designing for Emotional Integrity",
          speaker: {
            name: "Mohan Krishnaraj",
            role: "Global Head | Design, Studios and Growth, Cognizant Moment",
            image: "/images/speakers/leadership-summit/mohan-krishnaraj.webp",
          },
          description:
            "This workshop explores how Emotional Integrity can help organisations design products, services and AI experiences that respect human emotion, build lasting trust and create meaningful differentiation.",
        },
        {
          room: "Room 3",
          title:
            "Designing What Could Go Right: Building the Agentic Design Studio (+)",
          speaker: {
            name: "Manish Vashist",
            role: "Executive Design Leader, Innovation and Customer Experience, EY Studio+",
            image: "/images/speakers/leadership-summit/manish-vashist.webp",
          },
          description:
            "AI is changing design, but the real question is not what AI can generate. It is what design leaders must choose, shape, govern and protect. This hands-on workshop helps participants design an Agentic Design Studio where human creativity, judgement and AI agents work together responsibly.",
        },
      ],
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break" },
    {
      time: "4:00 PM - 5:00 PM",
      type: "continuation",
      title: "Workshops continue in same rooms after coffee break",
    },

    {
      time: "5:00 PM",
      type: "dayend",
      title: "End Of Pre-Conference Workshops Day",
    },
  ],
  day2: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    {
      time: "9:00 AM",
      type: "keynote",
      title: "Opening Keynote",
      description:
        "Opening remarks and keynote address to set the tone for the conference.",
      speaker: {
        name: "Kaladhar Bapu",
        role: "Founder, UXINDIA",
        image: "/images/speakers/leadership-summit/kaladhar-bapu.webp",
      },
      tag: "Opening Keynote",
    },

    {
      time: "9:50 AM",
      type: "keynote",
      title:
        "Stepping Up to Design Leadership: Grow Your Influence & Advance Your Career",
      description:
        "In this Grand Keynote talk, executive design leader and educator Doug Powell will draw from his experience as VP of Design at both IBM and Expedia, as well as his highly-rated iF Design Academy course Expanding Organizational Influence to explore how designers can begin stepping into leadership long before they have the formal job title.",
      speaker: {
        name: "Doug Powell",
        role: "Executive Design Leader | VP of Design | Former IBM & Expedia | Lead Lecturer, iF Design Academy",
        image: "/images/speakers/leadership-summit/doug-powell.webp",
      },
      tag: "Grand Keynote",
    },

    { time: "10:40 AM", type: "break", title: "Coffee Break" },

    {
      time: "11:25 AM",
      type: "keynote",
      title: "The Design Leadership Challenge for the AI Era",
      description:
        "Exploring how design leaders can adopt AI without weakening the judgment, focus, and critical thinking great design depends on.",
      speaker: {
        name: "Pontus Warnestal",
        role: "Head of Design, Ambition Group, Deputy Professor, Halmstad University",
        image: "/images/speakers/leadership-summit/pontus-warnestal.webp",
      },
      tag: "Plenary Keynote",
      talkCategory: "Design Practice",
    },

    {
      time: "12:05 PM",
      type: "keynote",
      title: "Closing the Gap: Design Embraces Business",
      description:
        "Drawing from enterprise transformation across global organizations, this talk explores how design leaders increase organizational maturity, strengthen partnerships, and amplify design’s impact.",
      speaker: {
        name: "Jose Coronado",
        role: "Advisor, Interim Head, Product & Design, Digital Impulsum",
        image: "/images/speakers/leadership-summit/jose-coronado.webp",
      },
      tag: "Plenary Keynote",
    },

    { time: "12:45 PM", type: "break", title: "Lunch Break" },

    {
      time: "2:15 PM",
      type: "panel",
      title: "Asian Design Futures Dialogue",
      description: "",
      panelists: [
        {
          name: "Jesvin Yeo Puay Hwa",
          role: "Associate Vice Provost (Strategy), Undergraduate Education, NTU",
          image: "/images/speakers/leadership-summit/jesvin-yeo.webp",
        },
        {
          name: "Prof. Kirti Trivedi",
          role: "Project Head & Visiting Distinguished Professor, School of Innovation, IIT Indore",
          image: "/images/speakers/leadership-summit/kirti-trivedi.webp",
        },
        {
          name: "Prof Ina Conradi",
          role: "Associate Professor, NTU & Co-Founder, Media Art Nexus",
          image: "/images/speakers/leadership-summit/ina-conradi.webp",
        },
      ],
      tag: "Panel Discussion",
    },

    {
      time: "3:25 PM",
      type: "keynote",
      title: "Plenary Keynote",
      description: "",
      speaker: { name: "TBA", role: "", image: "" },
      tag: "Plenary Keynote",
    },

    { time: "4:05 PM", type: "break", title: "Coffee Break & Networking" },

    {
      time: "4:50 PM",
      type: "keynote",
      title: "Be[coming] a leader in design",
      description:
        "A keynote on what it really takes to lead with integrity in design — without losing yourself to politics or pressure.",
      speaker: {
        name: "Mario Van der Meulen",
        role: "CXO, Aleph Labs",
        image: "/images/speakers/leadership-summit/mario-van-der-meulen.webp",
      },
      tag: "Plenary Keynote",
      talkCategory: "Design Practice",
    },

    {
      time: "5:30 PM",
      type: "keynote",
      title: "Announcing Soon",
      description: "",
      speaker: {
        name: "",
        role: "",
        image: "",
      },
      tag: "Plenary Keynote",
      talkCategory: "",
    },

    {
      time: "6:10 PM",
      type: "keynote",
      title: "Designing for an AI Future",
      description:
        "The keynote explores how Nanyang Technological University (NTU) has responded with a university-wide strategy that integrates AI across the curriculum, supported by the NTU Education 2030 initiative and its signature pedagogy for all undergraduates.",
      speaker: {
        name: "Jesvin Yeo Puay Hwa",
        role: "Associate Vice Provost (Strategy), Undergraduate Education, NTU",
        image: "/images/speakers/leadership-summit/jesvin-yeo.webp",
      },
      tag: "Grand Keynote",
    },

    { time: "7:00 PM", type: "break", title: "Delegate Networking Dinner" },
  ],
  day3: [
    { time: "8:00 AM", type: "break", title: "Registrations" },

    {
      time: "9:00 AM",
      type: "keynote",
      title:
        "Every Thread a Possible World: Animation, Science, and Design Futures in Asia",
      description:
        "Learn what design education in Asia can become when students learn to compose with AI for public audiences at urban scale, and what that asks of us as educators and industry partners.",
      speaker: {
        name: "Prof Ina Conradi",
        role: "Associate Professor, NTU & Co-Founder, Media Art Nexus",
        image: "/images/speakers/leadership-summit/ina-conradi.webp",
      },
      tag: "Opening Keynote",
    },

    {
      time: "9:40 AM",
      type: "panel",
      title: "1 Million Women In Design & AI",
      description: "",
      panelists: [
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
      ],
      tag: "Panel Discussion",
    },

    { time: "10:50 AM", type: "break", title: "Coffee Break" },

    {
      time: "11:20 AM",
      type: "keynote",
      title:
        "Experience Practice 2.0: Building the Right Thing When Building Is Cheap",
      description:
        "Experience Practice 2.0 is an operating model, not a toolkit: a lean, strategy-led team that scales through accelerators, encodes craft into AI-augmented systems, and proves correctness with evidence. It's about rebuilding around what AI can't replace: knowing what's right.",
      speaker: {
        name: "Sunil Ganesh",
        role: "Head of Experience-led Transformation, BayOne",
        image: "/images/speakers/leadership-summit/sunil-ganesh.webp",
      },
      tag: "Deep Dive",
    },

    {
      time: "12:00 PM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "",
      speaker: {
        name: "",
        role: "",
        image: "",
      },
      tag: "Deep Dive",
    },

    { time: "12:40 PM", type: "break", title: "Lunch" },

    {
      time: "1:40 PM",
      type: "panel",
      title: "Design Leadership",
      description: "",
      panelists: [
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
      ],
      tag: "Panel Discussion",
    },

    {
      time: "2:50 PM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "",
      speaker: {
        name: "",
        role: "",
        image: "",
      },
      tag: "Deep Dive",
    },

    {
      time: "3:30 PM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "The roles they are a-changin: AI and the Great Dissolve",
          tag: "Spark Session",
          speaker: {
            name: "Ish Awasthi",
            role: "VP, UX Research, JPMC",
            image: "/images/speakers/leadership-summit/ish-awasthi.webp",
          },
          description:
            "Exploring how AI is dissolving the boundaries between product, design, and engineering roles, creating new career paths for designers.",
        },
        {
          room: "Room 2",
          title: "Design Pitch",
          tag: "VC Pitch",
          panelists: [
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
          description:
            "An open session where startups pitch to venture capitalists and receive real-time feedback.",
        },
      ],
    },

    {
      time: "3:55 PM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "The Death of the Wireframe",
          tag: "Spark Session",
          speaker: {
            name: "Vyoma Pathak",
            role: "Sr. Design Practice Lead, Mouri Tech",
            image: "/images/speakers/leadership-summit/vyoma-pathak.webp",
          },
          description:
            "Exploring how the death of the wireframe pushes design teams to redefine their value around taste, strategy, and decision-making.",
        },
        {
          room: "Room 2",
          title: "Design Pitch",
          tag: "VC Pitch",
          panelists: [
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
          description:
            "An open session where startups pitch to venture capitalists and receive real-time feedback.",
        },
      ],
    },

    {
      time: "4:20 PM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Why Chat Interfaces Fail Human Relationships",
          tag: "Spark Session",
          speaker: {
            name: "Sundeep Verma",
            role: "Founder, Wingit.ai",
            image: "/images/speakers/leadership-summit/sundeep-verma.webp",
          },
          description:
            "Exploring why AI chat interfaces fail at relationships when they lose continuity, memory, tone, and emotional context.",
        },
        {
          room: "Room 2",
          title: "Design Pitch",
          tag: "VC Pitch",
          panelists: [
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
            { name: "TBA", role: "", image: "" },
          ],
          description:
            "An open session where startups pitch to venture capitalists and receive real-time feedback.",
        },
      ],
    },

    { time: "4:45 PM", type: "break", title: "Coffee Break & Networking" },

    {
      time: "5:15 PM",
      type: "closing",
      title: "Closing Ceremony",
      tag: "Main Stage",
      speaker: { name: "TBA", role: "", image: "" },
      description: "Closing remarks and key takeaways from the conference.",
    },
  ],
};
