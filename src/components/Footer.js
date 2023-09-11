import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(props) {

  const handleFormSubmit = async (event) => {

  }
  
  return (
    <div id={props.id} className="footer-container">
      <section className="footer-email">
        <div className="footer-email-wrap">
          <div className="footer-email-top">
            <p className="footer-email-text">Let's Connect!</p>
            <p className="footer-email-heading">Contact Me</p>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>

        <div className="input-areas">
          <form className="input-form" onSubmit={handleFormSubmit}>
            Your Name
            <input
              type="name"
              name="name"
              placeholder="What's your name?"
              className="footer-input"
            />
            Your Email
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              className="footer-input"
            />
            Message
            <textarea
              type="message"
              name="message"
              placeholder="Type any message you want to send to me here :)"
              className="footer-input"
            />
          </form>
          <Button>Send</Button>
          {/* add an icon */}
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
