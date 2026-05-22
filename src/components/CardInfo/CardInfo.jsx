import React, { useState, useEffect } from "react";

const CardInfo = ({ cardData, type, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!cardData) return null;

  const { id, name, image, meaning, tarotName, tarotImage, arcanoNumber } =
    cardData;

  const tarotMeaning = typeof meaning === "object" ? meaning?.tarot : meaning;
  const stemMeaning = typeof meaning === "object" ? meaning?.stem : meaning;

  const TAROT_FALLBACK = "https://picsum.photos/300/450";
  const AVATAR_FALLBACK = "https://picsum.photos/200/200";

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
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label={`Carta ${tarotName}`}
    >
      <div
        className={`relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
          visible ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 hover:text-red-500 transition-colors z-10 font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="flex items-center justify-center gap-4 p-4 border-b border-gray-200">
          <span className="text-lg font-bold text-gray-800">{symbol}</span>
          <div className="bg-purple-600 text-white px-3 py-1 rounded-full">
            <span className="text-sm font-semibold">{label}</span>
          </div>
          <span className="text-lg font-bold text-gray-800">{symbol}</span>
        </div>

        <div className="flex gap-8 p-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <img
                src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
                alt={tarotName || "Carta Tarot"}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-4 font-medium">
              Arcano Nº {arcanoNumber || id}
            </p>
            <h3 className="text-2xl font-bold text-center mt-2 text-gray-800">
              {tarotName}
            </h3>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-purple-600">✦ Significado</h4>
              <p className="text-gray-700 leading-relaxed">
                {tarotMeaning || "Significado de la carta aquí..."}
              </p>
            </div>

            <div className="text-center text-purple-600 text-lg my-2">── ✦ ──</div>

            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-purple-600">
                ✦ Diosa Contemporánea
              </h4>

              <div className="flex flex-col items-center gap-3">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 border-purple-300 flex-shrink-0">
                  <img
                    src={
                      avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK
                    }
                    alt={name || "Mujer STEM"}
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                </div>
                <p className="font-bold text-center text-lg text-gray-800">
                  {name}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                {stemMeaning || "Biografía de la contemporánea aquí..."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 p-4 border-t border-gray-200">
          <button
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors"
            onClick={onClose}
          >
            Volver a la lectura
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
