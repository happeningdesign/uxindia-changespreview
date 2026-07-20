export function Callout({
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
    accent: "bg-orange-50 border-brand",
  };

  return (
    <div className={`${colors[type]} border-l-4 p-5 rounded-r-xl my-6`}>
      <h4 className="font-sans font-semibold text-page mb-2">{title}</h4>
      <div className="font-sans text-sm text-[#333333] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
