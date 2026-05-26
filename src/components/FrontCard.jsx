import React from "react";

const FrontCard = ({ cardData, type, onClose }) => {
  if (!cardData) {
    return (
      <div className="text-center text-purple-600 font-bold p-4">
        Cargando...
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

  const TAROT_FALLBACK = "https://placeholder.com";
  const AVATAR_FALLBACK = "https://placeholder.com";

  return (
    <div className="flex flex-col items-center bg-white border border-purple-200 rounded-2xl p-6 shadow-xl max-w-md mx-auto my-4 text-gray-800">
      <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
        <span>{type}</span>
      </div>

      <div className="w-full h-64 overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center">
        <img
          src={tarotImage || TAROT_FALLBACK}
          alt={tarotName || "Carta Tarot"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mb-6 w-full border-b border-gray-100 pb-4">
        <p className="text-xs text-purple-500 font-bold tracking-widest mb-1">
          Nº ARCANO: {arcanoNumber || id}
        </p>
        <p className="text-sm text-gray-600 italic px-2">{tarotMeaning}</p>
      </div>

      <div className="flex flex-col items-center w-full bg-purple-50 rounded-xl p-4 text-center">
        <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wide mb-3">
          MUJER STEM: {name}
        </h4>

        <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-purple-300 mb-3 shadow-sm bg-gray-200">
          <img
            src={image || AVATAR_FALLBACK}
            alt={name || "Mujer STEM"}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs text-gray-700 leading-relaxed max-w-xs">
          {stemMeaning || "Biografía de la contemporánea aquí..."}
        </p>
      </div>

      <button
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 rounded-xl transition duration-200 text-sm tracking-wide shadow-md"
        onClick={onClose}
      >
        VOLVER A INICIO
      </button>
    </div>
  );
};

export default FrontCard;
