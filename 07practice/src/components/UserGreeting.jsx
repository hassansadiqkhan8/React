import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMessage = <h2 className='welcome-message'>
        Welcome ***{props.username}***
    </h2>
    const logginPrompt = <h2 className='loggin-prompt'>
        Please log in to continue
    </h2>

    return (
        <>
            {props.isLoggedIn ? welcomeMessage: logginPrompt}
        </>
    )
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting
