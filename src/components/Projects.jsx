// src/components/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "AI Ticketing System",
    description: "A Vue-based Point of Sale system.",
    image: "images/ticketing-preview.png",
  },
  {
    id: 2,
    title: "POS System",
    description: "A personal portfolio.",
    image: "images/pos-cart.png",
  },
  {
    id: 3,
    title: "Workout Tracker App",
    description: "An e-commerce platform.",
    image: "images/workout-preview1.png",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectData.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="project-link"
          >
            <div className="project-card">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
