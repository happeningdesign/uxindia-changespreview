export function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors">
      <p className="font-sans text-xs text-white/60 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="font-sans text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
