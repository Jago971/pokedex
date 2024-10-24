import { useEffect, useState } from "react";

function PokemonInfo( { pokemon } ) {

    const [colors, setColors] = useState(0);

    const pokemonTypes = [
        { type: "normal", color: "bg-gray-300" },     
        { type: "fire", color: "bg-red-400" },        
        { type: "water", color: "bg-blue-400" },      
        { type: "grass", color: "bg-green-400" },    
        { type: "electric", color: "bg-yellow-400" }, 
        { type: "ice", color: "bg-cyan-200" },   
        { type: "fighting", color: "bg-red-500" }, 
        { type: "poison", color: "bg-purple-400" }, 
        { type: "ground", color: "bg-yellow-600" }, 
        { type: "flying", color: "bg-blue-200" },  
        { type: "psychic", color: "bg-pink-400" },
        { type: "bug", color: "bg-green-500" },    
        { type: "rock", color: "bg-yellow-500" },  
        { type: "ghost", color: "bg-purple-500" },    
        { type: "dragon", color: "bg-indigo-500" },  
        { type: "dark", color: "bg-gray-700" },       
        { type: "steel", color: "bg-gray-400" },      
        { type: "fairy", color: "bg-pink-200" }       
    ];

    useEffect(() => {
            const selectedColors = pokemon.types.map(type => {
                const matchedType = pokemonTypes.find(pokemonType => pokemonType.type === type.type.name);
                return matchedType.color
            });
            setColors(selectedColors);
    }, []);

    return (
        <>
        {!colors == 0 && (
            <>
            <div className={`absolute h-screen w-screen ${colors[0]} top-0 left-0 -z-10`}></div>
            <div className="h-full w-full p-2 bg-white flex rounded-3xl">
                <div className="w-1/2 content-center">
                    <img className="w-full" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="w-1/2 bg-gray-100 rounded-2xl flex flex-col px-12 pt-6 text-4xl">
                <p className="py-4">Height: <span className="font-bold">{pokemon.height * 10} cm</span></p>
                <p className="py-4">Weight: <span className="font-bold">{pokemon.weight / 10} kg</span></p>
                <p className="py-4">Evolutions:</p>
                {
                    pokemon.ev
                }
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default PokemonInfo