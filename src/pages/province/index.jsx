import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import { PrincipalTitle } from "../../components/titles/index";
import { LoaderContainer } from "../../components/loading/index";
import { Container } from "../../components/container/index";
import PrincipalCard from "../../components/card/principal-card/index";

import { ProvincePageStyled } from "./styles";

const ProvincePage = () => {
  const { province } = useParams();
  const [currentProvince, setCurrentProvince] = useState([]);
  const [cities, setCities] = useState([{}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/${province}`)
      .then((province) => province.json())
      .then((province) => {
        setCurrentProvince(province);
        setCities(province[0].cities);
        setLoading(false);
        document.title = `Rentfaster Clone | ${province[0].name}`;
      });
  }, []);
  return (
    <Container full justify="center">
      <ProvincePageStyled>
        {loading ? (
          <LoaderContainer>
            <PuffLoader />
          </LoaderContainer>
        ) : (
          <Fragment>
            <Container justify="center">
              <PrincipalTitle>{currentProvince[0].name}</PrincipalTitle>
            </Container>
            <Container justify="center">
              {cities.map((city) => {
                let nameParse = String(city.name).toLocaleLowerCase().replace(" ", "-");
                return (
                  <PrincipalCard
                    key={city._id}
                    title={city.name}
                    link={nameParse}
                    image={city.img_cover}
                  />
                );
              })}
            </Container>
          </Fragment>
        )}
      </ProvincePageStyled>
    </Container>
  );
};

export default ProvincePage;
