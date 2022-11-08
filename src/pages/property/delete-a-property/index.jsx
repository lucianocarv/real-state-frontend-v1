import React, { useEffect, useState } from "react";
import { Container } from "../../../components/container";

import Card from "../../../components/card/delete-property-card/index";
import { Styles } from "./styles";

const DeleteAPropertyPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/province/city/community/properties/all`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProperties(data);
      });
  });
  return (
    <Container full>
      <Container>
        <Styles>
          {properties.map((property) => {
            return <Card key={property._id} property={property} />;
          })}
        </Styles>
      </Container>
    </Container>
  );
};

export default DeleteAPropertyPage;
