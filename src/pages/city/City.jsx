import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import PropertyCard from "../../components/card/property/Property";
import ContainerFull from "../../components/container/ContainerFull";
import ContainerMd from "../../components/container/ContainerMd";
import { ContainerForLoader } from "../../components/loading/Container";
import { Name } from "../../components/titles/PrincipalTitle";

import { CityPageStyled, CityPagePropertiesContainer, CityPageFilterContainer } from "./Styles";

const CityPage = () => {
  const { province, city } = useParams();
  const [currentCity, setCurrentCity] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}/${city}`)
      .then((city) => city.json())
      .then((city) => {
        setCurrentCity(city);
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

  return loading ? (
    <ContainerForLoader>
      <PuffLoader />
    </ContainerForLoader>
  ) : (
    <CityPageStyled>
      <Name>{currentCity[0].name}</Name>
      <ContainerFull>
        <ContainerMd>
          <CityPageFilterContainer></CityPageFilterContainer>
        </ContainerMd>
      </ContainerFull>
      <ContainerMd justify="center">
        <CityPagePropertiesContainer>
          {getAllPropertiesOfCurrentCity.map((property) => {
            return <PropertyCard link={property._id} type={property.type} address={property.address.street} community={property.address.community} price={property.price} img={property.img_cover} />;
          })}
        </CityPagePropertiesContainer>
      </ContainerMd>
    </CityPageStyled>
  );
};

export default CityPage;
