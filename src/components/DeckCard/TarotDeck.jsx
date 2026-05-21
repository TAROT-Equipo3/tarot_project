import React, { useState } from 'react';
import { TarotCard } from './TarotCard';
import { tarotDeckData } from '../../data/tarotData'


const mockCards = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Carta ${i + 1}`,
  scientistName: `Científica ${i + 1}`,
}));

export const TarotDeck = () => {
  
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  
  const handleCardClick = (id) => {
    setSelectedCardIds((prev) => {
      
      if (prev.includes(id)) {
        return prev.filter((cardId) => cardId !== id);
      }
     
      if (prev.length < 3) {
        return [...prev, id];
      }
      
      return prev;
    });
  };

  
  const midIndex = (mockCards.length - 1) / 2;
  
  
  const totalSpreadAngle = 80;
  const anglePerCard = totalSpreadAngle / (mockCards.length - 1);
  
  
  const horizontalSpread = 20; 
  const verticalArcHeight = 5;  

  return (
    
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-purple-900 p-8 overflow-hidden text-center">
      
      <div className="relative w-48 h-80 mt-10">
        {mockCards.map((card, index) => {
         
          const relIdx = index - midIndex;

         
          const rotate = relIdx * anglePerCard;
          const translateX = relIdx * horizontalSpread;
          const translateY = Math.abs(relIdx) * verticalArcHeight; 

          
          const fanStyle = {
            transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
            zIndex: index, 
          };

          return (
            <TarotCard
              key={card.id}
              title={card.title}
              scientistName={card.scientistName}
              onClick={() => handleCardClick(card.id)}
              isSelected={selectedCardIds.includes(card.id)}
              fanStyle={fanStyle}
            />
          );
        })}
      </div>

     
      <div className="mt-20 text-yellow-100 text-lg">
        Desliza para ver más cartas
      </div>
    </div>
  );
};