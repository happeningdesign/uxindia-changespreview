export function BehaviorCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-page/5 p-5 rounded-xl border-l-3 border-brand hover:bg-page/8 transition-colors">
      <h4 className="font-sans font-semibold text-brand mb-2">{title}</h4>
      <p className="font-sans text-sm text-[#333333] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
