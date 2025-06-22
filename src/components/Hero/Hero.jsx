import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import heroImage from "../../assets/LOGO.png";

const Hero = () => {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // Parallax effect for floating words
  useEffect(() => {
    const handleMouseMove = (e) => {
      const words = document.querySelectorAll('.floating-word');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      words.forEach((word, index) => {
        const moveX = (clientX - centerX) * 0.01 * (index + 1);
        const moveY = (clientY - centerY) * 0.01 * (index + 1);
        word.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-container" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
        
        {/* New Floating Words */}
        <div className="floating-words">
          <span className="floating-word word-1">Innovation</span>
          <span className="floating-word word-2">Qualität</span>
          <span className="floating-word word-3">Präzision</span>
          <span className="floating-word word-4">Nachhaltigkeit</span>
          <span className="floating-word word-5">Exzellenz</span>
          <span className="floating-word word-6">Zukunft</span>
        </div>

        {/* Particle System */}
        <div className="particle-system">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="gradient-overlay">
        <div className="gradient-layer-1"></div>
        <div className="gradient-layer-2"></div>
        <div className="moving-gradient"></div>
      </div>

      <div className="container pb-8 sm:pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Side Content */}
          <div className="hero-content">
            <div className="content-wrapper">
              <div className="title-section">
                <h1
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="hero-title"
                >
                  <span className="title-word">Ihre</span>{" "}
                  <span className="title-word">Träume</span>{" "}
                  <span className="title-word">werden</span>{" "}
                  <span className="title-word">zu</span>{" "}
                  <span
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    className="highlight-text"
                  >
                    Realität
                  </span>
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="title-underline"
                >
                  <div className="underline-fill"></div>
                </div>
              </div>
              
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="hero-description animated-text"
              >
                Mit über einem Jahrzehnt Erfahrung schaffen wir außergewöhnliche Bauwerke, 
                die Generationen überdauern. Präzision, Innovation und Leidenschaft in jedem Detail.
              </p>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="350"
                className="hero-actions"
              >
                <button
                  onClick={scrollToBottom}
                  className="cta-button enhanced-button"
                >
                  <span className="button-text">Projekt beginnen</span>
                  <div className="button-overlay"></div>
                  <div className="button-ripple"></div>
                  <div className="button-glow"></div>
                  <div className="button-particles">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`btn-particle btn-particle-${i + 1}`}></div>
                    ))}
                  </div>
                </button>
                
                <div className="social-proof enhanced-proof">
                  <div className="avatar-stack">
                    <div className="avatar avatar-1">
                      <div className="avatar-shine"></div>
                    </div>
                    <div className="avatar avatar-2">
                      <div className="avatar-shine"></div>
                    </div>
                    <div className="avatar avatar-3">
                      <div className="avatar-shine"></div>
                    </div>
                    <div className="avatar-count">
                      <span className="count-number">+</span>
                      <div className="count-ripple"></div>
                    </div>
                  </div>
                  <div className="proof-text">
                    <span className="proof-number">500+</span>
                    <span className="proof-label">zufriedene Kunden</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Feature Badges */}
              <div className="feature-badges enhanced-badges" data-aos="fade-up" data-aos-delay="500">
                <div className="badge badge-premium">
                  <div className="badge-icon">🏆</div>
                  <span>Premium Qualität</span>
                  <div className="badge-shine"></div>
                </div>
                <div className="badge badge-speed">
                  <div className="badge-icon">⚡</div>
                  <span>Schnelle Umsetzung</span>
                  <div className="badge-shine"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Logo / Building */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="hero-visual enhanced-visual"
          >
            <div className="logo-container">
              <div className="logo-orbit">
                <div className="orbit-ring ring-1"></div>
                <div className="orbit-ring ring-2"></div>
                <div className="orbit-ring ring-3"></div>
              </div>
              <img
                src={heroImage}
                alt="Apex Nova Bau Logo"
                className="hero-logo"
              />
              <div className="logo-pulse"></div>
            </div>

            {/* Enhanced Building Text */}
            <div className="building-text mt-4 enhanced-building">
              <div className="roof">
                <div className="roof-shine"></div>
              </div>
              <div className="building-row">
                <span className="letter letter-0">A</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-1">p</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-2">e</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-3">x</span>
              </div>
              <div className="building-row apex-row enhanced-apex">
                <span className="letter letter-4">N</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-5">o</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-6">v</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-7">a</span>
              </div>
              <div className="building-row building-bottom enhanced-bottom">
                <span className="letter letter-8">B</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-9">a</span>
                <div className="divider enhanced-divider"></div>
                <span className="letter letter-10">u</span>
              </div>
              <p className="slogan enhanced-slogan">
                Nachhaltigkeit und Innovation
                <span className="slogan-cursor"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="scroll-indicator enhanced-scroll" data-aos="fade-up" data-aos-delay="600">
        <div className="scroll-line">
          <div className="scroll-energy"></div>
        </div>
        <div className="scroll-dot">
          <div className="dot-pulse"></div>
        </div>
        <div className="scroll-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;