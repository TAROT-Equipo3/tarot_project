import React from 'react'

const STEPS = [
  { label: "SELECCIONA TU PASADO" },
  { label: "SELECCIONA TU PRESENTE" },
  { label: "SELECCIONA TU FUTURO" },
];

const ModalSelectionProgress = ({ currentSelection }) => {
  const isComplete = currentSelection >= 3;
  const stepLabel = STEPS[currentSelection]?.label ?? "CARTAS SELECCIONADAS";

  return (
    <div 
      className="w-96 h-28 p-4 bg-purple-100 rounded-xl shadow-[4px_4px_0px_0px_rgba(108,94,6,1.00)] outline outline-2 outline-offset-[-2px] outline-goldDark inline-flex flex-col justify-center items-center gap-3.5"
    >
      {/* Contador + texto contextual */}
      <h2 className="text-center justify-center text-goldDark text-xs font-bold font-mono uppercase leading-3 tracking-wider">
        {currentSelection} / 3 {stepLabel}
      </h2>

      {/* Botón siempre visible, deshabilitado hasta completar */}
      <button
        disabled={!isComplete}
        className={`
          size- px-10 py-4 bg-goldDark rounded-full flex flex-col justify-center items-center w-52 text-center text-white text-xs font-bold font-mono leading-3 tracking-wider
          ${isComplete
            ? "bg-accent text-primary cursor-pointer shadow-glow-hover"
            : "bg-goldDark text-white cursor-not-allowed"
          }
        `}
      >
        COMENZAR LECTURA
      </button>
    </div>
  )
}

export default ModalSelectionProgress;