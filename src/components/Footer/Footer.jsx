import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importiere EmailJS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome Icon
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your Service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your Template ID from .env
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID // Your User ID from .env
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Reset the form
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  // Function to scroll to the top of the page
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
              Bei Fragen oder Anregungen zu unseren Produkten und
              Dienstleistungen stehen wir Ihnen gerne zur Verfügung. Füllen Sie
              das Formular aus, und wir werden uns umgehend mit Ihnen in
              Verbindung setzen.
            </p>
            {/* Go Up Button */}
            <button
              onClick={scrollToTop} // Call scrollToTop when clicked
              className="transform transition-transform duration-300 hover:translate-y-1"
            >
              <FontAwesomeIcon icon={faAnglesUp} className="text-5xl" /> {/* FontAwesome Icon */}
            </button>
          </div>

          {/* Kontaktformular */}
          <div className="py-8 px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-white text-black" // Hinzugefügte Hintergrund- und Textfarbe
              />
              <input
                type="email"
                name="email"
                placeholder="Ihre E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-white text-black" // Hinzugefügte Hintergrund- und Textfarbe
              />
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-white text-black" // Hinzugefügte Hintergrund- und Textfarbe
                rows="4"
              />
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
