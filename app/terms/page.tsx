"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-2 border-[#E85520]">
      <span className="font-sans text-sm font-semibold text-[#E85520]">
        {number}
      </span>
      <h2
        className="text-3xl md:text-4xl text-[#0D0D0D]"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="font-sans text-xl font-semibold text-[#0D0D0D] mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 mb-3">
      <span className="text-[#E85520] font-semibold mt-0.5 shrink-0">→</span>
      <span className="font-sans text-base text-[#333333] leading-relaxed">
        {children}
      </span>
    </li>
  );
}

function Notice({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) {
  const bgColor =
    type === "warning"
      ? "bg-amber-50 border-amber-400"
      : "bg-orange-50 border-[#E85520]";
  return (
    <div className={`${bgColor} border-l-4 p-5 rounded-r-xl my-6`}>
      <div className="font-sans text-sm text-[#333333] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="bg-[#0D0D0D] text-white p-8 md:p-10 rounded-3xl mt-12">
      <h3
        className="text-2xl md:text-3xl mb-4"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        Questions or Concerns?
      </h3>
      <p className="font-sans text-white/70 mb-8">
        If you have any questions about these Terms &amp; Conditions, the Event,
        or your registration, please contact us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a
          href="mailto:team@umo.design"
          className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors"
        >
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-1">
            Email
          </p>
          <p className="font-sans text-white font-medium">team@umo.design</p>
        </a>
        <a
          href="tel:+918096204373"
          className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors"
        >
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-1">
            Phone
          </p>
          <p className="font-sans text-white font-medium">+91-80962 04373</p>
        </a>
        <div className="bg-white/10 rounded-xl p-4">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-1">
            Location
          </p>
          <p className="font-sans text-white font-medium">
            Madhapur, Hyderabad, India
          </p>
        </div>
      </div>

      <p className="font-sans text-sm text-white/50">
        Office hours: Monday - Friday, 10:00 AM - 6:00 PM IST
      </p>
    </div>
  );
}

function TableOfContents() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "definitions", title: "Definitions" },
    { id: "registration", title: "Registration & Payment" },
    { id: "cancellation", title: "Cancellation, Refunds & Transfers" },
    { id: "event-changes", title: "Event Changes & Force Majeure" },
    { id: "speakers", title: "Speaker Terms" },
    { id: "sponsors", title: "Sponsor & Partner Terms" },
    { id: "attendees", title: "Attendee Conduct" },
    { id: "intellectual-property", title: "Intellectual Property Rights" },
    { id: "media", title: "Media, Photography & Recording" },
    { id: "liability", title: "Liability & Disclaimers" },
    { id: "data-privacy", title: "Data Privacy & Protection" },
    { id: "international", title: "International Participants" },
    { id: "health-safety", title: "Health & Safety" },
    { id: "jurisdiction", title: "Governing Law & Jurisdiction" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="bg-[#0D0D0D]/5 rounded-2xl p-6 md:p-8 mb-12">
      <h3 className="font-sans text-lg font-semibold text-[#0D0D0D] mb-4">
        Contents
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-center gap-2 font-sans text-sm text-[#333333] hover:text-[#E85520] transition-colors py-1"
            >
              <span className="text-[#E85520]">→</span>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TermsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Nav />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[400px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/uxindia-stage.jpg"
            alt="UXINDIA conference"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/60 to-[#0D0D0D]/80" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-sans text-xs text-white/60 uppercase tracking-[0.25em] mb-4 px-4 py-2 rounded-full border border-white/20">
              Legal Document
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
              }}
            >
              Terms &amp; Conditions
            </h1>
            <p className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before registering for,
              attending, or participating in UXINDIA Design Leadership Week 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-sans text-sm text-[#0D0D0D]/50 text-center mb-12">
            Last Updated: April 30, 2026
          </p>

          <TableOfContents />

          {/* Section 1: Acceptance of Terms */}
          <AnimatedSection>
            <div id="acceptance" className="mb-16 scroll-mt-24">
              <SectionTitle number="01" title="Acceptance of Terms" />
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                Welcome to UXINDIA Design Leadership Week 2026 (the
                &quot;Event&quot; or &quot;UXINDIA 2026&quot;), organized by UMO
                Design Foundation (the &quot;Organizer,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions
                (&quot;Terms&quot;) constitute a legally binding agreement
                between you and UMO Design Foundation.
              </p>
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                By registering for, attending, speaking at, sponsoring,
                exhibiting at, or otherwise participating in UXINDIA 2026, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms, along with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#E85520] underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/code-of-conduct"
                  className="text-[#E85520] underline"
                >
                  Code of Conduct
                </Link>
                .
              </p>
              <Notice>
                <p>
                  <strong>Important:</strong> If you do not agree to these
                  Terms, you should not register for or participate in the
                  Event. Your continued participation constitutes acceptance of
                  these Terms as they may be amended from time to time.
                </p>
              </Notice>
            </div>
          </AnimatedSection>

          {/* Section 2: Definitions */}
          <AnimatedSection>
            <div id="definitions" className="mb-16 scroll-mt-24">
              <SectionTitle number="02" title="Definitions" />
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                For purposes of these Terms, the following definitions apply:
              </p>
              <ul className="list-none mb-4">
                <ListItem>
                  <strong>&quot;Event&quot;</strong> means UXINDIA Design
                  Leadership Week 2026, including the Leadership Summit
                  (September 22-25, 2026) and the Rising Leaders Forum
                  (September 26-27, 2026), held in Bengaluru, India.
                </ListItem>
                <ListItem>
                  <strong>&quot;Participant&quot;</strong> means any individual
                  or entity involved with the Event, including attendees,
                  speakers, sponsors, exhibitors, partners, volunteers, staff,
                  media representatives, and any other person accessing Event
                  facilities or content.
                </ListItem>
                <ListItem>
                  <strong>&quot;Attendee&quot;</strong> means any registered
                  participant who has purchased or been granted a ticket to
                  attend the Event.
                </ListItem>
                <ListItem>
                  <strong>&quot;Speaker&quot;</strong> means any individual
                  presenting, moderating, or participating in Event sessions,
                  panels, workshops, or other programming.
                </ListItem>
                <ListItem>
                  <strong>&quot;Sponsor&quot;</strong> or{" "}
                  <strong>&quot;Partner&quot;</strong> means any organization
                  providing financial or in-kind support to the Event in
                  exchange for promotional benefits.
                </ListItem>
                <ListItem>
                  <strong>&quot;Content&quot;</strong> means all materials,
                  presentations, recordings, documentation, and intellectual
                  property created for, presented at, or distributed during the
                  Event.
                </ListItem>
              </ul>
            </div>
          </AnimatedSection>

          {/* Section 3: Registration & Payment */}
          <AnimatedSection>
            <div id="registration" className="mb-16 scroll-mt-24">
              <SectionTitle number="03" title="Registration & Payment" />

              <SubSection title="3.1 Registration Requirements">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  All Participants must complete the official registration
                  process through the Event website or authorized ticketing
                  platforms. Registration is subject to availability and may
                  close at the Organizer&apos;s discretion.
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Attendees must provide accurate and complete information
                    during registration
                  </ListItem>
                  <ListItem>
                    Valid government-issued photo identification must be
                    presented at the venue for badge collection
                  </ListItem>
                  <ListItem>
                    Student registrants must present valid student
                    identification to verify eligibility for student pricing
                  </ListItem>
                  <ListItem>
                    Badges are non-transferable unless prior written approval is
                    obtained from the Organizer
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="3.2 Payment Terms">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Registration fees must be paid in full at the time of booking
                  unless otherwise agreed in writing. All fees are quoted in
                  Indian Rupees (INR) and are exclusive of applicable Goods and
                  Services Tax (GST), which will be charged at the prevailing
                  rate.
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Payment can be made via credit card, debit card, net
                    banking, UPI, or other methods specified on the registration
                    platform
                  </ListItem>
                  <ListItem>
                    For corporate or bulk registrations (5+ attendees), invoice
                    and bank transfer options may be available upon request
                  </ListItem>
                  <ListItem>
                    International payments may incur currency conversion fees
                    charged by payment processors or financial institutions
                  </ListItem>
                  <ListItem>
                    The Organizer reserves the right to deny access to
                    Participants with outstanding payment obligations
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="3.3 Ticket Categories & Access">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Different ticket types provide access to specific Event
                  components. Participants should carefully review their ticket
                  entitlements:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    <strong>Leadership Summit Pass:</strong> Access to September
                    22-25 programming, including keynotes, plenary sessions,
                    leadership tracks, and networking events.
                  </ListItem>
                  <ListItem>
                    <strong>Rising Leaders Forum Pass:</strong> Access to
                    September 26-27 programming, including deep dive talks,
                    spark sessions, mentorship clinics, and masterclasses.
                  </ListItem>
                  <ListItem>
                    <strong>Full Event Pass:</strong> Access to all five days of
                    programming (September 22-27).
                  </ListItem>
                  <ListItem>
                    <strong>Workshop Pass:</strong> Separate registration for
                    specific workshops or masterclasses, which may have limited
                    capacity.
                  </ListItem>
                </ul>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 4: Cancellation, Refunds & Transfers */}
          <AnimatedSection>
            <div id="cancellation" className="mb-16 scroll-mt-24">
              <SectionTitle
                number="04"
                title="Cancellation, Refunds & Transfers"
              />

              <SubSection title="4.1 Cancellation by Attendee">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Attendees who wish to cancel their registration must submit a
                  written request to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] underline"
                  >
                    team@umo.design
                  </a>
                  . Refund eligibility depends on the cancellation date:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    <strong>More than 60 days before the Event:</strong> Full
                    refund minus a 10% administrative fee
                  </ListItem>
                  <ListItem>
                    <strong>30-60 days before the Event:</strong> 50% refund of
                    the registration fee
                  </ListItem>
                  <ListItem>
                    <strong>Less than 30 days before the Event:</strong> No
                    refund available
                  </ListItem>
                  <ListItem>
                    No-shows (failure to attend without prior cancellation) are
                    not eligible for any refund
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Refunds will be processed within 30 business days of approval
                  to the original payment method. Transaction fees and GST are
                  non-refundable.
                </p>
              </SubSection>

              <SubSection title="4.2 Ticket Transfers">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Registered Attendees may transfer their ticket to another
                  individual under the following conditions:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Written notification must be sent to team@umo.design at
                    least 7 days before the Event
                  </ListItem>
                  <ListItem>
                    The replacement Attendee must meet all eligibility
                    requirements for the ticket type
                  </ListItem>
                  <ListItem>
                    A transfer fee of INR 1,000 applies to each transfer request
                  </ListItem>
                  <ListItem>Tickets can only be transferred once</ListItem>
                  <ListItem>
                    Unauthorized transfers or badge sharing may result in denial
                    of entry without refund
                  </ListItem>
                </ul>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 5: Event Changes & Force Majeure */}
          <AnimatedSection>
            <div id="event-changes" className="mb-16 scroll-mt-24">
              <SectionTitle number="05" title="Event Changes & Force Majeure" />

              <SubSection title="5.1 Right to Modify Event">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The Organizer reserves the right to make changes to any aspect
                  of the Event without prior notice or liability, including but
                  not limited to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>Event schedule, agenda, and programming</ListItem>
                  <ListItem>Speakers, session topics, and formats</ListItem>
                  <ListItem>Venue locations and layout</ListItem>
                  <ListItem>
                    Event format (in-person, hybrid, or virtual)
                  </ListItem>
                  <ListItem>
                    Access to specific areas or sessions due to capacity
                    constraints
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="5.2 Force Majeure">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The Organizer shall not be liable for failure to perform its
                  obligations if such failure results from circumstances beyond
                  its reasonable control, including but not limited to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Acts of God, natural disasters, extreme weather,
                    earthquakes, floods, or pandemics
                  </ListItem>
                  <ListItem>
                    War, terrorism, civil unrest, riots, or government
                    restrictions
                  </ListItem>
                  <ListItem>
                    Labor disputes, strikes, or industrial action
                  </ListItem>
                  <ListItem>Venue unavailability or damage</ListItem>
                  <ListItem>
                    Power outages, telecommunications failures, or internet
                    disruptions
                  </ListItem>
                </ul>
              </SubSection>

              <Notice type="warning">
                <p>
                  <strong>Important:</strong> Participants are solely
                  responsible for their own travel arrangements, accommodation
                  bookings, and associated costs. The Organizer is not liable
                  for any penalties, fees, or losses related to non-refundable
                  airline tickets, hotel bookings, visa applications, or other
                  travel-related expenses in the event of schedule changes,
                  postponement, or cancellation.
                </p>
              </Notice>
            </div>
          </AnimatedSection>

          {/* Section 6: Speaker Terms */}
          <AnimatedSection>
            <div id="speakers" className="mb-16 scroll-mt-24">
              <SectionTitle number="06" title="Speaker Terms" />

              <SubSection title="6.1 Speaker Obligations">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Accepted Speakers agree to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Deliver their presentation on the scheduled date and time
                  </ListItem>
                  <ListItem>
                    Submit presentation materials by the deadlines specified in
                    the speaker agreement
                  </ListItem>
                  <ListItem>
                    Ensure content is original, not previously published in
                    identical form, and free from plagiarism
                  </ListItem>
                  <ListItem>
                    Avoid promotional or sales-focused content unless explicitly
                    permitted
                  </ListItem>
                  <ListItem>
                    Respect all copyrights, trademarks, and intellectual
                    property rights
                  </ListItem>
                  <ListItem>
                    Adhere to the Event&apos;s Code of Conduct and maintain
                    professional standards
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="6.2 Speaker Benefits">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Accepted Speakers receive (subject to availability and
                  specific terms):
                </p>
                <ul className="list-none mb-4">
                  <ListItem>Complimentary full Event pass</ListItem>
                  <ListItem>
                    Access to specific speaker dinners finalized by organizers
                  </ListItem>
                  <ListItem>
                    Professional photography and session recording (where
                    available)
                  </ListItem>
                  <ListItem>
                    Profile and promotion on Event website and marketing
                    materials
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  <strong>Honorarium:</strong> As a not-for-profit organization,
                  UXINDIA does not provide speaker fees or honoraria. Speakers
                  contribute to support the Event&apos;s mission of advancing
                  design leadership.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 7: Sponsor & Partner Terms */}
          <AnimatedSection>
            <div id="sponsors" className="mb-16 scroll-mt-24">
              <SectionTitle number="07" title="Sponsor & Partner Terms" />

              <SubSection title="7.1 Sponsor Obligations">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Sponsors and Partners agree to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Make all payments according to the agreed schedule in the
                    sponsorship contract
                  </ListItem>
                  <ListItem>
                    Provide required materials (logos, collateral, booth assets)
                    by specified deadlines
                  </ListItem>
                  <ListItem>
                    Comply with venue regulations and Event policies
                  </ListItem>
                  <ListItem>
                    Confine promotional activities to designated sponsor areas
                    and agreed benefits
                  </ListItem>
                  <ListItem>
                    Ensure all booth staff and representatives adhere to the
                    Event Code of Conduct
                  </ListItem>
                  <ListItem>
                    Respect attendee privacy and data protection regulations
                    when collecting contact information
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="7.2 Sponsor Cancellation">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Sponsor cancellations are subject to the terms specified in
                  the sponsorship agreement. Generally:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Cancellations more than 90 days before the Event: 50% refund
                    of sponsorship fee
                  </ListItem>
                  <ListItem>
                    Cancellations 60-90 days before the Event: 25% refund of
                    sponsorship fee
                  </ListItem>
                  <ListItem>
                    Cancellations less than 60 days before the Event: No refund
                  </ListItem>
                </ul>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 8: Attendee Conduct */}
          <AnimatedSection>
            <div id="attendees" className="mb-16 scroll-mt-24">
              <SectionTitle number="08" title="Attendee Conduct" />

              <SubSection title="8.1 Code of Conduct">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  All Participants must comply with the UXINDIA 2026{" "}
                  <Link
                    href="/code-of-conduct"
                    className="text-[#E85520] underline"
                  >
                    Code of Conduct
                  </Link>
                  . The Event is committed to providing a safe, inclusive, and
                  respectful environment for all Participants regardless of
                  gender, gender identity, sexual orientation, disability,
                  physical appearance, body size, race, ethnicity, age,
                  religion, or professional background.
                </p>
              </SubSection>

              <SubSection title="8.2 Prohibited Conduct">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The following behaviors are strictly prohibited and may result
                  in removal from the Event without refund:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Harassment, intimidation, or discrimination of any kind
                  </ListItem>
                  <ListItem>
                    Offensive verbal comments related to gender, sexual
                    orientation, disability, physical appearance, race, or
                    religion
                  </ListItem>
                  <ListItem>
                    Inappropriate physical contact or unwelcome sexual attention
                  </ListItem>
                  <ListItem>
                    Sustained disruption of talks, sessions, or other Event
                    activities
                  </ListItem>
                  <ListItem>
                    Violence, threats of violence, or encouraging violence
                    toward any individual
                  </ListItem>
                  <ListItem>
                    Unauthorized commercial solicitation or distribution of
                    materials
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="8.3 Badge Requirements">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  All Participants must:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Wear official Event badges visibly at all times within Event
                    venues
                  </ListItem>
                  <ListItem>
                    Present valid government-issued photo identification
                    matching their registration name to collect their badge
                  </ListItem>
                  <ListItem>
                    Not share, transfer, or allow others to use their badge
                  </ListItem>
                  <ListItem>
                    Report lost or stolen badges immediately to Event staff for
                    replacement
                  </ListItem>
                </ul>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 9: Intellectual Property Rights */}
          <AnimatedSection>
            <div id="intellectual-property" className="mb-16 scroll-mt-24">
              <SectionTitle number="09" title="Intellectual Property Rights" />

              <SubSection title="9.1 Ownership of Event Materials">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  All Event-produced materials, including but not limited to the
                  Event logo, branding, website design, marketing collateral,
                  program guide, signage, and official recordings are the
                  exclusive property of UMO Design Foundation and are protected
                  by copyright, trademark, and other intellectual property laws.
                </p>
              </SubSection>

              <SubSection title="9.2 Unauthorized Recording & Distribution">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Unless expressly authorized in writing by the Organizer:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Photography, video recording, or audio recording of sessions
                    is <strong>prohibited</strong>
                  </ListItem>
                  <ListItem>
                    Screenshots or screen capture of virtual or hybrid session
                    content is <strong>prohibited</strong>
                  </ListItem>
                  <ListItem>
                    Reproduction, distribution, or commercial use of Event
                    materials is <strong>prohibited</strong>
                  </ListItem>
                  <ListItem>
                    Live streaming, rebroadcasting, or public performance of
                    Event content is <strong>prohibited</strong>
                  </ListItem>
                </ul>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 10: Media, Photography & Recording */}
          <AnimatedSection>
            <div id="media" className="mb-16 scroll-mt-24">
              <SectionTitle
                number="10"
                title="Media, Photography & Recording"
              />

              <SubSection title="10.1 Organizer's Rights">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  By attending or participating in the Event, you acknowledge
                  and consent that the Organizer and authorized media partners
                  may capture photographs, video footage, and audio recordings
                  throughout the Event.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Your image, voice, likeness, statements, and participation may
                  appear in:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Event highlight videos and promotional materials
                  </ListItem>
                  <ListItem>
                    Social media posts (Facebook, Instagram, Twitter, LinkedIn,
                    YouTube)
                  </ListItem>
                  <ListItem>
                    Event website and future marketing campaigns
                  </ListItem>
                  <ListItem>Educational and archival content</ListItem>
                  <ListItem>Media coverage and press releases</ListItem>
                </ul>
              </SubSection>

              <SubSection title="10.2 Opt-Out Requests">
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  If you do not wish to be photographed or recorded, please
                  notify Event staff upon registration or wear the provided
                  opt-out indicator (if available). While the Organizer will
                  make reasonable efforts to accommodate such requests, complete
                  avoidance of capture cannot be guaranteed in public Event
                  spaces.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 11: Liability & Disclaimers */}
          <AnimatedSection>
            <div id="liability" className="mb-16 scroll-mt-24">
              <SectionTitle number="11" title="Liability & Disclaimers" />

              <SubSection title="11.1 Limitation of Liability">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  To the maximum extent permitted by law, the Organizer, its
                  directors, officers, employees, volunteers, agents, sponsors,
                  and partners shall not be liable for any direct, indirect,
                  incidental, consequential, special, or punitive damages
                  arising from or related to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Participation in or inability to participate in the Event
                  </ListItem>
                  <ListItem>
                    Event cancellation, postponement, modification, or
                    interruption
                  </ListItem>
                  <ListItem>
                    Personal injury, illness, death, or property damage
                    occurring at Event venues
                  </ListItem>
                  <ListItem>
                    Loss, theft, or damage to personal belongings
                  </ListItem>
                  <ListItem>
                    Actions or omissions of Speakers, sponsors, exhibitors,
                    vendors, or other Participants
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="11.2 Assumption of Risk">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Participants acknowledge and assume all risks associated with
                  Event attendance, including but not limited to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Risks of illness, injury, or exposure to communicable
                    diseases
                  </ListItem>
                  <ListItem>
                    Risks associated with travel, transportation, and
                    accommodation
                  </ListItem>
                  <ListItem>
                    Risks of loss or theft of personal property
                  </ListItem>
                  <ListItem>
                    Risks inherent in large gatherings and public events
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="11.3 Insurance">
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Participants are solely responsible for obtaining adequate
                  insurance coverage for their attendance, including travel
                  insurance, health insurance, and personal property insurance.
                  The Organizer does not provide insurance coverage for
                  Participants.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 12: Data Privacy & Protection */}
          <AnimatedSection>
            <div id="data-privacy" className="mb-16 scroll-mt-24">
              <SectionTitle number="12" title="Data Privacy & Protection" />

              <SubSection title="12.1 Privacy Policy">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The Organizer&apos;s collection, use, and protection of
                  personal information is governed by our Privacy Policy, which
                  is incorporated into these Terms by reference.
                </p>
              </SubSection>

              <SubSection title="12.2 Data Collection">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The Organizer collects personal information during
                  registration and throughout the Event, including:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Name, email address, phone number, organization, job title
                  </ListItem>
                  <ListItem>Payment and billing information</ListItem>
                  <ListItem>
                    Dietary restrictions, accessibility requirements, and other
                    special needs
                  </ListItem>
                  <ListItem>
                    Badge scans, session attendance, and engagement data
                  </ListItem>
                  <ListItem>
                    Photographs, videos, and recordings captured at the Event
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="12.3 Attendee Rights">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Participants have the right to:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Access their personal information held by the Organizer
                  </ListItem>
                  <ListItem>
                    Request correction of inaccurate or incomplete data
                  </ListItem>
                  <ListItem>
                    Request deletion of their data (subject to legal retention
                    requirements)
                  </ListItem>
                  <ListItem>Opt out of marketing communications</ListItem>
                  <ListItem>
                    Lodge a complaint with applicable data protection
                    authorities
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  To exercise these rights, contact{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] underline"
                  >
                    team@umo.design
                  </a>
                  .
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 13: International Participants */}
          <AnimatedSection>
            <div id="international" className="mb-16 scroll-mt-24">
              <SectionTitle number="13" title="International Participants" />

              <SubSection title="13.1 Visa Requirements">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  International Participants are responsible for ensuring they
                  have appropriate visa documentation for entry into India. The
                  Organizer can provide invitation letters to support visa
                  applications upon request, but cannot guarantee visa approval.
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Complete Event registration and payment in full
                  </ListItem>
                  <ListItem>
                    Submit your request to team@umo.design with your full name
                    as it appears on your passport, passport number, and
                    nationality
                  </ListItem>
                  <ListItem>Allow 5-7 business days for processing</ListItem>
                </ul>
              </SubSection>

              <Notice type="warning">
                <p>
                  <strong>Important:</strong> Visa invitation letters do not
                  guarantee visa approval. The Organizer is not responsible for
                  visa denials, delays, or processing times. The Organizer is
                  not liable for travel or accommodation costs incurred due to
                  visa issues.
                </p>
              </Notice>

              <SubSection title="13.2 Language & Time Zone">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The official language of the Event is English. All Event times
                  are listed in Indian Standard Time (IST, UTC+5:30).
                  International Participants should account for time zone
                  differences when planning travel.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 14: Health & Safety */}
          <AnimatedSection>
            <div id="health-safety" className="mb-16 scroll-mt-24">
              <SectionTitle number="14" title="Health & Safety" />

              <SubSection title="14.1 Health Requirements">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Participants must:
                </p>
                <ul className="list-none mb-4">
                  <ListItem>
                    Comply with any health and safety protocols in effect at the
                    time of the Event
                  </ListItem>
                  <ListItem>
                    Not attend the Event if experiencing symptoms of illness
                  </ListItem>
                  <ListItem>
                    Inform Event staff immediately if they develop symptoms
                    during the Event
                  </ListItem>
                  <ListItem>
                    Follow venue-specific health and safety requirements
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="14.2 Accessibility">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  The Organizer is committed to making the Event accessible to
                  all Participants. Venue facilities include
                  wheelchair-accessible entrances and restrooms, elevators and
                  ramps, and designated accessible seating areas.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Participants requiring specific accommodations should submit
                  requests to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] underline"
                  >
                    team@umo.design
                  </a>{" "}
                  at least 21 days before the Event.
                </p>
              </SubSection>

              <SubSection title="14.3 Personal Property">
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Participants are responsible for the security of their
                  personal belongings at all times. The Organizer and venue are
                  not responsible for loss, theft, or damage to personal
                  property. Participants should not leave valuables unattended.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 15: Governing Law & Jurisdiction */}
          <AnimatedSection>
            <div id="jurisdiction" className="mb-16 scroll-mt-24">
              <SectionTitle number="15" title="Governing Law & Jurisdiction" />

              <SubSection title="15.1 Applicable Law">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  These Terms and Conditions, and any disputes arising from or
                  related to the Event, shall be governed by and construed in
                  accordance with the laws of India, without regard to conflict
                  of law principles.
                </p>
              </SubSection>

              <SubSection title="15.2 Jurisdiction & Venue">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  All disputes, claims, or controversies arising out of or
                  relating to these Terms, the Event, or any Participant&apos;s
                  involvement shall be subject to the{" "}
                  <strong>
                    exclusive jurisdiction of the courts located in Hyderabad,
                    Telangana, India
                  </strong>
                  .
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  By participating in the Event, all Participants—including
                  those from outside India—irrevocably submit to the
                  jurisdiction of the courts of Hyderabad, India.
                </p>
              </SubSection>

              <SubSection title="15.3 Severability">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  If any provision of these Terms is found to be invalid,
                  illegal, or unenforceable by a court of competent
                  jurisdiction, the remaining provisions shall continue in full
                  force and effect.
                </p>
              </SubSection>

              <SubSection title="15.4 Entire Agreement">
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  These Terms, together with the Privacy Policy, Code of
                  Conduct, and any applicable sponsorship or speaker agreements,
                  constitute the entire agreement between the Participant and
                  the Organizer regarding the Event.
                </p>
              </SubSection>
            </div>
          </AnimatedSection>

          {/* Section 16: Contact Information */}
          <AnimatedSection>
            <div id="contact" className="mb-16 scroll-mt-24">
              <SectionTitle number="16" title="Contact Information" />
              <ContactCard />
            </div>
          </AnimatedSection>

          {/* Acknowledgment */}
          <AnimatedSection>
            <div className="bg-[#E85520]/10 border border-[#E85520]/30 rounded-2xl p-6 md:p-8">
              <h3 className="font-sans text-lg font-semibold text-[#0D0D0D] mb-3">
                Acknowledgment
              </h3>
              <p className="font-sans text-sm text-[#333333] leading-relaxed mb-2">
                By registering for and participating in UXINDIA Design
                Leadership Week 2026, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions,
                the{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#E85520] underline"
                >
                  Privacy Policy
                </Link>
                , and the{" "}
                <Link
                  href="/code-of-conduct"
                  className="text-[#E85520] underline"
                >
                  Code of Conduct
                </Link>
                .
              </p>
              <p className="font-sans text-sm text-[#333333] leading-relaxed">
                Thank you for being part of UXINDIA 2026. We look forward to an
                inspiring and transformative event together.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
