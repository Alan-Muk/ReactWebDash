const navItems = ["Overview", "Flights", "Analytics", "Gates", "Map"];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 min-h-screen border-r border-white/10 bg-slate-900/80 backdrop-blur-xl flex-col p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-white">SkyOps</h2>
        <p className="text-slate-400 text-sm">Airport Dashboard</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
              index === 0
                ? "bg-sky-500/10 border border-sky-400/20 text-sky-300"
                : "text-slate-300 hover:bg-white/5"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}