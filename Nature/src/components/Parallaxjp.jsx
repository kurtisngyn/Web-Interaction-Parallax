import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import layer1 from "../assets/jp/jp.jpg";

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Preload the background image */}
      <Helmet>
        <link rel="preload" as="image" href={layer1} />
      </Helmet>

      <div className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${layer1})`,
            transform: `translateY(${scrollPosition * 0.4}px)`,
          }}
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold">
          <h1 className="text-4xl">Japan Highlights</h1>
          <p className="text-lg">A gallery of my Japan shoots</p>
        </div>
      </div>
    </>
  );
};

export default Parallax;
