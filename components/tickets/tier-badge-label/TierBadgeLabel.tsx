type TierBadgeLabelProps = {
  label: string;
};

/** Renders tier badge text with "Professionals" emphasized when present. */
export function TierBadgeLabel({ label }: TierBadgeLabelProps) {
  const match = label.match(/^(.+ — )(Professionals)$/);
  if (!match) return label;

  return (
    <>
      {match[1]}
      <span className="font-semibold">{match[2]}</span>
    </>
  );
}
