import "../styles/Card.css";
import cardBack from "../assets/card-back.png";
function Card({ card }) {
  return (
    <div className="card-inner">
      <div className="card-front">
        <button className="card" data-shiny={card.shiny}>
          {card.shiny && <div className="shiny-symbol" />}
          <img
            src={card.image}
            alt={card.name}
            className="card-image"
            draggable="false"
          />
          <p className="card-name">
            <span className="name">{card.name}</span>
          </p>
        </button>
      </div>
      {/* <div className="card-back">
        <img src={cardBack} alt="pokemon card back" className="back" />
      </div> */}
    </div>
  );
}

export default Card;
