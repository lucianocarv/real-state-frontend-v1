import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import HeaderComponent from "../components/header/Header";
import Layout from "./Styles";
import View from "../components/view/View";

import Container from "../components/container/container";
import Menu from "../components/menu/Menu";
const LayoutComponent = () => {
  const [menuView, setMenuView] = useState(true);
  function handleView() {
    setMenuView(!menuView);
  }
  return (
    <Fragment>
      <Container block full justify="flex-start">
        <Layout>
          <Menu menuView={menuView} handleView={handleView} />
          <HeaderComponent menuView={menuView} handleView={handleView} />
          <Outlet />
        </Layout>
        <View />
      </Container>
    </Fragment>
  );
};

export default LayoutComponent;
