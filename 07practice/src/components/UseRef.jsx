import React, { useEffect, useReducer, useRef, useState } from 'react'

function UseRef() {
    const ref = useRef(0)

    useEffect(()=>{
        console.log("Number rendered");
    })

    function handleClick(){
        ref.current++
        console.log(ref.current);
    }

    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default UseRef