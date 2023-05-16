import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.scss";
import HomePage from "./pages/HomePage";
import PersonajesPage from "./pages/PersonajesPage";
import AboutPage from "./pages/AboutPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personajes" element={<PersonajesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
