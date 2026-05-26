import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FrontCard from "../components/FrontCard";
import CardInfo from "../components/CardInfo";

const Future = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id !== undefined) {
      setLoading(true);
      axios
        .get(`https://mockapi.io{id}`)
        .then((res) => {
          if (res.data && res.data.arcaneName) {
            setCardData(res.data);
          } else {
            generateFallback(id);
          }
        })
        .catch(() => {
          generateFallback(id);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const generateFallback = (cardId) => {
    const numId = parseInt(cardId, 10) || 0;
    const imageId1 = (numId * 15) % 1000;
    const imageId2 = (numId * 25) % 1000;

    setCardData({
      id: String(numId),
      arcaneNumber: String(numId),
      arcaneName: `Arcano Temporal ${numId}`,
      arcaneDescription: `Esta es la descripción dinámica para el arcano número ${numId}. El significado varía según el ID de la consulta actual en la aplicación.`,
      goddessName: `Científica STEM Nº ${numId + 1}`,
      goddessDescription: `Biografía e historia recuperada de forma dinámica para la Diosa de la tecnología con el identificador numérico ${numId + 1}.`,
      arcaneImage: {
        imageSrc: `https://picsum.photos${imageId1}/300/450`,
        author: "Pamela C. Smith",
      },
      goddessImage: { imageSrc: `https://picsum.photos${imageId2}/200/200` },
    });
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-body-gradient flex flex-col justify-between">
        <Header />
        <div className="flex items-center justify-center flex-grow">
          <p className="text-white text-xl font-semibold font-syne animate-pulse text-glow-gold">
            Cargando...
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-body-gradient flex flex-col justify-between select-none">
      <Header />

      <main className="flex flex-col items-center justify-start p-4 flex-grow w-full pt-24 pb-12">
        {/* Хедер страницы: НАЗВАНИЕ ЭТАПА ВРЕМЕНИ */}
        <h2 className="text-3xl font-syne font-extrabold text-accent uppercase tracking-widest text-glow-gold mb-10 text-center">
          FUTURO
        </h2>

        {cardData && (
          <div className="w-full max-w-3xl flex flex-col items-center mx-auto">
            {/* ВЕРХНИЙ БЛОК: Описание аркана СЛЕВА + Карта со стрелочками СПРАВА */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-12">
              {/* Левая часть верхнего блока: Номер и текст (на десктопе выровнен по левому краю, ширина ограничена) */}
              <div className="w-full md:w-1/2 flex flex-col gap-3 text-center md:text-left mt-2">
                <p className="text-accent font-bold text-xs tracking-widest uppercase">
                  Nº ARCANO: {cardData.arcaneNumber}
                </p>
                <p className="text-purple-100 leading-relaxed text-lg font-syne text-justify md:text-left pr-0 md:pr-4">
                  {cardData.arcaneDescription}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 flex-shrink-0 mt-6 md:mt-0">
                <button
                  onClick={() => navigate(`/presente/${id}`)}
                  className="text-accent text-3xl font-bold hover:text-white transition-colors cursor-pointer select-none"
                >
                  ❮
                </button>

                <FrontCard cardData={cardData} />

                <button
                  disabled
                  className="text-gray-600 text-3xl font-bold opacity-20 cursor-not-allowed select-none"
                >
                  ❯
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col items-center text-center border-t border-purple-900/30 pt-8">
              <CardInfo cardData={cardData} type="FUTURO" />
            </div>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-12 px-10 py-2.5 bg-transparent hover:bg-accent hover:text-primary text-accent border-2 border-accent font-bold rounded-full transition-all active:scale-95 font-mono text-xs tracking-widest uppercase shadow-solid-gold"
        >
          Volver al Inicio
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Future;
