import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import "./Syles.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PropertyCard from "../../components/card/property/Property";
import ContainerFull from "../../components/container/ContainerFull";
import { ContainerForLoader } from "../../components/loading/Container";
import { CityGridMap, CityList, CityMap } from "./Styles";
import { CityPageStyled } from "./Styles";
import NoProperties from "../../components/notfound/noproperties/NoProperties";

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
    return community.properties.forEach((property) => {
      getAllPropertiesOfCurrentCity.push(property);
    });
  });
  console.log(getAllPropertiesOfCurrentCity);

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
            {getAllPropertiesOfCurrentCity.length > 0 ? (
              getAllPropertiesOfCurrentCity.map((property) => {
                let community = String(property.address.community).toLocaleLowerCase().replace(" ", "-");
                return (
                  <Fragment>
                    <PropertyCard
                      img="https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/343046/slide_7801023.v.5f7bcd48e1ff7322a5428f27c8035b81.jpg"
                      key={property._id}
                      type={property.type}
                      community={property.address.community}
                      price={property.price}
                      address={property.address.street}
                      company={property.price}
                      link={community + "/" + property._id}
                    />
                  </Fragment>
                );
              })
            ) : (
              <NoProperties />
            )}
          </CityList>
        </CityGridMap>
      </ContainerFull>
      <Outlet title="Funciona" />
    </CityPageStyled>
  );
};

export default CityPage;
