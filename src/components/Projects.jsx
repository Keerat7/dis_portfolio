import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const projects = [
  { name: "Project A", description: "A cool project.", link: "https://example.com" },
  { name: "Project B", description: "Another great one.", link: "https://example.com" },
];

const Projects = () => (
  <section className="p-8">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
      {projects.map((project, idx) => (
        <motion.div
          whileHover={{ rotateY: 10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          key={idx}
          className="p-4 border rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-2">{project.description}</p>
          <QRCode value={project.link} size={64} className="mt-4" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
