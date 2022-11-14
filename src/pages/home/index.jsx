import React, { Fragment, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import PrincipalCard from "../../components/card/principal-card/index";
import { Container } from "../../components/container/index";
import Footer from "../../components/footer/index";
import { LoaderContainer } from "../../components/loading/index";

import {
  HomePageStyled,
  HomePageTitleStyled,
  HomePageTitleAnimationStyled,
  HomePageCitiesSectionStyled,
} from "./styles";

const HomePage = () => {
  document.title = "Rentfaster Clone | Home";

  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}`)
      .then((data) => data.json())
      .then((data) => {
        setProvinces(data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoaderContainer>
      <PuffLoader />
    </LoaderContainer>
  ) : (
    <Container full>
      <HomePageStyled>
        <Container justify="center">
          <HomePageTitleStyled>
            <Container justify="center">Find a Home,</Container>
            <Container justify="center">
              Rent a Home <HomePageTitleAnimationStyled>Faster!</HomePageTitleAnimationStyled>
            </Container>
          </HomePageTitleStyled>
        </Container>
        <Container justify="center">
          <HomePageCitiesSectionStyled>
            {provinces.map((province) => {
              return (
                <PrincipalCard
                  key={province._id}
                  link={String(province.initials).toLowerCase()}
                  title={province.name}
                  image={province.img_cover}
                />
              );
            })}
          </HomePageCitiesSectionStyled>
        </Container>
      </HomePageStyled>
      <Footer />
    </Container>
  );
};

export default HomePage;
