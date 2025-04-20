import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="p-8">

      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Checkout my design journey and the evolution of my work!
      </motion.p>

      <div className='mt-10 min-h-[300px] overflow-visible relative flex justify-center items-start'>
        <div className='max-w-xs'>
          <h3 className='text-2xl font-bold mb-4 text-center'>Try dragging this 👇</h3>
          <ProjectCard
            title="a really cool project"
            description="too cool to be true"
            link="https://youtube.com"
          />
        </div>
      </div>

    </main>
  )
}
