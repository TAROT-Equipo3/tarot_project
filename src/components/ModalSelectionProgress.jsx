import React from 'react'

// 🔮 CORRECCIÓN: Ahora recibe "currentSelection" que es lo que le estás mandando desde la Home
const ModalSelectionProgress = ({ currentSelection }) => {

  const progressPercentage = (currentSelection / 3) * 100;

  return (
    <div 
      data-propiedad-1="pasado" 
      className="w-96 h-auto p-6 bg-[var(--color-primary)] rounded-xl shadow-[4px_4px_0px_0px_rgba(108,94,6,1.00)] border-2 border-[var(--color-border-card-inner)] font-[var(--font-syne)] text-white flex flex-col justify-center items-center gap-4"
    >
      <div className="text-center space-y-2">
        {/* Renderiza el número dinámicamente según la simulación (ej: 1 / 3) */}
        <h2 className="text-lg font-bold tracking-wider text-[var(--color-accent)]">
          {currentSelection} / 3 SELECCIONA TU PASADO
        </h2>
        
        <p className="text-xs font-[var(--font-mono)] text-purple-200">
          Progreso de la tirada cósmica: {progressPercentage.toFixed(0)}%
        </p>
      </div>

      {/* Si ya seleccionó las 3 cartas, mostramos el botón. Si no, mostramos un texto de espera */}
      {currentSelection === 3 ? (
        <button className="px-4 py-2 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] font-bold rounded-lg transition-all duration-300 shadow-hover-gold text-sm">
          COMENZAR LECTURA
        </button>
      ) : (
        <div className="w-full bg-[var(--color-border-card-outer)] h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[var(--color-accent)] h-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}

export default ModalSelectionProgress;