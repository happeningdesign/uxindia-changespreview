"use client";

import React from "react";
import { leadershipScheduleData } from "@/data/leadership-schedule";

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

const PersonIcon = ({ size = 28, opacity = "0.4" }: { size?: number; opacity?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={`rgba(255,255,255,${opacity})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

export default function LeadershipSchedule() {
  const scheduleData = leadershipScheduleData;
  const [activeDay, setActiveDay] = React.useState("day1");
  const currentSessions =
    activeDay === "day1" ? scheduleData.day1 :
      activeDay === "day2" ? scheduleData.day2 :
        scheduleData.day3;
  const activeDayIndex = scheduleData.days.findIndex((d) => d.id === activeDay);
  const activeDayLabel = scheduleData.days[activeDayIndex]?.label ?? "";
  const prevDay = activeDayIndex > 0 ? scheduleData.days[activeDayIndex - 1] : null;
  const nextDay = activeDayIndex < scheduleData.days.length - 1 ? scheduleData.days[activeDayIndex + 1] : null;

  return (
    <section className="bg-[#0D0D0D] w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

        {/* Section label */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-2" />
          <div className="lg:col-span-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#E85520] mb-3">Schedule</p>
            <h2 className="font-leadership text-3xl md:text-4xl text-white">Leadership Summit 2026</h2>
          </div>
        </div>

        {/* Day tabs */}
        <div className="mb-10 -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0">
          <div className="lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-2" />
            <div className="lg:col-span-10">
              <div className="grid grid-cols-3 gap-2 md:flex md:gap-3">
                {scheduleData.days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`px-3 md:px-5 py-3 rounded-lg font-sans text-xs md:text-sm font-semibold transition-all cursor-pointer border ${activeDay === day.id
                        ? "border-2 border-[#E85520] text-white bg-transparent"
                        : "border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
                      }`}
                  >
                    <span className="block truncate">{day.label}</span>
                    <span className={`text-[10px] md:text-xs mt-0.5 block ${activeDay === day.id ? "text-[#E85520]" : "text-white/50"}`}>{day.date}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Session rows */}
        <div className="space-y-6">
          {currentSessions.map((session, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Time column */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="text-sm font-sans text-white/50 sticky top-24">
                  {session.time}{session.endTime && session.type === "workshops" ? ` – ${session.endTime}` : ""}
                </div>
              </div>

              {/* Card */}
              <div className="lg:col-span-10">

                {/* KEYNOTE */}
                {session.type === "keynote" && (
                  <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                    <div className="flex items-center justify-between mb-4 lg:hidden">
                      <span className="px-3 py-1 bg-[#E85520]/20 text-[#E85520] text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">{session.tag}</span>
                      <p className="text-xs text-white/40">{session.time}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center">
                        <PersonIcon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">{session.tag}</h3>
                        <p className="font-sans text-sm text-white/60 mb-1">{session.description || "Announcing Soon"}</p>
                        <p className="font-sans text-sm text-white/80 font-medium">{session.speaker?.name || "TBA"}</p>
                        {session.speaker?.role && <p className="font-sans text-xs text-white/70 mt-0.5">{session.speaker.role}</p>}
                      </div>
                      <span className="hidden lg:inline-block px-3 py-1 bg-[#E85520]/20 text-[#E85520] text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">{session.tag}</span>
                    </div>
                  </div>
                )}

                {/* CLOSING */}
                {session.type === "closing" && (
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[180px] flex flex-col justify-end">
                    <img src="/images/closing-ceremony.webp" alt="Closing Ceremony" className="absolute inset-0 w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                    <div className="relative z-10 p-6 flex items-end justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#E85520]/80 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" /></svg>
                        </div>
                        <div>
                          <p className="font-leadership text-xl text-white">{session.title}</p>
                          <p className="font-sans text-xs text-white/70 mt-0.5">Closing remarks and key takeaways from the conference</p>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-white/60 lg:hidden shrink-0">{session.time}</p>
                    </div>
                  </div>
                )}

                {/* CONTINUATION */}
                {session.type === "continuation" && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E85520] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <p className="font-leadership text-lg text-white">{session.title}</p>
                  </div>
                )}

                {/* DAY END */}
                {session.type === "dayend" && (
                  <div className="border border-dashed border-white/15 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-center">
                    <span className="h-px w-8 bg-white/15" />
                    <p className="font-sans text-sm text-white/50">{session.title}</p>
                    <span className="h-px w-8 bg-white/15" />
                  </div>
                )}

                {/* BREAK */}
                {session.type === "break" && (() => {
                  const isLunch = session.title.toLowerCase().includes("lunch");
                  const isDinner = session.title.toLowerCase().includes("dinner");
                  const isRegistration = session.title.toLowerCase().includes("registration");
                  const start = parseTimeToMinutes(session.time);
                  const nextSession = currentSessions[index + 1];
                  const nextStart = nextSession ? parseTimeToMinutes(nextSession.time) : null;
                  const durationLabel = !isRegistration && start !== null && nextStart !== null ? formatDuration(nextStart - start) : null;

                  if (isDinner) return (
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[180px] flex flex-col justify-end">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67db8d7961e189ecb4d2e27c_planning-corporate-dinner-2-562ArrQaZrqltVu0iW3joDkxpdYFEV.jpg" alt="Networking Dinner" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                      <div className="relative z-10 p-6 flex items-end justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#E85520]/80 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                            <img src="/icons/lunch.svg" alt="dinner" className="w-6 h-6" style={{ filter: "brightness(0) invert(1)" }} />
                          </div>
                          <div>
                            <p className="font-leadership text-xl text-white">{session.title}</p>
                            <p className="font-sans text-xs text-white/90 mt-0.5">Join us for an evening of curated conversations and connections</p>
                          </div>
                        </div>
                        <p className="font-sans text-xs text-white/80 lg:hidden shrink-0">{session.time}</p>
                      </div>
                    </div>
                  );

                  return (
                    <div className="bg-gradient-to-r from-[#E85520]/10 to-transparent border border-white/10 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#E85520]/20 rounded-lg flex items-center justify-center shrink-0">
                        {isLunch ? (
                          <img src="/icons/lunch.svg" alt="lunch" className="w-6 h-6" style={{ filter: "invert(44%) sepia(79%) saturate(1000%) hue-rotate(349deg) brightness(95%)" }} />
                        ) : isRegistration ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85520" strokeWidth="2"><path d="M2 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z" /><path d="M9 5v14" /></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85520" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" /></svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <p className="font-sans text-base text-white font-medium">{session.title}</p>
                          {durationLabel && <span className="px-2.5 py-0.5 bg-white/10 text-white/70 text-xs font-sans font-medium rounded-full">{durationLabel}</span>}
                        </div>
                        <p className="font-sans text-xs text-white/40 lg:hidden">{session.time}</p>
                      </div>
                    </div>
                  );
                })()}

                {/* PANEL */}
                {session.type === "panel" && (
                  <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="lg:hidden px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">{session.tag}</span>
                      <p className="lg:hidden text-xs text-white/40">{session.time}</p>
                    </div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">{session.tag}</h3>
                        <p className="font-sans text-sm text-white/60">{session.description || "Announcing Soon"}</p>
                      </div>
                      <span className="hidden lg:inline-block px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20 shrink-0 ml-4">{session.tag}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                      {session.panelists?.map((panelist, pIndex) => (
                        <div key={pIndex} className={`flex ${panelist.role ? 'items-start' : 'items-center'} gap-3`}>
                          <div className="w-12 h-12 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center">
                            <PersonIcon size={22} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-sans text-sm text-white font-medium leading-tight">{panelist.name || "TBA"}</p>
                            {panelist.role && <p className="font-sans text-xs text-white/70 mt-0.5 line-clamp-2">{panelist.role}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WORKSHOPS */}
                {session.type === "workshops" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {session.workshops.map((workshop, wIndex) => (
                      <div key={wIndex} className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">{workshop.room}</p>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">Workshop</span>
                            <p className="lg:hidden text-xs text-white/40">{session.time}</p>
                          </div>
                        </div>
                        <h3 className="font-leadership text-lg md:text-xl text-white mb-3">{workshop.title}</h3>
                        <div className={`flex ${workshop.speaker?.role ? 'items-start' : 'items-center'} gap-3 mb-4`}>
                          <div className="w-10 h-10 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center">
                            <PersonIcon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-sans text-sm text-white/80 font-medium">{workshop.speaker?.name || "TBA"}</p>
                            {workshop.speaker?.role && <p className="font-sans text-xs text-white/60 mt-0.5">{workshop.speaker.role}</p>}
                          </div>
                        </div>
                        <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">{workshop.description || "Announcing Soon"}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* PARALLEL SESSIONS (2 rooms) */}
                {session.type === "sessions" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {session.sessions.map((sess, sIndex) => (
                      <div key={sIndex} className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">{sess.room}</p>
                          <div className="flex items-center gap-2">
                            {sess.tag && <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">{sess.tag}</span>}
                            <p className="lg:hidden text-xs text-white/40">{session.time}</p>
                          </div>
                        </div>
                        <h3 className="font-leadership text-lg md:text-xl text-white mb-3">{sess.title || sess.tag || "Session"}</h3>
                        {sess.panelists ? (
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {sess.panelists.map((panelist, pIndex) => (
                              <div key={pIndex} className="flex flex-col">
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="w-8 h-8 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center"><PersonIcon size={14} /></div>
                                  <p className="font-sans text-xs text-white font-medium leading-tight truncate flex-1">{panelist.name || "TBA"}</p>
                                </div>
                                {panelist.role && <p className="font-sans text-[10px] text-white/60 ml-10 line-clamp-1">{panelist.role}</p>}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className={`flex ${sess.speaker?.role ? 'items-start' : 'items-center'} gap-3 mb-4`}>
                            <div className="w-10 h-10 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center"><PersonIcon size={18} /></div>
                            <div className="flex-1 min-w-0">
                              <p className="font-sans text-sm text-white/80 font-medium">{sess.speaker?.name || "TBA"}</p>
                              {sess.speaker?.role && <p className="font-sans text-xs text-white/60 mt-0.5">{sess.speaker.role}</p>}
                            </div>
                          </div>
                        )}
                        <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">{sess.description || "Announcing Soon"}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* DUAL PANELS */}
                {session.type === "dual-panels" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {session.sessions.map((sess, sIndex) => (
                      <div key={sIndex} className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">{sess.room}</p>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">{sess.tag}</span>
                        </div>
                        <h3 className="font-leadership text-lg md:text-xl text-white mb-4">{sess.title || sess.tag}</h3>
                        <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-5">{sess.description || "Announcing Soon"}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {sess.panelists?.map((panelist, pIndex) => (
                            <div key={pIndex} className="flex flex-col">
                              <div className="flex items-center gap-3 mb-1">
                                <div className="w-8 h-8 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center"><PersonIcon size={14} /></div>
                                <p className="font-sans text-xs text-white/80 font-medium truncate flex-1">{panelist.name || "TBA"}</p>
                              </div>
                              {panelist.role && <p className="font-sans text-[9px] text-white/60 ml-11 line-clamp-1">{panelist.role}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRID SESSIONS */}
                {session.type === "grid-sessions" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-rows-2 gap-4">
                      {session.leftSessions.map((sess, sIndex) => (
                        <div key={sIndex} className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all">
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">{sess.room}</p>
                            <div className="flex items-center gap-2">
                              {sess.tag && <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">{sess.tag}</span>}
                              <p className="font-sans text-xs text-white/40">{sess.time}</p>
                            </div>
                          </div>
                          <h3 className="font-leadership text-lg md:text-xl text-white mb-3">{sess.title || sess.tag || "Session"}</h3>
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center"><PersonIcon size={18} /></div>
                            <div className="flex-1 min-w-0">
                              <p className="font-sans text-sm text-white/80 font-medium">{sess.speaker?.name || "TBA"}</p>
                              {sess.speaker?.role && <p className="font-sans text-xs text-white/60 mt-0.5">{sess.speaker.role}</p>}
                            </div>
                          </div>
                          <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">{sess.description || "Announcing Soon"}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">{session.rightSession.room}</p>
                        {session.rightSession.tag && <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20">{session.rightSession.tag}</span>}
                      </div>
                      <h3 className="font-leadership text-lg md:text-xl text-white mb-3">{session.rightSession.title || session.rightSession.tag || "Session"}</h3>
                      <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-4">{session.rightSession.description || "Announcing Soon"}</p>
                      <div className="flex-1">
                        <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-3">VC Investors</p>
                        <div className="space-y-3">
                          {session.rightSession.panelists?.map((panelist, pIndex) => (
                            <div key={pIndex} className={`flex ${panelist.role ? 'items-start' : 'items-center'} gap-3`}>
                              <div className="w-8 h-8 rounded-full shrink-0 border border-white/15 bg-white/10 flex items-center justify-center"><PersonIcon size={14} /></div>
                              <div className="flex-1 min-w-0">
                                <p className="font-sans text-sm text-white/80">{panelist.name || "TBA"}</p>
                                {panelist.role && <p className="font-sans text-xs text-white/60 mt-0.5">{panelist.role}</p>}
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
          ))}

          {/* End of day */}
          {activeDay !== "day2" && !currentSessions.some((s) => s.type === "dayend") && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="hidden lg:block lg:col-span-2">
                <div className="text-sm font-sans text-white/50 sticky top-24">{scheduleData.days[activeDayIndex]?.endTime}</div>
              </div>
              <div className="lg:col-span-10">
                <div className="border border-dashed border-white/15 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-center">
                  <span className="h-px w-8 bg-white/15" />
                  <p className="font-sans text-sm text-white/50">End of {activeDayLabel}</p>
                  <span className="h-px w-8 bg-white/15" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom day navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
          {prevDay ? (
            <button onClick={() => setActiveDay(prevDay.id)} className="group flex items-center gap-3 text-left cursor-pointer max-w-[45%]">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-[11px] text-white/40 uppercase tracking-wider">Previous</span>
                <span className="block font-sans text-sm text-white/80 truncate group-hover:text-white transition-colors">{prevDay.label}</span>
              </span>
            </button>
          ) : <div />}

          {nextDay ? (
            <button onClick={() => setActiveDay(nextDay.id)} className="group flex items-center gap-3 text-right cursor-pointer max-w-[45%] ml-auto">
              <span className="min-w-0">
                <span className="block font-sans text-[11px] text-white/40 uppercase tracking-wider">Next</span>
                <span className="block font-sans text-sm text-white/80 truncate group-hover:text-white transition-colors">{nextDay.label}</span>
              </span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </span>
            </button>
          ) : <div />}
        </div>

      </div>
    </section>
  );
}
