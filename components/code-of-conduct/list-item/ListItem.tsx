export function ListItem({
  children,
  icon = "arrow",
}: {
  children: React.ReactNode;
  icon?: "arrow" | "check";
}) {
  return (
    <li className="flex gap-3 mb-4">
      <span className="text-brand font-semibold mt-0.5 shrink-0">
        {icon === "arrow" ? "→" : "✓"}
      </span>
      <span className="font-sans text-base text-[#333333] leading-relaxed">
        {children}
      </span>
    </li>
  );
}
