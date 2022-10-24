import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Outlet, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import Container from "../../components/container/container";
import PropertyCard from "../../components/card/property/Property";
import { LoaderContainer } from "../../components/loading/container";
import { CityGridMap, CityList, CityMap, NotFound } from "./styles";
import { CityPageStyled } from "./styles";
import { BsEmojiFrown } from "react-icons/bs";

const CityPage = () => {
  const { province, city } = useParams();
  const [currentCity, setCurrentCity] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/${province}/${city}`)
      .then((data) => data.json())
      .then((data) => {
        let city = data[0];
        setCurrentCity(city);
        setCommunities(city.communities);
        setLoading(false);
      });
  }, []);

  const allProperties = [];
  communities.forEach((community) => {
    return community.properties.forEach((property) => {
      allProperties.push(property);
    });
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "?",
  });

  return loading ? (
    <LoaderContainer>
      <PuffLoader />
    </LoaderContainer>
  ) : (
    <CityPageStyled>
      <Container full justify="center">
        <CityGridMap>
          <CityMap>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={currentCity.coords}
                zoom={11}
              ></GoogleMap>
            ) : (
              <PuffLoader />
            )}
          </CityMap>
          <CityList>
            {allProperties.length > 0 ? (
              allProperties.map((property) => {
                let community = String(property.address.community)
                  .toLocaleLowerCase()
                  .replace(" ", "-");
                return (
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
                );
              })
            ) : (
              <NotFound>
                <BsEmojiFrown />
                <p>Sorry, no properties were found for this city.</p>
              </NotFound>
            )}
          </CityList>
        </CityGridMap>
      </Container>
      <Outlet title="Funciona" />
    </CityPageStyled>
  );
};

export default CityPage;
