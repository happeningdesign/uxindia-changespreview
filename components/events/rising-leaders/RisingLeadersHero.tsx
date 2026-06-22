"use client";

export default function RisingLeadersHero({ activeTab, setActiveTab, hideTabBar = false }: { activeTab: string; setActiveTab: (tab: string) => void; hideTabBar?: boolean }) {
  const handleScheduleClick = () => {
    setActiveTab("schedule");
    // Scroll to schedule section after state update
    setTimeout(() => {
      const scheduleSection = document.getElementById("schedule-section");
      if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="relative w-full bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('images/rising-leaders-venue.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Left-to-right dark scrim for text legibility */}
      <div className="absolute inset-0 z-1 bg-black/40 md:bg-black/20 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

      {/* Bottom-to-top dark gradient (90% to 20%) */}
      <div className="absolute inset-0 z-1 bg-black/55 md:bg-black/20 md:bg-gradient-to-b md:from-transparent md:via-transparent md:to-black/90" />

      {/* Optional brand-orange multiply tint (~12%) */}
      <div className="absolute inset-0 z-1 mix-blend-multiply opacity-[0.12] bg-[#E85520]" />

      {/* Hero content container - adds padding at top for nav clearance */}
      <div className="relative z-10 min-h-screen flex flex-col pt-24 md:pt-32 pb-0">
        {/* Main content - positioned to fill space */}
        <div className="flex-1 flex flex-col justify-center pl-6 md:pl-20 lg:pl-32 pr-6 pb-24">
          <div className="max-w-2xl">
            {/* Eyebrow kicker */}
            <div className="animate-float-up opacity-0 mb-8">
              <p className="font-sans text-[11px] md:text-base text-white font-semibold uppercase tracking-[0.15em] break-words">
                DESIGN LEADERSHIP WEEK 2026 · TRACK 02
              </p>
            </div>

            {/* H1 Headline */}
            <h1
              className="animate-float-up opacity-0 font-leadership text-white leading-[1.05] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 7rem)",
                animationDelay: "0.1s",
              }}
            >
              Rising Leaders
              <br />
              Forum 2026
            </h1>

            {/* Subcopy */}
            <p
              className="animate-float-up opacity-0 font-sans text-base md:text-lg text-white leading-relaxed mb-8 md:mb-10 max-w-full md:max-w-[46ch]"
              style={{ animationDelay: "0.2s" }}
            >
              For emerging design leaders, mid-career professionals, Students and leaders in transition ready to scale their impact.
            </p>

            {/* Thin hairline divider */}
            <div
              className="animate-float-up opacity-0 mb-8 md:mb-10"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <div className="h-px w-full bg-white/25" />
            </div>

            {/* Meta row - WHEN / WHERE / WHO */}
            <div
              className="animate-float-up opacity-0 flex flex-col md:flex-row gap-8 md:gap-0"
              style={{
                animationDelay: "0.4s",
              }}
            >
              {/* WHEN */}
              <div className="md:border-r md:border-white/15 md:pr-8 md:mr-8">
                <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                  WHEN
                </p>
                <p className="font-sans text-base md:text-lg text-white font-medium">
                  <span className="whitespace-nowrap">26–27 September</span><br />2026
                </p>
              </div>

              {/* WHERE */}
              <div className="md:border-r md:border-white/15 md:pr-8 md:mr-8 md:max-w-[280px]">
                <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                  WHERE
                </p>
                <a
                  href="https://maps.app.goo.gl/srishti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2.5 font-sans text-base md:text-lg text-white font-medium leading-snug cursor-pointer hover:text-[#E85520] transition-colors duration-200"
                >
                  <img
                    src="/venue-location-icon.png"
                    alt=""
                    width="18"
                    height="18"
                    className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Srishti Manipal Institute<br /><span className="text-sm text-white/70">Bengaluru, India</span></span>
                </a>
              </div>

              {/* WHO */}
              <div>
                <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                  WHO
                </p>
                <p className="font-sans text-base md:text-lg text-white font-medium">
                  Emerging Leaders & Students
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Segmented sub-nav at bottom of hero — hidden when schedule is active (sticky version takes over) */}
        {!hideTabBar && (
          <div className="w-full flex border-t border-white/10 bg-black/40 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-[3px] cursor-pointer ${activeTab === "overview"
                ? "text-white border-[#E85520]"
                : "text-white/40 border-transparent hover:text-white/60"
              }`}
          >
            Speakers
          </button>
          <button
            onClick={handleScheduleClick}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-[3px] cursor-pointer ${activeTab === "schedule"
                ? "text-white border-[#E85520]"
                : "text-white/40 border-transparent hover:text-white/60"
              }`}
          >
            Schedule
          </button>
          </div>
        )}
      </div>
    </section>
  );
}
