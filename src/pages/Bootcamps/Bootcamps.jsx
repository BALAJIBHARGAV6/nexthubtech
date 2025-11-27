import { useEffect } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import Footer from '../../components/Footer/Footer';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Bootcamps.css';

const Bootcamps = () => {
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

  const heroImages = [
    { emoji: '💻', label: 'Coding', color: '#3b82f6' },
    { emoji: '🎓', label: 'Learning', color: '#8b5cf6' },
    { emoji: '👥', label: 'Team Work', color: '#ec4899' },
    { emoji: '🚀', label: 'Innovation', color: '#f59e0b' },
    { emoji: '🏆', label: 'Achievement', color: '#10b981' },
    { emoji: '⚡', label: 'Fast Pace', color: '#06b6d4' },
    { emoji: '🎯', label: 'Goal Oriented', color: '#ef4444' },
    { emoji: '💡', label: 'Ideas', color: '#eab308' }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Upskilling',
      description: 'Learn cutting-edge technologies and stay ahead in the tech industry'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with industry professionals, mentors, and like-minded peers'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Transform creative ideas into working solutions with latest tech stacks'
    },
    {
      icon: '🎯',
      title: 'Problem Solving Attitude',
      description: 'Develop critical thinking and analytical skills through real challenges'
    },
    {
      icon: '👥',
      title: 'Team Spirit',
      description: 'Collaborate effectively and build products with diverse teams'
    },
    {
      icon: '🏆',
      title: 'Entrepreneurship',
      description: 'Turn innovative ideas into viable business solutions'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .scale-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bootcamps-page-simple">
      <CardNav 
        logo={nexthubLogo}
        logoAlt="NextHub Technologies Logo"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
      />
      
      {/* Hero Section with Multiple Real Images */}
      <section className="bootcamp-hero-simple">
        <div className="bootcamp-container">
          <h1 className="hero-title-simple fade-in-up">
            Hackathon & Bootcamp
          </h1>
          
          <p className="hero-subtitle-simple fade-in-up">
            Participate in various bootcamps, hackathons and upskill yourself.
          </p>

          {/* Multiple Image Placeholders Grid */}
          <div className="hero-images-grid-real">
            {heroImages.map((img, index) => (
              <div 
                key={index}
                className="real-image-card scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: img.color + '15'
                }}
              >
                <div className="image-placeholder">
                  <span className="image-icon">{img.emoji}</span>
                  <div className="image-overlay">{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery-section">
        <div className="bootcamp-container">
          <div className="gallery-images-row">
            <div className="gallery-image-large fade-in-up">
              <div className="gallery-img-placeholder">
                <span>🎓</span>
                <p>Team Collaboration</p>
              </div>
            </div>
            <div className="gallery-images-column">
              <div className="gallery-image-small fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="gallery-img-placeholder">
                  <span>💻</span>
                  <p>Coding</p>
                </div>
              </div>
              <div className="gallery-image-small fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="gallery-img-placeholder">
                  <span>🚀</span>
                  <p>Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section with Side Images */}
      <section className="why-section-simple">
        <div className="bootcamp-container">
          <div className="why-content-wrapper">
            {/* Left Side Images */}
            <div className="why-side-images">
              <div className="side-image-box fade-in-up">
                <div className="side-img-placeholder">
                  <span>🎯</span>
                  <p>Focus & Goals</p>
                </div>
              </div>
              <div className="side-image-box fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="side-img-placeholder">
                  <span>🏆</span>
                  <p>Winning Spirit</p>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="why-center-content">
              <h2 className="section-title-simple fade-in-up">
                Why are hackathons important?
              </h2>
              
              <p className="section-lead-text fade-in-up">
                Hackathons boosts networking opportunities, team spirit, entrepreneurship, innovation & creativity.
              </p>

              <div className="quote-box-simple fade-in-up">
                <p className="quote-text-simple">
                  With short deadlines and ambitious ideas, hackathons teach you how to <strong>code fast</strong> and, more importantly, <strong>think fast</strong>. If you're wondering why it's that important, the reason is that you'll know your limits much better and will be able to push them even further after the hackathon.
                </p>
              </div>
            </div>

            {/* Right Side Images */}
            <div className="why-side-images">
              <div className="side-image-box fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="side-img-placeholder">
                  <span>⚡</span>
                  <p>Fast Paced</p>
                </div>
              </div>
              <div className="side-image-box fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="side-img-placeholder">
                  <span>🤝</span>
                  <p>Networking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Images Row */}
      <section className="images-row-section">
        <div className="bootcamp-container">
          <div className="images-row-grid">
            <div className="row-image-item scale-in">
              <div className="row-img-placeholder">
                <span>👨‍💻</span>
                <p>Developers</p>
              </div>
            </div>
            <div className="row-image-item scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="row-img-placeholder">
                <span>🎨</span>
                <p>Designers</p>
              </div>
            </div>
            <div className="row-image-item scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="row-img-placeholder">
                <span>📊</span>
                <p>Analytics</p>
              </div>
            </div>
            <div className="row-image-item scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="row-img-placeholder">
                <span>🔧</span>
                <p>Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Images */}
      <section className="benefits-section-simple">
        <div className="bootcamp-container">
          <div className="benefits-grid-with-images">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card-with-image scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-image-top">
                  <div className="benefit-img-placeholder">
                    <span className="benefit-img-icon">{benefit.icon}</span>
                  </div>
                </div>
                <div className="benefit-content-bottom">
                  <h3 className="benefit-title-simple">{benefit.title}</h3>
                  <p className="benefit-desc-simple">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image Showcase */}
      <section className="final-showcase-section">
        <div className="bootcamp-container">
          <div className="showcase-grid">
            <div className="showcase-image-wide fade-in-up">
              <div className="showcase-img-placeholder">
                <span>🎉</span>
                <p>Event Celebrations</p>
              </div>
            </div>
            <div className="showcase-image-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="showcase-img-placeholder">
                <span>💡</span>
                <p>Ideas & Innovation</p>
              </div>
            </div>
            <div className="showcase-image-medium fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="showcase-img-placeholder">
                <span>🌟</span>
                <p>Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bootcamps;



