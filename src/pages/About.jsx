import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

export default function About() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      {/* Animated Section Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Profile Image and Intro */}
      <motion.div
        className="flex flex-col md:flex-row items-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Placeholder for your photo */}
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0">
          <img
            src={profileImg}
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <p className="text-lg leading-relaxed">
          Hello! I’m <strong>Keerat Singh</strong>, a passionate designer and developer with a love for crafting engaging user experiences. I specialize in programming and problem solving. I also like to dabble in design.
          <br /><br />
          My journey started when I discovered my interest in solving problems through code. Since then, I’ve worked on projects ranging from AR-enhanced portfolios to AI-driven interfaces.
        </p>
      </motion.div>

      {/* Experience & Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>UX/UI Design (2023-present)</li>
            <li>Front-End (2025–present)</li>
            <li>Design Projects (2023–present)</li>
          </ul>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li>🎨 Adobe, Figma, Sketch</li>
            <li>💻 React, Tailwind CSS, Framer Motion</li>
            <li>🔧 Three.js, AR.js, Lottie</li>
            <li>🎯 Affective Computing Concepts</li>
            <li>✨ Design Concepts and Processes</li>
            <li>🔗 Git & GitHub, Vercel, Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
