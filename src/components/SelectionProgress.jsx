import React from "react";
import { Link } from "react-router-dom";
import ModalBase from "./ModalBase";
import Button from "./Button";

// 1. Cambiamos 'path' por 'baseRoute' en español para que coincida con tu router
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
  // 2. Extraemos los IDs de las 3 cartas (ponemos un fallback por seguridad)
  const idPasado = cards[0]?.id || "0";
  const idPresente = cards[1]?.id || "0";
  const idFuturo = cards[2]?.id || "0";

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
          className="absolute top-4 right-4 text-accent/60 hover:text-accent font-mono text-xl cursor-pointer transition-colors"
          aria-label="Cerrar lectura"
        >
          &#x2715; {/* Esto pinta una X elegante */}
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 w-full">
          {POSITIONS.map((position, i) => {
            const card = cards[i];

            // 3. Construimos la URL exacta que pide tu router.jsx
            // Ejemplo: "/pasado/1/5/12"
            const dynamicPath = `/${position.baseRoute}/${idPasado}/${idPresente}/${idFuturo}`;

            return (
              <Link
                to={dynamicPath}
                state={{ cardData: card }} // Seguimos pasando la carta entera por state
                key={position.label}
                className="flex flex-col items-center gap-3 w-full max-w-[150px] md:max-w-none md:w-80 md:gap-8 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <h2 className="w-40 h-7 text-center justify-center text-accent text-2xl font-bold font-syne">
                  {position.label}
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
              </Link>
            );
          })}
        </div>

        <Button variant="outline" size="lg" onClick={onSaveReading}>
          GUARDAR TIRADA
        </Button>
      </div>
    </ModalBase>
  );
};

export default SelectionProgress;
