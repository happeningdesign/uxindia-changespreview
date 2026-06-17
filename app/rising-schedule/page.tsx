"use client";

import React from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Room colors for workshop badges
const roomColors: Record<string, string> = {
  "Auditorium": "#1D5078",
  "Mini-Auditorium 1": "#1A7A6E",
  "Mini-Auditorium 2": "#C8365A",
  "Mini-Auditorium 3": "#7C3AED",
  "Room 1": "#E85520",
  "Room 2": "#1A7A6E",
  "Room 3": "#C8365A",
  "Room 4": "#7C3AED",
  "Room 5": "#0891B2",
  "Room 6": "#D97706",
  "Room 7": "#059669",
  "Room 8": "#DC2626",
  "Room 9": "#4F46E5",
  "Room 10": "#9333EA",
};

const scheduleData = {
  days: [
    { id: "day1", label: "Conference and Workshops Day 1", date: "Sept 26", endTime: "5:00 PM" },
    { id: "day2", label: "Conference Day 2", date: "Sept 27", endTime: "4:00 PM" },
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
      description: "Setting the stage for the Rising Leaders Forum - a journey of growth, mentorship, and leadership in design.",
      tag: "Keynote",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
    },
    {
      time: "9:40 AM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "An in-depth exploration of emerging design leadership practices and methodologies.",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
      },
    },
    {
      time: "10:20 AM",
      type: "break",
      title: "Coffee Break",
      location: "Multiple Rooms",
    },
    {
      time: "11:05 AM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "Continuing the conversation on design leadership with practical frameworks and insights.",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
      },
    },
    {
      time: "11:45 AM",
      type: "panel",
      title: "Panel Discussion",
      description: "Industry leaders share their perspectives on navigating the path to design leadership.",
      tag: "Panel Discussion",
      location: "Auditorium",
      TBAs: [
        { name: "TBA 1", role: "Design Director, Creative Studios", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png" },
        { name: "TBA 2", role: "Head of Design, Innovation Labs", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png" },
        { name: "TBA 3", role: "Design Lead, Digital Ventures", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png" },
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
      endTime: "5:00 PM",
      type: "parallel-workshops",
      tag: "Workshop",
      duration: "90 min",
      workshops: [
        { room: "Room 1", title: "Workshop 1", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 2", title: "From Designer to Design Manager", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 3", title: "Building Scalable Design Systems", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 4", title: "Storytelling for Design Leaders", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 5", title: "Research-Driven Decision Making", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 6", title: "Designing with AI in the Loop", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 7", title: "Facilitating High-Impact Workshops", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 8", title: "Communicating Design Value to Stakeholders", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 9", title: "Inclusive and Accessible Design Practices", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png" }, description: "Hands-on workshop focusing on practical design skills." },
        { room: "Room 10", title: "Measuring and Proving Design Impact", speaker: { name: "Workshop Leader", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png" }, description: "Hands-on workshop focusing on practical design skills." },
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
      title: "Opening Keynote",
      description: "Kicking off Day 2 with inspiring insights on design leadership and the path forward.",
      tag: "Keynote",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
    },
    {
      time: "9:40 AM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "An in-depth exploration of design leadership practices and methodologies.",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
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
          room: "Mini-Auditorium 1", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Industry leaders discuss emerging trends in design leadership.", TBAs: [
            { name: "TBA 1", role: "Design Director, Creative Studios", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png" },
            { name: "TBA 2", role: "Head of Design, Innovation Labs", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png" },
          ]
        },
        {
          room: "Mini-Auditorium 2", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Exploring design-led transformation in organizations.", TBAs: [
            { name: "TBA 1", role: "Design Lead, Digital Ventures", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png" },
            { name: "TBA 2", role: "Product Design Manager, Tech Innovations", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png" },
          ]
        },
        {
          room: "Mini-Auditorium 3", title: "Panel Discussion", type: "panel", tag: "Panel Discussion", description: "Building high-performing design teams.", TBAs: [
            { name: "TBA 1", role: "UX Lead, Design Systems", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png" },
            { name: "TBA 2", role: "Design Strategy Director, Future Design Co", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png" },
          ]
        },
      ],
    },
    {
      time: "12:05 PM",
      type: "parallel-sessions",
      duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png" }, description: "Quick insights on design innovation." },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png" }, description: "Quick insights on design strategy." },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png" }, description: "Quick insights on design operations." },
      ],
    },
    {
      time: "12:30 PM",
      type: "parallel-sessions",
      duration: "25 min",
      sessions: [
        { room: "Mini-Auditorium 1", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png" }, description: "Quick insights on design thinking." },
        { room: "Mini-Auditorium 2", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png" }, description: "Quick insights on user research." },
        { room: "Mini-Auditorium 3", title: "Spark Session", type: "spark", tag: "Spark Session", speaker: { name: "Speaker TBA", role: "Expert", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png" }, description: "Quick insights on design systems." },
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
      title: "Deep Dive Talk",
      description: "Continuing the conversation on design leadership with practical frameworks.",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
      },
    },
    {
      time: "2:40 PM",
      type: "keynote",
      title: "Deep Dive Talk",
      description: "Advanced strategies for design leadership and team growth.",
      tag: "Deep Dive",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
    },
    {
      time: "3:20 PM",
      type: "keynote",
      title: "Closing Ceremony",
      description: "Celebrating the Rising Leaders Forum and looking ahead to the future.",
      tag: "Closing",
      location: "Auditorium",
      speaker: {
        name: "Speaker TBA",
        role: "Conference Host",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
      },
    },
    {
      time: "4:00 PM",
      type: "break",
      title: "High Tea",
      location: "Multiple Areas",
    },
  ],
};

const sessions = scheduleData.day1;

function parseTimeToMinutes(t: string): number | null {
  const m = t.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

function formatDuration(mins: number): string | null {
  if (mins <= 0) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h && m) return `${h} hr ${m} min`;
  if (h) return `${h} hr`;
  return `${m} min`;
}

export default function RisingSchedulePage() {
  const [activeDay, setActiveDay] = React.useState("day1");
  const currentSessions = activeDay === "day1" ? scheduleData.day1 : (activeDay === "day2" ? scheduleData.day2 : scheduleData.day3);
  const activeDayIndex = scheduleData.days.findIndex((d) => d.id === activeDay);
  const activeDayLabel = scheduleData.days[activeDayIndex]?.label ?? "";
  const prevDay = activeDayIndex > 0 ? scheduleData.days[activeDayIndex - 1] : null;
  const nextDay = activeDayIndex < scheduleData.days.length - 1 ? scheduleData.days[activeDayIndex + 1] : null;

  return (
    <main>
      <Nav forceSolid={true} />
      <div className="bg-[#F5F0E8] w-full pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
          {/* Header - aligned to card grid */}
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-2" />
            <div className="lg:col-span-10">
              <h1 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-[#0D0D0D] mb-4">
                Rising Leaders Forum 2026
              </h1>
              <p className="font-sans text-base text-[#0D0D0D]/60">
                September 26-27, 2026 — Srishti Manipal Institute of Art, Design & Technology, Bengaluru
              </p>
            </div>
          </div>

          {/* Day tabs */}
          <div className="mb-12 -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-2" />
              <div className="lg:col-span-10">
                <div className="grid grid-cols-2 gap-2 md:flex md:gap-3">
                  {scheduleData.days.map((day) => (
                    <button
                      key={day.id}
                      onClick={() => setActiveDay(day.id)}
                      className={`px-3 md:px-5 py-3 rounded-lg font-sans text-xs md:text-sm font-semibold transition-all border cursor-pointer ${activeDay === day.id
                        ? "border-2 border-[#E85520] text-[#0D0D0D] bg-transparent"
                        : "border border-[#0D0D0D]/20 text-[#0D0D0D] bg-[#0D0D0D]/5 hover:bg-[#0D0D0D]/10 hover:border-[#0D0D0D]/40"
                        }`}
                    >
                      <span className="block truncate">{day.label}</span>
                      <span className={`text-[10px] md:text-xs mt-0.5 block ${activeDay === day.id ? "text-[#E85520]" : "text-[#0D0D0D]/50"}`}>{day.date}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6">
            {currentSessions.map((session, index) => {
              // Render time and event as a row
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Time column - hidden on mobile */}
                  <div className="hidden lg:block lg:col-span-2">
                    <div className="text-sm font-sans text-[#0D0D0D]/50 sticky top-24">
                      <p>{session.time}{session.endTime && session.type === "parallel-workshops" ? ` – ${session.endTime}` : ""}</p>
                    </div>
                  </div>

                  {/* Event card */}
                  <div className="lg:col-span-10">
                    {session.type === "keynote" && (
                      <div
                        className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-4 lg:hidden">
                          <span className="px-3 py-1 bg-[#1D5078] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">
                            {session.tag}
                          </span>
                          <p className="text-xs text-[#0D0D0D]/40">
                            {session.time}{session.endTime && session.type === "parallel-workshops" ? ` – ${session.endTime}` : ""}
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-leadership text-xl md:text-2xl text-[#0D0D0D] mb-2">
                              {session.title}
                            </h3>
                            <p className="font-sans text-sm text-[#0D0D0D]/60 mb-3">
                              {session.description}
                            </p>
                            <p className="font-sans text-sm text-[#0D0D0D]/80">
                              <span className="block">{session.speaker.name}</span>
                              <span className="text-[#0D0D0D]/40 text-xs">{session.speaker.role}</span>
                            </p>
                          </div>
                          <span className="hidden lg:inline-block px-3 py-1 bg-[#1D5078] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">
                            {session.tag}
                          </span>
                        </div>
                      </div>
                    )}
                    {session.type === "continuation" && (
                      <div className="bg-white border border-[#0D0D0D]/10 rounded-xl p-6 flex items-start gap-4">
                        <svg className="w-6 h-6 text-[#E85520] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="flex-1">
                          <p className="font-sans text-base text-[#0D0D0D] font-medium">
                            {session.title}
                          </p>
                        </div>
                      </div>
                    )}
                    {session.type === "break" && (
                      (() => {
                        const isLunch = session.title.toLowerCase().includes("lunch");
                        const isRegistration = session.title.toLowerCase().includes("registration");
                        const isWorkshopContinue = session.title.toLowerCase().includes("continue");
                        const start = parseTimeToMinutes(session.time);
                        const nextSession = currentSessions[index + 1];
                        const nextStart = nextSession ? parseTimeToMinutes(nextSession.time) : null;
                        const durationLabel =
                          !isRegistration && start !== null && nextStart !== null
                            ? formatDuration(nextStart - start)
                            : null;
                        if (isWorkshopContinue) return (
                          <div
                            key={index}
                            className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-4 flex items-center justify-center shadow-sm"
                          >
                            <p className="font-sans text-base text-[#0D0D0D] font-medium text-center">
                              {session.title}
                            </p>
                          </div>
                        );
                        return (
                          <div
                            key={index}
                            className="bg-[#E85520]/10 border border-[#0D0D0D]/10 rounded-xl p-4 flex items-center gap-4"
                          >
                            <div className="w-10 h-10 bg-[#E85520]/20 rounded-lg flex items-center justify-center shrink-0">
                              {isLunch ? (
                                <img
                                  src="/icons/lunch.svg"
                                  alt="lunch"
                                  className="w-6 h-6"
                                  style={{ filter: "invert(44%) sepia(79%) saturate(1000%) hue-rotate(349deg) brightness(95%)" }}
                                />
                              ) : isRegistration ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#E85520"
                                  strokeWidth="2"
                                >
                                  <path d="M2 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z" />
                                  <path d="M9 5v14" />
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#E85520"
                                  strokeWidth="2"
                                >
                                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 flex-wrap">
                                <p className="font-sans text-base text-[#0D0D0D] font-medium">
                                  {session.title}
                                </p>
                                {durationLabel && (
                                  <span className="px-2.5 py-0.5 bg-[#0D0D0D]/10 text-[#0D0D0D]/70 text-xs font-sans font-medium rounded-full">
                                    {durationLabel}
                                  </span>
                                )}
                              </div>
                              {isRegistration && (
                                <p className="font-sans text-[11px] text-[#0D0D0D]/60 mt-1">
                                  Student attendees must show valid student ID
                                </p>
                              )}
                              <p className="font-sans text-xs text-[#0D0D0D]/40 lg:hidden">
                                {session.time}
                              </p>
                            </div>
                          </div>
                        );
                      })()
                    )}
                    {session.type === "panel" && (
                      <div
                        className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="lg:hidden px-3 py-1 bg-[#1A7A6E] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">
                            {session.tag}
                          </span>
                          <p className="lg:hidden text-xs text-[#0D0D0D]/40">
                            {session.time}
                          </p>
                        </div>
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="font-leadership text-xl md:text-2xl text-[#0D0D0D] mb-2">
                              {session.title}
                            </h3>
                            <p className="font-sans text-sm text-[#0D0D0D]/60">
                              {session.description}
                            </p>
                          </div>
                          <span className="hidden lg:inline-block px-3 py-1 bg-[#1A7A6E] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider shrink-0 ml-4">
                            {session.tag}
                          </span>
                        </div>
                        {/* TBAs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                          {session.TBAs.map((TBA, pIndex) => (
                            <div key={pIndex} className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                              </div>
                              <div className="flex flex-col items-start gap-1 min-w-0">
                                <p className="font-sans text-sm text-[#0D0D0D] font-medium leading-tight">
                                  {TBA.name}
                                </p>
                                <p className="font-sans text-xs text-[#0D0D0D]/60 leading-tight">
                                  {TBA.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {session.type === "parallel-workshops" && (
                      <div className="space-y-4">
                        {/* Mobile time display */}
                        <p className="text-xs text-[#0D0D0D]/40 lg:hidden">
                          {session.time}{session.endTime ? ` – ${session.endTime}` : ""}
                        </p>
                        {/* Horizontally scrollable on mobile, grid on desktop */}
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible scrollbar-hide">
                          {session.workshops.map((workshop, wIndex) => (
                            <div
                              key={wIndex}
                              className="group/ws flex-shrink-0 w-64 lg:w-auto bg-white border border-[#0D0D0D]/10 rounded-2xl p-4 hover:border-[#E85520]/30 transition-all shadow-sm"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <span
                                  className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider"
                                  style={{ backgroundColor: roomColors[workshop.room] || "#1D5078" }}
                                >
                                  {workshop.room}
                                </span>
                                <span className="px-2 py-0.5 bg-[#1A7A6E]/10 text-[#1A7A6E] text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">
                                  Workshop
                                </span>
                              </div>
                              <h4
                                title={workshop.title}
                                className="font-leadership text-base text-[#0D0D0D] mb-2 line-clamp-2 group-hover/ws:line-clamp-none transition-all"
                              >
                                {workshop.title}
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div className="min-w-0">
                                  <p className="font-sans text-xs text-[#0D0D0D]/80 font-medium truncate">
                                    {workshop.speaker.name}
                                  </p>
                                  <p className="font-sans text-[10px] text-[#0D0D0D]/40 truncate">
                                    {workshop.speaker.role}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Scroll hint on mobile */}
                        <p className="lg:hidden text-xs text-[#0D0D0D]/40 text-center">
                          Swipe to see all workshops →
                        </p>
                      </div>
                    )}
                    {session.type === "parallel-sessions" && (
                      <div className="space-y-4">
                        {/* Horizontally scrollable on mobile, grid on desktop */}
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible scrollbar-hide">
                          {session.sessions.map((sess, sIndex) => (
                            <div
                              key={sIndex}
                              className="flex-shrink-0 w-72 lg:w-auto bg-white border border-[#0D0D0D]/10 rounded-2xl p-5 hover:border-[#E85520]/30 transition-all shadow-sm"
                            >
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span
                                  className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider shrink-0"
                                  style={{ backgroundColor: roomColors[sess.room] || "#1D5078" }}
                                >
                                  {sess.room}
                                </span>
                                {sess.tag && (
                                  <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20 shrink-0">
                                    {sess.tag}
                                  </span>
                                )}
                              </div>
                              <h4 className="font-leadership text-lg text-[#0D0D0D] mb-2">
                                {sess.title}
                              </h4>
                              <p className="font-sans text-xs text-[#0D0D0D]/60 mb-3 line-clamp-2">
                                {sess.description}
                              </p>
                              {sess.type === "panel" && sess.TBAs && (
                                <div className="flex gap-2 mt-3">
                                  {sess.TBAs.map((TBA, pIndex) => (
                                    <div
                                      key={pIndex}
                                      className="w-8 h-8 rounded-full border border-[#0D0D0D]/10 bg-[#0D0D0D]/5 flex items-center justify-center shrink-0"
                                      title={TBA.name}
                                    >
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {sess.type === "spark" && sess.speaker && (
                                <div className="flex items-center gap-2 mt-3">
                                  <div className="w-8 h-8 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-sans text-xs text-[#0D0D0D]/80 font-medium truncate">
                                      {sess.speaker.name}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        <p className="lg:hidden text-xs text-[#0D0D0D]/40 text-center">
                          Swipe to see all sessions →
                        </p>
                      </div>
                    )}
                    {session.type === "mixed-sessions" && (
                      <div className="space-y-4">
                        {/* Header on mobile */}
                        <div className="flex items-center justify-between lg:hidden">
                          <span className="px-3 py-1 bg-[#1D5078] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">
                            Auditorium + {session.parallelSessions.length} Rooms
                          </span>
                          <p className="text-xs text-[#0D0D0D]/40">{session.time}</p>
                        </div>

                        {/* Grid layout: Auditorium on left, parallel sessions on right */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          {/* Auditorium session - takes 2 columns */}
                          <div className="lg:col-span-2 bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider bg-[#1D5078]">
                                Auditorium
                              </span>
                              <span className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider bg-[#E85520]">
                                {session.auditoriumSession.tag}
                              </span>
                            </div>
                            <h3 className="font-leadership text-xl md:text-2xl text-[#0D0D0D] mb-2">
                              {session.auditoriumSession.title}
                            </h3>
                            <p className="font-sans text-sm text-[#0D0D0D]/60 mb-4">
                              {session.auditoriumSession.description}
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                              </div>
                              <div>
                                <p className="font-sans text-sm text-[#0D0D0D]/80 font-medium">
                                  {session.auditoriumSession.speaker.name}
                                </p>
                                <p className="font-sans text-xs text-[#0D0D0D]/40">
                                  {session.auditoriumSession.speaker.role}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Parallel sessions - stacked in 1 column */}
                          <div className="space-y-4">
                            {session.parallelSessions.map((sess, sIndex) => (
                              <div
                                key={sIndex}
                                className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-4 hover:border-[#E85520]/30 transition-all shadow-sm"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <span
                                    className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider"
                                    style={{ backgroundColor: roomColors[sess.room] || "#7C3AED" }}
                                  >
                                    {sess.room}
                                  </span>
                                </div>
                                <h4 className="font-leadership text-base text-[#0D0D0D] mb-2">
                                  {sess.title}
                                </h4>
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                  </div>
                                  <p className="font-sans text-xs text-[#0D0D0D]/70 truncate">
                                    {sess.speaker.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {session.type === "workshops" && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {session.workshops.map((workshop, wIndex) => (
                          <div
                            key={wIndex}
                            className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-sans text-xs text-white bg-[#C8365A] rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                                {workshop.room}
                              </p>
                              <p className="lg:hidden text-xs text-[#0D0D0D]/40">
                                {session.time}
                              </p>
                            </div>
                            <h3 className="font-leadership text-lg md:text-xl text-[#0D0D0D] mb-3">
                              {workshop.title}
                            </h3>
                            <div className="flex items-start gap-3 mb-4">
                              <div className="w-10 h-10 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-sans text-sm text-[#0D0D0D]/80 font-medium">
                                  <span className="block">{workshop.speaker.name}</span>
                                  <span className="text-[#0D0D0D]/40 text-xs">{workshop.speaker.role}</span>
                                </p>
                              </div>
                            </div>
                            <p className="font-sans text-xs md:text-sm text-[#0D0D0D]/60 leading-relaxed">
                              {workshop.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {session.type === "sessions" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {session.sessions.map((sess, sIndex) => (
                          <div
                            key={sIndex}
                            className={`bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm ${sess.duration ? 'md:row-span-2' : ''}`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-sans text-xs text-white bg-[#E85520] rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                                {sess.room}
                              </p>
                              <p className="lg:hidden text-xs text-[#0D0D0D]/40">
                                {session.time}
                              </p>
                            </div>
                            <h3 className="font-leadership text-lg md:text-xl text-[#0D0D0D] mb-3">
                              {sess.title}
                            </h3>
                            {sess.TBAs ? (
                              // Multiple TBAs
                              <>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                  {sess.TBAs.map((TBA, pIndex) => (
                                    <div
                                      key={pIndex}
                                      className="w-10 h-10 rounded-full border-2 border-[#0D0D0D]/10 bg-[#0D0D0D]/5 flex items-center justify-center shrink-0"
                                      title={`${TBA.name} - ${TBA.role}`}
                                    >
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                  ))}
                                </div>
                                <div className="mb-4">
                                  <p className="font-sans text-xs text-[#0D0D0D]/60">
                                    {sess.TBAs.length} VC Investors
                                  </p>
                                </div>
                              </>
                            ) : (
                              // Single speaker
                              <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-sans text-sm text-[#0D0D0D]/80 font-medium">
                                    <span className="block">{sess.speaker.name}</span>
                                    <span className="text-[#0D0D0D]/40 text-xs">{sess.speaker.role}</span>
                                  </p>
                                </div>
                              </div>
                            )}
                            <p className="font-sans text-xs md:text-sm text-[#0D0D0D]/60 leading-relaxed">
                              {sess.description}
                            </p>
                            {sess.duration && (
                              <p className="font-sans text-xs text-[#0D0D0D]/40 mt-4 pt-4 border-t border-[#0D0D0D]/10">
                                Duration: {sess.duration}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {session.type === "grid-sessions" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column - stacked sessions */}
                        <div className="grid grid-rows-2 gap-4">
                          {session.leftSessions.map((sess, sIndex) => (
                            <div
                              key={sIndex}
                              className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <p className="font-sans text-xs text-white bg-[#1D5078] rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                                  {sess.room}
                                </p>
                                <p className="font-sans text-xs text-[#0D0D0D]/40">
                                  {sess.time}
                                </p>
                              </div>
                              <h3 className="font-leadership text-lg md:text-xl text-[#0D0D0D] mb-3">
                                {sess.title}
                              </h3>
                              <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-sans text-sm text-[#0D0D0D]/80 font-medium">
                                    <span className="block">{sess.speaker.name}</span>
                                    <span className="text-[#0D0D0D]/40 text-xs">{sess.speaker.role}</span>
                                  </p>
                                </div>
                              </div>
                              <p className="font-sans text-xs md:text-sm text-[#0D0D0D]/60 leading-relaxed">
                                {sess.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Right column - spanning full height */}
                        <div className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm h-full flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-sans text-xs text-white bg-[#1A7A6E] rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                              {session.rightSession.room}
                            </p>
                            <p className="lg:hidden text-xs text-[#0D0D0D]/40">
                              {session.time}
                            </p>
                          </div>
                          <h3 className="font-leadership text-lg md:text-xl text-[#0D0D0D] mb-3">
                            {session.rightSession.title}
                          </h3>
                          <p className="font-sans text-xs md:text-sm text-[#0D0D0D]/60 leading-relaxed mb-4">
                            {session.rightSession.description}
                          </p>
                          <div className="flex-1">
                            <p className="font-sans text-xs text-[#0D0D0D]/40 uppercase tracking-wider mb-3">
                              VC Investors
                            </p>
                            <div className="space-y-3">
                              {session.rightSession.TBAs.map((TBA, pIndex) => (
                                <div key={pIndex} className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-[#0D0D0D]/10 bg-[#0D0D0D]/5 flex items-center justify-center shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                  </div>
                                  <div>
                                    <p className="font-sans text-sm text-[#0D0D0D]/80">{TBA.name}</p>
                                    <p className="font-sans text-xs text-[#0D0D0D]/40">{TBA.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Day ends card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="hidden lg:block lg:col-span-2">
                <div className="text-sm font-sans text-[#0D0D0D]/50 sticky top-24">
                  {scheduleData.days[activeDayIndex]?.endTime}
                </div>
              </div>
              <div className="lg:col-span-10">
                <div className="border border-dashed border-[#0D0D0D]/15 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-center">
                  <span className="h-px w-8 bg-[#0D0D0D]/15" />
                  <p className="font-sans text-sm text-[#0D0D0D]/50">
                    End of {activeDayLabel}
                  </p>
                  <span className="h-px w-8 bg-[#0D0D0D]/15" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom day navigation */}
          <div className="mt-12 pt-8 border-t border-[#0D0D0D]/10 flex items-center justify-between gap-4">
            {prevDay ? (
              <button
                onClick={() => {
                  setActiveDay(prevDay.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-3 text-left cursor-pointer max-w-[45%]"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] text-[#0D0D0D]/40 uppercase tracking-wider">Previous</span>
                  <span className="block font-sans text-sm text-[#0D0D0D]/80 truncate group-hover:text-[#0D0D0D] transition-colors">{prevDay.label}</span>
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextDay ? (
              <button
                onClick={() => {
                  setActiveDay(nextDay.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-3 text-right cursor-pointer max-w-[45%] ml-auto"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] text-[#0D0D0D]/40 uppercase tracking-wider">Next</span>
                  <span className="block font-sans text-sm text-[#0D0D0D]/80 truncate group-hover:text-[#0D0D0D] transition-colors">{nextDay.label}</span>
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
