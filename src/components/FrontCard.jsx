import React, { useState } from "react";

const FrontCard = ({ tarotImage, tarotName, id }) => {
  const [imgError, setImgError] = useState(false);
  const TAROT_FALLBACK = "https://picsum.photos";

  return (
    <div className="w-full max-w-[240px] bg-cardOuter border-2 border-accent rounded-[12px] overflow-hidden shadow-card-selected transition-transform duration-300 hover:scale-105 hover:shadow-hover-gold flex-shrink-0 mx-auto">
      <div className="relative aspect-[2/3] w-full p-2">
        <img
          src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
          alt={tarotName || `Carta Tarot ${id}`}
          className="w-full h-full object-cover rounded-[8px] border border-accent/20"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="pb-3 pt-1 text-center">
        <h3 className="text-accent font-syne font-bold tracking-widest text-base uppercase text-glow-gold">
          {tarotName || "Carta Tarot"}
        </h3>
      </div>
    </div>
  );
};

export default FrontCard;
