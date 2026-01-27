import { useState, useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[number, setNumber] = useState(false)
  const[character, setCharacter] = useState(false)
  const[password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Copied Successfully 👌")
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str += '0123456789'
    }

    if(character){
      str += "`!@#$%^&*~"
    }

    for(let i = 1;i <= length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  useEffect(() => {
    passwordGenerator() 
  }, [length, number, character, passwordGenerator])

  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
    <h1 className="text-white text-center my-2">Password Generator</h1>

    <div className="flex rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 bg-amber-50 text-black"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />

      <button 
      onClick={copyPasswordToClipboard}
      className="bg-orange-500 text-white px-4 hover:bg-orange-600 cursor-pointer">
        Copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <input
        type='checkbox'
        defaultChecked={number}
        id='numberInput'
        onChange={() => {
          setNumber((prev) => !prev)
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div>
        <input
        type='checkbox'
        defaultChecked={number}
        id='characterInput'
        onChange={() => {
          setNumber((prev) => !prev)
        }}
        />
        <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>
  </div>
</>

  )
}

export default App
