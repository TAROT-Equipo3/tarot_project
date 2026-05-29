import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalBase from "./ModalBase";
import Button from "./Button";

const POSITIONS = [
  { label: "PASADO", baseRoute: "pasado" },
  { label: "PRESENTE", baseRoute: "presente" },
  { label: "FUTURO", baseRoute: "futuro" },
];

const SelectionProgress = ({
  isOpen,
  onClose,
  userName,
  cards,
  onSaveReading,
}) => {
  const idPasado = cards[0]?.id || "0";
  const idPresente = cards[1]?.id || "0";
  const idFuturo = cards[2]?.id || "0";

  // 1. Estado para saber si la tirada ya fue guardada
  const [isSaved, setIsSaved] = useState(false);

  // 2. Reseteamos el estado cada vez que se abre el modal
  useEffect(() => {
    if (isOpen) {
      setIsSaved(false);
    }
  }, [isOpen]);

  // 3. Función que maneja el clic del botón
  const handleSaveClick = async () => {
    if (onSaveReading) {
      await onSaveReading(); // Esperamos a que se guarde en la base de datos
      setIsSaved(true); // Cambiamos el estado para bloquear el botón y mostrar el texto
    }
  };

  return (
    <ModalBase isOpen={isOpen}>
      <div className="flex flex-col items-center px-6 py-10 gap-[4.3125rem] overflow-y-auto w-full h-full">
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

        <div className="text-center flex flex-col gap-2">
          <h1 className="w-96 text-center justify-center text-accent text-2xl font-bold font-syne text-shadow-glow-gold md:text-4xl md:w-[821px]">
            {userName}, se ha abierto el portal para ti.
          </h1>
        </div>
        <button
          onClick={onClose}
          className="absolute top-32 right-12 md:top-12 md:right-32 text-accent/60 hover:text-accent font-mono text-2xl cursor-pointer transition-colors font-semibold"
          aria-label="Cerrar lectura"
        >
          &#x2715;
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full">
          {POSITIONS.map((position, i) => {
            const card = cards[i];
            const dynamicPath = `/${position.baseRoute}/${idPasado}/${idPresente}/${idFuturo}`;

            return (
              <Link
                to={dynamicPath}
                state={{ cardData: card }}
                key={position.label}
                className="flex flex-col items-center gap-3 w-full max-w-[150px] md:max-w-none md:w-80 md:gap-8 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <h2 className="w-40 h-7 text-center justify-center text-accent text-2xl font-bold font-syne">
                  {position.label}
                </h2>

                <figure className="flex flex-col items-center gap-2 w-full">
                  <div
                    className="outline outline-2 outline-accent rounded-lg overflow-hidden hover:shadow-glow-hover-card w-full h-64 md:max-w-[260px] md:h-[450px] bg-[#DDCCBF]"
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
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleSaveClick}
            disabled={isSaved}
            className={isSaved ? "opacity-50 cursor-not-allowed" : ""}
          >
            GUARDAR TIRADA
          </Button>

          {isSaved && (
            <span className="text-white font-mono text-xs md:text-sm tracking-wider text-center animate-pulse mt-2">
              ✨ Tirada guardada, consúltala en el historial ✨
            </span>
          )}
        </div>
      </div>
    </ModalBase>
  );
};

export default SelectionProgress;