import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

/**
 * A component that renders a map of a given location using the
 * react-leaflet library. It renders a map container centered at the
 * given latitude and longitude, with a tile layer provided by
 * OpenStreetMap. It also renders a marker at the given position with
 * a popup displaying the given text. The zoom level of the map is
 * adjustable using the zoom prop.
 *
 * @param {{lat: number, long: number, popupText: string, zoom: number}} props
 * @returns {JSX.Element} A MapContainer element with a TileLayer and a
 *                        Marker element.
 */
function LocationMap({ lat, long, popupText, zoom }) {
  const position = [lat, long];
  function PanToLocation({ lat, long }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo([lat, long], map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }, [lat, long, map]);

    return null;
  }
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>{popupText}</Popup>
      </Marker>
      <PanToLocation lat={lat} long={long} />
    </MapContainer>
  );
}

export default LocationMap;
