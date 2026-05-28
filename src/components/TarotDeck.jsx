import React, { useRef, useEffect, useMemo } from "react";
import { TarotCard } from "./TarotCard";
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

export default function TarotDeck({ userName, selectedCardIds, onCardClick, deck = [] }) {
  // ✅ deck viene de Home (datos reales de la API)
  const scrollRef = useRef(null);
  const shuffledDeck = useMemo(() => shuffleArray(deck), [userName, deck]);
  // ↑ deck en dependencias para cuando lleguen los datos asíncronos

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, [shuffledDeck]); // ✅ recentrar cuando el deck cargue

  const midIndex = (deck.length - 1) / 2;
  const totalSpreadAngle = 73;
  const anglePerCard = totalSpreadAngle / (deck.length - 1);
  const horizontalSpread = 14;
  const verticalArcHeight = 4;

  // ✅ Mientras carga la API
  if (deck.length === 0) {
    return (
      <div className="w-full flex items-center justify-center h-64">
        <span className="text-accent font-syne animate-pulse">Invocando el mazo...</span>
      </div>
    );
  }

  const renderCards = (containerWidth) =>
    shuffledDeck.map((card, index) => {
      const relIdx = index - midIndex;
      const fanStyle = {
        transform: `translateX(${relIdx * horizontalSpread}px) translateY(${Math.abs(relIdx) * verticalArcHeight}px) rotate(${relIdx * anglePerCard}deg)`,
        zIndex: index,
        transformOrigin: "bottom center",
        left: containerWidth ? `${containerWidth / 2}px` : "50%",
        top: "60px",
        marginLeft: "-64px",
      };
      return (
        <TarotCard
          key={card.id}
          title={card.arcaneName} // ✅ API usa arcaneName, no title
          onClick={() => onCardClick(card)}
          isSelected={selectedCardIds.includes(card.id)}
          fanStyle={fanStyle}
        />
      );
    });

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
          {renderCards(MOBILE_CONTAINER_WIDTH)}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex w-full overflow-x-auto justify-center">
        <div
          className="relative mt-10"
          style={{ width: "700px", height: "440px", flexShrink: 0 }}
        >
          {renderCards(null)}
        </div>
      </div>

      <CurvedText text="Desliza para ver más cartas" />
    </div>
  );
}