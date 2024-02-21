import "./App.css";
import usePokemons from "./usePokemons";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Score from "./components/Score";

function App() {
  const { pokemons, getRandomPokemons, shufflePokemons, setPokemons } =
    usePokemons();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("best-score") || 0
  );
  const [gameStatus, setGameStatus] = useState("start");
  const [amount, setAmount] = useState(3);
  // let amount = 3;

  async function fetchData(cant) {
    // console.log(amount);
    setPokemons(await getRandomPokemons(cant));
  }

  function incrementScore() {
    const incrementedScore = currentScore + 1;
    setCurrentScore(incrementedScore);
    const newBestScore = Math.max(incrementedScore, bestScore);
    setBestScore(newBestScore);

    localStorage.setItem("best-score", newBestScore);
  }
  useEffect(() => {
    fetchData(3);
    setCurrentScore(0);
  }, []);

  useEffect(() => {
    if (gameStatus !== "start") {
      setCurrentScore(0);
      handleLevelUp();
      setGameStatus("start");
    }
  }, [gameStatus]);

  function handleLevelUp() {
    if (gameStatus === "win") {
      const nextAmount = amount + 2;
      setAmount(amount + 2);
      fetchData(nextAmount);
    } else if (gameStatus === "lose") {
      setAmount(3);
      fetchData(3);
    }
    setCurrentScore(0);
  }

  function updateCardsClicked(index) {
    const newCards = [...pokemons];
    newCards[index].isClicked = true;
    setPokemons(newCards);
  }

  function handleCardClick(index) {
    const card = pokemons[index];
    if (card.isClicked) {
      setGameStatus("lose");
      // setTimeout(() => {}, 1000);
      return;
    }
    updateCardsClicked(index);
    incrementScore();
    const everyCardClicked = pokemons.every((card) => card.isClicked);
    if (!everyCardClicked) {
      shufflePokemons();
    }
    const isWin = pokemons.length === currentScore + 1;
    if (isWin) {
      setGameStatus("win");
    }
  }

  return (
    <div className="App">
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Main cards={pokemons} onClick={handleCardClick} />
    </div>
  );
}

export default App;
