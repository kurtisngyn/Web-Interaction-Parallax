import React from "react";
import { Link } from "react-scroll"; // 👈 import Link from react-scroll
import hero1 from "../assets/heroimg/hero1.jpeg";
import hero2 from "../assets/heroimg/hero2.jpeg";
import hero3 from "../assets/heroimg/hero3.jpeg";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-10 box-border">
      {/* Left Section */}
      <div className="flex flex-col justify-start h-full w-full md:w-2/3">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-tight">
            Kurtis Nguyen
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-6">
            Nature's Lifestyle Gallery
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col items-center w-full md:w-2/5">
            <img
              src={hero3}
              alt="Left of hero2"
              className="w-full h-[20rem] sm:h-[25rem] md:h-[28rem] object-cover"
            />
            <p className="mt-3 text-base sm:text-xl text-gray-600 text-left w-full">
              Capturing the beauty of nature through the lens of a camera to tell a story.
            </p>
          </div>

          <div className="w-full md:w-4/5 flex items-end">
            <img
              src={hero2}
              alt="Main Portrait"
              className="w-full h-[25rem] sm:h-[28rem] md:h-[32.5rem] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="h-full flex flex-col justify-between items-end mt-10 md:mt-20 mr-20">
        <div className="flex items-center justify-center">
          <img
            src={hero1}
            alt="Right Portrait"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-[35rem] sm:h-[40rem] md:h-[45rem] object-cover"
          />
        </div>

        {/* 🔗 react-scroll Link */}
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-50}
          className="mt-4 text-base sm:text-lg text-gray-700 hover:text-black cursor-pointer transition underline"
        >
          Read More ↓
        </Link>
      </div>
    </div>
  );
}

export default Hero;
