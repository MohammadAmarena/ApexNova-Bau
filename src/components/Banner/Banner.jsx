import React from "react";
import { FaHardHat, FaTruck, FaTools } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(https://picsum.photos/100/103)`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src='https://picsum.photos/100/101'
                  alt="construction img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin rounded-full"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Zuverlässiger Baustellenservice
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Ihr verlässlicher Partner für sichere und effiziente
                  Baustellenabwicklung, angepasst an alle Anforderungen und
                  höchste Standards.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaHardHat className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Sicherheitsplanung</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                      <span>Materiallieferung</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <FaTools className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                      <span>Fachgerechte Wartung</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive">
                      Qualität und Präzision
                    </h1>
                    <p className="text-sm text-gray-500">
                      Unser Team sorgt für höchste Standards und zuverlässige
                      Umsetzung in jedem Arbeitsschritt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
