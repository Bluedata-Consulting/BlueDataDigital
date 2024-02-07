import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Container/Homepage/Homepage";
import About from "./Container/About/AboutUs";
import Contact from "./Container/Contact/Contact";
import Telecom from "./Container/Telecom/Telecom";
import Manufacturing from "./Container/Manufacturing/Manufacturing";
import Article from "./Container/Article/Article";
import Article2 from "./Container/Article/Article2";
import Article3 from "./Container/Article/Article3";
import AI from "./Container/AI/AI";
import Cloud from "./Container/Cloud/Cloud";
import RPA from "./Container/RPA/RPA";
import Blockchain from "./Container/Blockchain/Blockchain";
import "./index.css";
import TeamSection from "./Container/Team/TeamSection";
import GenrativeAi from "./Container/GenAI/GenrativeAi";

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
          <Route path="/article-1" element={<Article />} />
          <Route path="/article-2" element={<Article2 />} />
          <Route path="/article-3" element={<Article3 />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/genai" element={<GenrativeAi />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/rpa" element={<RPA />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/team" element={<TeamSection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
