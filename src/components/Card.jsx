import { useState } from "react";
import "../styles/Card.css";

function Card({ card, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   if (isClicked) {
  //     console.log("already clicked");
  //   } else {
  //     setIsClicked(true);
  //     console.log("not clicked yet");
  //   }
  // };
  return (
    <div className="card-container">
      <button className="card" data-shiny={card.shiny} onClick={onClick}>
        <img src={card.image} alt={card.name} className="card-image" />
      </button>
    </div>
  );
}

export default Card;
