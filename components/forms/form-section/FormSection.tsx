export function FormSection({
  number,
  title,
  description,
  children,
  sectionId,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
  sectionId?: string;
}) {
  return (
    <div
      id={sectionId}
      className="mb-12 pb-12 border-b border-page/10 last:border-b-0 last:mb-0 last:pb-0"
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-sans text-sm font-semibold text-brand">
          {number}
        </span>
        <h2
          className="text-2xl md:text-3xl text-page"
          style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
        >
          {title}
        </h2>
      </div>
      <p className="font-sans text-sm text-page/60 mb-6">{description}</p>
      {children}
    </div>
  );
}
