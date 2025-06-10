import React from "react";
import { FaHardHat, FaTruck, FaTools, FaPhone, FaMapMarkerAlt, FaStar, FaEnvelope } from "react-icons/fa";
import aboutImg from "../../assets/img4.JPG";

const bgStyle = {
  background: "linear-gradient(90deg, #8d8664 0%, #306ab2 100%)",
};

const Banner = () => {
  return (
    <>
      {/* SEO-Optimized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ApexNova Bau - Bauarbeiten Berlin Brandenburg",
            "description": "Professionelle Bauarbeiten in Berlin und Brandenburg. Hochbau, Tiefbau, Sanierung, Neubau. Über 15 Jahre Erfahrung.",
            "url": "https://www.apexnova-bau.de",
            "telephone": "004917664329242",
            "email": "info@apexnova-bau.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Berlin",
              "addressRegion": "Berlin",
              "addressCountry": "DE"
            },
            "areaServed": ["Berlin", "Brandenburg"],
            "serviceType": ["Bauarbeiten", "Hochbau", "Tiefbau", "Sanierung", "Neubau"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "47"
            }
          })
        }}
      />

      <section 
        id="about" 
        style={bgStyle} 
        className="text-white py-20"
        itemScope 
        itemType="https://schema.org/LocalBusiness"
      >
        <div className="container mx-auto px-6">
          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h1>Bauarbeiten Berlin Brandenburg - ApexNova Bau</h1>
            <p>Professionelle Bauarbeiten, Hochbau, Tiefbau, Sanierung in Berlin und Brandenburg. Über 15 Jahre Erfahrung. Kostenlose Beratung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Image with updated styling */}
            <div data-aos="zoom-in" className="flex justify-center">
              <img
                src={aboutImg}
                alt="Bauarbeiten Berlin Brandenburg - ApexNova Bau Baustelle mit Bauarbeitern"
                title="Professionelle Bauarbeiten in Berlin und Brandenburg"
                className="rounded-lg w-96 h-72 object-cover shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-500 border-4 border-white/20"
                itemProp="image"
                loading="lazy"
              />
            </div>

            {/* Right: SEO-Optimized Content */}
            <div className="space-y-6">
              {/* Main Heading with Primary Keywords */}
              <h2
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-bold font-cursive text-white drop-shadow-lg"
                itemProp="name"
              >
                Ihr Partner für Bau & Service
              </h2>
              
              {/* SEO-Rich Description */}
              <div className="space-y-4">
                <p
                  data-aos="fade-up"
                  className="text-lg text-white/90 leading-relaxed"
                  itemProp="description"
                >
                  <strong>Professionelle Bauarbeiten</strong> seit über 15 Jahren. 
                  Hochbau, Tiefbau, Sanierung und Neubau mit höchster Qualität und Präzision.
                </p>
                
                {/* Additional SEO Content */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base text-white/85 leading-relaxed"
                >
                  Von der Planung bis zur Fertigstellung - wir sind Ihr zuverlässiger Partner für alle 
                  <em> Bauprojekte</em>. 
                  Kostenlose Beratung und transparente Preise garantiert.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-4 py-2" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-sm text-white/90 ml-2">4.8/5 - 47 Bewertungen</span>
                </div>
              </div>

              {/* Updated Contact Info for Local SEO */}
              <div className="flex flex-wrap gap-6 py-2" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-white/80" />
                  <span className="text-sm" itemProp="telephone">004917664329242</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-white/80" />
                  <span className="text-sm" itemProp="email">info@apexnova-bau.de</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white/80" />
                  <span className="text-sm" itemProp="address">Deutschlandweit</span>
                </div>
              </div>

              {/* Service Features with Keywords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4" data-aos="fade-up">
                    <FaHardHat className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                    <div>
                      <span className="text-lg font-medium block">Hochbau</span>
                      <span className="text-xs text-white/70">Neubau & Erweiterungen</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
                    <FaTruck className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                    <div>
                      <span className="text-lg font-medium block">Tiefbau</span>
                      <span className="text-xs text-white/70">Fundamente & Kanalisation</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
                    <FaTools className="text-3xl p-2 rounded-full bg-white/10 text-white shadow-md" />
                    <div>
                      <span className="text-lg font-medium block">Sanierung & Renovierung</span>
                      <span className="text-xs text-white/70">Modernisierung & Instandsetzung</span>
                    </div>
                  </div>
                </div>

                {/* Quality Block with Local Keywords */}
                <div
                  className="border-l-4 border-white/40 pl-5 space-y-3"
                  data-aos="slide-left"
                >
                  <h3 className="text-2xl font-cursive text-white font-semibold">
                    Meisterhafte Qualität
                  </h3>
                  <p className="text-sm text-white/80">
                    Als etablierte <strong>Baufirma</strong> garantieren wir 
                    höchste Qualitätsstandards. Vom kleinen Umbau bis zum Großprojekt - 
                    Ihre Zufriedenheit ist unser Maßstab.
                  </p>
                  
                  {/* Service Areas */}
                  <div className="text-xs text-white/70 space-y-1">
                    <p><strong>Unsere Services:</strong></p>
                    <p>Neubau, Sanierung, Renovierung, Modernisierung</p>
                    <p>Innenausbau, Außenanlagen, Projektplanung</p>
                  </div>
                </div>
              </div>

              {/* CTA Button with Email Link */}
              <div className="pt-4" data-aos="fade-up" data-aos-delay="600">
                <a 
                  href="mailto:info@apexnova-bau.de"
                  className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Kostenlose Beratung
                </a>
              </div>
            </div>
          </div>

          {/* Additional SEO Content Section */}
          <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Warum ApexNova Bau für Ihre Bauarbeiten?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">15+ Jahre Erfahrung</h4>
                  <p className="text-sm text-white/80">
                    Über 500 erfolgreich abgeschlossene Bauprojekte
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Festpreisgarantie</h4>
                  <p className="text-sm text-white/80">
                    Transparente Kostenplanung ohne versteckte Zusatzkosten
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">24/7 Notdienst</h4>
                  <p className="text-sm text-white/80">
                    Schnelle Hilfe bei Baunotfällen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;