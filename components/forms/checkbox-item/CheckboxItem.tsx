import Link from "next/link";

export function CheckboxItem({
  id,
  label,
  description,
  checked,
  onChange,
  linkText,
  linkHref,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  linkText?: string;
  linkHref?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        checked
          ? "border-brand bg-brand/5"
          : "border-page/10 hover:border-brand/50 bg-white"
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 rounded border-2 border-page/20 text-brand focus:ring-brand focus:ring-offset-0"
      />
      <div className="flex-1">
        <span className="font-sans font-medium text-page block mb-1">
          {linkText && linkHref ? (
            <Link href={linkHref} className="text-brand hover:underline">
              {linkText}
            </Link>
          ) : (
            label
          )}
          {!linkText && <span className="text-brand ml-1">*</span>}
        </span>
        <p className="font-sans text-sm text-page/60">{description}</p>
      </div>
    </label>
  );
}
