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

  const TAROT_FALLBACK = "https://picsum.photos";
  const AVATAR_FALLBACK = "https://picsum.photos";

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
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label={`Carta ${tarotName}`}
    >
      <div
        className={`relative bg-cardOuter border-2 border-accent/40 rounded-xl shadow-glow-accent max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 p-1 text-white ${
          visible ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl cursor-pointer text-purple-300 hover:text-accent transition-colors z-10 font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="flex items-center justify-center gap-4 p-4 border-b border-secondary/20 font-mono">
          <span className="text-lg font-bold text-accent">{symbol}</span>
          <div className="bg-secondary border border-accent/30 text-white px-4 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold uppercase tracking-wider">
              {label}
            </span>
          </div>
          <span className="text-lg font-bold text-accent">{symbol}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-64 h-80 rounded-lg overflow-hidden shadow-xl flex-shrink-0 border-2 border-accent/30">
              <img
                src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
                alt={tarotName || "Carta Tarot"}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            </div>
            <p className="text-center text-xs text-accent mt-4 font-mono uppercase tracking-widest">
              Arcano Nº {arcanoNumber || id}
            </p>
            <h3 className="text-2xl font-bold text-center mt-2 font-syne text-white tracking-wide uppercase text-shadow-glow-gold">
              {tarotName}
            </h3>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-accent font-mono tracking-wider">
                ✦ Significado
              </h4>
              <p className="text-purple-100 leading-relaxed text-sm font-syne font-light">
                {tarotMeaning || "Significado de la carta aquí..."}
              </p>
            </div>

            <div className="text-center text-secondary text-lg my-1 font-mono">
              ── ✦ ──
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-accent font-mono tracking-wider">
                ✦ Diosa Contemporánea
              </h4>

              <div className="flex flex-col items-center gap-3">
                <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-accent flex-shrink-0 bg-cardInner">
                  <img
                    src={
                      avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK
                    }
                    alt={name || "Mujer STEM"}
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                </div>
                <p className="font-bold text-center text-lg font-syne text-white tracking-wide">
                  {name}
                </p>
              </div>

              <p className="text-purple-100 leading-relaxed text-xs text-justify font-syne font-light">
                {stemMeaning || "Biografía de la contemporánea aquí..."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 border-t border-secondary/20">
          <button
            className="bg-accent text-primary px-8 py-2.5 rounded-lg font-bold font-mono tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 shadow-glow-accent"
            onClick={onClose}
          >
            VOLVER A LA LECTURA
          </button>
          <p className="text-[9px] text-purple-400 font-mono tracking-widest mt-1">
            © 2026 ASTRALIS ARCANA · BOOTCAMP FACTORIA F5
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
