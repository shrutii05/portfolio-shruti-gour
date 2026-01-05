
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const offset = -80;
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link
          to="intro"
          className="desktopMenuListItem"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          Home
        </Link>

        <Link
          to="about"
          className="desktopMenuListItem"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          About
        </Link>

        <Link
          to="skills"
          className="desktopMenuListItem"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          Skills
        </Link>

        <Link
          to="projects"
          className="desktopMenuListItem"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          Projects
        </Link>

        <Link
          to="contact"
          className="desktopMenuListItem"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          Contact
        </Link>
      </div>

      <a href="#contact">
        <button className="desktopMenuBtn">
          <img
            className="desktopMenuImg"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency-systems-filled/48/user.png"
            alt="user"
          />
          Contact Me
        </button>
      </a>

      {/* Hamburger Icon */}
      <div className="hamburgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes size={30} color="#ffffff" />
        ) : (
          <FaBars size={30} color="#ffffff" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link
            onClick={() => setMenuOpen(false)}
            to="intro"
            spy
            smooth
            offset={offset}
            duration={500}
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="about"
            spy
            smooth
            offset={offset}
            duration={500}
          >
            About
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="skills"
            spy
            smooth
            offset={offset}
            duration={500}
          >
            Skills
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="projects"
            spy
            smooth
            offset={offset}
            duration={500}
          >
            Projects
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="contact"
            spy
            smooth
            offset={offset}
            duration={500}
          >
            Contact
          </Link>
        </div>
      )}

      {menuOpen && <div className="navOverlay" onClick={() => setMenuOpen(false)} />}

    </nav>
  );
};

export default Navbar;
