import "./App.css";
import usePokemons from "./usePokemons";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  const { pokemons, getRandomPokemons, shufflePokemons, setPokemons } =
    usePokemons();
  useEffect(() => {
    async function fetchData() {
      setPokemons(await getRandomPokemons(10));
    }
    fetchData();
  }, []);

  function handleCardClick(index) {
    console.log(index);
    shufflePokemons();
  }

  return (
    <div className="App">
      <Main cards={pokemons} onClick={handleCardClick} />
    </div>
  );
}

export default App;
