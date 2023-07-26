import PokemonCard from './components/PokemonCard';
import { useState } from 'react';
  
function App() {
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
  
  const [pokemon, setPokemon] = useState({ ...pokemonList[3] }); // Changed "setUser" to "setPokemon"
  
  const previousButton = () => {
    const currentIndex = pokemonList.findIndex((item) => item.name === pokemon.name);
    const previousPokemonIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
    setPokemon({ ...pokemonList[previousPokemonIndex] });
  }
  const nextButton = () => {
    const currentIndex = pokemonList.findIndex((item) => item.name === pokemon.name);
    const previousPokemonIndex = (currentIndex + 1 + pokemonList.length) % pokemonList.length;
    setPokemon({ ...pokemonList[previousPokemonIndex] });
  }
  
  return (
    <>
      <div>
        <PokemonCard pokemonList={pokemon} /> 
        <button onClick={previousButton}>Previous</button> 
        <button onClick={nextButton}>next</button> 
      </div>
    </>
  );
}

export default App;
