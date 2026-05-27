import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button.jsx";

// Componentes de interacción / Modales
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";
import ModalSelectionProgress from "../components/ModalSelectionProgress";
import SelectionProgress from "../components/SelectionProgress";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false); // 👈 nuevo
  const [userName, setUserName] = useState("");
  const [selectedCards, setSelectedCards] = useState([]);
  const [timerTriggered, setTimerTriggered] = useState(false);

  // 🧪 Testeo para poder ver el modal de las 3 cartas, substituir por seleccion real despues
  const testCards = {
    pasado: {
      arcaneName: "El Loco",
      arcaneImage: {
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        author: "Pamela Coleman Smith, Rider-Waite Tarot",
        license: "Public domain",
      },
    },
    presente: {
      arcaneName: "El Mago",
      arcaneImage: {
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        author: "Pamela Coleman Smith, Rider-Waite Tarot",
        license: "Public domain",
      },
    },
    futuro: {
      arcaneName: "La Sacerdotisa",
      arcaneImage: {
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
        author: "Pamela Coleman Smith, Rider-Waite Tarot",
        license: "Public domain",
      },
    },
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
    <div className="app-container">
      <div className="app-canvas">
        <Header />

        {/* MAIN: Ahora con flex-col y centrado absoluto para replicar el diseño de una columna */}
        <main className="app-main flex flex-col items-center justify-between w-full flex-1 px-4 py-6 md:py-10 md:gap-12">
          {/* SECCIÓN 1: Textos de Bienvenida */}
          <section className="flex flex-col items-center text-center gap-4 w-full">
            <h1 className="text-xl md:text-4xl font-mono font-bold text-accent  tracking-wide">
              Selecciona tu destino
            </h1>
            <p className="text-sm md:text-2xl font-mono max-w-[370px] md:max-w-[816px] text-white md:leading-normal">
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

            <Outlet context={{ selectedCards, setSelectedCards }} />
          </section>

          {/* SECCIÓN 4: Botón de Historial */}
          <section className="w-full flex justify-center mt-12 md:mt-16 mb-4">
            <Link to="/historial">
              <Button variant="outline" size="lg" className="font-normal">
                VER HISTORIAL DE TIRADAS
              </Button>
            </Link>
          </section>
        </main>

        <Footer />

        {/* Modales globales flotantes */}
        <ModalBase isOpen={isModalOpen}>
          <NamePopup onSubmitName={handleSaveName} />
        </ModalBase>
        {/*Prueba para ver modal con las 3 cartas */}
        {/* <SelectionProgress
          isOpen={isProgressModalOpen}
          onClose={() => setIsProgressModalOpen(false)}
          userName={userName}
          cards={testCards}
        /> */}
      </div>
    </div>
  );
}

export default Home;
