import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextComponent from "./text";
import CountComponent from "./count";
import { useEffect } from "react";
import { fetchPokemon } from "./redux/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.pokemon.status);
  const pokemonList = useSelector((state) => state.pokemon.data);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TextComponent />
      <div className="card">
        <CountComponent />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "succeeded" &&
        pokemonList.map((pokemon) => (
          <span key={pokemon.name}>{pokemon.name} | </span>
        ))}
      {status === "error" && <h1 style={{ color: "red" }}>ERROR</h1>}
    </>
  );
}

export default App;
