import React from "react";
import { HiMail } from "react-icons/hi"; // Icon für die E-Mail
import { FaArrowDown } from "react-icons/fa"; // Icon für den Scroll-Button

const backgroundStyle = {
  backgroundImage: `url(https://picsum.photos/101/109)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const ToolInfo = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mohammad.amaren94@gmail.com"; // Hier deine E-Mail-Adresse einfügen
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* Text Section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Kontaktieren Sie uns für Ihre Bauprojekte
              </h1>
              <p className="text-sm text-gray-200 text-center sm:text-left leading-6">
                Wir bieten umfassende Dienstleistungen in den Bereichen Trockenbau, 
                Bodenverlegung, Malerarbeiten, Möbelmontage und Küchenmontage. 
                Kontaktieren Sie uns für eine individuelle Beratung und ein Angebot.
              </p>

              {/* Button Section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                <button 
                  onClick={handleEmailClick} 
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <HiMail className="text-xl" />
                  E-Mail senden
                </button>
                <button 
                  onClick={scrollToBottom} 
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                >
                  <FaArrowDown className="text-xl" />
                  Zum Kontaktformular
                </button>
              </div>
            </div>
            {/* Optional Extra Information */}
            <div
              data-aos="fade-left"
              data-aos-duration="300"
              className="text-gray-300"
            >
              <h2 className="text-xl font-semibold">Warum uns wählen?</h2>
              <p className="text-sm mt-2">
                Unsere Expertise in Trockenbau, Bodenverlegung und anderen Dienstleistungen 
                stellt sicher, dass Ihre Projekte pünktlich und effizient abgeschlossen werden. 
                Wir sind hier, um Ihre Visionen zum Leben zu erwecken!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolInfo;
