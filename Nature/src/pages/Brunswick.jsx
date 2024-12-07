import React from "react";
import Header from "../components/Header";
import CardSection from "../components/CardSection"; 
import cardData3 from '../Card-data/card3.json';
import Parallaxmt from "../components/Parallaxmt";

const Brunswick = () => {
    return (
        <div>
            <Header />
            <Parallaxmt />
            {/* Rest of your page content */}

            <CardSection cards={cardData3.cardImage} />
        </div>
    );
};

export default Brunswick;