export function MultiSelectCard({
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
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <span className="font-sans font-semibold text-page">{title}</span>
        </div>

        <div
          className={`h-5 w-5 rounded border flex items-center justify-center text-xs font-bold transition-all ${
            selected
              ? "bg-brand border-brand text-white"
              : "border-page/20 bg-white"
          }`}
        >
          {selected && "✓"}
        </div>
      </div>

      {duration && (
        <span className="font-sans text-xs font-semibold text-brand block mb-2">
          {duration}
        </span>
      )}

      <p className="font-sans text-sm text-page/60 leading-relaxed">
        {description}
      </p>
    </label>
  );
}
