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
    description:
      speaker.bio ||
      `${speaker.name}, ${speaker.role}${speaker.company ? ` at ${speaker.company}` : ""} — Speaker at UXINDIA 2026.`,
  };
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function TypeChip({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide bg-[#E85520] text-white">
      {label}
    </span>
  );
}

function TrackChip({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide bg-white/10 text-white/70 border border-white/10">
      {label}
    </span>
  );
}

function EventChip({ event }: { event: "leadership" | "rising" }) {
  const map: Record<string, { label: string; cls: string }> = {
    leadership: { label: "Leadership Summit", cls: "bg-[#1D5078] text-white" },
    rising: { label: "Rising Leaders Forum", cls: "bg-[#1A7A6E] text-white" },
  };
  const { label, cls } = map[event];
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${cls}`}>
      {label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-white/8 my-10 md:my-12" />;
}

// ─── talk block ───────────────────────────────────────────────────────────────

function TalkBlock({
  event,
  talk,
}: {
  event: "leadership" | "rising";
  talk: NonNullable<NonNullable<ReturnType<typeof getSpeakerBySlug>>["events"]>["leadership"];
}) {
  if (!talk) return null;
  const hasAny = talk.type || talk.track || talk.title || talk.description || talk.keyTakeaway || talk.audience;
  if (!hasAny) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-6">
      {/* chips */}
      <div className="flex flex-wrap gap-2 items-center">
        <EventChip event={event} />
        {talk.type && <TypeChip label={talk.type} />}
        {talk.track && <TrackChip label={talk.track} />}
      </div>

      {talk.title && (
        <h3 className="font-leadership text-2xl md:text-4xl text-white leading-tight">
          {talk.title}
        </h3>
      )}

      {talk.description && (
        <div>
          <SectionLabel>About this talk</SectionLabel>
          <p className="font-sans text-base text-white/60 leading-relaxed">{talk.description}</p>
        </div>
      )}

      {talk.keyTakeaway && (
        <div>
          <SectionLabel>Key takeaway</SectionLabel>
          <p className="font-sans text-base text-white/60 leading-relaxed">{talk.keyTakeaway}</p>
        </div>
      )}

      {talk.audience && (
        <div>
          <SectionLabel>Who should attend</SectionLabel>
          <p className="font-sans text-base text-white/60 leading-relaxed">{talk.audience}</p>
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
  const hasLeadershipTalk = !!(
    speaker.events?.leadership && Object.values(speaker.events.leadership).some(Boolean)
  );
  const hasRisingTalk = !!(
    speaker.events?.rising && Object.values(speaker.events.rising).some(Boolean)
  );
  const hasTalks = hasLeadershipTalk || hasRisingTalk;

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Nav />

      <main className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24">

        {/* Back */}
        <Link
          href="javascript:history.back()"
          className="inline-flex items-center gap-1.5 font-sans text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        {/* ── Profile hero ── */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">

          {/* Photo */}
          <div className="shrink-0 w-44 h-52 md:w-64 md:h-80 rounded-2xl overflow-hidden bg-white/5">
            <img
              src={speaker.image || `/placeholder.svg?height=400&width=400`}
              alt={speaker.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-4 md:py-4 flex-1">
            <h1 className="font-leadership text-5xl md:text-7xl text-white leading-[0.9] tracking-tight text-balance">
              {speaker.name}
            </h1>

            <div className="flex flex-col gap-1">
              <p className="font-sans text-base md:text-lg font-semibold text-white/80">
                {speaker.role}
                {speaker.company ? `, ${speaker.company}` : ""}
              </p>
              {speaker.talkType && (
                <p className="font-sans text-sm text-[#E85520] font-medium">{speaker.talkType}</p>
              )}
            </div>

            {/* Social links */}
            {hasSocials && (
              <div className="flex gap-2.5 mt-1">
                {hasLinkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
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
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 transition-colors"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-white">
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
              <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed whitespace-pre-line">
                {speaker.bio}
              </p>
            </div>
            <Divider />
          </>
        )}

        {/* Talk details */}
        {hasTalks && (
          <div className="flex flex-col gap-4">
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
