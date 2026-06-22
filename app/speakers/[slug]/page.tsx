import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import { getSpeakerBySlug, allSpeakers, getSpeakerSlug } from "@/data/all-speakers";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allSpeakers.map((speaker) => ({
    slug: getSpeakerSlug(speaker),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return {};
  return {
    title: `${speaker.name} — UXINDIA 2026`,
    description: speaker.bio || `${speaker.name}, ${speaker.role}${speaker.company ? ` at ${speaker.company}` : ""} — Speaker at UXINDIA 2026.`,
  };
}

// ─── small helpers ────────────────────────────────────────────────────────────

function Chip({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${
        accent
          ? "bg-[#E85520] text-white"
          : "bg-[#0D0D0D]/10 text-[#0D0D0D]/70"
      }`}
    >
      {label}
    </span>
  );
}

function EventChip({ event }: { event: "leadership" | "rising" }) {
  const labels: Record<string, string> = {
    leadership: "Leadership Summit",
    rising: "Rising Leaders Forum",
  };
  const colors: Record<string, string> = {
    leadership: "bg-[#1D5078] text-white",
    rising: "bg-[#1A7A6E] text-white",
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${colors[event]}`}>
      {labels[event]}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-[#0D0D0D]/40 mb-2">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-[#0D0D0D]/10 my-8 md:my-10" />;
}

// ─── talk detail block ────────────────────────────────────────────────────────

function TalkBlock({
  event,
  talk,
}: {
  event: "leadership" | "rising";
  talk: NonNullable<NonNullable<ReturnType<typeof getSpeakerBySlug>>["events"]>["leadership"];
}) {
  if (!talk) return null;

  const hasAny =
    talk.type || talk.track || talk.title || talk.description || talk.keyTakeaway || talk.audience;
  if (!hasAny) return null;

  return (
    <div className="rounded-2xl border border-[#0D0D0D]/10 p-6 md:p-8 flex flex-col gap-5">
      {/* chips row */}
      <div className="flex flex-wrap gap-2 items-center">
        <EventChip event={event} />
        {talk.type && <Chip label={talk.type} accent />}
        {talk.track && <Chip label={talk.track} />}
      </div>

      {talk.title && (
        <h3 className="font-leadership text-2xl md:text-3xl text-[#0D0D0D] leading-tight">
          {talk.title}
        </h3>
      )}

      {talk.description && (
        <div>
          <SectionLabel>About this talk</SectionLabel>
          <p className="font-sans text-base text-[#0D0D0D]/70 leading-relaxed">{talk.description}</p>
        </div>
      )}

      {talk.keyTakeaway && (
        <div>
          <SectionLabel>Key takeaway</SectionLabel>
          <p className="font-sans text-base text-[#0D0D0D]/70 leading-relaxed">{talk.keyTakeaway}</p>
        </div>
      )}

      {talk.audience && (
        <div>
          <SectionLabel>Who should attend</SectionLabel>
          <p className="font-sans text-base text-[#0D0D0D]/70 leading-relaxed">{talk.audience}</p>
        </div>
      )}
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) notFound();

  const hasLinkedin = !!speaker.linkedin;
  const hasTwitter = !!speaker.twitter;
  const hasSocials = hasLinkedin || hasTwitter;
  const hasLeadershipTalk = !!(speaker.events?.leadership && Object.values(speaker.events.leadership).some(Boolean));
  const hasRisingTalk = !!(speaker.events?.rising && Object.values(speaker.events.rising).some(Boolean));
  const hasTalks = hasLeadershipTalk || hasRisingTalk;

  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      <Nav />

      <main className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-sm text-[#0D0D0D]/50 hover:text-[#0D0D0D] transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        {/* ── Profile hero ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
          {/* Photo */}
          <div className="shrink-0 w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden bg-[#0D0D0D]/10">
            <img
              src={speaker.image || `/placeholder.svg?height=400&width=400`}
              alt={speaker.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name / role / socials */}
          <div className="flex flex-col gap-3 pt-1">
            {/* UXINDIA logo */}
            <img src="/logo.svg" alt="UXINDIA 2026" className="h-5 w-auto opacity-40 mb-1" />

            <h1 className="font-leadership text-4xl md:text-6xl text-[#0D0D0D] leading-[0.92] tracking-tight">
              {speaker.name}
            </h1>

            <div className="flex flex-col gap-0.5">
              <p className="font-sans text-base md:text-lg font-semibold text-[#0D0D0D]">
                {speaker.role}
                {speaker.company ? `, ${speaker.company}` : ""}
              </p>
              {speaker.talkType && (
                <p className="font-sans text-sm text-[#E85520] font-medium">{speaker.talkType}</p>
              )}
            </div>

            {/* Social links */}
            {hasSocials && (
              <div className="flex gap-3 mt-1">
                {hasLinkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/8 hover:bg-[#0D0D0D]/15 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0D0D0D]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
                {hasTwitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D0D0D]/8 hover:bg-[#0D0D0D]/15 transition-colors"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#0D0D0D]">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <Divider />

        {/* Bio */}
        {speaker.bio && (
          <>
            <div className="max-w-3xl">
              <SectionLabel>About</SectionLabel>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed whitespace-pre-line">
                {speaker.bio}
              </p>
            </div>
            <Divider />
          </>
        )}

        {/* Talk details */}
        {hasTalks && (
          <div className="flex flex-col gap-6">
            <SectionLabel>Talk details</SectionLabel>
            {hasLeadershipTalk && (
              <TalkBlock event="leadership" talk={speaker.events!.leadership} />
            )}
            {hasRisingTalk && (
              <TalkBlock event="rising" talk={speaker.events!.rising} />
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
