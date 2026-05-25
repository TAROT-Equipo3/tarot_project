import React, { useState } from "react";
import { TarotCard } from "./TarotCard";
import { tarotDeckData } from "../data/tarotData";

export default function TarotDeck() {
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  const handleCardClick = (id) => {
    setSelectedCardIds((prev) => {
      if (prev.includes(id)) return prev.filter((cardId) => cardId !== id);
      if (prev.length < 3) return [...prev, id];
      return prev;
    });
  };

  const midIndex = (tarotDeckData.length - 1) / 2; 
  const totalSpreadAngle = 73;
  const anglePerCard = totalSpreadAngle / (tarotDeckData.length - 1);
  const horizontalSpread = 14;
  const verticalArcHeight = 4;

  return (
    <div className="w-full flex flex-col items-center justify-center p-8 font-syne bg-body-gradient min-h-screen">
      <div className="w-full overflow-x-auto flex justify-center">
        <div
          className="relative mt-10"
          style={{ width: "700px", height: "440px", flexShrink: 0 }}
        >
          {tarotDeckData.map((card, index) => {
          
            const relIdx = index - midIndex;

            const fanStyle = {
              transform: `translateX(${relIdx * horizontalSpread}px) translateY(${Math.abs(relIdx) * verticalArcHeight}px) rotate(${relIdx * anglePerCard}deg)`,
              zIndex: index,
              transformOrigin: "bottom center",
              left: "50%",
              top: "60px",
              marginLeft: "-64px",
            };

            return (
              <TarotCard
                key={card.id}
                title={card.title}
                onClick={() => handleCardClick(card.id)}
                isSelected={selectedCardIds.includes(card.id)}
                fanStyle={fanStyle}
              />
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-[var(--color-accent)] font-mono text-lg text-glow-gold">
        Desliza para ver más cartas
      </p>
    </div>
  );
}
