import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.JPG";
import img4 from "../../assets/img4.JPG";
import img5 from "../../assets/img5.JPG";
import img6 from "../../assets/img6.JPG";
import img7 from "../../assets/img7.JPG";

const ServiceData = [
  {
    id: 1,
    name: "Trockenbau",
    text: "Präzise und effiziente Trockenbaulösungen für moderne Räume.",
    img: img1,
  },
  {
    id: 2,
    name: "Bodenverlegung",
    text: "Hochwertige Bodenverlegung für ein ästhetisches und langlebiges Finish.",
    img: img2,
  },
  {
    id: 3,
    name: "Malerarbeiten",
    text: "Frische Farben für Innen und Außen – stilvoll und professionell.",
    img: img3,
  },
  {
    id: 4,
    name: "Hausmeisterdienst",
    text: "Zuverlässige Instandhaltung und Pflege für Ihr Gebäude.",
    img: img4,
  },
  {
    id: 5,
    name: "Möbelmontage",
    text: "Sorgfältige und schnelle Montage Ihrer Möbel – stressfrei für Sie.",
    img: img5,
  },
  {
    id: 6,
    name: "Garten- & Landschaftsbau",
    text: "Gestalten Sie mit uns grüne Oasen nach Maß.",
    img: img6,
  },
  {
    id: 7,
    name: "WDVS & Fassadenschutz",
    text: "Effiziente Wärmedämmung und moderne Fassadengestaltung für Energieeinsparung und Werterhalt Ihres Gebäudes.",
    img: img7,
  },
];

const OurServices = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="expertise" className="py-16 bg-gradient-to-b from-[#8d8664]/10 to-[#306ab2]/10">
      <div className="container">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-bold pt-16 font-cursive text-[#306ab2]"
          >
            Unsere Dienstleistungen
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Qualität, auf die Sie bauen können – entdecken Sie unser Leistungsspektrum.
          </p>
        </div>

        {/* Service Cards Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ServiceData.map((service) => (
              <div key={service.id} className="px-3">
                <div className="rounded-2xl overflow-hidden shadow-lg group">
                  {/* Image Section */}
                  <div className="h-52 w-full relative">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="bg-white text-center py-6 px-4">
                    <h2 className="text-xl font-semibold text-[#8d8664] mb-2">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
