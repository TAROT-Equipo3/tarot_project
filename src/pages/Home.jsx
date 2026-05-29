import React from "react";
import { Link } from "react-router-dom";

// Context
import { useTarot } from "../context/TarotContext";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import TarotDeck from "../components/TarotDeck";
import SelectionProgress from "../components/SelectionProgress";

function Home() {
  const {
    userName,
    shuffledDeck,
    selectedCardIds,
    cardsForModal,
    filledCount,
    isNameModalOpen,
    isSelectionProgressOpen,
    setIsSelectionProgressOpen,
    handleSaveName,
    handleCardClick,
    handleGuardarTirada,
    handleRestartReading,
  } = useTarot();

  return (
    <div className="app-container">
      <div className="app-canvas">
        <Header />

        <main className="app-main flex-1 justify-between px-4 py-6 md:py-10 md:gap-6">
          {/* Título y subtítulo */}
          <section className="flex flex-col items-center text-center gap-4 w-full">
            <h1 className="text-xl md:text-2xl font-mono font-bold text-accent tracking-wide">
              Selecciona tu destino
            </h1>
            <p className="text-sm md:text-xl font-mono max-w-[370px] md:max-w-[816px] text-white md:leading-normal">
              🔮 Concéntrate... y elige 3 cartas para que el oráculo revele tu camino.
            </p>
          </section>

          {/* Progreso de Selección */}
          <section className="w-full flex justify-center my-4">
            <ModalSelectionProgress
              currentSelection={filledCount}
              onStartReading={() => setIsSelectionProgressOpen(true)}
            />
          </section>

          {/* Tapete/Mesa de cartas */}
          <section className="flex-1 w-full mb-0 flex flex-col items-center justify-center relative min-h-[250px] md:min-h-[400px]">
            <TarotDeck
              userName={userName}
              selectedCardIds={selectedCardIds}
              onCardClick={handleCardClick}
              deck={shuffledDeck}
            />
          </section>

          {/* Botones de Acción */}
          <section className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-4 px-4 md:px-0">
            <Button
              variant="outline"
              size="lg"
              onClick={handleRestartReading}
              className="font-normal w-full md:w-auto"
            >
              REINICIAR TIRADA
            </Button>

            <Link to="/historial" className="w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="font-normal w-full md:w-auto"
              >
                VER HISTORIAL DE TIRADAS
              </Button>
            </Link>
          </section>
        </main>

        <Footer />

        {/* Modales y Popups */}
        <ModalBase isOpen={isNameModalOpen}>
          <NamePopup onSubmitName={handleSaveName} />
        </ModalBase>

        <SelectionProgress
          isOpen={isSelectionProgressOpen}
          onClose={() => setIsSelectionProgressOpen(false)}
          userName={userName}
          cards={cardsForModal}
          onSaveReading={handleGuardarTirada}
          onRestart={handleRestartReading}
        />
      </div>
    </div>
  );
}

export default Home;