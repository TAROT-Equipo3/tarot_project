// src/components/CardInfo.jsx
import PropTypes from "prop-types";

const CardInfo = ({ 
  cardNumber, 
  meaning, 
  stemName, 
  stemLocation, 
  stemImage, 
  stemBio 
}) => {
  return (
    <div className="w-full max-w-lg mx-auto font-mono mt-8 mb-8 px-4 md:px-0 text-justify md:text-left">
      
      {/* SECCIÓN DEL ARCANO */}
      <div className="mb-10">
        <h3 className="text-accent font-bold text-[12px] uppercase mb-4 tracking-widest">
          Nº ARCANO: {cardNumber}
        </h3>
        <p className="text-white text-[11px] md:text-[13px] leading-loose">
          {meaning}
        </p>
      </div>

      {/* SECCIÓN DE LA MUJER STEM */}
      <div className="pt-10">
        <h3 className="text-accent font-bold text-[12px] uppercase mb-6 tracking-widest text-center md:text-center">
          MUJER STEM: {stemName}
        </h3>

        <div className="flex justify-center md:justify-center mb-8">
          <img
            src={stemImage}
            alt={`Retrato de ${stemName}`}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-accent shadow-card-selected object-cover"
          />
        </div>

        <p className="text-white text-[11px] md:text-[13px] leading-loose">
          {stemBio}
        </p>
      </div>
      
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