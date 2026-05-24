// Lista del json-server
import Header  from "../components/Header";
import Footer  from "../components/Footer";
import { useState, useEffect } from "react";
import {
  getHistorial,
  deleteHistoryItem,
} from "../services/historialApiService";
import { HistorialList } from "../components/HistorialList";
import { DeleteButton } from "../components/DeleteButton";


export default function Historial() {
  const [historialItems, setHistorialItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Funcion borrar TODO el historial
  const handleClearAllHistory = async () => {
    const confirmDelete = window.confirm(
      "¿Segur@ de que quieres borrar TODO el historial? Esta acción no se puede deshacer.",
    );
    if (!confirmDelete) return;

    try {
      // json-server no tiene un método nativo para borrar todo de golpe,
      // así que borramos cada elemento de la lista en paralelo.
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
        <div className="text-white text-center mt-20">Cargando...</div>;
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-body-gradient flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex flex-col w-full px-4 md:px-0 max-w-4xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mt-8 md:mt-14 mb-8 font-syne">
          <h1 className="text-2xl md:text-3xl font-bold text-accent text-glow-gold mb-2 uppercase tracking-wide">
            Historial de tiradas
          </h1>
          <p className="text-white font-mono text-xs md:text-sm tracking-wider max-w-xs md:max-w-md mx-auto opacity-90">
            Consulta tus tiradas según el nombre y la fecha.
          </p>
        </div>

        {/* SECCIÓN DEL BOTÓN DELETE GLOBAL  * */}
        <div className="flex justify-between items-center w-full max-w-sm md:max-w-2xl mx-auto mb-6 font-mono text-white font-bold text-sm md:text-sm tracking-wide px-2 md:px-0">
          <span>Borrar todo el historial</span>
          <DeleteButton onClick={handleClearAllHistory} variant="yellow" />
        </div>

        <HistorialList history={historialItems} onDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
}
