// Contenedor del abanico — maneja el layout responsive:
// Mobile (< md): scroll horizontal con abanico centrado en MOBILE_CONTAINER_WIDTH
// Tablet y Desktop (>= md): abanico centrado fijo sin scroll

import React, { useRef, useEffect, useMemo } from "react";
import { TarotCard } from "./TarotCard";
import { tarotDeckData } from "../data/tarotData";
import { CurvedText } from "./CurvedText";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MOBILE_CONTAINER_WIDTH = 660;

// ✅ selectedCardIds y onCardClick vienen de Home
export default function TarotDeck({ userName, selectedCardIds, onCardClick }) {
  const scrollRef = useRef(null);
  const shuffledDeck = useMemo(() => shuffleArray(tarotDeckData), [userName]);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  const midIndex = (tarotDeckData.length - 1) / 2;
  const totalSpreadAngle = 73;
  const anglePerCard = totalSpreadAngle / (tarotDeckData.length - 1);
  const horizontalSpread = 14;
  const verticalArcHeight = 4;

  return (
    <div className="w-full flex flex-col items-center justify-center font-syne">
      {/* Mobile */}
      <div
        ref={scrollRef}
        className="block md:hidden w-full overflow-x-auto scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
          width: "100vw",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="relative mt-10"
          style={{
            width: `${MOBILE_CONTAINER_WIDTH}px`,
            height: "440px",
            flexShrink: 0,
            paddingLeft: "150px",
            paddingRight: "150px",
          }}
        >
          {shuffledDeck.map((card, index) => {
            const relIdx = index - midIndex;
            const fanStyle = {
              transform: `translateX(${relIdx * horizontalSpread}px) translateY(${Math.abs(relIdx) * verticalArcHeight}px) rotate(${relIdx * anglePerCard}deg)`,
              zIndex: index,
              transformOrigin: "bottom center",
              left: `${MOBILE_CONTAINER_WIDTH / 2}px`,
              top: "60px",
              marginLeft: "-64px",
            };
            return (
              <TarotCard
                key={card.id}
                title={card.title}
                onClick={() => onCardClick(card)} // ✅ objeto completo
                isSelected={selectedCardIds.includes(card.id)}
                fanStyle={fanStyle}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex w-full overflow-x-auto justify-center">
        <div
          className="relative mt-10"
          style={{ width: "700px", height: "440px", flexShrink: 0 }}
        >
          {shuffledDeck.map((card, index) => {
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
                onClick={() => onCardClick(card)} // ✅ objeto completo
                isSelected={selectedCardIds.includes(card.id)}
                fanStyle={fanStyle}
              />
            );
          })}
        </div>
      </div>
      <CurvedText text="Desliza para ver más cartas" />
    </div>
  );
}