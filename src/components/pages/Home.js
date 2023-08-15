import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";
import Cards from "../Cards";

function Home() {
  return (
    <>
      <div className="app-content">
        <Hero />
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
