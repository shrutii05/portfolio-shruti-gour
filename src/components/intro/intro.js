import React, { useEffect, useState } from "react";
import "./intro.css";
import arrow from "../../assets/down-arrow.png";
import resume from "../../assets/Shruti Resume.pdf";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const roles = ["Web Developer", "Frontend Developer"];

const Intro = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="introText">
          Hello, I'm <span className="introName">Shruti</span> <br />
          <span className="typewriter">{text}</span>
        </span>

        <p className="introPara">
          Creating modern, user-focused interfaces with attention to detail. <br/>
Always learning and refining my craft through real projects.
        </p>

        <div className="introBtns">
          <a href={resume} download className="btn2">
            <img src={arrow} alt="CV" className="btnImg arrowImg" />
            Download CV
          </a>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/shruti-gour-348478201"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} color="#ffffff" className="linkedin" />
            </a>

            <a
              href="https://github.com/shrutii05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={40} color="#ffffff" className="github" />
            </a>

            <a
              href="https://www.instagram.com/shruu_tii_05?igsh=bXoyZHg3ejYyM3hy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={40} color="#ffffff" className="insta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
