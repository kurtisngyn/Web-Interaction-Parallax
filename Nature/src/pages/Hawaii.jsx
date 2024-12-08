import React from "react";
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import cardData from '../Card-data/card.json';
import Parallaxhawaii from "../components/Parallaxhawaii";


const Athome = () => {
    return (
        <div>
            <Header />
            <Parallaxhawaii />
            <CardSection cards={cardData.cardImage} />
        </div>
    );
};

export default Athome;