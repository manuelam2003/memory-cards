import Card from "./Card";
import "../styles/Main.css";

function Main({ cards }) {
  return (
    <main>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export default Main;
