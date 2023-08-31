import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";
import Cards from "../Cards";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <>
      <div className="app-content">
        <Hero id="home-section" />
      </div>
      <AboutMe id="about-section" />
      <Cards id="projects-section" />
      <Footer id="contact-section" />
    </>
  );
}

export default Home;
