import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import ProjectCard from "../components/ProjectCard";

const projects = [
  { name: "IHCI Project", description: "Developed Hi-Fi prototype for an app.", link: "https://www.figma.com/proto/d3CwzgzVw5rfYT1xDhV1n7/IHCI-Project?node-id=397-56&starting-point-node-id=191%3A3&t=YY4h40FexHSK1dGl-1" },
  { name: "VDC Midsem Project", description: "A provocative poster on corruption.", link: "https://drive.google.com/file/d/1RP6MAnamC3FDaiIU4In4rkEB_iLmu2ns/view?usp=sharing" },
  { name: "VDC Endsem Project", description: "College library model + Custom bookmark.", link: "https://drive.google.com/drive/folders/1UZSPrOZbamK_K6yz3FPn5LDO_C5kvzIe?usp=sharing" },
  { name: "VDC Journal", description: "A collection of my design work throughout the course.", link: "https://docs.google.com/presentation/d/1y_zYf0psw-yzKCfl583M0B7lHcNVLblG/edit?usp=sharing&ouid=100012789284357171338&rtpof=true&sd=true" },
  { name: "DPP Midsem Project", description: "Application of Design Concepts in problem solving.", link: "https://docs.google.com/presentation/d/1n28nbW-XueGnSjiojkC7tcQNEOo1ERiTZE_DfHNh8-c/edit?usp=sharing" },
  { name: "DPP Endsem Project", description: "Application of Design Concepts in problem solving.", link: "https://docs.google.com/presentation/d/1aJiD_QGjKLuYGARJ86N35RGUkSwx8zyIq6FCFN62VO4/edit?usp=sharing" },
  { name: "This Website", description: "A website based Design Portfolio of my own!", link: "https://dis-portfolio.vercel.app/" },
];

const Projects = () => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setColumns(1); // small screen
      } else {
        setColumns(3); // large screen
      }
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <section className="p-8">
    <motion.h2 className="text-3xl font-bold text-center mb-10"
      style={{paddingTop: '2rem'}}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    > My Projects </motion.h2>
      <motion.div 
        style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '5rem 6rem',
          justifyItems: 'center',
          alignItems: 'start',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            style={{
              maxWidth: '350px',
              display: 'flex',
            }}
          >
            <ProjectCard
              title={project.name}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </motion.div>
  </section>
  );
};

export default Projects;
