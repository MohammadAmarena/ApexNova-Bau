import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:mohammad.amaren94@gmail.com";
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-secondary to-secondary/90 shadow-md text-white">
      <div className="container py-2 px-4">
        <div className="flex justify-between items-center">
          {/* Icon Section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive2"
            >
              <FontAwesomeIcon
                icon={faMeteor}
                className="text-3xl"
                style={{ color: "green" }}
              />
              ApexNova-Bau
            </a>
          </div>

          {/* Links and Contact Section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row items-center sm:gap-4 gap-1">
              {/* Email Button */}
              <button
                onClick={handleMailClick}
                aria-label="Mail Me"
                className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
              >
                Mail Me
                <FaEnvelope className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Phone Number */}
              <div className="flex items-center sm:gap-1 gap-0 text-center">
                <span className="text-lg">004917664329242</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
