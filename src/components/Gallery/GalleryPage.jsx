import React, { useState, useEffect, useCallback } from "react";

// Importiere alle 100 Bilder
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.JPG";
import img4 from "../../assets/img4.JPG";
import img5 from "../../assets/img5.JPG";
import img6 from "../../assets/img6.JPG";
import img7 from "../../assets/img7.JPG";
import img8 from "../../assets/img8.JPG";
import img9 from "../../assets/img9.JPG";
import img10 from "../../assets/img10.JPG";
import img11 from "../../assets/img11.JPG";
import img12 from "../../assets/img12.JPG";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.JPG";
import img31 from "../../assets/img31.JPG";
import img32 from "../../assets/img32.JPG";
import img33 from "../../assets/img33.JPG";
import img34 from "../../assets/img34.JPG";
import img35 from "../../assets/img35.JPG";
import img36 from "../../assets/img36.JPG";
import img37 from "../../assets/img37.JPG";
import img38 from "../../assets/img38.JPG";
import img39 from "../../assets/img39.JPG";
import img40 from "../../assets/img40.JPG";
import img41 from "../../assets/img41.JPG";
import img42 from "../../assets/img42.JPG";
import img43 from "../../assets/img43.JPG";
import img44 from "../../assets/img44.JPG";
import img45 from "../../assets/img45.JPG";
import img46 from "../../assets/img46.JPG";
import img47 from "../../assets/img47.JPG";
import img48 from "../../assets/img48.JPG";
import img49 from "../../assets/img49.JPG";
import img50 from "../../assets/img50.JPG";
import img51 from "../../assets/img51.JPG";
import img52 from "../../assets/img52.JPG";
import img53 from "../../assets/img53.JPG";
import img54 from "../../assets/img54.JPG";
import img55 from "../../assets/img55.JPG";
import img56 from "../../assets/img56.JPG";
import img57 from "../../assets/img57.JPG";
import img58 from "../../assets/img58.JPG";
import img59 from "../../assets/img59.JPG";
import img60 from "../../assets/img60.JPG";
import img61 from "../../assets/img61.JPG";
import img62 from "../../assets/img62.JPG";
import img63 from "../../assets/img63.JPG";
import img64 from "../../assets/img64.JPG";
import img65 from "../../assets/img65.JPG";
import img66 from "../../assets/img66.JPG";
import img67 from "../../assets/img67.JPG";
import img68 from "../../assets/img68.JPG";
import img69 from "../../assets/img69.JPG";
import img70 from "../../assets/img70.JPG";
import img71 from "../../assets/img71.JPG";
import img72 from "../../assets/img72.JPG";
import img73 from "../../assets/img73.JPG";
import img74 from "../../assets/img74.JPG";
import img75 from "../../assets/img75.JPG";
import img76 from "../../assets/img76.JPG";
import img77 from "../../assets/img77.JPG";
import img78 from "../../assets/img78.JPG";
import img79 from "../../assets/img79.JPG";
import img80 from "../../assets/img80.JPG";
import img81 from "../../assets/img81.JPG";
import img82 from "../../assets/img82.JPG";
import img83 from "../../assets/img83.JPG";
import img84 from "../../assets/img84.JPG";
import img85 from "../../assets/img85.JPG";
import img86 from "../../assets/img86.JPG";
import img87 from "../../assets/img87.JPG";
import img88 from "../../assets/img88.JPG";
import img89 from "../../assets/img89.JPG";
import img90 from "../../assets/img90.JPG";
import img91 from "../../assets/img91.JPG";
import img92 from "../../assets/img92.JPG";
import img93 from "../../assets/img93.JPG";
import img94 from "../../assets/img94.JPG";
import img95 from "../../assets/img95.JPG";
import img96 from "../../assets/img96.JPG";
import img97 from "../../assets/img97.JPG";
import img98 from "../../assets/img98.JPG";
import img99 from "../../assets/img99.JPG";
import img100 from "../../assets/img100.JPG";

const SuperGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [orderedImages, setOrderedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(0);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
    img61, img62, img63, img64, img65, img66, img67, img68, img69, img70,
    img71, img72, img73, img74, img75, img76, img77, img78, img79, img80,
    img81, img82, img83, img84, img85, img86, img87, img88, img89, img90,
    img91, img92, img93, img94, img95, img96, img97, img98, img99, img100
  ];

  // Shuffle-Funktion
  const shuffleImages = useCallback(() => {
    const shuffled = [...images]
      .map((img) => ({ img, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ img }, index) => ({
        src: img,
        id: index,
        delay: index * 0.05 // Reduzierte Verzögerung für 100 Bilder
      }));

    setOrderedImages(shuffled);
  }, []);

  useEffect(() => {
    shuffleImages();
    setTimeout(() => setIsLoading(false), 1200); // Längere Ladezeit für mehr Bilder
  }, [shuffleImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.05);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      const currentIndex = orderedImages.findIndex(img => img.id === selectedImage.id);
      if (e.key === 'Escape') setSelectedImage(null);
      else if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % orderedImages.length;
        setSelectedImage(orderedImages[next]);
      } else if (e.key === 'ArrowLeft') {
        const prev = currentIndex === 0 ? orderedImages.length - 1 : currentIndex - 1;
        setSelectedImage(orderedImages[prev]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, orderedImages]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#8d8664] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">100 Bilder werden geladen...</h2>
          <p className="text-[#8d8664]">Deine visuelle Erfahrung wird vorbereitet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-[#8d8664]/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${Math.sin(time * 0.5) * 50}px, ${Math.cos(time * 0.3) * 30}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-[#306ab2]/20 rounded-full blur-3xl"
          style={{
            top: '60%',
            right: '15%',
            transform: `translate(${Math.cos(time * 0.4) * 40}px, ${Math.sin(time * 0.6) * 25}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-[#8d8664]/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            left: '20%',
            transform: `translate(${Math.sin(time * 0.3) * 35}px, ${Math.cos(time * 0.7) * 20}px)`
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-[#306ab2]/15 rounded-full blur-3xl"
          style={{
            top: '30%',
            right: '10%',
            transform: `translate(${Math.sin(time * 0.6) * 45}px, ${Math.cos(time * 0.4) * 35}px)`
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-12 px-4">
        <h1 
          className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #8d8664, #306ab2)",
            transform: `perspective(800px) rotateX(${Math.sin(time * 0.8) * 5}deg)`
          }}
        >
          Galerie
        </h1>
        <div 
          className="w-32 h-1 mx-auto rounded-full mb-6"
          style={{
            background: "linear-gradient(to right, #8d8664, #306ab2)",
            transform: `scaleX(${1 + Math.sin(time * 2) * 0.2})`
          }}
        />
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Entdecke eindrucksvolle Bilder in einer dynamischen, visuellen Präsentation.
        </p>
        <div className="mt-4 px-4 py-2 bg-white/10 rounded-full text-[#8d8664] font-semibold inline-block">
          {orderedImages.length} Bilder geladen
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
          {orderedImages.map((imageData, index) => (
            <div
              key={imageData.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#306ab2]/30 aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(imageData)}
              style={{
                animationDelay: `${imageData.delay}s`,
                transform: hoveredIndex === index ? 
                  `perspective(1000px) rotateX(${Math.sin(time * 3) * 8}deg) rotateY(${Math.cos(time * 2) * 5}deg) translateZ(20px)` :
                  `translateY(${Math.sin(time * 0.5 + index * 0.1) * 2}px)`
              }}
            >
              <div className="relative overflow-hidden h-full">
                <div 
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(${time * 90 + index * 60}deg, #8d8664aa, #306ab2aa)`
                  }}
                />
                <img 
                  src={imageData.src} 
                  alt={`Bild ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: hoveredIndex === index ? 
                      `brightness(1.1) contrast(1.1) saturate(1.2) hue-rotate(${Math.sin(time) * 15}deg)` : 
                      'brightness(0.9)'
                  }}
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(${time * 180}deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`
                  }}
                />
                {/* Bildnummer */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#8d8664] to-[#306ab2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={`Bild ${selectedImage.id + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{
                filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
              }}
            />
            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/30 transition-colors" 
              onClick={() => {
                const currentIndex = orderedImages.findIndex(img => img.id === selectedImage.id);
                const prevIndex = currentIndex === 0 ? orderedImages.length - 1 : currentIndex - 1;
                setSelectedImage(orderedImages[prevIndex]);
              }}
            >
              ‹
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/30 transition-colors" 
              onClick={() => {
                const currentIndex = orderedImages.findIndex(img => img.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % orderedImages.length;
                setSelectedImage(orderedImages[nextIndex]);
              }}
            >
              ›
            </button>
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors" 
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {orderedImages.findIndex(img => img.id === selectedImage.id) + 1} / {orderedImages.length}
            </div>
          </div>
        </div>
      )}
      
      {/* Shuffle Button */}
      <button
        onClick={shuffleImages}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center text-white text-xl shadow-2xl hover:scale-110 transition-transform duration-300 z-40"
        title="Bilder neu mischen"
      >
        🔀
      </button>
    </div>
  );
};

export default SuperGallery;