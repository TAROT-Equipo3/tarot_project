import trashIcon from "../assets/img/trash.svg"; 
import trashYellowIcon from "../assets/img/trash-yellow.svg";

export const DeleteButton = ({ onClick, variant = "default" }) => {

  const iconSrc = variant === "yellow" ? trashYellowIcon : trashIcon;

  return (
    <button 
      onClick={onClick}
      className="p-1 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      aria-label="Borrar"
    >
      <img 
        src={iconSrc} 
        alt="Icono de eliminar" 
        className="w-6 h-6 object-contain" 
      />
    </button>
  );
};