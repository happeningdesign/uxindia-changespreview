"use client";

import Link from "next/link";

const initiatives = [
  { label: "W Summit", href: "https://wsummit.umo.design/" },
  { label: "Design X Social", href: "https://dxs.umo.design/" },
  { label: "1MW Design", href: "https://1mw.umo.design/" },
  { label: "Pre Conference Meetups", href: "https://meetups.umo.design/" },
  { label: "UMO Design Grads", href: "https://grads.umo.design/" },
];

const quickLinks = [
  { label: "Join The Waitlist", href: "https://2026.ux-india.org/waitlist/" },
  {
    label: "Submit Your Proposal",
    href: "https://2026.ux-india.org/call-for-speakers/",
  },
  { label: "Sponsor UXINDIA", href: "https://2026.ux-india.org/sponsor/" },
  { label: "Last Edition", href: "https://2025.ux-india.org/" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/uxindiaconf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/uxindiaconf/",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/uxindiaconf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/uxindiaconf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/uxindia",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 overflow-hidden relative">
      {/* Giant background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-serif text-[25vw] text-white/[0.008] leading-none text-center whitespace-nowrap">
          UXINDIA
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        {/* CTA strip */}
        <div className="bg-[#E85520] rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 pointer-events-none" />
          <div className="relative">
            <p className="font-sans text-xs text-white/70 uppercase tracking-widest mb-2">
              UXINDIA26 · Bangalore · September 2026
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Don&apos;t watch from the
              <br />
              sidelines. Lead the room.
            </h3>
          </div>
          <Link
            href="https://2026.ux-india.org/waitlist/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-white text-white hover:text-[#E85520] font-sans font-semibold text-base px-7 py-4 rounded-full transition-all duration-300 flex-shrink-0 group"
          >
            Join The Waitlist
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
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
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20India%202026%20logo-ddwwGT8EHyo2Ut7hXwoqy3zar9dXWO.svg"
                alt="UXINDIA26"
                className="h-8 w-auto"
              />
            </div>
            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs mb-4">
              A not-for-profit venture, UXINDIA is built by, built for, and
              sustained by its growing community of designers, enthusiasts,
              influencers from business, education, and governance. UXINDIA is
              being organized by UMO Design Foundation.
            </p>
            <p className="font-sans text-xs text-white/20 mb-6">
              Bangalore · September 2026
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#E85520] hover:text-[#E85520] transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Contact removed from brand block to place below Quick Links */}
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info moved below quick links */}
            <div className="mt-6 -translate-y-4 space-y-1.5">
              <a
                href="mailto:team@umo.design"
                className="font-sans text-xs text-white/50 hover:text-white/60 transition-colors block"
              >
                team@umo.design
              </a>
              <a
                href="tel:+918096204373"
                className="font-sans text-xs text-white/50 hover:text-white/60 transition-colors block"
              >
                Jabeen : +91 80962 04373
              </a>
            </div>
          </div>

          {/* UMO Initiatives */}
          <div>
            <p className="font-sans text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">
              UMO Initiatives
            </p>
            <ul className="space-y-3">
              {initiatives.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/50 hover:text-[#E85520] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="font-sans text-xs text-white/25">
            &copy; 2026 UXINDIA. Organised by UMO Design Foundation | Handcrafted by Happening
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <Link
              href="/terms"
              className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Terms
            </Link>
            <a
              href="/code-of-conduct"
              className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
