import { useState } from 'react';
import GradientText from '../../components/GradientText/GradientText';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">
            Get in <GradientText colors={['#38bdf8', '#ec4899', '#10b981']}>Touch</GradientText>
          </h1>
          <p className="contact-subtitle">Let's discuss how we can help you achieve your career goals</p>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-text">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="detail-icon">📧</div>
                  <div className="detail-content">
                    <h3>Email</h3>
                    <p>info@nexthub.tech</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">📞</div>
                  <div className="detail-content">
                    <h3>Phone</h3>
                    <p>+91 1234567890</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">📍</div>
                  <div className="detail-content">
                    <h3>Location</h3>
                    <p>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="training">IT Training</option>
                    <option value="internship">Internships</option>
                    <option value="bootcamp">Bootcamps</option>
                    <option value="language">Language Training</option>
                    <option value="hackathon">Hackathons</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;



