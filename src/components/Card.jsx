// import { useState } from "react";
import "../styles/Card.css";

function Card({ card, onClick }) {
  return (
    <div className="card-container">
      <button className="card" data-shiny={card.shiny} onClick={onClick}>
        <img src={card.image} alt={card.name} className="card-image" />
      </button>
    </div>
  );
}

export default Card;
