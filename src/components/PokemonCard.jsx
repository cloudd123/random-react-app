function PokemonCard({name, imgSrc}) {
  
    if (name === "bulbasaur") {
      return (
        <figure>
          <img src={imgSrc} alt="bulbasaur" />
          <figcaption>{name}</figcaption>
        </figure>
      );
    } else {
      return (
        <figure>
          <p>???</p>
          <figcaption>{name}</figcaption>
        </figure>
      );
    }
  }
  
  export default PokemonCard;
  