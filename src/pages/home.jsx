import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

import CityCard from "../components/card/principal/Card";
import ContainerFull from "../components/container/ContainerFull";
import ContainerMd from "../components/container/ContainerMd";
import { ContainerForLoader } from "../components/loading/Container";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HomeTitle = styled.h1`
  margin-top: 1rem;
  padding: 2rem;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const GreenStyle = styled.span`
  color: #0b846e;
  padding: 0rem 0.8rem;
  animation: init 5s;
  animation-iteration-count: infinite;
  @keyframes init {
    0% {
      transform: translateY(600px) skew(-40deg);
    }
    20% {
      transform: translate(0px);
    }
    80% {
      transform: translate(0px);
    }
    100% {
      transform: translateX(400px) skew(-60deg);
    }
  }
`;

const SelectAreaStyle = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((data) => data.json())
      .then((data) => {
        setProvinces(data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <ContainerForLoader>
      <PuffLoader />
    </ContainerForLoader>
  ) : (
    <ContainerFull>
      <HomeStyles>
        <ContainerMd justify="center">
          <HomeTitle>
            <ContainerMd justify="center">Find a Home,</ContainerMd>
            <ContainerMd justify="center">
              Rent a Home <GreenStyle>Faster!</GreenStyle>
            </ContainerMd>
          </HomeTitle>
        </ContainerMd>
        <ContainerMd justify="center">
          <SelectAreaStyle>
            {provinces.map((province) => {
              return <CityCard key={province._id} link={String(province.initials).toLowerCase()} title={province.name} image={province.img_cover} />;
            })}
          </SelectAreaStyle>
        </ContainerMd>
      </HomeStyles>
    </ContainerFull>
  );
};

export default HomePage;
