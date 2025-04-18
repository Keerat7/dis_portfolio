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
          <div className="absolute bottom-full mb-2 right-0 z-10
                          bg-white dark:bg-gray-800
                          border border-gray-300 dark:border-gray-600
                          rounded-lg shadow-lg px-4 py-2 max-w-xs">
            <p className="text-sm text-gray-900 dark:text-white">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantAvatar;
