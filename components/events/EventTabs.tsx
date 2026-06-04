"use client";

import { useState } from "react";

interface EventTabsProps {
  eventType: "leadership" | "rising";
}

export default function EventTabs({ eventType }: EventTabsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule">(
    "overview"
  );

  const isLeadership = eventType === "leadership";

  return (
    <section className="bg-[#0D0D0D]">
      {/* Tab navigation - full width */}
      <div className="flex w-full">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 py-5 font-sans text-base font-medium text-center transition-all duration-300 border-b-2 ${
            activeTab === "overview"
              ? "bg-[#1a1a1a] text-white border-[#E85520]"
              : "bg-[#0D0D0D] text-white/40 border-transparent hover:text-white/70 hover:bg-[#151515]"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex-1 py-5 font-sans text-base font-medium text-center transition-all duration-300 border-b-2 ${
            activeTab === "schedule"
              ? "bg-[#1a1a1a] text-white border-[#E85520]"
              : "bg-[#0D0D0D] text-white/40 border-transparent hover:text-white/70 hover:bg-[#151515]"
          }`}
        >
          Schedule
        </button>
      </div>

      {/* Tab content */}
      <div className="max-w-7xl mx-auto px-6">
        {activeTab === "overview" && (
          <div className="py-12">
            <div className="space-y-8">
              {/* Event cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {isLeadership ? (
                  <>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                          Keynotes
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        23 September
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        Opening keynotes and sessions
                      </p>
                    </div>

                    <div className="bg-[#1a4d6d] rounded-2xl p-6 border border-white/10 hover:border-[#1E90FF]/50 transition-colors">
                      <div className="bg-[#1E90FF] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                          Grand Conf Day 1
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        24 September
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        Roundtables and workshops
                      </p>
                    </div>

                    <div className="bg-[#4d1a2d] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                          Conf Day 2
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        25 September
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        Closing sessions and networking
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                          Day 1
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        26 September
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        Workshops and mentorship sessions
                      </p>
                    </div>

                    <div className="bg-[#1a4d6d] rounded-2xl p-6 border border-white/10 hover:border-[#1E90FF]/50 transition-colors">
                      <div className="bg-[#1E90FF] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                          Day 2
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        27 September
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        Closing panel and networking
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="py-12">
            <div className="text-center text-white/50">
              <p className="font-sans text-base">Schedule coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
