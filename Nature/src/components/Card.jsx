import React, { useState } from 'react';

const Card = ({ title, imageUsed }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg w-full max-w-sm mx-auto" onClick={openModal}>
                <img src={imageUsed} alt={title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h3>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="max-w-3xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg">
                        <img src={imageUsed} alt={title} className="w-full h-auto object-contain" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;