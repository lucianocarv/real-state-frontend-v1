import React from "react";

import { Container } from "../../../components/container/index";
import FormListAProperty from "../../../components/forms/list-a-property-form/index";
import { CoordsContextProvider } from "../../../contexts/CoordsContext";

import { Styles } from "./styles";

const ListAPropertyPage = () => {
  return (
    <CoordsContextProvider>
      <Container full justify="center">
        <Container padding="2rem 0rem">
          <h1>List A Property</h1>
          <Styles>
            <div className="sections">
              <FormListAProperty />
            </div>
          </Styles>
        </Container>
      </Container>
    </CoordsContextProvider>
  );
};

export default ListAPropertyPage;
