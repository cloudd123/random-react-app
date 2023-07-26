import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemon }) {
  const previousButton = () => {
    setPokemon((prevPokemon) => {
      const currentIndex = pokemonList.findIndex((item) => item.name === prevPokemon.name);
      const previousPokemonIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
      const previousPokemon = { ...pokemonList[previousPokemonIndex] };

      // Show the "pika pikachu!!!" alert when the chosen pokemon becomes "pikachu"
      if (previousPokemon.name === "pikachu") {
        alert("pika pikachu!!!");
      }

      return previousPokemon;
    });
  };

  const nextButton = () => {
    setPokemon((prevPokemon) => {
      const currentIndex = pokemonList.findIndex((item) => item.name === prevPokemon.name);
      const nextPokemonIndex = (currentIndex + 1) % pokemonList.length;
      const nextPokemon = { ...pokemonList[nextPokemonIndex] };

      // Show the "pika pikachu!!!" alert when the chosen pokemon becomes "pikachu"
      if (nextPokemon.name === "pikachu") {
        alert("pika pikachu!!!");
      }

      return nextPokemon;
    });
  };
  





  return (
    <div>
      <button onClick={previousButton}>Previous</button>
      <button onClick={nextButton}>Next</button>
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPokemon: PropTypes.func.isRequired,
};

export default NavBar;
