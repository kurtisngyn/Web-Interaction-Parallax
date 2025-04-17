import React, { useEffect } from "react";
import Header from "../components/Header";
import cardData2 from '../Card-data/card2.json';
import Parallaxjp from "../components/Parallaxjp";
import MasonryLayout from "../components/MasonryLayout";

const Japan = () => {
    useEffect(() => {
            window.scrollTo(0, 0); // Scroll to top when component mounts
          }, []);
          
    return (
        <div>
            <Header />
            <Parallaxjp />
            <MasonryLayout items={cardData2.cardImage} />
        </div>
    );
};

export default Japan;