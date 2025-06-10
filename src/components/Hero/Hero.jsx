import React from "react";
import "./Hero.css";
import heroImage from "../../assets/LOGO.png";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="min-h-[450px] sm:min-h-[550px] flex justify-center items-center text-white relative pt-24"
      style={{
        background: "linear-gradient(90deg, #306ab2 0%, #8d8664 100%)",
      }}
    >
      <div className="container pb-8 sm:pb-0 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center gap-4 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Wir bauen ein starkes{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="30"
                className="bg-clip-text text-transparent bg-gradient-to-b from-[#111111] to-[#306ab2] font-cursive2"
              >
                Fundament
              </span>{" "}
              für Ihre Vision
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm sm:text-base text-gray-200 max-w-[350px] mx-auto sm:mx-0"
            >
              Zuverlässige Konstruktionen, ein Projekt nach dem anderen.
              Verwirklichen Sie Ihre Bauprojekte mit Qualität und Engagement.
            </p>
            <div data-aos="fade-up" data-aos-delay="250">
              <button
                onClick={scrollToBottom}
                className="bg-gradient-to-r from-[#8d8664] to-[#306ab2] border-2 border-[#8d8664] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full text-sm sm:text-base"
              >
                Ihr Projekt starten
              </button>
            </div>
          </div>

          {/* Right Side Logo / Building */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="flex flex-col justify-center items-center text-center sm:text-left relative order-1 sm:order-2"
          >
            {/* Image on top of the gradient background */}
            <img
              src={heroImage}
              alt="Apex Nova Bau Logo"
              className="w-48 sm:w-64 md:w-72 lg:w-80 drop-shadow-lg"
              style={{ filter: "drop-shadow(0 0 12px rgba(0,0,0,0.4))" }}
            />

            {/* Optional Building Text Below Image */}
            <div className="building-text mt-4">
              <div className="roof"></div>
              <div className="building-row">
                <span className="letter letter-0">A</span>
                <div className="divider"></div>
                <span className="letter letter-1">p</span>
                <div className="divider"></div>
                <span className="letter letter-2">e</span>
                <div className="divider"></div>
                <span className="letter letter-3">x</span>
              </div>
              <div className="building-row apex-row">
                <span className="letter letter-4">N</span>
                <div className="divider"></div>
                <span className="letter letter-5">o</span>
                <div className="divider"></div>
                <span className="letter letter-6">v</span>
                <div className="divider"></div>
                <span className="letter letter-7">a</span>
              </div>
              <div className="building-row building-bottom">
                <span className="letter letter-8">B</span>
                <div className="divider"></div>
                <span className="letter letter-9">a</span>
                <div className="divider"></div>
                <span className="letter letter-10">u</span>
              </div>
              <p className="slogan">Nachhaltigkeit und Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
