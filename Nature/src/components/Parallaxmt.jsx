import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import layer1 from "../assets/mtbruns/homeme.png";  // Foreground/middle layer
import layer2 from "../assets/mtbruns/homebg.jpg";  // Background layer

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
    <>
      {/* Preload both images */}
      <Helmet>
        <link rel="preload" as="image" href={layer1} />
        <link rel="preload" as="image" href={layer2} />
      </Helmet>

      <div className="relative h-screen overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${layer2})`,
            transform: `translateY(${scrollPosition * 0.2}px)`
          }}
        />

        {/* Foreground Layer */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${layer1})`,
            transform: `translateY(${scrollPosition * 0.4}px)`
          }}
        />

        {/* Text Content */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left pl-8 text-black font-bold">
          <h1 className="text-6xl md:text-8xl leading-tight">Mount Brunswick</h1>
        </div>
      </div>
    </>
  );
};

export default Parallax;
