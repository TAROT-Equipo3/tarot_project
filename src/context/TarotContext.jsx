import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getTarotCards } from "../services/tarotApiService";
import { createHistoryItem } from "../services/historialApiService";

const TarotContext = createContext();

export function TarotProvider({ children }) {
  const navigate = useNavigate();

  // --- Estados centralizados ---
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isSelectionProgressOpen, setIsSelectionProgressOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [timerTriggered, setTimerTriggered] = useState(false);
  const [selectedCards, setSelectedCards] = useState([null, null, null]);
  const [tarotApiData, setTarotApiData] = useState([]);

  const filledCount = selectedCards.filter(Boolean).length;

  // --- Cómputos y Memorizaciones ---
  const selectedCardIds = useMemo(
    () => selectedCards.filter(Boolean).map((c) => c.id),
    [selectedCards]
  );

  const cardsForModal = useMemo(() => {
    return selectedCards.map((card) => {
      if (!card) return null;
      return tarotApiData.find((api) => String(api.id) === String(card.id)) ?? null;
    });
  }, [selectedCards, tarotApiData]);

  // --- Efectos ---
  useEffect(() => {
    getTarotCards()
      .then(setTarotApiData)
      .catch((err) => console.error("Error cargando cartas:", err));
  }, []);

  useEffect(() => {
    setSelectedCards([null, null, null]);
  }, [userName]);

  useEffect(() => {
    if (timerTriggered || userName) return;
    const timer = setTimeout(() => setIsNameModalOpen(true), 800);
    return () => clearTimeout(timer);
  }, [timerTriggered, userName]);

  // --- Handlers ---
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

  const handleGuardarTirada = async () => {
    if (cardsForModal.includes(null)) return;

    const nuevaTirada = {
      userName,
      date: new Date().toLocaleString("es-ES"),
      cards: {
        pasado: cardsForModal[0],
        presente: cardsForModal[1],
        futuro: cardsForModal[2],
      },
    };

    try {
      await createHistoryItem(nuevaTirada);
      setIsSelectionProgressOpen(false);
      navigate("/historial");
    } catch (error) {
      console.error("Hubo un problema guardando la lectura", error);
    }
  };

  // Exponemos exactamente lo que los componentes necesitan consumir
  const value = {
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
  };

  return <TarotContext.Provider value={value}>{children}</TarotContext.Provider>;
}

// Custom hook para usar el contexto de forma limpia
export function useTarot() {
  const context = useContext(TarotContext);
  if (!context) {
    throw new Error("useTarot debe ser usado dentro de un TarotProvider");
  }
  return context;
}