import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import PrincipalCard from "../../components/card/principal/Principal";
import Container from "../../components/container/container";
import Footer from "../../components/footer/Footer";
import { LoaderContainer } from "../../components/loading/Container";

import {
  HomePageStyled,
  HomePageTitleStyled,
  HomePageTitleAnimationStyled,
  HomePageCitiesSectionStyled,
} from "./Styles";

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
    <LoaderContainer>
      <PuffLoader />
    </LoaderContainer>
  ) : (
    <Container full justify="center">
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
