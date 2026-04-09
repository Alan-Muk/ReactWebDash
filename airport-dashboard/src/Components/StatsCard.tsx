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