// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";
import Banner from "../components/Banner/Banner.jsx";
import GetInTouch from "../components/GetInTouch/GetInTouch.jsx";
import Expertise from "../components/Expertise/Expertise.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Services />
      <GetInTouch />
      <Expertise />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
