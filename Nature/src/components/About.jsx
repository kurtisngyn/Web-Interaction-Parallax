import React from "react";
import rice from "../assets/rice.jpg"; 
function About() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto p-4 gap-8 mt-6">
            <div className="w-full md:w-1/2">
                <img
                    src={rice}
                    alt="Asianguy"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Right Section - Text */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About this</h1>
                <p className="text-gray-600 leading-relaxed">
                Welcome to Nature's Path, a digital space designed to showcase stunning photos through innovative layouts and interactive features. This project aims to provide a experience for photography enthusiasts.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                    
                </p>
            </div>
        </div>
    );
}

export default About;
