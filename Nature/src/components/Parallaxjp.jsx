import React, { useState, useEffect } from 'react';
import layer1 from "../assets/sky.png";  // Background sky image
import layer2 from "../assets/3mt.png";  // Middle layer image
import layer3 from "../assets/2evan.png"; // Foreground layer image

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Layer 1 (Background image) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${layer1})`, 
          transform: `translateY(${scrollPosition * 0.2}px)`  // Slowest movement for the background
        }}
      />
      
      {/* Layer 2 (Middle image) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${layer2})`,
          transform: `translateY(${scrollPosition * 0.4}px)`  // Faster than layer 1
        }}
      />
      
      {/* Layer 3 (Foreground image) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${layer3})`,
          transform: `translateY(${scrollPosition * 0.6}px)`  // Fastest movement for the foreground
        }}
      />
      
      {/* Content Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl">Brunswick Mountian</h1>
        <p className="text-lg">Scroll to see the images move at different speeds.</p>
      </div>
    </div>
  );
}

export default Parallax;
