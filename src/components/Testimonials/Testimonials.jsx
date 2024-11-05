import React from "react";
import Slider from "react-slick";

const ServiceData = [
  {
    id: 1,
    name: "Trockenbau",
    text: "Professionelle Trockenbau-Lösungen für Ihre Projekte. Wir sorgen für schnelle und qualitativ hochwertige Ausführung.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Bodenverlegung",
    text: "Erfahrene Fachkräfte für die Verlegung von Bodenbelägen aller Art, um ein perfektes Finish zu gewährleisten.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Malerarbeiten",
    text: "Kreative und saubere Malerarbeiten für Innen- und Außenbereiche. Geben Sie Ihren Räumen einen neuen Look.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Hausmeisterdienst",
    text: "Zuverlässiger Hausmeisterservice für Instandhaltungs- und Reparaturarbeiten in Ihrem Gebäude.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Möbelmontage",
    text: "Professionelle Möbelmontage für ein stressfreies Erlebnis. Wir kümmern uns um alles für Sie.",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 6,
    name: "Garten und Landschaftsbau",
    text: "Komplette Küchenmontage mit Liebe zum Detail. Wir gestalten Ihre Traumküche nach Ihren Wünschen.",
    img: "https://picsum.photos/106/106",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Unsere Dienstleistungen
          </h1>
        </div>

        {/* Service Cards Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ServiceData.map((service) => (
              <div key={service.id} className="px-2">
                <div className="flex flex-col shadow-lg rounded-xl overflow-hidden bg-primary/10 m-4">
                  {/* Image Section */}
                  <div className="w-full h-48 relative">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex flex-col items-center gap-3 p-6 bg-black/80 text-white">
                    <h1 className="text-xl font-bold">{service.name}</h1>
                    <p className="text-xs text-gray-300">{service.text}</p>
                  </div>
                  {/* Decorative Quote Mark */}
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-4">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
