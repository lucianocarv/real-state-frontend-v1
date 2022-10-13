import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Navigation";

import Layout from "./layout/Layout";
import GlobalStyles from "./Styles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
