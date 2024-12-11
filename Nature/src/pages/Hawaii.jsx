import React from "react";
import Header from "../components/Header";
import cardData3 from '../Card-data/card3.json';
import Parallaxhawaii from "../components/Parallaxhawaii";
import MasonryLayout from "../components/MasonryLayout";
import Carousel from "../components/Carousel";

const Athome = () => {
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
