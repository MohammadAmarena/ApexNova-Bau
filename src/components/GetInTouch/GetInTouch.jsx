import React from "react";
import { HiMail } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import bgImage from "../../assets/img12.JPG";

const ToolInfo = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mohammad.amaren94@gmail.com";
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div
      className="py-16 sm:py-20 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text & Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Lassen Sie uns gemeinsam bauen
            </h1>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Ob Trockenbau, Bodenverlegung, Malerarbeiten oder individuelle Möbel- und Küchenmontagen – wir realisieren Ihre Projekte mit Präzision, Qualität und Leidenschaft.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-white bg-gradient-to-r from-[#8d8664] to-[#306ab2] hover:brightness-110 transition"
              >
                <HiMail className="text-xl" />
                Jetzt E-Mail senden
              </button>

              <button
                onClick={scrollToBottom}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white hover:text-[#306ab2] transition"
              >
                <FaArrowDown className="text-lg" />
                Zum Kontaktformular
              </button>
            </div>
          </div>

          {/* RIGHT: Why Choose Us */}
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Warum mit uns bauen?
            </h2>
            <ul className="space-y-3 text-white/90 text-sm sm:text-base">
              <li>✅ Persönliche Beratung & maßgeschneiderte Lösungen</li>
              <li>✅ Höchste Qualitätsstandards in jedem Detail</li>
              <li>✅ Termintreue und zuverlässige Umsetzung</li>
              <li>✅ Über 10 Jahre Erfahrung in der Baubranche</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolInfo;
