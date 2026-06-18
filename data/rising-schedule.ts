export const risingScheduleData = {
  days: [
    { id: "day1", label: "Conference and Workshops Day 1", date: "Sept 26", endTime: "5:00 PM" },
    { id: "day2", label: "Conference Day 2", date: "Sept 27", endTime: "4:00 PM" },
  ],
  day1: [
    { time: "8:00 AM", type: "break", title: "Registrations", location: "Auditorium" },
    { time: "9:00 AM", type: "keynote", title: "Opening Keynote", description: "Announcing Soon", tag: "Keynote", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "9:40 AM", type: "keynote", title: "Shipped & Imperfect", description: "", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Deepashree Kale", role: "Head of Design", image: "/RS-Speaker-Images/Deepashree Kale.webp" } },
    { time: "10:20 AM", type: "break", title: "Coffee Break", location: "Multiple Rooms" },
    { time: "11:05 AM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    {
      time: "11:45 AM", type: "panel", title: "Panel Discussion",
      description: "",
      tag: "Panel Discussion", location: "Auditorium",
      panelists: [
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
        { name: "TBA", role: "", image: "" },
      ],
    },
    { time: "12:45 PM", type: "break", title: "Lunch", location: "Multiple Rooms" },
    {
      time: "1:45 PM", endTime: "5:00 PM", type: "parallel-workshops", tag: "Workshop", duration: "90 min",
      workshops: [
        { room: "Room 1", title: "Workshop 1", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 2", title: "Workshop 02", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 3", title: "Workshop 03", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 4", title: "Workshop 04", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 5", title: "Workshop 05", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 6", title: "Workshop 06", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 7", title: "Workshop 07", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 8", title: "Workshop 08", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 9", title: "Workshop 09", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Room 10", title: "Workshop 10", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break", location: "Multiple Rooms" },
    { time: "4:00 PM", type: "continuation", title: "Workshops continue in same rooms after coffee break" },
  ],
  day2: [
    { time: "8:00 AM", type: "break", title: "Registrations", location: "Auditorium" },
    { time: "9:00 AM", type: "keynote", title: "Opening Keynote", description: "Announcing Soon", tag: "Keynote", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "9:40 AM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "10:20 AM", type: "break", title: "Coffee Break", location: "Multiple Areas" },
    {
      time: "11:05 AM", type: "parallel-sessions", duration: "60 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "", panelists: [{ name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }] },
        { room: "Mini-Auditorium 2", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "", panelists: [{ name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }] },
        { room: "Mini-Auditorium 3", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "", panelists: [{ name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }, { name: "TBA", role: "", image: "" }] },
      ],
    },
    {
      time: "12:05 PM", type: "parallel-sessions", duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    {
      time: "12:30 PM", type: "parallel-sessions", duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "TBA", role: "", image: "" }, description: "" },
      ],
    },
    { time: "12:55 PM", type: "break", title: "Lunch", location: "Multiple Areas" },
    { time: "2:00 PM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "2:40 PM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "3:20 PM", type: "keynote", title: "Closing Ceremony", description: "Announcing Soon", tag: "Closing", location: "Auditorium", speaker: { name: "TBA", role: "", image: "" } },
    { time: "4:00 PM", type: "break", title: "High Tea", location: "Multiple Areas" },
  ],
};
