import React from 'react'

function List() {
    const fruits = [
        { id: 1, name: "orange", calories: 45 },
        { id: 2, name: "banana", calories: 105 },
        { id: 3, name: "apple", calories: 95 },
        { id: 4, name: "mango", calories: 80 }
    ]

    const mapFn = (fruit) => {
        return <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b> </li>
    }

    const newList = fruits.map(mapFn)

    return (

        <ul>{newList}</ul>

    )
}

export default List