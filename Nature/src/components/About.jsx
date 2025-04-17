import React from "react";
import abt from "../assets/abt/cam.jpeg";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center gap-10 rounded-lg pt-20"
      data-aos="fade-up"
    >
      <div className="flex p-10 rounded-2xl gap-5 px-5 md:px-20 py-10">
        <div className="flex-1 p-7 bg-white ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2 mb-6">
          Welcome to my personal photography site
          </h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed">
   As I travel and explore the world, I want a space created to share my work beyond the noise of social media. Here, I can showcase my images with intention, focusing on storytelling and visual clarity. From quiet everyday moments to striking landscapes, each photo reflects how I see the world: with curiosity, creativity, and care. <br></br><br></br><br></br><br></br> Thanks for stopping by — I hope you enjoy exploring my perspective & moments.
</p>


        </div>

        <div className="w-2/5">
          <img
            src={abt}
            alt="Cameraphoto"
            className=" shadow-lg w-full max-h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
