import React from "react";
import CardItem from "./CardItem";

function Projects(props) {
  return (
    <div id={props.id} className="py-16 bg-white">
      <h1 className="text-center text-4xl text-secondary lg:text-5xl">
        PROJECTS
      </h1>
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="relative my-12">
          {/* TODO: do json and auto format */}
          <ul className="mb-6 flex flex-wrap justify-center">
            <CardItem
              src="/elements/images/heckler1.png"
              text="HecklerAI"
              description="Heckler.AI monitors hand and arm gestures, interprets facial expressions from smiles to looking disengaged, and evaluates your posture. 'Elevate Your Presence, Perfect Your Pitch.'"
              techstack="Python, OpenCV, Mediapipe, Taipy"
              collaboration="In collaboration with Miranda Chen, Joudat Haroon, and Nathan Jang"
              path="https://devpost.com/software/heckler-ai"
            />
            <CardItem
              src="/elements/images/Harbored.png"
              text="Harbor.ed"
              description="Harbor.ed is an online space which identifies when a user is particularly sad and prompts the sea creatures to provide extra comfort, ensuring a personalized and empathetic experience."
              techstack="React.js, Three.js, Tailwind CSS, OpenCV, Python, AWS, Cohere, Infobip, Kubernetes, Docker, MongoDB"
              collaboration="In collaboration with Linda Wang, Nathan Chung, and Richard Shuai"
              path="https://devpost.com/software/harbor-ed"
            />
          </ul>
          <ul className="mb-6 flex flex-wrap justify-center">
            <CardItem
              src="/elements/images/visioncraftai.png"
              text="visioncraft.ai"
              description="VisionCraft is a new way to capture and analyze your hardware setup, unlocking a wealth of possibilities."
              techstack="Next.js, Tailwind CSS, Google Cloud, OpenAI API, Yolo v3, PyPDF, IPFS, Vercel"
              collaboration="In collaboration with Ian Korovinsky, Brian Yan, and Lucy Qi"
              path="https://github.com/angeladev333/visioncraft-ai"
            />
            <CardItem
              src="/elements/images/weatherwear1.png"
              text="WeatherWear"
              description="WeatherWear is a web application that generates recommended outfits using AI based on the current weather in your location. Users input their location and clothing style and are provided with outfit recommendations tailored to the current temperature and precipitation."
              techstack="React.js, Next.js, Javascript, HTML/CSS, OpenWeatherMap API, Puppeteer, Autocode"
              collaboration="In collaboration with Jessica Ding, Polly Liu, and Jiwon Kim"
              path="https://github.com/angeladev333/WeatherWear"
            />
          </ul>
          <ul className="mb-6 flex flex-wrap justify-center">
            <CardItem
              src="/elements/images/wikiLearn-banner.png"
              text="WikiLearn"
              description="WikiLearn is a full-stack web application designed for effective learning. Its intuitive interface enables users to explore a wide range of topics, from McMaster University to quantum mechanics. More than just providing access, WikiLearn transforms extensive Wikipedia articles into concise, digestible summaries. It offers precise definitions of complex terms, supplemented with curated media from the web. Relevant YouTube videos are seamlessly integrated, allowing deeper dives into subjects. Unique to WikiLearn is its ability to quantify word complexity, ensuring challenging terms are clarified. The Explore page, updated daily, encourages exploration across diverse topics, creating a centralized hub for comprehensive learning."
              techstack="React.js, JavaScript, HTML/CSS, Tailwind, Python, Flask, YouTube APIs, Wikipedia APIs, and language APIs"
              collaboration="In collaboration with Emma Huang, Richard Shuai, and Carolyn Zhang"
              path="https://github.com/angeladev333/deltahacks-race"
            />
            <CardItem
              src="/elements/images/EnergyCapitalist.png"
              text="Energy Capitalist"
              description="Energy Capitalist is a free to play incremental web-based game promoting environmental sustainability through using smart devices in a household. The goal is to conserve as much energy you can by turning off devices and purchasing all the smart devices in the web shop. The in-game items are based on smart Google devices, and you can earn currency based on the decisions you make and the items you purchase. The currency represents the total energy saved in the household, and it puts into perspective how much energy can be saved from using automated technologies."
              techstack="JavaScript, HTML/CSS, Bulma, and Procreate"
              collaboration="In collaboration with Micah Omondi and Olubukunmi Kadri"
              path="https://final-cssi-project.angelaxu333.repl.co/"
            />
          </ul>
          <ul className="mb-6 flex flex-wrap justify-center">
            <CardItem
              src="/elements/images/travl.png"
              text="TRAV.L"
              description="An intuitive Travel Buddy website promoting safe educational travel for students. Users can create an account, submit tickets for travel destinations, and connect with other users to plan trips together. Users can also create and join groups to meet other students with similar interests."
              techstack="JavaScript, HTML/CSS, and Bulma"
              collaboration="In collaboration with Maggie Guo and Evelyn Phan"
              path="https://buddy-system-final.angelaxu333.repl.co/"
            />
            <CardItem
              src="/elements/images/CW_Event_Registry.png"
              text="Claude Watson Event Registry"
              description="CW Passport Registry is a resourceful database program used to record and register students for Claude Watson passport events. Users, such as the Claude Watson ambassadors, can add and delete events as well as add, delete, and modify participant information in the events using simple commands."
              techstack="C++"
              path="https://github.com/angeladev333/CW-Event-Registry/blob/main/2021%20-%20CW%20Passport%20Registry%20Report.pdf"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
