import Card from "./Card";
import "../styles/Main.css";

function Main({ cards, onClick }) {
  return (
    <main>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} onClick={() => onClick(index)} />
        ))}
      </div>
    </main>
  );
}

export default Main;
