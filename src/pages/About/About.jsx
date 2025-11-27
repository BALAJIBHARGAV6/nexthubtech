import { useEffect, useState } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

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

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
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

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-image fade-in-left">
            <div className="hero-image-placeholder">Your Office/Team Image</div>
          </div>
          <div className="about-hero-content fade-in-right">
            <h1 className="about-hero-title">About <span className="hero-gradient">NextHub</span></h1>
            <p className="about-hero-subtitle">Transforming Goals into Achievements Since 2017</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story-content fade-in-up">
            <h2 className="about-heading">Our <span className="gradient-text">Journey</span></h2>
            <p className="about-text">
              Established in <span className="text-highlight">2017</span> by visionary entrepreneur <span className="text-highlight">Tadiboyina Sai Krishna</span>, NextHub Technologies Pvt Ltd emerged as a pioneering force in IT education and consulting.
            </p>
            <p className="about-text">
              We specialize in providing top-notch IT services, industry-relevant training, internships, project development, placement assistance, and consulting solutions that create real impact.
            </p>
            <div className="about-stats">
              <div className="stat-card fade-in-up">
                <div className="stat-number">2017</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat-card fade-in-up">
                <div className="stat-number">2,00,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-card fade-in-up">
                <div className="stat-number">4,500+</div>
                <div className="stat-label">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision">
        <div className="about-container">
          <h2 className="about-heading centered fade-in-up">Our <span className="gradient-text">Purpose</span></h2>
          <div className="mission-vision-grid">
            <div className="mission-card fade-in-left">
              <h3>Mission</h3>
              <p>
                To collaborate and empower, striving to be recognized as a leading innovator in the education IT industry & Consultancy, delivering excellence through dedication and innovation.
              </p>
            </div>
            <div className="vision-card fade-in-right">
              <h3>Vision</h3>
              <p>
                To be a global leader as a premier provider of IT Training, IEEE Projects, Internships, Software Services, and Consultancy, offering innovative solutions and career development opportunities with dedication, reliability, and a passion for reshaping the professional landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="about-services">
        <div className="about-container">
          <h2 className="about-heading centered fade-in-up">What We <span className="gradient-text">Offer</span></h2>
          <div className="services-grid">
            <div className="service-card scale-in">
              <h3>IT Training Programs</h3>
              <p>Industry-relevant skills for tech excellence</p>
            </div>
            <div className="service-card scale-in">
              <h3>Internships</h3>
              <p>Real-world experience bridging theory and practice</p>
            </div>
            <div className="service-card scale-in">
              <h3>Project Development</h3>
              <p>Innovative solutions for complex challenges</p>
            </div>
            <div className="service-card scale-in">
              <h3>Placement Assistance</h3>
              <p>Connecting talent with opportunities</p>
            </div>
            <div className="service-card scale-in">
              <h3>Consulting Services</h3>
              <p>Strategic insights for business success</p>
            </div>
            <div className="service-card scale-in">
              <h3>Workshops & Bootcamps</h3>
              <p>Intensive learning for rapid growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery">
        <div className="about-container">
          <h2 className="about-heading centered fade-in-up">Our <span className="gradient-text">Workspace</span></h2>
          <p className="about-subheading centered fade-in-up">Explore our vibrant office culture</p>
          <div className="about-gallery-grid">
            <div className="about-gallery-item large fade-in-up">
              {/* Main featured image */}
              <div className="about-gallery-placeholder">Training Session</div>
            </div>
            <div className="about-gallery-item tall fade-in-up">
              <div className="about-gallery-placeholder">Workspace</div>
            </div>
            <div className="about-gallery-item fade-in-up">
              <div className="about-gallery-placeholder">Events</div>
            </div>
            <div className="about-gallery-item fade-in-up">
              <div className="about-gallery-placeholder">Team Meeting</div>
            </div>
            <div className="about-gallery-item fade-in-up">
              <div className="about-gallery-placeholder">Innovation Lab</div>
            </div>
            <div className="about-gallery-item tall fade-in-up">
              <div className="about-gallery-placeholder">Office Space</div>
            </div>
            <div className="about-gallery-item wide fade-in-up">
              <div className="about-gallery-placeholder">Collaboration</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
