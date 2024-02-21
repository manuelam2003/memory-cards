import "./App.css";
import usePokemons from "./usePokemons";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  const { pokemons, getRandomPokemons, shufflePokemons, setPokemons } =
    usePokemons();
  useEffect(() => {
    async function fetchData() {
      setPokemons(await getRandomPokemons(5));
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Main cards={pokemons} />
    </div>
  );
}

export default App;
