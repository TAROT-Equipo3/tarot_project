// src/pages/Past.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCardById } from '../services/tarotApiService';
import FrontCard from '../components/FrontCard';
import CardInfo from '../components/CardInfo';
import Button from '../components/Button';

const Past = () => {
  const { idPasado, idPresente, idFuturo } = useParams(); 
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      try {
        const data = await getCardById(idPasado);
        setCardData(data);
      } catch (error) {
        console.error("Error al revelar el pasado:", error);
      } finally {
        setLoading(false);
      }
    };
    if (idPasado) fetchCard();
  }, [idPasado]);

  if (loading) return <div className="app-canvas flex items-center justify-center text-accent font-syne">Leyendo el pasado...</div>;
  if (!cardData) return null;

  return (
    <main className="app-canvas app-main">
      <h2 className="font-syne text-accent text-2xl font-bold tracking-widest mb-8 text-glow-gold uppercase">PASADO</h2>
      <div className="relative flex items-center justify-center w-full max-w-sm mb-10">
        <FrontCard image={cardData.arcaneImage.imageSrc} altText={cardData.arcaneName} />
        <button 
          onClick={() => navigate(`/presente/${idPasado}/${idPresente}/${idFuturo}`)} 
          className="absolute -right-4 md:-right-8 text-accent text-4xl hover:text-white transition-colors cursor-pointer"
        >
          &#10095;
        </button>
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
export default Past;