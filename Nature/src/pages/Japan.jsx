import React from "react";
import Header from "../components/Header";
import CardSection from "../components/CardSection"; 
import cardData2 from '../Card-data/card2.json';
import Parallaxjp from "../components/Parallaxjp";

const Japan = () => {
    return (
        <div>
            <Header />
            <Parallaxjp />
            <CardSection cards={cardData2.cardImage} />
        </div>
    );
};

export default Japan;