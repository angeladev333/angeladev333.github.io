import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./../Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModelDonut } from "../Models";

function Hero(props) {
  return (
    <div id={props.id} className="hero-container">
      <spline-viewer
        loading-anim
        url="https://prod.spline.design/xJCPLlJbgJRcYTut/scene.splinecode"
      ></spline-viewer>
      {/* <ModelDonut /> */}

      <div className="description">
        <p className="text-position">SOFTWARE ENGINEER & DESIGNER</p>
        <h1>
          Hey, I'm
          <br />
          <span className="angela-name">Angela Skie Xu.</span>
        </h1>
        <p className="text-description">
          I am a Computer Science student
          <br /> at University of Waterloo
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={() =>
              window.open("/assets/Angela_Xu_Resume_3.3.pdf", "_blank")
            }
          >
            RESUME <i className="fas fa-arrow-circle-down"></i>
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              size="lg"
              onClick={() =>
                window.open("https://github.com/angeladev333", "_blank")
              }
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
