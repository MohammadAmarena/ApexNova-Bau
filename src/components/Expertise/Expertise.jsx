import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Wrench,
  Square,
  PaintBucket,
  Home,
  Hammer,
  TreePine,
  Shield,
  Sparkles,
  ArrowRight
} from "lucide-react";

// Korrekte Image-Imports entsprechend den Services
import trockenbauImg from "../../assets/Trockenbau.JPG";
import bodenverlegungImg from "../../assets/Bodenverlegung.JPG";
import fliesenImg from "../../assets/Fliesenlegen.jpg";
import malerarbeitenImg from "../../assets/Malerarbeiten.JPG";
import elektroImg from "../../assets/Elektroarbeiten.JPG";
import sanitaerImg from "../../assets/Sanitärarbeiten.JPG";
import moebelmontageImg from "../../assets/Möbelmontage.JPG";
import gartenImg from "../../assets/Garten.JPG";
import wdvsImg from "../../assets/WDVS.JPG";
// Für Hausmeisterdienst verwenden wir ein generisches Service-Bild
const hausmeisterImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";
const ServiceData = [
  { 
    id: 1, 
    name: "Trockenbau", 
    text: "Präzise und effiziente Trockenbaulösungen für moderne Raumgestaltung mit höchster Qualität.", 
    img: trockenbauImg, 
    icon: Square, 
    category: "Innenausbau" 
  },
  { 
    id: 2, 
    name: "Bodenverlegung", 
    text: "Hochwertige Bodenverlegung für ein ästhetisches und langlebiges Wohnerlebnis.", 
    img: bodenverlegungImg, 
    icon: Square, 
    category: "Bodenbeläge" 
  },
  { 
    id: 4, 
    name: "Malerarbeiten", 
    text: "Frische Farben für Innen und Außen – verwandeln Sie Ihr Zuhause in ein Kunstwerk.", 
    img: malerarbeitenImg, 
    icon: PaintBucket, 
    category: "Malerei" 
  },
  { 
    id: 3, 
    name: "Fliesenlegen", 
    text: "Professionelle Fliesenverlegung für Bad, Küche und alle Wohnbereiche mit Perfektion.", 
    img: fliesenImg, 
    icon: Square, 
    category: "Fliesen" 
  },
  { 
    id: 5, 
    name: "Elektroarbeiten", 
    text: "Sichere und normgerechte Elektroinstallationen für Ihr Zuhause und Gewerbe.", 
    img: elektroImg, 
    icon: Zap, 
    category: "Elektro" 
  },
  { 
    id: 6, 
    name: "Sanitärarbeiten", 
    text: "Komplette Sanitärinstallation und -reparatur von Experten ausgeführt.", 
    img: sanitaerImg, 
    icon: Wrench, 
    category: "Sanitär" 
  },
  { 
    id: 7, 
    name: "Hausmeisterdienst", 
    text: "Zuverlässige Instandhaltung und Pflege für Ihr Eigentum mit Full-Service.", 
    img: hausmeisterImg, 
    icon: Home, 
    category: "Service" 
  },
  { 
    id: 8, 
    name: "Möbelmontage", 
    text: "Sorgfältige und schnelle Montage Ihrer Möbel – vom Einzelstück bis zur Kompletteinrichtung.", 
    img: moebelmontageImg, 
    icon: Hammer, 
    category: "Montage" 
  },
  { 
    id: 9, 
    name: "Garten- & Landschaftsbau", 
    text: "Gestalten Sie mit uns grüne Oasen und traumhafte Außenanlagen nach Ihren Wünschen.", 
    img: gartenImg, 
    icon: TreePine, 
    category: "Außenanlagen" 
  },
  { 
    id: 10, 
    name: "WDVS & Fassadenschutz", 
    text: "Effiziente Wärmedämmung und moderne Fassadengestaltung für optimalen Gebäudeschutz.", 
    img: wdvsImg, 
    icon: Shield, 
    category: "Fassade" 
  }
];

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [slidesToShow, setSlidesToShow] = React.useState(3);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(ServiceData.length / slidesToShow));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow]);

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % Math.ceil(ServiceData.length / slidesToShow));
  const prevSlide = () => setCurrentSlide(prev => prev === 0 ? Math.ceil(ServiceData.length / slidesToShow) - 1 : prev - 1);
  const goToSlide = (index) => setCurrentSlide(index);

  const maxSlides = Math.ceil(ServiceData.length / slidesToShow);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(48, 106, 178, 0.3); }
          50% { box-shadow: 0 0 40px rgba(48, 106, 178, 0.6), 0 0 60px rgba(141, 134, 100, 0.4); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite; }
        .animate-float3 { animation: float3 4s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 3s ease infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #306ab2, #8d8664, #306ab2, #8d8664);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .service-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(48, 106, 178, 0.1) 0%, rgba(141, 134, 100, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
          z-index: -1;
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .magnetic-effect {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      <div id="expertise" className="relative py-32 bg-gradient-to-br from-[#8d8664]/5 via-white via-30% to-[#306ab2]/5 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-[#8d8664]/20 to-[#306ab2]/20 rounded-full blur-3xl animate-float z-0"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tl from-[#306ab2]/20 to-[#8d8664]/20 rounded-full blur-3xl animate-float2 z-0"></div>
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-[#8d8664]/10 to-[#306ab2]/10 rounded-full blur-2xl animate-float3 z-0"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#306ab2] to-[#8d8664] rounded-full opacity-20 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="relative inline-block mb-4 sm:mb-6">
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#8d8664]/10 via-white/50 to-[#306ab2]/10 text-[#306ab2] rounded-full text-xs sm:text-sm font-semibold glass-effect shadow-lg">
                <Sparkles className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-sparkle" />
                Unser Leistungsspektrum
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black shimmer-text mb-6 sm:mb-8 leading-tight sm:leading-none animate-fadeInUp px-2">
              Unsere Dienstleistungen
            </h1>
            
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                Qualität, auf die Sie bauen können – entdecken Sie unser 
                <span className="text-[#306ab2] font-bold"> umfassendes Leistungsspektrum </span>
                für alle Bereiche rund um Ihr Zuhause.
              </p>
              
              {/* Animated underline */}
              <div className="mt-4 sm:mt-6 flex justify-center">
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full animate-gradient-shift"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Carousel */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)} 
            onMouseLeave={() => setIsAutoPlaying(true)} 
            className="relative"
          >
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide} 
              className="absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white shadow-2xl border border-gray-100 rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-500 hover:scale-125 group animate-pulse-glow"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-gray-700 group-hover:text-[#306ab2] transition-colors duration-300" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white shadow-2xl border border-gray-100 rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-500 hover:scale-125 group animate-pulse-glow"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-gray-700 group-hover:text-[#306ab2] transition-colors duration-300" />
            </button>

            <div className="overflow-hidden rounded-2xl sm:rounded-3xl mx-8 sm:mx-12 lg:mx-16 shadow-2xl">
              <div 
                className="flex transition-all duration-1000 ease-out" 
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / maxSlides)}%)`, 
                  width: `${maxSlides * 100}%` 
                }}
              >
                {Array.from({ length: maxSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="flex" style={{ width: `${100 / maxSlides}%` }}>
                    {ServiceData.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((service, index) => {
                      const IconComponent = service.icon;
                      const cardId = `${slideIndex}-${index}`;
                      
                      return (
                        <div key={service.id} className="px-2 sm:px-3 lg:px-4" style={{ width: `${100 / slidesToShow}%` }}>
                          <div 
                            className="group relative service-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_35px_80px_rgba(48,106,178,0.3)] transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 magnetic-effect"
                            onMouseEnter={() => setHoveredCard(cardId)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                              transform: hoveredCard === cardId ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)'
                            }}
                          >
                            {/* Category Badge */}
                            <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 z-20">
                              <span className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm text-xs font-bold text-gray-800 rounded-full shadow-lg border border-white/30">
                                {service.category}
                              </span>
                            </div>
                            
                            {/* Icon */}
                            <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 z-20">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-[#306ab2] group-hover:text-[#8d8664] transition-colors duration-300" />
                              </div>
                            </div>
                            
                            {/* Image Container */}
                            <div className="h-48 sm:h-64 lg:h-80 w-full relative overflow-hidden">
                              <img 
                                src={service.img} 
                                alt={service.name} 
                                className="w-full h-full object-cover group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-1000" 
                              />
                              
                              {/* Overlay Gradients */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-[#306ab2]/10 via-transparent to-[#8d8664]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 sm:p-6 lg:p-8 relative">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#306ab2] transition-colors duration-500">
                                {service.name}
                              </h3>
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                                {service.text}
                              </p>
                            </div>
                            
                            {/* Animated Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#306ab2]/40 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#306ab2]/5 via-transparent to-[#8d8664]/5"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Pagination */}
            <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 space-x-2 sm:space-x-3">
              {Array.from({ length: maxSlides }, (_, index) => (
                <button 
                  key={index} 
                  onClick={() => goToSlide(index)} 
                  className={`h-3 sm:h-4 rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-[#306ab2] to-[#8d8664] w-8 sm:w-12 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gradient-to-r hover:from-[#8d8664]/50 hover:to-[#306ab2]/50 w-3 sm:w-4 hover:w-4 sm:hover:w-6'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
            <div className="relative inline-block">
              <a 
                href="mailto:info@apexnova-bau.de?subject=Kostenlose Beratung anfragen" 
                className="group relative inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-[#306ab2] via-[#8d8664] to-[#306ab2] text-white rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(48,106,178,0.4)] transition-all duration-500 hover:scale-105 sm:hover:scale-110 cursor-pointer no-underline overflow-hidden"
                style={{ backgroundSize: '200% 100%' }}
                onMouseEnter={(e) => e.target.style.backgroundPosition = '100% 0'}
                onMouseLeave={(e) => e.target.style.backgroundPosition = '0% 0'}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
                <span className="relative z-10">Kostenlose Beratung anfragen</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              {/* Floating elements around CTA */}
              <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-[#8d8664] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#306ab2] rounded-full opacity-30 animate-float2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;