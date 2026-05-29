// src/components/FrontCard.jsx
import PropTypes from "prop-types";

const FrontCard = ({ image, altText = "Carta del Tarot" }) => {
  return (
    <>
      {/* 1. Filtro SVG oculto que define el efecto de rugosidad */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="roughen">
          <feTurbulence type="turbulence" baseFrequency="0.065" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>

      {/* 2. Tu componente con el estilo de filtro aplicado */}
      <div 
        className="w-56 md:w-72 rounded-xl shadow-card-selected border-[3px] border-accent p-1.5 bg-border-card-outer mx-auto flex-shrink-0 overflow-hidden"
        style={{ filter: "url(#roughen)" }} // <--- Aquí aplicamos el efecto
      >
        <img
          src={image}
          alt={altText}
          className="w-full h-auto rounded-lg object-cover block"
        />
      </div>
    </>
  );
};

FrontCard.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default FrontCard;