import React from "react";

import Container from "../../../components/container/default-container/index";
import FormListAProperty from "../../../components/forms/list-a-property-form/index";
import MapProperty from "../../../components/maps/property-map/index";

import { CoordsContextProvider } from "../../../contexts/CoordsContext";

import { Styles } from "./styles";

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
