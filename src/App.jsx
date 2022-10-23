import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles";

import Layout from "./layout/Layout";
import HomePage from "./pages/home/Home";
import ProvincePage from "./pages/province/Province";
import CityPage from "./pages/city/City";
import CommunityPage from "./pages/community/Community";
import View from "./components/property/View";
import CreateProvincePage from "./pages/province/CreateProvince";

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
          </Route>
          <Route path="/:province/:city/:community" element={<CommunityPage />}></Route>
          <Route path="/province/create" element={<CreateProvincePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
