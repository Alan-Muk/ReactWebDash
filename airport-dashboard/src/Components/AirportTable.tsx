import { useMemo, useState } from "react";
import airportsData from "./Data/airports.json";

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

function getOperationalStatus(code: string) {
  const statuses = ["Operational", "Busy", "Monitoring", "Delayed"];
  const index = code.length % statuses.length;
  return statuses[index];
}

function getStatusStyles(status: string) {
  switch (status) {
    case "Operational":
      return "bg-emerald-500/15 text-emerald-300";
    case "Busy":
      return "bg-amber-500/15 text-amber-300";
    case "Monitoring":
      return "bg-sky-500/15 text-sky-300";
    case "Delayed":
      return "bg-rose-500/15 text-rose-300";
    default:
      return "bg-slate-500/15 text-slate-300";
  }
}

export default function AirportTable() {
  const [search, setSearch] = useState("");

  const filteredAirports = useMemo(() => {
    return airports.airports.filter((airport) => {
      const query = search.toLowerCase();

      return (
        airport.city.toLowerCase().includes(query) ||
        airport.name.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Airport Records
          </p>
          <h3 className="text-2xl font-bold text-white mt-1">
            Global Airport Activity
          </h3>
          <p className="text-slate-400 mt-1 text-sm">
            {filteredAirports.length} airport
            {filteredAirports.length !== 1 ? "s" : ""} shown
          </p>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Search by code, city, country, or name..."
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-white/5">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Code
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Airport
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                City
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Country
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredAirports.length > 0 ? (
              filteredAirports.map((airport) => {
                const status = getOperationalStatus(airport.code);

                return (
                  <tr
                    key={airport.code}
                    className="border-t border-white/5 hover:bg-white/[0.03] transition"
                  >
                    <td className="px-5 py-4 font-semibold text-sky-300">
                      {airport.code}
                    </td>
                    <td className="px-5 py-4 text-white">{airport.name}</td>
                    <td className="px-5 py-4 text-slate-300">{airport.city}</td>
                    <td className="px-5 py-4 text-slate-300">
                      {airport.country}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-10 text-center text-slate-400"
                >
                  No airports found for “{search}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}