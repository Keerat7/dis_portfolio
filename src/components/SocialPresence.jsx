import React, { useEffect, useState, useRef } from "react";

const NAMES = ["Alex", "Jordan", "Taylor", "Riley", "Sam", "Morgan", "Jamie"];

const getRandomName = () => {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
};

const SocialPresence = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  // Use useRef to store the current user's ID for this session
  const selfIdRef = useRef(null);
  const USER_KEY = "portfolio_viewers";
  const UPDATE_INTERVAL_MS = 15000; 
  const INACTIVE_TIMEOUT_MS = 5 * 60 * 1000;

  // Function to ensure the current user is registered or their timestamp is updated
  const ensureSelfRegisteredOrUpdated = () => {
    const existingViewers = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
    const now = Date.now();
    let selfViewerData = null;
    let viewersModified = false;

    if (selfIdRef.current) {
      let found = false;
      const updatedViewers = existingViewers.map(viewer => {
        if (viewer.id === selfIdRef.current) {
          found = true;
          if (viewer.timestamp !== now) {
             selfViewerData = { ...viewer, timestamp: now };
             viewersModified = true;
             return selfViewerData;
          } else {
              selfViewerData = viewer;
              return viewer;
          }
        }
        return viewer;
      });

      if (found && viewersModified) {
        localStorage.setItem(USER_KEY, JSON.stringify(updatedViewers));
      } else if (!found) {
        selfIdRef.current = null;
      } else if (found && !viewersModified) {}
    }

    if (!selfIdRef.current) {
      const name = getRandomName();
      const id = `${name}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`; // Add timestamp for more uniqueness
      selfViewerData = { id, name, timestamp: now };
      selfIdRef.current = id;

      const updatedViewers = [...existingViewers, selfViewerData];
      localStorage.setItem(USER_KEY, JSON.stringify(updatedViewers));
      viewersModified = true;
    }

    return { selfViewer: selfViewerData, modified: viewersModified };
  };

  const cleanUpAndGetActive = () => {
    const existingViewers = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
    const now = Date.now();
    const cutoffTime = now - INACTIVE_TIMEOUT_MS;

    const activeViewers = existingViewers.filter(
      (viewer) => viewer.timestamp >= cutoffTime
    );

    if (activeViewers.length !== existingViewers.length) {
      localStorage.setItem(USER_KEY, JSON.stringify(activeViewers));
    }

    return activeViewers;
  };

  useEffect(() => {
    ensureSelfRegisteredOrUpdated();

    const initialActive = cleanUpAndGetActive();
    setActiveUsers(initialActive);

    const interval = setInterval(() => {
      ensureSelfRegisteredOrUpdated();
      const currentActive = cleanUpAndGetActive();
      setActiveUsers(currentActive);
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);

  }, []);

  const selfIsIncluded = selfIdRef.current && activeUsers.some(u => u.id === selfIdRef.current);
  const numberOfOthers = activeUsers.filter(u => u.id !== selfIdRef.current).length;

  let displayText = "👀 Connecting...";

   if (selfIdRef.current) {
       if (selfIsIncluded && numberOfOthers > 0) {
           displayText = `👀 You and ${numberOfOthers} ${numberOfOthers === 1 ? 'other' : 'others'} are here`;
       } else if (selfIsIncluded) {
           displayText = "👀 You're the only one here";
       } else {
           displayText = "👀 Reconnecting...";
       }
   }


  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.25rem",         // bottom-5
        right: "50%",              // right-5 -> Adjusted for centering
        transform: "translateX(50%)", // Center horizontally
        backgroundColor: "#ffffff",  // bg-white
        border: "1px solid #e5e7eb",  // border (default gray-200)
        padding: "0.5rem 1rem",      // py-2 px-4
        borderRadius: "1.5rem",      // rounded-xl (use Tailwind mapping or actual value)
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", // shadow-lg
        zIndex: 50,                  // z-50
        fontSize: "0.875rem",        // text-sm
        color: "#111827",            // default text color (gray-900) - Consider dark mode compatibility if needed
        whiteSpace: 'nowrap'          // Prevent text wrapping
      }}
    >
      {displayText}
    </div>
  );
};

export default SocialPresence;
