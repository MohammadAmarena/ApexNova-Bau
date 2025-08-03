import { useEffect } from "react";

const Datenschutzerklaerung = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 text-gray-800 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8d8664] to-[#306ab2] bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-[#8d8664] rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-[#8d8664] to-[#306ab2] rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-[#306ab2] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Präambel</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer 
              personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken 
              und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten 
              Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als 
              auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer 
              Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
            </p>
          </section>

          <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Verantwortlicher</h2>
            <div className="text-base leading-relaxed text-gray-700">
              <p className="font-semibold text-xl text-[#306ab2] mb-3">ApexNova Bau</p>
              <p>Mohammad Amaren</p>
              <p>Sprengelstraße 27</p>
              <p>13353 Berlin</p>
              <p>Deutschland</p>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">E-Mail:</span> 
                  <a href="mailto:info@apexnova-bau.de" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                    info@apexnova-bau.de
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Telefon:</span> 
                  <a href="tel:+4917664329242" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                    +49 176 64329242
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-orange-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Übersicht der Verarbeitungen</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#8d8664] mb-2">Arten der verarbeiteten Daten</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Kontaktdaten</li>
                    <li>• Inhaltsdaten</li>
                    <li>• Nutzungsdaten</li>
                    <li>• Meta-/Kommunikationsdaten</li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#306ab2] mb-2">Kategorien betroffener Personen</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Kommunikationspartner</li>
                    <li>• Nutzer</li>
                    <li>• Interessenten</li>
                    <li>• Geschäftskunden</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2 text-[#8d8664]">Zwecke der Verarbeitung</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Erbringung vertraglicher Leistungen und Kundenservice</li>
                  <li>Kontaktanfragen und Kommunikation</li>
                  <li>Sicherheitsmaßnahmen</li>
                  <li>Verwaltung und Beantwortung von Anfragen</li>
                  <li>Feedback und Bewertungen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Maßgebliche Rechtsgrundlagen</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir 
                personenbezogene Daten verarbeiten:
              </p>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#306ab2]">Art. 6 Abs. 1 S. 1 lit. a) DSGVO</span> - Einwilligung</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#8d8664]">Art. 6 Abs. 1 S. 1 lit. b) DSGVO</span> - Vertragserfüllung und vorvertragliche Anfragen</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#306ab2]">Art. 6 Abs. 1 S. 1 lit. f) DSGVO</span> - Berechtigte Interessen</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Kontaktaufnahme</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Bei der Kontaktaufnahme mit uns (z.B. über Kontaktformular, E-Mail, Telefon oder via soziale Medien) 
                sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden 
                Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter 
                Maßnahmen erforderlich ist.
              </p>
              
              <div className="bg-white/70 rounded-lg p-4">
                <h3 className="font-semibold text-[#8d8664] mb-2">Verarbeitete Datenarten:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                  <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen)</li>
                  <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                  <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
                </ul>
              </div>

              <div className="bg-white/70 rounded-lg p-4">
                <h3 className="font-semibold text-[#306ab2] mb-2">Betroffene Personen:</h3>
                <p className="text-sm">Kommunikationspartner</p>
              </div>

              <div className="bg-white/70 rounded-lg p-4">
                <h3 className="font-semibold text-[#8d8664] mb-2">Zwecke der Verarbeitung:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Kontaktanfragen und Kommunikation</li>
                  <li>Verwaltung und Beantwortung von Anfragen</li>
                  <li>Feedback (z.B. Sammeln von Feedback via Online-Formular)</li>
                </ul>
              </div>

              <p>
                <span className="font-semibold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO), 
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), 
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Bereitstellung des Onlineangebotes und Webhosting</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. 
                Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und 
                Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
              </p>

              <div className="bg-white/70 rounded-lg p-4">
                <h3 className="font-semibold text-[#306ab2] mb-2">Verarbeitete Datenarten:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Nutzungsdaten (besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                  <li>Meta-/Kommunikationsdaten (Geräte-Informationen, IP-Adressen)</li>
                  <li>Inhaltsdaten (Eingaben in Onlineformularen)</li>
                </ul>
              </div>

              <p>
                <span className="font-semibold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
              </p>

              <p>
                <span className="font-semibold">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</span>
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <p>
                  <span className="font-semibold">Erhebung von Zugriffsdaten und Logfiles:</span> 
                  Der Zugriff auf unser Onlineangebot wird in Form von so genannten "Server-Logfiles" protokolliert. 
                  Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, 
                  übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem 
                  des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Keine Cookies und Tracking</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                <p className="text-lg font-semibold text-green-800 mb-2">✓ Datenschutzfreundliche Website</p>
                <p className="text-green-700">
                  Unsere Website verwendet <span className="font-semibold">keine Cookies</span> und führt 
                  <span className="font-semibold"> kein Nutzer-Tracking</span> durch. Wir setzen keine 
                  Analyse-Tools wie Google Analytics, Facebook Pixel oder ähnliche Dienste ein.
                </p>
              </div>
              <p>
                Dies bedeutet für Sie als Besucher maximalen Datenschutz und Privatsphäre beim Besuch unserer Website. 
                Es werden keine Tracking-Daten gesammelt, keine Nutzerprofile erstellt und keine personenbezogenen 
                Daten für Werbezwecke verarbeitet.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Rechte der betroffenen Personen</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#8d8664] mb-2">Auskunftsrecht (Art. 15 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#306ab2] mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#8d8664] mb-2">Recht auf Löschung (Art. 17 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten unverzüglich gelöscht werden, sofern einer der gesetzlichen Gründe zutrifft.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#306ab2] mb-2">Recht auf Einschränkung (Art. 18 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht, die Einschränkung der Verarbeitung der Sie betreffenden Daten zu verlangen.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#8d8664] mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold text-[#306ab2] mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                  <p className="text-sm">Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden Daten Widerspruch einzulegen.</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm">
                  <span className="font-semibold">Widerrufsrecht bei Einwilligungen:</span> 
                  Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen. Durch den Widerruf der Einwilligung 
                  wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-sm">
                  <span className="font-semibold">Beschwerderecht bei der Aufsichtsbehörde:</span> 
                  Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, 
                  das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen 
                  Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, 
                  dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-rose-50 to-pink-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Dauer der Datenspeicherung</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Soweit nicht explizit angegeben, werden von uns gespeicherte Daten gelöscht, sobald sie für ihre 
                Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
              
              <div className="space-y-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#8d8664]">Kontaktanfragen:</span> Löschung nach vollständiger Bearbeitung, spätestens nach 3 Jahren</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#306ab2]">Server-Logfiles:</span> Automatische Löschung nach maximal 30 Tagen</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p><span className="font-semibold text-[#8d8664]">Geschäftskorrespondenz:</span> Aufbewahrung nach handels- und steuerrechtlichen Vorgaben (bis zu 10 Jahre)</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Sofern gesetzliche Aufbewahrungspflichten bestehen (z.B. nach dem Handelsgesetzbuch, der Abgabenordnung 
                oder anderen Gesetzen), werden die Daten entsprechend den gesetzlichen Vorgaben aufbewahrt.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-violet-50 to-purple-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. SSL-/TLS-Verschlüsselung</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800">
                  <span className="font-semibold">🔒 Sichere Datenübertragung:</span> 
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                  eine SSL-/TLS-Verschlüsselung.
                </p>
              </div>
              <p>
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" 
                auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- oder 
                TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von 
                Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl p-6 border-l-4 border-[#306ab2]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Änderung der Datenschutzerklärung</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung 
                umzusetzen, z.B. bei der Einführung neuer Services.
              </p>
              <p>
                Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. Wir empfehlen Ihnen, 
                diese Datenschutzerklärung regelmäßig zu lesen, um über den Schutz der von uns erfassten 
                Informationen auf dem Laufenden zu bleiben.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-6 border-l-4 border-[#8d8664]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Kontakt bei Datenschutzfragen</h2>
            <div className="text-base leading-relaxed text-gray-700 space-y-3">
              <p>
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich 
                direkt an die für den Datenschutz verantwortliche Person in unserem Unternehmen:
              </p>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-semibold text-[#306ab2]">ApexNova Bau - Datenschutz</p>
                <p>Mohammad Amaren</p>
                <p>
                  <span className="font-semibold">E-Mail:</span> 
                  <a href="mailto:info@apexnova-bau.de" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                    info@apexnova-bau.de
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Telefon:</span> 
                  <a href="tel:+4917664329242" className="ml-2 text-[#306ab2] hover:text-[#8d8664] transition-colors duration-300">
                    +49 176 64329242
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4">
              <span className="font-semibold">Stand:</span> Juni 2025 | 
              <span className="font-semibold ml-4">ApexNova Bau</span> - Ihr Partner für professionelle Bauarbeiten
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutzerklaerung;