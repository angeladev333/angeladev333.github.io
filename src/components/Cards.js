import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>PROJECTS! :D</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/elements/images/weatherwear1.png"
              text="WeatherWear"
              description="WeatherWear is a web application that generates recommended outfits using AI based on the current weather in your location. Users input their location and clothing style and are provided with outfit recommendations tailored to the current temperature and precipitation."
              techstack="React.js, Next.js, Javascript, HTML/CSS, OpenWeatherMap API, Puppeteer, Autocode"
              collaboration="In collaboration with Jessica Ding, Polly Liu, and Jiwon Kim"
              path="https://github.com/angeladev333/WeatherWear"
            />
            <CardItem
              src="/elements/images/wikiLearn_logo.png"
              text="WikiLearn"
              description=""
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/elements/images/wikiLearn_logo.png"
              text="WikiLearn"
              description="WikiLearn is a full-stack web application designed for effective learning. Its intuitive interface enables users to explore a wide range of topics, from McMaster University to quantum mechanics. More than just providing access, WikiLearn transforms extensive Wikipedia articles into concise, digestible summaries. It offers precise definitions of complex terms, supplemented with curated media from the web. Relevant YouTube videos are seamlessly integrated, allowing deeper dives into subjects. Unique to WikiLearn is its ability to quantify word complexity, ensuring challenging terms are clarified. The Explore page, updated daily, encourages exploration across diverse topics, creating a centralized hub for comprehensive learning."
              techstack="React.js, JavaScript, HTML/CSS, Tailwind, Python, Flask, YouTube APIs, Wikipedia APIs, and language APIs"
              collaboration="In collaboration with Emma Huang, Richard Shuai, and Carolyn Zhang"
              path="https://github.com/angeladev333/deltahacks-race"
            />
            <CardItem src="images/img-2.jpg" text="Explore" path="/services" />
            <CardItem src="images/img-2.jpg" text="Explore" path="/services" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
