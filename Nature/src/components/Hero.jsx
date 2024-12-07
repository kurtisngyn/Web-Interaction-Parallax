import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1492571350019-22b37c2c0a42')` 
                }}
            >
                {/* Overlay to improve text readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    Japan Travels
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
                    My Solo Trip to Japan
                </p>
                
            </div>
        </div>
    );
};

export default HeroBanner;