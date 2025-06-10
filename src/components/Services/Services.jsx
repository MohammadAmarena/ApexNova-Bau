import React, { useState } from "react";

const ServicesData = [
  {
    id: 1,
    name: "Präzisions-CAD Konstruktion",
    description:
      "Millimetergenaue technische Zeichnungen für Maschinenbau, Anlagentechnik und Produktentwicklung. Von der Idee bis zur fertigen Konstruktionszeichnung.",
    icon: "📏",
    code: "CAD_TECH",
  },
  {
    id: 2,
    name: "Architektur & Bauplanung",
    description:
      "Vollständige Planungssätze für Wohn- und Gewerbebau. Grundrisse, Schnitte, Ansichten - alles nach aktuellen Bauvorschriften und DIN-Normen.",
    icon: "🏗️",
    code: "ARCH_PLAN",
  },
  {
    id: 3,
    name: "3D-Visualisierung & Rendering",
    description:
      "Fotorealistische 3D-Darstellungen und Animationen. Ihre Projekte werden lebendig - für Präsentationen, Marketing und Planungsabstimmung.",
    icon: "🎯",
    code: "3D_VIZ",
  },
];

const Services = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleSystemActivation = () => {
    setIsActivated(true);

    const emailSubject = encodeURIComponent(
      "Professionelle Zeichnungsdienstleistungen - Anfrage"
    );
    const emailBody = encodeURIComponent(
      `Sehr geehrte Damen und Herren,

ich interessiere mich für Ihre Dienstleistungen im Bereich technische Zeichnungen:

• Präzisions-CAD Konstruktion
• Architektur & Bauplanung
• 3D-Visualisierung & Rendering

Gerne möchte ich weitere Details zu Ihren Leistungen und ein unverbindliches Angebot erhalten.

Mit freundlichen Grüßen`
    );

    window.location.href = `mailto:info@profi-zeichnungen.de?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsActivated(false);
    }, 3000);
  };

  return (
    <div
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#12100f" }} // dunkler Hintergrund (nahe Schwarz)
    >
      {/* Gitterhintergrund in #8d8664 transparent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#8d8664 1px, transparent 1px),
            linear-gradient(90deg, #8d8664 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Header */}
        <header className="text-center mb-20 px-2">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            TECHNISCHE
            <br />
            ZEICHNUNGEN
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div
              className="w-24 h-1 rounded"
              style={{ backgroundColor: "#8d8664" }}
            ></div>
            <div
              className="w-5 h-5 rotate-45 rounded-sm"
              style={{ backgroundColor: "#306ab2" }}
            ></div>
            <div
              className="w-24 h-1 rounded"
              style={{ backgroundColor: "#8d8664" }}
            ></div>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Wo{" "}
            <span style={{ color: "#8d8664" }} className="font-semibold">
              Präzision
            </span>{" "}
            auf{" "}
            <span style={{ color: "#306ab2" }} className="font-semibold">
              Innovation
            </span>{" "}
            trifft
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 px-2">
          {ServicesData.map((service, idx) => {
            const isActive = activeCard === service.id;
            const color = idx % 2 === 0 ? "#8d8664" : "#306ab2";

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-xl border-2 p-8 cursor-pointer transform transition duration-500 ease-in-out
                  ${
                    isActive
                      ? `bg-${color}20 border-[${color}] scale-105 shadow-lg`
                      : `bg-transparent border-[${color}] hover:bg-${color}10 hover:border-[${color}]`
                  }
                `}
                style={{
                  borderColor: color,
                  backgroundColor: isActive ? color + "22" : "transparent",
                  boxShadow: isActive ? `0 0 12px ${color}` : "none",
                }}
                aria-label={service.name}
              >
                {/* Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t"
                  style={{
                    backgroundColor: isActive ? color : "transparent",
                    transition: "background-color 0.5s ease",
                  }}
                ></div>

                {/* Icon & Code */}
                <div className="flex justify-between items-center mb-6">
                  <div
                    className="text-5xl transition-transform duration-300"
                    style={{ color: color }}
                  >
                    {service.icon}
                  </div>
                  <div
                    className="px-3 py-1 text-xs font-mono rounded-full border transition-colors duration-300 select-none"
                    style={{
                      borderColor: color,
                      color: isActive ? color : "white",
                    }}
                  >
                    {service.code}
                  </div>
                </div>

                {/* Visual Box */}
                <div
                  className="mb-8 h-32 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(${color} 1px, transparent 1px),
                        linear-gradient(90deg, ${color} 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                  <div className="relative z-10 text-center select-none" style={{ color }}>
                    <div className="text-4xl mb-1">{service.icon}</div>
                    <div className="text-xs font-mono text-opacity-70">
                      PROJECT_{service.id.toString().padStart(3, "0")}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-white/80 leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                >
                  {service.description}
                </p>

                {/* Bottom Indicator */}
                <div
                  className="absolute bottom-4 left-8 right-8 h-px rounded"
                  style={{
                    backgroundColor: isActive ? color : "rgba(255, 255, 255, 0.1)",
                    boxShadow: isActive ? `0 0 10px ${color}` : "none",
                    transition: "all 0.5s ease",
                  }}
                ></div>

                {/* Service Number */}
                <div
                  className="absolute -top-5 -right-5 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg select-none"
                  style={{
                    backgroundColor: color,
                    color: "#000",
                    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
                    userSelect: "none",
                  }}
                >
                  {service.id}
                </div>
              </article>
            );
          })}
        </section>

        {/* Call to Action */}
        <div className="text-center mt-24 px-2">
          <button
            onClick={handleSystemActivation}
            className={`relative inline-block px-12 py-4 text-xl font-bold rounded-lg border-2 overflow-hidden transition-transform duration-300 transform
              ${
                isActivated
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white hover:bg-gradient-to-r hover:from-[#8d8664] hover:to-[#306ab2] hover:text-black"
              }
            `}
            style={{
              background: isActivated ? "white" : "transparent",
              borderColor: "white",
            }}
          >
            <span className="relative z-10">
              {isActivated
                ? "EMAIL WIRD GEÖFFNET..."
                : "KOSTENLOSES ANGEBOT ERHALTEN"}
            </span>

            {!isActivated && (
              <div
                className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, #8d8664, #306ab2)",
                  borderRadius: "0.5rem",
                }}
              ></div>
            )}
          </button>

          <p
            className={`font-mono text-sm mt-6 transition-colors duration-300 ${
              isActivated ? "text-white" : "text-gray-400"
            }`}
          >
            {isActivated
              ? "▶ Öffne Email-Client..."
              : "▶ Professionell • Schnell • Zuverlässig"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
