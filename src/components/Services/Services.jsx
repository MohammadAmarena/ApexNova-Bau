import React from "react";

const Img2 = `url(https://picsum.photos/103/103)`; // Default image URL
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Entwurf und Planung",
    description:
      "Wir erstellen detaillierte Baupläne, die speziell auf Ihre Bedürfnisse abgestimmt sind und höchste Präzision gewährleisten.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Projektmanagement",
    description:
      "Unser Projektmanagement betreut alle Bauphasen, vom ersten Entwurf bis zur Fertigstellung, und stellt sicher, dass Standards und Zeitpläne eingehalten werden.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Gelände- und Standortvermessung",
    description:
      "Exakte Vermessungen, die den genauen Projektumfang und die Logistik definieren, bevor die Bauarbeiten beginnen.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Professionelle Baustellendienste
            </h1>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-orange-500 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src='https://picsum.photos/105/105'
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                      group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
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
