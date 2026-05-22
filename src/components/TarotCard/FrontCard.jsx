import React, { useState } from "react";

const FrontCard = ({ cardData, type, onClose }) => {
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  if (!cardData) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-purple-900 to-purple-700 flex items-center justify-center">
        <p className="text-white text-xl font-semibold">Cargando...</p>
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

  const TAROT_FALLBACK = "https://picsum.photos/300/450";
  const AVATAR_FALLBACK = "https://picsum.photos/200/200";

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 to-purple-700 flex flex-col items-center justify-center p-4 relative overflow-y-auto">
      <div className="absolute top-8 right-8 bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-bold">
        <span>{type}</span>
      </div>

      <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl mb-8 flex-shrink-0">
        <img
          src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
          alt={tarotName || "Carta Tarot"}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl text-white mb-8 flex-shrink-0">
        <p className="text-sm font-bold text-purple-200 mb-2">Nº ARCANO: {arcanoNumber || id}</p>
        <p className="text-lg leading-relaxed">{tarotMeaning}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl text-white mb-8 flex-shrink-0">
        <h4 className="text-xl font-bold mb-4 text-purple-200">MUJER STEM: {name}</h4>

        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-purple-400 flex-shrink-0">
            <img
              src={avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK}
              alt={name || "Mujer STEM"}
              className="w-full h-full object-cover"
              onError={() => setAvatarError(true)}
            />
          </div>
        </div>

        <p className="text-center text-sm leading-relaxed">
          {stemMeaning || "Biografía de la contemporánea aquí..."}
        </p>

        <p className="text-center text-xs text-purple-300 mt-4 pt-4 border-t border-purple-300/30">
          Ilustración por Ilustrador Original
        </p>
      </div>

      <button
        className="mt-8 mb-8 bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-100 active:bg-purple-200 transition-colors flex-shrink-0"
        onClick={onClose}
      >
        VOLVER A INICIO
      </button>
    </div>
  );
};

export default FrontCard;
