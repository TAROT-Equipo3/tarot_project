import React, { useState } from "react";

const FrontCard = ({ cardData, type, onClose }) => {
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  if (!cardData) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-primary to-cardOuter flex items-center justify-center">
        <p className="text-white text-xl font-semibold font-syne animate-pulse">
          Cargando...
        </p>
      </div>
    );
  }

  const { id, name, image, meaning, tarotName, tarotImage, arcanoNumber } =
    cardData;

  const tarotMeaning =
    typeof meaning === "object"
      ? meaning?.tarot
      : "Significado de la carta tarot aquí...";
  const stemMeaning = typeof meaning === "object" ? meaning?.stem : meaning;

  const TAROT_FALLBACK = "https://picsum.photos";
  const AVATAR_FALLBACK = "https://picsum.photos";

  return (
    <div className="w-full h-screen bg-gradient-to-b from-primary to-cardOuter flex flex-col items-center justify-center p-4 relative overflow-y-auto select-none">
      <div className="absolute top-8 right-8 bg-secondary border border-accent/40 text-white px-4 py-2 rounded-lg text-lg font-bold font-mono shadow-glow-accent">
        <span>{type}</span>
      </div>

      <div className="w-80 h-96 rounded-lg overflow-hidden shadow-glow-accent mb-8 flex-shrink-0 border-2 border-accent/50">
        <img
          src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
          alt={tarotName || "Carta Tarot"}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="bg-cardOuter/60 border border-secondary/30 backdrop-blur-md rounded-lg p-6 max-w-2xl text-white mb-8 flex-shrink-0 w-full shadow-xl">
        <p className="text-sm font-bold text-accent mb-2 font-mono tracking-wider">
          Nº ARCANO: {arcanoNumber || id}
        </p>
        <p className="text-base leading-relaxed font-syne text-purple-100">
          {tarotMeaning}
        </p>
      </div>

      <div className="bg-cardOuter/60 border border-secondary/30 backdrop-blur-md rounded-lg p-6 max-w-2xl text-white mb-8 flex-shrink-0 w-full shadow-xl">
        <h4 className="text-xl font-bold mb-4 text-accent font-syne text-center uppercase tracking-wide text-shadow-glow-gold">
          MUJER STEM: {name}
        </h4>

        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-accent flex-shrink-0 bg-cardInner">
            <img
              src={avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK}
              alt={name || "Mujer STEM"}
              className="w-full h-full object-cover"
              onError={() => setAvatarError(true)}
            />
          </div>
        </div>

        <p className="text-center text-sm leading-relaxed font-syne text-purple-100">
          {stemMeaning || "Biografía de la contemporánea aquí..."}
        </p>

        <p className="text-center text-[10px] text-purple-300 font-mono mt-4 pt-4 border-t border-secondary/20 tracking-widest">
          Ilustración por: Astralis Team
        </p>
      </div>

      <button
        className="mt-8 mb-8 bg-accent text-primary px-8 py-3 rounded-lg font-bold font-mono tracking-widest shadow-glow-accent hover:bg-white hover:text-black transition-all active:scale-95 flex-shrink-0"
        onClick={onClose}
      >
        VOLVER A INICIO
      </button>
    </div>
  );
};

export default FrontCard;
