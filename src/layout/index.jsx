import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import Layout from "./Styles";
import View from "../components/view/index";
import Container from "../components/container/default-container/index";
import HeaderComponent from "../components/header/index";
import Menu from "../components/menu/default-menu/index";

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
