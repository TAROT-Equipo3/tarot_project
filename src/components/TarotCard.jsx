import React from "react";
import { CardBack } from "./CardBack";

export const TarotCard = ({ onClick, isSelected, fanStyle }) => {
  return (
    <div>
      className=
      {`absolute top-0 left-0 w-48 h-80 bg-white rounded-xl transition-all duration-300 ease-out cursor-pointer 
                  origin-bottom-center border-2 
                  ${
                    isSelected
                      ? "-translate-y-6 shadow-[0_0_15px_0_#FFD700] border-[#FFD700] z-50"
                      : "border-[#240F42] hover:-translate-y-2"
                  }`}
      style={fanStyle}
      onClick={onClick}
      <CardBack />
    </div>
  );
};
