// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Agent from "./components/Agent";
// import SocialPresence from "./components/SocialPresence";
// import BackgroundMusic from "./components/BackgroundMusic";
// import './index.css';

// function App() {
//   const hour = new Date().getHours();
//   const isNight = hour >= 18 || hour < 6;

//   return (
//     <div className={isNight ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
//       <BackgroundMusic />
//       <Hero />
//       <Projects />
//       <Agent />
//       <SocialPresence />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//     </div>
//   )
// }

import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
//import Projects from './pages/Projects'
//import About from './pages/About'

function App() {
  useEffect(() => {
    const hour = new Date().getHours()
    const prefersDark = hour < 6 || hour >= 18 // 6 PM to 6 AM

    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl border-l border-r border-gray-300 dark:border-gray-700 px-6 border-none">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
