import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a
          href={props.path}
          className="cards__item__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="cards__item__pic-wrap">
            <img
              src={props.src}
              alt={props.text}
              className="cards__item__img"
            />
          </figure>
        </a>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <br></br>
          <p className="cards__item__techstack">{props.techstack}</p>
          <br></br>
          <p className="cards__item__description">{props.description}</p>
          <p className="cards__item__collaboration">{props.collaboration}</p>
        </div>
      </li>
    </>
  );
}

export default CardItem;
