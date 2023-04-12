import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div className="app-content">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default Home;
