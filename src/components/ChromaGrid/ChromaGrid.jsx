import { useRef, useEffect, useState } from 'react';
import './ChromaGrid.css';

const ChromaGrid = ({ 
  items = [], 
  className = '', 
  spotlightRadius = 200,
  glowIntensity = 0.8,
  transitionSpeed = 0.1,
  enableSpotlight = true,
  enableGlow = true,
  enableHover = true
}) => {
  const gridRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return;
      
      const rect = gridRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const defaultItems = [
    { id: 1, title: 'Full-Stack Development', description: 'Master modern web technologies', color: '#38bdf8' },
    { id: 2, title: 'Data Science & AI', description: 'Build intelligent systems', color: '#ec4899' },
    { id: 3, title: 'Cloud Computing', description: 'Scale applications globally', color: '#fbbf24' },
    { id: 4, title: 'DevOps Engineering', description: 'Streamline development workflows', color: '#10b981' },
    { id: 5, title: 'Mobile Development', description: 'Create cross-platform apps', color: '#8b5cf6' },
    { id: 6, title: 'Cybersecurity', description: 'Protect digital assets', color: '#ef4444' }
  ];

  const gridItems = items.length > 0 ? items : defaultItems;

  return (
    <div 
      ref={gridRef}
      className={`chroma-grid ${className}`}
      style={{
        '--spotlight-radius': `${spotlightRadius}px`,
        '--glow-intensity': glowIntensity,
        '--transition-speed': `${transitionSpeed}s`
      }}
    >
      {enableSpotlight && (
        <div 
          className="chroma-spotlight"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: `${spotlightRadius * 2}px`,
            height: `${spotlightRadius * 2}px`,
            transform: `translate(-50%, -50%)`
          }}
        />
      )}
      
      <div className="chroma-grid-container">
        {gridItems.map((item, index) => (
          <div
            key={item.id || index}
            className={`chroma-item ${hoveredItem === index ? 'hovered' : ''}`}
            style={{
              '--item-color': item.color || '#38bdf8',
              '--item-index': index
            }}
            onMouseEnter={() => enableHover && setHoveredItem(index)}
            onMouseLeave={() => enableHover && setHoveredItem(null)}
          >
            <div className="chroma-item-content">
              <h3 className="chroma-item-title">{item.title}</h3>
              <p className="chroma-item-description">{item.description}</p>
              {item.icon && (
                <div className="chroma-item-icon">{item.icon}</div>
              )}
            </div>
            
            {enableGlow && (
              <div className="chroma-glow" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChromaGrid;



