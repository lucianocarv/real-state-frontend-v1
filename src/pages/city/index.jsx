import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { PinContext } from "../../contexts/PinContext";

import { Container } from "../../components/container/index";
import PropertyCard from "../../components/card/property-card/index";
import { LoaderContainer } from "../../components/loading/index";
import Map from "../../components/maps/city-map/index";

import { PuffLoader } from "react-spinners";
import { BsEmojiFrown } from "react-icons/bs";

import { Styles } from "./styles";

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
        document.title = `Rentfaster Clone | ${data[0].name} ${province.toLocaleUpperCase()}`;
      });
  }, [city]);

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
    <Styles>
      <Container height="91vh" full justify="center">
        <div className="__city_container">
          <PinContext.Provider value={{ currentPin, setCurrentPin }}>
            <div className="__map">
              <Map center={currentCity.coords} properties={allProperties} />
            </div>
            <ul className="__property_list">
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
                <div className="__not_found">
                  <BsEmojiFrown />
                  <p>Sorry, no properties were found for this city.</p>
                </div>
              )}
            </ul>
          </PinContext.Provider>
        </div>
      </Container>
      <Outlet />
    </Styles>
  );
};

export default CityPage;
