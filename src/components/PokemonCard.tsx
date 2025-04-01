interface  pokemon {
  name: string,
  imgSrc?: boolean,
};

function PokemonCard( { pokemon }) {

  const pokemonSrc = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>;
  return (
    <figure>
      {pokemonSrc}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ); 
  };

  export default PokemonCard;

