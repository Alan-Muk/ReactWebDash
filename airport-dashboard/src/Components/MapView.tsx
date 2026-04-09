import airportsData from "./Data/airports.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
};

type AirportsData = {
  airports: Airport[];
};

const airports = airportsData as AirportsData;

// Fix Leaflet marker icons in Vite / React setups
const airportIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView() {
  const validAirports = airports.airports.filter(
    (airport) =>
      typeof airport.lat === "number" &&
      typeof airport.lon === "number" &&
      !Number.isNaN(airport.lat) &&
      !Number.isNaN(airport.lon)
  );

  // Limit visible markers for cleaner initial performance + less clutter
  const displayedAirports = validAirports.slice(0, 120);

  const uniqueCountries = new Set(displayedAirports.map((a) => a.country)).size;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Geospatial View
          </p>
          <h3 className="text-2xl font-bold text-white mt-1">
            Global Airport Map
          </h3>
          <p className="text-slate-400 mt-1 text-sm">
            Visual overview of airport distribution and operational locations
          </p>
        </div>

        <div className="text-sm text-slate-400">
          Showing{" "}
          <span className="font-semibold text-sky-300">
            {displayedAirports.length}
          </span>{" "}
          airports across{" "}
          <span className="font-semibold text-sky-300">
            {uniqueCountries}
          </span>{" "}
          countries
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Visible Airports
          </p>
          <p className="text-2xl font-bold text-white">
            {displayedAirports.length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Countries Covered
          </p>
          <p className="text-2xl font-bold text-white">{uniqueCountries}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">
            Map Scope
          </p>
          <p className="text-2xl font-bold text-white">Global</p>
        </div>
      </div>

      <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {displayedAirports.map((airport) => (
            <Marker
              key={airport.code}
              position={[airport.lat, airport.lon]}
              icon={airportIcon}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <p className="font-bold text-slate-900">{airport.name}</p>
                  <p className="text-sm text-slate-700 mt-1">
                    {airport.city}, {airport.country}
                  </p>
                  <div className="mt-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    Code: {airport.code}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}