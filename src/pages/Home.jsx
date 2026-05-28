import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button.jsx";
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import TarotDeck from "../components/TarotDeck";
import SelectionProgress from "../components/SelectionProgress";
import { getTarotCards } from "../services/tarotApiService"; // ✅

function Home() {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isSelectionProgressOpen, setIsSelectionProgressOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [timerTriggered, setTimerTriggered] = useState(false);
  const [selectedCards, setSelectedCards] = useState([null, null, null]);
  const [tarotApiData, setTarotApiData] = useState([]); // ✅ mazo completo de la API

  // ✅ Carga única del mazo al montar
  useEffect(() => {
    getTarotCards()
      .then(setTarotApiData)
      .catch((err) => console.error("Error cargando cartas:", err));
  }, []);

  const selectedCardIds = useMemo(
    () => selectedCards.filter(Boolean).map((c) => c.id),
    [selectedCards]
  );

  const filledCount = selectedCards.filter(Boolean).length;
  const isReadingReady = filledCount === 3;

  // ✅ Cruza los ids seleccionados con los datos completos de la API
  const cardsForModal = selectedCards.map((card) => {
    if (!card) return null;
    return tarotApiData.find((api) => String(api.id) === String(card.id)) ?? null;
  });

  useEffect(() => {
    setSelectedCards([null, null, null]);
  }, [userName]);

  useEffect(() => {
    if (timerTriggered || userName) return;
    const timer = setTimeout(() => setIsNameModalOpen(true), 800);
    return () => clearTimeout(timer);
  }, [timerTriggered, userName]);

  const handleSaveName = (name) => {
    setTimerTriggered(true);
    setUserName(name);
    setIsNameModalOpen(false);
    localStorage.setItem("astralis_username", name);
  };

  const handleCardClick = (card) => {
    setSelectedCards((prev) => {
      const existingSlot = prev.findIndex((c) => c?.id === card.id);
      if (existingSlot !== -1) {
        const next = [...prev];
        next[existingSlot] = null;
        return next;
      }
      const freeSlot = prev.findIndex((c) => c === null);
      if (freeSlot === -1) return prev;
      const next = [...prev];
      next[freeSlot] = card;
      return next;
    });
  };

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
              deck={tarotApiData} // ✅ mazo real de la API
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
          cards={cardsForModal} // ✅ datos completos con arcaneImage
        />
      </div>
    </div>
  );
}

export default Home;