import React, { useState } from "react";
import "./project.css";


const projectsData = [
  {
    title: "Portfolio Website",
    live: "https://shrutigour.github.io/portfolio/",
    github: "https://github.com/your-username/portfolio-react",
  },
  {
    title: "To-Do List",
    live: "",
    github: "",
  },
  // {
  //   title: "Coming Soon",
  //   live: "",
  //   github: "",
  // },
  // {
  //   title: "Coming Soon",
  //   live: "",
  //   github: "",
  // },
  // {
  //   title: "Coming Soon",
  //   live: "",
  //   github: "",
  // },
  // {
  //   title: "Coming Soon",
  //   live: "",
  //   github: "",
  // },
];

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">Projects</h2>

      <div className="projects-container">
        {projectsData.slice(0, visibleCount).map((item, index) => (
          <div className="project-box" key={index}>
            <div className="project-box" key={index}>
              {/* Project Title */}
              <h3 className="project-name">{item.title}</h3>

              {/* Project Links */}
              <div className="project-links">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live"
                >
                  Live
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projectsData.length && (
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
