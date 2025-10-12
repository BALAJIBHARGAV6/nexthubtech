import { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = ({ 
  text, 
  speed = 100, 
  delay = 1000, 
  className = '',
  showCursor = true,
  cursorChar = '|',
  loop = false,
  deleteSpeed = 50
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex(0);
          if (!loop) return;
        }
      } else {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          if (loop) {
            setIsWaiting(true);
          }
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, isWaiting, text, speed, deleteSpeed, loop, displayText.length]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      {showCursor && <span className="cursor">{cursorChar}</span>}
    </span>
  );
};

export default TypeWriter;
