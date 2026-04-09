type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-2">
        {title}
      </p>
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <p className="mt-3 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}