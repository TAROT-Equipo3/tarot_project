// Carta individual — recibe fanStyle del padre para posicionarse en el abanico
// La elevación al seleccionarse la carta
import React from "react";
import { CardBack } from "./CardBack";

export const TarotCard = ({ onClick, isSelected, fanStyle }) => {
  return (
    <div
      className="absolute transition-all duration-300 ease-out cursor-pointer"
      style={fanStyle}
      onClick={onClick}
    >
      <div
        className={` w-32 h-52 bg-[var(--color-white)] rounded-xl border-2
                  transition-all duration-300 ease-out
                  ${
                    isSelected
                      ? "shadow-card-selected border-[var(--color-accent)] -translate-y-6"
                      : "border-[var(--color-border-card-outer)] hover:shadow-hover-gold hover:-translate-y-2"
                  }`}
      >
        <CardBack />
      </div>
    </div>
  );
};
