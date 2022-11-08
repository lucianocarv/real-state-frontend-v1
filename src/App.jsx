import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles";

import Layout from "./layout/index";
import View from "./components/view/index";

import HomePage from "./pages/home/index";
import CityPage from "./pages/city/index";
import ProvincePage from "./pages/province/index";
import ListAPropertyPage from "./pages/property/list-a-property-page/index";
import DeleteAPropertyPage from "./pages/property/delete-a-property";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/:province" element={<ProvincePage />}></Route>
          <Route path="/:province/:city" element={<CityPage />}>
            <Route path="/:province/:city/:community/:property" element={<View />}></Route>
            <Route exact path="/:province/:city/property/:property" element={<View />}></Route>
          </Route>
          <Route exact path="/list-a-property" element={<ListAPropertyPage />}></Route>
          <Route exact path="/delete-a-property" element={<DeleteAPropertyPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
