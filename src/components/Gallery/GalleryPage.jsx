import React, { useState } from "react";
// Import images
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

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8d8664] via-[#306ab2] to-[#8d8664] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8d8664] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#306ab2] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#f2f2f2] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#8d8664] via-[#f2f2f2] to-[#306ab2] bg-clip-text text-transparent animate-pulse">
            Gallery
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8d8664] to-[#306ab2] mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                hoveredIndex === index ? 'z-20' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage({ src: imageSrc, index })}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-[#306ab2]/25 transition-all duration-500">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8d8664]/20 via-[#f2f2f2]/20 to-[#306ab2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative p-4 aspect-square">
                  <img 
                    src={imageSrc} 
                    alt={`Gallery item ${index + 1}`} 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Number Badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Hover Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8d8664] via-[#f2f2f2] to-[#306ab2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              {/* Floating Particles Effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-[#8d8664] rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-[#306ab2] rounded-full animate-ping animation-delay-1000"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-[#f2f2f2] rounded-full animate-ping animation-delay-2000"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={`Gallery item ${selectedImage.index + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-scale-in"
            />
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
              {selectedImage.index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
