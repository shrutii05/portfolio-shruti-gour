

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         "service_crh0f7d",
        "template_hye4zs1", 
        e.target,
        "FVBML1FPRvWbncAWO"    
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
          e.target.reset();
        },
        (error) => {
          setStatusMessage("Something went wrong. Please try again.");
          setStatusType("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">
        Get in <span>touch</span>
      </h1>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let’s talk</h2>
          <p>
            I’m currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on.
          </p>

          <div className="contact-info">
            <p>📧 shrutigour415@gmail.com</p>
            <p>📞 +91 9826344340</p>
            <p>📍 Indore, India</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit">Submit now</button>

          {/* Status Message */}
          {statusMessage && (
            <div className={`status-message ${statusType}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
