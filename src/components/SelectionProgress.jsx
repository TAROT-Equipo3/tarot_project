import React from "react";
import ModalBase from "./ModalBase";
import Button from "./Button";

const POSITIONS = ["PASADO", "PRESENTE", "FUTURO"];

const SelectionProgress = ({ isOpen, onClose, userName, cards = [] }) => {
  return (
    <ModalBase isOpen={isOpen}>
      <div className="flex flex-col items-center px-6 py-10 gap-[4.3125rem] overflow-y-auto w-full h-full">
        <svg width="0" height="0" className="absolute">
          <filter id="roughen">
            <feTurbulence type="turbulence" baseFrequency="0.065" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </svg>

        <div className="text-center flex flex-col gap-2">
          <h1 className="w-96 text-center justify-center text-accent text-2xl font-bold font-syne text-shadow-glow-gold md:text-4xl md:w-[821px]">
            {userName}, se ha abierto el portal para ti.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 w-full">
          {POSITIONS.map((label, i) => {
            const card = cards[i];

            return (
              <div
                key={label}
                className="flex flex-col items-center gap-3 w-full max-w-[150px] md:max-w-none md:w-80 md:gap-8 cursor-pointer"
              >
                <h2 className="w-40 h-7 text-center justify-center text-accent text-2xl font-bold font-syne">
                  {label}
                </h2>

                <figure className="flex flex-col items-center gap-2 w-full">
                  <div
                    className="outline outline-2 outline-accent rounded-lg overflow-hidden hover:shadow-glow-hover-card w-full h-64 md:max-w-[290px] md:h-[502.99px] bg-[#DDCCBF]"
                    style={{ filter: "url(#roughen)" }}
                  >
                    {card?.arcaneImage?.imageSrc ? (
                      <img
                        src={card.arcaneImage.imageSrc}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <span className="text-accent font-syne font-bold text-center text-sm md:text-lg">
                          {card?.title ?? ""}
                        </span>
                      </div>
                    )}
                  </div>
                </figure>
              </div>
            );
          })}
        </div>

        <Button variant="outline" size="lg">
          GUARDAR TIRADA
        </Button>
      </div>
    </ModalBase>
  );
};

export default SelectionProgress;