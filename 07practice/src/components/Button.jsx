import React from 'react'

function Button() {
    
    const handleClick = (e) => {
        e.target.textContent="Ouch!"
    }

    return (
        <div>
            <button onClick={(e) => handleClick(e)}>Click Me</button>
        </div>
    )
}

export default Button