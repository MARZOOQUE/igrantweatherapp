import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();
  const lat = selectPosition?.city?.coord?.lat ? selectPosition?.city?.coord?.lat : 11.8745
  const lon = selectPosition?.city?.coord?.lon ? selectPosition?.city?.coord?.lon : 75.3704

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(lat,lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {
  const { selectPosition } = props;
  const lat = selectPosition?.city?.coord?.lat ? selectPosition?.city?.coord?.lat : 11.8745
  const lon = selectPosition?.city?.coord?.lon ? selectPosition?.city?.coord?.lon : 75.3704
  const locationSelection = [lat, lon];
  const MapUrl = "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=BrOT1HtiVLemQLWqTpyB"
  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url= {MapUrl}
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
