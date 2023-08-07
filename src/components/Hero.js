import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* <iframe
        title="Angela Working"
        src="https://my.spline.design/roomgirlworkingcopy-e351c5c694eb3e3745e84590c9a661e3/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe> */}

      <spline-viewer
        loading-anim
        url="https://prod.spline.design/xJCPLlJbgJRcYTut/scene.splinecode"
      ></spline-viewer>

      <div className="description">
        <h1>
          Hey, I'm
          <br />
          <span className="angela-name">Angela Skie Xu.</span>
        </h1>
        <p>
          I am a Computer Science student
          <br /> at University of Waterloo
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={() =>
              window.open("/assets/Angela_Xu_Resume_Apr2023.pdf", "_blank")
            }
          >
            RESUME <i className="fas fa-arrow-circle-down"></i>
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            PROJECTS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
