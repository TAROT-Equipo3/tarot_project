import React from "react";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Componentes de interacción / Modales
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import TarotDeck from "../components/TarotDeck";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedCards, setSelectedCards] = useState([]); // Simulación activa
  const [timerTriggered, setTimerTriggered] = useState(false);

  useEffect(() => {
    if (timerTriggered || userName) return;

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [timerTriggered, userName]);

  const handleSaveName = (name) => {
    setTimerTriggered(true);
    setUserName(name);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="app-canvas">
        <Header />

        {/* MAIN: Ahora con flex-col y centrado absoluto para replicar el diseño de una columna */}
        <main className="app-main flex flex-col items-center justify-between w-full flex-1 px-4 py-6 md:py-10">
          {/* SECCIÓN 1: Textos de Bienvenida */}
          <section className="flex flex-col items-center text-center gap-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-accent uppercase tracking-wide">
              Selecciona tu destino
            </h1>
            <p className="text-sm md:text-base font-mono max-w-[280px] md:max-w-[400px] text-white">
              🔮 Concéntrate... y elige 3 cartas para que el oráculo revele tu
              camino.
            </p>
          </section>

          {/* SECCIÓN 2: Indicador de Progreso */}
          <section className="w-full flex justify-center my-6 md:my-8">
            <ModalSelectionProgress currentSelection={selectedCards.length} />
          </section>

          {/* SECCIÓN 3: El mazo de cartas */}
          <section className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[250px] md:min-h-[400px]">
            {/* Aquí se inyecta tu componente TarotDeck  */}

            <TarotDeck
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          </section>

          {/* SECCIÓN 4: Botón de Historial */}
          <section className="w-full flex justify-center mt-12 md:mt-16 mb-4">
            <button className="px-8 py-2 md:py-3 border border-accent text-accent rounded-full font-mono text-xs md:text-sm tracking-wider hover:bg-accent hover:text-primary transition-all">
              VER HISTORIAL DE TIRADAS
            </button>
          </section>
        </main>

        <Footer />

        {/* Modales globales flotantes */}
        <ModalBase isOpen={isModalOpen}>
          <NamePopup onSubmitName={handleSaveName} />
        </ModalBase>
      </div>
    </div>
  );
}

export default Home;
