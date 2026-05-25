import React, { useState } from "react";

const CardInfo = ({ cardData, type }) => {
  const [avatarError, setAvatarError] = useState(false);
  const AVATAR_FALLBACK = "https://picsum.photos";

  if (!cardData) return null;

  const { id, name, image, meaning, tarotName, arcanoNumber, attribution } =
    cardData;

  const tarotMeaning = typeof meaning === "object" ? meaning?.tarot : meaning;
  const stemMeaning = typeof meaning === "object" ? meaning?.stem : meaning;

  const typeLabels = {
    PASADO: { label: "Pasado", symbol: "◁" },
    PRESENTE: { label: "Presente", symbol: "◈" },
    FUTURO: { label: "Futuro", symbol: "▷" },
  };

  const { label, symbol } = typeLabels[type?.toUpperCase()] || {
    label: type,
    symbol: "✦",
  };

  return (
    <div className="w-full max-w-xl bg-cardOuter border border-secondary p-6 rounded-[20px] shadow-xl flex flex-col gap-6 text-white font-mono">
      <div className="flex items-center justify-center gap-4 pb-4 border-b border-secondary/20">
        <span className="text-lg font-bold text-accent">{symbol}</span>
        <div className="bg-secondary border border-accent/30 text-white px-4 py-1 rounded-full shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wider">
            {label}
          </span>
        </div>
        <span className="text-lg font-bold text-accent">{symbol}</span>
      </div>

      <div>
        <p className="text-xs font-bold text-accent mb-1 tracking-wider uppercase">
          Arcano Nº {arcanoNumber || id}
        </p>
        <h4 className="text-accent font-syne font-bold uppercase tracking-wider text-sm mb-2 text-glow-gold">
          Significado de {tarotName}
        </h4>
        <p className="text-sm leading-relaxed text-justify text-purple-100 font-light">
          {tarotMeaning || "Significado de la carta aquí..."}
        </p>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="flex flex-col items-center gap-4 bg-cardInner p-5 rounded-xl border border-goldDark/20 shadow-solid-gold">
        <h4 className="text-accent font-syne font-bold uppercase tracking-wider text-xs">
          Diosa Contemporánea / STEM
        </h4>

        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent shadow-card-selected bg-cardOuter">
          <img
            src={avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK}
            alt={name || "Mujer STEM"}
            className="w-full h-full object-cover"
            onError={() => setAvatarError(true)}
          />
        </div>

        <h5 className="text-lg font-syne font-bold text-white tracking-wide uppercase text-center">
          {name}
        </h5>

        <p className="text-xs leading-relaxed text-center text-purple-200 font-light px-2">
          {stemMeaning || "Biografía de la contemporánea aquí..."}
        </p>
      </div>

      {attribution && (
        <div className="text-center pt-2 border-t border-secondary/10">
          <p className="text-[10px] text-purple-300/50 italic tracking-wider">
            Ilustración por: {attribution}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
