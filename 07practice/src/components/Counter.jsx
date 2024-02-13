import React, { useState } from 'react'


function Counter() {
    let [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(count -= 1)
    }

    const reset = () => {
        setCount(count = 0)
    }

    return (
        <>
        <div>
            <h1>{count}</h1>
        </div>
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default Counter