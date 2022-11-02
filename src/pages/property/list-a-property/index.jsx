import React from "react";

import { Styles } from "./styles";

import Container from "../../../components/container/container";
import FormListAProperty from "../../../components/forms/list-a-property/ListAProperty";
import MapProperty from "../../../components/maps/property/map";
import { CoordsContextProvider } from "../../../contexts/CoordsContext";

const ListAPropertyPage = () => {
  return (
    <CoordsContextProvider>
      <Container full justify="center">
        <Container padding="2rem 0rem">
          <Styles>
            <h1>List A Property</h1>
            <div className="sections">
              <div className="left">
                <FormListAProperty />
              </div>
              <div className="right">
                <MapProperty />
              </div>
            </div>
          </Styles>
        </Container>
      </Container>
    </CoordsContextProvider>
  );
};

export default ListAPropertyPage;
