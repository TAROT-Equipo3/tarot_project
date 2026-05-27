// src/components/FrontCard.jsx
import PropTypes from "prop-types";

const FrontCard = ({ image, altText = "Carta del Tarot" }) => {
  return (
    <div className="w-56 md:w-72 rounded-xl shadow-card-selected border-[3px] border-accent p-1.5 bg-border-card-outer mx-auto flex-shrink-0">
      
      <img
        src={image}
        alt={altText}
        className="w-full h-auto rounded-lg object-cover block"
      />
    </div>
  );
};

FrontCard.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default FrontCard;