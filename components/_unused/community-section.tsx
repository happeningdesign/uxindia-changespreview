"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden relative">
      {/* Background type */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -bottom-6 -right-6 font-serif text-[20vw] text-[#E85520]/[0.04] leading-none">
          CURATE
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4 block">
            Shape The Conference
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[1.05] mb-6 text-balance" style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}>
            Help Us{" "}
            <span className="text-[#E85520]">Curate</span>
          </h2>
          <p
            className={`font-sans text-base md:text-lg text-[#0D0D0D]/60 leading-relaxed max-w-2xl mx-auto mb-4 transition-all duration-700 delay-100 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            UXINDIA has always been shaped by its community. Tell us what you&apos;d like to see at this year&apos;s conference — the topics you care about, speakers you&apos;d love to hear from, and the conversations that matter most to you. Your input helps us design a better experience for everyone.
          </p>
        </div>

        {/* Email capture */}
        <div
          className={`mt-14 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E85520]/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E85520]/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative max-w-xl">
              <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3">
                Early Access
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
                Be the first to know when UXINDIA 2026 tickets go live!
              </h3>
              <p className="font-sans text-sm text-white/40 mb-8 leading-relaxed">
                Drop your email and we&apos;ll notify you the moment tickets open — plus speaker reveals and programme previews straight to your inbox.
              </p>

              {submitted ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E85520] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#E85520]">
                    You&apos;re on the list. We&apos;ll be in touch!
                  </p>
                </div>
              ) : (
                <div className="flex gap-3 flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && email) setSubmitted(true) }}
                    className="font-sans text-sm bg-white/[0.07] border border-white/10 text-white placeholder:text-white/30 px-5 py-3.5 rounded-full flex-1 outline-none focus:border-[#E85520] transition-colors"
                  />
                  <button
                    onClick={() => { if (email) setSubmitted(true) }}
                    className="font-sans text-sm font-semibold bg-[#E85520] hover:bg-[#E85520] text-white px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E85520]/30 flex-shrink-0"
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="https://2026.ux-india.org/call-for-speakers/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors underline underline-offset-4"
          >
            Submit a Speaker Proposal
          </Link>
          <span className="text-[#0D0D0D]/20 hidden sm:block">|</span>
          <Link
            href="https://2026.ux-india.org/sponsor/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors underline underline-offset-4"
          >
            Sponsor UXINDIA26
          </Link>
        </div>
      </div>
    </section>
  )
}
