import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Me</h2>
        </div>

        <div className="contact-btns">
          <a
            href="mailto:ahmedmohamedsami203@gmail.com"
            className="contact-btn"
          >
            <i className="fa-solid fa-envelope"></i>
            Email Me
          </a>
          <a href="https://wa.me/+201140241672" className="contact-btn">
            <i className="fa-brands fa-whatsapp"></i>
            let's Chat
          </a>
        </div>

        <div className="contact-social-icons">
          <a
            href="https://www.linkedin.com/in/ahmed-elashry-026a03247/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/AAshry10"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/a.ashry.615/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
