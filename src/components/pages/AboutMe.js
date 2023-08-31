import React from "react";
import "../../App.css";
import "../AboutMe.css";

export default function AboutMe(props) {
  return (
    <>
      <div id={props.id} className="about__content">
        <h1 className="about">ABOUT ME</h1>
        <div className="about__container">
          <img
            src="elements/images/ME.png"
            alt="Angela Xu (Me!)"
            className="about__profilepic"
          />
          <p className="about__message">
            {`Welcome to my profile 👋! I'm a 2A Computer Science 🖥️ undergraduate at the University of Waterloo. Through roles in club management 📋, tutoring 📚, and piano instruction 🎹, I've honed my leadership, public speaking, and team-building abilities.

I'm deeply driven by computer science, machine learning 🤖, and mathematics. My ambition is not just to learn, but to apply this knowledge in building impactful projects 🚀 that seed positive changes both locally and globally 🌍. Always curious, I'm constantly on the lookout for avenues of learning, ensuring I stay ahead in this ever-evolving field.

Balancing rigorous academics 📖, arts 🎨, and community leadership, I pride myself on being a diligent and well-rounded individual. Outside of the academic realm, my passions extend to playing the piano, violin, animating, coding, and chess.

✨ Technical Proficiencies: React ⚛️, React Native 📱, C++, Java ☕, JavaScript, HTML/CSS, Racket, Python 🐍.`}
          </p>
        </div>
      </div>
    </>
  );
}
