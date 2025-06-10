import React, { useState } from "react";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Expertise", scrollTo: "expertise" },
  { id: 3, name: "Gallery", link: "/gallery" },
  { id: 4, name: "About", scrollTo: "about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMailClick = () => {
    window.location.href = "mailto:info@apexnova-bau.de";
    setMenuOpen(false);
  };

  const handleScrollOrNavigate = (scrollId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(scrollId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(scrollId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Custom handler for Home click
  const handleHomeClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      // Already home, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Not home, navigate first then scroll after small delay
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #8d8664 0%, #306ab2 100%)",
      }}
    >
      <div className="container mx-auto py-3 px-5 flex justify-between items-center">
        {/* Logo with custom onClick */}
        <a
          href="/"
          className="flex items-center gap-3 font-cursive2 font-extrabold text-2xl lg:text-3xl text-white drop-shadow-lg"
          style={{ textShadow: "0 0 6px rgba(0,0,0,0.3)" }}
          onClick={handleHomeClick}
        >
          <img
            src={logo}
            alt="Apex Nova Bau Logo"
            className="w-16 h-16 object-contain"
            style={{ filter: "drop-shadow(0 0 4px #8d8664)" }}
          />
          Apex Nova Bau
        </a>

        {/* Hamburger icon */}
        <button
          className="text-white text-3xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 font-semibold text-white/90">
          {Menu.map((item) =>
            item.link ? (
              <li key={item.id}>
                {item.name === "Home" ? (
                  <a
                    href="/"
                    onClick={handleHomeClick}
                    className="relative py-2 px-4 hover:text-white transition duration-300"
                    style={{ textShadow: "0 0 4px #306ab2", cursor: "pointer" }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="relative py-2 px-4 hover:text-white transition duration-300"
                    style={{ textShadow: "0 0 4px #306ab2" }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ) : (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollOrNavigate(item.scrollTo)}
                  className="relative py-2 px-4 hover:text-white transition duration-300 bg-transparent font-semibold text-white/90"
                  style={{ textShadow: "0 0 4px #306ab2" }}
                >
                  {item.name}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Desktop contact */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
          <button
            onClick={handleMailClick}
            className="flex items-center gap-2 rounded-full px-5 py-2 font-semibold shadow-lg transition-transform duration-300"
            style={{
              background: "linear-gradient(90deg, #8d8664 0%, #306ab2 100%)",
              color: "white",
              boxShadow: "0 0 8px #8d8664, 0 0 8px #306ab2",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Mail Me <FaEnvelope />
          </button>
          <span
            className="text-white font-medium select-none"
            style={{ textShadow: "0 0 4px #306ab2" }}
          >
            004917664329242
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4 pt-2 bg-[#8d8664]/90 text-white">
          <ul className="flex flex-col gap-4 font-semibold">
            {Menu.map((item) =>
              item.link ? (
                <li key={item.id}>
                  {item.name === "Home" ? (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHomeClick(e);
                      }}
                      className="block py-2"
                      style={{ textShadow: "0 0 4px #306ab2", cursor: "pointer" }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2"
                      style={{ textShadow: "0 0 4px #306ab2" }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ) : (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollOrNavigate(item.scrollTo)}
                    className="w-full text-left py-2"
                    style={{
                      textShadow: "0 0 4px #306ab2",
                      background: "transparent",
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={handleMailClick}
                className="w-full flex items-center justify-center gap-2 rounded-full px-5 py-2 font-semibold shadow-lg mt-3"
                style={{
                  background: "linear-gradient(90deg, #8d8664 0%, #306ab2 100%)",
                  color: "white",
                  boxShadow: "0 0 8px #8d8664, 0 0 8px #306ab2",
                }}
              >
                Mail Me <FaEnvelope />
              </button>
            </li>
            <li className="text-center mt-1 text-sm">
              <span
                className="text-white font-medium select-none"
                style={{ textShadow: "0 0 4px #306ab2" }}
              >
                004917664329242
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
