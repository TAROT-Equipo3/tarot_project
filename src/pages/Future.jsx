// src/pages/Future.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCardById } from '../services/tarotApiService';
import FrontCard from '../components/FrontCard';
import CardInfo from '../components/CardInfo';
import Button from '../components/Button';

const Future = () => {
  const { idPasado, idPresente, idFuturo } = useParams(); 
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      try {
        const data = await getCardById(idFuturo);
        setCardData(data);
      } catch (error) {
        console.error("Error al revelar el futuro:", error);
      } finally {
        setLoading(false);
      }
    };
    if (idFuturo) fetchCard();
  }, [idFuturo]);

  if (loading) return <div className="app-canvas flex items-center justify-center text-accent font-syne">Descifrando el futuro...</div>;
  if (!cardData) return null;

  return (
    <main className="app-canvas app-main">
      <h2 className="font-syne text-accent text-2xl font-bold tracking-widest mb-8 text-glow-gold uppercase">FUTURO</h2>
      <div className="relative flex items-center justify-center w-full max-w-sm mb-10">
        <button 
          onClick={() => navigate(`/presente/${idPasado}/${idPresente}/${idFuturo}`)} 
          className="absolute -left-4 md:-left-8 text-accent text-4xl hover:text-white transition-colors cursor-pointer"
        >
          &#10094;
        </button>
        <FrontCard image={cardData.arcaneImage.imageSrc} altText={cardData.arcaneName} />
      </div>
      <CardInfo 
        cardNumber={cardData.arcaneNumber}
        meaning={cardData.arcaneDescription}
        stemName={cardData.goddessName}
        stemImage={cardData.goddessImage.imageSrc}
        stemBio={cardData.goddessDescription}
      />
      <div className="mb-8">
        <Button variant="outline" size="lg" onClick={() => navigate('/')}>VOLVER AL INICIO</Button>
      </div>
    </main>
  );
};
export default Future;