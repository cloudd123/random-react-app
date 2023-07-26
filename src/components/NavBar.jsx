import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemon }) {
  const handleButtonClick = (selectedPokemon) => {
    setPokemon(selectedPokemon);

    // Show the "pika pikachu!!!" alert when the chosen pokemon becomes "pikachu"
    if (selectedPokemon.name === "pikachu") {
      alert("pika pikachu!!!");
    }
  };

  return (
    <>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name} onClick={() => handleButtonClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </>
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
