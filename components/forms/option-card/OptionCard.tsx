export function OptionCard({
  name,
  id,
  value,
  title,
  duration,
  description,
  selected,
  onChange,
  fieldName,
  error,
}: {
  name: string;
  id: string;
  value: string;
  title: string;
  duration?: string;
  description: string;
  selected: boolean;
  onChange: (value: string) => void;
  fieldName?: string;
  error?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
        selected
          ? "border-brand bg-brand/5"
          : "border-page/10 hover:border-brand/50 bg-white"
      }`}
    >
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-sans font-semibold text-page">{title}</span>
        {duration && (
          <span className="font-sans text-xs font-semibold text-brand whitespace-nowrap">
            {duration}
          </span>
        )}
      </div>
      <p className="font-sans text-sm text-page/60 leading-relaxed">
        {description}
      </p>
    </label>
  );
}
