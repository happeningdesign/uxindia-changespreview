"use client";

import React from "react";
import { risingScheduleData } from "@/data/rising-schedule";

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

const PersonIconDark = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

export default function RisingSchedule() {
  const scheduleData = risingScheduleData;
  const [activeDay, setActiveDay] = React.useState("day1");
  const currentSessions = activeDay === "day1" ? scheduleData.day1 : scheduleData.day2;
  const activeDayIndex = scheduleData.days.findIndex((d) => d.id === activeDay);
  const activeDayLabel = scheduleData.days[activeDayIndex]?.label ?? "";
  const prevDay = activeDayIndex > 0 ? scheduleData.days[activeDayIndex - 1] : null;
  const nextDay = activeDayIndex < scheduleData.days.length - 1 ? scheduleData.days[activeDayIndex + 1] : null;

  return (
    <section className="bg-[#F5F0E8] w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

        {/* Section label */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-2" />
          <div className="lg:col-span-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#E85520] mb-3">Schedule</p>
            <h2 className="font-leadership text-3xl md:text-4xl text-[#0D0D0D]">Rising Leaders Forum 2026</h2>
          </div>
        </div>

        {/* Day tabs */}
        <div className="mb-10 -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0">
          <div className="lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-2" />
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 gap-2 md:flex md:gap-3">
                {scheduleData.days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`px-3 md:px-5 py-3 rounded-lg font-sans text-xs md:text-sm font-semibold transition-all border cursor-pointer ${
                      activeDay === day.id
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

        {/* Session rows */}
        <div className="space-y-6">
          {currentSessions.map((session, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Time column */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="text-sm font-sans text-[#0D0D0D]/50 sticky top-24">
                  <p>{session.time}{session.endTime && session.type === "parallel-workshops" ? ` – ${session.endTime}` : ""}</p>
                </div>
              </div>

              {/* Card */}
              <div className="lg:col-span-10">

                {/* KEYNOTE */}
                {session.type === "keynote" && (
                  <div className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-4 lg:hidden">
                      <span className="px-3 py-1 bg-[#1D5078] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">{session.tag}</span>
                      <p className="text-xs text-[#0D0D0D]/40">{session.time}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                        <PersonIconDark size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-leadership text-xl md:text-2xl text-[#0D0D0D] mb-2">{session.tag}</h3>
                        <p className="font-sans text-sm text-[#0D0D0D]/60 mb-1">Announcing Soon</p>
                        <p className="font-sans text-sm text-[#0D0D0D]/80 font-medium">TBA</p>
                      </div>
                      <span className="hidden lg:inline-block px-3 py-1 bg-[#1D5078] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">{session.tag}</span>
                    </div>
                  </div>
                )}

                {/* CONTINUATION */}
                {session.type === "continuation" && (
                  <div className="bg-white border border-[#0D0D0D]/10 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                    <svg className="w-6 h-6 text-[#E85520] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <p className="font-sans text-base text-[#0D0D0D] font-medium">{session.title}</p>
                  </div>
                )}

                {/* BREAK */}
                {session.type === "break" && (() => {
                  const isLunch = session.title.toLowerCase().includes("lunch") || session.title.toLowerCase().includes("tea");
                  const isRegistration = session.title.toLowerCase().includes("registration");
                  const start = parseTimeToMinutes(session.time);
                  const nextSession = currentSessions[index + 1];
                  const nextStart = nextSession ? parseTimeToMinutes(nextSession.time) : null;
                  const durationLabel = !isRegistration && start !== null && nextStart !== null ? formatDuration(nextStart - start) : null;

                  return (
                    <div className="bg-[#E85520]/10 border border-[#0D0D0D]/10 rounded-xl p-4 flex items-center gap-4">
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
                          <p className="font-sans text-base text-[#0D0D0D] font-medium">{session.title}</p>
                          {durationLabel && <span className="px-2.5 py-0.5 bg-[#0D0D0D]/10 text-[#0D0D0D]/70 text-xs font-sans font-medium rounded-full">{durationLabel}</span>}
                        </div>
                        {isRegistration && <p className="font-sans text-[11px] text-[#0D0D0D]/60 mt-1">Student attendees must show valid student ID</p>}
                        <p className="font-sans text-xs text-[#0D0D0D]/40 lg:hidden">{session.time}</p>
                      </div>
                    </div>
                  );
                })()}

                {/* PANEL */}
                {session.type === "panel" && (
                  <div className="bg-white border border-[#0D0D0D]/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="lg:hidden px-3 py-1 bg-[#1A7A6E] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">{session.tag}</span>
                      <p className="lg:hidden text-xs text-[#0D0D0D]/40">{session.time}</p>
                    </div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-leadership text-xl md:text-2xl text-[#0D0D0D] mb-2">{session.tag}</h3>
                        <p className="font-sans text-sm text-[#0D0D0D]/60">Announcing Soon</p>
                      </div>
                      <span className="hidden lg:inline-block px-3 py-1 bg-[#1A7A6E] text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider shrink-0 ml-4">{session.tag}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                      {session.panelists.map((panelist, pIndex) => (
                        <div key={pIndex} className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full shrink-0 border border-[#0D0D0D]/20 bg-[#0D0D0D]/5 flex items-center justify-center">
                            <PersonIconDark size={22} />
                          </div>
                          <p className="font-sans text-sm text-[#0D0D0D] font-medium leading-tight">TBA</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PARALLEL WORKSHOPS */}
                {session.type === "parallel-workshops" && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#0D0D0D]/40 lg:hidden">{session.time}{session.endTime ? ` – ${session.endTime}` : ""}</p>
                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible scrollbar-hide">
                      {session.workshops.map((workshop, wIndex) => (
                        <div key={wIndex} className="group/ws flex-shrink-0 w-64 lg:w-auto bg-white border border-[#0D0D0D]/10 rounded-2xl p-4 hover:border-[#E85520]/30 transition-all shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider" style={{ backgroundColor: roomColors[workshop.room] || "#1D5078" }}>
                              {workshop.room}
                            </span>
                            <span className="px-2 py-0.5 bg-[#1A7A6E]/10 text-[#1A7A6E] text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider">Workshop</span>
                          </div>
                          <h4 className="font-leadership text-base text-[#0D0D0D] mb-2 line-clamp-2 group-hover/ws:line-clamp-none transition-all">
                            Workshop Leaders
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                              <PersonIconDark size={14} />
                            </div>
                            <p className="font-sans text-xs text-[#0D0D0D]/80 font-medium">TBA</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="lg:hidden text-xs text-[#0D0D0D]/40 text-center">Swipe to see all workshops →</p>
                  </div>
                )}

                {/* PARALLEL SESSIONS */}
                {session.type === "parallel-sessions" && (
                  <div className="space-y-4">
                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible scrollbar-hide">
                      {session.sessions.map((sess, sIndex) => (
                        <div key={sIndex} className="flex-shrink-0 w-72 lg:w-auto bg-white border border-[#0D0D0D]/10 rounded-2xl p-5 hover:border-[#E85520]/30 transition-all shadow-sm">
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2 py-0.5 text-white text-[10px] font-sans font-semibold rounded-full uppercase tracking-wider shrink-0" style={{ backgroundColor: roomColors[sess.room] || "#1D5078" }}>
                              {sess.room}
                            </span>
                            {sess.tag && <span className="px-2.5 py-0.5 rounded-full bg-[#E85520]/15 text-[#E85520] font-sans text-[10px] font-semibold uppercase tracking-wider border border-[#E85520]/20 shrink-0">{sess.tag}</span>}
                          </div>
                          <h4 className="font-leadership text-lg text-[#0D0D0D] mb-2">{sess.tag || "Session"}</h4>
                          <p className="font-sans text-xs text-[#0D0D0D]/60 mb-3 line-clamp-2">Announcing Soon</p>
                          {sess.type === "panel" && sess.panelists && (
                            <div className="flex gap-2 mt-3">
                              {sess.panelists.map((panelist, pIndex) => (
                                <div key={pIndex} className="w-8 h-8 rounded-full border border-[#0D0D0D]/10 bg-[#0D0D0D]/5 flex items-center justify-center shrink-0" title="TBA">
                                  <PersonIconDark size={14} />
                                </div>
                              ))}
                            </div>
                          )}
                          {sess.type === "spark" && sess.speaker && (
                            <div className="flex items-center gap-2 mt-3">
                              <div className="w-8 h-8 rounded-full shrink-0 bg-[#0D0D0D]/5 border border-[#0D0D0D]/15 flex items-center justify-center">
                                <PersonIconDark size={14} />
                              </div>
                              <p className="font-sans text-xs text-[#0D0D0D]/80 font-medium">TBA</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="lg:hidden text-xs text-[#0D0D0D]/40 text-center">Swipe to see all sessions →</p>
                  </div>
                )}

              </div>
            </div>
          ))}

          {/* End of day */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="hidden lg:block lg:col-span-2">
              <div className="text-sm font-sans text-[#0D0D0D]/50 sticky top-24">{scheduleData.days[activeDayIndex]?.endTime}</div>
            </div>
            <div className="lg:col-span-10">
              <div className="border border-dashed border-[#0D0D0D]/15 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-center">
                <span className="h-px w-8 bg-[#0D0D0D]/15" />
                <p className="font-sans text-sm text-[#0D0D0D]/50">End of {activeDayLabel}</p>
                <span className="h-px w-8 bg-[#0D0D0D]/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom day navigation */}
        <div className="mt-12 pt-8 border-t border-[#0D0D0D]/10 flex items-center justify-between gap-4">
          {prevDay ? (
            <button onClick={() => setActiveDay(prevDay.id)} className="group flex items-center gap-3 text-left cursor-pointer max-w-[45%]">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-[11px] text-[#0D0D0D]/40 uppercase tracking-wider">Previous</span>
                <span className="block font-sans text-sm text-[#0D0D0D]/80 truncate group-hover:text-[#0D0D0D] transition-colors">{prevDay.label}</span>
              </span>
            </button>
          ) : <div />}

          {nextDay ? (
            <button onClick={() => setActiveDay(nextDay.id)} className="group flex items-center gap-3 text-right cursor-pointer max-w-[45%] ml-auto">
              <span className="min-w-0">
                <span className="block font-sans text-[11px] text-[#0D0D0D]/40 uppercase tracking-wider">Next</span>
                <span className="block font-sans text-sm text-[#0D0D0D]/80 truncate group-hover:text-[#0D0D0D] transition-colors">{nextDay.label}</span>
              </span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </span>
            </button>
          ) : <div />}
        </div>

      </div>
    </section>
  );
}
