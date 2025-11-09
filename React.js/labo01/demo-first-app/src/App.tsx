import './App.css'

const App = () => {
  // let numbers: number[] = [];
  // for (let i = 1; i <= 5; i++) {
  //   numbers.push(i);
  // }

  let numbers: number[] = Array.from({ length: 10}, (_, index) => index + 1)

  return (
    <>
      <ul>
        {
          numbers.map((number, index) => <li key={(index)}>{number}</li>)
        }
      </ul>
    </>
  )
}

export default App
