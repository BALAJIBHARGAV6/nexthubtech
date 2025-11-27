import { useState } from 'react';
import CardNav from '../../components/CardNav/CardNav';
import GradientText from '../../components/GradientText/GradientText';
import nexthubLogo from '../../assets/nexthub-logo.svg';
import './Trainings.css';

const Trainings = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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

  const categories = ['All', 'Programming', 'Web Development', 'Data Science', 'AI/ML', 'Cloud/DevOps', 'Business', 'Security'];

  const trainingPrograms = [
        {
          id: 1,
          title: "Microsoft Office",
          description: "Master the essential Microsoft Office applications including Word, Excel, PowerPoint, and Outlook. Learn advanced features, automation, and productivity techniques.",
          duration: "4 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1250,
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 2,
          title: "C Programming",
          description: "Build a solid foundation in C programming with hands-on curriculum focusing on data structures, algorithms, and system-level programming.",
          duration: "6 weeks",
          level: "Beginner",
          category: "Programming",
          rating: 4.9,
          students: 2100,
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 3,
          title: "C with Data Structures",
          description: "Master C programming combined with essential data structures like arrays, linked lists, stacks, and queues for efficient software development.",
          duration: "8 weeks",
          level: "Intermediate",
          category: "Programming",
          rating: 4.9,
          students: 1800,
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 4,
          title: "C++ Programming",
          description: "Learn C++ programming from basics to advanced concepts. Master object-oriented programming, memory management, and modern C++ features.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          category: "Programming",
          rating: 4.8,
          students: 1950,
          image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 5,
          title: "C++ with Data Structures",
          description: "Advanced C++ programming with comprehensive data structures and algorithms. Learn to build high-performance applications.",
          duration: "10 weeks",
          level: "Intermediate to Advanced",
          category: "Programming",
          rating: 4.9,
          students: 1650,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 6,
          title: "Web Development",
          description: "Master both front-end and back-end development. Learn HTML, CSS, JavaScript, PHP, and databases to build dynamic web applications.",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          category: "Web Development",
          rating: 4.7,
          students: 3200,
          image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 7,
          title: "UI Development",
          description: "Create visually stunning and user-friendly interfaces. Master HTML, CSS, JavaScript, and popular frameworks for responsive design.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          category: "Web Development",
          rating: 4.8,
          students: 2400,
          image: "https://images.unsplash.com/photo-1558655146-364991f1da1e?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 8,
          title: "UX Development",
          description: "Design user-centered digital experiences. Learn UX research, wireframing, prototyping, and usability testing with industry tools.",
          duration: "10 weeks",
          level: "Beginner to Intermediate",
          category: "Web Development",
          rating: 4.8,
          students: 2100,
          image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 9,
          title: "Full Stack Python",
          description: "Master Python for full-stack web development. Learn Django, Flask, databases, and front-end integration for scalable applications.",
          duration: "14 weeks",
          level: "Intermediate",
          category: "Programming",
          rating: 4.9,
          students: 2800,
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 10,
          title: "Core Python",
          description: "Build a strong foundation in Python programming. Learn data types, control structures, functions, and object-oriented programming.",
          duration: "6 weeks",
          level: "Beginner",
          category: "Programming",
          rating: 4.8,
          students: 3500,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 11,
          title: "Advanced Python",
          description: "Dive deep into advanced Python concepts including decorators, generators, multithreading, and powerful libraries like NumPy and Pandas.",
          duration: "10 weeks",
          level: "Advanced",
          category: "Programming",
          rating: 4.9,
          students: 1800,
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 12,
          title: "Full Stack Java",
          description: "Master Java for full-stack development. Learn Spring, Hibernate, front-end technologies, and deployment with modern tools.",
          duration: "16 weeks",
          level: "Intermediate to Advanced",
          category: "Programming",
          rating: 4.8,
          students: 2200,
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 13,
          title: "Core Java",
          description: "Build a solid foundation in Java programming. Learn OOP concepts, collections, exception handling, and multithreading.",
          duration: "8 weeks",
          level: "Beginner",
          category: "Programming",
          rating: 4.8,
          students: 2900,
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 14,
          title: "Advanced Java",
          description: "Master enterprise-level Java development with Spring Framework, Hibernate, JPA, Web Services, and microservices architecture.",
          duration: "12 weeks",
          level: "Advanced",
          category: "Programming",
          rating: 4.9,
          students: 1600,
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 15,
          title: "Data Science",
          description: "Master data analysis, machine learning, and data visualization using R Studio, SQL, SAS, Hadoop, and advanced analytics tools.",
          duration: "16 weeks",
          level: "Intermediate to Advanced",
          category: "Data Science",
          rating: 4.9,
          students: 1900,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 16,
          title: "Artificial Intelligence",
          description: "Dive deep into AI concepts, algorithms, and implementation. Learn machine learning, neural networks, and natural language processing.",
          duration: "18 weeks",
          level: "Advanced",
          category: "AI/ML",
          rating: 4.9,
          students: 1500,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 17,
          title: "Machine Learning",
          description: "Master ML algorithms, supervised and unsupervised learning, neural networks, and deep learning with TensorFlow and Scikit-learn.",
          duration: "14 weeks",
          level: "Intermediate to Advanced",
          category: "AI/ML",
          rating: 4.8,
          students: 2100,
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 18,
          title: "Deep Learning",
          description: "Explore neural networks, CNNs, RNNs, and advanced deep learning models using TensorFlow and PyTorch for real-world applications.",
          duration: "16 weeks",
          level: "Advanced",
          category: "AI/ML",
          rating: 4.9,
          students: 1200,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 19,
          title: "Generative AI",
          description: "Master generative models including GANs and transformers. Learn to create AI-driven content for entertainment, media, and healthcare.",
          duration: "12 weeks",
          level: "Advanced",
          category: "AI/ML",
          rating: 4.8,
          students: 1000,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 20,
          title: "AI Tools",
          description: "Learn popular AI tools for automation, content generation, and data analysis. Master tools that streamline workflows and optimize processes.",
          duration: "6 weeks",
          level: "Beginner to Intermediate",
          category: "AI/ML",
          rating: 4.7,
          students: 1800,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 21,
          title: "Business Analytics",
          description: "Transform raw data into actionable insights. Learn data visualization, predictive analytics, and data-driven decision making.",
          duration: "10 weeks",
          level: "Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1600,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 22,
          title: "Data Analytics",
          description: "Master data analysis techniques, statistical analysis, and predictive modeling to draw actionable conclusions from complex datasets.",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          category: "Data Science",
          rating: 4.8,
          students: 2000,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 23,
          title: "MERN Stack Development",
          description: "Master MongoDB, Express.js, React.js, and Node.js to build dynamic, scalable web applications with modern full-stack technologies.",
          duration: "16 weeks",
          level: "Intermediate to Advanced",
          category: "Web Development",
          rating: 4.9,
          students: 1800,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 24,
          title: "MEAN Stack Development",
          description: "Learn MongoDB, Express.js, Angular, and Node.js to build high-performance, scalable web applications with the MEAN stack.",
          duration: "16 weeks",
          level: "Intermediate to Advanced",
          category: "Web Development",
          rating: 4.8,
          students: 1600,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 25,
          title: "Front-End Development",
          description: "Master HTML, CSS, JavaScript, and React.js to create responsive, interactive user interfaces for modern web applications.",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          category: "Web Development",
          rating: 4.8,
          students: 2500,
          image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 26,
          title: "Back-End Development",
          description: "Master server-side development with Node.js, Python, and Java. Learn database management, API design, and server optimization.",
          duration: "14 weeks",
          level: "Intermediate to Advanced",
          category: "Web Development",
          rating: 4.8,
          students: 1900,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 27,
          title: "AWS DevOps",
          description: "Master AWS services for DevOps. Learn CI/CD pipelines, cloud infrastructure automation, and deployment strategies.",
          duration: "12 weeks",
          level: "Intermediate to Advanced",
          category: "Cloud/DevOps",
          rating: 4.9,
          students: 1400,
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 28,
          title: "Cloud Computing",
          description: "Learn cloud architecture, AWS, Google Cloud, Azure services, and how to design, deploy, and manage scalable cloud applications.",
          duration: "10 weeks",
          level: "Intermediate",
          category: "Cloud/DevOps",
          rating: 4.8,
          students: 1700,
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 29,
          title: "Cyber Security",
          description: "Master cybersecurity fundamentals including ethical hacking, network security, encryption, and risk management practices.",
          duration: "14 weeks",
          level: "Intermediate to Advanced",
          category: "Security",
          rating: 4.9,
          students: 1300,
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 30,
          title: "IoT (Internet of Things)",
          description: "Learn IoT system design, sensor integration, wireless communication protocols, and cloud platforms for smart applications.",
          duration: "12 weeks",
          level: "Intermediate",
          category: "Programming",
          rating: 4.7,
          students: 1100,
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 31,
          title: "Power BI",
          description: "Master Power BI for business analytics. Learn data visualization, DAX, custom visualizations, and comprehensive reporting.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1500,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 32,
          title: "Tableau",
          description: "Master Tableau for data visualization. Learn to create interactive dashboards, advanced analytics, and compelling data stories.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1400,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 33,
          title: "SPSS",
          description: "Master SPSS for statistical analysis. Learn data cleaning, hypothesis testing, regression analysis, and advanced statistical methods.",
          duration: "6 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.7,
          students: 1200,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 34,
          title: "HR Management",
          description: "Master HR functions including recruitment, employee relations, compensation management, and performance management strategies.",
          duration: "10 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1300,
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 35,
          title: "Marketing",
          description: "Master digital and traditional marketing strategies including SEO, content marketing, social media, and campaign analytics.",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1600,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 36,
          title: "Finance",
          description: "Master financial concepts including accounting, financial analysis, investment management, and financial modeling.",
          duration: "14 weeks",
          level: "Intermediate",
          category: "Business",
          rating: 4.8,
          students: 1400,
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center"
        },
        {
          id: 37,
          title: "Entrepreneurship",
          description: "Learn business ideation, startup financing, market analysis, business planning, and strategic leadership for successful ventures.",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          category: "Business",
          rating: 4.7,
          students: 1100,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
        }
  ];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="trainings-page">
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
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Transform Your Career with{' '}
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="hero-gradient-text"
                  >
                    Expert IT Training
                  </GradientText>
                </h1>
                <p className="hero-subtitle">
                  Join thousands of professionals who have accelerated their careers with our comprehensive, hands-on training programs designed by industry experts.
                </p>
              </div>
              <div className="hero-visual">
                <div className="hero-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center" 
                    alt="Professional IT Training" 
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search training programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="search-icon"></div>
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-grid">
            {filteredPrograms.map(program => (
              <div key={program.id} className="program-card">
                <div className="card-image">
                  <img src={program.image} alt={program.title} />
                  <div className="card-overlay">
                    <div className="card-category">{program.category}</div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <div className="program-meta">
                    <div className="meta-item">
                      <span className="meta-text">{program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-text">{program.level}</span>
                    </div>
                  </div>
                  <div className="program-stats">
                    <div className="stat-item">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(program.rating) ? 'filled' : ''}`}>
                            ★
                          </span>
                        ))}
                        <span className="rating-text">{program.rating}</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <span className="student-count">
                        <span className="student-icon">👥</span>
                        {program.students.toLocaleString()} students
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="enroll-btn">
                    Enroll Now
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2 className="cta-title">
                  <GradientText
                    colors={["#38bdf8", "#8b5cf6", "#ec4899", "#f97316", "#fbbf24"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="cta-gradient-text"
                  >
                    Ready to Advance Your Career?
                  </GradientText>
                </h2>
                <p className="cta-subtitle">
                  Join thousands of professionals who have transformed their careers with our expert-led training programs.
                </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Browse All Programs</button>
              <button className="cta-btn secondary">Speak with Advisor</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;



