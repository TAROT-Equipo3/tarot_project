import { useState, useEffect } from "react";
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import SelectionProgress from "../components/SelectionProgress"; // 👈 nuevo import

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false); // 👈 nuevo
  const [userName, setUserName] = useState("");
  const [selectedCards, setSelectedCards] = useState([]);
  const [timerTriggered, setTimerTriggered] = useState(false);

  // 🧪 Temporal hasta tener BarajaComponent conectado
  const testCards = {
    pasado:   { name: "The Fool",            image: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg" },
    presente: { name: "The Magician",        image: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg" },
    futuro:   { name: "The High Priestess",  image: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg" },
  };

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
    setIsProgressModalOpen(true); // 👈 nuevo — abre el modal de progreso
  };

  return (
    <div className="min-h-screen bg-[#4b2e2e] flex flex-col justify-center items-center">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1200px] bg-purple-800 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow flex flex-col items-center justify-center w-full relative min-h-[60vh]">
          <Outlet />

          {/* Modal del Nombre */}
          <ModalBase isOpen={isModalOpen}>
            <NamePopup onSubmitName={handleSaveName} />
          </ModalBase>

          {/* Modal de Progreso de Selección */}
          <ModalSelectionProgress currentSelection={selectedCards.length} />

          {/* 👈 Modal nuevo de tirada */}
          <SelectionProgress
            isOpen={isProgressModalOpen}
            onClose={() => setIsProgressModalOpen(false)}
            userName={userName}
            cards={testCards}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;