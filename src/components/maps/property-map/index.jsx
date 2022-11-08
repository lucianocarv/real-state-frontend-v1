import React, { useContext } from "react";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { CoordsContext } from "../../../contexts/CoordsContext";

import { Styles } from "./styles";

const Map = () => {
  const { coords, setCoords } = useContext(CoordsContext);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  function handleCoords(e) {
    setCoords({ lat: e.latLng.lat({}), lng: e.latLng.lng({}) });
  }
  return (
    <Styles>
      {isLoaded ? (
        <GoogleMap
          options={{ mapId: "3def645cbe330e12", clickableIcons: false, panControl: true }}
          mapContainerClassName="property-map"
          center={{ lat: coords.lat, lng: coords.lng }}
          zoom={11}
          onClick={handleCoords}
        >
          <MarkerF position={{ lat: coords.lat, lng: coords.lng }} />
        </GoogleMap>
      ) : loadError ? (
        "Error"
      ) : (
        "Loading..."
      )}
    </Styles>
  );
};

export default Map;
