import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles";

import Layout from "./layout/Layout";
import HomePage from "./pages/home";
import CityPage from "./pages/city/city-main/index";
import CommunityPage from "./pages/community";
import View from "./components/view/View";
import ProvincePage from "./pages/province/province-main/index";
import CreateProvincePage from "./pages/province/province-create/index";

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
          <Route path="/:province/:city/:community" element={<CommunityPage />}></Route>
          <Route path="/province/create" element={<CreateProvincePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
