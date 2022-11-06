import React, { useContext } from "react";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../../../api";

import { CoordsContext } from "../../../contexts/CoordsContext";

import { TextField } from "@mui/material";
import { Styles } from "./styles";

const MapProperty = () => {
  const { coords, setCoords } = useContext(CoordsContext);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });
  function handleCoords(e) {
    setCoords({ lat: e.latLng.lat({}), lng: e.latLng.lng({}) });
  }
  return (
    <Styles>
      {isLoaded ? (
        <GoogleMap
          options={{ mapId: "381a4d9b52c9a359", clickableIcons: false }}
          mapContainerClassName="property-map"
          center={{ lat: coords.lat, lng: coords.lng }}
          zoom={11}
          onClick={handleCoords}
        >
          <MarkerF position={{ lat: coords.lat, lng: coords.lng }} />
        </GoogleMap>
      ) : (
        "Loading..."
      )}
      <div className="coords-section">
        <TextField
          id="outlined-basic"
          fullWidth
          disabled
          variant="outlined"
          size="small"
          value={coords.lat}
        />

        <TextField
          id="outlined-basic"
          fullWidth
          disabled
          variant="outlined"
          size="small"
          value={coords.lng}
        />
      </div>
    </Styles>
  );
};

export default MapProperty;
