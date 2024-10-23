import { useState } from 'react'

function Button( { clickHandler, count } ) {
    
    return (
        <>
        <button onClick={clickHandler} className="bg-black text-white p-2 m-12">I've been clicked {count} times</button>
        </>
    )
}

export default Button