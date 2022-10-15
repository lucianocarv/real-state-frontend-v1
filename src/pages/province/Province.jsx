import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import { Name } from "../../components/titles/PrincipalTitle";
import { ContainerForLoader } from "../../components/loading/Container";
import ContainerMd from "../../components/container/ContainerMd";
import ContainerFull from "../../components/container/ContainerFull";
import Card from "../../components/card/principal/Card";

import { ProvincePageStyled } from "./Styles";

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
    <ContainerFull>
      <ProvincePageStyled>
        {loading ? (
          <ContainerForLoader>
            <PuffLoader />
          </ContainerForLoader>
        ) : (
          <Fragment>
            <ContainerMd justify="center">
              <Name>{currentProvince[0].name}</Name>
            </ContainerMd>
            <ContainerMd justify="center">
              {cities.map((city) => {
                let nameParse = String(city.name).toLocaleLowerCase().replace(" ", "-");
                return <Card key={city._id} title={city.name} link={nameParse} image={city.img_cover} />;
              })}
            </ContainerMd>
          </Fragment>
        )}
      </ProvincePageStyled>
    </ContainerFull>
  );
};

export default ProvincePage;
