import React, { useEffect } from "react";
import Header from "../components/Header";
import cardData3 from '../Card-data/card3.json';
import Parallaxhawaii from "../components/Parallaxhawaii";
import MasonryLayout from "../components/MasonryLayout";
import Carousel from "../components/Carousel";

const Athome = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <Header />
      <Parallaxhawaii />
      <Carousel />
      <MasonryLayout items={cardData3.cardImage} />
    </div>
  );
};

export default Athome;
