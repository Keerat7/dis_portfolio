import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main 
    style={{
      padding: '2rem',
      paddingTop: '4rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}>

      <motion.h1 
        style={{
          fontSize: '5rem', // equivalent to text-6xl
          fontWeight: '700',   // font-extrabold
          marginBottom: '1.5rem',
          textAlign: 'left',
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        style={{
          fontSize: '1.5rem', // text-xl
          textAlign: 'left',
          maxWidth: '48rem',
          marginBottom: '4rem'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Checkout my design journey and the evolution of my work!
      </motion.p>

      <motion.div className='mt-4 min-h-[300px] overflow-visible relative flex justify-start items-start pr-24'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className='max-w-xs'>
          <h3 className='text-2xl font-bold mb-4 text-center'>Try dragging this 👇</h3>
          <ProjectCard
            title="Sample Project Card"
            description="Try clicking on this."
            link="https://youtu.be/dQw4w9WgXcQ?feature=shared"
          />
        </div>
      </motion.div>

    </main>
  )
}
