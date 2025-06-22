import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Building, Zap, ArrowRight, Play, Pause } from 'lucide-react';

const ConstructionHub = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState([0, 0, 0]);
  const [showControls, setShowControls] = useState(false);
  const progressRefs = useRef([]);
  const servicesRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Smart Bauleitung",
      description: "KI-gestützte Baustellenkoordination mit Echtzeit-Monitoring und predictive Analytics für optimale Projektabläufe.",
      icon: <Building size={32} />,
      color: "gold",
      stats: { value: "98%", label: "Erfolgsrate" }
    },
    {
      id: 2,
      title: "Digital Engineering",
      description: "Revolutionäre 3D-Planung mit VR-Visualisierung und IoT-Integration für die Baustelle der Zukunft.",
      icon: <Zap size={32} />,
      color: "blue",
      stats: { value: "45%", label: "Zeitersparnis" }
    },
    {
      id: 3,
      title: "Precision Construction",
      description: "Roboter-assistierte Präzisionsbauweise mit nachhaltigen Materialien und Zero-Waste-Prinzipien.",
      icon: <Wrench size={32} />,
      color: "gold",
      stats: { value: "100%", label: "Qualität" }
    }
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .construction-hub {
        min-height: 100vh;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        position: relative;
        overflow: hidden;
        color: white;
      }
      
      .construction-hub::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 20%, rgba(141, 134, 100, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(48, 106, 178, 0.15) 0%, transparent 50%);
        pointer-events: none;
      }
      
      .hero-badge {
        display: inline-block;
        padding: 0.8rem 2.5rem;
        background: linear-gradient(45deg, #8d8664, #306ab2);
        border-radius: 50px;
        font-weight: 900;
        letter-spacing: 3px;
        margin-bottom: 2rem;
        animation: pulse-glow 3s ease-in-out infinite;
        color: white;
        text-transform: uppercase;
      }
      
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 20px rgba(141, 134, 100, 0.4); }
        50% { box-shadow: 0 0 40px rgba(141, 134, 100, 0.8), 0 0 60px rgba(48, 106, 178, 0.4); }
        100% { box-shadow: 0 0 20px rgba(141, 134, 100, 0.4); }
      }
      
      .hero-title {
        font-size: clamp(3rem, 8vw, 8rem);
        font-weight: 900;
        line-height: 0.9;
        margin-bottom: 1rem;
      }
      
      .gold-text {
        color: #8d8664;
        text-shadow: 0 0 30px rgba(141, 134, 100, 0.8);
      }
      
      .blue-text {
        color: #306ab2;
        text-shadow: 0 0 30px rgba(48, 106, 178, 0.8);
      }
      
      .hero-subtitle {
        font-size: 1.8rem;
        margin-bottom: 3rem;
        background: linear-gradient(45deg, #8d8664, #306ab2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
      }
      
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        padding: 0 2rem;
        margin-bottom: 5rem;
      }
      
      .service-card {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 2.5rem;
        position: relative;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow: hidden;
      }
      
      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #8d8664, #306ab2);
        border-radius: 20px 20px 0 0;
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }
      
      .service-card:hover {
        transform: translateY(-15px) scale(1.03);
        box-shadow: 0 0 40px rgba(141, 134, 100, 0.3), 0 0 80px rgba(48, 106, 178, 0.2);
        border-color: rgba(141, 134, 100, 0.5);
      }
      
      .service-card:hover::before {
        transform: scaleX(1);
      }
      
      .service-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }
      
      .service-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: relative;
        overflow: hidden;
      }
      
      .service-icon.gold {
        background: linear-gradient(135deg, #8d8664, #a09b7a);
        color: #0a0a0a;
      }
      
      .service-icon.blue {
        background: linear-gradient(135deg, #306ab2, #4a7bc8);
        color: white;
      }
      
      .service-card:hover .service-icon {
        transform: scale(1.2) rotate(360deg);
      }
      
      .service-number {
        font-size: 3rem;
        font-weight: 900;
        opacity: 0.3;
        color: #8d8664;
      }
      
      .service-title {
        font-size: 1.8rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: white;
      }
      
      .service-description {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
      
      .build-progress {
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 1.5rem;
        position: relative;
      }
      
      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #8d8664, #306ab2);
        border-radius: 4px;
        transition: width 2s ease-in-out;
        position: relative;
      }
      
      .progress-bar::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: shimmer 2s ease-in-out infinite;
      }
      
      @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      
      .service-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .stat-value {
        font-weight: 900;
        font-size: 1.5rem;
        color: #8d8664;
      }
      
      .stat-label {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin-top: 0.2rem;
      }
      
      .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.8rem 4rem;
        background: linear-gradient(45deg, #8d8664, #306ab2);
        border: none;
        border-radius: 50px;
        color: white;
        font-weight: 900;
        font-size: 1.3rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .cta-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.6s ease;
      }
      
      .cta-button:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 40px rgba(141, 134, 100, 0.4), 0 0 60px rgba(48, 106, 178, 0.3);
      }
      
      .cta-button:hover::before {
        left: 100%;
      }
      
      .floating-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      
      .float-item {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        opacity: 0.1;
        animation: float 8s ease-in-out infinite;
      }
      
      .float-item:nth-child(1) {
        top: 20%;
        left: 10%;
        background: #8d8664;
        animation-delay: 0s;
      }
      
      .float-item:nth-child(2) {
        top: 60%;
        right: 10%;
        background: #306ab2;
        animation-delay: 2s;
      }
      
      .float-item:nth-child(3) {
        bottom: 20%;
        left: 20%;
        background: #8d8664;
        animation-delay: 4s;
      }
      
      .float-item:nth-child(4) {
        top: 40%;
        right: 30%;
        background: #306ab2;
        animation-delay: 6s;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-30px) rotate(120deg); }
        66% { transform: translateY(-15px) rotate(240deg); }
      }
      
      .control-panel {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        display: flex;
        gap: 1rem;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        pointer-events: none;
      }
      
      .control-panel.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      
      .control-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(45deg, #8d8664, #306ab2);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
      
      .control-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 30px rgba(141, 134, 100, 0.4);
      }
      
      .control-btn:active {
        transform: scale(0.95);
      }
      
      @media (max-width: 768px) {
        .services-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .service-card {
          padding: 2rem;
        }
        
        .hero-title {
          font-size: clamp(2rem, 8vw, 4rem);
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
        }
        
        .cta-button {
          padding: 1.5rem 3rem;
          font-size: 1.1rem;
        }
        
        .control-panel {
          bottom: 1rem;
          right: 1rem;
        }
        
        .control-btn {
          width: 50px;
          height: 50px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Scroll detection for showing/hiding controls
  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show controls when services section is in view
        const isServicesVisible = rect.top < windowHeight && rect.bottom > 0;
        setShowControls(isServicesVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Progress animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => prev.map((p, i) => 
          p >= 100 ? 0 : p + Math.random() * 15
        ));
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleCTAClick = () => {
    const emailSubject = encodeURIComponent("Innovative Bauprojekt Anfrage - Digitale Transformation");
    const emailBody = encodeURIComponent(`Hallo apexnova-Bau Team,

ich interessiere mich für Ihre innovativen Bauleistungen:

🏗️ Smart Bauleitung mit KI-Integration
⚡ Digital Engineering & VR-Planung  
🔧 Precision Construction & Robotik

Lassen Sie uns gemeinsam die Zukunft des Bauens gestalten!

Projektdetails:
- Umfang: [Bitte spezifizieren]
- Timeline: [Gewünschter Zeitrahm]
- Innovation Level: [Hoch/Maximal]

Beste Grüße`);

    window.location.href = `mailto:info@apexnova-bau.de?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="construction-hub">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="float-item"></div>
        <div className="float-item"></div>
        <div className="float-item"></div>
        <div className="float-item"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section" style={{ position: 'relative', zIndex: 10, padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="hero-badge">
          🚀 Zukunft des Bauens
        </div>
        
        <h1 className="hero-title">
          <div className="gold-text">DIGITAL</div>
          <div className="blue-text">CONSTRUCTION</div>
          <div style={{ color: 'white' }}>HUB</div>
        </h1>
        
        <p className="hero-subtitle">
          Wo Innovation auf Präzision trifft - Bauen für die nächste Generation
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid" ref={servicesRef}>
        {services.map((service, index) => (
          <div
            key={service.id}
            className="service-card"
            onMouseEnter={() => setActiveCard(service.id)}
            onMouseLeave={() => setActiveCard(null)}
            style={{
              background: activeCard === service.id 
                ? 'rgba(255, 255, 255, 0.12)' 
                : 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="service-header">
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>
              <div className="service-number">
                0{service.id}
              </div>
            </div>
            
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <div className="build-progress">
              <div 
                className="progress-bar"
                style={{ width: `${Math.min(progress[index], 100)}%` }}
              ></div>
            </div>
            
            <div className="service-stats">
              <div>
                <div className="stat-value">{service.stats.value}</div>
                <div className="stat-label">{service.stats.label}</div>
              </div>
              <div style={{ 
                color: service.color === 'gold' ? '#8d8664' : '#306ab2',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                {activeCard === service.id ? '● AKTIV' : '○ BEREIT'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '0 2rem 5rem' }}>
        <button 
          className="cta-button"
          onClick={handleCTAClick}
        >
          <span>Projekt starten</span>
          <ArrowRight size={24} />
        </button>
        
        <div style={{ 
          marginTop: '2rem', 
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1rem'
        }}>
          🎯 Kostenlose Erstberatung • 📊 Digitale Projektanalyse • ⚡ 24h Response
        </div>
      </div>

      {/* Conditional Control Panel - Only visible when services section is in view */}
      <div className={`control-panel ${showControls ? 'visible' : ''}`}>
        <button 
          className="control-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Pause Animations" : "Play Animations"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
    </div>
  );
};

export default ConstructionHub;