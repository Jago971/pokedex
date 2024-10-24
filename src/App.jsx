import { useState, useEffect } from "react";
import Tile from "./components/pokemonListTile/index.jsx";
import PokemonInfo from "./components/pokemonEntry/index.jsx";

function App() {
  const [pokemonList, setList] = useState([])
  const [chosenPokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    if(!page) {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
      });
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
        })
    }
  },[page])

  function btnClick(e) {
    setPage(e.target.id)
  }

  function renderContent() {
    if(!page) {
      pokemonList
      && pokemonList.map((pokemon, i) => {
        return (<Tile key={i+1} clickHandler={btnClick} id={i+1} name={pokemon.name}></Tile>)
      })
    } else {
      chosenPokemon
      && <PokemonInfo id={page} pokemon={chosenPokemon}></PokemonInfo>
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen p-2 gap-2">
      <header className="grow flex flex-col justify-end px-2">
        <p className="text-4xl">{page == 0 ? 'POKEDEX' : (chosenPokemon && chosenPokemon.name)}</p>
      </header>
      <section className="h-3/4 flex flex-wrap gap-0 overflow-auto no-scrollbar">
      {renderContent()}
      </section>
      <footer className="px-2 pb-2">
        <p className="">Using PokeAPI by Matt Mannings</p>
      </footer>
    </div>
  );
}

export default App;