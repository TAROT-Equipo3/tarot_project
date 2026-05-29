import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getTarotCards } from "../services/tarotApiService";
import { createHistoryItem } from "../services/historialApiService";

const TarotContext = createContext();

// Algoritmo de ordenamiento aleatorio (Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function TarotProvider({ children }) {
  const navigate = useNavigate();

  // --- ESTADOS LOCALES ---
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isSelectionProgressOpen, setIsSelectionProgressOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [timerTriggered, setTimerTriggered] = useState(false);
  const [selectedCards, setSelectedCards] = useState([null, null, null]);
  const [tarotApiData, setTarotApiData] = useState([]);
  const [shuffledDeck, setShuffledDeck] = useState([]);

  // --- MEMOIZACIONES / DERIVADOS ---
  const filledCount = selectedCards.filter(Boolean).length;

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

  // --- EFECTOS (EFFECTS) ---
  
  // Carga inicial de cartas desde la API
  useEffect(() => {
    getTarotCards()
      .then((cards) => {
        setTarotApiData(cards);
        setShuffledDeck(shuffleArray(cards));
      })
      .catch((err) => console.error("Error cargando cartas:", err));
  }, []);

  // Reinicia la selección si cambia el usuario
  useEffect(() => {
    setSelectedCards([null, null, null]);
  }, [userName]);

  // Temporizador para abrir el modal del nombre de usuario
  useEffect(() => {
    if (timerTriggered || userName) return;
    const timer = setTimeout(() => setIsNameModalOpen(true), 800);
    return () => clearTimeout(timer);
  }, [timerTriggered, userName]);

  // --- MANEJADORES DE EVENTOS ---
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
    } catch (error) {
      console.error("Hubo un problema guardando la lectura", error);
    }
  };

  const handleRestartReading = () => {
    setSelectedCards([null, null, null]);
    setUserName("");
    setTimerTriggered(false);
    setIsSelectionProgressOpen(false);
    setShuffledDeck(shuffleArray(tarotApiData));
    localStorage.removeItem("astralis_username");
  };

  const value = {
    userName,
    tarotApiData,
    shuffledDeck,
    selectedCardIds,
    cardsForModal,
    filledCount,
    isNameModalOpen,
    isSelectionProgressOpen,
    setIsSelectionProgressOpen,
    handleSaveName,
    handleCardClick,
    handleGuardarTirada,
    handleRestartReading,
  };

  return <TarotContext.Provider value={value}>{children}</TarotContext.Provider>;
}

export function useTarot() {
  const context = useContext(TarotContext);
  if (!context) {
    throw new Error("useTarot debe ser usado dentro de un TarotProvider");
  }
  return context;
}