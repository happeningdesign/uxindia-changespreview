"use client";

import { useRef, useState, useEffect } from "react";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatedSection>
      <section id={id} className="mb-16 scroll-mt-32">
        <div className="flex items-start gap-3 mb-6">
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
        <div className="pl-0 md:pl-8">{children}</div>
      </section>
    </AnimatedSection>
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
    <div className="mb-6">
      <h3 className="font-sans text-lg font-semibold text-[#0D0D0D] mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 mb-3">
      <svg
        className="w-4 h-4 mt-1 flex-shrink-0 text-[#E85520]"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 8h10M10 5l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-base text-[#333333] leading-relaxed">
        {children}
      </span>
    </li>
  );
}

function ImportantBox({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-[#E85520]/10 border-l-4 border-[#E85520] p-5 rounded-r-xl my-6">
      {title && (
        <p className="font-sans text-sm font-bold text-[#E85520] mb-2">
          {title}
        </p>
      )}
      <div className="font-sans text-sm text-[#333333]">{children}</div>
    </div>
  );
}

function SummaryBox({ items }: { items: string[] }) {
  return (
    <div className="bg-[#0D0D0D] text-white p-8 rounded-3xl mb-12">
      <h3
        className="text-xl mb-4"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        Quick Summary
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E85520]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-sans text-sm text-white/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "data-controller", title: "Data Controller Information" },
    { id: "scope", title: "Scope and Applicability" },
    { id: "information-collected", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "legal-basis", title: "Legal Basis for Processing" },
    { id: "data-sharing", title: "Data Sharing and Third Parties" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "data-retention", title: "Data Retention" },
    { id: "your-rights", title: "Your Rights as a Data Principal" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "security", title: "Data Security" },
    { id: "data-breach", title: "Data Breach Notification" },
    { id: "speaker-terms", title: "Speaker-Specific Terms" },
    { id: "sponsor-terms", title: "Sponsor and Partner Data Usage" },
    { id: "media-consent", title: "Media, Photography, and Recording Consent" },
    { id: "children", title: "Children's Privacy and Age Restrictions" },
    { id: "contact", title: "Contact Us and Grievance Redressal" },
    { id: "governing-law", title: "Governing Law and Jurisdiction" },
    { id: "updates", title: "Updates to This Privacy Policy" },
  ];

  return (
    <>
      <Nav forceSolid />
      <main className="bg-[#F5F0E8]">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-[100px]"
        >
          <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
            <Image
              src="/uxindia-stage.jpg"
              alt="UXINDIA conference"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0D0D0D]/85" />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
            <AnimatedSection>
              <p className="font-sans text-xs text-[#FF6D35] uppercase tracking-[0.25em] mb-4">
                Legal
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Privacy Policy
              </h1>
              <p className="font-sans text-lg text-white/70 mb-4">
                Your privacy matters to us
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/50 font-sans text-sm">
                <span>
                  <strong className="text-white/70">Effective Date:</strong>{" "}
                  April 30, 2026
                </span>
                <span className="hidden md:inline">•</span>
                <span>
                  <strong className="text-white/70">Last Updated:</strong> April
                  30, 2026
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6">
            {/* Quick Summary */}
            <AnimatedSection>
              <SummaryBox
                items={[
                  "We collect only necessary data to operate the conference",
                  "We don't sell your personal data",
                  "Sponsors only receive your data if you explicitly agree",
                  "You can request access, correction, or deletion of your data at any time",
                  "International data transfers are protected with appropriate safeguards",
                ]}
              />
            </AnimatedSection>

            {/* Table of Contents */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm">
                <h2
                  className="text-2xl mb-6 text-[#0D0D0D]"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                  }}
                >
                  Table of Contents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tocItems.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="font-sans text-sm text-[#333333]/70 hover:text-[#E85520] transition-colors py-1"
                    >
                      {i + 1}. {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Sections */}
            <Section id="introduction" number="01" title="Introduction">
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                Welcome to UXINDIA 2026, organized by UMO Design Foundation
                (&quot;UXINDIA&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;). We are committed to protecting the privacy of
                all individuals who engage with our conference.
              </p>
              <SubSection title="This Privacy Policy applies to:">
                <ul className="space-y-1">
                  <ListItem>Speakers and presenters</ListItem>
                  <ListItem>Attendees and participants</ListItem>
                  <ListItem>Sponsors and partners</ListItem>
                  <ListItem>Website visitors</ListItem>
                  <ListItem>Volunteers and vendors</ListItem>
                  <ListItem>
                    Any other individuals who interact with our conference,
                    services, or platforms
                  </ListItem>
                </ul>
              </SubSection>
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                This policy explains how we collect, use, share, and protect
                your personal information when you interact with:
              </p>
              <ul className="space-y-1">
                <ListItem>
                  <Link
                    href="https://www.ux-india.org/"
                    className="text-[#E85520] hover:underline"
                  >
                    https://www.ux-india.org/
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://2026.ux-india.org/"
                    className="text-[#E85520] hover:underline"
                  >
                    https://2026.ux-india.org/
                  </Link>
                </ListItem>
                <ListItem>
                  Related event platforms, communications, registration systems,
                  and services
                </ListItem>
              </ul>
            </Section>

            <Section
              id="data-controller"
              number="02"
              title="Data Controller Information"
            >
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="space-y-2 font-sans text-base text-[#333333]">
                  <p>
                    <strong>Entity Name:</strong> UMO Design Foundation
                  </p>
                  <p>
                    <strong>Location:</strong> Hyderabad, Telangana, India
                  </p>
                  <p>
                    <strong>Contact Email:</strong>{" "}
                    <a
                      href="mailto:team@umo.design"
                      className="text-[#E85520] hover:underline"
                    >
                      team@umo.design
                    </a>
                  </p>
                </div>
              </div>
              <p className="font-sans text-base text-[#333333] leading-relaxed">
                UMO Design Foundation is the data controller (or &quot;data
                fiduciary&quot; under Indian law) responsible for your personal
                data collected in connection with UXINDIA 2026.
              </p>
            </Section>

            <Section id="scope" number="03" title="Scope and Applicability">
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                This Privacy Policy applies to all individuals who:
              </p>
              <ul className="space-y-1 mb-6">
                <ListItem>
                  Register for or attend UXINDIA events (including the
                  Leadership Summit and Rising Leaders Forum)
                </ListItem>
                <ListItem>
                  Submit speaker proposals or participate as speakers
                </ListItem>
                <ListItem>Partner with or sponsor the conference</ListItem>
                <ListItem>
                  Visit our websites or interact with our digital platforms
                </ListItem>
                <ListItem>
                  Subscribe to our communications or newsletters
                </ListItem>
                <ListItem>
                  Engage with us as volunteers, vendors, or service providers
                </ListItem>
              </ul>
              <ImportantBox title="Legal Framework">
                This policy is designed to comply with India&apos;s Digital
                Personal Data Protection Act, 2023 (DPDPA) and the Digital
                Personal Data Protection Rules, 2025 (DPDP Rules), as well as
                align with international data protection standards including the
                EU General Data Protection Regulation (GDPR) and other
                applicable privacy laws for our international participants.
              </ImportantBox>
            </Section>

            <Section
              id="information-collected"
              number="04"
              title="Information We Collect"
            >
              <SubSection title="4.1 Personal Information">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  We may collect the following categories of personal
                  information:
                </p>
                <ul className="space-y-1">
                  <ListItem>Name, email address, phone number</ListItem>
                  <ListItem>
                    Organization, job title, professional details
                  </ListItem>
                  <ListItem>
                    Location, city, country, and postal address
                  </ListItem>
                  <ListItem>
                    Social media profiles and professional networking
                    information (if voluntarily shared)
                  </ListItem>
                  <ListItem>Profile photograph (if provided)</ListItem>
                </ul>
              </SubSection>

              <SubSection title="4.2 Event-Related Information">
                <ul className="space-y-1">
                  <ListItem>Ticket purchase and registration details</ListItem>
                  <ListItem>
                    Session preferences and schedule selections
                  </ListItem>
                  <ListItem>
                    Dietary requirements and accessibility needs
                  </ListItem>
                  <ListItem>
                    Badge scanning data and event interaction information
                  </ListItem>
                  <ListItem>Event feedback and survey responses</ListItem>
                </ul>
              </SubSection>

              <SubSection title="4.3 Speaker-Specific Information">
                <ul className="space-y-1">
                  <ListItem>
                    Biography, professional profile, and speaker headshot
                  </ListItem>
                  <ListItem>
                    Presentation proposals, abstracts, and session materials
                  </ListItem>
                  <ListItem>
                    Portfolio links and uploaded presentation content
                  </ListItem>
                  <ListItem>
                    Travel and accommodation preferences (for invited speakers)
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="4.4 Payment and Financial Information">
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Ticketing and registration services are managed by UiSER
                  Innovations Pvt Ltd. Payment information is processed through
                  secure third-party payment providers including Eventum,
                  Razorpay, Stripe, and other similar services.{" "}
                  <strong>
                    We do not store complete payment card details.
                  </strong>{" "}
                  We may retain transaction records, billing addresses, and
                  purchase confirmations as required by Indian tax and
                  accounting regulations.
                </p>
              </SubSection>

              <SubSection title="4.5 Technical and Usage Information">
                <ul className="space-y-1">
                  <ListItem>IP address and device information</ListItem>
                  <ListItem>
                    Browser type, operating system, and device identifiers
                  </ListItem>
                  <ListItem>
                    Website usage data, including pages visited, time spent, and
                    navigation patterns
                  </ListItem>
                  <ListItem>
                    Cookie data and similar tracking technologies (see Section
                    11)
                  </ListItem>
                  <ListItem>
                    Analytics and performance data collected via Google
                    Analytics, Facebook Pixel, LinkedIn Insight Tag, and similar
                    services
                  </ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section
              id="how-we-use"
              number="05"
              title="How We Use Your Information"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                We process your personal data for the following purposes:
              </p>

              <SubSection title="5.1 Event Operations and Management">
                <ul className="space-y-1">
                  <ListItem>
                    Manage registrations, ticket purchases, and event
                    participation
                  </ListItem>
                  <ListItem>
                    Communicate event updates, logistics, and important
                    information
                  </ListItem>
                  <ListItem>
                    Facilitate networking and attendee engagement opportunities
                  </ListItem>
                  <ListItem>
                    Provide customer support and respond to inquiries
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="5.2 Speaker Management">
                <ul className="space-y-1">
                  <ListItem>Review and curate speaker submissions</ListItem>
                  <ListItem>
                    Coordinate sessions, workshops, and presentation schedules
                  </ListItem>
                  <ListItem>
                    Publish speaker profiles on our website and promotional
                    materials
                  </ListItem>
                  <ListItem>
                    Arrange travel and accommodation (where applicable)
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="5.3 Sponsorship and Partnership Activities">
                <ul className="space-y-1">
                  <ListItem>
                    Facilitate sponsor deliverables and engagement opportunities
                  </ListItem>
                  <ListItem>
                    Provide aggregated analytics and attendance reports to
                    sponsors (where permitted)
                  </ListItem>
                  <ListItem>
                    Enable sponsor-attendee interactions through badge scanning
                    (with explicit consent)
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="5.4 Marketing and Communications">
                <ul className="space-y-1">
                  <ListItem>
                    Send confirmations, reminders, and transactional messages
                  </ListItem>
                  <ListItem>
                    Share newsletters, event announcements, and marketing
                    communications (with your consent)
                  </ListItem>
                  <ListItem>
                    Promote future UXINDIA events and related initiatives
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="5.5 Improvement and Analytics">
                <ul className="space-y-1">
                  <ListItem>
                    Analyze usage trends and attendee behavior
                  </ListItem>
                  <ListItem>
                    Improve event experience, content, and offerings
                  </ListItem>
                  <ListItem>Conduct research and develop new programs</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section
              id="legal-basis"
              number="06"
              title="Legal Basis for Processing"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                Under the DPDPA and international privacy laws, we process your
                personal data based on the following legal grounds:
              </p>
              <ul className="space-y-1">
                <ListItem>
                  <strong>Consent:</strong> For marketing communications,
                  newsletter subscriptions, optional data collection, and
                  sponsor data sharing (you may withdraw consent at any time)
                </ListItem>
                <ListItem>
                  <strong>Contractual Necessity:</strong> For event
                  registrations, ticket purchases, speaker agreements, and
                  fulfilling our obligations to provide conference services
                </ListItem>
                <ListItem>
                  <strong>Legal Obligations:</strong> For taxation, invoicing,
                  financial record-keeping, and compliance with Indian laws and
                  regulations
                </ListItem>
                <ListItem>
                  <strong>Legitimate Interests:</strong> For improving our
                  services, conducting analytics, ensuring event security, and
                  pursuing our mission as a not-for-profit organization (where
                  such interests do not override your rights)
                </ListItem>
              </ul>
            </Section>

            <Section
              id="data-sharing"
              number="07"
              title="Data Sharing and Third Parties"
            >
              <ImportantBox>
                <strong>We do not sell your personal data.</strong>
              </ImportantBox>
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                We may share your information with the following categories of
                recipients:
              </p>

              <SubSection title="7.1 Service Providers and Technology Partners">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  We engage trusted third-party service providers to support our
                  operations:
                </p>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Event registration and ticketing platforms managed by UiSER
                    Innovations Pvt Ltd (using Eventum and other platforms)
                  </ListItem>
                  <ListItem>
                    Email and customer relationship management (CRM) tools
                  </ListItem>
                  <ListItem>
                    Payment processors and gateways (e.g., Razorpay, Stripe,
                    PayPal)
                  </ListItem>
                  <ListItem>
                    Event technology platforms for virtual sessions and
                    networking
                  </ListItem>
                  <ListItem>
                    Website hosting and analytics providers (e.g., Google
                    Analytics, Facebook Pixel)
                  </ListItem>
                  <ListItem>
                    Communication services (e.g., WhatsApp Business, Slack for
                    coordination)
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  These service providers are contractually bound to protect
                  your data and may only use it for the specific purposes we
                  authorize.
                </p>
              </SubSection>

              <SubSection title="7.2 Sponsors and Partners">
                <ImportantBox title="Important">
                  Sponsors and partners will only receive your personal data
                  where you have provided{" "}
                  <strong>explicit, informed consent.</strong>
                </ImportantBox>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    <strong>Aggregated data (default):</strong> Sponsors receive
                    anonymized, aggregated insights and analytics that do not
                    identify individuals
                  </ListItem>
                  <ListItem>
                    <strong>Identifiable data (opt-in only):</strong> If you
                    consent (e.g., through badge scanning or registration
                    opt-in), sponsors may receive your name, organization, and
                    contact details for follow-up purposes
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  You maintain full control over sponsor data sharing. You may
                  opt out at any time by contacting us or adjusting your
                  preferences in your registration account.
                </p>
              </SubSection>

              <SubSection title="7.3 Legal and Regulatory Authorities">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  We may disclose personal data to government agencies, law
                  enforcement, or regulatory authorities when required by Indian
                  law, court order, or legal process, or when necessary to:
                </p>
                <ul className="space-y-1">
                  <ListItem>Comply with legal obligations</ListItem>
                  <ListItem>
                    Protect our rights, property, or safety, or that of our
                    users
                  </ListItem>
                  <ListItem>
                    Investigate fraud, security threats, or violations of our
                    terms
                  </ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section
              id="international-transfers"
              number="08"
              title="International Data Transfers"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                As UXINDIA is a global conference with international speakers,
                sponsors, and attendees, your personal data may be transferred
                to, processed, or stored in countries outside India, including
                countries that may not offer the same level of data protection
                as India.
              </p>
              <SubSection title="8.1 Safeguards for International Transfers">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  When we transfer data internationally, we ensure appropriate
                  safeguards are in place:
                </p>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Use of vendors and service providers with robust data
                    protection practices
                  </ListItem>
                  <ListItem>
                    Standard contractual clauses or equivalent protections where
                    required
                  </ListItem>
                  <ListItem>
                    Compliance with DPDPA provisions on cross-border data
                    transfers
                  </ListItem>
                  <ListItem>
                    Alignment with GDPR adequacy requirements for EU
                    participants
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  If the Government of India issues any notification restricting
                  data transfer to specific countries, we will comply
                  accordingly.
                </p>
              </SubSection>
            </Section>

            <Section id="data-retention" number="09" title="Data Retention">
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this policy or as required by
                law.
              </p>
              <ul className="space-y-1 mb-4">
                <ListItem>
                  <strong>Event registration and participation data:</strong> Up
                  to 3 years after the event, to support alumni engagement and
                  historical records
                </ListItem>
                <ListItem>
                  <strong>Speaker submissions and materials:</strong> Retained
                  for current and future event consideration, unless you request
                  deletion
                </ListItem>
                <ListItem>
                  <strong>Financial and tax records:</strong> Retained as
                  required by Indian accounting and tax regulations (typically 7
                  years)
                </ListItem>
                <ListItem>
                  <strong>Marketing and newsletter data:</strong> Retained until
                  you withdraw consent or unsubscribe
                </ListItem>
                <ListItem>
                  <strong>Website analytics and technical data:</strong>{" "}
                  Typically retained for 26 months (Google Analytics default)
                </ListItem>
              </ul>
              <p className="font-sans text-base text-[#333333] leading-relaxed">
                After the retention period expires, we will securely delete or
                anonymize your personal data, unless we have a legal obligation
                to retain it longer.
              </p>
            </Section>

            <Section
              id="your-rights"
              number="10"
              title="Your Rights as a Data Principal"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                Under India&apos;s DPDPA and international privacy laws, you
                have the following rights regarding your personal data:
              </p>
              <ul className="space-y-1 mb-6">
                <ListItem>
                  <strong>Right to Access:</strong> Request a copy of the
                  personal data we hold about you
                </ListItem>
                <ListItem>
                  <strong>Right to Correction:</strong> Request correction of
                  inaccurate or incomplete data
                </ListItem>
                <ListItem>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data (subject to legal retention requirements)
                </ListItem>
                <ListItem>
                  <strong>Right to Withdraw Consent:</strong> Withdraw your
                  consent for marketing, data sharing, or other consent-based
                  processing at any time
                </ListItem>
                <ListItem>
                  <strong>Right to Object:</strong> Object to certain types of
                  data processing based on legitimate interests
                </ListItem>
                <ListItem>
                  <strong>Right to Data Portability:</strong> Receive your data
                  in a structured, machine-readable format (where technically
                  feasible)
                </ListItem>
                <ListItem>
                  <strong>Right to Nominate:</strong> Under DPDPA, you may
                  nominate another individual to exercise your rights in the
                  event of your death or incapacity
                </ListItem>
                <ListItem>
                  <strong>Right to Grievance Redressal:</strong> Submit
                  complaints or concerns to our designated contact (see Section
                  18)
                </ListItem>
              </ul>

              <SubSection title="10.1 How to Exercise Your Rights">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  To exercise any of these rights, please contact us at:{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] hover:underline"
                  >
                    team@umo.design
                  </a>
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  We will respond to your request within a reasonable timeframe,
                  typically within 30 days, and no later than the maximum period
                  permitted under applicable law (up to 90 days for complex
                  requests under DPDPA).
                </p>
              </SubSection>

              <SubSection title="10.2 Right to Lodge a Complaint">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  If you believe your privacy rights have been violated, you
                  have the right to lodge a complaint with:
                </p>
                <ul className="space-y-1">
                  <ListItem>
                    <strong>India:</strong> Data Protection Board of India (once
                    fully operational under DPDPA)
                  </ListItem>
                  <ListItem>
                    <strong>EU/EEA:</strong> Your local data protection
                    authority or supervisory authority
                  </ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section
              id="cookies"
              number="11"
              title="Cookies and Tracking Technologies"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                We use cookies and similar tracking technologies to improve your
                experience on our websites, analyze traffic, and support our
                marketing efforts.
              </p>

              <SubSection title="11.1 Types of Cookies We Use">
                <ul className="space-y-1">
                  <ListItem>
                    <strong>Essential Cookies:</strong> Necessary for the
                    website to function (e.g., session management, security)
                  </ListItem>
                  <ListItem>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our site (e.g., Google Analytics)
                  </ListItem>
                  <ListItem>
                    <strong>Marketing/Advertising Cookies:</strong> Used to
                    deliver targeted advertisements and measure campaign
                    effectiveness (e.g., Facebook Pixel, LinkedIn Insight Tag)
                  </ListItem>
                  <ListItem>
                    <strong>Performance Cookies:</strong> Help us improve site
                    performance and user experience
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="11.2 Managing Your Cookie Preferences">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  You can control cookies through your browser settings or by
                  using opt-out tools:
                </p>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Most browsers allow you to block or delete cookies
                  </ListItem>
                  <ListItem>
                    You can opt out of Google Analytics using the Google
                    Analytics Opt-Out Browser Add-on
                  </ListItem>
                  <ListItem>
                    Use &quot;Do Not Track&quot; (DNT) settings in your browser
                  </ListItem>
                </ul>
                <p className="font-sans text-sm text-[#333333]/70 italic">
                  Note: Disabling certain cookies may limit some website
                  functionality.
                </p>
              </SubSection>
            </Section>

            <Section id="security" number="12" title="Data Security">
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                We implement appropriate technical and organizational security
                measures to protect your personal data against unauthorized
                access, loss, misuse, alteration, or destruction.
              </p>

              <SubSection title="12.1 Security Measures">
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Encryption of data in transit (SSL/TLS protocols)
                  </ListItem>
                  <ListItem>
                    Secure servers with access controls and authentication
                  </ListItem>
                  <ListItem>Regular security assessments and updates</ListItem>
                  <ListItem>
                    Restricted data access limited to authorized personnel on a
                    need-to-know basis
                  </ListItem>
                  <ListItem>
                    Use of trusted, security-vetted third-party vendors
                  </ListItem>
                  <ListItem>
                    Employee training on data protection and privacy practices
                  </ListItem>
                </ul>
                <p className="font-sans text-sm text-[#333333]/70 italic">
                  However, please note that no method of transmission over the
                  internet or electronic storage is 100% secure. While we strive
                  to protect your data, we cannot guarantee absolute security.
                </p>
              </SubSection>
            </Section>

            <Section
              id="data-breach"
              number="13"
              title="Data Breach Notification"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                Under India&apos;s DPDPA, we are required to report personal
                data breaches to the Data Protection Board of India and to
                affected individuals.
              </p>
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                A data breach means any unauthorized processing, accidental
                disclosure, acquisition, sharing, use, alteration, destruction,
                or loss of access to personal data that compromises its
                confidentiality, integrity, or availability.
              </p>
              <ImportantBox title="Notification Timeline">
                We will notify the Data Protection Board of India and affected
                individuals within 72 hours of becoming aware of a breach,
                providing details such as:
              </ImportantBox>
              <ul className="space-y-1">
                <ListItem>Nature and extent of the breach</ListItem>
                <ListItem>Categories of personal data affected</ListItem>
                <ListItem>Timing and location of the breach</ListItem>
                <ListItem>Potential consequences and impact</ListItem>
                <ListItem>Measures taken to mitigate harm</ListItem>
              </ul>
            </Section>

            <Section
              id="speaker-terms"
              number="14"
              title="Speaker-Specific Terms"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                By submitting a proposal or speaking at UXINDIA 2026, you
                consent to the following:
              </p>

              <SubSection title="14.1 Use of Speaker Information">
                <ul className="space-y-1">
                  <ListItem>
                    Your name, biography, professional profile, and headshot may
                    be published on our website, event programs, and promotional
                    materials
                  </ListItem>
                  <ListItem>
                    Your presentation materials, slides, and content may be
                    shared with attendees and used for educational purposes
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="14.2 Recording and Publication">
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Sessions may be recorded (video and/or audio)
                  </ListItem>
                  <ListItem>
                    Recordings may be published for promotional, archival, and
                    educational use on our website, social media channels, and
                    third-party platforms (e.g., YouTube)
                  </ListItem>
                  <ListItem>
                    Professional photos of your session may be taken and used in
                    marketing materials
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  If you do not wish to be recorded or have specific concerns,
                  please contact us in advance at{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] hover:underline"
                  >
                    team@umo.design
                  </a>
                  .
                </p>
              </SubSection>
            </Section>

            <Section
              id="sponsor-terms"
              number="15"
              title="Sponsor and Partner Data Usage"
            >
              <ImportantBox title="Important">
                Sponsors and partners are prohibited from using attendee data
                for unsolicited marketing without your explicit consent.
              </ImportantBox>

              <SubSection title="15.1 What Sponsors Receive">
                <ul className="space-y-1">
                  <ListItem>
                    <strong>By default (without your consent):</strong>{" "}
                    Aggregated, anonymized analytics and insights about event
                    attendance and engagement
                  </ListItem>
                  <ListItem>
                    <strong>With your explicit opt-in consent:</strong> Your
                    name, organization, email, and professional details may be
                    shared with sponsors you choose to engage with
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="15.2 Badge Scanning and Lead Retrieval">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  If sponsors use badge scanning technology (such as RFID or QR
                  codes) at their booths:
                </p>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    You will be informed before your badge is scanned
                  </ListItem>
                  <ListItem>
                    Your consent will be obtained at the point of scanning
                  </ListItem>
                  <ListItem>
                    You can decline to have your badge scanned
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Sponsors who receive your data through badge scanning or
                  opt-in are required to comply with applicable privacy laws and
                  are prohibited from using your information for purposes beyond
                  their stated engagement with you.
                </p>
              </SubSection>
            </Section>

            <Section
              id="media-consent"
              number="16"
              title="Media, Photography, and Recording Consent"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                By attending UXINDIA 2026 events, you acknowledge that:
              </p>
              <ul className="space-y-1 mb-6">
                <ListItem>
                  Photos, videos, and audio recordings may be captured during
                  the event
                </ListItem>
                <ListItem>
                  You may appear in photographs, videos, or livestreams of event
                  sessions, networking areas, or other conference spaces
                </ListItem>
                <ListItem>
                  UXINDIA may use such media for marketing, promotional, social
                  media, and archival purposes
                </ListItem>
              </ul>
              <ImportantBox title="Opting Out">
                If you do not wish to be photographed or recorded, please
                contact us in advance at{" "}
                <a
                  href="mailto:team@umo.design"
                  className="text-[#E85520] hover:underline"
                >
                  team@umo.design
                </a>
                . We will make reasonable efforts to accommodate your request,
                though we cannot guarantee that you will not incidentally appear
                in group photos or session recordings.
              </ImportantBox>
            </Section>

            <Section
              id="children"
              number="17"
              title="Children's Privacy and Age Restrictions"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                UXINDIA events are intended for individuals aged 18 and above.
                We do not knowingly collect personal data from individuals under
                the age of 18 without parental or guardian consent.
              </p>
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                Under India&apos;s DPDPA, individuals under the age of 18 are
                considered children. If you are under 18, you must have your
                parent or guardian&apos;s permission to participate in our
                events or provide personal data.
              </p>
              <p className="font-sans text-base text-[#333333] leading-relaxed">
                If we learn that we have inadvertently collected data from a
                minor without proper consent, we will take steps to delete such
                information as soon as possible.
              </p>
            </Section>

            <Section
              id="contact"
              number="18"
              title="Contact Us and Grievance Redressal"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                For any privacy-related questions, concerns, or requests to
                exercise your rights, please contact us:
              </p>
              <div className="bg-[#0D0D0D] text-white p-8 rounded-3xl">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                  }}
                >
                  Get in Touch
                </h3>
                <div className="space-y-3 font-sans text-base mb-6">
                  <p className="flex items-center gap-3">
                    <span className="text-[#E85520]">Email:</span>
                    <a
                      href="mailto:team@umo.design"
                      className="text-white hover:text-[#E85520] transition-colors"
                    >
                      team@umo.design
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#E85520]">Organization:</span>
                    <span>UMO Design Foundation</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#E85520]">Address:</span>
                    <span>Hyderabad, Telangana, India</span>
                  </p>
                </div>
                <p className="font-sans text-sm text-white/70">
                  We are committed to resolving any privacy concerns promptly
                  and will respond to your inquiry within a reasonable
                  timeframe, typically within 30 days.
                </p>
              </div>
            </Section>

            <Section
              id="governing-law"
              number="19"
              title="Governing Law and Jurisdiction"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                This Privacy Policy shall be governed by and construed in
                accordance with the laws of India, including the Digital
                Personal Data Protection Act, 2023, the Information Technology
                Act, 2000, and other applicable privacy and data protection
                regulations.
              </p>
              <ImportantBox title="Exclusive Jurisdiction">
                Any disputes arising from or relating to this Privacy Policy or
                our data processing practices shall be subject to the exclusive
                jurisdiction of the courts in Hyderabad, Telangana, India.
              </ImportantBox>
              <p className="font-sans text-base text-[#333333] leading-relaxed">
                For international participants, this choice of jurisdiction does
                not affect your rights under the privacy laws of your home
                country, including the GDPR for EU/EEA residents.
              </p>
            </Section>

            <Section
              id="updates"
              number="20"
              title="Updates to This Privacy Policy"
            >
              <p className="font-sans text-base text-[#333333] leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or operational
                needs.
              </p>
              <SubSection title="Notification of Changes">
                <p className="font-sans text-base text-[#333333] leading-relaxed mb-4">
                  Any material changes will be:
                </p>
                <ul className="space-y-1 mb-4">
                  <ListItem>
                    Posted on this page with an updated &quot;Last Updated&quot;
                    date
                  </ListItem>
                  <ListItem>
                    Communicated via email to registered users (where
                    appropriate)
                  </ListItem>
                  <ListItem>
                    Announced on our website and social media channels
                  </ListItem>
                </ul>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we protect your data.
                </p>
              </SubSection>
            </Section>

            {/* Footer Note */}
            <AnimatedSection delay={200}>
              <div className="text-center mt-16 pt-12 border-t border-[#0D0D0D]/10">
                <p className="font-sans text-sm text-[#333333]/60 italic mb-2">
                  Thank you for trusting UXINDIA with your personal information.
                </p>
                <p className="font-sans text-sm font-semibold text-[#0D0D0D]">
                  UXINDIA 2026 | Design Leadership Week
                </p>
                <p className="font-sans text-xs text-[#333333]/50 mt-1">
                  Organized by UMO Design Foundation | Hyderabad, India
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
