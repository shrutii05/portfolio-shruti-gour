import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">
        About <span className="about-me">Me</span>
      </h2>

      <div className="about-para">
        <p>
          I’m <strong>Shruti Gour</strong>, a Computer Science Engineering graduate
          from Shri Vaishnav Institute of Information Technology, Indore.
        </p>

        <p>
          I enjoy creating clean, responsive, and visually appealing interfaces
          using HTML, CSS, JavaScript, and React, with a strong focus on user
          experience and design.
        </p>

        <p>
          As a fresher, I’m continuously learning, improving my skills, and
          building projects that turn ideas into meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
