import React, { useState } from "react";

const FrontCard = ({ cardData }) => {
  const [imgError, setImgError] = useState(false);
  const FALLBACK = "https://unsplash.com";

  if (!cardData) return null;

  const tarotImage = cardData.arcaneImage?.imageSrc;
  const tarotName = cardData.arcaneName;

  return (
    <div className="w-full max-w-[240px] bg-cardOuter border-2 border-accent rounded-[12px] overflow-hidden shadow-card-selected transition-transform duration-300 hover:scale-105 hover:shadow-hover-gold flex-shrink-0">
      <div className="relative aspect-[2/3] w-full p-2 bg-purple-950/40">
        <img
          src={imgError || !tarotImage ? FALLBACK : tarotImage}
          alt=""
          className="w-full h-full object-cover rounded-[8px] border border-accent/20"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="pb-3 pt-1 text-center bg-cardOuter">
        <h3 className="text-accent font-syne font-bold tracking-widest text-base uppercase text-glow-gold">
          {tarotName || "CARTA"}
        </h3>
      </div>
    </div>
  );
};

export default FrontCard;
