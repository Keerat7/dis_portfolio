import { Routes, Route } from 'react-router-dom'
import React, { useEffect,useRef,useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import AssistantAvatar from './components/AssistantAvatar'
import About from './pages/About'
import ambient from './assets/ambient.mp3'

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

  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      if (!isMuted) {
        audio.play().catch(e => console.error(e))
      } else {
        audio.pause()
      }
    }
  }, [isMuted])
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <div className="mx-auto max-w-6xl border-l border-r border-gray-300 dark:border-gray-700 px-6 border-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div 
          style={{
            position: 'fixed',
            top: '5.5rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <button
            onClick={() => setIsMuted(prev => !prev)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '0.25rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            {isMuted ? 'Play' : 'Mute'}
          </button>
          <audio ref={audioRef} loop src={ambient} />
        </div>
      </div>
      <AssistantAvatar/>
    </>
  )
}

export default App
