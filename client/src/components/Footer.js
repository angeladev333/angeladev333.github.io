import React, { useState } from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Message Sent.");
        setFormData({
          // reset the form
          name: "",
          email: "",
          message: "",
        });
      } else if (data.status === "fail") {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    }
  };

  return (
    <div id={props.id} className="footer-container">
      <section className="footer-email">
        <div className="footer-email-wrap">
          <div className="footer-email-top">
            <p className="footer-email-text">Let's Connect!</p>
            <p className="footer-email-heading">Contact Me</p>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/a.ngela_xu/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/angela-xu/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/angeladev333"
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        <div className="input-areas">
          <form className="input-form" onSubmit={handleFormSubmit}>
            Your Name
            <input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="What's your name?"
              className="footer-input"
            />
            Your Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="What's your email?"
              className="footer-input"
            />
            Message
            <textarea
              type="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type any message you want to send to me here :)"
              className="footer-input"
            />
            {/* add an icon */}
            <Button type="submit">Send</Button>
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link to="/" className="social-logo">
              Angela <i className="fas fa-star" />
            </Link>
          </div> */}
          <small className="website-rights">
            Designed & Built by Angela Xu 💗
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
