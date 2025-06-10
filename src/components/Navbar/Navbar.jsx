import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBars, FaTimes, FaPhone, FaHome, FaTools, FaImages, FaInfoCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Menu = [
  { id: 1, name: "Startseite", link: "/", icon: FaHome },
  { id: 2, name: "Leistungen", scrollTo: "expertise", icon: FaTools },
  { id: 3, name: "Galerie", link: "/gallery", icon: FaImages },
  { id: 4, name: "Über uns", scrollTo: "about", icon: FaInfoCircle },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Track active section
      const sections = ["home", "expertise", "about"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMailClick = () => {
    window.location.href = "mailto:apexnova.bau@gmail.com";
    setMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:004917664329242";
    setMenuOpen(false);
  };

  const handleScrollOrNavigate = (scrollId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(scrollId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(scrollId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const isActive = (item) => {
    if (item.link === "/" && location.pathname === "/" && activeSection === "home") return true;
    if (item.scrollTo && activeSection === item.scrollTo) return true;
    if (item.link && location.pathname === item.link) return true;
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "py-2 shadow-2xl backdrop-blur-md bg-gradient-to-r from-[#8d8664]/95 to-[#306ab2]/95" 
            : "py-4 shadow-lg bg-gradient-to-r from-[#8d8664] to-[#306ab2]"
        }`}
      >
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        
        <div className="container mx-auto px-5 flex justify-between items-center">
          {/* Enhanced Logo */}
          <a
            href="/"
            className={`flex items-center gap-3 font-cursive2 font-extrabold text-white drop-shadow-lg transition-all duration-300 hover:scale-105 ${
              scrolled ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
            }`}
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
            onClick={handleHomeClick}
          >
            <div className="relative">
              <img
                src={logo}
                alt="ApexNova Bau - Professionelle Bauarbeiten"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "w-12 h-12" : "w-16 h-16"
                }`}
                style={{ filter: "drop-shadow(0 0 8px rgba(141, 134, 100, 0.8))" }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8d8664]/20 to-[#306ab2]/20 blur-xl animate-pulse"></div>
            </div>
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text">
              ApexNova Bau
            </span>
          </a>

          {/* Enhanced Hamburger Button */}
          <button
            className="relative text-white text-3xl lg:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen/schließen"
          >
            <div className="relative">
              {menuOpen ? (
                <FaTimes className="group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <FaBars className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          </button>

          {/* Enhanced Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 font-semibold">
            {Menu.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  {item.link ? (
                    item.name === "Startseite" ? (
                      <a
                        href="/"
                        onClick={handleHomeClick}
                        className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group ${
                          isActive(item)
                            ? "bg-white/20 text-white shadow-lg"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                        {isActive(item) && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </a>
                    ) : (
                      <Link
                        to={item.link}
                        onClick={() => setMenuOpen(false)}
                        className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group ${
                          isActive(item)
                            ? "bg-white/20 text-white shadow-lg"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                        {isActive(item) && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </Link>
                    )
                  ) : (
                    <button
                      onClick={() => handleScrollOrNavigate(item.scrollTo)}
                      className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group ${
                        isActive(item)
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                      {isActive(item) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Enhanced Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handlePhoneClick}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10"
              title="Jetzt anrufen"
            >
              <FaPhone className="text-sm group-hover:animate-pulse" />
              <span className="text-sm font-medium">004917664329242</span>
            </button>

            <button
              onClick={handleMailClick}
              className="group relative flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(45deg, #8d8664 0%, #306ab2 100%)",
                boxShadow: "0 4px 20px rgba(141, 134, 100, 0.3), 0 4px 20px rgba(48, 106, 178, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-45deg from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Kontakt</span>
              <FaEnvelope className="relative group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#8d8664]/98 to-[#306ab2]/98 backdrop-blur-lg shadow-2xl border-t border-white/10">
            <div className="px-5 py-6">
              <ul className="space-y-2 font-semibold">
                {Menu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      {item.link ? (
                        item.name === "Startseite" ? (
                          <a
                            href="/"
                            onClick={handleHomeClick}
                            className={`flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 ${
                              isActive(item)
                                ? "bg-white/20 text-white shadow-lg"
                                : "text-white/90 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <Icon className="text-lg" />
                            <span className="text-lg">{item.name}</span>
                          </a>
                        ) : (
                          <Link
                            to={item.link}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 ${
                              isActive(item)
                                ? "bg-white/20 text-white shadow-lg"
                                : "text-white/90 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <Icon className="text-lg" />
                            <span className="text-lg">{item.name}</span>
                          </Link>
                        )
                      ) : (
                        <button
                          onClick={() => handleScrollOrNavigate(item.scrollTo)}
                          className={`w-full flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 ${
                            isActive(item)
                              ? "bg-white/20 text-white shadow-lg"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <Icon className="text-lg" />
                          <span className="text-lg">{item.name}</span>
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Contact Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handlePhoneClick}
                  className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <FaPhone />
                  <span>Anrufen: 004917664329242</span>
                </button>

                <button
                  onClick={handleMailClick}
                  className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(45deg, #8d8664 0%, #306ab2 100%)",
                    boxShadow: "0 4px 20px rgba(141, 134, 100, 0.3), 0 4px 20px rgba(48, 106, 178, 0.3)",
                  }}
                >
                  <FaEnvelope />
                  <span>E-Mail senden</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content jumping */}
      <div className={`transition-all duration-500 ${scrolled ? "h-20" : "h-24"}`}></div>
    </>
  );
};

export default Navbar;