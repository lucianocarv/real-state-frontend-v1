import React, { useContext } from "react";
import { GoogleMap, useJsApiLoader, InfoWindowF } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";

import { PinContext } from "../../../contexts/PinContext";

import { FaMapMarker } from "react-icons/fa";
import { BoxIcon } from "./styles";
import { LoaderContainer } from "../../loading";
import { PulseLoader } from "react-spinners";

const Map = ({ center, properties }) => {
  const { currentPin } = useContext(PinContext);
  const { province, city } = useParams();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry. Try again!</div>;
  }

  return isLoaded ? (
    <GoogleMap
      options={{ mapId: "3def645cbe330e12" }}
      mapContainerStyle={{ height: "100%", width: "100%" }}
      center={center}
      zoom={11}
    >
      {properties.map((prop) => (
        <InfoWindowF key={prop._id} position={prop.address.coords}>
          <Link
            to={`/${province}/${city}/${prop.address.community.toLowerCase().replace(" ", "-")}/${
              prop._id
            }`}
          >
            <BoxIcon pin={currentPin == prop._id ? true : false} data-id={prop._id}>
              <FaMapMarker style={{ fontSize: "30px" }} />
            </BoxIcon>
          </Link>
        </InfoWindowF>
      ))}
    </GoogleMap>
  ) : (
    <LoaderContainer>
      <PulseLoader />
    </LoaderContainer>
  );
};

export default Map;
