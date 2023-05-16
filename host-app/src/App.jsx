import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "Navbar/Navbar";

import "./index.scss";
import HomePage from "./pages/HomePage";
import PersonajesPage from "./pages/PersonajesPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="mx-20 mt-5">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to='/' />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
