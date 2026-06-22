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

// ─── color palette (mirrors SpeakersGrid) ────────────────────────────────────

const SPEAKER_COLORS = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

function getAccentColor(colorIndex?: number) {
  return SPEAKER_COLORS[(colorIndex ?? 0) % SPEAKER_COLORS.length];
}

// ─── helpers: dark theme ──────────────────────────────────────────────────────

function DarkSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-3">
      {children}
    </p>
  );
}

function DarkDivider() {
  return <hr className="border-white/8 my-10 md:my-12" />;
}

// ─── helpers: light theme ─────────────────────────────────────────────────────

function LightSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-[#0D0D0D]/40 mb-3">
      {children}
    </p>
  );
}

function LightDivider() {
  return <hr className="border-[#0D0D0D]/10 my-10 md:my-12" />;
}

// ─── chips ────────────────────────────────────────────────────────────────────

function EventChip({ event, light }: { event: "leadership" | "rising"; light?: boolean }) {
  const map: Record<string, { label: string; dark: string; lightCls: string }> = {
    leadership: { label: "Leadership Summit", dark: "bg-[#1D5078] text-white", lightCls: "bg-[#1D5078] text-white" },
    rising: { label: "Rising Leaders Forum", dark: "bg-[#1A7A6E] text-white", lightCls: "bg-[#1A7A6E] text-white" },
  };
  const { label, dark, lightCls } = map[event];
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${light ? lightCls : dark}`}>
      {label}
    </span>
  );
}

function TypeChip({ label, light }: { label: string; light?: boolean }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide bg-[#E85520] text-white`}>
      {label}
    </span>
  );
}

function TrackChip({ label, light }: { label: string; light?: boolean }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${light ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/60 border border-[#0D0D0D]/10" : "bg-white/10 text-white/70 border border-white/10"}`}>
      {label}
    </span>
  );
}

// ─── datetime row ─────────────────────────────────────────────────────────────

function DateTimeRow({ date, time, endTime, light }: { date?: string; time?: string; endTime?: string; light?: boolean }) {
  if (!date && !time) return null;
  const cls = light ? "text-[#0D0D0D]/50" : "text-white/50";
  return (
    <div className={`flex items-center gap-3 font-sans text-sm ${cls}`}>
      {date && (
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {date}
        </span>
      )}
      {time && (
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          {time}{endTime ? ` – ${endTime}` : ""}
        </span>
      )}
    </div>
  );
}

// ─── bullet list helper ───────────────────────────────────────────────────────

function BulletList({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-2.5 font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}>
          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#E85520]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── talk block ───────────────────────────────────────────────────────────────

type TalkData = NonNullable<NonNullable<ReturnType<typeof getSpeakerBySlug>>["events"]>["leadership"];

function TalkBlock({ event, talk, light }: { event: "leadership" | "rising"; talk: TalkData; light?: boolean }) {
  if (!talk) return null;
  const hasAny = talk.type || talk.track || talk.title || talk.description || talk.keyTakeaway || talk.audience;
  if (!hasAny) return null;

  const SL = light ? LightSectionLabel : DarkSectionLabel;
  const cardCls = light
    ? "rounded-2xl border border-[#0D0D0D]/10 bg-[#0D0D0D]/[0.03] p-6 md:p-8 flex flex-col gap-6"
    : "rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-6";

  return (
    <div className={cardCls}>
      <div className="flex flex-wrap gap-2 items-center">
        <EventChip event={event} light={light} />
        {talk.type && <TypeChip label={talk.type} light={light} />}
        {talk.track && <TrackChip label={talk.track} light={light} />}
      </div>

      <DateTimeRow date={talk.date} time={talk.time} endTime={talk.endTime} light={light} />

      {talk.title && (
        <h3 className={`font-leadership text-2xl md:text-4xl leading-tight ${light ? "text-[#0D0D0D]" : "text-white"}`}>
          {talk.title}
        </h3>
      )}

      {talk.description && (
        <div>
          <SL>About this talk</SL>
          <p className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}>{talk.description}</p>
        </div>
      )}

      {talk.keyTakeaway && (Array.isArray(talk.keyTakeaway) ? talk.keyTakeaway.length > 0 : !!talk.keyTakeaway) && (
        <div>
          <SL>Key takeaway</SL>
          {Array.isArray(talk.keyTakeaway)
            ? <BulletList items={talk.keyTakeaway} light={light} />
            : <p className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}>{talk.keyTakeaway}</p>}
        </div>
      )}

      {talk.audience && (Array.isArray(talk.audience) ? talk.audience.length > 0 : !!talk.audience) && (
        <div>
          <SL>Who should attend</SL>
          {Array.isArray(talk.audience)
            ? <BulletList items={talk.audience} light={light} />
            : <p className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}>{talk.audience}</p>}
        </div>
      )}
    </div>
  );
}

// ─── social icons ─────────────────────────────────────────────────────────────

function SocialLinks({ linkedin, twitter, light }: { linkedin?: string; twitter?: string; light?: boolean }) {
  const btnCls = light
    ? "flex items-center justify-center w-10 h-10 rounded-full bg-[#0D0D0D]/8 hover:bg-[#0D0D0D]/15 transition-colors"
    : "flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 transition-colors";
  const iconCls = light ? "text-[#0D0D0D]" : "text-white";
  if (!linkedin && !twitter) return null;
  return (
    <div className="flex gap-2.5 mt-1">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={btnCls}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={iconCls}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className={btnCls}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className={iconCls}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
        </a>
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

  const hasLeadershipTalk = !!(speaker.events?.leadership && Object.values(speaker.events.leadership).some(Boolean));
  const hasRisingTalk = !!(speaker.events?.rising && Object.values(speaker.events.rising).some(Boolean));
  const hasTalks = hasLeadershipTalk || hasRisingTalk;

  // Theme: light only if the speaker has NO leadership talk (Rising-only)
  const isLight = hasRisingTalk && !hasLeadershipTalk;
  const accentColor = getAccentColor(speaker.colorIndex);

  const bg = isLight ? "bg-[#F5F0E8]" : "bg-[#0D0D0D]";
  const SL = isLight ? LightSectionLabel : DarkSectionLabel;
  const Div = isLight ? LightDivider : DarkDivider;
  const backCls = isLight
    ? "inline-flex items-center gap-1.5 font-sans text-sm text-[#0D0D0D]/40 hover:text-[#0D0D0D] transition-colors mb-12"
    : "inline-flex items-center gap-1.5 font-sans text-sm text-white/40 hover:text-white transition-colors mb-12";
  const nameCls = isLight ? "text-[#0D0D0D]" : "text-white";
  const roleCls = isLight ? "text-[#0D0D0D]/70" : "text-white/80";
  const bioCls = isLight ? "text-[#0D0D0D]/60" : "text-white/60";

  return (
    <div className={`${bg} min-h-screen`}>
      <Nav />

      <main className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24">

        {/* Back */}
        <Link href="/leadership-summit" className={backCls}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        {/* ── Profile hero ── */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">

          {/* Photo — colorful card accent for Rising, plain for Leadership */}
          <div
            className="shrink-0 w-44 h-52 md:w-64 md:h-80 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: isLight ? accentColor : "#1F1F1F",
              boxShadow: isLight ? `0 12px 40px ${accentColor}40` : "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={speaker.image || `/placeholder.svg?height=400&width=400`}
              alt={speaker.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-4 md:py-4 flex-1">
            <h1 className={`font-leadership text-5xl md:text-7xl leading-[0.9] tracking-tight text-balance ${nameCls}`}>
              {speaker.name}
            </h1>

            <div className="flex flex-col gap-1">
              <p className={`font-sans text-base md:text-lg font-semibold ${roleCls}`}>
                {speaker.role}{speaker.company ? `, ${speaker.company}` : ""}
              </p>
              {speaker.talkType && (
                <p className="font-sans text-sm text-[#E85520] font-medium">{speaker.talkType}</p>
              )}
            </div>

            <SocialLinks linkedin={speaker.linkedin} twitter={speaker.twitter} light={isLight} />
          </div>
        </div>

        <Div />

        {/* Bio */}
        {speaker.bio && (
          <>
            <div className="max-w-4xl">
              <SL>About</SL>
              <p className={`font-sans text-base md:text-lg leading-relaxed whitespace-pre-line ${bioCls}`}>
                {speaker.bio}
              </p>
            </div>
            <Div />
          </>
        )}

        {/* Talk details */}
        {hasTalks && (
          <div className="flex flex-col gap-4">
            <SL>Talk details</SL>
            {hasLeadershipTalk && (
              <TalkBlock event="leadership" talk={speaker.events!.leadership} light={false} />
            )}
            {hasRisingTalk && (
              <TalkBlock event="rising" talk={speaker.events!.rising} light={isLight} />
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
