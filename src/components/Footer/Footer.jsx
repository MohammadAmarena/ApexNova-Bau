import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

  // Mouse tracking for interactive effects (only on desktop)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 1024) { // Only track on desktop
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    
    if (name === "email") {
      setEmailError(emailRegex.test(value) ? "" : "Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich.";
    if (!formData.email.trim()) newErrors.email = "E-Mail ist erforderlich.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Ungültige E-Mail-Adresse.";
    if (!formData.message.trim()) newErrors.message = "Nachricht darf nicht leer sein.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Nachricht erfolgreich gesendet! (Demo)");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setEmailError("");
      setIsSubmitting(false);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Responsive Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-50 group w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#8d8664] via-[#306ab2] to-[#8d8664] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform transition-all duration-300 ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-50 pointer-events-none'
        } hover:scale-110 backdrop-blur-sm border border-white/20`}
        style={{
          background: `conic-gradient(from 0deg, #8d8664, #306ab2, #8d8664, #306ab2, #8d8664)`,
        }}
        aria-label="Nach oben scrollen"
      >
        <FontAwesomeIcon 
          icon={faAnglesUp} 
          className="text-white text-sm md:text-lg lg:text-xl group-hover:animate-bounce transition-all duration-300" 
        />
      </button>

      <footer
        className="relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8d8664]/20 to-[#306ab2]/20"></div>
        </div>

        {/* Interactive Mouse Follower Light (Desktop only) */}
        <div 
          className="absolute w-64 h-64 lg:w-96 lg:h-96 rounded-full opacity-10 pointer-events-none transition-all duration-1000 ease-out hidden lg:block"
          style={{
            background: `radial-gradient(circle, rgba(141,134,100,0.3) 0%, rgba(48,106,178,0.2) 50%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(40px)'
          }}
        ></div>

        {/* Floating Particles (reduced for mobile) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-[#8d8664]/20' : 
                i % 3 === 1 ? 'bg-[#306ab2]/20' : 'bg-white/10'
              }`}
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Background Elements (hidden on mobile) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 hidden md:block">
          <div className="absolute top-10 left-10 w-16 h-16 lg:w-24 lg:h-24 border border-[#8d8664] rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 lg:w-16 lg:h-16 border border-[#306ab2] rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-20 container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#8d8664] via-white to-[#306ab2] bg-clip-text text-transparent">
              Lassen Sie uns sprechen
            </h2>
            
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 md:w-12 lg:w-16 h-0.5 md:h-1 bg-[#8d8664] rounded-full"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full mx-2 md:mx-4"></div>
              <div className="w-8 md:w-12 lg:w-16 h-0.5 md:h-1 bg-[#306ab2] rounded-full"></div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Bereit für Ihr nächstes Bauprojekt? Kontaktieren Sie uns für eine kostenlose Beratung.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Contact Info Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 hover:bg-white/10 transition-all duration-500">
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-transparent bg-gradient-to-r from-[#8d8664] to-[#306ab2] bg-clip-text">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-6 md:space-y-8">
                  {/* Phone */}
                  <div className="flex items-center gap-4 md:gap-6 group/item">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#8d8664] to-[#306ab2] rounded-xl md:rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={faPhone} className="text-white text-sm md:text-base lg:text-lg" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/70 text-xs md:text-sm mb-1 uppercase tracking-wider">Telefon</p>
                      <a href="tel:004917664329242" className="text-sm md:text-lg lg:text-xl font-bold text-white hover:text-[#8d8664] transition-all duration-300 break-all">
                        004917664329242
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 md:gap-6 group/item">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#8d8664] to-[#306ab2] rounded-xl md:rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm md:text-base lg:text-lg" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/70 text-xs md:text-sm mb-1 uppercase tracking-wider">E-Mail</p>
                      <a href="mailto:info@apexnova-bau.de" className="text-sm md:text-lg lg:text-xl font-bold text-white hover:text-[#306ab2] transition-all duration-300 break-all">
                        info@apexnova-bau.de
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 md:gap-6 group/item">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#8d8664] to-[#306ab2] rounded-xl md:rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-sm md:text-base lg:text-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/70 text-xs md:text-sm mb-1 uppercase tracking-wider">Servicegebiet</p>
                      <p className="text-sm md:text-lg lg:text-xl font-bold text-white">Deutschlandweit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-500">
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-transparent bg-gradient-to-r from-[#306ab2] to-[#8d8664] bg-clip-text relative z-10">
                Nachricht senden
              </h3>
              
              <div className="space-y-4 md:space-y-6 relative z-10">
                {/* Name Input */}
                <div className="relative group/input">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    className={`w-full p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#8d8664] focus:bg-white/15 transition-all duration-300 text-sm md:text-base lg:text-lg ${
                      errors.name ? "border-red-500" : "border-white/30 hover:border-white/50"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative group/input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    className={`w-full p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#306ab2] focus:bg-white/15 transition-all duration-300 text-sm md:text-base lg:text-lg ${
                      emailError || errors.email ? "border-red-500" : "border-white/30 hover:border-white/50"
                    }`}
                  />
                  {(errors.email || emailError) && (
                    <p className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      {errors.email || emailError}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative group/input">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Bauprojekt oder stellen Sie Ihre Frage..."
                    rows="4"
                    className={`w-full p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#8d8664] focus:bg-white/15 transition-all duration-300 resize-none text-sm md:text-base lg:text-lg ${
                      errors.message ? "border-red-500" : "border-white/30 hover:border-white/50"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base lg:text-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8d8664] to-[#306ab2] transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#306ab2] to-[#8d8664] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center justify-center gap-2 md:gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon 
                          icon={faPaperPlane} 
                          className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                        />
                        <span>Nachricht senden</span>
                      </>
                    )}
                  </span>
                </button>
                </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 lg:pt-12 border-t border-white/20 text-center relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8d8664] to-transparent"></div>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg px-4">
              © 2024 ApexNova Bau. Alle Rechte vorbehalten. | 
              <span className="text-transparent bg-gradient-to-r from-[#8d8664] to-[#306ab2] bg-clip-text font-semibold ml-1 md:ml-2">
                Ihr Partner für professionelle Bauarbeiten
              </span>
            </p>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;