import React from "react";
import Header from "../components/Header";
import CardSection from "../components/CardSection"; 
import cardData from '../Card-data/card.json';
import Parallaxmt from "../components/Parallaxmt";
import Carousel from "../components/Carousel";
import About from "../components/About";

const Brunswick = () => {
    return (
        <div>
            <Header />
            <Parallaxmt />
            {/* Rest of your page content */}
            <Carousel />
            <CardSection cards={cardData.cardImage} />
            {/* <CardSection cards={cardData3.cardImage} /> */}
        </div>
    );
};

export default Brunswick;