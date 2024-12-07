import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/Hero";
import CardSection from "../components/CardSection";
import cardData from '../Card-data/card.json';


const Athome = () => {
    return (
        <div>
            <Header />
            <HeroBanner />
            {/* Rest of your page content */}
            <CardSection cards={cardData.cardImage} />
        </div>
    );
};

export default Athome;