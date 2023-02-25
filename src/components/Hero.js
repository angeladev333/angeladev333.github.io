import React from "react";
import '../App.css';
import {Button} from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <video src="/public/elements/videos/video-2.mp4" autoPlay loop muted />
      <h1>Hi, my name is Angela Skie Xu.</h1>
      <p>I am a Computer Science student at University of Waterloo</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
