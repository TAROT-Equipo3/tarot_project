import React from "react";
import PropTypes from "prop-types";

const CardInfo = ({ 
  cardNumber, 
  meaning, 
  stemName, 
  stemLocation, // Mantenida aunque no se renderiza en el JSX original
  stemImage, 
  stemBio 
}) => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 md:px-0 mt-8 mb-8 font-mono text-justify md:text-left">
      
      {/* SECCIÓN DEL ARCANO */}
      <section className="mb-10">
        <h3 className="text-accent text-[12px] font-bold uppercase tracking-widest mb-4">
          Nº ARCANO: {cardNumber}
        </h3>
        <p className="text-white text-[11px] md:text-[13px] leading-loose">
          {meaning}
        </p>
      </section>

      {/* SECCIÓN DE LA MUJER STEM */}
      <section className="pt-10 border-t border-white/10">
        <h3 className="text-accent text-[12px] font-bold uppercase tracking-widest mb-6 text-center">
          MUJER STEM: {stemName}
        </h3>

        <div className="flex justify-center mb-8">
          <img
            src={stemImage}
            alt={`Retrato de ${stemName}`}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-accent shadow-card-selected object-cover"
          />
        </div>

        <p className="text-white text-[11px] md:text-[13px] leading-loose">
          {stemBio}
        </p>
      </section>
      
    </div>
  );
};

CardInfo.propTypes = {
  cardNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  meaning: PropTypes.string.isRequired,
  stemName: PropTypes.string.isRequired,
  stemLocation: PropTypes.string.isRequired,
  stemImage: PropTypes.string.isRequired,
  stemBio: PropTypes.string.isRequired,
};

export default CardInfo;