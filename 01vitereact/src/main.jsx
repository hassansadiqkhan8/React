import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
            <h1>Say hello to the World again</h1>
        </>
    )
}

const variable = "Chai aur code"

const reactElement = React.createElement(
    "a",
    {href: "https://www.google.com", target:"_blank"},
    "Click me to visit google",
    variable
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
