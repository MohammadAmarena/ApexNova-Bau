import React from "react";
import "./Hero.css";
import heroImage from "../../assets/LOGO.png";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-container">
      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

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
                  Ihre Träume werden zu{" "}
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
                ></div>
              </div>
              
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="hero-description"
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
                  className="cta-button"
                >
                  <span className="button-text">Projekt beginnen</span>
                  <div className="button-overlay"></div>
                  <div className="button-ripple"></div>
                </button>
                
                <div className="social-proof">
                  <div className="avatar-stack">
                    <div className="avatar avatar-1"></div>
                    <div className="avatar avatar-2"></div>
                    <div className="avatar avatar-3"></div>
                    <div className="avatar-count">+</div>
                  </div>
                  <div className="proof-text">
                    <span className="proof-number">500+</span>
                    <span className="proof-label">zufriedene Kunden</span>
                  </div>
                </div>
              </div>

              {/* Additional Features */}
              <div className="feature-badges" data-aos="fade-up" data-aos-delay="500">
                <div className="badge">
                  <div className="badge-icon">🏆</div>
                  <span>Premium Qualität</span>
                </div>
                <div className="badge">
                  <div className="badge-icon">⚡</div>
                  <span>Schnelle Umsetzung</span>
                </div>
                <div className="badge">
                  <div className="badge-icon">🛡️</div>
                  <span>10 Jahre Garantie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Logo / Building */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="hero-visual"
          >
            <div className="logo-container">
              <img
                src={heroImage}
                alt="Apex Nova Bau Logo"
                className="hero-logo"
              />
            </div>

            {/* Building Text (unchanged) */}
            <div className="building-text mt-4">
              <div className="roof"></div>
              <div className="building-row">
                <span className="letter letter-0">A</span>
                <div className="divider"></div>
                <span className="letter letter-1">p</span>
                <div className="divider"></div>
                <span className="letter letter-2">e</span>
                <div className="divider"></div>
                <span className="letter letter-3">x</span>
              </div>
              <div className="building-row apex-row">
                <span className="letter letter-4">N</span>
                <div className="divider"></div>
                <span className="letter letter-5">o</span>
                <div className="divider"></div>
                <span className="letter letter-6">v</span>
                <div className="divider"></div>
                <span className="letter letter-7">a</span>
              </div>
              <div className="building-row building-bottom">
                <span className="letter letter-8">B</span>
                <div className="divider"></div>
                <span className="letter letter-9">a</span>
                <div className="divider"></div>
                <span className="letter letter-10">u</span>
              </div>
              <p className="slogan">Nachhaltigkeit und Innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
        <div className="scroll-line"></div>
        <div className="scroll-dot"></div>
      </div>
    </div>
  );
};

export default Hero;