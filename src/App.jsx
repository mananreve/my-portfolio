import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import PersonalContact from "./components/sections/PersonalContact";
import AboutEm from "./components/sections/AboutEm";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personal" element={<PersonalContact />} />
        <Route path="/aboutem" element={<AboutEm />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
