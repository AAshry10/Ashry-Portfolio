import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section className="Contact" id="contact">
      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Get in touch</h2>
          <p>I'm available for freelance projects and full-time roles. Send a brief message and I'll get back within a few days.</p>
          
          <div className="contact-buttons">
            <a href="mailto:hello@yourmail.com" className="btn email-btn">
              <i className="fa-solid fa-envelope"></i>
              Email me
            </a>
            <a href="#" className="btn-secondary chat-btn">Let's chat</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/AAshry10" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-elashry-026a03247/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Your name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ahmed"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@mail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Brief project description"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn send-message-btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

