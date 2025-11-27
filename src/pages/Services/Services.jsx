import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from '../../components/CountUp/CountUp';
import TextType from '../../components/TextType/TextType';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState('training');

  const services = {
    training: {
      title: 'IT Training',
      color: '#38bdf8',
      description: 'Master in-demand technologies with expert-led training programs',
      programs: [
        { name: 'Full-Stack Development', duration: '6 months', students: '5000+' },
        { name: 'Data Science & AI/ML', duration: '5 months', students: '3000+' },
        { name: 'Cloud Computing', duration: '4 months', students: '2500+' },
        { name: 'DevOps Engineering', duration: '4 months', students: '2000+' }
      ]
    },
    internships: {
      title: 'Internships',
      color: '#ec4899',
      description: '100% guaranteed internships with top tech companies',
      programs: [
        { name: 'Software Development', duration: '3-6 months', students: '8000+' },
        { name: 'Data Analytics', duration: '3 months', students: '4000+' },
        { name: 'UI/UX Design', duration: '2-4 months', students: '3000+' },
        { name: 'Digital Marketing', duration: '2-3 months', students: '2500+' }
      ]
    },
    bootcamps: {
      title: 'Bootcamps',
      color: '#fbbf24',
      description: 'Intensive programs for rapid skill development',
      programs: [
        { name: 'MERN Stack Bootcamp', duration: '12 weeks', students: '1500+' },
        { name: 'AI/ML Intensive', duration: '10 weeks', students: '1200+' },
        { name: 'Mobile App Development', duration: '8 weeks', students: '1000+' },
        { name: 'Blockchain Fundamentals', duration: '6 weeks', students: '800+' }
      ]
    },
    languages: {
      title: 'Language Training',
      color: '#10b981',
      description: 'Master global languages with certified trainers',
      programs: [
        { name: 'German (A1-C2)', duration: 'Flexible', students: '6000+' },
        { name: 'French (A1-B2)', duration: 'Flexible', students: '3500+' },
        { name: 'Spanish (A1-B2)', duration: 'Flexible', students: '2800+' },
        { name: 'Japanese (N5-N3)', duration: 'Flexible', students: '2000+' }
      ]
    }
  };

  const currentService = services[activeService];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>
            <span className="gradient-text">Our Services</span>
          </h1>
          <div className="hero-subtitle">
            <TextType 
              text={[
                "Transform Your Career",
                "Learn. Build. Succeed.",
                "Your Future Starts Here"
              ]}
              typingSpeed={60}
              pauseDuration={2500}
            />
          </div>
          
          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-number-large"><CountUp to={50000} separator="," />+</div>
              <div className="stat-text">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number-large"><CountUp to={500} />+</div>
              <div className="stat-text">Partner Companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number-large"><CountUp to={95} />%</div>
              <div className="stat-text">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="service-tabs-section">
        <div className="container">
          <div className="service-tabs">
            <button 
              className={`service-tab tab-sky ${activeService === 'training' ? 'active' : ''}`}
              onClick={() => setActiveService('training')}
            >
              IT Training
            </button>
            <button 
              className={`service-tab tab-pink ${activeService === 'internships' ? 'active' : ''}`}
              onClick={() => setActiveService('internships')}
            >
              Internships
            </button>
            <button 
              className={`service-tab tab-yellow ${activeService === 'bootcamps' ? 'active' : ''}`}
              onClick={() => setActiveService('bootcamps')}
            >
              Bootcamps
            </button>
            <button 
              className={`service-tab tab-green ${activeService === 'languages' ? 'active' : ''}`}
              onClick={() => setActiveService('languages')}
            >
              Languages
            </button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details-section">
        <div className="container">
          <div className="service-header">
            <h2>{currentService.title}</h2>
            <p>{currentService.description}</p>
          </div>

          <div className="programs-grid">
            {currentService.programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.name}</h3>
                <div className="program-info">
                  <span className="program-duration">{program.duration}</span>
                  <span className="program-students">{program.students} enrolled</span>
                </div>
                <button className="btn btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of successful students and transform your career today</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Started</Link>
              <button className="btn btn-outline btn-large">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
