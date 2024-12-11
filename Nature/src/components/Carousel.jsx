import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://d2w9rnfcy7mm78.cloudfront.net/32906631/original_f98091196fdd026d57c62f0ad22dbfd3.jpg?1733896529?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/32906627/original_7d6ccb7ee8a1354772beb91a1b0e8a7d.jpg?1733896521?bc=0',
        
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative max-w-xl mx-auto mt-10">
            <div className="overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-auto object-cover"
                />
            </div>
            
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
            >
                &#60;
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
            >
                &#62;
            </button>
        </div>
    );
};

export default Carousel;
