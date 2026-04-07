import { useState } from "react";
import airports from "./Data/airports.json";

export default function AirportTable() {
  const [search, setSearch] = useState("");

  const filtered = airports.airports.filter((a) =>
    a.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 shadow rounded">
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search by city..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Code</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((a) => (
            <tr key={a.code} className="border-b">
              <td>{a.code}</td>
              <td>{a.name}</td>
              <td>{a.city}</td>
              <td>{a.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}