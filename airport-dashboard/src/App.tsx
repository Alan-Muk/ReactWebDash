import Sidebar from "./components/layout/Sidebar";
import DashboardHeader from "./components/layout/DashboardHeader";
import SectionCard from "./components/layout/SectionCard";

import StatsCards from "./Components/StatsCards";
import AirportTable from "./Components/AirportTable";
import Charts from "./Components/Charts";
import MapView from "./Components/MapView";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          <DashboardHeader />

          <div className="mb-8">
            <StatsCards />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            <SectionCard title="Traffic Analytics" subtitle="Analytics">
              <Charts />
            </SectionCard>

            <SectionCard title="Airport Activity Map" subtitle="Geospatial View">
              <MapView />
            </SectionCard>
          </div>

          <SectionCard
            title="Recent Flights"
            subtitle="Airport Records"
            action={
              <button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10 transition">
                View All
              </button>
            }
          >
            <AirportTable />
          </SectionCard>
        </main>
      </div>
    </div>
  );
}