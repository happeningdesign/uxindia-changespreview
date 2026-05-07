"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface NavProps {
  forceSolid?: boolean
}

export default function Nav({ forceSolid = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Leadership Summit", href: "/#format-section" },
    { label: "Rising Leaders Forum", href: "/#format-section" },
  ]

  const showSolidBg = forceSolid || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBg
            ? "bg-[#0D0D0D]/95 backdrop-blur-md py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20India%202026%20logo-ddwwGT8EHyo2Ut7hXwoqy3zar9dXWO.svg"
              alt="UXINDIA26"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav — absolutely centred in viewport */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + menu */}
          <div className="flex items-center gap-3">
            <Link
              href="https://2026.ux-india.org/waitlist/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#E85520] hover:bg-[#E85520] text-white text-sm font-sans font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E85520]/30"
            >
              Join Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 text-white"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 bg-current ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 bg-current ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 bg-current ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D] transition-all duration-500 flex flex-col items-center justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl text-white hover:text-[#E85520] transition-colors text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://2026.ux-india.org/waitlist/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#E85520] text-white font-sans font-semibold text-lg px-8 py-3 rounded-full"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </>
  )
}
