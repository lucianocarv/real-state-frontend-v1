import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles";

import Layout from "./layout/index";
import PropertyModal from "./components/modal/property-modal/index";

import HomePage from "./pages/home/index";
import CityPage from "./pages/city/index";
import ProvincePage from "./pages/province/index";
import ListAPropertyPage from "./pages/property/list-a-property-page/index";
import ManageProperties from "./pages/property/manage-properties-page/index";
import ChangePropertyPage from "./pages/property/change-property-page/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/:province" element={<ProvincePage />}></Route>
          <Route path="/:province/:city" element={<CityPage />}>
            <Route path="/:province/:city/:community/:property" element={<PropertyModal />}></Route>
          </Route>
          <Route exact path="/list-a-property" element={<ListAPropertyPage />}></Route>
          <Route exact path="/manage-properties" element={<ManageProperties />}>
            <Route
              exact
              path="/manage-properties/c/c/p/change/:id"
              element={<ChangePropertyPage />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
