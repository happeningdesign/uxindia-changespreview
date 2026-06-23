type TrackNumberHeaderProps = {
  number: string;
  title: string;
  dates: string;
  venue: string;
  audience: string;
};

export function TrackNumberHeader({
  number,
  title,
  dates,
  venue,
  audience,
}: TrackNumberHeaderProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] px-6 py-6 sm:px-8 sm:py-7">
      <p className="font-uxi text-4xl leading-none text-[#B8A9D4] sm:text-5xl">{number}</p>
      <h2 className="font-uxi mt-3 text-3xl font-medium leading-[1.08] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 font-sans text-sm leading-relaxed text-white/55">
        {dates}
        <br />
        {venue}
      </p>
      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
          Who should attend
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-white/45">{audience}</p>
      </div>
    </div>
  );
}
