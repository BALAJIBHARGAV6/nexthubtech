import { useEffect, useRef } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel'
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);

    const trackWidth = track.offsetWidth;
    const duration = (trackWidth / speed) * 1000;
    const directionFactor = direction === 'left' ? -1 : 1;

    let animationId;
    let startTime = null;
    let pausedAt = null;
    let isPaused = false;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      if (isPaused) return;

      const elapsed = timestamp - startTime + (pausedAt || 0);
      const progress = (elapsed % duration) / duration;
      const offset = progress * trackWidth * directionFactor;

      track.style.transform = `translateX(${offset}px)`;
      clone.style.transform = `translateX(${offset + trackWidth * directionFactor}px)`;

      animationId = requestAnimationFrame(animate);
    };

    const pause = () => {
      if (!isPaused) {
        isPaused = true;
        const currentTime = performance.now();
        pausedAt = (currentTime - startTime) % duration;
        cancelAnimationFrame(animationId);
      }
    };

    const play = () => {
      if (isPaused) {
        isPaused = false;
        startTime = performance.now() - (pausedAt || 0);
        animationId = requestAnimationFrame(animate);
      }
    };

    if (pauseOnHover) {
      container.addEventListener('mouseenter', pause);
      container.addEventListener('mouseleave', play);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (pauseOnHover) {
        container.removeEventListener('mouseenter', pause);
        container.removeEventListener('mouseleave', play);
      }
      if (clone.parentElement) {
        clone.parentElement.removeChild(clone);
      }
    };
  }, [logos, speed, direction, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`logoloop ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${fadeOut ? 'logoloop--fade' : ''}`}
      style={{
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-fadeColor': fadeOutColor
      }}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track">
        <ul ref={trackRef} className="logoloop__list">
          {logos.map((logo, index) => (
            <li key={index} className="logoloop__item">
              {logo.href ? (
                <a
                  href={logo.href}
                  className="logoloop__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt || logo.title}
                >
                  {logo.src ? (
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  ) : (
                    <span className="logoloop__node">{logo.node}</span>
                  )}
                </a>
              ) : (
                <>
                  {logo.src ? (
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  ) : (
                    <span className="logoloop__node">{logo.node}</span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoLoop;



