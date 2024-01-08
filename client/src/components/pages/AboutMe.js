import React from "react";

export default function AboutMe(props) {
  return (
    <>
      <div id={props.id} className="text-center">
      <h1 className="text-center text-4xl text-secondary lg:text-5xl">ABOUT ME</h1>
        <div className="bg-white mt-10 p-6 rounded-lg shadow-lg mx-auto max-w-6xl" style={{ backgroundColor: '#bd8ea4' }}> 
        <div className="bg-white p-1 rounded-lg shadow-lg mx-auto max-w-6xl" style={{ backgroundColor: 'white' }}> 
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-left w-3/5 mx-4 mt-4 text-secondary text-lg font-body font-medium">
              💻 2nd Year CS Honours @ UWaterloo CGPA: 3.9/4; AI Specialization; Computational Mathematics Minor; Scotiabank Women in CS Scholarship ($10k) <br /><br />
              🎶 ARCT Piano Performer's Diploma; Level 10 Violin Certificate; Amateur Flutist, Guitarist <br /><br />
              📸 Photographer @ CSC (Team Lead) <br /><br />
              🏆 First Place @ Hack the Valley 2023, Winner @ Ignition Hacks 2022; Hack Western 2023<br /><br />
              🌸 Incoming Tokyo Tech Exchange in Spring 2025! <br /><br />
            </p>
            <img
              src="elements/images/ME.png"
              alt="Angela Xu (Me!)"
              className="object-contain h-56 w-56 rounded-full"
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
