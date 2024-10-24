import { useEffect, useState } from "react";

function Tile({ name, clickHandler, id }) {
    const [types, setTypes] = useState(null);
    const [img, setImg] = useState(null)
    const [colors, setColors] = useState(null);

    const pokemonTypes = [
        { type: "normal", color: "gray-400" },     
        { type: "fire", color: "red-500" },        
        { type: "water", color: "blue-500" },      
        { type: "grass", color: "green-500" },    
        { type: "electric", color: "yellow-500" }, 
        { type: "ice", color: "cyan-300" },   
        { type: "fighting", color: "red-600" }, 
        { type: "poison", color: "purple-500" }, 
        { type: "ground", color: "yellow-700" }, 
        { type: "flying", color: "blue-300" },  
        { type: "psychic", color: "pink-500" },
        { type: "bug", color: "green-600" },    
        { type: "rock", color: "yellow-600" },  
        { type: "ghost", color: "purple-600" },    
        { type: "dragon", color: "indigo-600" },  
        { type: "dark", color: "gray-800" },       
        { type: "steel", color: "gray-500" },      
        { type: "fairy", color: "pink-300" }       
    ];

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
                setTypes(data.types);
                setImg(data.sprites.front_default)
            });
    },[]);

    useEffect(() => {
        if(types) {
            const selectedColors = types.map(type => {
                const matchedType = pokemonTypes.find(pokemonType => pokemonType.type === type.type.name);
                return matchedType.color
            });
            setColors(selectedColors);
        }
    }, [types]);

    return (
        <>
            {colors && (
                <div className="h-1/4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-2/12 p-2">
                    <button onClick={clickHandler} id={id} className={`shadow-md relative flex flex-col justify-start h-full w-full rounded-lg p-1 bg-${colors[0]}`}>
                        <div className="h-1/3 flex items-center justify-start"><p className="h-fit flex items-center px-1 font-bold w-fit border-2 border-black rounded-lg">{name}</p></div>
                        {types.map((type, index) => (
                            index == 0
                            ? <div className="h-1/3 flex items-center justify-start" key={index}><p className="h-fit flex items-center rounded-lg border-2 border-black px-1 w-fit bg-white text-black">{type.type.name}</p></div>
                            : <div className="h-1/3 flex items-center justify-start" key={index}><p className={`h-fit flex items-center rounded-lg border-2 border-black px-1 w-fit bg-${colors[1]}`}>{type.type.name}</p></div>
                        ))}
                        <img className="h-5/6 absolute -bottom-2 -right-2" src={img} alt={name} />  
                    </button>
                </div>
            )}
        </>
    );
}

export default Tile;
