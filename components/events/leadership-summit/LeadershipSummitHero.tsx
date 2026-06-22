"use client";

export default function LeadershipSummitHero({ activeTab, setActiveTab, hideTabBar = false }: { activeTab: string; setActiveTab: (tab: string) => void; hideTabBar?: boolean }) {
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
          backgroundImage: "url('/images/leela-bhartiya-city.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Left-to-right dark scrim for text legibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Bottom-to-top dark gradient (90% to 20%) */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* Optional brand-orange multiply tint (~12%) */}
      <div className="absolute inset-0 z-1 mix-blend-multiply opacity-[0.12] bg-[#E85520]" />

      {/* Hero content container - adds padding at top for nav clearance */}
      <div className="relative z-10 min-h-screen flex flex-col pt-24 md:pt-32 pb-0">
        {/* Main content - positioned to fill space */}
        <div className="flex-1 flex flex-col justify-center pl-6 md:pl-20 lg:pl-32 pr-6 pb-24">
          <div className="max-w-2xl">
            {/* Eyebrow kicker */}
            <div className="animate-float-up opacity-0 mb-8">
              <p className="font-sans text-[11px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] break-words">
                DESIGN LEADERSHIP WEEK 2026 · TRACK 01
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
              Leadership
              <br />
              Summit 2026
            </h1>

            {/* Subcopy */}
            <p
              className="animate-float-up opacity-0 font-sans text-base md:text-lg text-white/85 leading-relaxed mb-8 md:mb-10 max-w-full md:max-w-[46ch]"
              style={{ animationDelay: "0.2s" }}
            >
              For senior design professionals, heads of design, CXOs, CDOs, and strategic decision-makers shaping design inside their organisations.
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
              className="animate-float-up opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:border-none"
              style={{
                animationDelay: "0.4s",
              }}
            >
              {/* WHEN */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col md:border-r md:border-white/15 md:pr-12">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    WHEN
                  </p>
                  <p className="font-sans text-base md:text-lg text-white font-medium">
                    <span className="whitespace-nowrap">23–25 September</span><br />2026
                  </p>
                </div>
              </div>

              {/* WHERE */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col md:border-r md:border-white/15 md:pr-12">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    WHERE
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Leela+Bhartiya+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2.5 font-sans text-base md:text-lg text-white font-medium cursor-pointer hover:text-[#E85520] transition-colors duration-200"
                  >
                    <img
                      src="/venue-location-icon.png"
                      alt=""
                      width="18"
                      height="18"
                      className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity mt-0.5"
                      aria-hidden="true"
                    />
                    <span>Leela Bhartiya City, Bengaluru, India</span>
                  </a>
                </div>
              </div>

              {/* WHO */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    WHO
                  </p>
                  <p className="font-sans text-base md:text-lg text-white font-medium">
                    Design Leaders & CXOs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segmented sub-nav at bottom of hero — hidden when schedule is active (sticky version takes over) */}
        {!hideTabBar && (
          <div className="w-full flex border-t border-white/10 bg-black/40 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "overview"
                ? "text-white border-[#E85520]"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Speakers
          </button>
          <button
            onClick={handleScheduleClick}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "schedule"
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
