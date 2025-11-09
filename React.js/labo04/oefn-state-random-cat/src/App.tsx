import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)

  const randomCar = () => {
    setHeight(Math.random() + window.innerHeight)
    setWidth(Math.random() + window.innerWidth)
  }

  return (
    <>
      <button onClick={randomCar}>Random Car</button>
      {height != 0 && width != 0 ?
      <img src="https://cataas.com/cat?width=200&height=200" alt="car" 
      style={{position: "fixed", left: width, top: height}}/>
      :
      }
    </>
  )
}

export default App
