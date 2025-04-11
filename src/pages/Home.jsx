import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const audioRef = useRef(null);
  const [isMuted,setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current
    if (!isMuted && audio) {
      audio.play().catch(e => console.error(e))
    }
    else if (audio) {
      audio.pause();
    }
  }, [isMuted])

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
        This is a starting point. We'll build something awesome together!
      </motion.p>

      <div className='mt-6'>
        <button
        onClick={() => setIsMuted(!isMuted)}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition'
        >
          {isMuted ? "Play Ambient Sound" : "Mute Sound"}
        </button>
        <audio ref={audioRef} loop src='/src/assets/ambient.mp3' />
      </div>

      <div className='mt-10 min-h-[300px] overflow-visible relative flex justify-center items-start'>
        <div className='max-w-xs'>
          <h3 className='text-2xl font-bold mb-4 text-center'>Try dragging this 👇</h3>
          <ProjectCard
            title="a really cool project"
            description="too cool to be true"
          />
        </div>

      </div>

    </main>
  )
}