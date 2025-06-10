import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import contactBg from "../../assets/img12.JPG"; // Replace with your actual image

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setEmailError(emailRegex.test(value) ? "" : "Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name ist erforderlich.";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Ungültige E-Mail-Adresse.";
    if (!formData.message) newErrors.message = "Nachricht darf nicht leer sein.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        Swal.fire({ icon: "success", title: "Erfolgreich", text: "Ihre Nachricht wurde gesendet!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "Fehler", text: "Etwas ist schief gelaufen." });
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 w-full">
        <div className="container mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#8d8664]">Kontakt aufnehmen</h2>
            <p className="text-white/90 mb-6">
              Haben Sie Fragen oder benötigen Sie Unterstützung? Schreiben Sie uns direkt über dieses Formular. Wir melden uns schnellstmöglich bei Ihnen.
            </p>
            <button
              onClick={scrollToTop}
              className="text-[#306ab2] text-4xl hover:scale-110 transition duration-300"
              aria-label="Nach oben scrollen"
            >
              <FontAwesomeIcon icon={faAnglesUp} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-6 rounded-lg shadow-lg">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              className={`w-full p-3 rounded-md text-black ${errors.name && "border border-red-500 animate-pulse"}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ihre E-Mail-Adresse"
              className={`w-full p-3 rounded-md text-black ${emailError || errors.email ? "border border-red-500 animate-pulse" : ""}`}
            />
            {(errors.email || emailError) && <p className="text-red-500 text-sm">{errors.email || emailError}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ihre Nachricht"
              rows="4"
              className={`w-full p-3 rounded-md text-black ${errors.message && "border border-red-500 animate-pulse"}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-md font-bold bg-gradient-to-r from-[#8d8664] to-[#306ab2] text-white hover:scale-105 transition-transform duration-300"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
