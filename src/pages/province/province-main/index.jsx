import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import { PrincipalTitle } from "../../../components/titles/Titles";
import { LoaderContainer } from "../../../components/loading/Container";
import Container from "../../../components/container/container";
import PrincipalCard from "../../../components/card/principal/Principal";

import { ProvincePageStyled } from "./styles";

const ProvincePage = () => {
  const { province } = useParams();
  const [currentProvince, setCurrentProvince] = useState([{}]);
  const [cities, setCities] = useState([{}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}`)
      .then((data) => data.json())
      .then((data) => {
        setCurrentProvince(data);
        setCities(data[0].cities);

        setLoading(false);
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
