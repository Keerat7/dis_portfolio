import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="p-8 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold"
    >
      Welcome to My Portfolio
    </motion.h1>
    <p className="mt-4">Explore my work and design journey</p>
  </section>
);

export default Hero;