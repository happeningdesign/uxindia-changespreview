"use client";

interface WhoAttendsProps {
  title: string;
  description: string;
  subtitle: string;
}

export default function WhoAttends({
  title,
  description,
  subtitle,
}: WhoAttendsProps) {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          {/* Left side - Title */}
          <div className="md:w-2/5 flex-shrink-0">
            <h2 className="font-leadership text-4xl md:text-5xl text-white mb-4">
              {title}
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#E85520] to-transparent mb-6" />
            <p className="font-leadership text-2xl md:text-3xl text-white/80 leading-tight">
              {description}
            </p>
          </div>

          {/* Right side - Description */}
          <div className="md:w-3/5">
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
