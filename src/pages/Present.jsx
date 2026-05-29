import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Services
import { getCardById } from '../services/tarotApiService';

// Components
import FrontCard from '../components/FrontCard';
import CardInfo from '../components/CardInfo';
import Button from '../components/Button';

const Present = () => {
  const { idPasado, idPresente, idFuturo } = useParams(); 
  const navigate = useNavigate();
  
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      try {
        const data = await getCardById(idPresente);
        setCardData(data);
      } catch (error) {
        console.error("Error al revelar el presente:", error);
      } finally {
        setLoading(false);
      }
    };

    if (idPresente) fetchCard();
  }, [idPresente]);

  // Pantalla de carga integrada con la estructura global
  if (loading) {
    return (
      <div className="app-container">
        <div className="app-canvas flex items-center justify-center">
          <div className="text-accent font-syne text-xl tracking-wider animate-pulse">
            🔮 Revelando el presente...
          </div>
        </div>
      </div>
    );
  }

  if (!cardData) return null;

  return (
    <div className="app-container">
      <div className="app-canvas">
        
        <main className="app-main flex-1 justify-start py-10">
          {/* Título de la sección */}
          <h2 className="font-syne text-accent text-2xl font-bold tracking-widest mb-8 text-glow-gold uppercase">
            PRESENTE
          </h2>

          {/* Visualizador de Carta con Navegación Bidireccional */}
          <section className="relative flex items-center justify-center w-full max-w-sm mb-10">
            {/* Botón hacia el Pasado */}
            <button 
              onClick={() => navigate(`/pasado/${idPasado}/${idPresente}/${idFuturo}`)} 
              className="absolute -left-4 md:-left-8 text-accent text-4xl hover:text-white transition-colors cursor-pointer"
              aria-label="Carta anterior"
            >
              &#10094;
            </button>

            <FrontCard 
              image={cardData.arcaneImage.imageSrc} 
              altText={cardData.arcaneName} 
            />

            {/* Botón hacia el Futuro */}
            <button 
              onClick={() => navigate(`/futuro/${idPasado}/${idPresente}/${idFuturo}`)} 
              className="absolute -right-4 md:-right-8 text-accent text-4xl hover:text-white transition-colors cursor-pointer"
              aria-label="Siguiente carta"
            >
              &#10095;
            </button>
          </section>

          {/* Información Detallada del Arcano */}
          <section className="w-full max-w-4xl mx-auto mb-8">
            <CardInfo 
              cardNumber={cardData.arcaneNumber}
              meaning={cardData.arcaneDescription}
              stemName={cardData.goddessName}
              stemImage={cardData.goddessImage.imageSrc}
              stemBio={cardData.goddessDescription}
            />
          </section>

          {/* Acciones de Navegación de Retorno */}
          <section className="mb-8">
            <Button variant="outline" size="lg" onClick={() => navigate('/')}>
              VOLVER A LA TIRADA
            </Button>
          </section>
        </main>

      </div>
    </div>
  );
};

export default Present;