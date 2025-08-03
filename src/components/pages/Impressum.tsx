import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 text-gray-800 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8d8664] to-[#306ab2] bg-clip-text text-transparent">
            Impressum
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-[#8d8664] rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-[#306ab2] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Angaben gemäß § 5 TMG</h2>
            <div className="text-lg leading-relaxed text-gray-700">
              <p className="font-semibold text-xl text-[#306ab2] mb-3">ApexNova Bau</p>
              <p>Inhaber: Mohammad Amaren</p>
              <p>Sprengelstraße 27</p>
              <p>13353 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kontakt</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Telefon:</span> 
                <a href="tel:+4917664329242" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                  +49 176 64329242
                </a>
              </p>
              <p>
                <span className="font-semibold">E-Mail:</span> 
                <a href="mailto:info@apexnova-bau.de" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                  info@apexnova-bau.de
                </a>
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-orange-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="text-base text-gray-700 space-y-2">
              <p><span className="font-semibold">Berufsbezeichnung:</span> Bauunternehmer</p>
              <p><span className="font-semibold">Zuständige Aufsichtsbehörde:</span> Berlin Mitte</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Umsatzsteuer-ID</h2>
            <p className="text-lg text-gray-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="font-mono text-[#306ab2]">In Beantragung</span>
              <br />
            </p>
          </section>

          <section className="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Versicherung</h2>
            <div className="text-base text-gray-700 space-y-2">
              <p><span className="font-semibold">Betriebshaftpflichtversicherung:</span></p>
              <p>In Bearbeitung</p>
              <p>Versicherungsschutz: Deutschland und EU</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-50 to-pink-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-lg leading-relaxed text-gray-700">
              <p className="font-semibold">Mohammad Amaren</p>
              <p>Sprengelstraße 27</p>
              <p>13353 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Haftungsausschluss</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#306ab2]">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-2">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                  der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#8d8664]">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                  wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                  zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="mt-2">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#306ab2]">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="mt-2">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Streitschlichtung</h2>
            <div className="text-base text-gray-700 space-y-3">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="ml-1 text-[#306ab2] hover:text-[#8d8664] underline transition-colors">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4">
              <span className="font-semibold">Stand:</span> Januar 2025 | 
              <span className="font-semibold ml-4">ApexNova Bau</span> - Ihr Partner für professionelle Bauarbeiten
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;