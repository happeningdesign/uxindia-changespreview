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
}: {
  children: React.ReactNode;
  className?: string;
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

function ListItem({
  children,
  icon = "arrow",
}: {
  children: React.ReactNode;
  icon?: "arrow" | "check";
}) {
  return (
    <li className="flex gap-3 mb-4">
      <span className="text-[#E85520] font-semibold mt-0.5 shrink-0">
        {icon === "arrow" ? "→" : "✓"}
      </span>
      <span className="font-sans text-base text-[#333333] leading-relaxed">
        {children}
      </span>
    </li>
  );
}

function BehaviorCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#0D0D0D]/5 p-5 rounded-xl border-l-3 border-[#E85520] hover:bg-[#0D0D0D]/8 transition-colors">
      <h4 className="font-sans font-semibold text-[#E85520] mb-2">{title}</h4>
      <p className="font-sans text-sm text-[#333333] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Callout({
  type,
  title,
  children,
}: {
  type: "warning" | "success" | "accent";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    warning: "bg-amber-50 border-amber-400",
    success: "bg-emerald-50 border-emerald-500",
    accent: "bg-orange-50 border-[#E85520]",
  };

  return (
    <div className={`${colors[type]} border-l-4 p-5 rounded-r-xl my-6`}>
      <h4 className="font-sans font-semibold text-[#0D0D0D] mb-2">{title}</h4>
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
        Need Help or Want to Report an Incident?
      </h3>
      <p className="font-sans text-white/70 mb-8">
        UXINDIA is here to support you. Please don&apos;t hesitate to reach out
        if you experience or witness any violations of this Code of Conduct.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            Code of Conduct Email
          </p>
          <a
            href="mailto:team@umo.design"
            className="font-sans text-white hover:text-[#E85520] transition-colors"
          >
            team@umo.design
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            24/7 Hotline
          </p>
          <a
            href="tel:+918096204373"
            className="font-sans text-white hover:text-[#E85520] transition-colors"
          >
            +91-8096204373
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            General Inquiries
          </p>
          <a
            href="mailto:team@umo.design"
            className="font-sans text-white hover:text-[#E85520] transition-colors"
          >
            team@umo.design
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6">
        <p className="font-sans text-sm text-white/60">
          <strong className="text-white">Emergency Services:</strong>
          <br />
          Police: Dial 100 | Ambulance: Dial 108 | Women&apos;s Helpline: 1091
        </p>
      </div>
    </div>
  );
}

export default function CodeOfConductPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Nav forceSolid />
      <main className="min-h-screen bg-[#F5F0E8]">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] overflow-hidden bg-[#0D0D0D] pt-[100px]"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 w-full h-full"
          >
            <Image
              src="/uxindia-audience.jpg"
              alt="UXINDIA conference community"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          </motion.div>

          <div className="relative z-10 min-h-[calc(70vh-100px)] flex flex-col justify-end pb-16 md:pb-24 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4"
              >
                UXINDIA 2026
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Code of Conduct
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Creating a safe, inclusive, and respectful environment for all
                participants at Asia&apos;s definitive design leadership
                platform.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-sm text-white/50 mt-6"
              >
                22–27 September 2026 · Bengaluru, India
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6">
            {/* Introduction */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-[#E85520]/10 to-[#E85520]/5 border-l-4 border-[#E85520] p-6 md:p-8 rounded-r-2xl mb-12">
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-4">
                  <strong className="text-[#E85520]">
                    UXINDIA is committed to providing a welcoming, inclusive,
                    safe, and respectful environment for all participants.
                  </strong>{" "}
                  This Code of Conduct applies to all attendees, speakers,
                  sponsors, partners, volunteers, staff, and anyone involved in
                  or affected by UXINDIA 2026, whether participating in person
                  or virtually.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  By participating in UXINDIA 2026, you agree to abide by this
                  Code of Conduct and accept that violations may result in
                  consequences as outlined below.
                </p>
              </div>
            </AnimatedSection>

            {/* Section 1: Scope and Applicability */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="01" title="Scope and Applicability" />

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4 mt-8">
                Who This Code Applies To
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                This Code of Conduct applies to all individuals associated with
                UXINDIA 2026, including but not limited to:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  <strong>Attendees:</strong> All registered participants
                  attending the Leadership Summit and Rising Leaders Forum
                </ListItem>
                <ListItem>
                  <strong>Speakers and Presenters:</strong> All individuals
                  delivering talks, workshops, or presentations
                </ListItem>
                <ListItem>
                  <strong>Sponsors and Partners:</strong> Representatives from
                  sponsoring organizations and partner companies
                </ListItem>
                <ListItem>
                  <strong>Exhibitors and Vendors:</strong> All booth staff,
                  service providers, and contractors
                </ListItem>
                <ListItem>
                  <strong>Volunteers and Staff:</strong> All UXINDIA organizers,
                  volunteers, and event staff
                </ListItem>
                <ListItem>
                  <strong>Media and Press:</strong> Journalists, photographers,
                  and content creators covering the event
                </ListItem>
                <ListItem>
                  <strong>Virtual Participants:</strong> All individuals
                  participating through online platforms
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Where This Code Applies
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                This Code of Conduct is in effect at all UXINDIA 2026 venues and
                activities, including:
              </p>
              <ul className="list-none">
                <ListItem>
                  All conference venues (The Leela Bhartiya City, Bengaluru, and
                  other designated locations)
                </ListItem>
                <ListItem>
                  Official conference sessions, workshops, and presentations
                </ListItem>
                <ListItem>
                  Social events, networking sessions, and after-parties
                  organized or sponsored by UXINDIA
                </ListItem>
                <ListItem>
                  Virtual event platforms, chat rooms, and online discussion
                  forums
                </ListItem>
                <ListItem>
                  Email communications, social media interactions related to the
                  conference
                </ListItem>
                <ListItem>
                  Transportation provided by or arranged through UXINDIA
                </ListItem>
                <ListItem>
                  Hotel accommodations during the conference period
                </ListItem>
                <ListItem>
                  Any location where participants gather in relation to UXINDIA
                  2026
                </ListItem>
              </ul>
            </AnimatedSection>

            {/* Section 2: Expected Behavior */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="02" title="Expected Behavior" />
              <p className="font-sans text-base text-[#333333] mb-6">
                All participants are expected to demonstrate professionalism,
                respect, and integrity. We expect everyone to:
              </p>
              <ul className="list-none mb-6">
                <ListItem>
                  <strong>Treat everyone with respect and dignity</strong>,
                  regardless of their background, identity, or position
                </ListItem>
                <ListItem>
                  <strong>Embrace diversity and inclusivity</strong>,
                  recognizing and valuing different perspectives, experiences,
                  and cultural backgrounds
                </ListItem>
                <ListItem>
                  <strong>Use welcoming and inclusive language</strong> in all
                  communications, both verbal and written
                </ListItem>
                <ListItem>
                  <strong>Listen actively and engage constructively</strong> in
                  discussions and feedback
                </ListItem>
                <ListItem>
                  <strong>Respect intellectual property</strong>, giving credit
                  where due and avoiding plagiarism
                </ListItem>
                <ListItem>
                  <strong>Respect privacy and personal boundaries</strong> of
                  other participants
                </ListItem>
                <ListItem>
                  <strong>Be mindful of your surroundings</strong> and
                  considerate of others in shared spaces
                </ListItem>
                <ListItem>
                  <strong>Comply with venue rules</strong>, local laws, and
                  health and safety protocols
                </ListItem>
                <ListItem>
                  <strong>Support and encourage peers</strong>, fostering a
                  collaborative and positive environment
                </ListItem>
                <ListItem>
                  <strong>Be punctual and prepared</strong> for sessions and
                  commitments
                </ListItem>
                <ListItem>
                  <strong>Ask for consent</strong> before photographing,
                  recording, or sharing others&apos; information
                </ListItem>
                <ListItem>
                  <strong>Respect the decisions and instructions</strong> of
                  conference organizers and security personnel
                </ListItem>
              </ul>

              <Callout type="success" title="International Participants">
                <p>
                  We welcome participants from around the world. Please be
                  culturally sensitive and aware that communication styles,
                  norms, and expectations may differ across cultures. When in
                  doubt, ask respectfully and listen actively.
                </p>
              </Callout>
            </AnimatedSection>

            {/* Section 3: Prohibited Behavior */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="03" title="Prohibited Behavior" />
              <p className="font-sans text-base text-[#333333] mb-6">
                UXINDIA has zero tolerance for harassment, discrimination, and
                disruptive behavior. The following behaviors are strictly
                prohibited:
              </p>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Harassment and Discrimination
              </h3>
              <p className="font-sans text-base text-[#333333] mb-6">
                Harassment includes but is not limited to any unwelcome conduct
                based on:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <BehaviorCard
                  title="Sexual Harassment"
                  description="Unwelcome sexual advances, requests for sexual favors, sexually suggestive comments or jokes, display of sexual imagery, inappropriate physical contact, or any conduct of a sexual nature"
                />
                <BehaviorCard
                  title="Verbal Harassment"
                  description="Offensive comments, slurs, epithets, derogatory remarks, intimidation, stalking, unwanted following, threats, or aggressive language"
                />
                <BehaviorCard
                  title="Visual Harassment"
                  description="Inappropriate images, gestures, or body language; display of offensive materials; intrusive photography or recording without consent"
                />
                <BehaviorCard
                  title="Physical Harassment"
                  description="Unwanted physical contact, assault, battery, or any form of physical intimidation"
                />
                <BehaviorCard
                  title="Psychological Harassment"
                  description="Bullying, intimidation, humiliation, exclusion, spreading malicious rumors, or creating a hostile environment"
                />
                <BehaviorCard
                  title="Cyber Harassment"
                  description="Online harassment via email, social media, chat platforms, or any digital communication channel"
                />
              </div>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Discrimination
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                Discrimination based on any of the following protected
                characteristics is strictly prohibited:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  Gender, gender identity, gender expression, or sexual
                  orientation
                </ListItem>
                <ListItem>
                  Race, ethnicity, nationality, or national origin
                </ListItem>
                <ListItem>Religion, caste, or belief system</ListItem>
                <ListItem>Age</ListItem>
                <ListItem>
                  Disability, neurodiversity, or medical condition
                </ListItem>
                <ListItem>
                  Physical appearance, body size, or personal characteristics
                </ListItem>
                <ListItem>
                  Pregnancy, marital status, or familial status
                </ListItem>
                <ListItem>
                  Professional background, experience level, or educational
                  qualifications
                </ListItem>
                <ListItem>Socioeconomic status</ListItem>
                <ListItem>
                  Any other characteristic protected under Indian law
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Other Prohibited Conduct
              </h3>
              <ul className="list-none mb-6">
                <ListItem>
                  <strong>Violence or threats of violence</strong> against any
                  person or property
                </ListItem>
                <ListItem>
                  <strong>Disruptive behavior</strong> that interferes with
                  sessions, presentations, or others&apos; ability to
                  participate
                </ListItem>
                <ListItem>
                  <strong>Substance abuse</strong> or appearing under the
                  influence of drugs or alcohol at conference events
                </ListItem>
                <ListItem>
                  <strong>Theft, damage, or misuse</strong> of property or
                  resources
                </ListItem>
                <ListItem>
                  <strong>Unauthorized recording or distribution</strong> of
                  presentations, private conversations, or personal information
                </ListItem>
                <ListItem>
                  <strong>Solicitation or commercial promotion</strong> outside
                  designated areas without prior authorization
                </ListItem>
                <ListItem>
                  <strong>Falsification of credentials</strong> or
                  misrepresentation of affiliation
                </ListItem>
                <ListItem>
                  <strong>Retaliation</strong> against individuals who report
                  violations or participate in investigations
                </ListItem>
                <ListItem>
                  <strong>
                    Knowingly making false or malicious complaints
                  </strong>
                </ListItem>
              </ul>

              <Callout type="warning" title="Legal Context">
                <p>
                  Certain behaviors prohibited under this Code of Conduct may
                  also constitute criminal offenses under Indian law, including
                  but not limited to the{" "}
                  <strong>
                    Sexual Harassment of Women at Workplace (Prevention,
                    Prohibition and Redressal) Act, 2013
                  </strong>{" "}
                  and relevant sections of the{" "}
                  <strong>
                    Indian Penal Code (Sections 354, 354A, 354B, 354C, 354D,
                    509, and others)
                  </strong>
                  . UXINDIA reserves the right to report serious violations to
                  law enforcement authorities.
                </p>
              </Callout>
            </AnimatedSection>

            {/* Section 4: Reporting Violations */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="04" title="Reporting Violations" />

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                How to Report
              </h3>
              <p className="font-sans text-base text-[#333333] mb-6">
                If you experience or witness behavior that violates this Code of
                Conduct, please report it immediately. You have several options:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  <strong>In-Person Reporting:</strong> Identify a UXINDIA staff
                  member or volunteer (wearing purple lanyards with
                  &quot;UXINDIA Staff&quot; badges) and ask to speak with a
                  designated Code of Conduct officer. Request privacy if needed.
                </ListItem>
                <ListItem>
                  <strong>Email:</strong> Send a detailed report to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] hover:underline"
                  >
                    team@umo.design
                  </a>
                  . All emails are monitored by trained personnel.
                </ListItem>
                <ListItem>
                  <strong>Phone/WhatsApp:</strong> Contact our dedicated hotline
                  at <strong>+91-8096204373</strong> (available 24/7 during the
                  conference).
                </ListItem>
                <ListItem>
                  <strong>Emergency:</strong> In case of immediate danger or
                  criminal activity, call local emergency services (dial{" "}
                  <strong>100</strong> for police or <strong>108</strong> for
                  ambulance) and then notify UXINDIA staff.
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                What to Include in Your Report
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                When reporting an incident, please provide as much detail as
                possible:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  Your contact information (unless reporting anonymously)
                </ListItem>
                <ListItem>
                  Names and descriptions of individuals involved (if known)
                </ListItem>
                <ListItem>When and where the incident occurred</ListItem>
                <ListItem>Detailed description of what happened</ListItem>
                <ListItem>Names of witnesses (if any)</ListItem>
                <ListItem>
                  Any supporting evidence (emails, screenshots, photos, etc.)
                </ListItem>
                <ListItem>
                  Whether the incident is ongoing or if you feel in immediate
                  danger
                </ListItem>
                <ListItem>
                  Any previous incidents involving the same individual(s)
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Confidentiality and Protection
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                All reports will be handled with the utmost confidentiality.
                Only those who need to know will be informed, and information
                will be shared only to the extent necessary for investigation
                and resolution.
              </p>

              <Callout type="accent" title="Protection from Retaliation">
                <p>
                  <strong>UXINDIA strictly prohibits retaliation</strong>{" "}
                  against anyone who reports a violation in good faith or
                  participates in an investigation. Retaliation is itself a
                  serious violation of this Code of Conduct and will result in
                  immediate consequences.
                </p>
              </Callout>
            </AnimatedSection>

            {/* Section 5: Investigation and Response */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="05" title="Investigation and Response" />

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Investigation Process
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                Upon receiving a report, UXINDIA will:
              </p>
              <ol className="list-none mb-8 space-y-3">
                {[
                  "Acknowledge receipt of the report within 24 hours",
                  "Assign the matter to trained Code of Conduct officers for investigation",
                  "Conduct a thorough, fair, and impartial investigation",
                  "Interview relevant parties and witnesses",
                  "Review any available evidence",
                  "Maintain confidentiality throughout the process",
                  "Complete the investigation as promptly as possible, typically within 7-10 days for incidents during the conference",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#E85520] font-semibold shrink-0">
                      {index + 1}.
                    </span>
                    <span className="font-sans text-base text-[#333333]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Immediate Actions
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                In cases requiring immediate action for safety reasons, UXINDIA
                may take interim measures before completing a full
                investigation, including:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  Requiring individuals to stay away from each other
                </ListItem>
                <ListItem>
                  Reassigning seating or access to certain areas
                </ListItem>
                <ListItem>
                  Removing an individual from a session or event area
                </ListItem>
                <ListItem>Providing security escort</ListItem>
                <ListItem>
                  Any other measures necessary to ensure safety
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Possible Consequences
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                Violations of this Code of Conduct may result in consequences
                proportionate to the severity and circumstances of the behavior,
                including but not limited to:
              </p>
              <ul className="list-none mb-6">
                <ListItem>
                  <strong>Verbal or written warning</strong>
                </ListItem>
                <ListItem>
                  <strong>Required apology</strong> (private or public, as
                  appropriate)
                </ListItem>
                <ListItem>
                  <strong>Removal from specific sessions or activities</strong>
                </ListItem>
                <ListItem>
                  <strong>Expulsion from the conference</strong> without refund
                  of registration fees
                </ListItem>
                <ListItem>
                  <strong>Ban from future UXINDIA events</strong>
                </ListItem>
                <ListItem>
                  <strong>
                    Notification to employer or professional organization
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>Reporting to law enforcement authorities</strong> in
                  cases involving criminal conduct
                </ListItem>
                <ListItem>
                  <strong>Legal action</strong> under applicable Indian laws
                </ListItem>
              </ul>
              <p className="font-sans text-base text-[#333333]">
                Individuals asked to stop inappropriate behavior are expected to
                comply immediately. Failure to comply will result in escalated
                consequences.
              </p>
            </AnimatedSection>

            {/* Section 6: Legal Framework */}
            <AnimatedSection className="mb-16">
              <SectionTitle
                number="06"
                title="Legal Framework and Jurisdiction"
              />

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Applicable Laws
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                This Code of Conduct operates within the framework of Indian
                law, including:
              </p>
              <ul className="list-none mb-8">
                <ListItem>
                  <strong>The Constitution of India</strong> - Articles 14
                  (Right to Equality), 15 (Prohibition of Discrimination), 19
                  (Freedom of Speech with reasonable restrictions), and 21
                  (Right to Life and Personal Liberty, including the right to
                  live with dignity)
                </ListItem>
                <ListItem>
                  <strong>
                    The Sexual Harassment of Women at Workplace (Prevention,
                    Prohibition and Redressal) Act, 2013 (POSH Act)
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>Indian Penal Code, 1860</strong> - Relevant sections
                  including 294 (obscene acts), 354 (assault or criminal force
                  to woman with intent to outrage her modesty), 354A (sexual
                  harassment), 354B (assault or use of criminal force to woman
                  with intent to disrobe), 354C (voyeurism), 354D (stalking),
                  509 (word, gesture or act intended to insult the modesty of a
                  woman), and others
                </ListItem>
                <ListItem>
                  <strong>The Information Technology Act, 2000</strong> -
                  Sections relating to cyber harassment and electronic
                  communication
                </ListItem>
                <ListItem>
                  <strong>
                    The Protection of Women from Domestic Violence Act, 2005
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    The Industrial Employment (Standing Orders) Act, 1946
                  </strong>
                </ListItem>
              </ul>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Jurisdiction
              </h3>
              <p className="font-sans text-base text-[#333333] mb-8">
                Any legal disputes or matters arising from violations of this
                Code of Conduct shall be subject to the exclusive jurisdiction
                of the courts in <strong>Hyderabad, Telangana, India</strong>.
                This Code of Conduct shall be governed by and construed in
                accordance with the laws of India.
              </p>

              <h3 className="font-sans font-semibold text-xl text-[#0D0D0D] mb-4">
                Internal Complaints Committee
              </h3>
              <p className="font-sans text-base text-[#333333] mb-4">
                In accordance with the POSH Act, UXINDIA (organized by UMO
                Design Foundation) has constituted an Internal Complaints
                Committee (ICC) to address complaints of sexual harassment. The
                ICC consists of:
              </p>
              <ul className="list-none mb-4">
                <ListItem>
                  A presiding officer (senior woman employee or external expert)
                </ListItem>
                <ListItem>
                  At least two members from the organization committed to gender
                  equality
                </ListItem>
                <ListItem>
                  One external member from an NGO or association committed to
                  women&apos;s causes
                </ListItem>
              </ul>
              <p className="font-sans text-base text-[#333333]">
                The ICC operates independently and ensures fair, timely, and
                confidential handling of complaints.
              </p>
            </AnimatedSection>

            {/* Section 7: Accessibility */}
            <AnimatedSection className="mb-16">
              <SectionTitle
                number="07"
                title="Accessibility and Accommodations"
              />
              <p className="font-sans text-base text-[#333333] mb-4">
                UXINDIA is committed to ensuring that all participants can fully
                engage with the conference:
              </p>
              <ul className="list-none">
                <ListItem>
                  We provide reasonable accommodations for participants with
                  disabilities
                </ListItem>
                <ListItem>
                  Accessibility information is available at all venue entrances
                  and registration desks
                </ListItem>
                <ListItem>
                  Request accommodations or report accessibility issues to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] hover:underline"
                  >
                    team@umo.design
                  </a>
                </ListItem>
                <ListItem>
                  We respect service animals and assistive devices
                </ListItem>
                <ListItem>
                  Quiet rooms and designated rest areas are available for those
                  who need them
                </ListItem>
              </ul>
            </AnimatedSection>

            {/* Section 8: Photography */}
            <AnimatedSection className="mb-16">
              <SectionTitle
                number="08"
                title="Photography, Recording, and Media"
              />
              <ul className="list-none">
                <ListItem>
                  <strong>Official photography and videography</strong> will
                  take place throughout the conference. By attending, you
                  consent to being photographed or recorded for UXINDIA
                  promotional materials.
                </ListItem>
                <ListItem>
                  If you do not wish to be photographed, please wear a{" "}
                  <strong>&quot;No Photos&quot; lanyard</strong> available at
                  registration.
                </ListItem>
                <ListItem>
                  <strong>Personal photography</strong> is allowed in common
                  areas but requires explicit consent when photographing
                  individuals at close range.
                </ListItem>
                <ListItem>
                  <strong>Recording presentations</strong> requires speaker
                  permission. Many sessions will be officially recorded and made
                  available to attendees.
                </ListItem>
                <ListItem>
                  <strong>Livestreaming</strong> private conversations, hallway
                  interactions, or non-public sessions is prohibited.
                </ListItem>
                <ListItem>
                  Respect photographers&apos; and videographers&apos; space
                  while they are working.
                </ListItem>
              </ul>
            </AnimatedSection>

            {/* Section 9: Health and Safety */}
            <AnimatedSection className="mb-16">
              <SectionTitle number="09" title="Health and Safety" />
              <ul className="list-none">
                <ListItem>
                  Follow all venue safety protocols and emergency procedures
                </ListItem>
                <ListItem>
                  Comply with current health guidelines and regulations
                </ListItem>
                <ListItem>
                  Report any safety hazards to staff immediately
                </ListItem>
                <ListItem>
                  Respect capacity limits and designated areas
                </ListItem>
                <ListItem>
                  Do not attend if you are feeling unwell - contact us for
                  alternative arrangements
                </ListItem>
                <ListItem>
                  First aid and medical assistance are available at all venues
                </ListItem>
              </ul>
            </AnimatedSection>

            {/* Section 10: Modifications */}
            <AnimatedSection className="mb-16">
              <SectionTitle
                number="10"
                title="Modifications and Interpretation"
              />
              <p className="font-sans text-base text-[#333333] mb-4">
                UXINDIA reserves the right to amend or modify this Code of
                Conduct at any time. Changes will be communicated to all
                registered participants via email and posted on the conference
                website.
              </p>
              <p className="font-sans text-base text-[#333333] mb-4">
                The interpretation and application of this Code of Conduct is at
                the sole discretion of UXINDIA organizers, whose decisions are
                final.
              </p>
              <p className="font-sans text-base text-[#333333]">
                Questions about this Code of Conduct should be directed to{" "}
                <a
                  href="mailto:team@umo.design"
                  className="text-[#E85520] hover:underline"
                >
                  team@umo.design
                </a>
                .
              </p>
            </AnimatedSection>

            {/* Commitment Box */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-[#E85520]/10 to-[#E85520]/5 border-l-4 border-[#E85520] p-6 md:p-8 rounded-r-2xl mb-8">
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-4">
                  <strong className="text-[#E85520]">
                    By participating in UXINDIA 2026, you are helping us create
                    an environment where everyone can learn, connect, and
                    contribute to shaping the future of design.
                  </strong>
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Thank you for your commitment to making UXINDIA 2026 a safe,
                  respectful, and inspiring experience for all.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Card */}
            <AnimatedSection>
              <ContactCard />
            </AnimatedSection>

            {/* Organization Info */}
            <AnimatedSection>
              <div className="text-center mt-12 pt-8 border-t border-[#0D0D0D]/10">
                <p className="font-sans font-semibold text-[#0D0D0D] mb-2">
                  Organized by UMO Design Foundation
                </p>
                <p className="font-sans text-sm text-[#333333]/70 max-w-xl mx-auto mb-4">
                  UXINDIA is a not-for-profit venture built by, built for, and
                  sustained by its growing community of designers, enthusiasts,
                  and influencers from business, education, and governance.
                </p>
                <Link
                  href="https://www.ux-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[#E85520] hover:underline"
                >
                  www.ux-india.org
                </Link>
                <p className="font-sans text-xs text-[#333333]/50 mt-4">
                  Last Updated: April 2026 | Version 1.0
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
