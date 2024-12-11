import React from "react";
import Header from "../components/Header";
import cardData2 from '../Card-data/card2.json';
import Parallaxjp from "../components/Parallaxjp";
import MasonryLayout from "../components/MasonryLayout";

const Japan = () => {
    return (
        <div>
            <Header />
            <Parallaxjp />
            <MasonryLayout items={cardData2.cardImage} />
        </div>
    );
};

export default Japan;