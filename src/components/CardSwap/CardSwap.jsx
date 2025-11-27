import { useRef, useEffect, useState } from 'react';
import './CardSwap.css';

const CardSwap = ({ 
  cards = [], 
  className = '', 
  autoSwap = true,
  swapInterval = 3000,
  enableHover = true,
  enableClick = true,
  animationDuration = 0.6,
  stackDepth = 3
}) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultCards = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description: 'Master modern web technologies including React, Node.js, and cloud platforms.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
      color: '#38bdf8'
    },
    {
      id: 2,
      title: 'Data Science & AI',
      description: 'Build intelligent systems with machine learning and artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      color: '#ec4899'
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Scale applications globally with AWS, Azure, and Google Cloud platforms.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      color: '#fbbf24'
    },
    {
      id: 4,
      title: 'DevOps Engineering',
      description: 'Streamline development workflows with CI/CD and infrastructure automation.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400',
      color: '#10b981'
    }
  ];

  const cardList = cards.length > 0 ? cards : defaultCards;

  useEffect(() => {
    if (!autoSwap || cardList.length <= 1) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, swapInterval);

    return () => clearInterval(interval);
  }, [autoSwap, swapInterval, isAnimating, cardList.length]);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration * 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration * 1000);
  };

  const handleCardClick = (index) => {
    if (!enableClick || isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration * 1000);
  };

  return (
    <div 
      ref={containerRef}
      className={`card-swap ${className}`}
      style={{
        '--animation-duration': `${animationDuration}s`,
        '--stack-depth': stackDepth
      }}
    >
      <div className="card-swap-container">
        {/* Main Card Display */}
        <div className="card-stack">
          {cardList.map((card, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % cardList.length;
            const isPrev = index === (currentIndex - 1 + cardList.length) % cardList.length;
            
            let position = 'hidden';
            if (isActive) position = 'active';
            else if (isNext) position = 'next';
            else if (isPrev) position = 'prev';
            
            return (
              <div
                key={card.id}
                className={`card-item card-${position}`}
                style={{
                  '--card-color': card.color || '#38bdf8',
                  '--card-index': index,
                  backgroundImage: card.image ? `url(${card.image})` : undefined
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-overlay" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="card-controls">
          <button 
            className="card-nav-btn card-nav-prev"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            ←
          </button>
          
          <div className="card-indicators">
            {cardList.map((_, index) => (
              <button
                key={index}
                className={`card-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                disabled={isAnimating}
              />
            ))}
          </div>
          
          <button 
            className="card-nav-btn card-nav-next"
            onClick={handleNext}
            disabled={isAnimating}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSwap;



