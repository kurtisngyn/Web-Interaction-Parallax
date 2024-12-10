import React from "react";
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import cardData3 from '../Card-data/card3.json';
import Parallaxhawaii from "../components/Parallaxhawaii";


const Athome = () => {
    return (
        <div>
            <Header />
            <Parallaxhawaii />
            <CardSection cards={cardData3.cardImage} />
        </div>
    );
};

export default Athome;