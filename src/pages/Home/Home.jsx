import { useRef } from 'react';
import { Link } from 'react-router-dom';
import CircularGallery from '../../components/CircularGallery/CircularGallery';
import PixelBlast from '../../components/PixelBlast/PixelBlast';
import MagicBento from '../../components/MagicBento/MagicBento';
import ScrollVelocity from '../../components/ScrollVelocity/ScrollVelocity';
import TextType from '../../components/TextType/TextType';
import CardNav from '../../components/CardNav/CardNav';
import LogoLoop from '../../components/LogoLoop/LogoLoop';
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

  const companyLogos = [
    { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft", href: "https://www.microsoft.com" },
    { src: "https://logo.clearbit.com/google.com", alt: "Google", href: "https://www.google.com" },
    { src: "https://logo.clearbit.com/aws.amazon.com", alt: "AWS", href: "https://aws.amazon.com" },
    { src: "https://logo.clearbit.com/oracle.com", alt: "Oracle", href: "https://www.oracle.com" },
    { src: "https://logo.clearbit.com/sap.com", alt: "SAP", href: "https://www.sap.com" },
    { src: "https://logo.clearbit.com/tcs.com", alt: "TCS", href: "https://www.tcs.com" },
    { src: "https://logo.clearbit.com/infosys.com", alt: "Infosys", href: "https://www.infosys.com" },
    { src: "https://logo.clearbit.com/wipro.com", alt: "Wipro", href: "https://www.wipro.com" },
    { src: "https://logo.clearbit.com/cognizant.com", alt: "Cognizant", href: "https://www.cognizant.com" },
    { src: "https://logo.clearbit.com/accenture.com", alt: "Accenture", href: "https://www.accenture.com" },
    { src: "https://logo.clearbit.com/capgemini.com", alt: "Capgemini", href: "https://www.capgemini.com" },
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
          pixelSize={8}
          color="#38bdf8"
          patternScale={2.5}
          patternDensity={0.8}
          pixelSizeJitter={0.35}
          enableRipples={true}
          rippleSpeed={0.25}
          rippleThickness={0.15}
          rippleIntensityScale={1.2}
          liquid={true}
          liquidStrength={0.07}
          liquidRadius={1.6}
          liquidWobbleSpeed={3}
          speed={0.4}
          edgeFade={0.15}
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

          <div className="hero-tagline">
            <span className="hero-tagline-desktop">
              <TextType 
                text={[
                  "Shape Your Future with Technology & Languages",
                  "Transform Your Career Through Innovation"
                ]}
                typingSpeed={100}
                deletingSpeed={60}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="|"
                className="hero-texttype"
                textColors={['#000000', '#000000']}
                loop={true}
                cursorBlinkDuration={0.5}
              />
            </span>
            <span className="hero-tagline-mobile">
              Shape Your Future with<br />Technology & Languages
            </span>
          </div>

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

      {/* Features Section - Why Choose NextHub */}
      <section className="features-modern-section">
        <div className="container">
          <h2 className="section-title text-center">
            Why Choose <span className="gradient-text">NextHub</span>
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

      {/* Stats Section with Unique CountUp Design */}
      {/* Counter removed to improve performance - smooth scrolling prioritized */}

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

      {/* Circular Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title text-center">
            Our <span className="text-sky">Success Stories</span>
          </h2>
          <p className="section-subtitle text-center">Real transformations, Real people</p>
        </div>
        <div className="gallery-container-responsive" style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#38bdf8" borderRadius={0.05} scrollEase={0.02}/>
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
      <section className="partners-section" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">
            Trusted by <span className="text-sky">Industry Leaders</span>
          </h2>
          <div style={{ height: '150px', position: 'relative', overflow: 'hidden', marginTop: '4rem' }}>
            <LogoLoop
              logos={companyLogos}
              speed={20}
              direction="left"
              logoHeight={60}
              gap={80}
              pauseOnHover={false}
              scaleOnHover={false}
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
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
