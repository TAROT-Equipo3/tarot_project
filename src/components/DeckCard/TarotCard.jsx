import React from 'react';


export const TarotCard = ({ title, scientistName, onClick, isSelected, fanStyle }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-48 h-80 bg-white rounded-xl shadow-lg border-2 border-gray-200 p-4 
                  flex flex-col items-center justify-center transition-all duration-300 ease-out cursor-pointer 
                  origin-bottom-center 
                  ${
                    isSelected
                      ? '-translate-y-16 scale-105 shadow-2xl border-yellow-300 ring-4 ring-yellow-200' 
                      : 'hover:-translate-y-2' 
                  }`}
      style={fanStyle} 
      onClick={onClick} 
    >
      
      <div className="w-full h-full border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-pink-500 mt-2">{scientistName}</p>
      </div>
    </div>
  );
};