import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Container/Homepage/Homepage";
import About from "./Container/About/AboutUs";
import Contact from "./Container/Contact/Contact";
import Telecom from "./Container/Telecom/Telecom";
import Manufacturing from "./Container/Manufacturing/Manufacturing";
import Article from "./Container/Article/Article";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
