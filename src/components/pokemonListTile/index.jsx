import { useEffect, useState } from "react";

function Tile({ id, name, clickHandler }) {
    const [types, setTypes] = useState(0); // set on mount
    const [img, setImg] = useState(0) // set on mount
    const [colors, setColors] = useState(0); // set in reaction to types and if types is true

    const pokemonTypes = [
        { type: "normal", color: "bg-gray-400" },     
        { type: "fire", color: "bg-red-500" },        
        { type: "water", color: "bg-blue-500" },      
        { type: "grass", color: "bg-green-500" },    
        { type: "electric", color: "bg-yellow-500" }, 
        { type: "ice", color: "bg-cyan-300" },   
        { type: "fighting", color: "bg-red-600" }, 
        { type: "poison", color: "bg-purple-500" }, 
        { type: "ground", color: "bg-yellow-700" }, 
        { type: "flying", color: "bg-blue-300" },  
        { type: "psychic", color: "bg-pink-500" },
        { type: "bug", color: "bg-green-600" },    
        { type: "rock", color: "bg-yellow-600" },  
        { type: "ghost", color: "bg-purple-600" },    
        { type: "dragon", color: "bg-indigo-600" },  
        { type: "dark", color: "bg-gray-800" },       
        { type: "steel", color: "bg-gray-500" },      
        { type: "fairy", color: "bg-pink-300" }       
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

    function renderTypes() {
        if(types) {
            return(
                types.map((type, index) => (
                    index == 0
                    ? <div className="h-1/3 flex items-center justify-start" key={index}><p className="h-fit flex items-center rounded-lg border-2 border-black px-1 w-fit bg-white text-black">{type.type.name}</p></div>
                    : <div className="h-1/3 flex items-center justify-start" key={index}><p className={`h-fit flex items-center rounded-lg border-2 border-black px-1 w-fit ${colors[1]}`}>{type.type.name}</p></div>
                ))
            )
        }
    }
    if(colors) {
        return (
            <div className="h-1/4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-2/12 p-2">
                <button onClick={clickHandler} data-color={colors[0]} data-id={id} className={`shadow-md relative flex flex-col justify-start h-full w-full rounded-lg p-1 ${colors[0]}`}>
                    <div className="h-1/3 flex items-center justify-start"><p className="h-fit flex items-center px-1 font-bold w-fit border-2 border-black rounded-lg">{name}</p></div>
                    {renderTypes()}
                    <img className="h-5/6 absolute -bottom-2 -right-2" src={img} alt={name} />  
                </button>
            </div>
        );
    }
}

export default Tile;
