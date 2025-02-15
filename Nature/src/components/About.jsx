import React from "react";
import rice from "../assets/rice.jpg"; 



function About() {
  return (
    <div
      className="flex justify-center gap-10 rounded-lg"
      data-aos="fade-up"
    >
      <div className="flex p-10 rounded-2xl  gap-5">
        <div className="flex-1 p-7 bg-white rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-black  mb-4">
            Outside of work...
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            I’m always seeking inspiration from the world around me. Whether it’s hiking through nature, exploring new destinations, or diving into new hobbies, I enjoy using these adventures to spark new ideas that bring fresh perspectives to my design work.
          </p>
        </div>
        <div className="w-2/5">
        <img
                    src={rice}
                    alt="Asianguy"
                    className="rounded-lg shadow-lg w-full max-h-[600px] object-cover"
                />
        </div>
      </div>
    </div>
  );
}

export default About;