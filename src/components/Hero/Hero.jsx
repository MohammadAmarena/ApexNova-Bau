import React from "react";

const Hero = () => {
  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="min-h-[450px] sm:min-h-[550px] bg-primary flex justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://picsum.photos/800/800')",
        }}
      >
        {/* Optional overlay to increase text contrast */}
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="container pb-8 sm:pb-0 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Section */}
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
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/100 font-cursive"
                >
                  Fundament
                </span>{" "}
                für Ihre Vision
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-sm sm:text-base text-gray-300 max-w-[350px] mx-auto sm:mx-0"
              >
                Zuverlässige Konstruktionen, ein Projekt nach dem anderen.
                Verwirklichen Sie Ihre Bauprojekte mit Qualität und Engagement.
              </p>
              <div data-aos="fade-up" data-aos-delay="500">
                <button
                  onClick={scrollToBottom}
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full text-sm sm:text-base"
                >
                  Ihr Projekt starten
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[350px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src="https://picsum.photos/75/75"
                alt="Projekt Bild"
                className="w-[180px] sm:w-[400px] sm:scale-110 mx-auto spin rounded-full"
              />

              {/* "Höchste Qualität" Badge */}
              <div
                data-aos="fade-left"
                className="bg-white/90 border border-gray-200 p-1 sm:p-2 rounded-md absolute top-6 left-6 text-xs sm:text-sm text-black font-medium"
              >
                <span>Höchste Qualität</span>
              </div>

              {/* "Verlässlicher Service" Badge */}
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-white/90 border border-gray-200 p-1 sm:p-2 rounded-md absolute bottom-6 right-6 text-xs sm:text-sm text-black font-medium"
              >
                <span>Verlässlicher Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
