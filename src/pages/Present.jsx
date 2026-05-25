import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FrontCard from "../components/FrontCard";
import CardInfo from "../components/CardInfo";

const Present = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://mockapi.io{id}`)
        .then((res) => setCardData(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

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

      <main className="flex flex-col items-center justify-start p-4 flex-grow w-full pt-28">
        <h2 className="text-3xl font-syne font-extrabold text-accent uppercase tracking-widest text-glow-gold mb-8">
          Tu Presente
        </h2>

        <div className="w-full max-w-5xl flex flex-col items-center gap-8 mb-8">
          <div className="flex items-center justify-center gap-6 w-full">
            <FrontCard
              tarotImage={cardData?.tarotImage}
              tarotName={cardData?.tarotName}
              id={cardData?.id}
            />
          </div>

          <CardInfo cardData={cardData} type="PRESENTE" />
        </div>

        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-2 bg-accent hover:bg-white text-primary font-bold rounded-lg transition-all active:scale-95 shadow-solid-gold border border-goldDark font-mono text-sm tracking-wider"
        >
          VOLVER
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Present;
