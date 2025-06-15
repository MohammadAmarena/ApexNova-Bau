import React, { useState, useEffect } from "react";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaArrowDown, FaTools, FaHome, FaPaintRoller, FaHammer } from "react-icons/fa";

const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaTools className="text-3xl" />,
      title: "Trockenbau",
      description: "Professioneller Trockenbau für Wände, Decken und Raumteilungen mit höchster Präzision."
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: "Bodenverlegung",
      description: "Fachgerechte Verlegung von Laminat, Parkett, Fliesen und modernen Bodenbelägen."
    },
    {
      icon: <FaPaintRoller className="text-3xl" />,
      title: "Malerarbeiten",
      description: "Hochwertige Maler- und Lackierarbeiten für Innen- und Außenbereiche."
    },
    {
      icon: <FaHammer className="text-3xl" />,
      title: "Möbel- & Küchenmontage",
      description: "Präzise Montage von Möbeln und kompletten Kücheneinrichtungen nach Maß."
    }
  ];

  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      title: "E-Mail",
      info: "info@apexnova-bau.de",
      action: () => window.location.href = "mailto:info@apexnova-bau.de"
    },
    {
      icon: <HiPhone className="text-2xl" />,
      title: "Telefon", 
      info: "+49 (0) 176 643 292 42",
      action: () => window.location.href = "tel:+491234567890"
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      title: "Standort",
      info: "Berlin, Deutschland",
      action: null
    },
    {
      icon: <HiClock className="text-2xl" />,
      title: "Arbeitszeiten",
      info: "Mo-Fr: 8:00-18:00",
      action: null
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:info@apexnova-bau.de";
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8d8664] via-[#306ab2] to-[#1e4a73] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-white rounded-full blur-md animate-pulse delay-300"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* LEFT: Main Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Lassen Sie uns gemeinsam bauen
              </h1>
              <p className="text-white/90 leading-relaxed text-lg lg:text-xl font-light">
                Ob Trockenbau, Bodenverlegung, Malerarbeiten oder individuelle Möbel- und Küchenmontagen – wir realisieren Ihre Projekte mit Präzision, Qualität und Leidenschaft.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEmailClick}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <HiMail className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Jetzt E-Mail senden</span>
                </button>

                <button
                  onClick={scrollToBottom}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#306ab2] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <FaArrowDown className="text-lg group-hover:animate-bounce" />
                  <span className="font-semibold">Mehr erfahren</span>
                </button>
              </div>
            </div>

            {/* Enhanced Why Choose Us */}
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-yellow-400">⭐</span>
                Warum mit uns bauen?
              </h2>
              <ul className="space-y-4 text-white/95">
                <li className="flex items-start gap-4 group">
                  <span className="text-green-400 text-2xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <div>
                    <strong className="block">Persönliche Beratung & maßgeschneiderte Lösungen</strong>
                    <span className="text-white/80 text-sm">Individuelle Planung für jeden Kunden</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-green-400 text-2xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <div>
                    <strong className="block">Höchste Qualitätsstandards in jedem Detail</strong>
                    <span className="text-white/80 text-sm">Premium Materialien und Verarbeitung</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-green-400 text-2xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <div>
                    <strong className="block">Termintreue und zuverlässige Umsetzung</strong>
                    <span className="text-white/80 text-sm">Pünktliche Fertigstellung garantiert</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-green-400 text-2xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <div>
                    <strong className="block">Über 15 Jahre Erfahrung in der Baubranche</strong>
                    <span className="text-white/80 text-sm">Bewährte Expertise und Know-how</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Services & Contact */}
          <div className="space-y-6">
            
            {/* Animated Services Showcase */}
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 text-white">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">Unsere Leistungen</h3>
              
              <div className="relative h-48 mb-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                      activeService === index 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-4'
                    }`}
                  >
                    <div className="text-yellow-400 mb-4 transform hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Service indicators */}
              <div className="flex justify-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 text-white">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">Kontakt aufnehmen</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    onClick={item.action}
                    className={`p-4 bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 ${
                      item.action ? 'cursor-pointer hover:scale-105' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-yellow-400">{item.icon}</div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-white/90 ml-8">{item.info}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20">
                <p className="text-center text-white/90 font-medium">
                  🚀 Bereit für Ihr nächstes Projekt?
                </p>
                <p className="text-center text-white/80 text-sm mt-1">
                  Kontaktieren Sie uns noch heute für ein unverbindliches Angebot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;