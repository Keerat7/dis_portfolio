import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import assistantAnimation from "../assets/avatar.json";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning! 🌞";
  if (hour < 18) return "Good afternoon! ☀️";
  return "Good evening! 🌙";
};

const AssistantAvatar = () => {
  const [message, setMessage] = useState(getGreeting());
  const [showBubble, setShowBubble] = useState(true);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    // Show greeting on load
    const timer = setTimeout(() => setShowBubble(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
      if (speed > 75) {
        setMessage("Whoa! Zooming through?");
        setShowBubble(true);

        if (hideTimeout) clearTimeout(hideTimeout);
        const timeout = setTimeout(() => setShowBubble(false), 3000);
        setHideTimeout(timeout);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hideTimeout]);

  return (
    <div
      style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            width: "112px",
            height: "112px",
            zIndex: 9999
          }}
    >
      <div
        className="relative w-28 h-28"
        onMouseEnter={() => {
          setMessage("Need any help?");
          setShowBubble(true);
        }}
        onMouseLeave={() => {
          const timeout = setTimeout(() => setShowBubble(false), 3000);
          setHideTimeout(timeout);
        }}
      >
        <Lottie animationData={assistantAnimation} loop autoplay className="w-full h-full pointer-events-none"/>

        {showBubble && (
          <div 
            style={{
              backgroundColor: 'white',
              color: '#555', // Gray text color
              borderRadius: '12px', // Rounded corners
              position: 'absolute',
              bottom: '100%', // Position above the avatar
              marginBottom: '8px', // Space between avatar and bubble (mb-2)
              right: '0',
              zIndex: 10, // Ensure bubble is above the animation if needed
              padding: '8px 16px', // Equivalent to px-4 py-2
              maxWidth: '20rem', // Equivalent to max-w-xs
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Equivalent to shadow-lg
              border: '1px solid #e5e7eb' // Add a light gray border for definition
            }}
          >
            <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: '600' /* text-sm */ }}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantAvatar;
