import React from "react";
import { FaHardHat, FaTruck, FaTools } from "react-icons/fa";
import aboutImg from "../../assets/img4.JPG";

const bgStyle = {
  background: "linear-gradient(90deg, #8d8664 0%, #306ab2 100%)",
};

const Banner = () => {
  return (
    <section id="about" style={bgStyle} className="text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Apex Nova Bau"
              className="rounded-full w-80 h-80 object-cover shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold font-cursive text-white drop-shadow-lg"
            >
              Ihr Partner für Bau & Service
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-white/90 leading-relaxed"
            >
              Mit einem erfahrenen Team und einem Auge für Details setzen wir Bauprojekte
              mit Höchstleistung und Leidenschaft um. Ihre Vision, unsere Präzision.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4" data-aos="fade-up">
                  <FaHardHat className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                  <span className="text-lg font-medium">Sicherheitsplanung</span>
                </div>
                <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
                  <FaTruck className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                  <span className="text-lg font-medium">Pünktliche Materiallogistik</span>
                </div>
                <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
                  <FaTools className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                  <span className="text-lg font-medium">Technische Wartung</span>
                </div>
              </div>

              {/* Quality Block */}
              <div
                className="border-l-4 border-white/40 pl-5 space-y-3"
                data-aos="slide-left"
              >
                <h3 className="text-2xl font-cursive text-white font-semibold">
                  Meisterhafte Ausführung
                </h3>
                <p className="text-sm text-white/80">
                  Unser Anspruch: Perfektion in jedem Detail. Mit Kompetenz, Stil und Vertrauen
                  setzen wir Ihre Pläne in die Tat um.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
