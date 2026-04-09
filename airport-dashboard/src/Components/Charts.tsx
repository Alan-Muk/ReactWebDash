import airportsData from "./Data/airports.json";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
};

type AirportsData = {
  airports: Airport[];
};

const airports = airportsData as AirportsData;

type CountryChartData = {
  country: string;
  count: number;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number; payload: CountryChartData }[];
  label?: string;
};

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl">
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="text-sm text-slate-300 mt-1">
        Airports: <span className="font-semibold text-sky-300">{payload[0].value}</span>
      </p>
    </div>
  );
}

export default function Charts() {
  const countryCount = airports.airports.reduce<Record<string, number>>(
    (acc, airport) => {
      acc[airport.country] = (acc[airport.country] || 0) + 1;
      return acc;
    },
    {}
  );

  const data: CountryChartData[] = Object.entries(countryCount)
    .map(([country, count]) => ({
      country,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const topCountry = data[0];
  const totalShown = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Analytics
          </p>
          <h3 className="text-2xl font-bold text-white mt-1">
            Airports by Country
          </h3>
          <p className="text-slate-400 mt-1 text-sm">
            Top {data.length} countries represented in the dataset
          </p>
        </div>

        <div className="text-sm text-slate-400">
          {topCountry ? (
            <>
              Highest concentration:{" "}
              <span className="font-semibold text-sky-300">
                {topCountry.country}
              </span>{" "}
              ({topCountry.count})
            </>
          ) : (
            "No data available"
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Countries Shown
          </p>
          <p className="text-2xl font-bold text-white">{data.length}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Airports Included
          </p>
          <p className="text-2xl font-bold text-white">{totalShown}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Top Country
          </p>
          <p className="text-2xl font-bold text-white">
            {topCountry?.country ?? "N/A"}
          </p>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
          >
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="country"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="count"
              radius={[12, 12, 0, 0]}
              fill="#38bdf8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}