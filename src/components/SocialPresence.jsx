import React, { useEffect, useState } from "react";

const SocialPresence = () => {
  const [viewer, setViewer] = useState(null);
  useEffect(() => {
    const names = ["Alex", "Jamie", "Taylor", "Jordan"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setViewer(randomName);
  }, []);

  return (
    <div className="text-center mt-8">
      <p className="text-sm text-gray-600">
        👀 {viewer} is also viewing this portfolio right now.
      </p>
    </div>
  );
};

export default SocialPresence;