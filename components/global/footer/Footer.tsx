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
  { label: "Get Your Tickets", href: "/tickets" },
  { label: "Sponsor UXINDIA", href: "https://partner.ux-india.org/" },
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
    <footer className="bg-page border-t border-white/10 overflow-hidden relative">
      {/* Giant background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-serif text-[22vw] text-white/[0.01] leading-none text-center whitespace-nowrap">
          UXINDIA
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        {/* CTA strip */}
        <div className="bg-brand rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 pointer-events-none" />
          <div className="relative">
            <p className="font-sans text-xs text-white/70 uppercase tracking-widest mb-2">
              UXINDIA26 · Bengaluru · September 2026
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Don&apos;t watch from the
              <br />
              sidelines. Lead the room.
            </h3>
          </div>
          <Link
            href="/tickets/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-page hover:bg-white text-white hover:text-brand font-sans font-semibold text-base px-7 py-4 rounded-full transition-all duration-300 flex-shrink-0 group"
          >
            Get Your Passes
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
              <img src="/logo.svg" alt="UXINDIA26" className="h-12 w-auto" />
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
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand hover:text-brand transition-all duration-200"
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
                    className="font-sans text-sm text-white/50 hover:text-brand transition-colors"
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
          <p className="font-sans text-xs text-white/50">
            &copy; 2026 UXINDIA. Organised by UMO Design Foundation
            <span> | </span>
            <Link
              href="https://happening.design/"
              className="font-sans text-xs transition-colors"
            >
              Handcrafted by{" "}
              <span className="hover:text-[#2881e7]">Happening</span>
            </Link>
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

      {/* Awwwwards Banner */}
      <div
        id="awwwards"
        className="fixed top-1/2 right-0 transform translatey-[-50%] z-999 hidden md:block"
      >
        <a href="https://www.awwwards.com/sites/ux-india-2026" target="_blank">
          <svg width="53.08" height="171.358">
            <path
              className="js-color-bg"
              fill="white"
              d="M0 0h53.08v171.358H0z"
            ></path>
            <g className="js-color-text" fill="black">
              <path d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495"></path>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
}
