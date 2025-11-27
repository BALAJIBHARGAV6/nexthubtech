import { useEffect, useState, useRef } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import Footer from '../../components/Footer/Footer';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const navItems = [
    { label: "Services", bgColor: "#000000", textColor: "#fff", links: [
      { label: "IT Training", href: "/trainings", ariaLabel: "IT Training Programs" },
      { label: "Internships", href: "/internships", ariaLabel: "Internship Opportunities" },
      { label: "Language Training", href: "/language-training", ariaLabel: "Language Learning Programs" }
    ]},
    { label: "Events", bgColor: "#38bdf8", textColor: "#000000", links: [
      { label: "Bootcamps & Hackathons", href: "/bootcamps", ariaLabel: "Bootcamps and Hackathons" },
      { label: "Workshops", href: "/workshops", ariaLabel: "Technical Workshops" },
      { label: "Projects", href: "/projects", ariaLabel: "Our Projects" }
    ]},
    { label: "Company", bgColor: "#ec4899", textColor: "#000000", links: [
      { label: "About Us", href: "/about", ariaLabel: "About NextHub" },
      { label: "Our Team", href: "/team", ariaLabel: "Meet Our Team" },
      { label: "Contact", href: "/contact", ariaLabel: "Contact Information" }
    ]}
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '📚', color: '#1f2937', gradient: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', count: 160 },
    { id: 'c', name: 'C', icon: 'C', color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', count: 10 },
    { id: 'cpp', name: 'C++', icon: '++', color: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', count: 10 },
    { id: 'python', name: 'Python', icon: '🐍', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', count: 10 },
    { id: 'java', name: 'Java', icon: 'J', color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', count: 10 },
    { id: 'web', name: 'Web', icon: 'W', color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', count: 10 },
    { id: 'mern', name: 'MERN', icon: 'M', color: '#06b6d4', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', count: 10 },
    { id: 'mean', name: 'MEAN', icon: 'A', color: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', count: 10 },
    { id: 'ds', name: 'Data Science', icon: 'DS', color: '#6366f1', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', count: 10 },
    { id: 'da', name: 'Data Analytics', icon: 'DA', color: '#14b8a6', gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', count: 10 },
    { id: 'ai', name: 'AI', icon: 'AI', color: '#f97316', gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', count: 10 },
    { id: 'ml', name: 'ML', icon: 'ML', color: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', count: 10 },
    { id: 'cyber', name: 'Cyber Security', icon: '🔒', color: '#06b6d4', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', count: 10 },
    { id: 'iot', name: 'IoT', icon: 'IoT', color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', count: 10 },
    { id: 'powerbi', name: 'Power BI', icon: 'BI', color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', count: 10 },
    { id: 'hr', name: 'HR Analytics', icon: 'HR', color: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', count: 10 },
    { id: 'finance', name: 'Finance', icon: 'FI', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', count: 10 }
  ];

  const projects = {
    c: ["Dynamic Memory Management: Advanced Allocation Techniques in C", "Optimized Huffman Encoding for Data Compression", "Adaptive AVL Trees for Real-Time Data Retrieval", "Queue Mechanisms in Modern Operating Systems", "Concurrent Banking Systems: A Multi-Threaded Approach", "Mini-Compiler Design Using Abstract Syntax Trees", "Graph-Theoretic Algorithms for Path Optimization", "Hash-Based Caching: An Innovative Approach to Data Storage", "Hierarchical File Systems: Tree-Based Implementation", "Priority Scheduling Algorithms for Embedded Systems"],
    cpp: ["AI-Driven Recommendations Using Optimized Binary Search Trees", "Intelligent Text Prediction Leveraging Trie Structures", "Graph Analytics for Route Optimization in Logistics", "High-Performance LRU Cache Design Using C++", "Memory Pooling for Gaming Engines: Advanced Techniques", "Social Network Mapping with Adjacency Matrix Models", "Event Scheduling with Real-Time Priority Heuristics", "Encryption Systems Using Circular Linked List Logic", "Clustered Job Sequencing with Greedy Algorithms", "Healthcare Networks: Graph and Heap Integration"],
    python: ["TaskFlow: An AI-Powered Productivity Web Application", "InsightHub: Analytics-Driven Blog Platform", "PyMart: A Python-Based Smart e-Commerce Ecosystem", "MedConnect: AI-Enhanced Healthcare Management System", "Weathrly: Real-Time Meteorological Insights Platform", "SaaSify: Multi-Tenant Business Application Framework", "EventEase: Simplified Event Management Portal", "SmartCare: Healthcare Booking and Reminder Solution", "TicketPro: Advanced Ticketing and User Access Management", "FinTrack: A Budget Visualization and Planning Suite"],
    java: ["SpringSphere: Enterprise ERP System for SMEs", "LinguaLearn: Adaptive Multi-Language Learning Platform", "SecureBank: A Java-Driven Online Banking Ecosystem", "CloudVault: File Management with Distributed Storage", "IoTSync: Smart IoT Monitoring Dashboard", "HealthCRM: Comprehensive Client Management System", "IDVerify: Blockchain-Enabled Digital Identity Platform", "LearnFlow: Modular Course Delivery Framework", "Feedback360: AI-Powered Response Analytics Tool", "GradePro: Automated University Assessment Suite"],
    web: ["PortFolio+: AI-Enhanced Personal Branding Websites", "BudgetBuddy: A Real-Time Finance Tracking Platform", "ChatLink: Advanced Web-Based Messaging Tool", "BlogNova: Dynamic Content Platform with Engagement Analytics", "ResumeX: Interactive Resume Customization Tool", "BidHaven: Real-Time Auction and Bidding System", "LearnSmart: Interactive Online Education Ecosystem", "HireConnect: AI-Driven Recruitment Portal", "HealthMate: Integrated Personal Wellness Tracker", "MultiLingua: Globalized Blogging with Seamless Translation"],
    mern: ["Collab360: Real-Time Team Collaboration Hub", "NewsGenie: Personalized AI News Aggregation Platform", "HomeIQ: IoT-Driven Smart Home Control Dashboard", "ShopSync: AI-Integrated E-Commerce Experience", "PollCraft: Community Polling and Voting Framework", "StreamSocial: Interactive Social Networking Ecosystem", "Schedly: AI-Powered Task Planning Solution", "IoTGuard: Real-Time Device Monitoring Portal", "ExamPro: Comprehensive Online Examination System", "DocSecure: Blockchain-Based Document Sharing Platform"],
    mean: ["InventoPro: AI-Enhanced Inventory Management System", "JobSage: AI-Powered Career Discovery Platform", "IoTPath: Vehicle Tracking and Data Visualization Hub", "RetailWise: Modular E-Commerce Platform", "MediSync: Healthcare Scheduling and Analytics Dashboard", "SkillPlay: Gamified Learning Management Ecosystem", "ConvAI: Seamless AI Chatbot Integration Framework", "VoteGuard: Blockchain-Driven Voting Infrastructure", "BizSuite: Dynamic CRM for Growing Enterprises", "SmartSense: IoT-Enabled Real-Time Data Insights"],
    ds: ["EduPredict: Analytics for Academic Success", "TrendPulse: Social Sentiment and Trend Analytics", "SaleCast: Machine Learning-Driven Sales Forecasting", "FraudShield: Advanced Banking Transaction Security", "ShopDNA: Market Basket Analysis for Strategic Insights", "Customer360: Data-Driven Segmentation and Retention", "PredictPro: Predictive Maintenance for Industry 4.0", "RecoLab: AI-Powered Recommendation Engines", "TrafficAI: Real-Time Urban Traffic Flow Predictions", "SurveySense: Automated Data Insights from Surveys"],
    da: ["SocialLens: Brand Sentiment Analytics Platform", "TrendVault: Sales Patterns and Predictive Modelling", "WorkVista: Workforce Performance Optimization Toolkit", "ChurnGuard: Customer Retention Analytics Framework", "RiskMap: Financial Risk Mitigation Using Big Data", "GreenTrace: Climate Analytics for Sustainable Planning", "ChainFlow: Optimizing Supply Chain Dynamics", "CareAnalytics: Patient-Centric Healthcare Data Insights", "CityPulse: IoT-Enabled Urban Sensor Analytics", "PriceIQ: Dynamic Pricing Models for Modern Markets"],
    ai: ["SkillSort: AI-Driven Resume Optimization Platform", "EmotiFace: Real-Time Emotion Detection System", "DocuGenie: Intelligent Document Summarization Tool", "LearnBot: Personalized AI Tutor for Modern Learners", "HealthPredict: Disease Diagnosis with Explainable AI", "AssistAI: Conversational AI for Customer Service", "HarmonyAI: AI-Driven Music Recommendation System", "SecureScan: Face Recognition for Modern Security Systems", "TransactSafe: Fraud Detection in Real-Time Transactions", "WellnessBuddy: AI-Powered Virtual Health Advisor"],
    ml: ["SpamShield: AI-Powered Email Security", "MaintePredict: ML Models for Predictive Maintenance", "CinemaScope: AI-Enhanced Movie Recommendation System", "DigitIQ: Intelligent Handwritten Character Recognition", "ScoreSure: AI-Driven Credit Risk Prediction", "StockPulse: Market Predictions Using Machine Learning", "CongestoMap: Urban Traffic Prediction Models", "AdSage: Personalized AI Marketing Campaigns", "NetSecure: Network Anomaly Detection Using ML", "GreenForecast: Renewable Energy Prediction Models"],
    cyber: ["TrapHive: Advanced Honeypots for Cybersecurity Analysis", "SecureMind: AI-Based Intrusion Detection System", "BlockVote: Blockchain-Enabled Election Security", "SafeVault: AI for Ransomware and Malware Detection", "EthicalHackSim: Interactive Network Security Lab", "CipherChat: Secure Messaging with Steganography", "ShieldPass: Behavioral-Based Password Protection System", "ThreatIQ: AI-Driven Cyber Threat Intelligence Platform", "MultiAuth: Enterprise-Level Multi-Factor Authentication", "MalwareVision: AI-Powered Real-Time Malware Detection"],
    iot: ["HomeGenius: AI-Enabled Smart Home Ecosystem", "EcoWaste: IoT Solutions for Waste Optimization", "PulseSync: Wearable Health Monitoring Innovations", "SmartFlow: Intelligent Traffic Signal Automation", "AgriSense: IoT-Driven Agricultural Analytics", "FleetIQ: Advanced Fleet Monitoring Dashboard", "PowerSaver: IoT for Energy Usage Optimization", "ParkEase: IoT-Based Smart Parking Solutions", "BreatheWell: Air Quality Monitoring with IoT Sensors", "AquaGuard: Smart Water Leakage Detection System"],
    powerbi: ["RetailRadar: Next-Gen Sales Performance Dashboard", "TalentTrack: Employee Productivity Analytics Suite", "FinScope: Real-Time Financial Monitoring Dashboard", "VoiceView: Analytics for Customer Sentiment Analysis", "EnergyIQ: Smart City Power Consumption Visualization", "MediMetrics: Hospital and Patient Analytics Dashboards", "Supply360: Comprehensive Supply Chain Insights", "CampaignPulse: Social Media Impact Analytics", "EduTrack: Academic Achievement Monitoring Dashboard", "StockVision: Live Market Trends and Insights"],
    hr: ["AttriPredict: Predictive Analytics for Workforce Retention", "TalentLens: AI for Recruitment Efficiency", "HR360: Employee Engagement and Performance Dashboards", "EmotionMap: AI-Based Sentiment Analysis of Feedback", "RecruitIQ: Real-Time Recruitment Analytics Platform", "Diversity360: Insights for Inclusive Workforce Development", "LeaveSync: AI-Enhanced Leave Management Portal", "SkillGap Pro: Training and Development Analytics", "PlanWise: AI-Powered Workforce Planning Tool", "QueryBot: Intelligent HR Assistant for Employee Queries"],
    finance: ["RiskSense: AI for Predictive Financial Risk Mitigation", "SmartAlloc: Automated Budget Allocation Systems", "TradePulse: Real-Time Stock Analysis Framework", "LoanSure: Intelligent Credit Scoring with AI", "FraudEye: AI-Powered Transaction Security", "FinMate: Personal Finance Management Assistant", "PortOptima: Advanced Portfolio Optimization Suite", "FundView: AI for Loan Approval and Analysis", "ClaimPredict: Insurance Claim Analytics Tool", "InvestIQ: AI-Driven Investment Insights Platform"]
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        });
      }
    };
    const hero = heroRef.current;
    if (hero) hero.addEventListener('mousemove', handleMouseMove);
    return () => { if (hero) hero.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.entries(projects).flatMap(([category, items]) => 
        items.map((title, index) => ({ category, title, index: index + 1 }))
      );
    }
    return projects[activeCategory]?.map((title, index) => ({ category: activeCategory, title, index: index + 1 })) || [];
  };

  const filteredProjects = getFilteredProjects().filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryData = (catId) => categories.find(c => c.id === catId);

  const groupedProjects = () => {
    if (activeCategory !== 'all') return { [activeCategory]: filteredProjects };
    return filteredProjects.reduce((acc, project) => {
      if (!acc[project.category]) acc[project.category] = [];
      acc[project.category].push(project);
      return acc;
    }, {});
  };

  return (
    <div className="projects-page-ultra">
      <CardNav logo={nexthubLogo} logoAlt="NextHub Technologies Logo" items={navItems} baseColor="#fff" menuColor="#000" />

      <section className="ultra-hero" ref={heroRef}>
        <div className="hero-gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        <div className="ultra-container">
          <div className="hero-flex">
            <div className="hero-content animate-in">
              <div className="hero-badge-ultra">
                <span className="badge-glow"></span>
                <span className="badge-icon">🚀</span>
                <span className="badge-text">160+ Premium Projects</span>
              </div>
              
              <h1 className="hero-title-ultra">
                <span className="title-line">Build Your Future with</span>
                <span className="title-gradient">Industry-Ready Projects</span>
              </h1>
              
              <p className="hero-desc-ultra">
                Explore cutting-edge projects across 17 technology domains. From AI to Blockchain, Data Science to Cloud Computing.
              </p>

              <div className="stats-row-ultra animate-in">
                <div className="stat-box-ultra">
                  <span className="stat-number">160+</span>
                  <span className="stat-text">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box-ultra">
                  <span className="stat-number">17</span>
                  <span className="stat-text">Domains</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box-ultra">
                  <span className="stat-number">100%</span>
                  <span className="stat-text">Industry Ready</span>
                </div>
              </div>
            </div>

            <div className="hero-images-grid">
              <div className="floating-image-card card-1" style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(-5deg)` }}>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="AI & ML" />
                <div className="image-overlay"><span className="image-label">AI & ML</span></div>
                <div className="card-glow-border"></div>
              </div>
              
              <div className="floating-image-card card-2" style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * 15}px) rotate(3deg)` }}>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" alt="Data Analytics" />
                <div className="image-overlay"><span className="image-label">Data Analytics</span></div>
                <div className="card-glow-border"></div>
              </div>
              
              <div className="floating-image-card card-3" style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * -20}px) rotate(-3deg)` }}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" alt="IoT" />
                <div className="image-overlay"><span className="image-label">IoT</span></div>
                <div className="card-glow-border"></div>
              </div>
              
              <div className="floating-image-card card-4" style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px) rotate(5deg)` }}>
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop" alt="Cyber Security" />
                <div className="image-overlay"><span className="image-label">Cyber Security</span></div>
                <div className="card-glow-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section-ultra">
        <div className="ultra-container">
          <h2 className="section-title-ultra animate-in">
            Explore by <span className="section-title-gradient">Technology</span>
          </h2>
          
          <div className="category-buttons-grid animate-in">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                className={`category-btn-ultra ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{ '--cat-color': cat.color, '--cat-gradient': cat.gradient, animationDelay: `${idx * 0.03}s` }}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count}</span>
                <div className="btn-shine"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section-ultra">
        <div className="ultra-container">
          <h2 className="projects-section-title animate-in">
            Our <span className="projects-title-gradient">Projects</span>
          </h2>
          {Object.entries(groupedProjects()).map(([catId, catProjects]) => {
            const catData = getCategoryData(catId);
            if (!catData || catProjects.length === 0) return null;
            
            return (
              <div key={catId} className="category-block animate-in">
                <div className="category-header-ultra" style={{ '--cat-gradient': catData.gradient, '--cat-color': catData.color }}>
                  <div className="cat-icon-box" style={{ background: catData.gradient }}>
                    <span className="cat-icon-large">{catData.icon}</span>
                  </div>
                  <div className="cat-info">
                    <h3 className="cat-title">{catData.name}</h3>
                    <span className="cat-subtitle">{catProjects.length} Projects Available</span>
                  </div>
                </div>

                <div className="projects-grid-ultra">
                  {catProjects.map((project, idx) => (
                    <div 
                      key={`${project.category}-${project.index}`}
                      className="project-card-ultra"
                      style={{ '--proj-color': catData.color, '--proj-gradient': catData.gradient, animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="card-blur-border"></div>
                      <div className="card-inner">
                        <div className="project-number">{project.index}</div>
                        <h4 className="project-title-ultra">{project.title}</h4>
                        <button className="view-btn-ultra">
                          <span>View Details</span>
                          <span className="arrow">→</span>
                        </button>
                      </div>
                      <div className="card-hover-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredProjects.length === 0 && (
            <div className="no-results-ultra animate-in">
              <span className="no-icon">🔍</span>
              <h3>No Projects Found</h3>
              <p>Try adjusting your search or select a different category</p>
            </div>
          )}
        </div>
      </section>

      <section className="cta-section-ultra">
        <div className="ultra-container">
          <div className="cta-card-ultra animate-in">
            <div className="cta-bg-shapes">
              <div className="cta-shape shape-1"></div>
              <div className="cta-shape shape-2"></div>
              <div className="cta-shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2 className="cta-title-ultra">Ready to Start Your Project Journey?</h2>
              <p className="cta-desc-ultra">Get complete source code, documentation, and expert guidance for your next big project</p>
              <div className="cta-btns-ultra">
                <button className="cta-btn-primary-ultra">
                  <span>Explore Projects</span>
                  <span className="btn-icon">🚀</span>
                </button>
                <button className="cta-btn-secondary-ultra">
                  <span>Talk to Expert</span>
                  <span className="btn-icon">💬</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
