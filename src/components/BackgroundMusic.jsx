import React, { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4">
      <button onClick={togglePlay} className="bg-gray-700 text-white px-2 py-1 rounded">
        {isPlaying ? "🔊 On" : "🔇 Off"}
      </button>
      <audio ref={audioRef} loop>
        <source src="/ambient.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;