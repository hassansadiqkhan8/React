import React, { useEffect, useState } from 'react'


function UseEffect() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added");
    }, [])

    useEffect(()=>{
        document.title = `size ${width} x ${height}`
    },[width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <p>Window Width: {width} </p>
            <p>Window Height: {height} </p>
        </div>
    )
}

export default UseEffect