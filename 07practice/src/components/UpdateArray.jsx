import React, { useState } from 'react'

function UpdateArray() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood() {
        const newFood = document.getElementById("food-input").value
        document.getElementById("food-input").value = ""

        if (newFood !== "") {
            setFoods(f => ([...f, newFood]))
        }

    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }


    return (
        <div>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={()=>handleRemoveFood(index)} >
                        {food}
                    </li>)}
            </ul>
            <input type="text" placeholder="Enter the name of food" id="food-input" />
            <button onClick={handleAddFood} >Add Food</button>
        </div>
    )
}

export default UpdateArray