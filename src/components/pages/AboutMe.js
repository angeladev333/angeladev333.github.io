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
            Hello! Thank you for visiting my page!
            <br></br>
            <br></br>I am a diligent and well rounded Computer Science student
            at the University of Waterloo. From experiences of managing clubs,
            tutoring, and teaching piano, I have developed skills such as
            leadership, public speaking, and team building. I am deeply
            passionate in fields of computer science, machine learning, and
            mathematics, and I hope to create innovations that can help plant
            positivity in local and global communities.
            <br></br> <br></br>Programming Competencies: C++, Java, HTML/CSS,
            JavaScript, Racket, Python
          </p>
        </div>
      </div>
    </>
  );
}
