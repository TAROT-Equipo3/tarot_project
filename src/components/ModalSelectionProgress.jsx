import React from "react";

const STEPS = [
  { label: "SELECCIONA TU PASADO" },
  { label: "SELECCIONA TU PRESENTE" },
  { label: "SELECCIONA TU FUTURO" },
];

// ✅ onStartReading viene de Home
const ModalSelectionProgress = ({ currentSelection, onStartReading }) => {
  const isComplete = currentSelection >= 3;
  const stepLabel = STEPS[currentSelection]?.label ?? "CARTAS SELECCIONADAS";

  return (
    <div className="w-96 h-28 p-4 bg-purple-100 rounded-xl shadow-[4px_4px_0px_0px_rgba(108,94,6,1.00)] outline outline-2 outline-offset-[-2px] outline-goldDark inline-flex flex-col justify-center items-center gap-3.5">
      <h2 className="text-center justify-center text-goldDark text-xs font-bold font-mono uppercase leading-3 tracking-wider">
        {currentSelection} / 3 {stepLabel}
      </h2>

      <div className="relative inline-block group">
  <button
    disabled={!isComplete}
    onClick={isComplete ? onStartReading : undefined}
    className={`
      px-10 py-4 rounded-full flex flex-col justify-center items-center w-52 
      text-center text-xs font-bold font-mono leading-3 tracking-wider
      ${isComplete
        ? "bg-accent text-primary cursor-pointer hover:shadow-glow-hover outline outline-1 outline-offset-[-1px] outline-goldDark"
        : "bg-goldDark text-white cursor-not-allowed opacity-60"
      }
    `}
  >
    COMENZAR LECTURA
  </button>

  {!isComplete && (
    <span className="absolute -top-11 left-1/2 -translate-x-1/2
                     bg-primary text-accent text-xs font-mono font-bold
                     p-3 rounded-lg whitespace-nowrap
                     outline outline-1 outline-accent
                     shadow-[0_0_8px_rgba(8, 8, 8, 0.4)]
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     pointer-events-none">
      Debes seleccionar 3 cartas mínimo
      {/* Flechita hacia abajo */}
      <span className="absolute top-full left-1/2 -translate-x-1/2
                       border-8 border-transparent border-t-primary" />
    </span>
  )}
</div>
    </div>
  );
};

export default ModalSelectionProgress;
