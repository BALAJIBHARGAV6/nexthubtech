import { useState } from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../../components/GradientText/GradientText';
import CountUp from '../../components/CountUp/CountUp';
import TextType from '../../components/TextType/TextType';
import './LanguageTraining.css';

const LanguageTraining = () => {
  const [activeLanguage, setActiveLanguage] = useState('german');

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

  return (
    <div className="language-training-page">
      {/* Hero */}
      <section className="lang-hero">
        <div className="container">
          <h1>
            <GradientText
              colors={["#38bdf8", "#ec4899", "#fbbf24", "#10b981"]}
              animationSpeed={5}
            >
              Language Training
            </GradientText>
          </h1>
          <div className="lang-subtitle">
            <TextType 
              text={[
                "Open Doors to Global Opportunities",
                "Learn. Practice. Master.",
                "Your Passport to the World"
              ]}
              typingSpeed={50}
              pauseDuration={2000}
            />
          </div>

          <div className="lang-stats">
            <div className="lang-stat">
              <div className="stat-num"><CountUp to={12000} separator="," />+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="lang-stat">
              <div className="stat-num"><CountUp to={5} /></div>
              <div className="stat-label">Languages Offered</div>
            </div>
            <div className="lang-stat">
              <div className="stat-num"><CountUp to={98} />%</div>
              <div className="stat-label">Certification Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Selection */}
      <section className="lang-selection">
        <div className="container">
          <div className="lang-buttons">
            <button 
              className={`lang-btn btn-sky ${activeLanguage === 'german' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('german')}
            >
              <span className="lang-flag">🇩🇪</span>
              <span>German</span>
            </button>
            <button 
              className={`lang-btn btn-pink ${activeLanguage === 'french' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('french')}
            >
              <span className="lang-flag">🇫🇷</span>
              <span>French</span>
            </button>
            <button 
              className={`lang-btn btn-yellow ${activeLanguage === 'spanish' ? 'active' : ''}`}
              onClick={() => setActiveLanguage('spanish')}
            >
              <span className="lang-flag">🇪🇸</span>
              <span>Spanish</span>
            </button>
            <button 
              className={`lang-btn btn-green ${activeLanguage === 'japanese' ? 'active' : ''}`}
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
        <div className="container">
          <div className="lang-header">
            <div className="lang-title-section">
              <span className="lang-flag-large">{currentLang.flag}</span>
              <h2>{currentLang.name} Language Training</h2>
            </div>
            <p className="lang-desc">{currentLang.description}</p>
            
            <div className="lang-info-cards">
              <div className="info-card">
                <div className="info-label">Students</div>
                <div className="info-value">{currentLang.students}</div>
              </div>
              <div className="info-card">
                <div className="info-label">Levels</div>
                <div className="info-value">{currentLang.levels}</div>
              </div>
            </div>
          </div>

          <div className="features-list">
            <h3>What You'll Learn</h3>
            <div className="features-grid-lang">
              {currentLang.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-bullet"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lang-cta-section">
            <button className="btn btn-primary btn-large">Enroll Now</button>
            <Link to="/contact" className="btn btn-outline btn-large">Book Free Demo</Link>
          </div>
        </div>
      </section>

      {/* All Languages Overview */}
      <section className="all-languages">
        <div className="container">
          <h2 className="section-title text-center">All Language Programs</h2>
          <div className="all-lang-grid">
            {Object.entries(languages).map(([key, lang]) => (
              <div key={key} className="lang-overview-card">
                <span className="overview-flag">{lang.flag}</span>
                <h3>{lang.name}</h3>
                <p className="overview-students">{lang.students} enrolled</p>
                <p className="overview-levels">{lang.levels}</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveLanguage(key)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageTraining;
