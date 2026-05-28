import React from "react";
import { Link } from "react-router-dom";

// Contexto
import { useTarot } from "../context/TarotContext";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import TarotDeck from "../components/TarotDeck";
import SelectionProgress from "../components/SelectionProgress";

function Home() {
  // Extraemos todo lo necesario del Contexto
  const {
    userName,
    tarotApiData,
    selectedCardIds,
    cardsForModal,
    filledCount,
    isNameModalOpen,
    isSelectionProgressOpen,
    setIsSelectionProgressOpen,
    handleSaveName,
    handleCardClick,
    handleGuardarTirada,
  } = useTarot();

  return (
    <div className="app-container">
      <div className="app-canvas">
        <Header />

        <main className="app-main flex flex-col items-center justify-between w-full flex-1 px-4 py-6 md:py-10 md:gap-12">
          <section className="flex flex-col items-center text-center gap-4 w-full">
            <h1 className="text-xl md:text-4xl font-mono font-bold text-accent tracking-wide">
              Selecciona tu destino
            </h1>
            <p className="text-sm md:text-2xl font-mono max-w-[370px] md:max-w-[816px] text-white md:leading-normal">
              🔮 Concéntrate... y elige 3 cartas para que el oráculo revele tu camino.
            </p>
          </section>

          <section className="w-full flex justify-center my-6 md:my-8">
            <ModalSelectionProgress
              currentSelection={filledCount}
              onStartReading={() => setIsSelectionProgressOpen(true)}
            />
          </section>

          <section className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[250px] md:min-h-[400px]">
            <TarotDeck
              userName={userName}
              selectedCardIds={selectedCardIds}
              onCardClick={handleCardClick}
              deck={tarotApiData}
            />
          </section>

          <section className="w-full flex justify-center mt-12 md:mt-16 mb-4">
            <Link to="/historial">
              <Button variant="outline" size="lg" className="font-normal">
                VER HISTORIAL DE TIRADAS
              </Button>
            </Link>
          </section>
        </main>

        <Footer />

        <ModalBase isOpen={isNameModalOpen}>
          <NamePopup onSubmitName={handleSaveName} />
        </ModalBase>

        <SelectionProgress
          isOpen={isSelectionProgressOpen}
          onClose={() => setIsSelectionProgressOpen(false)}
          userName={userName}
          cards={cardsForModal}
          onSaveReading={handleGuardarTirada}
        />
      </div>
    </div>
  );
}

export default Home;