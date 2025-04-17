import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { name: "Project A", description: "A cool project.", link: "https://example.com" },
  { name: "Project B", description: "Another great one.", link: "https://example.com" },
];

const Projects = () => (
  <section className="p-8">
    <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 justify-items-center">
        {projects.map((project, idx) => (
          <div key={idx} className="max-w-xs">
            <ProjectCard
              title={project.name}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
  </section>
);

export default Projects;
