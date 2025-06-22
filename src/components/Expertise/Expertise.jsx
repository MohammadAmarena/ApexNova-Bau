import React from "react";
import { ChevronLeft, ChevronRight, Zap, Wrench, Square, PaintBucket, Home, Hammer, TreePine, Shield } from "lucide-react";
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
    text: "Präzise und effiziente Trockenbaulösungen für moderne Räume mit hochwertigen Materialien und fachgerechter Ausführung.",
    img: img1,
    icon: Square,
    category: "Innenausbau"
  },
  {
    id: 2,
    name: "Bodenverlegung",
    text: "Hochwertige Bodenverlegung für ein ästhetisches und langlebiges Finish - von Parkett bis Vinyl.",
    img: img2,
    icon: Square,
    category: "Bodenbeläge"
  },
  {
    id: 3,
    name: "Fliesenlegen",
    text: "Professionelle Fliesenverlegung für Bad, Küche und Wohnbereich mit präziser Ausführung und edlen Materialien.",
    img: img3,
    icon: Square,
    category: "Fliesen"
  },
  {
    id: 4,
    name: "Malerarbeiten",
    text: "Frische Farben für Innen und Außen – stilvoll und professionell ausgeführt für ein perfektes Finish.",
    img: img4,
    icon: PaintBucket,
    category: "Malerei"
  },
  {
    id: 5,
    name: "Elektroarbeiten",
    text: "Sichere und normgerechte Elektroinstallationen von der Verkabelung bis zur Beleuchtung - alles aus einer Hand.",
    img: img5,
    icon: Zap,
    category: "Elektro"
  },
  {
    id: 6,
    name: "Sanitärarbeiten",
    text: "Komplette Sanitärinstallation und -reparatur für Bad und Küche mit modernster Technik und Zuverlässigkeit.",
    img: img6,
    icon: Wrench,
    category: "Sanitär"
  },
  {
    id: 7,
    name: "Hausmeisterdienst",
    text: "Zuverlässige Instandhaltung und Pflege für Ihr Gebäude - von der Wartung bis zur Reparatur.",
    img: img7,
    icon: Home,
    category: "Service"
  },
  {
    id: 8,
    name: "Möbelmontage",
    text: "Sorgfältige und schnelle Montage Ihrer Möbel – stressfrei und termingerecht für maximalen Komfort.",
    img: img1, // Wiederverwendung
    icon: Hammer,
    category: "Montage"
  },
  {
    id: 9,
    name: "Garten- & Landschaftsbau",
    text: "Gestalten Sie mit uns grüne Oasen nach Maß - von der Planung bis zur Umsetzung Ihres Traumgartens.",
    img: img2, // Wiederverwendung
    icon: TreePine,
    category: "Außenanlagen"
  },
  {
    id: 10,
    name: "WDVS & Fassadenschutz",
    text: "Effiziente Wärmedämmung und moderne Fassadengestaltung für Energieeinsparung und Werterhalt Ihres Gebäudes.",
    img: img3, // Wiederverwendung
    icon: Shield,
    category: "Fassade"
  }
];

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(ServiceData.length / slidesToShow));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow]);

  // Responsive slides
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(ServiceData.length / slidesToShow));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? Math.ceil(ServiceData.length / slidesToShow) - 1 : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlides = Math.ceil(ServiceData.length / slidesToShow);

  return (
    <div id="expertise" className="relative py-20 bg-gradient-to-br from-[#8d8664]/10 via-white to-[#306ab2]/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8d8664] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#306ab2] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#8d8664]/20 to-[#306ab2]/20 text-[#306ab2] rounded-full text-sm font-medium">
              Unser Leistungsspektrum
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#306ab2] via-[#8d8664] to-[#306ab2] bg-clip-text text-transparent mb-6 leading-tight">
            Unsere Dienst<span className="text-[#8d8664]">leistungen</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Qualität, auf die Sie bauen können – entdecken Sie unser umfassendes Leistungsspektrum 
            für alle Bereiche rund um Ihr Zuhause.
          </p>
        </div>

        {/* Service Cards Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border border-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#306ab2]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border border-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#306ab2]" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl mx-12">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / maxSlides)}%)`,
                width: `${maxSlides * 100}%`
              }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="flex" style={{ width: `${100 / maxSlides}%` }}>
                  {ServiceData.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={service.id} className="px-3" style={{ width: `${100 / slidesToShow}%` }}>
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-sm">
                              {service.category}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="absolute top-4 right-4 z-10">
                            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-5 h-5 text-[#306ab2]" />
                            </div>
                          </div>

                          {/* Image Section */}
                          <div className="h-64 w-full relative overflow-hidden">
                            <img
                              src={service.img}
                              alt={service.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Content Section */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#306ab2] transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {service.text}
                            </p>
                          </div>

                          {/* Hover Effect Border */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#306ab2]/30 rounded-3xl transition-colors duration-300"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#306ab2] w-8' 
                    : 'bg-gray-300 hover:bg-[#8d8664]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="mailto:info@apexnova-bau.de?subject=Kostenlose Beratung anfragen&body=Hallo,%0D%0A%0D%0AIch interessiere mich für Ihre Dienstleistungen und würde gerne eine kostenlose Beratung vereinbaren.%0D%0A%0D%0ABitte kontaktieren Sie mich unter:%0D%0ATelefon: %0D%0AE-Mail: %0D%0A%0D%0AVielen Dank!"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#306ab2] to-[#8d8664] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer no-underline"
          >
            <span>Kostenlose Beratung anfragen</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;