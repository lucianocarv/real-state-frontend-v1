import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import CityCard from "../components/card/home/ProvinceCard";
import ContainerMd from "../components/container/ContainerMd";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HomeTitle = styled.h1`
  margin-top: 1rem;
  padding: 2rem;
  font-size: 4rem;
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
  padding: 5rem 0rem;
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

  const ConatainerLoading = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
  `;

  return loading ? (
    <ConatainerLoading>
      <BeatLoader />
    </ConatainerLoading>
  ) : (
    <HomeStyles>
      <ContainerMd center>
        <HomeTitle>
          <ContainerMd center>Find a Home,</ContainerMd>
          <ContainerMd center>
            Rent a Home <GreenStyle>Faster!</GreenStyle>
          </ContainerMd>
        </HomeTitle>
      </ContainerMd>
      <ContainerMd center>
        <SelectAreaStyle>
          {provinces.map((province) => {
            return <CityCard link={String(province.initials).toLowerCase()} title={province.name} image={province.img_cover} />;
          })}
        </SelectAreaStyle>
      </ContainerMd>
    </HomeStyles>
  );
};

export default HomePage;
