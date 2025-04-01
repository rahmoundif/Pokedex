interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pmonster, index) => (
        <button key={index} onClick={() => setPokemonName(pmonster.name)}>
          {pmonster.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
