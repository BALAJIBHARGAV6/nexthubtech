import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardNav from '../../components/CardNav/CardNav';
import Footer from '../../components/Footer/Footer';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './LanguageTraining.css';

const LanguageTraining = () => {
  const [activeLanguage, setActiveLanguage] = useState('german');

  const navItems = [
    {
      label: "Services",
      bgColor: "#000000",
      textColor: "#fff",
      links: [
        { label: "IT Training", href: "/trainings", ariaLabel: "IT Training Programs" },
        { label: "Internships", href: "/internships", ariaLabel: "Internship Opportunities" },
        { label: "Language Training", href: "/language-training", ariaLabel: "Language Learning Programs" }
      ]
    },
    {
      label: "Events", 
      bgColor: "#38bdf8",
      textColor: "#000000",
      links: [
        { label: "Bootcamps & Hackathons", href: "/bootcamps", ariaLabel: "Bootcamps and Hackathons" },
        { label: "Workshops", href: "/workshops", ariaLabel: "Technical Workshops" },
        { label: "Projects", href: "/projects", ariaLabel: "Our Projects" }
      ]
    },
    {
      label: "Company",
      bgColor: "#ec4899", 
      textColor: "#000000",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About NextHub" },
        { label: "Our Team", href: "/team", ariaLabel: "Meet Our Team" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact Information" }
      ]
    }
  ];

  const languages = {
    german: {
      name: 'German',
      flag: '🇩🇪',
      color: '#38bdf8',
      students: '6000+',
      levels: 'A1 - C2',
      description: 'Master German language with Goethe-certified training',
      features: [
        'Goethe Institute Certified Curriculum',
        'Native German Trainers',
        'Interactive Learning Methods',
        'Cultural Immersion Programs',
        'Exam Preparation (Goethe Zertifikat)',
        'Job-Oriented Training'
      ]
    },
    french: {
      name: 'French',
      flag: '🇫🇷',
      color: '#ec4899',
      students: '3500+',
      levels: 'A1 - B2',
      description: 'Learn French with Alliance Française methodology',
      features: [
        'DELF/DALF Exam Preparation',
        'French Culture & Etiquette',
        'Business French Training',
        'Conversational Practice Sessions',
        'Native Speaker Classes',
        'International Certification'
      ]
    },
    spanish: {
      name: 'Spanish',
      flag: '🇪🇸',
      color: '#fbbf24',
      students: '2800+',
      levels: 'A1 - B2',
      description: 'Speak Spanish fluently with expert guidance',
      features: [
        'DELE Certification Prep',
        'Latin American & European Spanish',
        'Interactive Conversation Classes',
        'Cultural Activities',
        'Business Spanish',
        'Travel Spanish'
      ]
    },
    japanese: {
      name: 'Japanese',
      flag: '🇯🇵',
      color: '#10b981',
      students: '2000+',
      levels: 'N5 - N3',
      description: 'Master Japanese language and culture',
      features: [
        'JLPT Certification Preparation',
        'Hiragana, Katakana & Kanji',
        'Japanese Culture Classes',
        'Business Japanese',
        'Anime & Manga Learning',
        'Native Speaker Sessions'
      ]
    }
  };

  const currentLang = languages[activeLanguage];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="language-training-page">
      <CardNav
        logo={nexthubLogo}
        logoAlt="NextHub Technologies Logo"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#38bdf8"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Hero */}
      <section className="lang-hero">
        <div className="lang-container">
          <div className="hero-layout">
            <div className="hero-text-content">
              <div className="hero-badge fade-in-up">
                <span className="badge-icon">🌍</span>
                <span>Global Language Excellence</span>
              </div>
              
              <h1 className="lang-hero-title fade-in-up">
                Master Languages,<br />
                <span className="gradient-text">Unlock Opportunities</span>
              </h1>
              
              <p className="lang-hero-subtitle fade-in-up">
                From beginner to fluent - Expert-led training with international certification
              </p>

              <div className="hero-cta-group fade-in-up">
                <button className="hero-cta-primary">
                  <span>Start Learning</span>
                  <span className="cta-arrow">→</span>
                </button>
                <Link to="/contact" className="hero-cta-secondary">
                  <span className="play-icon">▶</span>
                  <span>Watch Demo</span>
                </Link>
              </div>

              <div className="hero-features fade-in-up">
                <div className="hero-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <span>Native Speakers</span>
                </div>
                <div className="hero-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <span>Certified Training</span>
                </div>
                <div className="hero-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <span>Flexible Schedule</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-content scale-in">
              <div className="hero-image-wrapper">
                <div className="floating-card card-1">
                  <div className="card-icon">🇩🇪</div>
                  <div className="card-text">
                    <strong>German</strong>
                    <span>6000+ Students</span>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🇫🇷</div>
                  <div className="card-text">
                    <strong>French</strong>
                    <span>3500+ Students</span>
                  </div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🇪🇸</div>
                  <div className="card-text">
                    <strong>Spanish</strong>
                    <span>2800+ Students</span>
                  </div>
                </div>
                <div className="floating-card card-4">
                  <div className="card-icon">🇯🇵</div>
                  <div className="card-text">
                    <strong>Japanese</strong>
                    <span>2000+ Students</span>
                  </div>
                </div>
                
                <div className="hero-center-graphic">
                  <div className="center-circle">
                    <div className="center-icon">🌍</div>
                    <div className="center-text">
                      <div className="center-number">12K+</div>
                      <div className="center-label">Students</div>
                    </div>
                  </div>
                  <div className="orbit-ring ring-1"></div>
                  <div className="orbit-ring ring-2"></div>
                  <div className="orbit-ring ring-3"></div>
                </div>
              </div>

              <div className="hero-stats-compact">
                <div className="compact-stat">
                  <div className="compact-stat-number">98%</div>
                  <div className="compact-stat-label">Success Rate</div>
                </div>
                <div className="compact-stat">
                  <div className="compact-stat-number">5</div>
                  <div className="compact-stat-label">Languages</div>
                </div>
                <div className="compact-stat">
                  <div className="compact-stat-number">A1-C2</div>
                  <div className="compact-stat-label">All Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Selection */}
      <section className="lang-selection">
        <div className="lang-container">
          <div className="lang-buttons fade-in-up">
            <button 
              className={`lang-btn ${activeLanguage === 'german' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('german')}
            >
              <span className="lang-flag">🇩🇪</span>
              <span>German</span>
            </button>
            <button 
              className={`lang-btn ${activeLanguage === 'french' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('french')}
            >
              <span className="lang-flag">🇫🇷</span>
              <span>French</span>
            </button>
            <button 
              className={`lang-btn ${activeLanguage === 'spanish' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('spanish')}
            >
              <span className="lang-flag">🇪🇸</span>
              <span>Spanish</span>
            </button>
            <button 
              className={`lang-btn ${activeLanguage === 'japanese' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('japanese')}
            >
              <span className="lang-flag">🇯🇵</span>
              <span>Japanese</span>
            </button>
          </div>
        </div>
      </section>

      {/* Language Details */}
      <section className="lang-details">
        <div className="lang-container">
          <div className="details-wrapper">
            <div className="details-sidebar scale-in">
              <div className="sidebar-card">
                <div className="lang-flag-display">{currentLang.flag}</div>
                <h2 className="sidebar-lang-name">{currentLang.name}</h2>
                <p className="sidebar-description">{currentLang.description}</p>
                
                <div className="sidebar-stats">
                  <div className="sidebar-stat-item">
                    <div className="sidebar-stat-icon">📚</div>
                    <div className="sidebar-stat-info">
                      <div className="sidebar-stat-value">{currentLang.students}</div>
                      <div className="sidebar-stat-label">Students Enrolled</div>
                    </div>
                  </div>
                  <div className="sidebar-stat-item">
                    <div className="sidebar-stat-icon">📊</div>
                    <div className="sidebar-stat-info">
                      <div className="sidebar-stat-value">{currentLang.levels}</div>
                      <div className="sidebar-stat-label">Proficiency Levels</div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-cta">
                  <button className="sidebar-primary-btn">
                    <span>Enroll Now</span>
                    <span className="btn-shine"></span>
                  </button>
                  <Link to="/contact" className="sidebar-secondary-btn">
                    Book Free Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="details-content scale-in">
              <div className="content-header">
                <h3 className="content-title">What You'll Master</h3>
                <p className="content-subtitle">Comprehensive curriculum designed by language experts</p>
              </div>

              <div className="features-grid-premium">
                {currentLang.features.map((feature, index) => (
                  <div key={index} className="premium-feature-card">
                    <div className="feature-card-header">
                      <div className="feature-number">{(index + 1).toString().padStart(2, '0')}</div>
                      <div className="feature-check">✓</div>
                    </div>
                    <div className="feature-card-content">
                      <h4>{feature}</h4>
                      <div className="feature-card-shine"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="curriculum-highlights">
                <h4 className="highlights-title">Program Highlights</h4>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon">⏱️</div>
                    <div className="highlight-text">
                      <strong>Flexible Schedule</strong>
                      <span>Weekend & Evening batches</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">👨‍🏫</div>
                    <div className="highlight-text">
                      <strong>Native Speakers</strong>
                      <span>Learn from experts</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🎓</div>
                    <div className="highlight-text">
                      <strong>Certification</strong>
                      <span>Internationally recognized</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">💼</div>
                    <div className="highlight-text">
                      <strong>Career Support</strong>
                      <span>Job placement assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Languages Overview */}
      <section className="all-languages">
        <div className="lang-container">
          <h2 className="section-title-lang fade-in-up">All Language Programs</h2>
          <div className="all-lang-grid">
            {Object.entries(languages).map(([key, lang], index) => (
              <div key={key} className="lang-overview-card scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="overview-flag">{lang.flag}</span>
                <h3>{lang.name}</h3>
                <p className="overview-students">{lang.students} enrolled</p>
                <p className="overview-levels">{lang.levels}</p>
                <button 
                  className="overview-btn"
                  onClick={() => {
                    setActiveLanguage(key);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LanguageTraining;
