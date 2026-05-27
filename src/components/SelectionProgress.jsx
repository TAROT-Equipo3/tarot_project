import React from "react";
import ModalBase from "./ModalBase";
import Button from "./Button";

const SelectionProgress = ({ isOpen, onClose, userName, cards }) => {
  const positions = [
    { label: "PASADO", card: cards?.pasado },
    { label: "PRESENTE", card: cards?.presente },
    { label: "FUTURO", card: cards?.futuro },
  ];

  return (
    <ModalBase isOpen={isOpen}>
      <div className="flex flex-col items-center px-6 py-10 gap-[4.3125rem] overflow-y-auto w-full h-full">
        {/* Filter SVG — invisible, se declara una vez y lo usan todas las cartas */}
        <svg width="0" height="0" className="absolute">
          <filter id="roughen">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.065"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </svg>

        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <h1 className="w-96 text-center justify-center text-accent text-2xl font-bold font-syne text-shadow-glow-gold md:text-4xl md:w-[821px]">
            {userName}, se ha abierto el portal para ti.
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 w-full">
          {positions.map(({ label, card }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 w-full max-w-[150px] md:max-w-none md:w-80 md:gap-8 cursor-pointer"
            >
              <h2 className="w-40 h-7 text-center justify-center text-accent text-2xl font-bold font-syne">
                {label}
              </h2>

              {/* figure envuelve imagen + atribución del autor */}
              <figure className="flex flex-col items-center gap-2 w-full">
                <div
                  className="outline outline-2 outline-accent rounded-lg overflow-hidden hover:shadow-glow-accent w-full h-64 md:max-w-[290px] md:h-[502.99px] bg-[#DDCCBF]"
                  style={{ filter: "url(#roughen)" }}
                >
                  <img
                    src={card?.arcaneImage?.imageSrc}
                    alt={card?.arcaneName}
                    className="w-full h-full object-center"
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
        {/* Botón guardar */}
        <Button variant="outline" size="lg">
          GUARDAR TIRADA
        </Button>
      </div>
    </ModalBase>
  );
};

export default SelectionProgress;
