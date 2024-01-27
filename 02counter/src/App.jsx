import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20) {
      return
    }
    setCounter(counter + 1)
    console.log(counter+1);
  }

  const remValue = () => {
    if (counter <= 0) {
      return
    }
    setCounter(counter - 1)
    console.log(counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value: {counter} </h3>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={remValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
