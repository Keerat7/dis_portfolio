// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

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
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
//import Projects from './pages/Projects'
//import About from './pages/About'

function App() {
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