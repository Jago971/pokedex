import { useEffect, useState } from "react";

function PokemonInfo( { id, color, clickHandler } ) {

    const [pokemon, setPokemon] = useState(0)
    const [img, setImg] = useState(0)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setImg(data.sprites.front_default)
        })
    },[])



    return (
            <>
                <div className={`absolute h-screen w-screen ${color} top-0 left-0 -z-10`}></div>
                <div className="h-full w-full p-2 bg-white flex rounded-3xl">
                    <div className="w-1/2 content-center">
                    <img className="w-full" src={img} alt={pokemon.name} />
                    </div>
                    <div className="w-1/2 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-4 text-4xl">
                    <div>
                        <p className="py-4">Height: <span className="font-bold">{pokemon.height * 10} cm</span></p>
                        <p className="py-4">Weight: <span className="font-bold">{pokemon.weight / 10} kg</span></p>
                        <p className="py-4">Evolutions:</p>
                    </div>
                        <button onClick={clickHandler} className="bg-gray-300 w-full rounded-lg text-gray-500 p-2 justify-self-end">BACK</button>
                    </div>
                </div>
            </>     
    )
}

export default PokemonInfo