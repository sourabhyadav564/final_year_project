import React from "react";
import "./App.css";
import "./homepage.css";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import "aos/dist/aos.css";
import Homepagecompone from "./components/Homepagecompone.jsx";
import Homepagecomptwo from "./components/Homepagecomptwo.jsx";
import Homepagecompthree from "./components/Homepagecompthree.jsx";
import Homepagecompfour from "./components/Homepagecompfour.jsx";
import Homepagecompfive from "./components/Homepagecompfive.jsx";
import Homepagecompsix from "./components/Homepagecompsix.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
