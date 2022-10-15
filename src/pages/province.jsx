import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/card/principal/Card";
import { PuffLoader } from "react-spinners";

import ContainerMd from "../components/container/ContainerMd";
import { Name } from "../components/titles/PrincipalTitle";
import { ContainerForLoader } from "../components/loading/Container";
import ContainerFull from "../components/container/ContainerFull";

const ProvincePageStyles = styled.div`
  width: 100vw;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProvincePage = () => {
  const { province } = useParams();
  const [prov, setProvince] = useState([{}]);
  const [cities, setCities] = useState([{}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}`)
      .then((data) => data.json())
      .then((data) => {
        setProvince(data);
        setCities(data[0].cities);

        setLoading(false);
      });
  }, []);

  return (
    <ContainerFull>
      <ProvincePageStyles>
        {loading ? (
          <ContainerForLoader>
            <PuffLoader />
          </ContainerForLoader>
        ) : (
          <Fragment>
            <ContainerMd justify="center">
              <Name>{prov[0].name}</Name>
            </ContainerMd>
            <ContainerMd justify="center">
              {cities.map((city) => {
                let nameParse = String(city.name).toLocaleLowerCase().replace(" ", "-");
                return <Card key={city._id} title={city.name} link={nameParse} image={city.img_cover} />;
              })}
            </ContainerMd>
          </Fragment>
        )}
      </ProvincePageStyles>
    </ContainerFull>
  );
};

export default ProvincePage;
