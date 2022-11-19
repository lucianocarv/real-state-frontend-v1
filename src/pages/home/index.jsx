import React, { Fragment, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import { Container } from "../../components/container/index";
import { LoaderContainer } from "../../components/loading/index";
import PrincipalCard from "../../components/card/principal-card/index";
import Footer from "../../components/footer/index";

import { Styles } from "./styles";

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
      <Styles>
        <Container justify="center">
          <div className="__title_animated">
            <Container justify="center">Find a Home,</Container>
            <Container justify="center">
              Rent a Home <span className="__animation">Faster!</span>
            </Container>
          </div>
        </Container>
        <Container justify="center">
          <div className="__cities_section">
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
          </div>
        </Container>
      </Styles>
      <Footer />
    </Container>
  );
};

export default HomePage;
