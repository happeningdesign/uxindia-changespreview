export const leadershipScheduleData = {
  days: [
    { id: "day1", label: "Pre-Conference Workshops", date: "Sept 23", endTime: "5:00 PM" },
    { id: "day2", label: "Conference Day 1", date: "Sept 24", endTime: "5:00 PM" },
    { id: "day3", label: "Conference Day 2", date: "Sept 25", endTime: "4:00 PM" },
  ],
  day1: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    {
      time: "9:00 AM", endTime: "12:15 PM", type: "workshops", tag: "Workshop",
      workshops: [
        { room: "Room 1", title: "Workshop 01", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 2", title: "Workshop 02", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 3", title: "Workshop 03", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    { time: "10:30 AM", type: "break", title: "Coffee Break" },
    { time: "11:15 AM", type: "continuation", title: "Workshops continue in same rooms after coffee break" },
    { time: "12:15 PM", type: "break", title: "Lunch" },
    {
      time: "1:45 PM", endTime: "5:00 PM", type: "workshops", tag: "Workshop",
      workshops: [
        { room: "Room 1", title: "Workshop 04", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 2", title: "Workshop 05", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 3", title: "Workshop 06", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break" },
    { time: "4:00 PM", type: "continuation", title: "Workshops continue in same rooms after coffee break" },
    { time: "5:00 PM", type: "dayend", title: "Pre-Conference Workshops End" },
  ],
  day2: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    { time: "9:00 AM", type: "keynote", title: "TBA", description: "", speaker: { name: "TBA", role: "", image: "" }, tag: "Opening Keynote" },
    { time: "9:50 AM", type: "keynote", title: "Grand Keynote", description: "", speaker: { name: "TBA", role: "", image: "" }, tag: "Grand Keynote" },
    { time: "10:40 AM", type: "break", title: "Coffee Break" },
    { time: "11:25 AM", type: "keynote", title: "Plenary Keynote", description: "", speaker: { name: "TBA", role: "", image: "" }, tag: "Plenary Keynote" },
    { time: "12:05 PM", type: "keynote", title: "Plenary Keynote: Design Ethics in AI", description: "Responsible design practices in an AI-driven world.", speaker: { name: "TBA", role: "Ethical Design Specialist, UMO Design Foundation", image: "" }, tag: "Plenary Keynote" },
    { time: "12:45 PM", type: "break", title: "Lunch Break" },
    {
      time: "2:30 PM", type: "panel", title: "Panel Discussion: Future of Design Leadership",
      description: "Thought leaders share perspectives on emerging trends and challenges in design leadership.",
      panelists: [
        { name: "TBA", role: "Design Director, UMO Design Foundation", image: "" },
        { name: "TBA", role: "Creative Lead, Design Thinking Institute", image: "" },
        { name: "TBA", role: "Product Head, Digital Innovation Lab", image: "" },
        { name: "TBA", role: "Strategy Lead, Design Futures", image: "" },
      ],
      tag: "Panel Discussion",
    },
    { time: "3:40 PM", type: "keynote", title: "Plenary Keynote: Global Design Perspectives", description: "Cross-cultural insights into design leadership practices worldwide.", speaker: { name: "TBA", role: "Global Design Director, UMO Design Foundation", image: "" }, tag: "Plenary Keynote" },
    { time: "4:20 PM", type: "break", title: "Coffee Break & Networking" },
    { time: "5:20 PM", type: "keynote", title: "Plenary Keynote: The Next Wave of Design", description: "What's next in design leadership and innovation.", speaker: { name: "TBA", role: "Innovation Strategist, UMO Design Foundation", image: "" }, tag: "Plenary Keynote" },
    { time: "6:00 PM", type: "keynote", title: "Grand Keynote: Design's Role in Transformation", description: "How design drives organizational and social transformation.", speaker: { name: "Doug", role: "Design Transformation Expert", image: "" }, tag: "Grand Keynote" },
    { time: "6:50 PM", type: "break", title: "Networking Dinner" },
  ],
  day3: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    {
      time: "9:00 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Opening Remarks", speaker: { name: "TBA", role: "Design Leader, UMO Design Foundation", image: "" }, description: "Welcome to Day 3 Design Leadership Conference." },
        { room: "Room 2", title: "Opening Remarks", speaker: { name: "TBA", role: "Design Entrepreneur, UMO Design Foundation", image: "" }, description: "Welcome to Day 3 Design Entrepreneurship Track." },
      ],
    },
    {
      time: "9:25 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Deep Dive Talk", tag: "Deep Dive", speaker: { name: "TBA", role: "Design Strategist, UMO Design Foundation", image: "" }, description: "Exploring advanced design strategies and implementation." },
        { room: "Room 2", title: "Deep Dive Talk", tag: "Deep Dive", speaker: { name: "TBA", role: "Design Entrepreneur, UMO Design Foundation", image: "" }, description: "Building and scaling design-driven businesses." },
      ],
    },
    {
      time: "10:05 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Spark Session", tag: "Spark Session", speaker: { name: "TBA", role: "Design Innovator, UMO Design Foundation", image: "" }, description: "Lightning talks on design innovation." },
        { room: "Room 2", title: "Spark Session", tag: "Spark Session", speaker: { name: "TBA", role: "Design Entrepreneur, UMO Design Foundation", image: "" }, description: "Quick insights on entrepreneurial design thinking." },
      ],
    },
    { time: "10:30 AM", type: "break", title: "Coffee Break" },
    {
      time: "11:15 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Spark Session", tag: "Spark Session", speaker: { name: "TBA", role: "Design Innovator, UMO Design Foundation", image: "" }, description: "Creative approaches to design challenges." },
        { room: "Room 2", title: "Spark Session", tag: "Spark Session", speaker: { name: "TBA", role: "Design Entrepreneur, UMO Design Foundation", image: "" }, description: "Entrepreneurial insights from design leaders." },
      ],
    },
    {
      time: "11:40 AM", type: "dual-panels",
      sessions: [
        { room: "Room 1", title: "Panel Discussion", description: "Discussion on design leadership in modern organizations.", tag: "Panel Discussion", panelists: [{ name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }] },
        { room: "Room 2", title: "Panel Discussion", description: "Navigating design entrepreneurship and growth.", tag: "Panel Discussion", panelists: [{ name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }, { name: "Panelist TBA", role: "Design Leader", image: "" }] },
      ],
    },
    { time: "12:40 PM", type: "break", title: "Lunch" },
    {
      time: "2:10 PM", type: "grid-sessions",
      leftSessions: [
        { room: "Room 1", title: "Deep Dive Talk", speaker: { name: "TBA", role: "Design Strategist, UMO Design Foundation", image: "" }, description: "Advanced strategies for design transformation.", tag: "Deep Dive" },
        { time: "2:50 PM", room: "Room 1", title: "Spark Session", speaker: { name: "TBA", role: "Design Innovator, UMO Design Foundation", image: "" }, description: "Final insights and takeaways from the day.", tag: "Spark Session" },
      ],
      rightSession: {
        room: "Room 2", title: "Design Pitch VC Sessions", tag: "VC Pitch",
        panelists: [
          { name: "TBA", role: "VC Investor, UMO Design Foundation", image: "" },
          { name: "TBA", role: "VC Investor, UMO Design Foundation", image: "" },
          { name: "TBA", role: "VC Investor, UMO Design Foundation", image: "" },
          { name: "TBA", role: "VC Investor, UMO Design Foundation", image: "" },
        ],
        description: "Pitch your design-driven startup to VCs.",
      },
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break & Networking" },
    { time: "4:00 PM", type: "closing", title: "Closing Ceremony", tag: "Main Stage", speaker: { name: "TBA", role: "Conference Lead, UMO Design Foundation", image: "" }, description: "Closing remarks and key takeaways from the conference." },
  ],
};
