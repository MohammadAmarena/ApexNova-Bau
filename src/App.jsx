import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import GetInTouch from "./components/GetInTouch/GetInTouch.jsx";
import Expertise from "./components/Expertise/Expertise.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GalleryPage from "./components/Gallery/GalleryPage.jsx"; 
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-blue-500 dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Hero />
      <Services />
      <GetInTouch />
      <Expertise />
      <Banner /><br />
      <Footer />
    </div>
  );
};

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
