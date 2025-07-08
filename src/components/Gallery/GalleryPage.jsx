import React, { useEffect, useState, useCallback } from "react";

// Dynamisch alle Bildformate aus dem assets-Ordner importieren
const imageModules = import.meta.glob("../../assets/**/img*.{jpg,JPG,jpeg,png,webp}", { eager: true });

const images = Object.entries(imageModules)
  .map(([path, module], index) => ({
    src: module.default,
    id: index,
    delay: index * 0.05,
  }))
  .sort((a, b) => a.src.localeCompare(b.src)); // Optional: alphabetisch sortieren

console.log("Anzahl geladener Bilder:", images.length);

const SuperGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [time, setTime] = useState(0);

  // Zeit für Animation
  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 0.05), 50);
    return () => clearInterval(interval);
  }, []);

  const selectNextImage = useCallback(() => {
    if (selectedImage === null) return;
    const idx = selectedImage;
    setSelectedImage((idx + 1) % images.length);
  }, [selectedImage]);

  const selectPreviousImage = useCallback(() => {
    if (selectedImage === null) return;
    const idx = selectedImage;
    setSelectedImage(idx === 0 ? images.length - 1 : idx - 1);
  }, [selectedImage]);

  const handleKeyDown = useCallback((e) => {
    if (selectedImage === null) return;
    if (e.key === "ArrowRight") selectNextImage();
    if (e.key === "ArrowLeft") selectPreviousImage();
    if (e.key === "Escape") setSelectedImage(null);
  }, [selectedImage, selectNextImage, selectPreviousImage]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      {/* Dynamisch animierte Hintergründe */}
      <div className="absolute inset-0 overflow-hidden">
        {[{top:'10%',left:'10%',size:'w-96 h-96', color:'#8d8664'},
          {top:'60%',right:'15%',size:'w-80 h-80', color:'#306ab2'},
          {bottom:'20%',left:'20%',size:'w-64 h-64', color:'#8d8664'},
          {top:'30%',right:'10%',size:'w-72 h-72', color:'#306ab2'}].map((cfg,i) => (
          <div key={i}
            className={`${cfg.size} bg-[${cfg.color}]/20 rounded-full blur-3xl absolute`}
            style={{
              ...cfg,
              transform: `translate(${Math.sin(time * 0.5 + i)*40}px, ${Math.cos(time * 0.3 + i)*30}px)`
            }}/>
        ))}
      </div>

      {/* Titel */}
      <div className="relative z-10 text-center py-12 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #8d8664, #306ab2)",
            transform: `perspective(800px) rotateX(${Math.sin(time*0.8)*5}deg)`
          }}>Galerie</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 mt-4">Dynamisch geladen – {images.length} Bilder</p>
      </div>

      {/* Galerie */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
          {images.map((image, idx) => (
            <div key={image.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#306ab2]/30 aspect-square"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(idx)}>
              <div className="relative overflow-hidden h-full">
                <img src={image.src} alt={`Bild ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ filter: hoveredIndex === idx ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.9)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null &&
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedImage].src}
              alt={`Bild ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white text-2xl hover:bg-white/30"
              onClick={selectPreviousImage}>‹</button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white text-2xl hover:bg-white/30"
              onClick={selectNextImage}>›</button>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white text-xl hover:bg-white/30"
              onClick={() => setSelectedImage(null)}>✕</button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SuperGallery;
