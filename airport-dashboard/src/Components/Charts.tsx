import airports from "./Data/airports.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Charts() {
  const countryCount: any = {};

  airports.airports.forEach((a) => {
    countryCount[a.country] = (countryCount[a.country] || 0) + 1;
  });

  const data = Object.keys(countryCount).map((key) => ({
    country: key,
    count: countryCount[key],
  }));

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="mb-4 font-bold">Airports by Country</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
}