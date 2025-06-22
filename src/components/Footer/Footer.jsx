import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import contactBg from "../../assets/img12.JPG";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear errors when user starts typing
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
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { 
          from_name: formData.name, 
          from_email: formData.email, 
          message: formData.message,
          to_email: "info@apexnova-bau.de"
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      
      Swal.fire({
        icon: "success",
        title: "Erfolgreich gesendet!",
        text: "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.",
        confirmButtonColor: "#306ab2",
        timer: 3000
      });
      
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setEmailError("");
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Fehler beim Senden",
        text: "Entschuldigung, etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        confirmButtonColor: "#306ab2"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-50 group w-16 h-16 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform transition-all duration-300 ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        } hover:scale-110`}
        aria-label="Nach oben scrollen"
      >
        <FontAwesomeIcon 
          icon={faAnglesUp} 
          className="text-white text-xl group-hover:animate-bounce transition-transform duration-300" 
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8d8664] to-[#306ab2] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
      </button>

      <footer
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8d8664]/20 to-[#306ab2]/20"></div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto py-20 px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#8d8664] to-[#306ab2] bg-clip-text text-transparent">
              Lassen Sie uns sprechen
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8d8664] to-[#306ab2] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Bereit für Ihr nächstes Bauprojekt? Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-8 text-[#8d8664]">Kontaktinformationen</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Telefon</p>
                      <a href="tel:004917664329242" className="text-lg font-semibold text-white hover:text-[#8d8664] transition-colors">
                        004917664329242
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">E-Mail</p>
                      <a href="mailto:info@apexnova-bau.de" className="text-lg font-semibold text-white hover:text-[#8d8664] transition-colors">
                        info@apexnova-bau.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Servicegebiet</p>
                      <p className="text-lg font-semibold text-white">Deuschlandweit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 text-[#8d8664]">Nachricht senden</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#8d8664] transition-all duration-300 ${
                      errors.name ? "border-red-500 animate-pulse" : "border-white/20 hover:border-white/40"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#8d8664] transition-all duration-300 ${
                      emailError || errors.email ? "border-red-500 animate-pulse" : "border-white/20 hover:border-white/40"
                    }`}
                  />
                  {(errors.email || emailError) && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.email || emailError}
                    </p>
                  )}
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Bauprojekt oder stellen Sie Ihre Frage..."
                    rows="5"
                    className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 text-white placeholder-white/60 focus:outline-none focus:border-[#8d8664] transition-all duration-300 resize-none ${
                      errors.message ? "border-red-500 animate-pulse" : "border-white/20 hover:border-white/40"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8d8664] to-[#306ab2] transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#306ab2] to-[#8d8664] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition-transform duration-300" />
                        Nachricht senden
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-white/70">
              © 2024 ApexNova Bau. Alle Rechte vorbehalten. | 
              <span className="text-[#8d8664] ml-2">Ihr Partner für professionelle Bauarbeiten</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;