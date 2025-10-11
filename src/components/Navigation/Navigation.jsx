import { useState } from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../GradientText/GradientText';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Languages', href: '/language-training' },
    { label: 'Trainings', href: '/trainings' },
    { label: 'Internships', href: '/internships' },
    { label: 'Projects', href: '/projects' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Bootcamps', href: '/bootcamps' },
    { label: 'Hackathons', href: '/hackathons' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <GradientText
              colors={['#38bdf8', '#ec4899', '#10b981']}
              animationSpeed={4}
              showBorder={false}
              className="logo-gradient"
            >
              NextHub
            </GradientText>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link 
                    to={item.href} 
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Overlay for mobile */}
          {isMenuOpen && (
            <div className="nav-overlay" onClick={closeMenu}></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
