import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Services
import {
  getHistorial,
  deleteHistoryItem,
  updateHistoryName,
} from "../services/historialApiService";

// Global Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button.jsx";
import SelectionProgress from "../components/SelectionProgress";

// Page Components
import { HistorialList } from "../components/HistorialList";
import { DeleteButton } from "../components/DeleteButton";

export default function Historial() {
  const [historialItems, setHistorialItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTirada, setSelectedTirada] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getHistorial();
      setHistorialItems(data);
    } catch (error) {
      console.error("Error al obtener el historial:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHistoryItem(id);
      setHistorialItems(historialItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error al eliminar el elemento:", error);
    }
  };

  const handleEditItem = async (id, newName) => {
    if (newName && newName.trim() !== "") {
      try {
        const updatedItem = await updateHistoryName(id, { userName: newName });
        setHistorialItems(
          historialItems.map((r) => (r.id === id ? updatedItem : r))
        );
      } catch (error) {
        console.error("Error al actualizar el nombre:", error);
      }
    }
  };

  const handleClearAllHistory = async () => {
    const confirmDelete = window.confirm(
      "¿Segur@ de que quieres borrar TODO el historial? Esta acción no se puede deshacer."
    );
    if (!confirmDelete) return;

    try {
      await Promise.all(
        historialItems.map((item) => deleteHistoryItem(item.id))
      );
      setHistorialItems([]);
    } catch (error) {
      console.error("Error al vaciar el historial:", error);
    }
  };

  // Vista de carga estructurada igual que el diseño general
  if (isLoading) {
    return (
      <div className="app-container">
        <div className="app-canvas justify-between">
          <Header />
          <div className="text-white text-center font-mono tracking-wider text-lg mt-20">
            🔮 Cargando historial...
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app-canvas">
        <Header />

        <main className="app-main flex-1 max-w-4xl mx-auto px-4 md:px-0">
          {/* Encabezado de la página */}
          <section className="text-center mt-8 md:mt-14 mb-8 font-syne">
            <h1 className="text-2xl md:text-3xl font-bold text-accent text-glow-gold mb-2 uppercase tracking-wide">
              Historial de tiradas
            </h1>
            <p className="text-white font-mono text-xs md:text-sm tracking-wider max-w-xs md:max-w-md mx-auto opacity-90">
              Consulta tus tiradas según el nombre y la fecha.
            </p>
          </section>

          {/* Panel de control / Acciones globales */}
          <section className="flex justify-between items-center w-full max-w-sm md:max-w-2xl mx-auto mb-6 font-mono text-white font-bold text-sm tracking-wide px-2 md:px-0">
            <span>Borrar todo el historial</span>
            <DeleteButton onClick={handleClearAllHistory} variant="yellow" />
          </section>

          {/* Listado de elementos */}
          <section className="w-full">
            <HistorialList
              history={historialItems}
              onDelete={handleDelete}
              onEdit={handleEditItem}
              onViewDetails={(item) => setSelectedTirada(item)}
            />
          </section>

          {/* Navegación de retorno */}
          <section className="w-full flex justify-center mt-12 md:mt-16 mb-8">
            <Link to="/">
              <Button variant="outline" size="lg" className="font-normal">
                VOLVER AL INICIO
              </Button>
            </Link>
          </section>
        </main>

        <Footer />

        {/* Modal de visualización de detalles */}
        {selectedTirada && (
          <SelectionProgress
            isOpen={Boolean(selectedTirada)}
            onClose={() => setSelectedTirada(null)}
            userName={selectedTirada.userName}
            cards={
              selectedTirada.cards
                ? [
                    selectedTirada.cards.pasado,
                    selectedTirada.cards.presente,
                    selectedTirada.cards.futuro,
                  ]
                : [null, null, null]
            }
            onSaveReading={() => setSelectedTirada(null)}
          />
        )}
      </div>
    </div>
  );
}