import Link from "next/link";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

export default function NotFound() {
  return (
    <>
      <Nav forceSolid />
      <main className="bg-[#0D0D0D] min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large faded 404 in background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-white/[0.02] leading-none select-none"
            style={{ fontFamily: "'UXILeadershipCondensed'" }}
          >
            404
          </div>
          {/* Subtle gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E85520]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1A7A6E]/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-32">
          {/* 404 number */}
          <h1
            className="text-[#E85520] leading-none mb-6"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(8rem, 20vw, 16rem)",
            }}
          >
            404
          </h1>

          {/* Headline */}
          <h2
            className="text-white leading-tight mb-4"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Looks like you wandered off the stage.
          </h2>

          {/* Subtext */}
          <p className="font-sans text-white/50 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to where the action is.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#E85520] hover:bg-[#d14a1a] text-white font-sans font-semibold text-base px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E85520]/30"
            >
              Back to Home
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-sans font-medium text-base px-7 py-4 rounded-full transition-all duration-300"
            >
              Learn About UXINDIA
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
