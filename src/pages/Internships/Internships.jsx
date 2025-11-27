import { useState, useEffect } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import GradientText from '../../components/GradientText/GradientText';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Internships.css';

const Internships = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

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

  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const internshipData = {
    categories: [
      {
        id: 'cs',
        title: 'Computer Science',
        color: '#3b82f6',
        programs: [
          'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Generative AI',
          'Prompt Engineering', 'Deep Learning', 'Full Stack Web Development (Frontend & Backend)',
          'Full Stack Java', 'Full Stack Python', 'MERN Stack Development', 'MEAN Stack Development',
          'Cyber Security', 'C Programming Language', 'C++ Programming Language',
          'App Development Combined Course', 'UI/UX', 'React JS', 'Angular JS',
          'MySQL with Spring Boot', 'React Native', 'AWS with DevOps', 'Tableau'
        ]
      },
      {
        id: 'ece',
        title: 'Electronics & Communication',
        color: '#8b5cf6',
        programs: [
          'Embedded Systems', 'Internet of Things', 'Robotics', 'Hybrid & Electric Vehicle',
          'VLSI', 'Power BI'
        ]
      },
      {
        id: 'mech',
        title: 'Mechanical Engineering',
        color: '#f59e0b',
        programs: [
          'Car Designing', 'IC Engineering', 'AutoCAD', 'SPSS'
        ]
      },
      {
        id: 'civil',
        title: 'Civil Engineering',
        color: '#10b981',
        programs: [
          'Construction Planning', 'AutoCAD - Civil'
        ]
      },
      {
        id: 'mgmt',
        title: 'Management & Commerce',
        color: '#ef4444',
        programs: [
          'Marketing', 'Human Resource', 'Finance', 'Digital Marketing',
          'Business Analytics', 'Ethical Hacking', 'Cyber Security', 'Entrepreneurship'
        ]
      }
    ],
    jobGuarantee: [
      'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Generative AI',
      'Prompt Engineering', 'Java Full Stack', 'Python Full Stack', 'Full Stack Web Development',
      'MERN Stack Development', 'MEAN Stack Development', 'Marketing', 'Digital Marketing',
      'Human Resource', 'Entrepreneurship'
    ],
    certifications: [
      {
        category: 'Generative AI',
        color: '#3b82f6',
        certs: [
          "Microsoft's Career Essentials in Generative AI",
          "Generative AI for Beginners by Great Learning",
          "Fundamentals of Generative AI by Microsoft Learn",
          "Generative AI for Everyone by Deep Learning",
          "Introduction to Generative AI by Google Cloud"
        ]
      },
      {
        category: 'Machine Learning',
        color: '#8b5cf6',
        certs: [
          "Machine Learning by Stanford University (Coursera)",
          "Machine Learning Crash Course by Google",
          "Elements of AI by University of Helsinki",
          "AWS Machine Learning Foundations"
        ]
      },
      {
        category: 'Deep Learning',
        color: '#f59e0b',
        certs: [
          "Practical Deep Learning for Coders by fast.ai",
          "AI for Everyone by DeepLearning.AI",
          "MIT Introduction to Deep Learning"
        ]
      },
      {
        category: 'Java',
        color: '#10b981',
        certs: [
          "Java Programming by Great Learning",
          "Java Programming Basics by Simplilearn (Skill Up)",
          "Java Programming Fundamentals by Infosys Springboard",
          "Java Tutorial for Beginners by Udemy (Free Section)"
        ]
      },
      {
        category: 'DevOps',
        color: '#ef4444',
        certs: [
          "DevOps Basics by Great Learning",
          "DevOps Foundation by Simplilearn (Skill Up)",
          "DevOps Essentials by Udemy (Free Courses Section)",
          "Introduction to DevOps by IBM",
          "DevOps Training by Infosys Springboard",
          "CI/CD Pipelines with Jenkins by Great Learning"
        ]
      },
      {
        category: 'Human Resource Management',
        color: '#06b6d4',
        certs: [
          "Introduction to Human Resources by Great Learning",
          "Human Resources Management by Alison",
          "HR Management and Analytics by Coursera (via University of Pennsylvania)",
          "Human Resource Fundamentals by Udemy (Free Section)",
          "Human Resources by Future Learn",
          "HR Management Courses by Oxford Home Study"
        ]
      },
      {
        category: 'Entrepreneurship',
        color: '#84cc16',
        certs: [
          "Entrepreneurship Basics by Great Learning",
          "Entrepreneurship in Emerging Economies by Harvard University",
          "How to Build a Startup by Udacity",
          "Startup India Learning Program by Invest India",
          "Entrepreneurship Fundamentals by Alison",
          "Entrepreneurship Essentials by Oxford Home Study"
        ]
      },
      {
        category: 'Cyber Security',
        color: '#f97316',
        certs: [
          "Introduction to Cybersecurity by Cisco Networking Academy",
          "Introduction to Cybersecurity by Great Learning",
          "Cybersecurity Essentials by Cisco Networking Academy",
          "Fundamentals of Cybersecurity by IBM",
          "Cybersecurity Fundamentals by Simplilearn (Skill Up)",
          "Introduction to Cybersecurity by Open University"
        ]
      },
      {
        category: 'Ethical Hacking',
        color: '#ec4899',
        certs: [
          "Introduction to Ethical Hacking by Great Learning",
          "Ethical Hacking for Beginners by Simplilearn (Skill Up)",
          "Cybersecurity and Ethical Hacking by Alison",
          "Introduction to Ethical Hacking by Cybrary"
        ]
      },
      {
        category: 'Digital Marketing',
        color: '#6366f1',
        certs: [
          "Fundamentals of Digital Marketing by Google",
          "Digital Marketing Basics by Great Learning",
          "Inbound Marketing Certification by HubSpot Academy",
          "Digital Marketing Fundamentals by Alison",
          "Social Media Marketing by Meta (Facebook)"
        ]
      }
    ],
    csr: [
      'Infosys CSR Programs', 'TCS CSR Programs', 'Standard Chartered Bank CSR Programs',
      'Capgemini CSR Programs', 'SAP CSR Programs'
    ],
    hackathons: [
      'Artificial Intelligence', 'Machine Learning', 'Gen AI', 'Deep Learning',
      'Data Science', 'Python', 'Web Development', 'Digital Marketing',
      'Entrepreneurship', 'Design Thinking & Innovation'
    ]
  };

  const sections = [
    { id: 'overview', label: 'Overview', count: internshipData.categories.length },
    { id: 'job-guarantee', label: 'Job Guarantee', count: internshipData.jobGuarantee.length },
    { id: 'certifications', label: 'Certifications', count: internshipData.certifications.length },
    { id: 'csr', label: 'CSR Programs', count: internshipData.csr.length },
    { id: 'hackathons', label: 'Hackathons', count: internshipData.hackathons.length }
  ];

  return (
    <div className="internships-page">
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-main">
            <h1 className="hero-title">
              <span className="title-line-1">Transform Your Career with</span>
              <span className="title-line-2">
                <GradientText
                  colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="hero-gradient-text"
                >
                  Professional Internships
                </GradientText>
              </span>
            </h1>
            
            <p className="hero-subtitle">
              Master cutting-edge technologies through our comprehensive, industry-leading internship programs. 
              Gain hands-on experience, work on real projects, and secure your dream job with expert mentorship.
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn primary">
                <span>Explore Programs</span>
                <div className="btn-arrow">→</div>
              </button>
              <button className="hero-btn secondary">
                <span>Watch Demo</span>
                <div className="btn-play">▶</div>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="tech-sphere">
              <div className="sphere-container">
                <div className="sphere">
                  <div className="sphere-surface">
                    {/* Tech node icons removed */}
                  </div>
                </div>
                
                <div className="orbit-ring orbit-1">
                  <div className="orbit-item">AI</div>
                  <div className="orbit-item">ML</div>
                  <div className="orbit-item">Data</div>
                </div>
                
                <div className="orbit-ring orbit-2">
                  <div className="orbit-item">Web</div>
                  <div className="orbit-item">Mobile</div>
                  <div className="orbit-item">Cloud</div>
                  <div className="orbit-item">Security</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="section-nav">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="tab-label">{section.label}</span>
                <span className="tab-count">{section.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <section className="main-content">
        <div className="container">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="overview-section">
              <div className="section-header">
                <h2 className="section-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="section-gradient-text"
                  >
                    Internship Categories
                  </GradientText>
                </h2>
                <p className="section-subtitle">
                  Explore internship opportunities across various engineering and management domains
                </p>
              </div>
              
              <div className="categories-flow">
                {internshipData.categories.map((category, index) => (
                  <div 
                    key={category.id} 
                    className="category-flow-item"
                    style={{ 
                      '--category-color': category.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                    onMouseEnter={() => setHoveredItem(category.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flow-header">
                      <div className="flow-icon" style={{ backgroundColor: category.color }}>
                        {category.title.charAt(0)}
                      </div>
                      <div className="flow-info">
                        <h3 className="flow-title">{category.title}</h3>
                        <span className="flow-count">{category.programs.length}</span>
                      </div>
                    </div>
                    
                    <div className="programs-flow">
                      {(expandedCategories[category.id] ? category.programs : category.programs.slice(0, 6)).map((program, programIndex) => (
                        <div 
                          key={programIndex} 
                          className="program-chip"
                          style={{ 
                            animationDelay: `${programIndex * 0.05}s`,
                            '--chip-color': category.color
                          }}
                        >
                          {program}
                        </div>
                      ))}
                      {category.programs.length > 6 && (
                        <div 
                          className="more-chip"
                          onClick={() => toggleCategoryExpansion(category.id)}
                        >
                          {expandedCategories[category.id] ? 'Show Less' : `+${category.programs.length - 6} more`}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Job Guarantee Section */}
          {activeSection === 'job-guarantee' && (
            <div className="job-guarantee-section">
              <div className="section-header">
                <h2 className="section-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="section-gradient-text"
                  >
                    100% Job Guarantee Programs
                  </GradientText>
                </h2>
                <p className="section-subtitle">
                  Secure your future with our guaranteed placement programs
                </p>
              </div>
              
              <div className="guarantee-modern">
                {internshipData.jobGuarantee.map((program, index) => (
                  <div 
                    key={index} 
                    className="guarantee-modern-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="guarantee-modern-content">
                      <div className="guarantee-number">{index + 1}</div>
                      <div className="guarantee-info">
                        <h3 className="guarantee-title">{program}</h3>
                        <div className="guarantee-tags">
                          <span className="tag">100% Job Guarantee</span>
                          <span className="tag">Industry Ready</span>
                        </div>
                      </div>
                      <div className="guarantee-action">
                        <button className="apply-btn">Apply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {activeSection === 'certifications' && (
            <div className="certifications-section">
              <div className="section-header">
                <h2 className="section-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="section-gradient-text"
                  >
                    Global Certifications
                  </GradientText>
                </h2>
                <p className="section-subtitle">
                  Earn industry-recognized certifications from leading organizations
                </p>
              </div>
              
              <div className="certifications-modern">
                {internshipData.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="cert-modern-item"
                    style={{ 
                      '--cert-color': cert.color,
                      animationDelay: `${index * 0.08}s`
                    }}
                  >
                    <div className="cert-modern-content">
                      <div className="cert-header-modern">
                        <div className="cert-color-bar" style={{ backgroundColor: cert.color }}></div>
                        <h3 className="cert-title">{cert.category}</h3>
                        <span className="cert-count">{cert.certs.length}</span>
                      </div>
                      <div className="cert-list-modern">
                        {cert.certs.map((certification, certIndex) => (
                          <div key={certIndex} className="cert-item-modern">
                            <div className="cert-dot" style={{ backgroundColor: cert.color }}></div>
                            <span className="cert-name">{certification}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CSR Section */}
          {activeSection === 'csr' && (
            <div className="csr-section">
              <div className="section-header">
                <h2 className="section-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="section-gradient-text"
                  >
                    Free CSR Trainings
                  </GradientText>
                </h2>
                <p className="section-subtitle">
                  Corporate Social Responsibility programs from leading organizations
                </p>
              </div>
              
              <div className="csr-modern">
                {internshipData.csr.map((program, index) => (
                  <div 
                    key={index} 
                    className="csr-modern-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="csr-modern-content">
                      <div className="csr-number">{index + 1}</div>
                      <div className="csr-info">
                        <h3 className="csr-title">{program}</h3>
                        <div className="csr-tags">
                          <span className="tag">Free Training</span>
                          <span className="tag">Global Recognition</span>
                        </div>
                      </div>
                      <div className="csr-action">
                        <button className="enroll-btn">Enroll</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hackathons Section */}
          {activeSection === 'hackathons' && (
            <div className="hackathons-section">
              <div className="section-header">
                <h2 className="section-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="section-gradient-text"
                  >
                    Hackathons & Workshops
                  </GradientText>
                </h2>
                <p className="section-subtitle">
                  Participate in intensive bootcamps and innovation workshops
        </p>
      </div>
              
              <div className="hackathons-modern">
                {internshipData.hackathons.map((topic, index) => (
                  <div 
                    key={index} 
                    className="hackathon-modern-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="hackathon-modern-content">
                      <div className="hackathon-number">{index + 1}</div>
                      <div className="hackathon-info">
                        <h3 className="hackathon-title">{topic}</h3>
                        <div className="hackathon-tags">
                          <span className="tag">Bootcamp</span>
                          <span className="tag">Competition</span>
                        </div>
                      </div>
                      <div className="hackathon-action">
                        <button className="join-btn">Join</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-middle-orb"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="cta-gradient-text">Ready to Launch Your Career?</span>
            </h2>
            <p className="cta-subtitle">
              Join thousands of students who have kickstarted their careers with our comprehensive internship programs.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                Apply for Internship
                <span className="btn-arrow">→</span>
              </a>
              <a href="#brochure" className="cta-btn secondary">
                Download Brochure
                <span className="btn-play">▶</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;