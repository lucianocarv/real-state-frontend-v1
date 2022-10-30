import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindowF } from "@react-google-maps/api";

import { FaMapMarker } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { BoxIcon } from "./styles";

const Map = ({ center, properties }) => {
  const { province, city, community } = useParams();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "?",
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  const scrollToProperty = (elementRef) => {
    CityList.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

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
            <BoxIcon>
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
