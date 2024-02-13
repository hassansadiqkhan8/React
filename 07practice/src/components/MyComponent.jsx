import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState("")
    const [num, setNum] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShiping] = useState("Delivery")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleNumChange = (e) => {
        setNum(e.target.value)
    }

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    const handleShipping = (e) => {
        setShiping(e.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={num} onChange={handleNumChange} />
            <p>Quantity: {num}</p>

            <textarea placeholder='Please write your comments' value={comment} onChange={handleComment}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">select an option</option>
                <option value="visa">Visa</option>
                <option value="master card">Master card</option>
            </select>
            <p>Payment: {payment}</p>


            <input id='pick-up' type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping} />

            <label htmlFor="pick-up">Pick up</label>

            <br />

            <input id='delivery' type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping} />

            <label htmlFor="delivery">Delivery</label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent