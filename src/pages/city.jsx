import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import PropertyCard from "../components/card/property/Property";
import ContainerFull from "../components/container/ContainerFull";
import ContainerMd from "../components/container/ContainerMd";
import { ContainerForLoader } from "../components/loading/Container";
import { Name } from "../components/titles/PrincipalTitle";

const CityPageStyles = styled.div`
  margin: 1rem auto;
`;

const CityPage = () => {
  const { province, city } = useParams();
  const [acity, setCity] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}/${city}`)
      .then((data) => data.json())
      .then((data) => {
        setCity(data);
        setCommunities(data[0].communities);
        setLoading(false);
      });
  }, []);

  const allProperties = [];
  communities.forEach((community) => {
    return community.properties.forEach((property) => allProperties.push(property));
  });
  console.log(allProperties);

  const ContainerProperties = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 5px;

    @media screen and (max-width: 1280px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  `;

  communities.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  const FilterContainer = styled.div`
    width: 70%;
    height: 3.5rem;
    border: 2px solid #0b846e;
    margin: 0 auto;
    margin-bottom: 1rem;
  `;

  return loading ? (
    <ContainerForLoader>
      <PuffLoader />
    </ContainerForLoader>
  ) : (
    <CityPageStyles>
      <Name>{acity[0].name}</Name>
      <ContainerFull>
        <ContainerMd>
          <FilterContainer></FilterContainer>
        </ContainerMd>
      </ContainerFull>
      <ContainerMd justify="center">
        <ContainerProperties>
          {allProperties.map((property) => {
            return <PropertyCard link={property._id} type={property.type} address={property.address.street} community={property.address.community} price={property.price} img={property.img_cover} />;
          })}
        </ContainerProperties>
      </ContainerMd>
    </CityPageStyles>
  );
};

export default CityPage;
