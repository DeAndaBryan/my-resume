import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

const projectData = [
  {
    id: 1,
    title: "POS System",
    description:
      "A comprehensive Vue-based Point of Sale system with inventory management and sales tracking.",
    images: [
      "/images/pos-system.png",
      "/images/pos-system-2.png", // Placeholder for future images
      "/images/pos-system-3.png",
    ],
    techStack: ["Vue", "Node.js", "MySQL"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A React-based personal portfolio website to showcase web development projects.",
    images: ["/images/portfolio.png"],
    techStack: ["React", "Vite", "CSS"],
  },
  {
    id: 3,
    title: "E-commerce Store",
    description:
      "An e-commerce platform developed with React and Node.js, supporting user authentication and payment integration.",
    images: ["/images/e-commerce.png", "/images/e-commerce-2.png"],
    techStack: ["React", "Node.js", "MongoDB"],
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((project) => project.id === parseInt(id));

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="project-details">
      <button className="back-button" onClick={handleGoBack}>
        ❌ Back
      </button>
      <h2 className="project-title">{project.title}</h2>

      <div className="project-images">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="project-image"
          />
        ))}
      </div>

      <p className="project-description">{project.description}</p>

      <h4>Tech Stack:</h4>
      <ul className="tech-stack">
        {project.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;
