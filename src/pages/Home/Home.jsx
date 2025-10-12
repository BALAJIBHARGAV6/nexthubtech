import { useRef } from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../../components/GradientText/GradientText';
import CountUp from '../../components/CountUp/CountUp';
import CircularGallery from '../../components/CircularGallery/CircularGallery';
import PixelBlast from '../../components/PixelBlast/PixelBlast';
import MagicBento from '../../components/MagicBento/MagicBento';
import ScrollVelocity from '../../components/ScrollVelocity/ScrollVelocity';
import TextType from '../../components/TextType/TextType';
import CardNav from '../../components/CardNav/CardNav';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);

  const navItems = [
    {
      label: "Services",
      bgColor: "#000000",
      textColor: "#fff",
      links: [
        { label: "IT Training", href: "/trainings", ariaLabel: "IT Training Programs" },
        { label: "Internships", href: "/internships", ariaLabel: "Internship Opportunities" },
        { label: "Bootcamps", href: "/bootcamps", ariaLabel: "Intensive Bootcamps" }
      ]
    },
    {
      label: "Programs", 
      bgColor: "#38bdf8",
      textColor: "#000000",
      links: [
        { label: "Language Training", href: "/language-training", ariaLabel: "Language Learning Programs" },
        { label: "Hackathons", href: "/hackathons", ariaLabel: "Coding Competitions" },
        { label: "Workshops", href: "/workshops", ariaLabel: "Technical Workshops" }
      ]
    },
    {
      label: "Company",
      bgColor: "#ec4899", 
      textColor: "#000000",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About NextHub" },
        { label: "Projects", href: "/projects", ariaLabel: "Our Projects" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact Information" }
      ]
    }
  ];

  const partnerCompanies = [
    'Microsoft', 'Google', 'AWS', 'IBM', 'Oracle', 'SAP', 
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 
    'Capgemini', 'Tech Mahindra', 'HCL', 'Dell'
  ];

  return (
    <div className="home-page">
      {/* Professional Card Navigation */}
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

      {/* Hero Section with Pixel Blast Background */}
      <section className="hero-section" ref={heroRef}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#38bdf8"
          patternScale={2.0}
          patternDensity={0.8}
          pixelSizeJitter={0.3}
          enableRipples={true}
          rippleSpeed={0.2}
          rippleThickness={0.12}
          rippleIntensityScale={1.0}
          liquid={true}
          liquidStrength={0.06}
          liquidRadius={1.5}
          liquidWobbleSpeed={3.0}
          speed={0.4}
          edgeFade={0.12}
          transparent={false}
          antialias={false}
          showInstructions={false}
          enhancedVisibility={false}
        />
        
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="hero-title-nexthub">NextHub</span>{' '}
            <span className="hero-title-technologies">Technologies</span>
          </h1>

          <p className="hero-tagline">
            <TextType 
              text={[
                "Shape Your Future with Technology & Languages",
                "Transform Your Career Through Innovation"
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="hero-texttype"
              textColors={['#555', '#000000']}
              loop={true}
            />
          </p>

          <div className="hero-buttons">
            <Link to="/trainings" className="btn btn-primary btn-hero">
              Explore Programs
            </Link>
            <Link to="/internships" className="btn btn-pink btn-hero">
              Get Internship
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Unique CountUp Design */}
      <section className="stats-showcase-section">
        <div className="container">
          <div className="stats-grid-modern">
            <div className="modern-stat-card card-sky">
              <div className="stat-modern-number">
                <CountUp to={200000} separator="," duration={3} />+
              </div>
              <div className="stat-modern-label">Professionals Trained</div>
              <div className="stat-description">Empowering careers worldwide</div>
            </div>

            <div className="modern-stat-card card-pink">
              <div className="stat-modern-number">
                <CountUp to={4500} separator="," duration={3} />+
              </div>
              <div className="stat-modern-label">Partner Organizations</div>
              <div className="stat-description">Building strong connections</div>
            </div>

            <div className="modern-stat-card card-yellow">
              <div className="stat-modern-number">
                <CountUp to={100000} separator="," duration={3} />+
              </div>
              <div className="stat-modern-label">Internships Provided</div>
              <div className="stat-description">Real-world experience</div>
            </div>

            <div className="modern-stat-card card-green">
              <div className="stat-modern-number">
                <CountUp to={30000} separator="," duration={3} />+
              </div>
              <div className="stat-modern-label">Successful Placements</div>
              <div className="stat-description">Building tech careers</div>
            </div>
          </div>
        </div>
      </section>

          {/* ScrollVelocity Banner - 3 Smooth Infinite Lines */}
          <section className="scroll-velocity-section">
            <ScrollVelocity 
              texts={[
                'NextHub Technologies • Empowering Tomorrow\'s Innovations • Leading IT Training Since 2017 • 200,000+ Professionals Trained',
                'Transform Your Career Today • Build Amazing Projects • Learn Cutting-Edge Skills • Join 4,500+ Partner Companies',
                'Guaranteed Internships • Expert Mentorship • Global Opportunities • 30,000+ Successful Placements'
              ]}
              velocity={50}
              className="velocity-text"
              numCopies={20}
              damping={60}
              stiffness={400}
              velocityMapping={{ input: [0, 1000], output: [0, 3] }}
            />
          </section>

      {/* Magic Bento Section - Interactive Showcase */}
      <section className="magic-bento-section">
        <div className="container">
          <h2 className="section-title text-center text-white">
            Interactive <span className="text-sky">Showcase</span>
          </h2>
          <p className="section-subtitle text-center text-white-muted">Explore our innovative features</p>
          <div className="bento-wrapper">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="56, 189, 248"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Why Choose NextHub */}
      <section className="features-modern-section">
        <div className="container">
          <h2 className="section-title text-center">
            Why Choose <GradientText colors={['#38bdf8', '#ec4899']}>NextHub</GradientText>
          </h2>
          <p className="section-subtitle text-center">Everything you need to launch your tech career</p>

          <div className="features-grid-modern">
            <div className="feature-card-modern feature-card-1">
              <div className="feature-number">01</div>
              <h3>Expert Training</h3>
              <p>Learn from industry professionals with real-world experience and cutting-edge curriculum</p>
              <div className="feature-highlight"></div>
            </div>

            <div className="feature-card-modern feature-card-2">
              <div className="feature-number">02</div>
              <h3>Live Projects</h3>
              <p>Work on actual company projects and build an impressive professional portfolio</p>
              <div className="feature-highlight"></div>
            </div>

            <div className="feature-card-modern feature-card-3">
              <div className="feature-number">03</div>
              <h3>Guaranteed Internships</h3>
              <p>100% internship placement with top tech companies across the globe</p>
              <div className="feature-highlight"></div>
            </div>

            <div className="feature-card-modern feature-card-4">
              <div className="feature-number">04</div>
              <h3>Career Support</h3>
              <p>Personalized mentorship and dedicated job placement assistance</p>
              <div className="feature-highlight"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title text-center">
            Our <span className="text-sky">Success Stories</span>
          </h2>
          <p className="section-subtitle text-center">Real transformations, Real people</p>
        </div>
        <div style={{ height: '450px', position: 'relative' }}>
          <CircularGallery
            bend={2}
            textColor="#38bdf8"
            borderRadius={0.05}
            scrollSpeed={1.5}
            scrollEase={0.08}
          />
        </div>
      </section>

      {/* Services Grid - Better Card Design */}
      <section className="services-modern-section bg-soft">
        <div className="container">
          <h2 className="section-title text-center">
            <span className="services-gradient-text">Our Services</span>
          </h2>
          <p className="section-subtitle text-center">Comprehensive solutions for your tech career</p>

          <div className="services-grid-modern">
            <Link to="/trainings" className="service-card-modern service-modern-1">
              <h3>IT Training</h3>
              <p>Full-stack, Data Science, AI/ML & Cloud Computing</p>
              <div className="service-arrow">→</div>
            </Link>

            <Link to="/internships" className="service-card-modern service-modern-2">
              <h3>Internships</h3>
              <p>100% guaranteed industry internships</p>
              <div className="service-arrow">→</div>
            </Link>

            <Link to="/bootcamps" className="service-card-modern service-modern-3">
              <h3>Bootcamps</h3>
              <p>Intensive programs for rapid skill development</p>
              <div className="service-arrow">→</div>
            </Link>

            <Link to="/language-training" className="service-card-modern service-modern-4">
              <h3>Languages</h3>
              <p>German, French, Spanish, Chinese, Japanese</p>
              <div className="service-arrow">→</div>
            </Link>

            <Link to="/hackathons" className="service-card-modern service-modern-5">
              <h3>Hackathons</h3>
              <p>Compete and showcase your skills</p>
              <div className="service-arrow">→</div>
            </Link>

            <Link to="/services" className="service-card-modern service-modern-6">
              <h3>Placements</h3>
              <p>30,000+ successful placements</p>
              <div className="service-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title text-center">
            Trusted by <span className="text-sky">Industry Leaders</span>
          </h2>
          <div className="partners-scroll">
            <div className="partners-track">
              {partnerCompanies.map((company, index) => (
                <div key={index} className="partner-item">{company}</div>
              ))}
              {partnerCompanies.map((company, index) => (
                <div key={`copy-${index}`} className="partner-item">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
          <section className="cta-section-gradient">
            {/* Animated middle orb */}
            <div className="cta-middle-orb"></div>
            
            <div className="container text-center">
              <h2 className="cta-gradient-title">
                Ready to <span className="gradient-transform">Transform</span> Your Career?
              </h2>
              <p className="cta-gradient-subtitle">Join thousands of students who've already started their journey to success</p>
              <div className="cta-buttons-gradient">
                <Link to="/contact" className="btn btn-cta-primary">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn btn-cta-outline">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </section>
    </div>
  );
};

export default Home;
