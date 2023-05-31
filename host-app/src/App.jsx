import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "Navbar/Navbar";

import "./index.scss";
import NotFoundPage from "./pages/NotFoundPage";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const DetallePage = lazy(() => import("./pages/DetallePage"))

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="mx-20 mt-5">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes" element={<PersonajesPage />} />
          <Route path="/personajes/:id" element={<DetallePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to='/' />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
