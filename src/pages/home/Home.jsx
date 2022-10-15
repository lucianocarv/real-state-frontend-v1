import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import Card from "../../components/card/principal/Card";
import ContainerFull from "../../components/container/ContainerFull";
import ContainerMd from "../../components/container/ContainerMd";
import { ContainerForLoader } from "../../components/loading/Container";

import { HomePageStyled, HomePageTitleStyled, HomePageTitleAnimationStyled, HomePageCitiesSectionStyled } from "./Styles";

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
      <HomePageStyled>
        <ContainerMd justify="center">
          <HomePageTitleStyled>
            <ContainerMd justify="center">Find a Home,</ContainerMd>
            <ContainerMd justify="center">
              Rent a Home <HomePageTitleAnimationStyled>Faster!</HomePageTitleAnimationStyled>
            </ContainerMd>
          </HomePageTitleStyled>
        </ContainerMd>
        <ContainerMd justify="center">
          <HomePageCitiesSectionStyled>
            {provinces.map((province) => {
              return <Card key={province._id} link={String(province.initials).toLowerCase()} title={province.name} image={province.img_cover} />;
            })}
          </HomePageCitiesSectionStyled>
        </ContainerMd>
      </HomePageStyled>
    </ContainerFull>
  );
};

export default HomePage;
