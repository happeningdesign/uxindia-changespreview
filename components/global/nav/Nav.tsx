"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavProps {
  forceSolid?: boolean;
}

export default function Nav({ forceSolid = false }: NavProps) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Leadership Summit", href: "/leadership-summit" },
    { label: "Rising Leaders Forum", href: "/rising-leaders-forum" },
  ];

  const showSolidBg = forceSolid || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBg
            ? "bg-page/95 backdrop-blur-md py-4 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="UXINDIA26"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-sans font-medium tracking-wide transition-colors pb-[0.2rem] border-[0px] border-b-[2px]  ${
                    isActive
                      ? "text-white border-[#E85520]"
                      : "text-white/80 hover:text-white border-[transparent]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-brand hover:bg-brand text-white text-sm font-sans font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand/30"
            >
              Buy Passes
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-page transition-all duration-500 flex flex-col items-center justify-center ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-4xl transition-colors text-center ${
                  isActive ? "text-[#E85520]" : "text-white hover:text-brand"
                }`}
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/tickets"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-brand text-white font-sans font-semibold text-lg px-8 py-3 rounded-full"
          >
            Buy Passes
          </Link>
        </nav>
      </div>
    </>
  );
}
