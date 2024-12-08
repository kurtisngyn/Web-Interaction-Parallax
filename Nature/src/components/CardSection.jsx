// CardSection.js
import React from 'react';
import Card from './Card';

const CardSection = ({ cards }) => {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Flower Gallery</h2>
            <div className="grid grid-cols-3 gap-6">
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} imageUsed={card.imageUsed} />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
