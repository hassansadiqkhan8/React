import React, { useState } from 'react'


function UpdateArrayOfObjects() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")

        if (carMake && carModel !== "") {
            setCars(c => [...c, newCar])
        }

    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }


    return (
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} />
            <input type="text" value={carMake} placeholder='enter the car Make' onChange={handleMakeChange} />
            <input type="text" value={carModel} placeholder='enter the car Model' onChange={handleModelChange} />
            <button onClick={handleAddCar} >Add Car</button>
        </div>
    )
}

export default UpdateArrayOfObjects