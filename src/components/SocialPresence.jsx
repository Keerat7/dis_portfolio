import React, { useEffect, useState, useRef } from "react";

const NAMES = ["Alex", "Jordan", "Taylor", "Riley", "Sam", "Morgan", "Jamie"];
const API_BASE = "/api/presence";    // ← Next.js API route
const UPDATE_INTERVAL_MS = 15_000;   // ping every 15s

const getRandomName = () =>
  NAMES[Math.floor(Math.random() * NAMES.length)];

export default function SocialPresence() {
  const [activeUsers, setActiveUsers] = useState([]);
  const selfIdRef = useRef(null);
  const nameRef  = useRef(null);

  // generate or load stable id + name
  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("my_viewer") || "null");
    if (!stored) {
      const id   = `${getRandomName()}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const name = id.split("-")[0];
      stored = { id, name };
      localStorage.setItem("my_viewer", JSON.stringify(stored));
    }
    selfIdRef.current = stored.id;
    nameRef.current   = stored.name;
  }, []);

  // heartbeat + fetch loop
  useEffect(() => {
    if (!selfIdRef.current) return;
    const tick = async () => {
      // POST our heartbeat
      await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selfIdRef.current, name: nameRef.current }),
      });
      // GET the full active list
      const res = await fetch(API_BASE);
      if (res.ok) {
        setActiveUsers(await res.json());
      }
    };

    tick();                             // run immediately...
    const iv = setInterval(tick, UPDATE_INTERVAL_MS);
    return () => clearInterval(iv);
  }, []);

  // render
  const meHere = activeUsers.some(u => u.id === selfIdRef.current);
  const others = activeUsers.filter(u => u.id !== selfIdRef.current).length;
  let display = "👀 Connecting…";
  if (meHere && others > 0)      display = `👀 You and ${others} other${others>1?'s':''} are here`;
  else if (meHere && others === 0) display = "👀 You're the only one here";
  else if (!meHere)              display = "👀 Reconnecting…";

  return (
    <div style={{
      position: "fixed", bottom: "1.25rem", right: "50%", transform: "translateX(50%)",
      backgroundColor: "#fff", border: "1px solid #e5e7eb",
      padding: "0.5rem 1rem", borderRadius: "1.5rem",
      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
      zIndex: 50, fontSize: "0.875rem", color: "#111827", whiteSpace: "nowrap"
    }}>
      {display}
    </div>
  );
}
