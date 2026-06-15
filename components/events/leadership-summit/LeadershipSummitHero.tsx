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
            <div className="animate-float-up opacity-0 mb-8 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E85520] shrink-0">
                <g clipPath="url(#clip0_3_3)">
                  <path d="M391.812 0H408.145C411.422 0.871387 415.855 1.15394 419.13 1.70442C467.533 9.83745 506.183 50.739 511.2 99.6253C511.37 101.286 511.57 103.452 512 105.072V115.864C511.202 118.144 511.19 121.319 510.74 123.748C508.255 137.169 502.93 151.001 496.802 163.151C490.21 176.268 482.85 188.986 474.763 201.238C459.063 224.81 441.965 247.419 423.56 268.945C420.322 272.765 413.042 281.757 409.802 284.465C408.217 285.77 406.392 286.76 404.432 287.375C391.215 291.392 384.427 277.482 376.802 269.495C376.055 268.715 375.322 267.757 374.615 266.925C363.09 253.417 352.128 239.437 341.76 225.023C322.455 198.596 303.775 169.96 293.047 138.844C292.567 137.449 292.08 136.034 291.698 134.609C284.803 108.38 288.67 80.4843 302.443 57.1213C319.878 27.2138 347.29 7.38845 381.58 1.55651C384.7 1.02559 388.9 0.841575 391.812 0ZM400.085 247.457C400.852 246.472 401.845 245.117 402.682 244.238C426.842 214.326 450.522 183.606 467.957 149.173C475.505 134.268 481.267 120.967 479.465 103.855C477.285 82.7685 466.825 63.409 450.385 50.0267C435.148 37.765 414.75 30.6395 395.145 32.3483C372.477 34.3593 353.49 43.1237 338.695 60.711C326.515 75.1935 318.572 96.336 320.247 115.395C322.865 145.195 361.71 198.851 380.575 223.365C386.84 231.507 393.18 239.849 400.085 247.457Z" fill="currentColor"/>
                  <path d="M399.135 64.1561C425.545 63.6954 447.332 84.7209 447.812 111.131C448.292 137.54 427.282 159.344 400.872 159.843C374.437 160.343 352.605 139.307 352.125 112.87C351.645 86.4331 372.698 64.6174 399.135 64.1561ZM402.127 127.744C410.795 126.552 416.87 118.581 415.72 109.907C414.572 101.234 406.633 95.1194 397.953 96.2244C389.213 97.3376 383.045 105.347 384.2 114.082C385.358 122.817 393.397 128.945 402.127 127.744Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_3_3">
                    <rect width="512" height="512" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
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
                    className="group inline-flex items-start gap-1.5 font-sans text-base md:text-lg text-white font-medium cursor-pointer hover:text-[#E85520] transition-colors duration-200"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity"
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
                    Leela Bhartiya City
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
      </div>
    </section>
  );
}
