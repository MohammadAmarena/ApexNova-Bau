import React from "react";
import "./Hero.css"; // Updated CSS for the new animations and structure
import heroImage from "../../assets/IMG_0018.jpg"; // Import your image

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="min-h-[450px] sm:min-h-[550px] bg-primary flex justify-center items-center text-white bg-cover bg-center relative pt-24" // Added pt-24 for padding
        style={{
          backgroundImage: `url(${heroImage})`, // Use the imported image
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="container pb-8 sm:pb-0 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                Wir bauen ein starkes{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-orange-300 font-cursive2"
                >
                  Fundament
                </span>{" "}
                für Ihre Vision
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm sm:text-base text-gray-300 max-w-[350px] mx-auto sm:mx-0"
              >
                Zuverlässige Konstruktionen, ein Projekt nach dem anderen.
                Verwirklichen Sie Ihre Bauprojekte mit Qualität und Engagement.
              </p>
              <div data-aos="fade-up" data-aos-delay="250">
                <button
                  onClick={scrollToBottom}
                  className="bg-gradient-to-r from-orange-500 to-blue-600 border-2 border-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full text-sm sm:text-base"
                >
                  Ihr Projekt starten
                </button>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="building-container flex flex-col justify-center items-center text-center sm:text-left relative order-1 sm:order-2"
            >
              <div className="building-text">
                <div className="roof"></div>
                <div className="building-row">
                  <span className="letter letter-0">A</span>
                  <div className="divider"></div>
                  <span className="letter letter-1">p</span>
                  <div className="divider"></div>
                  <span className="letter letter-2">e</span>
                  <div className="divider"></div>
                  <span className="letter letter-3">x</span>
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
    </>
  );
};

export default Hero;
