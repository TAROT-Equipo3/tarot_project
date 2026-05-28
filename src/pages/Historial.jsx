// src/pages/Historial.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button.jsx";
import { useState, useEffect } from "react";
import {
  getHistorial,
  deleteHistoryItem,
  updateHistoryName,
} from "../services/historialApiService";
import { HistorialList } from "../components/HistorialList";
import { DeleteButton } from "../components/DeleteButton";
import { Link } from "react-router-dom";
// 1. Importamos el componente del modal
import SelectionProgress from "../components/SelectionProgress";

export default function Historial() {
  const [historialItems, setHistorialItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Estado para controlar qué tirada se está visualizando en el modal
  const [selectedTirada, setSelectedTirada] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getHistorial();
      setHistorialItems(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHistoryItem(id);
      setHistorialItems(historialItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditItem = async (id, newName) => {
    if (newName && newName.trim() !== "") {
      try {
        const updatedItem = await updateHistoryName(id, { userName: newName });
        setHistorialItems(
          historialItems.map((r) => (r.id === id ? updatedItem : r)),
        );
      } catch (error) {
        console.error("Error al actualizar el nombre:", error);
      }
    }
  };

  const handleClearAllHistory = async () => {
    const confirmDelete = window.confirm(
      "¿Segur@ de que quieres borrar TODO el historial? Esta acción no se puede deshacer.",
    );
    if (!confirmDelete) return;

    try {
      await Promise.all(
        historialItems.map((item) => deleteHistoryItem(item.id)),
      );
      setHistorialItems([]);
    } catch (error) {
      console.error("Error al vaciar el historial:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-body-gradient flex flex-col justify-between">
        <Header />
        <div className="text-white text-center mt-20">Cargando...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-body-gradient flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex flex-col w-full px-4 md:px-0 max-w-4xl mx-auto">
        <div className="text-center mt-8 md:mt-14 mb-8 font-syne">
          <h1 className="text-2xl md:text-3xl font-bold text-accent text-glow-gold mb-2 uppercase tracking-wide">
            Historial de tiradas
          </h1>
          <p className="text-white font-mono text-xs md:text-sm tracking-wider max-w-xs md:max-w-md mx-auto opacity-90">
            Consulta tus tiradas según el nombre y la fecha.
          </p>
        </div>

        <div className="flex justify-between items-center w-full max-w-sm md:max-w-2xl mx-auto mb-6 font-mono text-white font-bold text-sm md:text-sm tracking-wide px-2 md:px-0">
          <span>Borrar todo el historial</span>
          <DeleteButton onClick={handleClearAllHistory} variant="yellow" />
        </div>

        <div>
          <HistorialList
            history={historialItems}
            onDelete={handleDelete}
            onEdit={handleEditItem}
            // 3. Pasamos la función para abrir el modal al hacer clic
            onViewDetails={(item) => setSelectedTirada(item)}
          />
        </div>

        <div className="w-full flex justify-center mt-12 md:mt-16 mb-8">
          <Link to="/">
            <Button variant="outline" size="md" className="font-normal">
              volver al inicio
            </Button>
          </Link>
        </div>
      </main>

      {/* 4. Renderizado condicional del modal SelectionProgress */}
      {selectedTirada && (
        <SelectionProgress
          isOpen={Boolean(selectedTirada)}
          onClose={() => setSelectedTirada(null)}
          userName={selectedTirada.userName}
          // ¡Cambiamos "cartas" por "cards" para coincidir con tu Contexto!
          cards={selectedTirada.cards ? [
            selectedTirada.cards.pasado,
            selectedTirada.cards.presente,
            selectedTirada.cards.futuro
          ] : [null, null, null]}
          onSaveReading={() => setSelectedTirada(null)}
        />
      )}

      <Footer />
    </div>
  );
}
