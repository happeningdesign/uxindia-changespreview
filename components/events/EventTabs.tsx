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
    <section className="bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-0">
        {/* Tab navigation */}
        <div className="flex gap-0">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-6 font-leadership font-semibold text-center transition-all duration-300 ${
              activeTab === "overview"
                ? "bg-[#E85520] text-white"
                : "bg-[#1a1a1a] text-white/50 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex-1 py-6 font-leadership font-semibold text-center transition-all duration-300 ${
              activeTab === "schedule"
                ? "bg-[#E85520] text-white"
                : "bg-[#1a1a1a] text-white/50 hover:text-white"
            }`}
          >
            Schedule
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "overview" && (
          <div className="py-12">
            <div className="space-y-8">
              {/* Event cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {isLeadership ? (
                  <>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-leadership text-xs font-semibold text-white uppercase tracking-widest">
                          Keynotes
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        23 September
                      </h3>
                      <p className="font-leadership text-sm text-white/60">
                        Opening keynotes and sessions
                      </p>
                    </div>

                    <div className="bg-[#1a4d6d] rounded-2xl p-6 border border-white/10 hover:border-[#1E90FF]/50 transition-colors">
                      <div className="bg-[#1E90FF] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-leadership text-xs font-semibold text-white uppercase tracking-widest">
                          Grand Conf Day 1
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        24 September
                      </h3>
                      <p className="font-leadership text-sm text-white/60">
                        Roundtables and workshops
                      </p>
                    </div>

                    <div className="bg-[#4d1a2d] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-leadership text-xs font-semibold text-white uppercase tracking-widest">
                          Conf Day 2
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        25 September
                      </h3>
                      <p className="font-leadership text-sm text-white/60">
                        Closing sessions and networking
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#E85520]/50 transition-colors">
                      <div className="bg-[#E85520] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-leadership text-xs font-semibold text-white uppercase tracking-widest">
                          Day 1
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        26 September
                      </h3>
                      <p className="font-leadership text-sm text-white/60">
                        Workshops and mentorship sessions
                      </p>
                    </div>

                    <div className="bg-[#1a4d6d] rounded-2xl p-6 border border-white/10 hover:border-[#1E90FF]/50 transition-colors">
                      <div className="bg-[#1E90FF] rounded-full w-fit px-4 py-2 mb-4">
                        <p className="font-leadership text-xs font-semibold text-white uppercase tracking-widest">
                          Day 2
                        </p>
                      </div>
                      <h3 className="font-leadership font-semibold text-white mb-2">
                        27 September
                      </h3>
                      <p className="font-leadership text-sm text-white/60">
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
              <p className="font-leadership text-base">Schedule coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
