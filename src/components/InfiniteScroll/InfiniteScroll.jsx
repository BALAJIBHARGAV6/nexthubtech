import { useRef, useEffect, useState } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = ({ 
  items = [], 
  className = '', 
  speed = 1,
  direction = 'up',
  pauseOnHover = true,
  itemHeight = 60,
  visibleItems = 5,
  enableFade = true,
  fadeSize = 50
}) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const defaultItems = [
    { id: 1, text: 'Full-Stack Development', category: 'Training' },
    { id: 2, text: 'Data Science & AI/ML', category: 'Training' },
    { id: 3, text: 'Cloud Computing (AWS/Azure)', category: 'Training' },
    { id: 4, text: 'DevOps Engineering', category: 'Training' },
    { id: 5, text: 'Mobile App Development', category: 'Training' },
    { id: 6, text: 'Cybersecurity', category: 'Training' },
    { id: 7, text: 'German Language Training', category: 'Language' },
    { id: 8, text: 'French Language Training', category: 'Language' },
    { id: 9, text: 'Spanish Language Training', category: 'Language' },
    { id: 10, text: 'Japanese Language Training', category: 'Language' },
    { id: 11, text: 'Software Development Internship', category: 'Internship' },
    { id: 12, text: 'Data Analytics Internship', category: 'Internship' },
    { id: 13, text: 'UI/UX Design Internship', category: 'Internship' },
    { id: 14, text: 'Digital Marketing Internship', category: 'Internship' },
    { id: 15, text: 'MERN Stack Bootcamp', category: 'Bootcamp' },
    { id: 16, text: 'AI/ML Intensive Bootcamp', category: 'Bootcamp' },
    { id: 17, text: 'Blockchain Bootcamp', category: 'Bootcamp' },
    { id: 18, text: 'React Hackathon 2024', category: 'Hackathon' },
    { id: 19, text: 'AI Innovation Challenge', category: 'Hackathon' },
    { id: 20, text: 'Mobile App Competition', category: 'Hackathon' }
  ];

  const itemList = items.length > 0 ? items : defaultItems;
  const duplicatedItems = [...itemList, ...itemList];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    let lastTime = 0;

    const animate = (currentTime) => {
      if (!isPaused && !pauseOnHover) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        setScrollPosition(prev => {
          const maxScroll = itemList.length * itemHeight;
          const newPosition = prev + (speed * deltaTime * 0.1);
          return newPosition >= maxScroll ? 0 : newPosition;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, pauseOnHover, speed, itemList.length, itemHeight]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const getItemStyle = (index) => {
    const baseOffset = scrollPosition;
    const itemOffset = index * itemHeight;
    const totalOffset = baseOffset + itemOffset;
    
    return {
      transform: `translateY(${direction === 'up' ? -totalOffset : totalOffset}px)`,
      transition: isPaused ? 'transform 0.3s ease' : 'none'
    };
  };

  return (
    <div 
      ref={containerRef}
      className={`infinite-scroll ${className}`}
      style={{
        height: `${visibleItems * itemHeight}px`,
        '--item-height': `${itemHeight}px`,
        '--fade-size': `${fadeSize}px`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {enableFade && (
        <>
          <div className="scroll-fade scroll-fade-top" />
          <div className="scroll-fade scroll-fade-bottom" />
        </>
      )}
      
      <div 
        ref={scrollRef}
        className="scroll-container"
        style={{
          height: `${duplicatedItems.length * itemHeight}px`
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="scroll-item"
            style={getItemStyle(index)}
          >
            <div className="item-content">
              <span className="item-text">{item.text}</span>
              <span className="item-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;



