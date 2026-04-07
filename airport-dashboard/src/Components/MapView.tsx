import airports from "./Data/airports.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <div className="h-[400px] w-full">
      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {airports.airports.map((a) => (
          <Marker key={a.code} position={[a.lat, a.lon]}>
            <Popup>
              <b>{a.name}</b>
              <br />
              {a.city}, {a.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}