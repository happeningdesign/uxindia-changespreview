"use client";

import React from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

const workshopsData = [
  {
    time: "8:00 AM",
    type: "break",
    title: "Registrations",
  },
  {
    time: "9:00 AM",
    type: "workshops",
    workshops: [
      {
        id: "w01",
        room: "Room 1",
        title: "Workshop 01",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        description: "Explore advanced design techniques and methodologies.",
      },
      {
        id: "w03",
        room: "Room 2",
        title: "Workshop 03",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        description: "Interactive session on design systems and best practices.",
      },
      {
        id: "w05",
        room: "Room 3",
        title: "Workshop 05",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
        },
        description: "Deep dive into user research and design validation.",
      },
    ],
  },
  {
    time: "10:30 AM",
    type: "break",
    title: "Coffee Break",
  },
  {
    time: "11:15 AM",
    type: "workshops",
    workshops: [
      {
        id: "w01-cont",
        room: "Room 1",
        title: "Workshop 01 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        description: "Advanced design techniques continued.",
      },
      {
        id: "w03-cont",
        room: "Room 2",
        title: "Workshop 03 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        description: "Design systems session continued.",
      },
      {
        id: "w05-cont",
        room: "Room 3",
        title: "Workshop 05 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
        },
        description: "User research session continued.",
      },
    ],
  },
  {
    time: "12:15 PM",
    type: "break",
    title: "Lunch",
  },
  {
    time: "1:45 PM",
    type: "workshops",
    workshops: [
      {
        id: "w02",
        room: "Room 1",
        title: "Workshop 02",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
        description: "Leadership and design thinking principles.",
      },
      {
        id: "w04",
        room: "Room 2",
        title: "Workshop 04",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
        },
        description: "Collaborative design and team dynamics.",
      },
      {
        id: "w06",
        room: "Room 3",
        title: "Workshop 06",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
        },
        description: "Design innovation and emerging trends.",
      },
    ],
  },
  {
    time: "3:15 PM",
    type: "break",
    title: "Coffee Break",
  },
  {
    time: "4:00 PM",
    type: "workshops",
    workshops: [
      {
        id: "w02-cont",
        room: "Room 1",
        title: "Workshop 02 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
        description: "Leadership session continued.",
      },
      {
        id: "w04-cont",
        room: "Room 2",
        title: "Workshop 04 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
        },
        description: "Collaborative design session continued.",
      },
      {
        id: "w06-cont",
        room: "Room 3",
        title: "Workshop 06 (Continued)",
        speaker: {
          name: "TBA",
          role: "TBA, UMO Design Foundation",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
        },
        description: "Design innovation session continued.",
      },
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <main>
      <Nav forceSolid={true} />
      <div className="bg-[#0D0D0D] w-full pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="font-sans text-[11px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.2em] mb-4">
              WORKSHOPS
            </p>
            <h1 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Day 1 — September 23, 2026
            </h1>
            <p className="font-sans text-base text-white/60">
              Parallel workshops across 3 rooms — Choose your preferred sessions
            </p>
          </div>

          {/* Schedule */}
          <div className="space-y-6">
            {workshopsData.map((item, index) => {
              if (item.type === "break") {
                const isLunch = item.title.toLowerCase().includes("lunch");
                const isRegistration = item.title.toLowerCase().includes("registration");

                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Time */}
                    <div className="hidden lg:block lg:col-span-2">
                      <div className="text-sm font-sans text-white/50 sticky top-24">
                        {item.time}
                      </div>
                    </div>

                    {/* Break card - full width */}
                    <div className="lg:col-span-10">
                      <div className="bg-gradient-to-r from-[#E85520]/10 to-transparent border border-white/10 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#E85520]/20 rounded-lg flex items-center justify-center">
                          {isLunch ? (
                            <img
                              src="/icons/lunch.svg"
                              alt="lunch"
                              className="w-6 h-6"
                              style={{ filter: "brightness(0) saturate(100%) invert(57%) sepia(71%) saturate(1241%) hue-rotate(7deg)" }}
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
                        <p className="font-sans text-base text-white font-medium">
                          {item.title}
                        </p>
                      </div>
                      <div className="lg:hidden mt-3 text-xs text-white/40">
                        {item.time}
                      </div>
                    </div>
                  </div>
                );
              }

              // Workshops - 3 columns
              if (item.type === "workshops") {
                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Time */}
                    <div className="hidden lg:block lg:col-span-2">
                      <div className="text-sm font-sans text-white/50 sticky top-24">
                        {item.time}
                      </div>
                    </div>

                    {/* 3 workshop cards */}
                    <div className="lg:col-span-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.workshops.map((workshop) => (
                          <div
                            key={workshop.id}
                            className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-[#E85520]/30 transition-all"
                          >
                            <div className="mb-4">
                              <p className="font-sans text-[10px] text-[#E85520] font-semibold uppercase tracking-wider mb-2">
                                {workshop.room}
                              </p>
                              <h3 className="font-leadership text-lg text-white mb-2">
                                {workshop.title}
                              </h3>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                              <img
                                src={workshop.speaker.image}
                                alt={workshop.speaker.name}
                                className="w-10 h-10 rounded-full object-cover shrink-0"
                              />
                              <div>
                                <p className="font-sans text-xs text-white font-medium">
                                  {workshop.speaker.name}
                                </p>
                                <p className="font-sans text-[10px] text-white/40">
                                  {workshop.speaker.role}
                                </p>
                              </div>
                            </div>

                            <p className="font-sans text-xs text-white/50 leading-relaxed">
                              {workshop.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:hidden mt-3 text-xs text-white/40">
                        {item.time}
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
