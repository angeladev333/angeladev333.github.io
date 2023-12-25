import React from "react";
import "../../App.css";
import Hero from "./Hero";
import Footer from "../Footer";
import Projects from "../Projects";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <Hero id="home-section" />
        </div>
        <AboutMe id="about-section" />
        <Projects id="projects-section" />
        <Footer id="contact-section" />
      </div>
    </>
  );
}

export default Home;
