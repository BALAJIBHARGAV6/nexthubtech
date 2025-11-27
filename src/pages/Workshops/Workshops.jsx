import { useEffect } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import Footer from '../../components/Footer/Footer';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Workshops.css';

const Workshops = () => {
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

  const workshops = [
    {
      id: 1,
      title: "Quantum Computing Bootcamp",
      subtitle: "Dive into the future of computation with qubits and circuits",
      duration: "5 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Quantum Mechanics Basics", "Qubits & Superposition", "Quantum Circuits using Qiskit", "Grover's and Shor's Algorithm", "Hands-on Quantum Projects"],
      benefits: ["Hands-on Qiskit Practice", "Live Demos", "Digital Certificate", "Career Orientation", "Project Experience"],
      icon: "⚛️"
    },
    {
      id: 2,
      title: "AI with Quantum Computing",
      subtitle: "Merging intelligence with the power of quantum",
      duration: "3 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Introduction to Quantum AI", "Quantum Machine Learning", "Variational Quantum Circuits", "Use Cases in NLP & Vision"],
      benefits: ["Hybrid AI-Quantum Projects", "Expert Sessions", "Digital Certificate", "Advanced Research Insight"],
      icon: "🧠"
    },
    {
      id: 3,
      title: "AI & ML Bootcamp",
      subtitle: "Empowering innovation with AI & ML essentials",
      duration: "5 Days | 3 Hrs/day",
      mode: "Online / Offline",
      topics: ["Supervised & Unsupervised Learning", "Neural Networks", "AI Applications in Industry", "Model Deployment"],
      benefits: ["Industry-Relevant Projects", "Resume Support", "Digital Certificate", "Internship Opportunity"],
      icon: "🤖"
    },
    {
      id: 4,
      title: "Python Programming Bootcamp",
      subtitle: "The must-have language for today's developers",
      duration: "4 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Python Basics & Control Flow", "File Handling & Libraries", "OOP in Python", "Mini App Development"],
      benefits: ["Real Coding Tasks", "Hands-On Projects", "Digital Certificate", "Pathway to ML & Web Dev"],
      icon: "🐍"
    },
    {
      id: 5,
      title: "Generative AI Workshop",
      subtitle: "Unleash creativity with AI-generated content",
      duration: "3 Days | 2.5 Hrs/day",
      mode: "Online / Offline",
      topics: ["LLMs (GPT, Claude, Gemini)", "Text-to-Image (DALL·E)", "Prompt Engineering", "GenAI Applications"],
      benefits: ["Hands-on with GenAI APIs", "Live Demos", "Digital Certificate", "AI Portfolio Boost"],
      icon: "✨"
    },
    {
      id: 6,
      title: "Prompt Engineering Workshop",
      subtitle: "Master the art of talking to AI",
      duration: "2 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Prompt Structures", "Advanced Prompt Tuning", "Role-based Prompting", "Custom GPTs & Agents"],
      benefits: ["Prompting Cheat Sheet", "Use Cases & Templates", "Digital Certificate"],
      icon: "💬"
    },
    {
      id: 7,
      title: "NLP Bootcamp",
      subtitle: "Build apps that understand human language",
      duration: "4 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Text Cleaning, Tokenization", "Word2Vec, TF-IDF", "Transformers & BERT", "Sentiment & NER models"],
      benefits: ["NLP Projects", "LLM Integration Tips", "Digital Certificate"],
      icon: "📝"
    },
    {
      id: 8,
      title: "Data Science Bootcamp",
      subtitle: "From data to decisions – be a data hero",
      duration: "6 Days | 3 Hrs/day",
      mode: "Online / Offline",
      topics: ["Data Wrangling & Cleaning", "Exploratory Data Analysis", "Model Building & Deployment", "Dashboards & Storytelling"],
      benefits: ["Data Capstone Project", "Career Guidance", "Digital Certificate"],
      icon: "📊"
    },
    {
      id: 9,
      title: "DSA Workshop",
      subtitle: "Crack coding interviews with confidence",
      duration: "5 Days | 2.5 Hrs/day",
      mode: "Online / Offline",
      topics: ["Arrays, Strings, Linked Lists", "Trees, Graphs, Hashing", "Sorting, Recursion, DP", "Interview Problem Sets"],
      benefits: ["Practice Sheets", "Mock Interviews", "Digital Certificate"],
      icon: "🔢"
    },
    {
      id: 10,
      title: "AI with GenAI Workshop",
      subtitle: "Future of AI is Generative – Learn it now",
      duration: "4 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["AI Basics", "Intro to GenAI Models", "Use Cases & Applications", "Ethics & Safety"],
      benefits: ["Dual Knowledge: AI + GenAI", "Live Build Sessions", "Digital Certificate"],
      icon: "🚀"
    },
    {
      id: 11,
      title: "AI ML with Python",
      subtitle: "Build smart models using Python",
      duration: "5 Days | 3 Hrs/day",
      mode: "Online / Offline",
      topics: ["Python Basics for ML", "Regression, Classification", "Model Training & Evaluation", "Deployment with Streamlit"],
      benefits: ["Portfolio Project", "Code Repositories", "Digital Certificate"],
      icon: "🐍"
    },
    {
      id: 12,
      title: "Embedded Systems Workshop",
      subtitle: "Powering hardware with code",
      duration: "5 Days | 2 Hrs/day",
      mode: "Offline Preferred",
      topics: ["Arduino / ARM / ESP32", "C/C++ for Embedded", "Sensors & Actuators", "Real-time Logic"],
      benefits: ["Mini Hardware Project", "Component Kit Support", "Digital Certificate"],
      icon: "⚙️"
    },
    {
      id: 13,
      title: "IoT Workshop",
      subtitle: "Connecting the physical world to the cloud",
      duration: "4 Days | 2.5 Hrs/day",
      mode: "Offline Preferred",
      topics: ["Basics of IoT", "NodeMCU / ESP32", "MQTT, HTTP", "Cloud Dashboard"],
      benefits: ["IoT Kit Provided", "Hands-on Device Setup", "Digital Certificate"],
      icon: "🌐"
    },
    {
      id: 14,
      title: "Java Programming Workshop",
      subtitle: "Write once, run anywhere – Java made easy",
      duration: "4 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Java Basics", "OOP Concepts", "Collections Framework", "Mini Project"],
      benefits: ["Java IDE Practice", "Digital Certificate", "App Development Basics"],
      icon: "☕"
    },
    {
      id: 15,
      title: "Human Resources Masterclass",
      subtitle: "Master the art of managing people and talent",
      duration: "3 Days | 2.5 Hrs/day",
      mode: "Online / Offline",
      topics: ["Recruitment & Selection", "Employee Engagement", "HR Analytics", "Labor Laws & Compliance", "Performance Appraisals"],
      benefits: ["Practical HR Scenarios", "Resume & Interview Tips", "Digital Certificate", "Internship/Job Guidance"],
      icon: "👥"
    },
    {
      id: 16,
      title: "Entrepreneurship Bootcamp",
      subtitle: "From idea to startup – become your own boss",
      duration: "4 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["Idea Validation", "Business Model Canvas", "Startup Funding & Pitching", "Marketing & Growth Hacking", "MVP Development"],
      benefits: ["Startup Toolkit", "Live Pitch Practice", "Digital Certificate", "Mentorship Opportunities"],
      icon: "💡"
    },
    {
      id: 17,
      title: "Digital Marketing & Growth Hacking",
      subtitle: "Empower your career with trending marketing strategies",
      duration: "5 Days | 2 Hrs/day",
      mode: "Online / Offline",
      topics: ["SEO & Google Ads", "Facebook & Instagram Marketing", "Content Creation", "Analytics Tools", "Email Campaigns"],
      benefits: ["Real Campaign Creation", "Digital Certificate", "Career Guidance", "Freelance/Startup Edge"],
      icon: "📱"
    },
    {
      id: 18,
      title: "Agentic AI Workshop",
      subtitle: "Build AI that thinks, reasons, and acts like an agent",
      duration: "3 Days | 2.5 Hrs/day",
      mode: "Online / Offline",
      topics: ["Introduction to Agentic AI", "Reasoning & Planning with LLMs", "Building Multi-Step AI Workflows", "Using LangChain, OpenAI Agents, AutoGPT", "Tools, Memory & Environment"],
      benefits: ["Build Your Own AI Agent", "Real-World Use Cases", "Digital Certificate", "Project Demo & Showcase"],
      icon: "🤖"
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

    document.querySelectorAll('.fade-in-up, .scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="workshops-page">
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
      <section className="workshops-hero">
        <div className="workshops-hero-content">
          <div className="workshops-hero-text">
            <h1 className="workshops-hero-title fade-in-up">
              Technical <span className="gradient-text">Workshops</span>
            </h1>
            <p className="workshops-hero-subtitle fade-in-up">
              Hands-on learning experiences designed to empower you with cutting-edge skills
            </p>
            <div className="workshops-hero-stats fade-in-up">
              <div className="hero-stat">
                <span className="stat-number">18+</span>
                <span className="stat-label">Workshops</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">2-6</span>
                <span className="stat-label">Days Duration</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Certified</span>
              </div>
            </div>
          </div>
          <div className="workshops-hero-image fade-in-up">
            Workshop Learning Image
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="workshops-grid-section">
        <div className="workshops-container">
          <div className="workshops-grid">
            {workshops.map((workshop, index) => (
              <div key={workshop.id} className="workshop-card scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="workshop-icon">{workshop.icon}</div>
                <h3 className="workshop-title">{workshop.title}</h3>
                <p className="workshop-subtitle">{workshop.subtitle}</p>
                
                <div className="workshop-meta">
                  <span className="meta-item">⏱️ {workshop.duration}</span>
                  <span className="meta-item">📍 {workshop.mode}</span>
                </div>

                <div className="workshop-topics">
                  <h4>Key Topics</h4>
                  <ul>
                    {workshop.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="workshop-benefits">
                  <h4>Benefits</h4>
                  <div className="benefits-list">
                    {workshop.benefits.map((benefit, idx) => (
                      <span key={idx} className="benefit-tag">✓ {benefit}</span>
                    ))}
                  </div>
                </div>

                <div className="workshop-card-footer">
                  <button className="workshop-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="workshops-cta">
        <div className="workshops-container">
          <div className="cta-content fade-in-up">
            <h2 className="cta-title">Ready to Level Up Your Skills?</h2>
            <p className="cta-text">Join thousands of students who have transformed their careers with NextHub Technologies</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Contact Us</a>
              <a href="tel:6302834343" className="cta-btn secondary">📞 6302834343</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;



