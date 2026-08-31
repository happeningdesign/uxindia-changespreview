"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldAlert } from "lucide-react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import SectionRail from "@/components/attendee-checklist/section-rail/SectionRail";
import FaqAccordion from "@/components/attendee-checklist/faq-accordian/FaqAccordion";
import {
  conductDos,
  contacts,
  duringCards,
  internationalCards,
  quickFacts,
  registrationSteps,
  sections,
  speakerCards,
  travelSteps,
  venues,
} from "@/data/attendeeChecklist";

/* ── Reveal-on-scroll wrapper ─────────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section header ───────────────────────────────────────────────────────── */
function SectionHeader({
  index,
  title,
  lede,
  onDark = false,
}: {
  index: number;
  title: string;
  lede?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center gap-3">
        <span className="font-sans text-[0.7rem] font-semibold tabular-nums tracking-[0.2em] text-brand">
          {String(index).padStart(2, "0")}
        </span>
        <span
          aria-hidden="true"
          className={`h-px flex-1 ${onDark ? "bg-white/15" : "bg-page/10"}`}
        />
      </div>
      <h2
        className={`font-leadership mt-3 text-4xl leading-[0.95] md:text-5xl ${
          onDark ? "text-white" : "text-page"
        }`}
        style={{ fontWeight: 500 }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`font-sans mt-3 max-w-2xl text-[0.95rem] leading-relaxed ${
            onDark ? "text-white/60" : "text-page/60"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export default function AttendeeChecklistPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <>
      <Nav forceSolid />

      <main className="min-h-screen bg-cream">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-page pt-[110px]"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 h-full w-full"
          >
            <Image
              src="/images/bg/default.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/85 to-page/40" />
          </motion.div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-12 md:pt-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-brand"
            >
              UXINDIA 2026 · Design Leadership Week
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-leadership mt-4 text-[3.25rem] leading-[0.88] text-white sm:text-7xl lg:text-[6.5rem]"
              style={{ fontWeight: 500 }}
            >
              Know Before
              <br />
              <span className="text-brand">You Go</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="font-sans mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
            >
              Attendee, speaker, workshop lead, sponsor, partner or volunteer —
              this is everything you need to arrive prepared. Registration,
              venues, etiquette and answers, in one place.
            </motion.p>

            {/* Quick facts strip */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 lg:grid-cols-4"
            >
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-2 bg-page/85 p-4 md:p-5"
                >
                  <fact.icon
                    aria-hidden="true"
                    className="h-4 w-4 text-brand"
                    strokeWidth={1.75}
                  />
                  <dt className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-sm font-medium leading-snug text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* Mobile / tablet jump chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-2 lg:hidden"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="font-sans rounded-full border border-white/20 px-3 py-1.5 text-[0.7rem] text-white/70 transition-colors duration-200 hover:border-brand hover:text-white"
                >
                  {section.label}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Body: sticky rail + sections ─────────────────────────────────── */}
        <div className="mx-auto flex w-full max-w-6xl gap-12 px-6 py-16 md:py-24">
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-[calc(var(--navbar-height-desktop)+2rem)]">
              <SectionRail />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            {/* ── Before You Travel ─────────────────────────────────── */}
            <section id="before-you-travel" className="scroll-mt-32">
              <Reveal>
                <SectionHeader
                  index={1}
                  title="Before You Travel"
                  lede="Coming from Bengaluru, elsewhere in India, or overseas — take care of these seven things before you arrive."
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {travelSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 0.04}>
                    <article className="group relative h-full overflow-hidden rounded-2xl border border-page/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_12px_32px_-18px_rgba(13,13,13,0.35)]">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                          <step.icon
                            aria-hidden="true"
                            className="h-4 w-4"
                            strokeWidth={1.75}
                          />
                        </span>
                        <span className="font-leadership text-2xl tabular-nums text-page/10 transition-colors duration-300 group-hover:text-brand/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-sans mt-4 text-[0.95rem] font-semibold leading-snug text-page">
                        {step.title}
                      </h3>
                      <p className="font-sans mt-1.5 text-sm leading-relaxed text-page/55">
                        {step.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── International Visitors ───────────────────────────── */}
            <section id="international" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={2}
                  title="For International Visitors"
                  lede="Flying in from outside India? Sort these five before you board."
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {internationalCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.05}>
                    <article className="flex h-full flex-col rounded-2xl border border-page/8 bg-white p-5">
                      <div className="flex items-start justify-between gap-3">
                        <card.icon
                          aria-hidden="true"
                          className="h-5 w-5 text-brand"
                          strokeWidth={1.75}
                        />
                        <span className="font-sans rounded-full bg-page px-2.5 py-1 text-[0.6rem] font-semibold uppercase leading-none tracking-[0.08em] text-white">
                          {card.fact}
                        </span>
                      </div>
                      <h3 className="font-sans mt-4 text-[0.9rem] font-semibold leading-snug text-page">
                        {card.title}
                      </h3>
                      <p className="font-sans mt-1.5 text-sm leading-relaxed text-page/55 mb-2">
                        {card.body}
                      </p>
                      {card.linkLabel && (
                        <a
                          href={card.linkURL}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-[0.75rem] font-bold text-brand uppercase hover:underline"
                        >
                          {card.linkLabel}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M3 7h8M8 4l3 3-3 3"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── For Speakers ─────────────────────────────────────── */}
            <section id="speakers" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl bg-page p-6 md:p-10">
                  <Image
                    src="/images/illustrations/megaphone.webp"
                    alt=""
                    width={220}
                    height={220}
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 hidden w-40 opacity-20 md:block lg:w-52"
                  />

                  <div className="relative">
                    <SectionHeader
                      index={3}
                      title="For Speakers"
                      lede="On stage this year? These six things keep your session running clean."
                      onDark
                    />

                    <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                      {speakerCards.map((card) => (
                        <article
                          key={card.title}
                          className="flex h-full flex-col bg-page p-5"
                        >
                          <card.icon
                            aria-hidden="true"
                            className="h-5 w-5 text-brand"
                            strokeWidth={1.75}
                          />
                          <h3 className="font-sans mt-4 text-[0.9rem] font-semibold leading-snug text-white">
                            {card.title}
                          </h3>
                          <p className="font-sans mt-1.5 text-sm leading-relaxed text-white/55">
                            {card.body}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ── Registration ──────────────────────────────────────── */}
            <section id="registration" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={4}
                  title="Registration & Check-in"
                  lede="Four steps between the front door and your first session."
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {registrationSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 0.05}>
                    <article className="flex h-full flex-col rounded-2xl border border-page/8 bg-white p-5">
                      <step.icon
                        aria-hidden="true"
                        className="h-5 w-5 text-brand"
                        strokeWidth={1.75}
                      />
                      <h3 className="font-sans mt-4 text-[0.9rem] font-semibold leading-snug text-page">
                        {step.title}
                      </h3>
                      <p className="font-sans mt-1.5 text-sm leading-relaxed text-page/55">
                        {step.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-brand/25 bg-brand/[0.06] p-5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                  />
                  <p className="font-sans text-sm leading-relaxed text-page/75">
                    <strong className="font-semibold text-page">
                      Speakers:
                    </strong>{" "}
                    head to the dedicated Speaker Registration counter on
                    arrival — it&apos;s separate from the delegate queue.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Venues ────────────────────────────────────────────── */}
            <section id="venues" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={5}
                  title="Venues & Travel"
                  lede="Two venues, one week. Check your schedule so you arrive at the right one."
                />
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2">
                {venues.map((venue, index) => (
                  <Reveal key={venue.event} delay={index * 0.08}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-page/8 bg-white">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={venue.image}
                          alt={venue.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-page/70 via-transparent to-transparent" />
                        <span
                          className="font-sans absolute left-4 top-4 rounded-full px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.1em]"
                          style={{
                            backgroundColor: venue.accent,
                            color:
                              venue.accent === "#f5bf42"
                                ? "#0d0d0d"
                                : "#ffffff",
                          }}
                        >
                          {venue.event}
                        </span>
                        <p className="font-sans absolute bottom-4 left-4 text-xs font-medium text-white/90">
                          {venue.dates}
                        </p>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <h3
                          className="font-leadership text-2xl leading-tight text-page"
                          style={{ fontWeight: 500 }}
                        >
                          {venue.name}
                        </h3>
                        <p className="font-sans mt-1 text-sm text-page/45">
                          {venue.city}
                        </p>
                        <ul className="mt-4 flex flex-col gap-2.5 border-t border-page/8 pt-4">
                          {venue.notes.map((note) => (
                            <li
                              key={note}
                              className="font-sans flex gap-2.5 text-sm leading-relaxed text-page/60"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: venue.accent }}
                              />
                              {note}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={venue.mapLink}
                          target="_blank"
                          className="text-[12px] font-bold leading-relaxed text-brand uppercase mt-5"
                        >
                          View on Maps
                        </a>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── During the Conference ─────────────────────────────── */}
            <section id="during" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={6}
                  title="During the Conference"
                  lede="The practical stuff, on site."
                />
              </Reveal>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-page/10 bg-page/10 sm:grid-cols-2 lg:grid-cols-3">
                {duringCards.map((card) => (
                  <article
                    key={card.title}
                    className="flex h-full flex-col bg-white p-5 transition-colors duration-300 hover:bg-cream/70"
                  >
                    <card.icon
                      aria-hidden="true"
                      className="h-5 w-5 text-brand"
                      strokeWidth={1.75}
                    />
                    <h3 className="font-sans mt-4 text-[0.9rem] font-semibold leading-snug text-page">
                      {card.title}
                    </h3>
                    <p className="font-sans mt-1.5 text-sm leading-relaxed text-page/55">
                      {card.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* ── Code of Conduct ─────────────────────────────────── */}
            <section id="conduct" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={7}
                  title="Code of Conduct"
                  lede="UXINDIA is committed to a welcoming, inclusive and respectful environment. We ask every participant to:"
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {conductDos.map((rule, index) => (
                  <Reveal key={rule.text} delay={index * 0.04}>
                    <div className="flex h-full items-start gap-3.5 rounded-2xl border border-page/8 bg-white p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-page text-white">
                        <rule.icon
                          aria-hidden="true"
                          className="h-4 w-4"
                          strokeWidth={1.75}
                        />
                      </span>
                      <p className="font-sans pt-1 text-sm leading-relaxed text-page/75">
                        {rule.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-page p-5">
                  <ShieldAlert
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    strokeWidth={1.75}
                  />
                  <p className="font-sans text-sm leading-relaxed text-white/70">
                    Participants who violate the Code of Conduct may be asked to
                    leave the event without refund. Go to the{" "}
                    <a
                      href="/code-of-conduct"
                      target="_blank"
                      className="text-brand underline"
                    >
                      Code Of Conduct
                    </a>{" "}
                    . for the details page.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── FAQs ────────────────────────────────────────────── */}
            <section id="faqs" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={8}
                  title="Frequently Asked Questions"
                  lede="Short answers to what gets asked most."
                />
              </Reveal>
              <Reveal>
                <FaqAccordion />
              </Reveal>
            </section>

            {/* ── Contact ─────────────────────────────────────────── */}
            <section id="contact" className="mt-20 scroll-mt-32 md:mt-28">
              <Reveal>
                <SectionHeader
                  index={9}
                  title="Contact & Support"
                  lede="Still stuck? Reach the people who can help."
                />
              </Reveal>

              <div className="grid gap-4 md:grid-cols-3">
                {contacts.map((contact, index) => (
                  <Reveal key={contact.title} delay={index * 0.06}>
                    <article className="flex h-full flex-col rounded-2xl border border-page/8 bg-white p-5">
                      <contact.icon
                        aria-hidden="true"
                        className="h-5 w-5 text-brand"
                        strokeWidth={1.75}
                      />
                      <h3 className="font-sans mt-4 text-[0.9rem] font-semibold leading-snug text-page">
                        {contact.title}
                      </h3>
                      <p className="font-sans mt-1.5 flex-1 text-sm leading-relaxed text-page/55">
                        {contact.body}
                      </p>
                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          className="font-sans mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors duration-200 hover:text-page"
                        >
                          {contact.email}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                          />
                        </a>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-page p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  <div>
                    <h3
                      className="font-leadership text-3xl leading-tight text-white md:text-4xl"
                      style={{ fontWeight: 500 }}
                    >
                      Ready for the week?
                    </h3>
                    <p className="font-sans mt-2 max-w-md text-sm leading-relaxed text-white/60">
                      Explore the programme and lock in the sessions you
                      don&apos;t want to miss.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/schedule"
                      className="font-sans inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      View Schedule
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/tickets"
                      className="font-sans inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white"
                    >
                      Get Tickets
                    </Link>
                  </div>
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
