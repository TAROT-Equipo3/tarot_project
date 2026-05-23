import { useState, useEffect } from "react";
import NamePopup from "../components/NamePopup";
import ModalBase from "../components/ModalBase";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Activa el modal automáticamente tras 800ms
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 800);

    // Limpieza del temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  // Función que se ejecuta cuando el hijo envía el nombre
  const handleSaveName = (name) => {
    setUserName(name);
    setIsModalOpen(false); // Cierra el modal
  };
  return (
    <div className="w-full flex justify-center items-center text-white">
      <ModalBase isOpen={isModalOpen}>
        <NamePopup onSubmitName={handleSaveName} />
      </ModalBase>
      <h2>Esta es la Landing</h2>

      {/*<div className="mt-6 p-4 bg-[var(--color-border-card-outer)] border border-[var(--color-border-card-inner)] rounded-xl inline-block">
            <p className="text-sm font-[var(--font-mono)] text-[var(--color-accent)]">
              🔮 Firma cósmica registrada: <span className="underline font-bold">{userName}</span>
            </p>
          </div>
      */}
    </div>
  );
}

export default Home;
