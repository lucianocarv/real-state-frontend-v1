import React, { useState } from "react";
import { Outlet } from "react-router";

import HeaderComponent from "../components/header/Header";
import ContainerFull from "../components/container/ContainerFull";
import Layout from "./Styles";
import View from "../components/property/View";

import { viewContext } from "../contexts/viewContext";
import styled from "styled-components";
const LayoutComponent = () => {
  const [view, setView] = useState("");
  return (
    <viewContext.Provider value={{ view, setView }}>
      <View />
      <ContainerFull view={view}>
        <Layout>
          <HeaderComponent />
          <Outlet />
        </Layout>
      </ContainerFull>
    </viewContext.Provider>
  );
};

styled(LayoutComponent)`
  filter: brightness(0.9);
`;

export default LayoutComponent;
