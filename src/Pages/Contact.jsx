import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">Let's Connect and Innovate Together!</p>
      </header>
      <section className="contact-container">
        <div className="contact-info">
          <Profile />
          <ContactForm />
        </div>
        <div className="location-map">
          {/* Integrate an interactive map (e.g., using a library like react-leaflet or react-google-maps) */}
        </div>
      </section>
      <Testimonials />
      <PortfolioHighlights />
      <CallToAction />
      <ContactDetails />
      <OfficeHours />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile-container">
    <div className="contact-card">
      <h2 className="name">Parth</h2>
      <p className="contact-details">Email: your.email@example.com</p>
      <p className="contact-details">Phone: +123-456-7890</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  </div>
);
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2 className="form-title">Get in Touch1</h2>
      {/* Add your contact form component here */}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What People Say</h2>
      <div className="testimonial">
        <blockquote className="testimonial-text">
          "Your tech solutions are groundbreaking. You're a game-changer!"
        </blockquote>
        <cite className="testimonial-author">Happy Client</cite>
      </div>
      <div className="testimonial">
        <blockquote className="testimonial-text">
          "A tech genius with a vision! Can't wait to work with you again."
        </blockquote>
        <cite className="testimonial-author">Impressed Colleague</cite>
      </div>
      {/* Add more testimonials as needed */}
    </div>
  );
};

const PortfolioHighlights = () => {
  return (
    <div className="portfolio-highlights">
      <h2 className="portfolio-title1">Explore My Work</h2>
      {/* Add your portfolio highlights here, showcasing your innovative tech projects */}
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2 className="cta-title">Ready to Collaborate on Something Amazing?</h2>
      <p className="cta-description">
        If you have a tech project in mind or just want to discuss the latest trends, reach out today.
      </p>
      <a href="#contact-form" className="cta-button">
        Contact Me
      </a>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2 className="contact-details-title">More Ways to Reach Me</h2>
      <p className="contact-details-description">
        Feel free to reach out via my professional email at{' '}
        <a href="mailto:your.email@example.com" className="email-link">
          your.email@example.com
        </a>{' '}
        or connect through my social media profiles.
      </p>
    </div>
  );
};

const OfficeHours = () => {
  return (
    <div className="office-hours">
      <h2 className="office-hours-title">Availability</h2>
      <p className="office-hours-description">
        I'm available for tech discussions and collaboration opportunities during weekdays, from 9 AM to 6 PM.
      </p>
    </div>
  );
};

export default Contact;
