import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { Container } from "../../components/container/index";
import PropertyCard from "../../components/card/property-card/index";
import { LoaderContainer } from "../../components/loading/index";
import Map from "../../components/maps/city-map/index";

import { PinContext } from "../../contexts/PinContext";

import { PuffLoader } from "react-spinners";
import { BsEmojiFrown } from "react-icons/bs";
import { CityPageStyled, CityGridMap, CityList, CityMap, NotFound } from "./styles";

const CityPage = () => {
  const { province, city } = useParams();
  const [currentCity, setCurrentCity] = useState();
  const [loading, setLoading] = useState(true);
  const [communities, setCommunities] = useState([]);

  const [currentPin, setCurrentPin] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}`)
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

  return loading ? (
    <LoaderContainer>
      <PuffLoader />
    </LoaderContainer>
  ) : (
    <CityPageStyled>
      <Container full justify="center">
        <CityGridMap>
          <PinContext.Provider value={{ currentPin, setCurrentPin }}>
            <CityMap>
              <Map center={currentCity.coords} properties={allProperties} />
            </CityMap>
            <CityList>
              {allProperties.length > 0 ? (
                allProperties.map((property) => {
                  let community = String(property.address.community)
                    .toLocaleLowerCase()
                    .replace(" ", "-");
                  return (
                    <PropertyCard
                      img={property.img_cover}
                      key={property._id}
                      type={property.type}
                      community={property.address.community}
                      price={property.prices.min + "-" + property.prices.max}
                      address={property.address.street}
                      manager={property.contact.manager}
                      link={community + "/" + property._id}
                      id={property._id}
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
          </PinContext.Provider>
        </CityGridMap>
      </Container>
      <Outlet title="Funciona" />
    </CityPageStyled>
  );
};

export default CityPage;
