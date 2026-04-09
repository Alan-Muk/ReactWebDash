export default function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
      <div>
        <p className="text-sky-400 text-sm uppercase tracking-[0.2em]">
          Operations Center
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Airport Overview
        </h1>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Monitor flights, passenger flow, delays, and terminal activity from a
          single operational dashboard.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search flights, airlines, gates..."
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-400 transition">
          Export Report
        </button>
      </div>
    </div>
  );
}