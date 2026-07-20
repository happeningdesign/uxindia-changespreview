"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  logo: string;
  items: NavItem[];
}

export default function Header({
  logo = "/images/logos/design-pitch.webp",
  items = [
    { label: "About", href: "#about" },
    { label: "Pitch", href: "#pitch" },
    { label: "Criteria", href: "#criteria" },
    { label: "Submit", href: "#submit" },
  ],
}: HeaderProps) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: "smooth",
    });

    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header className="fixed min-w-full w-full py-1 z-99">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-14 px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={80}
            priority
            className="h-auto w-[120px] lg:w-[180px]"
          />
        </Link>

        <nav className="hidden rounded-full bg-[#E0B587] p-1 lg:block">
          <ul className="relative flex items-center">
            {items.map((item) => {
              const isActive = active === item.href;

              return (
                <li key={item.href} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 35,
                      }}
                      className="absolute inset-0 rounded-full bg-[#B43A0B]"
                    />
                  )}

                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative z-10 block rounded-full px-16 py-1.5 text-lg font-medium transition-colors ${
                      isActive
                        ? "text-[#FCF8F0]"
                        : "text-[#604911] hover:text-[#FCF8F0]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto rounded-xl bg-[#B43A0B] p-2 text-white lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mx-6 mt-4 rounded-3xl bg-[#E0B587] p-2 shadow-xl lg:hidden"
          >
            {items.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`mb-1 block rounded-full px-6 py-4 text-center text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-[#B43A0B] text-[#FCF8F0]"
                      : "text-[#604911] hover:bg-[#B43A0B] hover:text-[#FCF8F0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
