import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import HeaderComponent from "../components/header/Header";
import ContainerFull from "../components/container/ContainerFull";
import Layout from "./Styles";
import View from "../components/property/View";

import styled from "styled-components";
const LayoutComponent = () => {
  return (
    <Fragment>
      <View />
      <ContainerFull>
        <Layout>
          <HeaderComponent />
          <Outlet />
        </Layout>
      </ContainerFull>
    </Fragment>
  );
};

styled(LayoutComponent)`
  filter: brightness(0.9);
`;

export default LayoutComponent;
