import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
   
  const addValue = () => {
    console.log("add value")
      if(counter < 20) {
      setCounter(counter+ 1)
    }
  }
  const removeVal = () => {
    console.log("remove value")
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
