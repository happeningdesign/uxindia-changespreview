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
    { time: "11:25 AM", type: "keynote", title: "Plenary Keynote: Design Leadership with Integrity", description: "A keynote on what it really takes to lead with integrity in design — without losing yourself to politics or pressure.", speaker: { name: "Mario Van der Meulen", role: "CXO Aleph Labs", image: "/LS-Speaker-Images/Van-Mario.webp" }, tag: "Plenary Keynote" },
    { time: "12:05 PM", type: "keynote", title: "Plenary Keynote: Design Ethics in AI", description: "Responsible design practices in an AI-driven world.", speaker: { name: "TBA", role: "", image: "" }, tag: "Plenary Keynote" },
    { time: "12:45 PM", type: "break", title: "Lunch Break" },
    {
      time: "2:30 PM", type: "panel", title: "Panel Discussion",
      description: "",
      panelists: [
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
      ],
      tag: "Panel Discussion",
    },
    { time: "3:40 PM", type: "keynote", title: "Plenary Keynote: Global Design Perspectives", description: "Cross-cultural insights into design leadership practices worldwide.", speaker: { name: "TBA", role: "", image: "" }, tag: "Plenary Keynote" },
    { time: "4:20 PM", type: "break", title: "Coffee Break & Networking" },
    { time: "5:20 PM", type: "keynote", title: "Plenary Keynote: The Next Wave of Design", description: "What's next in design leadership and innovation.", speaker: { name: "TBA", role: "", image: "" }, tag: "Plenary Keynote" },
    { time: "6:00 PM", type: "keynote", title: "Grand Keynote", description: "", speaker: { name: "", role: "", image: "" }, tag: "Grand Keynote" },
    { time: "6:50 PM", type: "break", title: "Networking Dinner" },
  ],
  day3: [
    { time: "8:00 AM", type: "break", title: "Registrations" },
    {
      time: "9:00 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Opening Remarks", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 2", title: "Opening Remarks", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    {
      time: "9:25 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Deep Dive Talk", tag: "Deep Dive", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 2", title: "Deep Dive Talk", tag: "Deep Dive", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    {
      time: "10:05 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "Death of the Wireframe", tag: "Spark Session", speaker: { name: "Vyoma Pathak", role: "Sr. Design Practice Lead, MOURI Tech", image: "/LS-Speaker-Images/Vyoma.webp" }, description: "Stepping beyond UI generation to explore what design judgment looks like when anyone can design." },
        { room: "Room 2", title: "The Original Algorithm: Archiving the Intelligence AI Cannot Replicate", tag: "Spark Session", speaker: { name: "Harshita Hassani", role: "Sr. UX Designer, Optum (United Health Group)", image: "/LS-Speaker-Images/Harshita-Hassan.webp" }, description: "Exploring how a decade of archived maternal wisdom became the foundation for an AI built on care, not just data." },
      ],
    },
    { time: "10:30 AM", type: "break", title: "Coffee Break" },
    {
      time: "11:15 AM", type: "sessions",
      sessions: [
        { room: "Room 1", title: "The roles they are a-changin: AI and the Great Dissolve", tag: "Spark Session", speaker: { name: "Ish Awasthi", role: "VP, UX research, JPMC", image: "/LS-Speaker-Images/Ish-Awasti.webp" }, description: "AI is dissolving the lines between product, UX, and engineering — three new career paths are emerging in their place." },
        { room: "Room 2", title: "Spark Session", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    {
      time: "11:40 AM", type: "dual-panels",
      sessions: [
        { room: "Room 1", title: "Panel Discussion", description: "", tag: "Panel Discussion", panelists: [{ name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "", role: "", image: "" }] },
        { room: "Room 2", title: "Panel Discussion", description: "", tag: "Panel Discussion", panelists: [{ name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }] },
      ],
    },
    { time: "12:40 PM", type: "break", title: "Lunch" },
    {
      time: "2:10 PM", type: "grid-sessions",
      leftSessions: [
        { room: "Room 1", title: "Deep Dive Talk", speaker: { name: "TBA", role: "", image: "" }, description: "", tag: "Deep Dive" },
        { time: "2:50 PM", room: "Room 1", title: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "", tag: "Spark Session" },
      ],
      rightSession: {
        room: "Room 2", title: "", tag: "VC Pitch",
        panelists: [
          { name: "TBA", role: "", image: "" },
          { name: "TBA", role: "", image: "" },
          { name: "TBA", role: "", image: "" },
          { name: "TBA", role: "", image: "" },
        ],
        description: "",
      },
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break & Networking" },
    { time: "4:00 PM", type: "closing", title: "Closing Ceremony", tag: "Main Stage", speaker: { name: "TBA", role: "", image: "" }, description: "Closing remarks and key takeaways from the conference." },
  ],
};
