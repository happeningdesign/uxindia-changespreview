export function FormTextarea({
  label,
  hint,
  required,
  placeholder,
  maxLength,
  minLength,
  value,
  onChange,
  rows = 4,
  error,
  clearError,
  fieldName,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  error?: string;
  clearError?: (field: string) => void;
  fieldName?: string;
}) {
  return (
    <div className="mb-6">
      <label className="block font-sans font-medium text-page mb-1">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </label>
      {hint && <p className="font-sans text-sm text-page/50 mb-2">{hint}</p>}
      <textarea
        data-field={fieldName}
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        onChange={(e) => {
          if (error && clearError && fieldName) {
            clearError(fieldName);
          }

          onChange(e.target.value);
        }}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        // className="w-full px-4 py-3 rounded-xl border-2 border-page/10 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none focus:border-brand transition-colors resize-y"
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none transition-colors resize-y ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-page/10 focus:border-brand"
        }`}
      />
      {error && <p className="font-sans text-sm text-red-500 mt-2">{error}</p>}
      {maxLength && (
        <p className="font-sans text-xs text-page/40 text-right mt-1">
          {value.length} / {maxLength}
          {minLength && ` (minimum ${minLength})`}
        </p>
      )}
    </div>
  );
}
