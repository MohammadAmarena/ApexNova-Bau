import React from "react";
import serviceImg from "../../assets/img1.jpg";

const ServicesData = [
  {
    id: 1,
    img: serviceImg,
    name: "Entwurf & Planung",
    description:
      "Individuelle und präzise Baupläne, die auf Ihre Vision und Anforderungen zugeschnitten sind.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: serviceImg,
    name: "Projektleitung",
    description:
      "Ganzheitliches Management aller Bauphasen – zuverlässig, termingerecht und effizient.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: serviceImg,
    name: "Standortanalyse",
    description:
      "Exakte Gelände- und Standortvermessung zur optimalen Vorbereitung Ihres Bauprojekts.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>

      {/* Styled Divider Line */}
      <div className="relative z-10 -mt-4 mb-12">
        <div className="mx-auto w-44 h-1 rounded-full bg-gradient-to-r from-[#306ab2] to-[#8d8664] shadow-md"></div>
      </div>

      <div className="py-10 bg-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-cursive2 text-[#306ab2] drop-shadow">
              Unsere Leistungen
            </h1>
            <p className="text-gray-600 mt-2 max-w-md mx-auto">
              Hochwertige Baudienstleistungen für Ihre Zukunft – innovativ und nachhaltig.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-gradient-to-br from-[#8d8664] to-[#306ab2] hover:text-white shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                      group-hover:scale-105 group-hover:rotate-1 duration-300 rounded-xl shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
