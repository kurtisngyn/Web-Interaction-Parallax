import React from "react";
import mtvideo from "../assets/mt.mp4"
import VideoSummary from "./Vidsummary";

const VideoPlayer = () => {
    return (
        <div className="flex items-center justify-center mt-8 bg-gray-100">
            <div className="bg-white p-6 rounded-lg ">
                <video width="640" height="360" controls className="max-w-full h-auto">
                    <source src={mtvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               
            </div>
             <VideoSummary />
        </div>
    );
};

export default VideoPlayer;
