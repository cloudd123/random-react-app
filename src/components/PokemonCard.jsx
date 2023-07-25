function PokemonCard(props) {
    const pokemon = props.pokemonList[0];
  
    if (pokemon.name === "bulbasaur") {
      return (
        <figure>
          <img src={pokemon.imgSrc} alt="bulbasaur" />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      );
    } else {
      return (
        <figure>
          <p>???</p>
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      );
    }
  }
  
  export default PokemonCard;
  