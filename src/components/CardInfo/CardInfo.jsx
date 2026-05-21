import React, { useState, useEffect } from "react";
import "./CardInfo.css";

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

  const TAROT_FALLBACK = "https://placeholder.com";
  const AVATAR_FALLBACK = "https://placeholder.com";

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
      className={`card-info-overlay ${visible ? "card-info-overlay--visible" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label={`Carta ${tarotName}`}
    >
      <div
        className={`card-info-modal ${visible ? "card-info-modal--visible" : ""}`}
      >
        <button
          className="card-info-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="card-info-header">
          <span className="card-info-symbol">{symbol}</span>
          <div className="card-info-badge">
            <span className="card-info-badge-text">{label}</span>
          </div>
          <span className="card-info-symbol">{symbol}</span>
        </div>

        <div className="card-info-body">
          <div className="card-info-left">
            <div className="card-info-img-wrapper">
              <img
                src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
                alt={tarotName || "Carta Tarot"}
                className="card-info-tarot-img"
                onError={() => setImgError(true)}
              />
            </div>
            <p className="card-info-arcano-number">
              Arcano Nº {arcanoNumber || id}
            </p>
            <h3 className="card-info-tarot-name">{tarotName}</h3>
          </div>

          <div className="card-info-right">
            <div className="card-info-meaning-section">
              <h4 className="card-info-section-title">✦ Significado</h4>
              <p className="card-info-meaning-text">
                {tarotMeaning || "Significado de la carta aquí..."}
              </p>
            </div>

            <div className="card-info-divider">── ✦ ──</div>

            <div className="card-info-stem-section">
              <h4 className="card-info-section-title">✦ Diosa Contemporánea</h4>

              <div className="card-info-stem-profile">
                <div className="card-info-avatar-wrapper">
                  <img
                    src={
                      avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK
                    }
                    alt={name || "Mujer STEM"}
                    className="card-info-avatar-img"
                    onError={() => setAvatarError(true)}
                  />
                </div>
                <p className="card-info-stem-name">{name}</p>
              </div>

              <p className="card-info-stem-bio">
                {stemMeaning || "Biografía de la contemporánea aquí..."}
              </p>
            </div>
          </div>
        </div>

        <div className="card-info-footer">
          <button className="card-info-btn-close" onClick={onClose}>
            Volver a la lectura
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
