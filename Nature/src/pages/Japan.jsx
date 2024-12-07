import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/Hero";
import CardSection from "../components/CardSection"; 
import cardData2 from '../Card-data/card2.json';
import Parallaxjp from "../components/Parallaxjp";

const Japan = () => {
    return (
        <div>
            <Header />
            <Parallaxjp />
            {/* Rest of your page content */}

            <CardSection cards={cardData2.cardImage} />
        </div>
    );
};

export default Japan;