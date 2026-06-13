import Sidebar from "./components/layout/Sidebar";
import DashboardHeader from "./components/layout/DashboardHeader";
import SectionCard from "./components/layout/SectionCard";

import StatsSection from "./components/features/StatsSection";
import AirportTable from "./components/features/AirportTable";
import Charts from "./components/features/Charts";
import MapView from "./components/features/MapView";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8">
        <DashboardHeader />

        <div className="mb-8">
          <StatsSection />
        </div>

        <div className="grid xl:grid-cols-2 gap-6 mb-8">
          <SectionCard title="Traffic Analytics" subtitle="Analytics">
            <Charts />
          </SectionCard>

          <SectionCard title="Map" subtitle="Geospatial View">
            <MapView />
          </SectionCard>
        </div>

        <SectionCard title="Flights" subtitle="Records">
          <AirportTable />
        </SectionCard>
      </main>
    </div>
  );
}

/*
========================================
APP COMPONENT OVERVIEW
========================================

This component serves as the main dashboard layout
for the airport analytics application.

Main Features:
- Sidebar navigation menu
- Dashboard header section
- Statistics summary cards
- Traffic analytics charts
- Airport activity map
- Recent flight records table

Layout Structure:
1. Sidebar positioned on the left
2. Main content area on the right
3. Responsive grid layout for charts and maps
4. Reusable SectionCard components for organization

Styling:
- Built using Tailwind CSS
- Dark theme with slate background
- Responsive spacing and grid system

Imported Components:
- Sidebar → Navigation panel
- DashboardHeader → Top dashboard header
- StatsCards → Displays key statistics
- Charts → Traffic analytics visualizations
- MapView → Airport activity map
- AirportTable → Flight records table
- SectionCard → Reusable content wrapper

========================================
*/
