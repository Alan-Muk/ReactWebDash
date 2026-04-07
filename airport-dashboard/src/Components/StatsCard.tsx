import airports from "./Data/airports.json";

export default function StatsCards() {
  const total = airports.airports.length;

  const countryCount = airports.airports.reduce((acc: any, a) => {
    acc[a.country] = (acc[a.country] || 0) + 1;
    return acc;
  }, {});

  const topCountry = Object.entries(countryCount).sort(
    (a: any, b: any) => b[1] - a[1]
  )[0];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-gray-500">Total Airports</h2>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-gray-500">Countries</h2>
        <p className="text-2xl font-bold">
          {Object.keys(countryCount).length}
        </p>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-gray-500">Top Country</h2>
        <p className="text-2xl font-bold">
          {topCountry[0]} ({topCountry[1]})
        </p>
      </div>
    </div>
  );
}