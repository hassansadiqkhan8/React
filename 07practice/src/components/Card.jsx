import React from 'react'
import Proptypes from "prop-types"


function Card(props) {
    return (
        <div className='card'>
            <img className='card-image' src="https://images.pexels.com/photos/2341112/pexels-photo-2341112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Picture" />

            <h2 className='card-title'>{props.name} </h2>
            <p className='card-text'>I am {props.vowels} {props.profession}, working in Meta. I am the team Lead</p>
        </div>
    )
}
Card.propTypes={
    name: Proptypes.string,
    profession: Proptypes.string,
    vowels: Proptypes.string
}

export default Card