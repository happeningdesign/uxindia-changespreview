"use client";

import { useState } from "react";
import { summitFaq, forumFaq } from "@/data/ticketsFaq";

type FaqTrack = "summit" | "forum";

export function TicketsFAQ() {
  const [track, setTrack] = useState<FaqTrack>("summit");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = track === "summit" ? summitFaq : forumFaq;

  const switchTrack = (next: FaqTrack) => {
    setTrack(next);
    setOpenIndex(0);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-8">
      <div className="text-center">
        <h2 className="font-uxi text-4xl font-medium leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm text-text-primary/40">
          Everything you need to know about attending UXINDIA 2026.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => switchTrack("summit")}
          className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition ${
            track === "summit"
              ? "bg-card-summit text-text-primary"
              : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
          }`}
        >
          Leadership Summit
        </button>
        <button
          type="button"
          onClick={() => switchTrack("forum")}
          className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition ${
            track === "forum"
              ? "bg-card-forum text-text-on-yellow"
              : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
          }`}
        >
          Rising Leaders Forum
        </button>
      </div>

      <ul className="mt-10 divide-y divide-white/[0.08]">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-sans text-lg font-semibold text-text-primary md:text-xl">
                  {item.question}
                </span>
                <svg
                  className="chevron-icon mt-1 shrink-0 text-brand"
                  data-open={isOpen}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <p className="pb-6 font-sans text-sm leading-relaxed text-text-primary/60">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
