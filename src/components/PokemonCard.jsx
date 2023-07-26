import PropTypes from "prop-types";

function PokemonCard({ pokemonList }) {
  if (pokemonList.name === "mew") {
    return (
      <figure>
        <p>???</p>
        <figcaption>{pokemonList.name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <img src={pokemonList.imgSrc} alt={pokemonList.name} />
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
