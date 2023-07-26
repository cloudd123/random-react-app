import PropTypes from "prop-types";

function PokemonCard({ pokemonList }) {
  if (pokemonList.name === "bulbasaur") {
    return (
      <figure>
        <img src={pokemonList.imgSrc} alt="bulbasaur" />
        <figcaption>{pokemonList.name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <p>???</p>
        <figcaption>{pokemonList.name}</figcaption>
      </figure>
    );
  }
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
