import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const bgImage = {
  backgroundImage: `url(https://picsum.photos/211/200)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      } else {
        setEmailError("");
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.email) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail ein.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!formData.message) newErrors.message = "Bitte geben Sie eine Nachricht ein.";
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
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID 
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Nachricht gesendet",
            text: "Ihre Nachricht wurde erfolgreich gesendet!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Senden fehlgeschlagen",
            text: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
          });
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="footer" style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-2 pb-10 pt-5">
          {/* Text Section */}
          <div className="py-8 px-4">
            <h2 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h2>
            <p className="mb-4">
              Bei Fragen oder Anregungen zu unseren Produkten und Dienstleistungen
              stehen wir Ihnen gerne zur Verfügung. Füllen Sie das Formular aus, und wir
              werden uns umgehend mit Ihnen in Verbindung setzen.
            </p>
            <button
              onClick={scrollToTop}
              className="transform transition-transform duration-300 hover:translate-y-1"
            >
              <FontAwesomeIcon icon={faAnglesUp} className="text-5xl" />
            </button>
          </div>

          {/* Kontaktformular */}
          <div className="py-8 px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md bg-white text-black transition duration-300 border-2 ${
                    errors.name ? "border-red-500 animate-shake" : "border-transparent"
                  } focus:outline-none focus:border-orange-500`}
                />
                {errors.name && <p className="text-red-500 text-sm animate-fadeIn">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md bg-white text-black transition duration-300 border-2 ${
                    errors.email || emailError ? "border-red-500 animate-shake" : "border-transparent"
                  } focus:outline-none focus:border-orange-500`}
                />
                {emailError && <p className="text-red-500 text-sm animate-fadeIn">{emailError}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Ihre Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md bg-white text-black transition duration-300 border-2 ${
                    errors.message ? "border-red-500 animate-shake" : "border-transparent"
                  } focus:outline-none focus:border-orange-500`}
                  rows="4"
                />
                {errors.message && <p className="text-red-500 text-sm animate-fadeIn">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
