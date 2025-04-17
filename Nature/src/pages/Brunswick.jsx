import React, { useEffect } from "react";
import Header from "../components/Header";
import cardData from '../Card-data/card.json';
import Parallaxmt from "../components/Parallaxmt";
import Parallax from "../components/Parallaxmt";
import MasonryLayout from "../components/MasonryLayout";
import VideoPlayer from "../components/VideoPlayer";
const Brunswick = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);
    
    return (
        <div>
            <Header />
            <Parallax/>
            <VideoPlayer />
            <MasonryLayout items={cardData.cardImage} />
        </div>
    );
};

export default Brunswick;