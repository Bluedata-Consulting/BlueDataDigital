import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Container/Homepage/Homepage";
import About from "./Container/About/AboutUs";
import Contact from "./Container/Contact/Contact";
import Telecom from "./Container/Telecom/Telecom";
import Manufacturing from "./Container/Manufacturing/Manufacturing";
import Article from "./Container/Article/Article";
import AI from "./Container/AI/AI";
import GenAI from "./Container/GenAI/GenAI";
import Cloud from "./Container/Cloud/Cloud";
import RPA from "./Container/RPA/RPA";
import Blockchain from "./Container/Blockchain/Blockchain";
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
          <Route path="/ai" element={<AI />} />
          <Route path="/genai" element={<GenAI />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/rpa" element={<RPA />} />
          <Route path="/blockchain" element={<Blockchain />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
