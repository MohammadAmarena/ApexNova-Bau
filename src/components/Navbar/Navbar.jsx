import React, { useState, useEffect, useCallback } from "react";
import { FaEnvelope, FaBars, FaTimes, FaPhone, FaHome, FaTools, FaImages, FaInfoCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Enhanced scroll handling with hide/show functionality
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Update scrolled state
    setScrolled(currentScrollY > 50);
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
    
    // Track active section with improved accuracy
    const sections = ["home", "expertise", "about"];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMailClick = () => {
    window.location.href = "mailto:info@apexnova-bau.de";
    setMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:004917664329242";
    setMenuOpen(false);
  };

  const handleScrollOrNavigate = useCallback((scrollId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(scrollId);
        if (section) {
          section.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(scrollId);
      if (section) {
        section.scrollIntoView({ 
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }
  }, [location.pathname, navigate]);

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

  // Animation variants
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: [0, -2, 2, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <motion.nav
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "py-2 shadow-2xl backdrop-blur-xl bg-gradient-to-r from-[#8d8664]/95 to-[#306ab2]/95" 
            : "py-4 shadow-lg bg-gradient-to-r from-[#8d8664] to-[#306ab2]"
        }`}
        style={{
          backgroundImage: scrolled 
            ? 'linear-gradient(135deg, rgba(141, 134, 100, 0.95) 0%, rgba(48, 106, 178, 0.95) 100%)' 
            : 'linear-gradient(135deg, #8d8664 0%, #306ab2 100%)',
        }}
      >
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="container mx-auto px-5 flex justify-between items-center relative">
          {/* Enhanced Logo with animations */}
          <motion.a
            href="/"
            className={`flex items-center gap-3 font-cursive2 font-extrabold text-white drop-shadow-lg transition-all duration-300 ${
              scrolled ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
            }`}
            style={{ 
              textShadow: "0 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(141, 134, 100, 0.3)" 
            }}
            onClick={handleHomeClick}
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <div className="relative">
              <motion.img
                src={logo}
                alt="ApexNova Bau - Professionelle Bauarbeiten"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "w-12 h-12" : "w-16 h-16"
                }`}
                style={{ 
                  filter: "drop-shadow(0 0 12px rgba(141, 134, 100, 0.8)) drop-shadow(0 0 24px rgba(48, 106, 178, 0.4))" 
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8d8664]/30 to-[#306ab2]/30 blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </div>
            <motion.span 
              className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text"
              whileHover={{ 
                backgroundImage: "linear-gradient(45deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)" 
              }}
            >
              ApexNova Bau
            </motion.span>
          </motion.a>

          {/* Enhanced Hamburger Button */}
          <motion.button
            className="relative text-white text-3xl lg:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen/schließen"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 90, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 scale-110"></div>
          </motion.button>

          {/* Enhanced Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 font-semibold">
            {Menu.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.link ? (
                    item.name === "Startseite" ? (
                      <motion.a
                        href="/"
                        onClick={handleHomeClick}
                        className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group overflow-hidden ${
                          isActive(item)
                            ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                            : "text-white/90 hover:text-white hover:bg-white/15"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                        {isActive(item) && (
                          <motion.div 
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", duration: 0.4 }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to={item.link}
                          onClick={() => setMenuOpen(false)}
                          className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group overflow-hidden ${
                            isActive(item)
                              ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                              : "text-white/90 hover:text-white hover:bg-white/15"
                          }`}
                        >
                          <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.name}</span>
                          {isActive(item) && (
                            <motion.div 
                              className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                              layoutId="activeIndicator"
                              transition={{ type: "spring", duration: 0.4 }}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      </motion.div>
                    )
                  ) : (
                    <motion.button
                      onClick={() => handleScrollOrNavigate(item.scrollTo)}
                      className={`relative flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 group overflow-hidden ${
                        isActive(item)
                          ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                          : "text-white/90 hover:text-white hover:bg-white/15"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                      {isActive(item) && (
                        <motion.div 
                          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", duration: 0.4 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* Enhanced Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              onClick={handlePhoneClick}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 hover:bg-white/15 overflow-hidden"
              title="Jetzt anrufen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaPhone className="text-sm" />
              </motion.div>
              <span className="text-sm font-medium">004917664329242</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              onClick={handleMailClick}
              className="group relative flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
              style={{
                background: "linear-gradient(45deg, #8d8664 0%, #306ab2 100%)",
                boxShadow: "0 4px 20px rgba(141, 134, 100, 0.3), 0 4px 20px rgba(48, 106, 178, 0.3)",
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(141, 134, 100, 0.4), 0 8px 30px rgba(48, 106, 178, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-45deg from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Kontakt</span>
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="relative" />
              </motion.div>
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full backdrop-blur-xl shadow-2xl border-t border-white/20 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(141, 134, 100, 0.98) 0%, rgba(48, 106, 178, 0.98) 100%)",
              }}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-5 py-6">
                <motion.ul className="space-y-2 font-semibold" variants={menuVariants}>
                  {Menu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.li key={item.id} variants={itemVariants}>
                        {item.link ? (
                          item.name === "Startseite" ? (
                            <motion.a
                              href="/"
                              onClick={handleHomeClick}
                              className={`flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isActive(item)
                                  ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                                  : "text-white/90 hover:text-white hover:bg-white/15"
                              }`}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-lg">{item.name}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.a>
                          ) : (
                            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                              <Link
                                to={item.link}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 group overflow-hidden ${
                                  isActive(item)
                                    ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                                    : "text-white/90 hover:text-white hover:bg-white/15"
                                }`}
                              >
                                <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-lg">{item.name}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </Link>
                            </motion.div>
                          )
                        ) : (
                          <motion.button
                            onClick={() => handleScrollOrNavigate(item.scrollTo)}
                            className={`w-full flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300 group overflow-hidden ${
                              isActive(item)
                                ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                                : "text-white/90 hover:text-white hover:bg-white/15"
                            }`}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-lg">{item.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.button>
                        )}
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Enhanced Mobile Contact Buttons */}
                <motion.div 
                  className="mt-6 space-y-3"
                  variants={menuVariants}
                >
                  <motion.button
                    onClick={handlePhoneClick}
                    className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-all duration-300 group overflow-hidden backdrop-blur-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <FaPhone />
                    </motion.div>
                    <span>Anrufen: 004917664329242</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <motion.button
                    onClick={handleMailClick}
                    className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl font-semibold text-white transition-all duration-300 group overflow-hidden"
                    style={{
                      background: "linear-gradient(45deg, #8d8664 0%, #306ab2 100%)",
                      boxShadow: "0 4px 20px rgba(141, 134, 100, 0.3), 0 4px 20px rgba(48, 106, 178, 0.3)",
                    }}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 30px rgba(141, 134, 100, 0.4), 0 8px 30px rgba(48, 106, 178, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaEnvelope />
                    </motion.div>
                    <span>E-Mail senden</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Spacer */}
      <motion.div 
        className={`transition-all duration-500 ${scrolled ? "h-20" : "h-24"}`}
        animate={{ height: scrolled ? "5rem" : "6rem" }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default Navbar;