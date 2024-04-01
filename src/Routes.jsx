import React from "react";
import { Route, Routes } from "react-router-dom";

// Views
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Portfolio from "./Views/Portfolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;
