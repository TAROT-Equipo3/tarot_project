import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Services
import { getCardById } from '../services/tarotApiService';

// Components
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

  // Pantalla de carga integrada con la estructura global
  if (loading) {
    return (
      <div className="app-container">
        <div className="app-canvas flex items-center justify-center">
          <div className="text-accent font-syne text-xl tracking-wider animate-pulse">
            🔮 Descifrando el futuro...
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
            FUTURO
          </h2>

          {/* Visualizador de Carta con Navegación hacia el Presente */}
          <section className="relative flex items-center justify-center w-full max-w-sm mb-10">
            {/* Botón hacia el Presente */}
            <button 
              onClick={() => navigate(`/presente/${idPasado}/${idPresente}/${idFuturo}`)} 
              className="absolute -left-4 md:-left-8 text-accent text-4xl hover:text-white transition-colors cursor-pointer"
              aria-label="Carta anterior"
            >
              &#10094;
            </button>

            <FrontCard 
              image={cardData.arcaneImage.imageSrc} 
              altText={cardData.arcaneName} 
            />
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

export default Future;