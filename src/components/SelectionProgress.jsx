import React from "react";
import ModalBase from "./ModalBase";
import Button from "./Button";

const SelectionProgressModal = ({ isOpen, onClose, userName, cards }) => {

  const positions = [
    { label: "PASADO",   card: cards?.pasado },
    { label: "PRESENTE", card: cards?.presente },
    { label: "FUTURO",   card: cards?.futuro },
  ];

  return (
    <ModalBase isOpen={isOpen}>
      <div className="flex flex-col items-center px-6 py-10 gap-8 overflow-y-auto w-full h-full">

        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <h1 className="w-96 text-center justify-center text-accent text-2xl font-bold font-syne text-shadow-glow-gold">
            {userName}, se ha abierto el portal para ti.
          </h1>
          <p className="text-goldDark/60 font-mono text-xs tracking-widest">
            SELECCIONA TU DESTINO
          </p>
        </div>

        {/* Cards */}
        {positions.map(({ label, card }) => (
          <div key={label} className="flex flex-col items-center gap-3 w-full max-w-xs">
            <h2 className="text-goldDark font-bold font-mono text-sm tracking-widest">
              {label}
            </h2>
            <div className="outline outline-2 outline-goldDark rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(108,94,6,1.00)]">
              <img src={card?.image} alt={card?.name} className="w-full object-cover" />
            </div>
            <p className="text-goldDark/80 font-mono text-xs tracking-wider uppercase">
              {card?.name}
            </p>
          </div>
        ))}

        {/* Botón guardar */}
        <Button variant="outline" size="lg">
          GUARDAR TIRADA
        </Button>

      </div>
    </ModalBase>
  );
};

export default SelectionProgressModal;