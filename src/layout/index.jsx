import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import Styles from "./Styles";

import Modal from "../components/modal/property-modal/index";
import { Container } from "../components/container/index";
import HeaderComponent from "../components/header/index";
import Menu from "../components/menu/index";

const Layout = () => {
  const [menuView, setMenuView] = useState(true);
  function handleView() {
    setMenuView(!menuView);
  }
  return (
    <Fragment>
      <Container block full justify="flex-start">
        <Styles>
          <Menu menuView={menuView} handleView={handleView} />
          <HeaderComponent menuView={menuView} handleView={handleView} />
          <Outlet />
        </Styles>
        <Modal />
      </Container>
    </Fragment>
  );
};

export default Layout;
