import React, { useContext } from "react";
import { GoogleMap, useJsApiLoader, InfoWindowF } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../../../api";
import { Link, useParams } from "react-router-dom";

import { PinContext } from "../../../contexts/PinContext";

import { FaMapMarker } from "react-icons/fa";
import { BoxIcon } from "./styles";

const Map = ({ center, properties }) => {
  const { currentPin } = useContext(PinContext);
  const { province, city } = useParams();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry. Try again!</div>;
  }

  return isLoaded ? (
    <GoogleMap
      options={{ mapId: "381a4d9b52c9a359" }}
      mapContainerClassName="city-map"
      mapContainerStyle={{ height: "100%", width: "100%" }}
      center={center}
      zoom={11}
    >
      {properties.map((prop) => (
        <InfoWindowF key={prop._id} position={prop.address.coords}>
          <Link to={`/${province}/${city}/property/${prop._id}`}>
            <BoxIcon pin={currentPin == prop._id ? true : false} data-id={prop._id}>
              <FaMapMarker style={{ fontSize: "30px" }} />
            </BoxIcon>
          </Link>
        </InfoWindowF>
      ))}
    </GoogleMap>
  ) : (
    "Loading..."
  );
};

export default Map;
