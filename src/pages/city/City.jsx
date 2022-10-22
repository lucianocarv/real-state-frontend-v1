import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import "./Syles.css";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import PropertyCard from "../../components/card/property/Property";
import ContainerFull from "../../components/container/ContainerFull";
import { ContainerForLoader } from "../../components/loading/Container";
import { CityGridMap, CityList, CityMap } from "./Styles";

import { CityPageStyled } from "./Styles";

const CityPage = () => {
  const { province, city } = useParams();
  const [currentCity, setCurrentCity] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}/${city}`)
      .then((city) => {
        return city.json();
      })
      .then((city) => {
        setCurrentCity(city[0]);
        setCommunities(city[0].communities);
        setLoading(false);
      });
  }, []);

  const getAllPropertiesOfCurrentCity = [];
  communities.forEach((community) => {
    return community.properties.forEach((property) => getAllPropertiesOfCurrentCity.push(property));
  });

  communities.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "?",
  });

  return loading ? (
    <ContainerForLoader>
      <PuffLoader />
    </ContainerForLoader>
  ) : (
    <CityPageStyled>
      <ContainerFull>
        <CityGridMap>
          <CityMap>{isLoaded ? <GoogleMap mapContainerStyle={{ width: "100%", height: "100%" }} center={currentCity.coords} zoom={11}></GoogleMap> : <PuffLoader />}</CityMap>
          <CityList>
            <PropertyCard type="Apartment" community="Lake Bonavista" img="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg" price="1200 - 1600" />
            <PropertyCard type="House" community="Downtown" img="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg" price="1000 - 1470" />
            <PropertyCard type="Townhouse" community="Lake Bonavista" img="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg" price="2400 - 3500" />
            <PropertyCard type="Apartment" community="Lake Bonavista" img="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg" price="900 - 1890" />
          </CityList>
        </CityGridMap>
      </ContainerFull>
    </CityPageStyled>
  );
};

export default CityPage;
