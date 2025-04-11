import React, { useEffect, useState } from "react";

const Agent = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-indigo-600 text-white rounded-2xl shadow-lg w-64">
      <h4 className="font-semibold">💬 Virtual Assistant</h4>
      <p className="mt-2 text-sm">{greeting} I'm here to guide you through my portfolio.</p>
    </div>
  );
};

export default Agent;