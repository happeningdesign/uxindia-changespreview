"use client";

import React from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

const scheduleData = {
  days: [
    { id: "day1", label: "Day 1", date: "Sept 23" },
    { id: "day2", label: "Day 2", date: "Sept 24" },
    { id: "day3", label: "Day 3", date: "Sept 25" },
  ],
  day1: [
    {
      time: "9:00 AM",
      type: "keynote",
      title: "The Future of Design Leadership",
      description: "Opening keynote on how design leadership is evolving in the age of AI and rapid technological change.",
      speaker: {
        name: "Mohan Krishnaraj",
        role: "Global Head of Design, Cognizant",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
      tag: "Keynote",
    },
    {
      time: "10:30 AM",
      type: "dual",
      sessions: [
        {
          title: "Building Design Systems at Scale",
          description: "Learn how to create and maintain design systems that work across global organizations.",
          speaker: {
            name: "Kate Moran",
            role: "VP Research, N/NG",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
        },
        {
          title: "Research-Driven Design Decisions",
          description: "Frameworks for integrating user research into strategic design decisions.",
          speaker: {
            name: "Prof. Kirti Trivedi",
            role: "VDP, IIT Indore",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
        },
      ],
    },
    {
      time: "12:00 PM",
      type: "break",
      title: "Networking Lunch",
    },
    {
      time: "1:30 PM",
      type: "tracks",
      tracks: [
        {
          tag: "Leadership",
          title: "Managing Up: Design at the C-Suite",
          speaker: {
            name: "Rucha Humnabadkar",
            role: "Director Of Design, Youtube",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Strategies for communicating design value to executive leadership.",
        },
        {
          tag: "Strategy",
          title: "Design Operations Excellence",
          speaker: {
            name: "Mirjam Wouters",
            role: "Experience Labs Lead, Royal Philips",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          description: "Optimizing design workflows and team structures for maximum impact.",
        },
        {
          tag: "Innovation",
          title: "AI-Augmented Design Process",
          speaker: {
            name: "Donald Chesnut",
            role: "CDO, CANDESCENT",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          description: "Integrating AI tools into the design workflow without losing creativity.",
        },
      ],
    },
    {
      time: "3:00 PM",
      type: "panel",
      title: "Panel: The State of Design in 2026",
      description: "Industry leaders discuss trends, challenges, and opportunities in design leadership.",
      panelists: [
        {
          name: "Mohan Krishnaraj",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        {
          name: "Kate Moran",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        {
          name: "Rucha Humnabadkar",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
        {
          name: "Donald Chesnut",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
        },
      ],
      tag: "Panel Discussion",
    },
    {
      time: "4:30 PM",
      type: "dual",
      sessions: [
        {
          title: "Building Inclusive Design Teams",
          description: "Creating diverse, equitable, and inclusive design organizations.",
          speaker: {
            name: "Ravinder Singh",
            role: "Co-Founder, Rishihood",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
        },
        {
          title: "Measuring Design Impact",
          description: "Metrics and frameworks for demonstrating design ROI.",
          speaker: {
            name: "Mirjam Wouters",
            role: "Experience Labs Lead, Royal Philips",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
        },
      ],
    },
  ],
  day2: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
    },
    {
      time: "9:00 AM",
      type: "keynote",
      title: "Opening Design Leadership Vision",
      description: "Setting the tone for day two with insights on the future of design-led organizations.",
      speaker: {
        name: "Bapu",
        role: "Design Leader",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
      tag: "Opening Keynote",
    },
    {
      time: "9:50 AM",
      type: "keynote",
      title: "Grand Keynote 01: Design at Enterprise Scale",
      description: "Exploring design leadership in large, complex organizational structures.",
      speaker: {
        name: "Industry Expert",
        role: "Executive Design Lead",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
      },
      tag: "Grand Keynote",
    },
    {
      time: "10:40 AM",
      type: "break",
      title: "Coffee Break",
    },
    {
      time: "11:25 AM",
      type: "keynote",
      title: "Plenary Keynote 01: Building Design Culture",
      description: "Creating and sustaining a strong design culture within organizations.",
      speaker: {
        name: "Suff",
        role: "Culture & Design Strategist",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "12:05 PM",
      type: "keynote",
      title: "Plenary Keynote 02: Design Ethics in AI",
      description: "Responsible design practices in an AI-driven world.",
      speaker: {
        name: "Jose",
        role: "Ethical Design Specialist",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "12:45 PM",
      type: "break",
      title: "Lunch Break",
    },
    {
      time: "2:30 PM",
      type: "panel",
      title: "Panel Discussion 01: Future of Design Leadership",
      description: "Thought leaders share perspectives on emerging trends and challenges in design leadership.",
      panelists: [
        {
          name: "Mohan Krishnaraj",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        {
          name: "Kate Moran",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        {
          name: "Rucha Humnabadkar",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
      ],
      tag: "Panel Discussion",
    },
    {
      time: "3:40 PM",
      type: "keynote",
      title: "Plenary Keynote 03: Global Design Perspectives",
      description: "Cross-cultural insights into design leadership practices worldwide.",
      speaker: {
        name: "Design Leader",
        role: "Global Design Director",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "4:20 PM",
      type: "break",
      title: "Coffee Break & Networking",
    },
    {
      time: "5:20 PM",
      type: "keynote",
      title: "Plenary Keynote 04: The Next Wave of Design",
      description: "What's next in design leadership and innovation.",
      speaker: {
        name: "Rowan",
        role: "Innovation Strategist",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "6:00 PM",
      type: "keynote",
      title: "Grand Keynote 02: Design's Role in Transformation",
      description: "How design drives organizational and social transformation.",
      speaker: {
        name: "Doug",
        role: "Design Transformation Expert",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
      },
      tag: "Grand Keynote",
    },
    {
      time: "6:50 PM",
      type: "break",
      title: "Networking Dinner",
    },
  ],
};

const sessions = scheduleData.day1;

export default function SchedulePreviewPage() {
  const [activeDay, setActiveDay] = React.useState("day1");
  const currentSessions = activeDay === "day1" ? scheduleData.day1 : scheduleData.day2;

  return (
    <main>
      <Nav forceSolid={true} />
      <div className="bg-[#0D0D0D] w-full pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="font-sans text-[11px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.2em] mb-4">
              PREVIEW MODE
            </p>
            <h1 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Leadership Summit 2026
            </h1>
            <p className="font-sans text-base text-white/60">
              September 23-25, 2026 — Leela Bhartiya City, Bengaluru
            </p>
          </div>

          {/* Day tabs */}
          <div className="flex gap-4 mb-12">
            {scheduleData.days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 rounded-lg font-sans text-sm font-medium transition-all ${
                  activeDay === day.id
                    ? "bg-[#E85520] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {day.label}
                <span className="ml-2 text-xs opacity-70">{day.date}</span>
              </button>
            ))}
          </div>

          {/* Schedule grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Time column */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="text-sm font-sans text-white/40 uppercase tracking-wider mb-8">
                Time
              </div>
              <div className="space-y-[7.5rem]">
                {currentSessions.map((session, index) => (
                  <div key={index} className="text-sm font-sans text-white/50">
                    {session.time}
                  </div>
                ))}
              </div>
            </div>

            {/* Main schedule */}
            <div className="lg:col-span-10 space-y-6">
              {currentSessions.map((session, index) => {
                if (session.type === "keynote") {
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={session.speaker.image}
                          alt={session.speaker.name}
                          className="w-16 h-16 rounded-full object-cover shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">
                            {session.title}
                          </h3>
                          <p className="font-sans text-sm text-white/60 mb-3">
                            {session.description}
                          </p>
                          <p className="font-sans text-sm text-white/80">
                            {session.speaker.name}
                            <span className="text-white/40 ml-2">
                              {session.speaker.role}
                            </span>
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-[#E85520]/20 text-[#E85520] text-xs font-sans font-medium rounded-full">
                          {session.tag}
                        </span>
                      </div>
                      <div className="lg:hidden mt-3 text-xs text-white/40">
                        {session.time}
                      </div>
                    </div>
                  );
                }

                if (session.type === "break") {
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#E85520]/10 to-transparent border border-white/10 rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-[#E85520]/20 rounded-lg flex items-center justify-center">
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
                      </div>
                      <div>
                        <p className="font-sans text-base text-white font-medium">
                          {session.title}
                        </p>
                        <p className="font-sans text-xs text-white/40 lg:hidden">
                          {session.time}
                        </p>
                      </div>
                    </div>
                  );
                }

                if (session.type === "panel") {
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">
                            {session.title}
                          </h3>
                          <p className="font-sans text-sm text-white/60">
                            {session.description}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-sans font-medium rounded-full shrink-0 ml-4">
                          {session.tag}
                        </span>
                      </div>
                      <div className="flex gap-3 mt-6">
                        {session.panelists.map((panelist, pIndex) => (
                          <img
                            key={pIndex}
                            src={panelist.image}
                            alt={panelist.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white/10"
                            title={panelist.name}
                          />
                        ))}
                        {session.panelists.length < 5 && (
                          <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                            <span className="text-white/30 text-xs">+{5 - session.panelists.length}</span>
                          </div>
                        )}
                      </div>
                      <div className="lg:hidden mt-3 text-xs text-white/40">
                        {session.time}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
