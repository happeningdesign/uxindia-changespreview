"use client";

import { useEffect, useState } from "react";
import { sections } from "./content";

/**
 * Sticky jump-nav that tracks which section is currently in view.
 * Desktop only — on mobile the horizontal chip strip in the hero does the job.
 */
export default function SectionRail() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Page sections" className="flex flex-col gap-1">
      <span className="font-sans mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-page/40">
        On this page
      </span>

      {sections.map((section, index) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            className={`group flex items-center gap-3 rounded-lg py-1.5 pl-3 pr-2 transition-colors duration-300 ${
              isActive ? "bg-page/[0.06]" : "hover:bg-page/[0.03]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-px w-4 shrink-0 transition-all duration-300 ${
                isActive
                  ? "w-6 bg-brand"
                  : "bg-page/25 group-hover:w-6 group-hover:bg-page/50"
              }`}
            />
            <span
              className={`font-sans text-[0.8rem] leading-snug transition-colors duration-300 ${
                isActive
                  ? "font-semibold text-page"
                  : "text-page/50 group-hover:text-page/80"
              }`}
            >
              {section.label}
            </span>
            <span
              aria-hidden="true"
              className={`font-sans ml-auto text-[0.6rem] tabular-nums transition-colors duration-300 ${
                isActive ? "text-brand" : "text-page/25"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
