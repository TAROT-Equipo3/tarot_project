import { useState, useEffect } from "react";
import NamePopup from "../components/NamePopup";

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
      {isModalOpen && <NamePopup onSubmitName={handleSaveName} />}
      <h2>Esta es la Landing</h2>
    </div>
  );
}

export default Home;
