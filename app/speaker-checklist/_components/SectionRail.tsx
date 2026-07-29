"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { sections } from "./content";

/**
 * Sticky jump-nav that tracks which section is currently in view.
 * Desktop only — on mobile the horizontal chip strip in the hero does the job.
 *
 * Visual model: one continuous hairline with a single brand-coloured indicator
 * that slides to the active item. Labels carry the state via colour/weight, so
 * there are no per-item rules, counters, or hover pills competing for attention.
 */
export default function SectionRail() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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

  // Measure the active row so the indicator matches labels that wrap to two lines.
  const measure = useCallback(() => {
    const node = itemRefs.current[active];
    if (node) setIndicator({ top: node.offsetTop, height: node.offsetHeight });
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <nav aria-label="Page sections">
      <span className="font-sans mb-4 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-page/35">
        On this page
      </span>

      <div className="relative">
        {/* Continuous hairline */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-px bg-page/12"
        />
        {/* Single sliding indicator */}
        <span
          aria-hidden="true"
          className="absolute left-0 w-px bg-brand transition-all duration-300 ease-out"
          style={{ top: indicator.top, height: indicator.height }}
        />

        <div className="flex flex-col">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                ref={(node) => {
                  itemRefs.current[section.id] = node;
                }}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`font-sans py-2 pl-4 text-[0.82rem] leading-snug transition-colors duration-300 ${
                  isActive
                    ? "font-semibold text-page"
                    : "text-page/45 hover:text-page/75"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
