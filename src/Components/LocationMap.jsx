import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMap({ lat, long, popupText, zoom }) {
  const position = [lat, long];
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>{popupText}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default LocationMap;
