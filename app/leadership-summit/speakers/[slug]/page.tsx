import { notFound } from "next/navigation";
import Link from "next/link";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

import { getSpeakerSlug } from "@/types/speaker";
import type { SpeakerTalk } from "@/types/speaker";
import { allSpeakers, getSpeakerBySlug } from "@/data/events/all-speakers";
import { createMetadata } from "@/lib/seo";
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
  const title = `${speaker.name} — UXINDIA 2026`;
  const description =
    speaker.bio ||
    `${speaker.name}, ${speaker.role}${speaker.company ? ` at ${speaker.company}` : ""} — Speaker at UXINDIA 2026 Leadership Summit.`;
  const image = speaker.ogImage || speaker.image;
  return createMetadata({ title, description, image });
}

// ─── color palette (mirrors SpeakersGrid) ────────────────────────────────────

const SPEAKER_COLORS = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

function getAccentColor(colorIndex?: number) {
  return SPEAKER_COLORS[(colorIndex ?? 0) % SPEAKER_COLORS.length];
}

// ─── helpers: dark theme ──────────────────────────────────────────────────────

function DarkSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs font-bold tracking-widest uppercase text-white/80 mb-3">
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
    <p className="font-sans text-xs font-bold tracking-widest uppercase text-[#0D0D0D]/80 mb-3">
      {children}
    </p>
  );
}

function LightDivider() {
  return <hr className="border-[#0D0D0D]/10 my-10 md:my-12" />;
}

// ─── chips ────────────────────────────────────────────────────────────────────

function EventChip({
  event,
  light,
}: {
  event: "leadership" | "rising";
  light?: boolean;
}) {
  const map: Record<string, { label: string; dark: string; lightCls: string }> =
    {
      leadership: {
        label: "Leadership Summit",
        dark: "bg-[#1D5078] text-white",
        lightCls: "bg-[#1D5078] text-white",
      },
      rising: {
        label: "Rising Leaders Forum",
        dark: "bg-[#1A7A6E] text-white",
        lightCls: "bg-[#1A7A6E] text-white",
      },
    };
  const { label, dark, lightCls } = map[event];
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${light ? lightCls : dark}`}
    >
      {label}
    </span>
  );
}

function TypeChip({ label }: { label: string; light?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide bg-[#E85520] text-white`}
    >
      {label}
    </span>
  );
}

function TrackChip({ label, light }: { label: string; light?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${light ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/60 border border-[#0D0D0D]/10" : "bg-white/10 text-white/70 border border-white/10"}`}
    >
      {label}
    </span>
  );
}

function CategoryChip({ label, light }: { label: string; light?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide ${light ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/60 border border-[#0D0D0D]/10" : "bg-white/10 text-white/70 border border-white/10"}`}
    >
      {label}
    </span>
  );
}

// ─── datetime row ─────────────────────────────────────────────────────────────

function DateTimeRow({
  date,
  time,
  endTime,
  light,
}: {
  date?: string;
  time?: string;
  endTime?: string;
  light?: boolean;
}) {
  if (!date && !time) return null;
  const cls = light ? "text-[#0D0D0D]/50" : "text-white/50";
  return (
    <div className={`flex items-center gap-3 font-sans text-sm ${cls}`}>
      {date && (
        <span className="flex items-center gap-1.5">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {date}
        </span>
      )}
      {time && (
        <span className="flex items-center gap-1.5">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {time}
          {endTime ? ` – ${endTime}` : ""}
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
        <li
          key={i}
          className={`flex items-start gap-2.5 font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}
        >
          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#E85520]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── talk block ───────────────────────────────────────────────────────────────

function toTalkArray(t: SpeakerTalk | SpeakerTalk[] | undefined): SpeakerTalk[] {
  if (!t) return [];
  return Array.isArray(t) ? t : [t];
}

function TalkBlock({
  event,
  talk,
  light,
}: {
  event: "leadership" | "rising";
  talk: SpeakerTalk;
  light?: boolean;
}) {
  if (!talk) return null;
  const hasAny =
    talk.type ||
    talk.track ||
    talk.title ||
    talk.description ||
    talk.keyTakeaway ||
    talk.audience;
  if (!hasAny) return null;

  const SL = light ? LightSectionLabel : DarkSectionLabel;
  const cardCls = light
    ? "rounded-2xl border border-[#0D0D0D]/10 bg-[#0D0D0D]/[0.03] p-6 md:p-8 flex flex-col gap-6"
    : "rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-6";

  const isWorkshop = Array.isArray(talk.type)
    ? talk.type.includes("Workshop")
    : talk.type === "Workshop";

  return (
    <div className={cardCls}>
      <div className="flex flex-wrap gap-2 items-center">
        <EventChip event={event} light={light} />
        {talk.type && (Array.isArray(talk.type)
          ? talk.type.map((t, i) => <TypeChip key={i} label={t} light={light} />)
          : <TypeChip label={talk.type as string} light={light} />
        )}
        {talk.track && <TrackChip label={talk.track} light={light} />}
        {talk.talkCategory && (
          <CategoryChip label={talk.talkCategory} light={light} />
        )}
      </div>

      <DateTimeRow
        date={talk.date}
        time={talk.time}
        endTime={talk.endTime}
        light={light}
      />

      {talk.title && (
        <h3
          className={`font-leadership text-2xl md:text-4xl leading-tight ${light ? "text-[#0D0D0D]" : "text-white"}`}
        >
          {talk.title}
        </h3>
      )}

      {talk.description && (
        <div>
          <SL>{isWorkshop ? "About this workshop" : "About this talk"}</SL>
          <p
            className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}
          >
            {talk.description}
          </p>
        </div>
      )}

      {talk.keyTakeaway &&
        (Array.isArray(talk.keyTakeaway)
          ? talk.keyTakeaway.length > 0
          : !!talk.keyTakeaway) && (
          <div>
            <SL>{isWorkshop ? "Workshop key takeaways" : "Key takeaway"}</SL>
            {Array.isArray(talk.keyTakeaway) ? (
              <BulletList items={talk.keyTakeaway} light={light} />
            ) : (
              <p
                className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}
              >
                {talk.keyTakeaway}
              </p>
            )}
          </div>
        )}

      {talk.audience &&
        (Array.isArray(talk.audience)
          ? talk.audience.length > 0
          : !!talk.audience) && (
          <div>
            <SL>Who should attend</SL>
            {Array.isArray(talk.audience) ? (
              <BulletList items={talk.audience} light={light} />
            ) : (
              <p
                className={`font-sans text-base leading-relaxed ${light ? "text-[#0D0D0D]/60" : "text-white/60"}`}
              >
                {talk.audience}
              </p>
            )}
          </div>
        )}
    </div>
  );
}

// ─── social icons ─────────────────────────────────────────────────────────────

function SocialLinks({
  linkedin,
  twitter,
  feedbackLink,
  light,
}: {
  linkedin?: string;
  twitter?: string;
  feedbackLink?: string;
  light?: boolean;
}) {
  const btnCls = light
    ? "flex items-center justify-center w-10 h-10 rounded-full bg-[#0D0D0D]/8 hover:bg-[#0D0D0D]/15 transition-colors"
    : "flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 transition-colors";
  const iconCls = light ? "text-[#0D0D0D]" : "text-white";
  if (!linkedin && !twitter && !feedbackLink) return null;
  return (
    <div className="flex gap-2.5 mt-1">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={btnCls}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={iconCls}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
          className={btnCls}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={iconCls}
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
        </a>
      )}
      {feedbackLink && (
        <a
          href={feedbackLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leave feedback"
          className={btnCls}
          title="Leave feedback"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={iconCls}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

  const leadershipTalks = toTalkArray(speaker.events?.leadership);
  const risingTalks = toTalkArray(speaker.events?.rising);
  const hasLeadershipTalk = leadershipTalks.length > 0;
  const hasRisingTalk = risingTalks.length > 0;
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
        <Link href="/leadership-summit#speakers" className={backCls}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
              boxShadow: isLight
                ? `0 12px 40px ${accentColor}40`
                : "0 12px 40px rgba(0,0,0,0.5)",
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
            <h1
              className={`font-leadership text-5xl md:text-7xl leading-[0.9] tracking-tight text-balance ${nameCls}`}
            >
              {speaker.name}
            </h1>

            <p
              className={`font-sans text-base md:text-lg font-semibold mb-4 ${roleCls}`}
            >
              {speaker.role}
              {speaker.company ? `, ${speaker.company}` : ""}
            </p>

            {/* Chips — all unique types across all entries, plus track/category from first non-workshop */}
            {(hasLeadershipTalk || hasRisingTalk) && (() => {
              const allEntries = [...leadershipTalks, ...risingTalks];
              const allTypes = Array.from(new Set(
                allEntries.flatMap((t) => Array.isArray(t.type) ? t.type : t.type ? [t.type] : [])
              ));
              const heroTalk = allEntries.find((t) => t.type !== "Workshop") ?? allEntries[0];
              if (!heroTalk && allTypes.length === 0) return null;
              return (
                <div className="flex flex-wrap gap-2 items-center">
                  {hasLeadershipTalk && <EventChip event="leadership" light={isLight} />}
                  {hasRisingTalk && <EventChip event="rising" light={isLight} />}
                  {allTypes.map((v, i) => <TypeChip key={i} label={v} light={isLight} />)}
                  {heroTalk?.track && <TrackChip label={heroTalk.track} light={isLight} />}
                  {heroTalk?.talkCategory && <CategoryChip label={heroTalk.talkCategory} light={isLight} />}
                </div>
              );
            })()}

            {/* Talk title — from first non-workshop entry */}
            {(() => {
              const heroTalk = [...leadershipTalks, ...risingTalks].find(
                (t) => t.type !== "Workshop"
              ) ?? leadershipTalks[0] ?? risingTalks[0];
              return heroTalk?.title ? (
                <p className={`flex items-center gap-1.5 font-sans text-base md:text-lg font-semibold text-balance break-words ${roleCls}`}>
                  <svg width="13" height="13" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" style={{ opacity: 0.5 }}>
                    <path d="M141.299 0H151.573C153.144 0.644181 155.275 0.801616 156.956 1.23431C159.272 1.83014 161.622 2.64725 163.813 3.59128C174.475 8.18702 182.869 16.8386 187.14 27.6349C191.372 38.4082 191.161 50.4201 186.552 61.0378C181.842 71.7966 173.032 80.2303 162.079 84.4676C151.324 88.5899 139.371 88.2652 128.856 83.5655C118.27 78.8433 109.979 70.1296 105.789 59.3226C101.704 48.4768 102.032 36.4623 106.703 25.856C112.491 12.8535 124.299 3.33986 138.328 0.805953C139.158 0.655878 140.372 0.370495 141.153 0.0597178L141.299 0Z" fill="currentColor"/>
                    <path d="M34.9703 145.221C32.0659 135.674 36.6639 130.638 42.1736 123.605L50.8084 112.58L77.916 77.8422C81.9023 72.7392 87.6191 65.8762 91.298 60.7319C92.5785 64.1281 93.7878 67.2684 95.4949 70.4906C101.532 81.8969 111.186 90.9756 122.941 96.3015C125.026 97.261 127.178 98.0689 129.379 98.7192C125.554 102.246 118.983 107.07 114.685 110.416L88.9439 130.484L69.4112 145.742C66.529 147.994 61.2783 152.336 58.3743 154.032C55.8216 155.551 52.8812 156.292 49.9136 156.165C48.2304 156.099 46.604 155.723 44.9592 155.374C40.3687 159.241 33.2033 165.381 38.8172 171.603C40.1817 173.105 42.0906 174 44.1185 174.088C52.3217 174.445 55.2783 159.678 71.2699 160.215C77.0917 160.438 82.5868 162.963 86.5473 167.235C90.4002 171.4 92.4287 176.931 92.181 182.599C91.8446 191.286 88.2055 195.006 82.4608 200.712L74.7297 208.389C73.8363 209.277 70.9163 212.066 70.4115 213H70.1446C68.2931 210.914 62.3583 204.979 60.2755 203.21C63.7473 199.398 67.3744 195.922 70.9954 192.28C72.5404 190.725 76.0131 187.496 77.0912 185.78C77.8964 184.522 78.2871 183.042 78.2078 181.55C78.1042 179.469 77.1499 177.522 75.5684 176.165C73.9774 174.802 71.8574 174.259 69.792 174.443C61.7852 175.159 58.9561 189.689 42.2102 188.025C38.0507 187.634 34.101 186.016 30.8615 183.378C26.0547 179.433 23.5644 174.652 22.9641 168.492C22.3975 162.729 24.1741 156.979 27.8937 152.541C30.0245 149.972 33.0275 147.538 34.9703 145.221Z" fill="currentColor"/>
                  </svg>
                  {heroTalk.title}
                </p>
              ) : null;
            })()}

            {/* Date / time — from first non-workshop entry */}
            {(() => {
              const heroTalk = [...leadershipTalks, ...risingTalks].find(
                (t) => t.type !== "Workshop"
              ) ?? leadershipTalks[0] ?? risingTalks[0];
              return (
                <DateTimeRow
                  date={heroTalk?.date}
                  time={heroTalk?.time}
                  endTime={heroTalk?.endTime}
                  light={isLight}
                />
              );
            })()}

            <SocialLinks
              linkedin={speaker.linkedin}
              twitter={speaker.twitter}
              feedbackLink={speaker.feedbackLink}
              light={isLight}
            />
          </div>
        </div>

        <Div />

        {/* Bio */}
        {speaker.bio && (
          <>
            <div className="max-w-4xl">
              <SL>About</SL>
              <p
                className={`font-sans text-base md:text-lg leading-relaxed whitespace-pre-line ${bioCls}`}
              >
                {speaker.bio}
              </p>
            </div>
            <Div />
          </>
        )}

        {/* Talk details */}
        {hasTalks && (() => {
          const allEntries = [...leadershipTalks, ...risingTalks];
          const isWorkshop = (t: SpeakerTalk) => t.type === "Workshop" || (Array.isArray(t.type) && t.type.includes("Workshop"));
          const hasWorkshop = allEntries.some(isWorkshop);
          const hasTalk = allEntries.some((t) => !isWorkshop(t));
          const sectionLabel = hasWorkshop && hasTalk ? "Talk & Workshop details" : hasWorkshop ? "Workshop details" : "Talk details";
          return (
          <div className="flex flex-col gap-4">
            <SL>{sectionLabel}</SL>
            {[
              ...leadershipTalks.map((t) => ({ talk: t, event: "leadership" as const, light: false })),
              ...risingTalks.map((t) => ({ talk: t, event: "rising" as const, light: isLight })),
            ]
              .sort((a, b) => {
                const aW = a.talk.type === "Workshop" || (Array.isArray(a.talk.type) && a.talk.type.includes("Workshop"));
                const bW = b.talk.type === "Workshop" || (Array.isArray(b.talk.type) && b.talk.type.includes("Workshop"));
                return Number(aW) - Number(bW);
              })
              .map(({ talk, event, light }, i) => (
                <TalkBlock key={i} event={event} talk={talk} light={light} />
              ))
            }
          </div>
          );
        })()}
      </main>

      <Footer />
    </div>
  );
}
