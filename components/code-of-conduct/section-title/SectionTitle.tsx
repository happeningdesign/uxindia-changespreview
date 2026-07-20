export function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-2 border-brand">
      <span className="font-sans text-sm font-semibold text-brand">
        {number}
      </span>
      <h2
        className="text-3xl md:text-4xl text-page"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        {title}
      </h2>
    </div>
  );
}
