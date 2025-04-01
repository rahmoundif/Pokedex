import { useState } from "react";
import "./App.css"
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const[pokemonName , setPokemonName] = useState("bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon === null){
    throw new Error("Invalid pokemon name");
  }
  return (
    <>
    <PokemonCard pokemon ={pokemon} />
    {pokemonList.map((monster, array) => (
          <nav key={array}>
            <button onClick={() => setPokemonName(monster.name)}>{monster.name}</button>
          </nav>
        ))}
    </>
  );
}

export default App;
