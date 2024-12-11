import React from "react";
import Header from "../components/Header";
import cardData from '../Card-data/card.json';
import Parallaxmt from "../components/Parallaxmt";
import MasonryLayout from "../components/MasonryLayout";
import VideoPlayer from "../components/VideoPlayer";
const Brunswick = () => {
    return (
        <div>
            <Header />
            <Parallaxmt />
            <VideoPlayer />
            <MasonryLayout items={cardData.cardImage} />
        </div>
    );
};

export default Brunswick;