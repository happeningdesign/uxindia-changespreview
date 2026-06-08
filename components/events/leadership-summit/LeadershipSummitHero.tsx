"use client";

export default function LeadershipSummitHero({ activeTab, setActiveTab }) {
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
        <div className="flex-1 flex flex-col justify-end pl-6 md:pl-20 lg:pl-32 pr-6 pb-24">
          <div className="max-w-2xl">
            {/* Eyebrow kicker */}
            <div className="animate-float-up opacity-0 mb-8">
              <p className="font-sans text-[11px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.2em] letter-spacing">
                DESIGN LEADERSHIP WEEK 2026 · TRACK 01
              </p>
            </div>

            {/* H1 Headline */}
            <h1
              className="animate-float-up opacity-0 font-leadership text-white leading-[1.05] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                animationDelay: "0.1s",
              }}
            >
              Leadership
              <br />
              Summit 2026
            </h1>

            {/* Subcopy */}
            <p
              className="animate-float-up opacity-0 font-sans text-base md:text-lg text-white/85 leading-relaxed mb-8 md:mb-10"
              style={{
                maxWidth: "46ch",
                animationDelay: "0.2s",
              }}
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

            {/* Meta row - DATE / VENUE / LOCATION */}
            <div
              className="animate-float-up opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:border-none"
              style={{
                animationDelay: "0.4s",
              }}
            >
              {/* DATE */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col md:border-r md:border-white/15 md:pr-12">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    DATE
                  </p>
                  <p className="font-sans text-base md:text-lg text-white font-medium">
                    <span className="whitespace-nowrap">23–25 September</span><br />2026
                  </p>
                </div>
              </div>

              {/* VENUE */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col md:border-r md:border-white/15 md:pr-12">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    VENUE
                  </p>
                  <a
                    href="https://maps.app.goo.gl/GefGLLqYJ4ECABMcA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-sans text-base md:text-lg text-white font-medium cursor-pointer hover:text-[#E85520] transition-colors duration-200"
                  >
                    Leela Bhartiya City
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21s-7-6.4-7-11a7 7 0 1 1 14 0c0 4.6-7 11-7 11z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-6 md:gap-0 md:flex-col">
                <div className="md:w-full">
                  <p className="font-sans text-[10px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.15em] mb-2">
                    LOCATION
                  </p>
                  <p className="font-sans text-base md:text-lg text-white font-medium">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky segmented sub-nav at bottom - full width */}
        <div className="w-full flex border-t border-white/10 bg-black/40 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-4 px-6 font-sans text-sm md:text-base font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "overview"
                ? "text-white border-[#E85520]"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Speakers
          </button>
          <button
            onClick={handleScheduleClick}
            className={`flex-1 py-4 px-6 font-sans text-sm md:text-base font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "schedule"
                ? "text-white border-[#E85520]"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
