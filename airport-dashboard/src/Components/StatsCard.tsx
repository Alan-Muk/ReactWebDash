import airportsData from "./Data/airports.json";
import StatCard from "../Components/UI/StatCard";

type Airport = {
  id?: number | string;
  name: string;
  city: string;
  country: string;
  iata?: string;
  icao?: string;
  latitude?: number;
  longitude?: number;
};

type AirportsData = {
  airports: Airport[];
};

const airports = airportsData as AirportsData;

export default function StatsCards() {
  const totalAirports = airports.airports.length;

  const countryCount = airports.airports.reduce<Record<string, number>>(
    (acc, airport) => {
      acc[airport.country] = (acc[airport.country] || 0) + 1;
      return acc;
    },
    {}
  );

  const totalCountries = Object.keys(countryCount).length;

  const topCountryEntry =
    Object.entries(countryCount).sort((a, b) => b[1] - a[1])[0] ?? [
      "N/A",
      0,
    ];

  const [topCountry, topCountryTotal] = topCountryEntry;

  const avgAirportsPerCountry =
    totalCountries > 0 ? (totalAirports / totalCountries).toFixed(1) : "0";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total Airports"
        value={totalAirports}
        subtitle="Tracked across the current dataset"
      />

      <StatCard
        title="Countries"
        value={totalCountries}
        subtitle="Geographic coverage in dashboard records"
      />

      <StatCard
        title="Top Country"
        value={topCountry}
        subtitle={`${topCountryTotal} airports represented`}
      />

      <StatCard
        title="Avg Coverage"
        value={avgAirportsPerCountry}
        subtitle="Average airports per country"
      />
    </div>
  );
}

/*
========================================
STATSCARDS COMPONENT OVERVIEW
========================================

This component generates and displays dashboard
statistics related to airport data.

Main Features:
- Calculates total number of airports
- Counts unique countries in the dataset
- Identifies the country with the most airports
- Computes average airport coverage per country

Data Source:
- Imports airport information from airports.json
- Uses TypeScript types for data validation

Calculated Metrics:
1. Total Airports
   → Total airport records available

2. Countries
   → Number of unique countries represented

3. Top Country
   → Country containing the highest number of airports

4. Avg Coverage
   → Average airports per country

Logic Used:
- reduce() → Counts airports by country
- Object.keys() → Calculates unique country count
- sort() → Finds the top represented country
- toFixed(1) → Formats average value

UI Structure:
- Responsive grid layout
- Uses reusable StatCard components
- Optimized for dashboard visualization

========================================
*/
