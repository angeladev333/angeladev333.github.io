import React from "react";
import '../App.css';
import {Button} from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      
      <iframe title="Angela Working" src='https://my.spline.design/roomgirlworkingcopy-e351c5c694eb3e3745e84590c9a661e3/' frameborder='0' width='100%' height='100%'></iframe>
      <div className="text-buttons-container">
      <h1>Hi, my name is<br/> Angela Skie Xu.</h1>
      <p>I am a Computer Science student<br/> at University of Waterloo</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
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
