type ChevronIconProps = {
  open?: boolean;
  className?: string;
};

export function ChevronIcon({ open = false, className = "" }: ChevronIconProps) {
  return (
    <svg
      className={`shrink-0 opacity-60 transition-transform duration-200 ${open ? "rotate-90" : ""} ${className}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
