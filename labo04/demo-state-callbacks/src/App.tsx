import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState<number>(0);

  const onClick : React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const reset : React.MouseEventHandler<HTMLButtonElement>= () => {
    setCounter(0);
  }

  const [number, setNumber] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5]);

  const addNumber = () => {
    const newArray : number [] = [number, ...numbers]
    setNumbers(newArray)
  }

  const deleteNumber = (index: number) => {
    // const newArray : number [] = [...numbers];
    // newArray.splice(index, 1);
    // setNumbers(newArray);
    numbers.filter((_, i) => index !== i)
  }

  const updateNumber = (index: number) => {
    let promptNumber = prompt("Enter a number")
    if (promptNumber)
    {
      let newNumber : number = parseInt(promptNumber)

      let newArray : number[] = numbers.map((oldNumber, i ) => 
        (index === i ? newNumber : oldNumber)
      )

      setNumbers(newArray)
    }
  }

  return (
    <>
      <button onClick={onClick}>{counter}</button>
      <button onClick={reset}>RESET</button>

      <ul>
        {
          numbers.map((number, index) => 
            <li key={index}>
              {number}
              <button onClick={deleteNumber(index)}>
                DELETE
              </button>
              <button>
                UPDATE
              </button>
            </li>
          )
        }
      </ul>

      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

      <button onClick={addNumber}>Add</button>
    </>
  )
}

export default App
