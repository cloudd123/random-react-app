import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemon }) {
  const previousButton = () => {
    setPokemon((prevPokemon) => {
      const currentIndex = pokemonList.findIndex((item) => item.name === prevPokemon.name);
      const previousPokemonIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
      return { ...pokemonList[previousPokemonIndex] };
    });
  };

  const nextButton = () => {
    setPokemon((prevPokemon) => {
      const currentIndex = pokemonList.findIndex((item) => item.name === prevPokemon.name);
      const nextPokemonIndex = (currentIndex + 1) % pokemonList.length;
      return { ...pokemonList[nextPokemonIndex] };
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
