import React, { useState } from "react";
import "./FrontCard.css";

const FrontCard = ({ cardData, type, onClose }) => {
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  if (!cardData) {
    return <div className="card-loading">Cargando...</div>;
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
    <div className="front-card-page">
      <div className="period-badge-container">
        <span className="period-badge-text">{type}</span>
      </div>

      <div className="tarot-image-container">
        <img
          src={imgError ? TAROT_FALLBACK : tarotImage || TAROT_FALLBACK}
          alt={tarotName || "Carta Tarot"}
          className="tarot-card-img"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="arcano-info">
        <p className="arcano-number">Nº ARCANO: {arcanoNumber || id}</p>
        <p className="tarot-meaning-text">{tarotMeaning}</p>
      </div>

      <div className="stem-section">
        <h4 className="stem-title">MUJER STEM: {name}</h4>

        <div className="stem-avatar-wrapper">
          <img
            src={avatarError ? AVATAR_FALLBACK : image || AVATAR_FALLBACK}
            alt={name || "Mujer STEM"}
            className="stem-avatar-img"
            onError={() => setAvatarError(true)}
          />
        </div>

        <p className="stem-bio-text">
          {stemMeaning || "Biografía de la contemporánea aquí..."}
        </p>
      </div>

      <button className="btn-back-tarot" onClick={onClose}>
        VOLVER A INICIO
      </button>
    </div>
  );
};

export default FrontCard;
