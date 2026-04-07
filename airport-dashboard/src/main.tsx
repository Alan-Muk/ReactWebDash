import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import StatsCards from "../Components/StatsCards.tsx";
import AirportTable from "../Components/AirportTable.tsx";
import Charts from "../Components/Charts.tsx";
import MapView from "../Components/MapView.tsx";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Airport Dashboard
      </h1>

      <StatsCards />

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Charts />
        <MapView />
      </div>

      <AirportTable />
    </div>
  );
}