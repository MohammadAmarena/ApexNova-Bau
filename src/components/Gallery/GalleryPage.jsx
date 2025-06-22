import React, { useState, useEffect } from "react";

// Import images (as provided)
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingParticles, setFloatingParticles] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [time, setTime] = useState(0);
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  // Animate time for wave effects
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create ripple effect on mouse move
      if (Math.random() > 0.95) {
        const newRipple = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: 0
        };
        setRipples(prev => [...prev.slice(-5), newRipple]);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate and animate floating particles
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 8 + 3,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['#8d8664', '#306ab2', '#f2f2f2'][Math.floor(Math.random() * 3)],
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1
    }));
    setFloatingParticles(particles);

    const interval = setInterval(() => {
      setFloatingParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y < -20 ? window.innerHeight + 20 : particle.y - particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 1.5,
        angle: particle.angle + particle.rotationSpeed,
        opacity: 0.2 + Math.sin(Date.now() * 0.003 + particle.id) * 0.3
      })));
      
      // Update ripples
      setRipples(prev => prev.map(ripple => ({
        ...ripple,
        size: ripple.size + 8
      })).filter(ripple => ripple.size < 200));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (imageSrc, index) => {
    setSelectedImage({ src: imageSrc, index });
    
    // Create explosion effect on click
    const explosionParticles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: mousePosition.x,
      y: mousePosition.y,
      size: Math.random() * 6 + 2
    }));
    setRipples(prev => [...prev, ...explosionParticles]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8d8664] via-[#306ab2] to-[#8d8664] relative overflow-hidden">
      {/* Animated Background Elements with Morphing */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-[#8d8664] rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          style={{
            top: `${20 + Math.sin(time * 0.5) * 10}%`,
            left: `${10 + Math.cos(time * 0.3) * 5}%`,
            transform: `scale(${1 + Math.sin(time * 0.7) * 0.3}) rotate(${time * 10}deg)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-[#306ab2] rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          style={{
            top: `${40 + Math.cos(time * 0.4) * 15}%`,
            right: `${10 + Math.sin(time * 0.6) * 8}%`,
            transform: `scale(${1.2 + Math.cos(time * 0.8) * 0.4}) rotate(${-time * 15}deg)`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-[#f2f2f2] rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            bottom: `${20 + Math.sin(time * 0.9) * 12}%`,
            left: `${20 + Math.cos(time * 0.2) * 10}%`,
            transform: `scale(${0.8 + Math.sin(time * 1.2) * 0.5}) rotate(${time * 8}deg)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      {floatingParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `rotate(${particle.angle}rad) scale(${1 + Math.sin(time + particle.id) * 0.3})`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`
          }}
        />
      ))}

      {/* Mouse Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            opacity: Math.max(0, 1 - ripple.size / 200)
          }}
        />
      ))}

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-white to-transparent opacity-70"
            style={{
              left: `${Math.sin(time * 0.1 + i * 2) * 100}%`,
              top: `${Math.cos(time * 0.15 + i * 1.5) * 100}%`,
              transform: `rotate(${45 + time * 20 + i * 60}deg)`,
              animation: `shooting-star-${i} 4s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-6">
        {/* Header with Mega Effects */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-96 h-96 border border-white/10 rounded-full animate-spin"
              style={{ animationDuration: '20s' }}
            ></div>
            <div 
              className="absolute w-80 h-80 border border-white/20 rounded-full animate-spin"
              style={{ animationDuration: '15s', animationDirection: 'reverse' }}
            ></div>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#8d8664] via-[#f2f2f2] to-[#306ab2] bg-clip-text text-transparent relative z-10"
            style={{
              transform: `perspective(500px) rotateX(${Math.sin(time * 0.5) * 5}deg) rotateY(${Math.cos(time * 0.3) * 3}deg)`,
              textShadow: '0 0 30px rgba(255,255,255,0.5)'
            }}
          >
            Gallery
          </h1>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-[#8d8664] to-[#306ab2] mx-auto rounded-full relative z-10"
            style={{
              transform: `scaleX(${1 + Math.sin(time) * 0.5})`,
              boxShadow: '0 0 20px rgba(48, 106, 178, 0.5)'
            }}
          ></div>
        </div>

        {/* Gallery Grid with Insane Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-700 ${
                hoveredIndex === index ? 'z-30' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleImageClick(imageSrc, index)}
              style={{
                transform: `
                  perspective(1000px) 
                  rotateX(${hoveredIndex === index ? Math.sin(time * 2) * 10 : 0}deg) 
                  rotateY(${hoveredIndex === index ? Math.cos(time * 1.5) * 8 : 0}deg) 
                  translateZ(${hoveredIndex === index ? 50 : 0}px)
                  scale(${hoveredIndex === index ? 1.15 : 1})
                  translateY(${Math.sin(time * 0.5 + index) * 3}px)
                `,
                filter: hoveredIndex === index ? 'brightness(1.2) saturate(1.3)' : 'brightness(1)'
              }}
            >
              {/* Card Container with Morphing */}
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-700">
                {/* Dynamic Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(${time * 50 + index * 30}deg, #8d866420, #f2f2f220, #306ab220)`
                  }}
                ></div>
                
                {/* Electric Border Effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-2xl">
                    <div 
                      className="absolute inset-0 rounded-2xl border-2 opacity-60"
                      style={{
                        borderImage: `linear-gradient(${time * 100}deg, #8d8664, #306ab2, #f2f2f2, #8d8664) 1`,
                        animation: 'electric-border 2s linear infinite'
                      }}
                    ></div>
                  </div>
                )}
                
                {/* Image Container */}
                <div className="relative p-4 aspect-square overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={`Gallery item ${index + 1}`} 
                    className="w-full h-full object-cover rounded-xl transition-all duration-1000 group-hover:scale-125"
                    style={{
                      filter: hoveredIndex === index ? 
                        `hue-rotate(${Math.sin(time) * 20}deg) brightness(1.1) contrast(1.1)` : 
                        'none',
                      transform: hoveredIndex === index ? 
                        `rotate(${Math.sin(time * 3) * 2}deg) scale(1.25)` : 
                        'scale(1)'
                    }}
                  />
                  
                  {/* Holographic Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: `linear-gradient(${time * 180}deg, 
                        transparent 30%, 
                        rgba(255,255,255,0.3) 50%, 
                        transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Animated Number Badge */}
                  <div 
                    className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      transform: hoveredIndex === index ? 
                        `rotate(${time * 100}deg) scale(${1 + Math.sin(time * 4) * 0.2})` : 
                        'rotate(0deg) scale(1)',
                      boxShadow: '0 0 20px rgba(48, 106, 178, 0.6)'
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* 3D Hover Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div 
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500"
                      style={{
                        transform: hoveredIndex === index ? 
                          `scale(1) rotateY(${time * 100}deg)` : 
                          'scale(0.5)',
                        boxShadow: '0 0 30px rgba(255,255,255,0.3)'
                      }}
                    >
                      <div className="w-0 h-0 border-l-10 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Bottom Glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8d8664] via-[#f2f2f2] to-[#306ab2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{
                    background: `linear-gradient(90deg, #8d8664, #306ab2, #f2f2f2, #8d8664)`,
                    backgroundSize: '200% 100%',
                    animation: hoveredIndex === index ? 'gradient-flow 2s linear infinite' : 'none'
                  }}
                ></div>
              </div>
              
              {/* Particle Explosion on Hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Energy Rings */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-white/30 rounded-2xl"
                      style={{
                        animation: `energy-ring 2s linear infinite`,
                        animationDelay: `${i * 0.5}s`,
                        transform: `scale(${1 + i * 0.1})`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(48,106,178,0.3) 0%, rgba(0,0,0,0.9) 50%)`
          }}
        >
          <div className="relative max-w-5xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={`Gallery item ${selectedImage.index + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              style={{
                transform: `scale(${1 + Math.sin(time * 2) * 0.02})`,
                filter: `brightness(1.1) contrast(1.1) saturate(1.2) drop-shadow(0 0 50px rgba(48,106,178,0.5))`
              }}
            />
            
            {/* Animated Close Button */}
            <button 
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              style={{
                transform: `rotate(${time * 50}deg) scale(${1 + Math.sin(time * 4) * 0.1})`,
                boxShadow: '0 0 20px rgba(255,255,255,0.3)'
              }}
            >
              ✕
            </button>
            
            {/* Enhanced Image Counter */}
            <div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8d8664]/80 to-[#306ab2]/80 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold text-lg"
              style={{
                boxShadow: '0 0 30px rgba(48,106,178,0.5)',
                transform: `translateX(-50%) scale(${1 + Math.sin(time * 3) * 0.05})`
              }}
            >
              {selectedImage.index + 1} / {images.length}
            </div>
            
            {/* Modal Particle Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: `${Math.sin(time + i) * 50 + 50}%`,
                    left: `${Math.cos(time * 0.7 + i) * 50 + 50}%`,
                    opacity: Math.sin(time * 2 + i) * 0.5 + 0.5
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes energy-ring {
          0% { 
            transform: scale(1) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1.5) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes electric-border {
          0% { filter: hue-rotate(0deg) brightness(1); }
          25% { filter: hue-rotate(90deg) brightness(1.2); }
          50% { filter: hue-rotate(180deg) brightness(1.5); }
          75% { filter: hue-rotate(270deg) brightness(1.2); }
          100% { filter: hue-rotate(360deg) brightness(1); }
        }
        
        @keyframes shooting-star-0 {
          0% { 
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(100vw) translateY(100vh) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-star-1 {
          0% { 
            transform: translateX(-100px) translateY(100vh) rotate(-45deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(100vw) translateY(-100px) rotate(-45deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-star-2 {
          0% { 
            transform: translateX(100vw) translateY(-100px) rotate(135deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(-100px) translateY(100vh) rotate(135deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;