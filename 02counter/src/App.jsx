import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCounter] = useState(0);

  // let count = 2;

  const addValue = () => {
    if(count < 20){
      setCounter(count+1);
    }
  }

  const subValue = function(){
    if(count >= 1){
    setCounter(count-1)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue}>Plus</button>
      <br></br>
      <button onClick={subValue}>Minus</button>

    </>
  )
}

export default App
