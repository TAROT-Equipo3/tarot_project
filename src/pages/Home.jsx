import React from "react";
import TarotDeck from "../components/TarotDeck";

export default function Home() {
  return (
    <section>
      <TarotDeck />
    </section>
  );
  import { useState, useEffect } from "react";
  import NamePopup from "../components/NamePopup";
  import ModalBase from "../components/ModalBase";
  import ModalSelectionProgress from "../components/ModalSelectionProgress";

  // Contiene el Deck y dispara el Modal
  import { Outlet } from "react-router-dom";
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [selectedCards, setSelectedCards] = useState([]); // Simulación activa
    const [timerTriggered, setTimerTriggered] = useState(false);

    useEffect(() => {
      if (timerTriggered || userName) return;

      // Activa el modal automáticamente tras 800ms
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 800);

      // Limpieza del temporizador si el componente se desmonta
      return () => clearTimeout(timer);
    }, [timerTriggered, userName]);

    // Función que se ejecuta cuando el hijo envía el nombre
    const handleSaveName = (name) => {
      setTimerTriggered(true); // 🔮 CORRECCIÓN 1: Freno de mano inmediato para el timer
      setUserName(name);
      setIsModalOpen(false); // Cierra el modal de forma definitiva
    };

    return (
      // 🔮 CORRECCIÓN 2: Se añade 'items-center' aquí para centrar el contenedor móvil en pantallas grandes
      <div className="min-h-screen bg-[#4b2e2e] flex flex-col justify-center items-center">
        {/* MOBILE CONTAINER */}
        <div
          className="
          w-full 
          max-w-[375px] 
          md:max-w-[768px] 
          lg:max-w-[1200px]
          bg-purple-800 
          flex flex-col
          min-h-screen
        "
        >
          <Header />

          {/* 🔮 CORRECCIÓN 3: Cambiado a flex-col para que el Outlet y los modales no se pisen de lado */}
          <main className="flex-grow flex flex-col items-center justify-center w-full relative min-h-[60vh]">
            <Outlet />

            {/* T3-40: Modal del Nombre */}
            <ModalBase isOpen={isModalOpen}>
              <NamePopup onSubmitName={handleSaveName} />
            </ModalBase>

            {/* T3-41: Modal de Progreso */}
            <ModalSelectionProgress currentSelection={selectedCards.length} />
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}
