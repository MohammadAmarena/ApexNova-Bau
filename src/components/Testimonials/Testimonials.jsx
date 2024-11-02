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
    name: "Küchenmontage",
    text: "Komplette Küchenmontage mit Liebe zum Detail. Wir gestalten Ihre Traumküche nach Ihren Wünschen.",
    img: "https://picsum.photos/106/106",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container ">
        {/* Header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Unsere Dienstleistungen
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ServiceData.map((data) => (
              <div key={data.id} className="mx-1"> {/* Added horizontal margin */}
                <div className="flex flex-col m-1 gap-3 shadow-lg rounded-xl relative overflow-hidden bg-primary/10 my-4"> {/* Added vertical margin */}
                  {/* Container for the image */}
                  <div className="w-full h-48 relative"> 
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-full object-cover" // Full width and height
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col items-center gap-4 p-6 bg-black/80 text-white font-cursive2"> 
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-xs text-gray-300">{data.text}</p>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
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
