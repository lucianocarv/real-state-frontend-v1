import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles";

import Layout from "./layout/Layout";
import HomePage from "./pages/home";
import ProvincePage from "./pages/province";
import CityPage from "./pages/city";
import CommunityPage from "./pages/community";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/:province" element={<ProvincePage />}></Route>
          <Route path="/:province/:city" element={<CityPage />}></Route>
          <Route path="/:province/:city/:community" element={<CommunityPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
