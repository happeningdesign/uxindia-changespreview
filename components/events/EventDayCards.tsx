interface EventDay {
  badge: string;
  badgeColor: "orange" | "blue";
  date: string;
  description: string;
  bgColor: string;
}

interface EventDayCardsProps {
  days: EventDay[];
}

export default function EventDayCards({ days }: EventDayCardsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${days.length} gap-4 md:gap-6 mt-12`}>
      {days.map((day, index) => (
        <div
          key={index}
          className={`${day.bgColor} rounded-2xl p-6 md:p-8 min-h-[180px] flex flex-col`}
        >
          {/* Badge */}
          <span
            className={`inline-flex items-center self-start px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white ${
              day.badgeColor === "orange" ? "bg-[#E85520]" : "bg-[#0891B2]"
            }`}
          >
            {day.badge}
          </span>

          {/* Content */}
          <div className="mt-auto pt-8">
            <p className="font-leadership text-xl md:text-2xl text-white mb-2">
              {day.date}
            </p>
            <p className="font-sans text-sm text-white/60">
              {day.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
