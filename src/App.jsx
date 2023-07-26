import PokemonCard from './components/PokemonCard';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
  
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
  const [pokemon, setPokemon] = useState({ ...pokemonList[1] }); 

 

  useEffect(
    () => {
    alert("hello pokemon trainer :)");
  }, 
  []
  );

  return (
    <>
      <div>
        <PokemonCard pokemonList={pokemon} />
        <NavBar pokemonList={pokemonList} setPokemon={setPokemon} />
      </div>
    </>
  );
}

export default App;
