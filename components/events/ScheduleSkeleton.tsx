"use client";

export default function ScheduleSkeleton() {
  return (
    <div className="bg-[#0D0D0D] w-full py-16 md:py-24 relative min-h-[800px]">
      {/* Blur overlay with "Announcing Soon" */}
      <div className="absolute inset-0 z-40 backdrop-blur-sm bg-black/40 flex items-center justify-center">
        <div className="text-center">
          <h3 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4">
            Schedule
          </h3>
          <p className="font-sans text-lg md:text-xl text-white/70 text-center">
            Announcing Soon
          </p>
        </div>
      </div>

      {/* Skeletal Schedule Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-0">
        {/* Day tabs */}
        <div className="flex gap-4 mb-12">
          <div className="h-12 w-32 bg-white/10 rounded-lg" />
          <div className="h-12 w-32 bg-white/5 rounded-lg" />
          <div className="h-12 w-32 bg-white/5 rounded-lg" />
        </div>

        {/* Schedule grid - Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Time column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-6 w-20 bg-white/10 rounded mb-8" />
            <div className="space-y-24">
              <div className="h-4 w-16 bg-white/8 rounded" />
              <div className="h-4 w-16 bg-white/8 rounded" />
              <div className="h-4 w-16 bg-white/8 rounded" />
              <div className="h-4 w-16 bg-white/8 rounded" />
              <div className="h-4 w-16 bg-white/8 rounded" />
            </div>
          </div>

          {/* Main schedule grid */}
          <div className="lg:col-span-10 space-y-6">
            {/* Row 1 - Keynote (full width) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-32">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-48 bg-white/10 rounded" />
                  <div className="h-4 w-64 bg-white/8 rounded" />
                  <div className="h-3 w-32 bg-white/5 rounded" />
                </div>
                <div className="h-6 w-20 bg-[#E85520]/20 rounded-full" />
              </div>
            </div>

            {/* Row 2 - Two sessions side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-40">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-white/10 rounded" />
                    <div className="h-3 w-24 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/8 rounded" />
                  <div className="h-4 w-3/4 bg-white/8 rounded" />
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-40">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-36 bg-white/10 rounded" />
                    <div className="h-3 w-28 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/8 rounded" />
                  <div className="h-4 w-2/3 bg-white/8 rounded" />
                </div>
              </div>
            </div>

            {/* Row 3 - Break/Networking */}
            <div className="bg-gradient-to-r from-[#E85520]/10 to-transparent border border-white/10 rounded-xl p-4 h-16 flex items-center gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg" />
              <div className="h-4 w-40 bg-white/10 rounded" />
            </div>

            {/* Row 4 - Three track sessions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-48">
                <div className="h-3 w-16 bg-[#E85520]/30 rounded-full mb-4" />
                <div className="w-10 h-10 bg-white/10 rounded-full mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-3 w-20 bg-white/5 rounded" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-4/5 bg-white/5 rounded" />
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-48">
                <div className="h-3 w-20 bg-white/20 rounded-full mb-4" />
                <div className="w-10 h-10 bg-white/10 rounded-full mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-3 w-24 bg-white/5 rounded" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-3/5 bg-white/5 rounded" />
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-48">
                <div className="h-3 w-24 bg-white/20 rounded-full mb-4" />
                <div className="w-10 h-10 bg-white/10 rounded-full mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-3 w-16 bg-white/5 rounded" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
            </div>

            {/* Row 5 - Panel Discussion (large card) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-44">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <div className="h-5 w-56 bg-white/10 rounded" />
                  <div className="h-4 w-72 bg-white/8 rounded" />
                </div>
                <div className="h-6 w-28 bg-white/10 rounded-full" />
              </div>
              <div className="flex gap-3 mt-6">
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/5 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/10 rounded" />
                </div>
              </div>
            </div>

            {/* Row 6 - Two more sessions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-36">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-40 bg-white/10 rounded" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-2/3 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-36">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-44 bg-white/10 rounded" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-1/2 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
