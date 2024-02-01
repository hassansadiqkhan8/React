import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [allowedNumbers, setAllowedNumbers] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowedNumbers) {
      str += "0123456789"
    }
    if (allowedChar) {
      str += "!@#$%^&*()_+-={}[]:;'<>,.?/~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, allowedNumbers, allowedChar, setPassword])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()

    //it only highlights the range
    passwordRef.current?.setSelectionRange(0,18)

    //it slected the range elements
    const slectedRange = password.substring(0,18)

    window.navigator.clipboard.writeText(slectedRange)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowedNumbers, allowedChar, passwordGenerator])


  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="">Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={allowedNumbers}
            id='numberInput'
            onChange={() => {
              setAllowedNumbers((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={allowedChar}
            id='charInput'
            onChange={() => {
              setAllowedChar((prev) => !prev)
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>

    </div>

  )
}

export default App
