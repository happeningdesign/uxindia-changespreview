export const risingScheduleData = {
  days: [
    { id: "day1", label: "Conference and Workshops Day 1", date: "Sept 26", endTime: "5:00 PM" },
    { id: "day2", label: "Conference Day 2", date: "Sept 27", endTime: "4:00 PM" },
  ],
  day1: [
    { time: "8:00 AM", type: "break", title: "Registrations", location: "Auditorium" },
    { time: "9:00 AM", type: "keynote", title: "Opening Keynote", description: "Announcing Soon", tag: "Keynote", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "9:40 AM", type: "keynote", title: "Deep Dive Talk", description: "", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "10:20 AM", type: "break", title: "Coffee Break", location: "Multiple Rooms" },
    { time: "11:05 AM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    {
      time: "11:45 AM", type: "panel", title: "Panel Discussion",
      description: "Industry leaders share their perspectives on navigating the path to design leadership.",
      tag: "Panel Discussion", location: "Auditorium",
      panelists: [
        { name: "TBA", role: "Design Director, Creative Studios", image: "" },
        { name: "TBA", role: "Head of Design, Innovation Labs", image: "" },
        { name: "TBA", role: "Design Lead, Digital Ventures", image: "" },
        { name: "Yadav Narayan", role: "Creative Director, Design Excellence", image: "" },
      ],
    },
    { time: "12:45 PM", type: "break", title: "Lunch", location: "Multiple Rooms" },
    {
      time: "1:45 PM", endTime: "5:00 PM", type: "parallel-workshops", tag: "Workshop", duration: "90 min",
      workshops: [
        { room: "Room 1", title: "Workshop 1", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 2", title: "Workshop 02", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 3", title: "Workshop 03", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 4", title: "Workshop 04", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 5", title: "Workshop 05", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 6", title: "Workshop 06", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 7", title: "Workshop 07", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 8", title: "Workshop 08", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 9", title: "Workshop 09", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 10", title: "Workshop 10", speaker: { name: "Workshop Leader", role: "Expert", image: "" }, description: "Hands-on workshop focusing on practical design skills." },
      ],
    },
    { time: "3:15 PM", type: "break", title: "Coffee Break", location: "Multiple Rooms" },
    { time: "4:00 PM", type: "continuation", title: "Workshops continue in same rooms after coffee break" },
  ],
  day2: [
    { time: "8:00 AM", type: "break", title: "Registrations", location: "Auditorium" },
    { time: "9:00 AM", type: "keynote", title: "Opening Keynote", description: "Announcing Soon", tag: "Keynote", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "9:40 AM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "10:20 AM", type: "break", title: "Coffee Break", location: "Multiple Areas" },
    {
      time: "11:05 AM", type: "parallel-sessions", duration: "60 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Industry leaders discuss emerging trends in design leadership.", panelists: [{ name: "TBA", role: "Design Director, Creative Studios", image: "" }, { name: "TBA", role: "Head of Design, Innovation Labs", image: "" }, { name: "TBA", role: "Design Lead, Tech Innovation", image: "" }, { name: "TBA", role: "Creative Director, Global Design", image: "" }] },
        { room: "Mini-Auditorium 2", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Exploring design-led transformation in organizations.", panelists: [{ name: "TBA", role: "Design Lead, Digital Ventures", image: "" }, { name: "TBA", role: "Product Design Manager, Tech Innovations", image: "" }, { name: "TBA", role: "Design Strategy Lead, Future Focus", image: "" }, { name: "TBA", role: "Head of Design Operations, Innovation Hub", image: "" }] },
        { room: "Mini-Auditorium 3", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Building high-performing design teams.", panelists: [{ name: "TBA", role: "UX Lead, Design Systems", image: "" }, { name: "TBA", role: "Design Strategy Director, Future Design Co", image: "" }, { name: "TBA", role: "VP Design, Creative Excellence", image: "" }, { name: "TBA", role: "Director of Design Culture, Digital Labs", image: "" }] },
      ],
    },
    {
      time: "12:05 PM", type: "parallel-sessions", duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on design innovation." },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on design strategy." },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on design operations." },
      ],
    },
    {
      time: "12:30 PM", type: "parallel-sessions", duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on design thinking." },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on user research." },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "" }, description: "Quick insights on design systems." },
      ],
    },
    { time: "12:55 PM", type: "break", title: "Lunch", location: "Multiple Areas" },
    { time: "2:00 PM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "2:40 PM", type: "keynote", title: "Deep Dive Talk", description: "Announcing Soon", tag: "Deep Dive", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Design Leader", image: "" } },
    { time: "3:20 PM", type: "keynote", title: "Closing Ceremony", description: "Announcing Soon", tag: "Closing", location: "Auditorium", speaker: { name: "Speaker TBA", role: "Conference Host", image: "" } },
    { time: "4:00 PM", type: "break", title: "High Tea", location: "Multiple Areas" },
  ],
};
