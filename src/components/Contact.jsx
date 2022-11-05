import React from "react";
import "../styles/contact.css";

const Contact = () => {
  const name = "Tolani Daniel";
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-intro">
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form className="form" id="contact-form">
          <div className="name-input-wrapper">
            <label>
              First name:
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Enter your first name"
              />
            </label>
            <label>
              Last name:
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Enter your last name"
              />
            </label>
          </div>

          <label>
            Email:
            <input
              id="email"
              type="text"
              name="email"
              placeholder="yourname@email.com"
            />
          </label>
          <label>
            Message:
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </label>
          <div className="checkbox-wrapper">
            <input type="checkbox" id="provideData" />
            <label htmlFor="provideData">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>

          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
