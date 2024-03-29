import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ANGELA
            <i className="fas fa-star" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact-section"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              onClick={() =>
                window.open("https://angela-xu-site-ii.super.site/", "_blank")
              }
            >
              VISIT SITE 2
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
