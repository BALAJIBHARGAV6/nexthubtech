import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-section">
            <div className="footer-logo-box">
              <span className="footer-logo-nh">NH</span>
            </div>
            <h3 className="footer-brand-title">
              <span className="brand-nexthub">NextHub</span>
              <br />
              <span className="brand-technologies">Technologies</span>
            </h3>
            <p className="footer-tagline">
              Empowering Tomorrow's Innovations, Where Technology Meets Imagination. Leading IT training, internship, and consultancy firm since 2017.
            </p>
            <div className="footer-stats-mini">
              <div className="mini-stat">
                <span className="mini-stat-number">200,000+</span>
                <span className="mini-stat-label">Trained Professionals</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">4,500+</span>
                <span className="mini-stat-label">Partner Organizations</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">IG</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-column-title footer-title-services">Our Services</h4>
              <ul className="footer-links-list">
                <li><Link to="/trainings">IT Training</Link></li>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/language-training">Language Training</Link></li>
                <li><Link to="/workshops">Workshops</Link></li>
                <li><Link to="/bootcamps">Bootcamps</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title footer-title-language">Language Training</h4>
              <ul className="footer-links-list">
                <li><Link to="/language-training#german">German Training</Link></li>
                <li><Link to="/language-training#french">French Training</Link></li>
                <li><Link to="/language-training#spanish">Spanish Training</Link></li>
                <li><Link to="/language-training#chinese">Chinese Training</Link></li>
                <li><Link to="/language-training#japanese">Japanese Training</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title footer-title-contact">Contact Us</h4>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <p>NextHub Technologies Pvt Ltd<br/>Hyderabad, Telangana, India</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <p>+91 9876543210</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <p>info@nexthub.com</p>
                </div>
                <Link to="/contact" className="btn-contact-footer">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated with NextHub</h3>
            <p className="newsletter-subtitle">Get the latest updates on courses, internships, and placement opportunities</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} NextHub Technologies Private Limited. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
            <div className="footer-founder">
              <p>Founded by <Link to="/" className="founder-link">Tadiboyina Sai Krishna</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
