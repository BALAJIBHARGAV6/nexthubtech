import { useEffect, useRef } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 60,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  fadeOut = false,
  fadeOutColor,
  ariaLabel = 'Partner logos'
}) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || logos.length === 0) return;

    let position = 0;
    const pixelsPerSecond = speed;

    const animate = () => {
      position -= pixelsPerSecond / 60;
      
      // Get the width of one set of logos
      const itemWidth = track.scrollWidth / 2;
      
      // Reset position seamlessly when first set scrolls out
      if (Math.abs(position) >= itemWidth) {
        position = 0;
      }
      
      track.style.transform = `translate3d(${position}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos, speed]);

  return (
    <div
      className={`logoloop ${fadeOut ? 'logoloop--fade' : ''}`}
      style={{
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        {logos.map((logo, index) => (
          <div key={`original-${index}`} className="logoloop__item">
            {logo.src && <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} />}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="logoloop__item">
            {logo.src && <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;



